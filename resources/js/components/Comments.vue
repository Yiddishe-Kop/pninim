<template>
  <div class="relative z-0 p-3 bg-white rounded-md shadow">
    <span class="absolute top-0 bottom-0 bg-gray-400 border-l-2 border-teal-500 right-7"></span>
    <ul class="space-y-2">
      <comment v-for="comment in comments" :comment="comment" :key="comment.id" class="relative"/>
    </ul>
    <slot/>
  </div>
</template>

<script>
import Comment from './Comment'

export default {
  name: 'Comments',
  props: ['comments'],
  components: { Comment }
}
</script>
