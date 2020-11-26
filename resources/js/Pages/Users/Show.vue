<template>
  <div>
    <div class="relative p-4 bg-white shadow-xl rounded-xl">
      <img src="/img/gemara.jpg" class="relative z-0 object-cover w-full h-48 rounded-lg" />
      <avatar :user="user" size="xl" class="relative z-10 block mr-10 -mt-10 text-white shadow-solid" />

      <inertia-link
        v-if="currentUser && user.id == currentUser.id"
        :href="route('users.edit', user.id)"
        class="relative z-10 float-left ml-6 -mt-5 btn-outline"
      >
        ערוך פרופיל
      </inertia-link>

      <div class="p-4">
        <h1 class="text-lg font-extrabold">
          {{ user.name }}
          <icon v-if="user.is_approved" name="badge-check" class="inline w-5 text-blue-500" />
        </h1>
        <p class="mt-1 text-sm text-gray-600">
          <span>
            <icon name="calendar" class="inline w-4 text-gray-500" />
            הצטרף {{ new Date(user.created_at).toLocaleDateString() }}</span
          >
        </p>
      </div>
      <div class="flex items-center justify-end">
        <button
          @click="tab = 'posts'"
          :class="[tab == 'posts' ? 'focus:shadow-outline-green shadow-outline-green' : 'opacity-25']"
          class="inline-block px-6 py-3 text-center transition bg-green-100 rounded-lg"
        >
          <h3 class="text-3xl font-bold text-green-700">{{ $page.counts.posts }}</h3>
          <p class="mt-1 text-green-400">פנינים</p>
        </button>
        <button
          @click="tab = 'comments'"
          :class="[tab == 'comments' ? 'focus:shadow-outline-orange shadow-outline-orange' : 'opacity-25']"
          class="inline-block px-6 py-3 mr-2 text-center transition bg-orange-100 rounded-lg"
        >
          <h3 class="text-3xl font-bold text-orange-700">{{ $page.counts.comments }}</h3>
          <p class="mt-1 text-orange-400">תגובות</p>
        </button>
      </div>
    </div>

    <portal-target name="overlay" slim />
    <transition name="postList" appear>
      <posts-list v-if="tab == 'posts'" :posts="postsList">
        <infinite-loading @infinite="loadMore">
          <template v-slot:spinner>
            <loader class="mt-16" />
          </template>
          <template v-slot:no-more><span></span></template>
          <template v-slot:no-results><span></span></template>
        </infinite-loading>
      </posts-list>
      <comments-list v-else-if="tab == 'comments'" :comments="comments" />
    </transition>
  </div>
</template>

<script>
import Layout from '../../Layouts/App';
import PostsList from '@/components/PostsList';
import CommentsList from '@/components/CommentsList';
import Avatar from '../../components/ui/Avatar';
import Loader from '@/components/ui/Loader';
import InfiniteLoading from 'vue-infinite-loading';

export default {
  name: 'ShowUser',
  props: ['user', 'posts', 'comments'],
  layout: Layout,
  components: { Avatar, PostsList, CommentsList, InfiniteLoading, Loader },
  data: (vm) => ({
    tab: 'posts',
    postsList: vm.posts.data,
    page: 1,
  }),
  computed: {
    currentUser() {
      return this.$page.auth.user;
    },
  },
  methods: {
    async loadMore($state) {
      console.log('Loading more...');
      const { data } = await this.$axios.get(this.route('users.show', { page: this.page + 1 }));
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
