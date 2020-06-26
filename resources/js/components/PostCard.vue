<template>
  <article class="relative bg-white shadow-md rounded-xl">
    <div class="flex justify-between p-3 text-gray-100 bg-gray-800 rounded-t-xl">
      <div class="flex items-center">
        <traffic-lights class="mr-1" />
        <icon name="book" class="w-4 mr-4 text-gray-300" />
        <span class="mr-2 font-light">{{ post.ref }}</span>
      </div>
      <div class="flex items-center">
        <avatar :user="post.user" size="sm" />
        <span class="mr-1.5 text-xs">{{ post.user.name }}</span>
        <icon v-if="post.user.is_approved" name="badge-check" class="w-5 mr-1 text-teal-300" />
        <icon name="selector" class="w-5 mr-2 text-gray-300" />
      </div>
    </div>
    <section class="flex overflow-hidden rounded-b-xl">
      <nav class="flex flex-col items-center justify-start p-3 pb-8 space-y-2 bg-gray-300">
        <icon name="user-circle" class="text-gray-400 w-7" />
        <icon name="chat" class="text-gray-400 w-7" />
        <icon name="calendar" class="text-gray-400 w-7" />
      </nav>
      <div class="flex-1 p-4 pb-8">
        <h2 class="pt-2 mb-6 text-4xl font-bold leading-7 text-justify text-gray-600 font-siddur">
          {{ post.title }}
        </h2>
        <div class="space-y-2 text-lg leading-snug font-sbl" v-html="format(post.content)"></div>
      </div>
    </section>
    <div class="absolute bottom-0 flex items-center justify-between transform translate-y-1/2 right-8 left-8">
      <button v-if="canEdit(post)" class="p-2 text-gray-100 bg-gray-800 rounded-full shadow-lg">
        <icon name="edit" class="w-5 h-5" />
      </button>
      <span v-else></span>
      <button v-if="canEdit(post)" @click="destroy" class="p-2 text-gray-100 bg-gray-800 rounded-full shadow-lg">
        <icon name="trash" class="w-5 h-5" />
      </button>
      <div v-else class="flex items-center text-gray-100 bg-gray-800 rounded-full shadow-lg">
        <button class="p-2 group">
          <icon name="thumb-up" class="w-5 text-gray-400 group-hover:text-gray-100" />
        </button>
        <button class="p-2 pr-0 group">
          <icon name="thumb-down" class="w-5 text-gray-400 group-hover:text-gray-100" />
        </button>
      </div>
    </div>
  </article>
</template>

<script>
import TrafficLights from './ui/TrafficLights';
import Avatar from './ui/Avatar';

export default {
  name: 'PostCard',
  props: ['post'],
  components: { TrafficLights, Avatar },
  methods: {
    format(content) {
      return content
        .replace(/\*{2}(.+?)\*{2}/g, '<strong class="text-xl text-gray-900 font-siddur">$1</strong>') // **bold**
        .replace(/(\(.+?\))/g, '<small class="text-sm text-gray-700">$1</small>') // סוגריים
        .split('\n')
        .map(p => `<p>${p}</p>`)
        .join('');
    },
    canEdit(post) {
      return this.$page.auth.user && this.$page.auth.user.id == post.user_id;
    },
    destroy() {
      this.$inertia.delete(this.route('posts.destroy', this.post.id));
    },
  },
};
</script>
