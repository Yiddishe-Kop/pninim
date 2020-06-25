<template>
  <div class="px-6 py-12 text-center text-teal-800 bg-teal-300 rounded">
    <h1 class="text-3xl font-black">{{ $page.message }}</h1>
    <p class="mt-4 text-teal-50">Watch this space! 💡</p>

    <ul v-if="posts.length" class="px-2 py-6 my-12 space-y-2 bg-gray-500 rounded">
      <li v-for="post in posts" :key="post.id" class="py-1 bg-gray-400 rounded">
        <h3 class="text-xl">{{ post.title }}</h3>
        <p>{{ post.content }}</p>
        <button @click="destroy(post.id)" class="text-red-600 bg-red-100 form-input">delete</button>
      </li>
    </ul>
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

export default {
  name: "Home",
  layout: Layout,
  props: ["posts"],
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
