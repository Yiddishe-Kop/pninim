<template>
  <form
    @submit.prevent="submit"
    class="relative flex items-start justify-center space-y-2 bg-white shadow-xl rounded-xl"
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
      ></textarea>
      <textarea
        v-model="post.content"
        v-auto-resize
        placeholder="מה אתה מחדש היום?"
        class="text-lg content h-36 font-sbl"
      ></textarea>
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
      showModal: true,
      post: {},
      user: this.$page.auth.user,
    };
  },
  computed: {
    passesValidation() {
      return ['title', 'content', 'ref'].filter(f => !!this.post[f]).length == 3;
    },
  },
  watch: {
    'post.title': {
      handler: function(title) {
        this.showModal = !title;
      },
    },
  },
  methods: {
    async handleSelection(e) {
      this.post.ref = e.ref;
      this.post.title = e.text;
      this.showModal = false;
      await this.$nextTick();
      this.$refs.titleInput.dispatchEvent(new Event('change')); // trigger event to resize textarea
    },
    async submit() {
      this.passesValidation && (await this.$inertia.post(this.route('posts.store'), this.post));
      this.post = {};
    },
  },
};
</script>
