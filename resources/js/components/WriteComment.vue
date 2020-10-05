<template>
  <div>
    <div class="flex justify-between">
      <i></i>
      <button @click="reply = !reply" title="הגב" class="p-0.5 text-sm text-gray-400 hover:text-gray-700 transition">
        <icon name="chat-alt" class="w-4" />
      </button>
    </div>
    <formulate-form v-if="reply" @submit="submit" class="mt-4">
      <formulate-input
        v-model="values.content"
        type="textarea"
        placeholder="ההערה שלך..."
        v-auto-resize
        validation="required|max:2048"
        name="הערה"
      ></formulate-input>
      <div class="mt-1 text-left">
        <button type="submit" class="px-2 py-1 text-sm font-bold text-blue-800 transition bg-blue-100 hover:bg-blue-200">שלח</button>
      </div>
    </formulate-form>
  </div>
</template>

<script>
export default {
  name: 'WriteComment',
  props: {
    postId: Number,
    parentId: {
      type: Number,
      default: null,
    },
  },
  data: (vm) => ({
    values: {},
    reply: false
  }),
  methods: {
    submit() {
      this.$inertia.post(
        this.route('comments.store', this.postId),
        {
          content: this.values.content,
          parent_id: this.parentId,
        },
        {
          preserveScroll: true,
        }
      );
    },
  },
};
</script>

<style>
</style>
