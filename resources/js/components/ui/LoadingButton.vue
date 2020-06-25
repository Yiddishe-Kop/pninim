<template>
  <button v-if="!progress" :disabled="loading" class="flex items-center">
    <div v-if="loading" class="mr-2 btn-spinner" />
    <slot />
  </button>
  <progress-circle v-else :progress="progress" />
</template>

<script>
import ProgressCircle from "@/components/ui/ProgressCircle";

export default {
  props: {
    loading: Boolean,
    progress: Number
  },
  components: {
    ProgressCircle
  }
};
</script>
