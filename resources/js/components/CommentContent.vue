<template>
  <p class="font-sbl group" :class="{ 'text-sm': comment.content.length > 50 }">
    <inertia-link
      :href="route('users.show', comment.user.id)"
      class="inline-block ml-2 rounded-full"
      :class="{ 'float-right': comment.content.length > 50 }"
    >
      <avatar :user="comment.user" size="sm" />
    </inertia-link>
    <span class="leading-tight">{{ comment.content }}</span>
    <span class="block clear-right mt-1 font-sans text-xs text-gray-400 transition group-hover:text-blue-500">{{ comment.created_at }}</span>
  </p>
</template>

<script>
import Avatar from './ui/Avatar';

export default {
  name: 'CommentContent',
  props: ['comment'],
  components: { Avatar }
};
</script>
