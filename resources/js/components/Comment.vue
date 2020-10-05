<template>
  <li class="p-2 bg-gray-100 rounded shadow-inner group">
    <comment-content :comment="comment" />
    <write-comment :post-id="comment.post_id" :parent-id="comment.id" :can-delete="canEdit()" class="-mt-6" />
    <comments v-if="replies && replies.length" :comments="replies" class="mt-2 mr-2" style="min-width: 100px" />
    <div v-else-if="comment.repliesCount" class="mt-2 text-center">
      <button @click="loadReplies" class="px-2 py-1 text-xs font-semibold text-blue-800 transition bg-blue-100 hover:bg-blue-200">
        טען {{ comment.repliesCount }} {{ comment.repliesCount != 1 ? 'תגובות' : 'תגובה' }}...
      </button>
    </div>
  </li>
</template>

<script>
import WriteComment from './WriteComment';
import CommentContent from './CommentContent';

export default {
  name: 'Comment',
  components: {
    WriteComment,
    Comments: () => import('./Comments'),
    CommentContent
  },
  props: ['comment'],
  data: vm => ({
    replies: vm.comment.replies
  }),
  methods: {
    canEdit() {
      return this.$page.auth.user && this.$page.auth.user.id == this.comment.user_id;
    },
    async loadReplies() {
      const { data } = await  this.$axios.get(this.route('comment.replies', this.comment.id))
      this.replies = data
    }
  }
};
</script>
