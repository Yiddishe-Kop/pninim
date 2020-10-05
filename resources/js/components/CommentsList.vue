<template>
  <div class="relative z-0 my-8">
    <ul class="my-8 space-y-3">
      <div v-for="comment in comments" :key="comment.id" class="p-3 bg-white rounded-md shadow">
        <!-- Parent -->
        <comment-content :comment="comment.parent" />
        <!-- Comment -->
        <comment :comment="comment" class="relative mt-2" />
      </div>
    </ul>
  </div>
</template>

<script>
import Comment from './Comment';
import CommentContent from './CommentContent';

export default {
  name: 'CommentsList',
  props: ['comments'],
  components: { Comment, CommentContent },
};
</script>
