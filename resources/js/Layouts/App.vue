<template>
  <div class="flex flex-col min-h-screen" dir="rtl">
    <header class="flex items-center justify-between px-6 py-2 text-gray-200 bg-gray-700">
      <portal-target name="dropdown" slim />
      <span class="text-2xl font-bold">פנינים</span>
      <div v-if="$page.auth.user" class="flex items-center justify-between p-4 text-sm md:py-0 md:px-12 md:text-md">
        <div class="mt-1 mr-4">{{ $page.auth.user.name }}</div>
        <dropdown class="mt-1" placement="bottom-start">
          <div class="flex items-center cursor-pointer select-none group">
            <div
              class="text-gray-700 group-hover:text-teal-600 p-0.5 transition rounded-full focus:text-teal-600 mr-1 whitespace-no-wrap"
              :class="{ 'border-4 border-teal-300 hover:border-teal-400': $page.auth.user.is_admin }"
            >
              <avatar :user="$page.auth.user" />
            </div>
          </div>
          <div slot="dropdown" class="mt-2 overflow-hidden text-sm text-gray-900 bg-white rounded shadow-xl">
            <div class="block px-6 py-2 mb-1 bg-teal-100">
              <span class="block text-xs leading-3 text-teal-400">Welcome,</span>
              <span class="block mt-1 font-bold leading-none text-teal-600 text-md">{{ $page.auth.user.name }}</span>
            </div>
            <inertia-link
              class="block px-6 py-2 hover:bg-teal-500 hover:text-white"
              :href="route('users.edit', $page.auth.user.id)"
              >My Profile</inertia-link
            >
            <inertia-link
              v-if="$page.auth.user.is_admin"
              class="block px-6 py-2 hover:bg-teal-500 hover:text-white"
              :href="route('users.index')"
              >Manage Users</inertia-link
            >
            <inertia-link
              class="block px-6 py-2 hover:bg-teal-500 hover:text-white"
              :href="route('logout')"
              method="post"
              >Logout</inertia-link
            >
          </div>
        </dropdown>
      </div>
      <inertia-link v-else :href="route('login')">
        <icon name="user-circle" class="w-8 h-8 text-gray-100" />
      </inertia-link>
    </header>
    <main class="flex-1 w-full">
      <slot />
    </main>
    <footer class="px-6 py-4 text-xs text-center text-gray-200 bg-gray-700">
      &copy; {{ new Date().getFullYear() }} by Yehuda Neufeld
    </footer>
  </div>
</template>

<script>
import Dropdown from '@/components/ui/Dropdown';
import Avatar from '@/components/ui/Avatar';

export default {
  name: 'Layout',
  components: { Dropdown, Avatar },
};
</script>

<style>
</style>
