<template>
  <inertia-link
    v-if="link"
    :data="data"
    :href="href"
    :method="method"
    :class="[getClasses(), icon ? 'p-2' : 'py-3 px-4']"
    class="inline-flex items-center inline-block space-x-2 text-sm font-semibold font-bold whitespace-no-wrap transition rounded focus:outline-none"
  >
    <slot />
  </inertia-link>
  <a
    v-else-if="a"
    :href="href"
    :class="[getClasses(), icon ? 'p-2' : 'py-3 px-4']"
    class="inline-flex items-center inline-block space-x-2 text-sm font-semibold font-bold whitespace-no-wrap transition rounded focus:outline-none"
  >
    <slot />
  </a>
  <button
    v-else
    @click="$emit('click')"
    :class="[getClasses(), icon ? 'p-2' : 'py-3 px-4']"
    class="inline-flex items-center space-x-2 text-sm font-semibold font-bold whitespace-no-wrap transition rounded focus:outline-none"
    type="button"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    color: String,
    quiet: Boolean,
    a: Boolean,
    icon: Boolean,
    link: Boolean,
    data: Object,
    href: String,
    method: String,
  },
  methods: {
    getClasses() {
      switch (this.color) {
        case 'gray':
          return (
            'text-gray-500 focus:shadow-outline-gray ' +
            (this.quiet ? 'hover:bg-gray-200' : 'bg-gray-200 hover:bg-gray-300')
          );
        case 'green':
          return (
            'text-green-500 focus:shadow-outline-green ' +
            (this.quiet ? 'hover:bg-green-100' : 'bg-green-100 hover:bg-green-200')
          );
        case 'blue':
          return (
            'text-blue-500 focus:shadow-outline-blue ' +
            (this.quiet ? 'hover:bg-blue-100' : 'bg-blue-100 hover:bg-blue-200')
          );
        case 'red':
          return (
            'text-red-500 focus:shadow-outline-red ' + (this.quiet ? 'hover:bg-red-100' : 'bg-red-100 hover:bg-red-200')
          );
        case 'orange':
          return (
            'text-orange-500 focus:shadow-outline-orange ' +
            (this.quiet ? 'hover:bg-orange-100' : 'bg-orange-100 hover:bg-orange-200')
          );
        case 'teal':
          return (
            'text-teal-500 focus:shadow-outline-teal ' +
            (this.quiet ? 'hover:bg-teal-100' : 'bg-teal-100 hover:bg-teal-200')
          );
      }
    },
  },
};
</script>

<style>
</style>
