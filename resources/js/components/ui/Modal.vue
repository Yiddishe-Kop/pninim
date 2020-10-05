<template>
  <transition name="modal-fade">
    <div
      v-if="$page.modal.open"
      class="fixed inset-x-0 bottom-0 z-20 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center"
    >
      <!-- overlay -->
      <div @click="cancel" class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
      </div>

      <!-- Modal -->
      <div
        class="relative z-30 px-4 pt-5 pb-4 overflow-hidden transition-all transform bg-white rounded-lg shadow-xl modal sm:max-w-lg sm:w-full sm:p-6"
      >
        <div class="absolute top-0 left-0 hidden pt-4 pl-4 sm:block">
          <button
            @click="cancel"
            type="button"
            class="text-gray-400 transition duration-150 ease-in-out hover:text-gray-500 focus:outline-none focus:text-gray-500"
          >
            <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="sm:flex sm:items-start">
          <div
            :class="getClasses().bg"
            class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto rounded-full sm:mx-0 sm:h-10 sm:w-10"
          >
            <icon :name="$page.modal.icon" :class="getClasses().text" class="w-6 h-6" />
          </div>
          <div class="w-full mt-3 text-center sm:mt-0 sm:mr-4 sm:text-right">
            <h3 class="mt-0 text-4xl font-bold leading-6 text-gray-900 font-siddur">{{ $page.modal.title }}</h3>
            <div class="mt-6">
              <p class="text-sm leading-5 text-gray-700 sm:text-base" v-html="$page.modal.message"></p>
            </div>
            <portal-target name="modal" />
          </div>
        </div>
        <div class="mt-5 sm:flex sm:flex-row-reverse">
          <span class="flex w-full rounded-md shadow-sm sm:mr-3 sm:w-auto">
            <button
              @click="confirm"
              type="button"
              :class="getClasses().button"
              class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md shadow-sm focus:outline-none sm:text-sm sm:leading-5"
            >
              {{ $page.modal.action.label }}
            </button>
          </span>
          <span class="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto">
            <button
              @click="cancel"
              type="button"
              class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline sm:text-sm sm:leading-5"
            >
              ביטול
            </button>
          </span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  computed: {},
  methods: {
    confirm() {
      this.$page.modal.open = false;
      this.$page.modal.action.confirm();
    },
    cancel() {
      this.$page.modal.open = false;
      this.$page.modal.action.cancel();
    },
    getClasses() {
      switch (this.$page.modal.color) {
        case 'red':
          return {
            bg: 'bg-red-100',
            text: 'text-red-600',
            button: 'bg-red-600 hover:bg-red-500 focus:border-red-700 focus:shadow-outline-red',
          };
        case 'green':
          return {
            bg: 'bg-green-100',
            text: 'text-green-600',
            button: 'bg-green-600 hover:bg-green-500 focus:border-green-700 focus:shadow-outline-green',
          };
        case 'blue':
          return {
            bg: 'bg-blue-100',
            text: 'text-blue-600',
            button: 'bg-blue-600 hover:bg-blue-500 focus:border-blue-700 focus:shadow-outline-blue',
          };
        case 'orange':
          return {
            bg: 'bg-orange-100',
            text: 'text-orange-600',
            button: 'bg-orange-600 hover:bg-orange-500 focus:border-orange-700 focus:shadow-outline-orange',
          };
        case 'teal':
          return {
            bg: 'bg-teal-100',
            text: 'text-teal-600',
            button: 'bg-teal-600 hover:bg-teal-500 focus:border-teal-700 focus:shadow-outline-teal',
          };
      }
    },
  },
};
</script>
