<template>
  <div class="max-w-lg px-2 py-6 mx-auto text-teal-800">
    <write-post v-if="$page.auth.user" />

    <transition-group v-if="posts.length" name="postList" appear class="block my-12 space-y-8">
      <post-card v-for="post in posts" :key="post.id" :post="post" @destroy="destroy(post.id)" />
    </transition-group>
    <div v-else class="my-6">No posts yet 😬</div>
  </div>
</template>

<script>
import Layout from '@/Layouts/App';
import PostCard from '@/components/PostCard';
import WritePost from '@/components/WritePost';

export default {
  name: 'Home',
  layout: Layout,
  props: ['posts'],
  components: { PostCard, WritePost },
  methods: {
    destroy(postId) {
      this.$inertia.delete(this.route('posts.destroy', postId));
    },
  },
};
</script>
