<template>
  <div class="fixed left-8 right-8 bottom-8">
    <section
      class="flex items-center justify-between max-w-xl p-4 mx-auto text-sm font-bold text-gray-800 bg-white rounded-lg shadow-outline-teal"
    >
      <div class="flex items-center">
        <span>עובי</span>
        <input type="range" v-model="weight" min="100" max="900" class="mx-1.5" />
        <span class="text-teal-300">{{ weight }}</span>
      </div>
      <div class="flex items-center">
        <span>רוחב</span>
        <input type="range" v-model="width" min="100" max="900" class="mx-1.5" />
        <span class="text-teal-300">{{ width }}</span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Toolbar',
  data() {
    return {
      weight: 600,
      width: 100,
    };
  },
  watch: {
    weight(weight) {
      this.$emit('update:weight', weight);
    },
    width(width) {
      this.$emit('update:width', width);
    },
  },
};
</script>

<style>
</style>
