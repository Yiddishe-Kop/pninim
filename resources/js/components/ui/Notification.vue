<template>
  <transition name="modal-fade">
    <div
      v-if="shouldShow"
      class="fixed inset-0 z-50 flex items-end justify-center px-4 py-6 pointer-events-none sm:px-6 sm:pt-20 sm:items-start sm:justify-end"
    >
      <div class="w-full max-w-sm bg-white rounded-lg shadow-2xl pointer-events-auto modal">
        <div class="overflow-hidden rounded-lg shadow-xs">
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <icon v-if="isError" name="warning" class="w-6 h-6 text-red-400" />
                <icon v-else name="check-circle" class="w-6 h-6 text-green-400" />
              </div>
              <div v-if="isError" class="ml-3 w-0 flex-1 pt-0.5">
                <p class="mb-2 font-medium leading-5 text-red-900">{{ $page.flash.errorTitle || 'Error' }}</p>
                <p v-if="$page.flash.error" class="mt-1 text-sm leading-5 text-gray-500">{{ $page.flash.error }}</p>
                <ul v-else class="pl-5 list-disc">
                  <li v-for="error in $page.errors" :key="error[0]" class="mt-2 text-sm leading-5 text-red-500">
                    {{ error[0] }}
                  </li>
                </ul>
              </div>
              <div v-else class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium leading-5 text-gray-900">Success!</p>
                <p class="mt-1 text-sm leading-5 text-gray-500">{{ $page.flash.success }}</p>
              </div>
              <div class="flex flex-shrink-0 ml-4">
                <button
                  @click="close"
                  class="inline-flex text-gray-400 transition duration-150 ease-in-out focus:outline-none focus:text-gray-500"
                >
                  <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Notification',
  data() {
    return {
      show: true,
    };
  },
  watch: {
    '$page.flash': {
      handler() {
        this.show = true;
      },
      deep: true,
    },
  },
  computed: {
    shouldShow() {
      const show =
        this.show &&
        (!!this.$page.flash.error || Object.keys(this.$page.errors).length > 0 || !!this.$page.flash.success);
      if (show && !this.isError) {
        setTimeout(() => {
          this.show = false;
          console.log('Hiding...');
        }, 3000);
      }
      return show;
    },
    isError() {
      return this.$page.flash.error || Object.keys(this.$page.errors).length > 0;
    },
  },
  methods: {
    close() {
      this.show = false;
    },
  },
};
</script>
