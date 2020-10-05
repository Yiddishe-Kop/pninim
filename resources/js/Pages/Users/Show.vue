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
        <div class="inline-block px-6 py-3 text-center bg-green-100 rounded-lg">
          <h3 class="text-3xl font-bold text-green-700">{{ $page.counts.posts }}</h3>
          <p class="mt-1 text-green-400">פנינים</p>
        </div>
      </div>
    </div>

    <portal-target name="overlay" slim />
    <posts-list :posts="posts.data" />
  </div>
</template>

<script>
import Layout from '../../Layouts/App';
import PostsList from '@/components/PostsList';
import Avatar from '../../components/ui/Avatar';

export default {
  name: 'ShowUser',
  props: ['user', 'posts'],
  layout: Layout,
  components: { Avatar, PostsList },
  computed: {
    currentUser() {
      return this.$page.auth.user;
    },
  },
};
</script>
