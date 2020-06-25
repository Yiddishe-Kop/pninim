<template>
  <div class="px-6 py-12 text-center text-teal-800 bg-teal-300 rounded">
    <h1 class="text-3xl font-black">{{ $page.message }}</h1>
    <p class="mt-4 text-teal-50">Watch this space!</p>
  </div>
</template>

<script>
import Layout from "../Layouts/App";

export default {
  name: "Home",
  layout: Layout
};
</script>
