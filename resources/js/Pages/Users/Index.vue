<template>
  <div>
    <ul class="p-2 space-y-2 bg-gray-200">
      <li v-for="user in users" :key="user.id" class="bg-white">
        <inertia-link :href="route('users.show', user.id)" class="block p-2">
          <div class="relative inline-block">
            <avatar :user="user" />
            <icon
              v-if="user.is_admin"
              name="badge-check"
              class="absolute top-0 w-5 -mt-1 -mr-1 text-green-500 bg-white bg-opacity-75 rounded-full"
            />
          </div>
          <span>{{ user.name }}</span>
        </inertia-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Layout from '@/Layouts/App';
import Avatar from '@/components/ui/Avatar';

export default {
  name: 'UsersIndex',
  layout: Layout,
  components: { Avatar },
  props: ['users'],
};
</script>
