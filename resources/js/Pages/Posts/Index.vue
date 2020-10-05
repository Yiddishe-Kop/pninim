<template>
  <div>
    <write-post v-if="$page.auth.user" />
    <div v-else class="py-12 text-center bg-gray-200 shadow-inner rounded-xl">
      <p class="text-3xl text-gray-700 font-siddur">רוצה גם לכתוב את החידושים שלך?</p>
      <inertia-link href="/register" class="my-4 btn-outline">
        הירשם
      </inertia-link>
      <p class="text-xs text-gray-600">לוקח בערך 5 שניות</p>
    </div>

    <portal-target name="overlay" slim />

    <transition name="postList" appear>
      <posts-list :posts="posts" />
    </transition>

    <portal to="right-sidebar">
      <toolbar />
    </portal>
  </div>
</template>

<script>
import Layout from '@/Layouts/App';
import PostsList from '@/components/PostsList';
import WritePost from '@/components/WritePost';
import Toolbar from '@/components/Toolbar';

export default {
  name: 'Home',
  layout: Layout,
  props: ['posts'],
  components: { PostsList, WritePost, Toolbar },
};
</script>
