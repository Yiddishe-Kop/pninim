<template>
  <div class="flex flex-col min-h-screen" dir="rtl">
    <header class="sticky top-0 z-20 flex items-center justify-between px-6 py-2 text-gray-200 bg-gray-700">
      <div class="flex items-center">
        <logo class="w-8" />
      </div>
      <div v-if="$page.auth.user" class="flex items-center justify-between p-4 text-sm md:py-0 md:px-12 md:text-md">
        <div class="mt-1 mr-4">{{ $page.auth.user.name }}</div>
        <dropdown class="mr-2" placement="bottom-start">
          <div class="flex items-center cursor-pointer select-none group">
            <div
              class="text-gray-700 group-hover:text-blue-600 p-0.5 transition rounded-full focus:text-blue-600 whitespace-no-wrap"
              :class="{ 'border-4 border-blue-300 hover:border-blue-400': $page.auth.user.is_admin }"
            >
              <avatar :user="$page.auth.user" />
            </div>
          </div>
          <div slot="dropdown" class="mt-2 overflow-hidden text-sm text-gray-900 bg-white rounded shadow-xl">
            <div class="block px-6 py-2 mb-1 bg-blue-100">
              <span class="block text-xs leading-3 text-blue-400">שלום רב,</span>
              <span class="block mt-1 font-bold leading-none text-blue-600 text-md">{{ $page.auth.user.name }}</span>
            </div>
            <inertia-link
              class="block px-6 py-2 rounded-none hover:bg-blue-500 hover:text-white"
              :href="route('users.edit', $page.auth.user.id)"
            >
              הפרופיל שלי
            </inertia-link>
            <inertia-link
              v-if="$page.auth.user.is_admin"
              class="block px-6 py-2 rounded-none hover:bg-blue-500 hover:text-white"
              :href="route('users.index')"
            >
              ניהול משתמשים
            </inertia-link>
            <inertia-link
              class="block px-6 py-2 rounded-none hover:bg-blue-500 hover:text-white"
              :href="route('logout')"
              method="post"
            >
              יציאה
            </inertia-link>
          </div>
        </dropdown>
        <portal-target name="dropdown" slim />
      </div>
      <inertia-link v-else :href="route('login')">
        <icon name="user-circle" class="w-8 h-8 text-gray-100" />
      </inertia-link>
    </header>
    <main class="flex-1 w-full">
      <div class="sticky top-0 z-0 bg-gray-100 h-96"></div>
      <div class="relative z-10 grid items-start max-w-5xl gap-8 px-2 py-12 mx-auto md:grid-cols-10 -mt-96">
        <aside class="sticky p-2 overflow-hidden bg-gray-200 rounded-lg shadow-inner md:col-span-2 top-24">
          <portal-target name="right-sidebar" />
        </aside>
        <section class="md:col-span-6">
          <slot />
        </section>
        <aside class="sticky p-2 overflow-hidden bg-gray-200 rounded-lg shadow-inner md:col-span-2 top-24">
          <portal-target name="left-sidebar" />
        </aside>
      </div>
    </main>
    <footer class="flex items-center justify-between px-6 py-4 text-xs text-gray-200 bg-gray-700">
      <div>&copy; {{ new Date().getFullYear() }} by Yehuda Neufeld</div>
      <div class="flex flex-row-reverse items-center px-4 py-2 text-gray-900 bg-white rounded">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/The_Sefaria_Project.svg/64px-The_Sefaria_Project.svg.png"
          alt="Sefaria"
          class="-m-1 w-7"
        />
        <div class="ml-2 text-left">
          <div class="text-gray-600">Powered by</div>
          <a href="https://www.sefaria.org.il/?home" target="_blank" class="mt-0.5 text-xl font-bold">Sefaria</a>
        </div>
      </div>
    </footer>
    <notification />
    <modal />
  </div>
</template>

<script>
import Logo from '@/components/ui/Logo';
import Dropdown from '@/components/ui/Dropdown';
import Avatar from '@/components/ui/Avatar';
import Notification from '@/components/ui/Notification';
import Modal from '@/components/ui/Modal';

export default {
  name: 'Layout',
  components: { Logo, Dropdown, Avatar, Notification, Modal },
};
</script>
