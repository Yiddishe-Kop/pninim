<template>
  <article :class="{ 'z-50': mode == 'edit', 'opacity-25': post.deleted_at }" class="group">
    <portal to="overlay" v-if="mode == 'edit'">
      <transition name="fade">
        <div @click="mode = 'read'" class="fixed inset-0 z-10 bg-gray-500 bg-opacity-75"></div>
      </transition>
    </portal>

    <div :class="[expanded ? 'rounded-t-xl' : 'rounded-xl']" class="flex justify-between p-3 text-gray-100 bg-gray-800">
      <div class="flex items-center">
        <traffic-lights @red="() => (canEdit(post) ? destroy() : '')" @yellow="expanded = !expanded" class="mr-1" />
        <icon name="book" class="w-4 mr-4 text-gray-300" />
        <a :href="`https://torah.yiddishe-kop.com/torah/${post.ref}`" class="mr-2 font-light" target="_blank">
          {{ post.ref }}
        </a>
      </div>
      <div class="flex items-center">
        <inertia-link :href="route('users.show', post.user.id)" class="flex items-center">
          <avatar :user="post.user" size="sm" />
          <span class="mr-1.5 text-xs font-medium">{{ post.user.name }}</span>
          <icon v-if="post.user.is_approved" name="badge-check" class="w-5 mr-1 text-teal-300" />
        </inertia-link>
        <span class="mx-1 font-bold text-gray-400">&middot;</span>
        <span class="text-xs text-gray-400">{{ post.created_at }}</span>
        <button @click="expanded = !expanded" class="mr-2 text-gray-500 transition hover:text-gray-300">
          <icon name="selector" class="w-5" />
        </button>
      </div>
    </div>
    <section v-show="expanded" class="relative z-10 flex bg-white shadow-md rounded-b-xl">
      <nav class="flex flex-col items-center justify-start p-3 pb-8 space-y-2 text-gray-400 bg-gray-300 rounded-br-xl">
        <icon name="user-circle" class="w-7" />
        <icon name="chat" class="w-7" />
        <icon name="calendar" class="w-7" />
      </nav>
      <div class="relative flex-1 p-4 pb-8">
        <div v-if="mode == 'read'">
          <h2 class="pt-2 mb-6 text-4xl font-bold leading-7 text-justify text-gray-600 font-siddur">
            {{ post.title }}
          </h2>
          <div class="space-y-2 text-lg leading-snug font-sbl" v-html="format(post.content)"></div>
        </div>
        <div v-else class="pr-0 space-y-4">
          <textarea
            v-model="postEdit.title"
            placeholder="ציטוט מהגמרא..."
            class="h-20 text-2xl title font-siddur"
            v-auto-resize
          ></textarea>
          <textarea
            v-model="postEdit.content"
            placeholder="מה אתה מחדש היום?"
            class="text-lg content h-36 font-sbl"
            v-auto-resize
          ></textarea>
        </div>
      </div>
      <div
        v-show="expanded"
        class="absolute bottom-0 z-10 flex items-center justify-between transform translate-y-1/2 right-8 left-8"
      >
        <button
          v-if="canEdit(post)"
          @click="() => (post.deleted_at ? restore() : destroy())"
          class="p-2 text-gray-100 bg-gray-800 rounded-full shadow-lg"
          title="Restore"
        >
          <icon :name="post.deleted_at ? 'check-circle' : 'trash'" class="w-5 h-5" />
        </button>
        <inertia-link
          v-if="post.deleted_at"
          :href="route('posts.forceDelete', post.id)"
          method="delete"
          class="p-2 text-gray-100 bg-gray-800 rounded-full shadow-lg"
          title="Delete permanently"
        >
          <icon name="trash" class="w-5 h-5" />
        </inertia-link>
        <span v-else></span>
        <div class="flex items-center text-gray-100 bg-gray-800 rounded-full shadow-lg">
          <button
            v-if="canEdit(post)"
            @click="handleEdit"
            class="p-2 text-gray-100 bg-gray-800 rounded-full shadow-lg"
            title="Edit"
          >
            <icon :name="mode == 'read' ? 'edit' : 'check'" class="w-5 h-5" />
          </button>
          <component
            :is="canEdit(post) ? 'div' : 'InertiaLink'"
            preserve-state
            preserve-scroll
            :href="route('posts.react', post.id)"
            :data="{ reaction: 'Like' }"
            method="POST"
            class="p-2 pl-1 rounded-r-full group"
          >
            <span class="pr-1 text-xs font-black text-gray-500 transition group-hover:text-green-400">
              {{ likes }}
            </span>
            <icon name="thumb-up" class="inline w-5 text-gray-400 transition group-hover:text-gray-100" />
          </component>
          <component
            :is="canEdit(post) ? 'div' : 'InertiaLink'"
            preserve-state
            preserve-scroll
            :href="route('posts.react', post.id)"
            :data="{ reaction: 'Dislike' }"
            method="POST"
            class="p-2 pr-1 rounded-l-full group"
          >
            <icon name="thumb-down" class="inline w-5 text-gray-400 transition group-hover:text-gray-100" />
            <span class="text-xs font-black text-gray-500 transition group-hover:text-orange-400">
              {{ dislikes }}
            </span>
          </component>
        </div>
      </div>
    </section>

    <comments :comments="post.comments" class="pt-6 mx-4 -mt-2">
      <write-comment :post-id="post.id" class="relative mt-2" />
    </comments>
  </article>
</template>

<script>
import TrafficLights from './ui/TrafficLights';
import Comments from './Comments';
import WriteComment from './WriteComment';
import Avatar from './ui/Avatar';

export default {
  name: 'PostCard',
  props: {
    post: Object,
  },
  components: { TrafficLights, Avatar, Comments, WriteComment },
  data() {
    return {
      expanded: true,
      mode: 'read',
      postEdit: {
        title: this.post.title,
        content: this.post.content,
      },
    };
  },
  computed: {
    reactionTypes() {
      return this.$page.reactionTypes;
    },
    likes() {
      const likesReaction = this.post.love_reactant.reaction_counters.filter(
        (i) => this.reactionTypes[i.reaction_type_id].name == 'Like'
      );
      return likesReaction.length ? likesReaction[0].count : 0;
    },
    dislikes() {
      const dislikesReaction = this.post.love_reactant.reaction_counters.filter(
        (i) => this.reactionTypes[i.reaction_type_id].name == 'Dislike'
      );
      return dislikesReaction.length ? dislikesReaction[0].count : 0;
    },
  },
  methods: {
    format(content) {
      return content
        .replace(/\*{2}(.+?)\*{2}/g, '<strong class="text-xl leading-3 text-gray-900 font-siddur">$1</strong>') // **bold**
        .replace(/(\(.+?\))/g, '<small class="text-sm text-gray-700">$1</small>') // סוגריים
        .split('\n')
        .map((p) => `<p>${p}</p>`)
        .join('');
    },
    canEdit(post) {
      return this.$page.auth.user && this.$page.auth.user.id == post.user_id;
    },
    async handleEdit() {
      if (this.mode == 'read') {
        this.mode = 'edit';
      } else {
        await this.$inertia.put(this.route('posts.update', this.post.id), this.postEdit, {
          // this is amazing 👇
          preserveScroll: true,
          preserveState: true,
        });
        this.mode = 'read';
      }
    },
    destroy() {
      console.log(`???`);
      this.$inertia.delete(this.route('posts.destroy', this.post.id), {
        preserveScroll: true,
        preserveState: true,
      });
    },
    restore() {
      console.log(`!!!`);
      this.$inertia.put(this.route('posts.restore', this.post.id), {
        preserveScroll: true,
        preserveState: true,
      });
    },
  },
};
</script>
