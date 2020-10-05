<template>
  <svg class="progress-ring" :width="size" :height="size">
    <circle
      class="text-blue-600"
      stroke="currentColor"
      :stroke-width="strokeWidth"
      fill="transparent"
      :r="radius"
      :cx="size / 2"
      :cy="size / 2"
      :style="circleStyle"
    />
  </svg>
</template>

<script>
export default {
  name: 'ProgressCircle',
  props: {
    progress: {
      type: Number,
      default: 0,
    },
    size: {
      type: Number,
      default: 34,
    },
    strokeWidth: {
      type: Number,
      default: 3,
    },
  },
  computed: {
    radius() {
      return this.size / 2 - this.strokeWidth * 2;
    },
    circumference() {
      return this.radius * 2 * Math.PI;
    },
    circleStyle() {
      return {
        strokeDasharray: `${this.circumference} ${this.circumference}`,
        strokeDashoffset: `${this.circumference - (this.progress / 100) * this.circumference}`,
        transition: 'stroke-dashoffset 0.35s',
        transform: 'rotate(-90deg)',
        transformOrigin: '50% 50%',
      };
    },
  },
};
</script>
