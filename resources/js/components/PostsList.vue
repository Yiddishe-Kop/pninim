<template>
  <transition-group v-if="posts.length" name="postList" appear class="block my-12 space-y-8">
    <post-card v-for="post in posts" :key="post.id" :post="post" />
  </transition-group>
  <div v-else class="my-6 text-center">No posts yet 😬</div>
</template>

<script>
import PostCard from '@/components/PostCard';

export default {
  name: 'PostsList',
  props: ['posts'],
  components: { PostCard },
};
</script>

<style>
</style>
