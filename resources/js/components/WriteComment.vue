<template>
  <div>
    <div class="flex justify-between">
      <i></i>
      <span>
        <button
          v-if="canDelete"
          @click="destroy"
          title="מחיקת תגובה"
          class="p-0.5 text-sm bg-gray-100 bg-opacity-75 text-gray-400 hover:text-red-700 transition"
        >
          <icon name="trash" class="w-4" />
        </button>
        <button
          @click="reply = !reply"
          title="הגב"
          class="p-0.5 text-sm bg-gray-100 bg-opacity-75 text-gray-400 hover:text-blue-700 transition"
        >
          <icon name="chat-alt" class="w-4" />
        </button>
      </span>
    </div>
    <formulate-form v-if="reply" @submit="submit" class="mt-4">
      <formulate-input
        v-model="values.content"
        type="textarea"
        placeholder="ההערה שלך..."
        validation="required|max:2048"
        :validation-messages="{ required: 'נא לכתוב תגובה 👆' }"
        class="font-sbl"
      ></formulate-input>
      <div class="mt-1 text-left">
        <button
          type="submit"
          class="px-2 py-1 text-sm font-bold text-blue-800 transition bg-blue-100 hover:bg-blue-200"
        >
          שלח
        </button>
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
    canDelete: {
      type: Boolean,
      default: false,
    },
  },
  data: (vm) => ({
    values: {},
    reply: false,
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
      ).then(() => this.reply = false);
    },
    destroy() {
      this.$inertia.delete(this.route('comment.destroy', this.parentId), {
        preserveState: true,
        preserveScroll: true,
      });
    },
  },
};
</script>

<style>
</style>
