<template>
  <form
    @submit.prevent="submit"
    class="relative flex items-start justify-center space-y-2 bg-white shadow-xl rounded-xl"
  >
    <inertia-link :href="route('users.show', user.id)" class="p-4">
      <avatar :user="user" />
    </inertia-link>
    <div class="flex-1 p-3 pr-0">
      <textarea
        v-model="post.title"
        placeholder="ציטוט מהגמרא..."
        class="h-20 pt-2 text-2xl title font-siddur"
      ></textarea>
      <textarea v-model="post.content" placeholder="מה אתה מחדש היום?" class="text-lg content h-36 font-sbl"></textarea>
      <input type="text" v-model="post.ref" placeholder="מראה מקום" class="text-sm ref" />
      <button
        type="submit"
        :class="[passesValidation ? 'bg-gray-800 text-gray-400 hover:text-gray-100' : 'bg-gray-500 text-gray-300']"
        class="absolute bottom-0 px-5 py-2 font-bold transform translate-y-1/2 rounded-full left-8"
      >
        שלח
      </button>
    </div>
  </form>
</template>

<script>
import Avatar from './ui/Avatar';

export default {
  name: 'WritePost',
  components: { Avatar },
  data() {
    return {
      post: {},
      user: this.$page.auth.user,
    };
  },
  computed: {
    passesValidation() {
      return ['title', 'content', 'ref'].filter(f => !!this.post[f]).length == 3;
    },
  },
  methods: {
    async submit() {
      this.passesValidation && (await this.$inertia.post(this.route('posts.store'), this.post));
      this.post = {};
    },
  },
};
</script>
