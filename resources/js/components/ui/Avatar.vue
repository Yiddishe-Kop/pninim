<template>
  <img v-if="user.photo_url" :src="user.photo_url" :alt="user.name" class="w-12 h-12 bg-gray-200 rounded-full" />

  <span v-else class="inline-flex items-center justify-center w-10 h-10 bg-gray-500 rounded-full">
    <span class="font-medium leading-none text-white">{{ initials(user.name) }}</span>
  </span>
</template>

<script>
export default {
  name: 'Avatar',
  props: ['user'],
  methods: {
    initials(name) {
      return name.split(' ').reduce((acc, val) => {
        if (val) {
          return (acc += val[0]);
        } else {
          return acc;
        }
      }, '');
    },
  },
};
</script>

<style>
</style>
