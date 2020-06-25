<template>
  <article class="relative bg-white rounded-lg shadow-md">
    <div class="p-2 text-gray-100 bg-gray-800 rounded-t-lg">
      <h4>{{ post.ref }}</h4>
    </div>
    <div class="flex">
      <div></div>
      <div class="flex-1 p-4">
        <h2 class="mb-3 text-2xl font-bold text-gray-600">{{ post.title }}</h2>
        <p>{{ post.content }}</p>
      </div>
    </div>
    <div class="absolute bottom-0 flex items-center justify-between transform translate-y-1/2 right-8 left-8">
      <button class="p-2 text-gray-100 bg-gray-800 rounded-full shadow-lg">
        <icon name="edit" class="w-5 h-5" />
      </button>
      <button @click="$emit('destroy')" class="p-2 text-gray-100 bg-gray-800 rounded-full shadow-lg">
        <icon name="trash" class="w-5 h-5" />
      </button>
    </div>
  </article>
</template>

<script>
export default {
  name: 'PostCard',
  props: ['post'],
};
</script>

<style>
</style>
