<template>
  <form
    @submit.prevent="submit"
    class="relative flex items-start justify-center space-y-2 bg-white shadow-xl rounded-xl"
    @mouseenter="mouseOverWriteForm = true"
    @mouseleave="mouseOverWriteForm = false"
  >
    <inertia-link :href="route('users.show', user.id)" class="m-4 rounded-full">
      <avatar :user="user" />
    </inertia-link>
    <div class="flex-1 p-3 pr-0 space-y-4">
      <textarea
        v-model="post.title"
        v-auto-resize
        placeholder="ציטוט מהגמרא..."
        class="h-20 pt-2 text-2xl title font-siddur"
        ref="titleInput"
        @focus="mouseOverWriteForm = true"
      ></textarea>
      <p v-if="$page.errors.title" class="text-xs text-red-500">{{ $page.errors.title[0] }}</p>
      <textarea
        v-model="post.content"
        v-auto-resize
        placeholder="מה אתה מחדש היום?"
        class="text-lg content h-36 font-sbl"
      ></textarea>
      <p v-if="$page.errors.content" class="text-xs text-red-500">{{ $page.errors.content[0] }}</p>
      <input type="text" v-model="post.ref" placeholder="מראה מקום" class="text-sm ref" />
      <button
        type="submit"
        :class="[passesValidation ? 'bg-gray-800 text-gray-400 hover:text-gray-100' : 'bg-gray-500 text-gray-300']"
        class="absolute bottom-0 px-5 py-2 font-bold transform translate-y-1/2 rounded-full left-8"
      >
        שלח
      </button>
      <transition name="modal-fade">
        <source-select-modal
          v-show="showModal"
          @select="handleSelection"
          class="absolute left-0 right-0 -mx-4 top-12"
        />
      </transition>
    </div>
  </form>
</template>

<script>
import Avatar from './ui/Avatar';
import SourceSelectModal from './SourceSelectModal';

export default {
  name: 'WritePost',
  components: { Avatar, SourceSelectModal },
  data() {
    return {
      post: {
        title: this.$page.old.title || '',
        ref: this.$page.old.ref || '',
        content: this.$page.old.content || '',
      },
      user: this.$page.auth.user,
      mouseOverWriteForm: false,
    };
  },
  computed: {
    passesValidation() {
      return ['title', 'content', 'ref'].filter((f) => !!this.post[f]).length == 3;
    },
    showModal() {
      if (!this.mouseOverWriteForm || this.post.title) return false;
      return !this.post.title || /^\s*$/.test(this.post.title);
    },
  },
  methods: {
    async handleSelection(e) {
      this.post.ref = e.ref;
      this.$set(this.post, 'title', e.text);
      console.log(e, this.post.title);
      await this.$nextTick();
      this.$refs.titleInput.dispatchEvent(new Event('change')); // trigger event to resize textarea
    },
    async submit() {
      this.passesValidation && (await this.$inertia.post(this.route('posts.store'), this.post));
      // this.post = {};
    },
  },
  async mounted() {
    await this.$nextTick();
    this.$refs.titleInput.focus();
  },
};
</script>
