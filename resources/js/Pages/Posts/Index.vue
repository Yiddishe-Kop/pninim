<template>
  <div class="max-w-4xl px-6 py-12 mx-auto text-teal-800">
    <form
      v-if="$page.auth.user"
      @submit.prevent="submit"
      class="flex flex-col items-center justify-center mt-10 space-y-2"
    >
      <p>Write your chiddush!</p>
      <formulate-input type="text" v-model="post.title" :errors="$page.errors.title" label="כותרת" />
      <formulate-input type="text" v-model="post.ref" :errors="$page.errors.ref" label="מראה מקום" />
      <formulate-input type="textarea" v-model="post.content" :errors="$page.errors.content" label="התוכן" />
      <formulate-input type="submit" value="Post" />
    </form>

    <div v-if="posts.length" class="max-w-lg px-2 py-6 mx-auto my-12 space-y-8">
      <post-card v-for="post in posts" :key="post.id" :post="post" @destroy="destroy(post.id)" />
    </div>
    <div v-else class="my-6">No posts yet 😬</div>
  </div>
</template>

<script>
import Layout from '../../Layouts/App';
import PostCard from '../../components/PostCard';

export default {
  name: 'Home',
  layout: Layout,
  props: ['posts'],
  components: { PostCard },
  data() {
    return {
      post: {},
    };
  },
  methods: {
    submit() {
      this.$inertia.post(this.route('posts.store'), this.post);
    },
    destroy(postId) {
      this.$inertia.delete(this.route('posts.destroy', postId));
    },
  },
};
</script>
