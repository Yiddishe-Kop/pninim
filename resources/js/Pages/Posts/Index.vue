<template>
  <div class="px-6 py-12 text-center text-teal-800 rounded bg-teal-50">
    <div v-if="posts.length" class="max-w-lg px-2 py-6 mx-auto my-12 space-y-6">
      <post-card v-for="post in posts" :key="post.id" :post="post" @destroy="destroy(post.id)" />
    </div>
    <div v-else class="my-6">No posts yet 😬</div>

    <form
      @submit.prevent="submit"
      class="flex flex-col items-center justify-center mt-10 space-y-2"
    >
      <p>Write your chiddush!</p>
      <input type="text" v-model="post.title" class="block form-input" />
      <textarea type="text" v-model="post.content" class="block form-input"></textarea>
      <button type="submit" class="block form-input">Post</button>
    </form>
  </div>
</template>

<script>
import Layout from "../../Layouts/App";
import PostCard from "../../components/PostCard";

export default {
  name: "Home",
  layout: Layout,
  props: ["posts"],
  components: { PostCard },
  data() {
    return {
      post: {}
    };
  },
  methods: {
    submit() {
      this.$inertia.post(this.route("posts.store"), this.post);
    },
    destroy(postId) {
      this.$inertia.delete(this.route("posts.destroy", postId));
    }
  }
};
</script>
