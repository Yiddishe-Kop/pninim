<template>
  <span :class="getClasses().badge" class="inline-flex items-center font-medium rounded-full">
    <svg v-if="dot" :class="getClasses().dot" class="-ml-0.5 mr-1.5 h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
      <circle cx="4" cy="4" r="3" />
    </svg>
    <slot>label</slot>
  </span>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    color: {
      type: String,
      default: 'teal',
    },
    size: {
      type: String,
      default: 'base',
    },
    dot: {
      type: Boolean,
      default: false,
    },
    uppercase: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getClasses() {
      let badgeClasses = '';
      let dotClasses = '';
      switch (this.color) {
        case 'gray':
          badgeClasses += 'bg-gray-100 text-gray-800';
          dotClasses += 'text-gray-400';
          break;
        case 'red':
          badgeClasses += 'bg-red-100 text-red-800';
          dotClasses += 'text-red-400';
          break;
        case 'orange':
          badgeClasses += 'bg-orange-100 text-orange-800';
          dotClasses += 'text-orange-400';
          break;
        case 'yellow':
          badgeClasses += 'bg-yellow-100 text-yellow-800';
          dotClasses += 'text-yellow-400';
          break;
        case 'green':
          badgeClasses += 'bg-green-100 text-green-800';
          dotClasses += 'text-green-400';
          break;
        case 'teal':
          badgeClasses += 'bg-teal-100 text-teal-800';
          dotClasses += 'text-teal-400';
          break;
        case 'blue':
          badgeClasses += 'bg-blue-100 text-blue-800';
          dotClasses += 'text-blue-400';
          break;
        case 'pink':
          badgeClasses += 'bg-pink-100 text-pink-800';
          dotClasses += 'text-pink-400';
          break;
      }
      switch (this.size) {
        case 'base':
          badgeClasses += ' px-2.5 py-0.5 text-xs leading-4';
          break;
        case 'large':
          badgeClasses += ' px-3 py-0.5 text-sm leading-5';
          break;
        case 'xl':
          badgeClasses += ' px-4 py-1 font-bold text-base leading-5';
          break;
      }
      if (this.uppercase) {
        badgeClasses += ' uppercase tracking-wider font-semibold';
      }
      return {
        badge: badgeClasses,
        dot: dotClasses,
      };
    },
  },
};
</script>
