<template>
  <img
    v-if="user.photoUrl"
    :src="user.photoUrl"
    :alt="user.name"
    class="bg-gray-200 rounded-full"
    :class="sizeClasses"
  />

  <span v-else :class="sizeClasses" class="inline-flex items-center justify-center bg-gray-500 rounded-full">
    <span :class="textSizeClass" class="font-medium leading-none text-white">{{ initials(user.name) }}</span>
  </span>
</template>

<script>
export default {
  name: 'Avatar',
  props: ['user', 'size'],
  computed: {
    sizeClasses() {
      const sizes = {
        sm: 'w-6 h-6',
        md: 'w-8 h-8',
        lg: 'w-10 h-10',
        xl: 'w-20 h-20',
      };
      return sizes[this.size] || sizes.lg;
    },
    textSizeClass() {
      const sizes = {
        sm: 'text-sm',
        md: 'text-md',
        lg: 'text-lg',
        xl: 'text-3xl',
      };
      return sizes[this.size] || sizes.lg;
    },
  },
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
