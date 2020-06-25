<template>
  <div dir="rtl">
    <header class="flex items-center justify-center px-6 py-4 text-gray-200 bg-gray-700">
      <span class="text-2xl font-bold">Pninim</span>
    </header>
    <main class="max-w-4xl py-32 mx-auto">
      <slot />
    </main>
    <footer
      class="px-6 py-4 text-xs text-center text-gray-200 bg-gray-700"
    >&copy; {{ new Date().getFullYear() }} by Yehuda Neufeld</footer>
  </div>
</template>

<script>
export default {
  name: "Layout"
};
</script>

<style>
</style>
