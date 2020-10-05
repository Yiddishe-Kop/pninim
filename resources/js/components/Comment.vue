<template>
  <div class="p-2 bg-gray-100 rounded shadow-inner group">
    <p>
      <inertia-link :href="route('users.show', comment.user.id)" class="rounded-full">
        <avatar :user="comment.user" size="sm" />
      </inertia-link>
      {{ comment.content }}
    </p>
    <write-comment :post-id="comment.post_id" :parent-id="comment.id" class="-mt-6" />
    <comments v-if="comment.replies && comment.replies.length" :comments="comment.replies" class="mt-2 mr-2" />
    <div v-else-if="comment.repliesCount" class="mt-2 text-center">
      <button class="px-2 py-1 text-xs font-semibold text-blue-800 transition bg-blue-100 hover:bg-blue-200">
        טען {{ comment.repliesCount }} {{ comment.repliesCount != 1 ? 'תגובות' : 'תגובה' }}...
      </button>
    </div>
  </div>
</template>

<script>
import WriteComment from './WriteComment';
import Avatar from './ui/Avatar';

export default {
  name: 'Comment',
  components: {
    WriteComment,
    Comments: () => import('./Comments'),
    Avatar,
  },
  props: ['comment'],
};
</script>
