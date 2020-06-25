<template>
  <div class="px-6 py-12 text-teal-800 bg-teal-300 rounded">
    <h1 class="text-3xl font-black text-center">{{ $page.message }}</h1>
  </div>
</template>

<script>
import Layout from "../Layouts/App";

export default {
  name: "Home",
  layout: Layout
};
</script>
