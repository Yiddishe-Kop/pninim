<template>
  <div>
    <write-post v-if="$page.auth.user" />
    <div v-else class="py-12 text-center bg-gray-200 shadow-inner rounded-xl">
      <p class="text-3xl text-gray-700 font-siddur">רוצה גם לכתוב את החידושים שלך?</p>
      <inertia-link href="/register" class="my-4 btn-outline"> הירשם </inertia-link>
      <p class="text-xs text-gray-600">לוקח בערך 5 שניות</p>
    </div>

    <portal-target name="overlay" slim />

    <transition name="postList" appear>
      <posts-list :posts="postsList">
        <infinite-loading @infinite="loadMore">
          <template v-slot:spinner>
            <loader class="mt-16" />
          </template>
          <template v-slot:no-more><span></span></template>
          <template v-slot:no-results><span></span></template>
        </infinite-loading>
      </posts-list>
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
import Loader from '@/components/ui/Loader';
import InfiniteLoading from 'vue-infinite-loading';

export default {
  name: 'Home',
  layout: Layout,
  props: ['posts'],
  components: { PostsList, WritePost, Toolbar, InfiniteLoading, Loader },
  data() {
    return {
      postsList: this.posts.data,
      page: 1,
    };
  },
  methods: {
    async loadMore($state) {
      console.log('Loading more...');
      const { data } = await this.$axios.get(this.route('home', { page: this.page + 1 }));
      if (!data.posts.data.length) {
        $state.complete();
      } else {
        console.log(data.posts.data);
        this.page++;
        this.postsList.push(...data.posts.data);
        $state.loaded();
      }
    },
  },
};
</script>
