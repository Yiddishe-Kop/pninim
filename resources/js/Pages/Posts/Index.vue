<template>
  <div class="max-w-lg px-2 py-6 mx-auto text-teal-800">
    <write-post v-if="$page.auth.user" />
    <div v-else class="py-12 mt-6 text-center bg-gray-50 rounded-xl">
      <p class="text-3xl text-gray-700 font-siddur">רוצה גם לכתוב את החידושים שלך?</p>
      <inertia-link
        href="/register"
        class="inline-block px-6 py-2 my-4 font-bold text-gray-800 border-2 border-gray-800 rounded-full hover:bg-gray-200"
      >
        הירשם
      </inertia-link>
      <p class="text-xs text-gray-600">לוקח בערך 5 שניות</p>
    </div>
    <transition-group v-if="posts.length" name="postList" appear class="block my-12 space-y-8">
      <post-card v-for="post in posts" :key="post.id" :post="post" />
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
};
</script>
