<template>
  <div class="flex items-center justify-center min-h-screen p-6 bg-gray-800">
    <div class="w-full max-w-md">
      <div class="px-10 py-12 mt-8 overflow-hidden text-center bg-gray-200 rounded-lg shadow-xl">
        <logo class="block w-full max-w-xs mx-auto fill-white" height="60" />
        <h1 class="mt-4 text-3xl font-bold">Halpern Insurance</h1>
        <badge color="red" size="large" class="mt-6 border-2 border-red-400">Access Denied</badge>
        <p
          class="mt-4 text-sm leading-5 text-gray-700"
        >You are not authorized to access this application. Please contact the admin to get access.</p>
        <p class="mt-2 text-xs leading-5 text-gray-600">
          Once you have been granted access,
          <inertia-link href="/" class="underline">click here</inertia-link>.
        </p>

        <inertia-link
          class="inline-block px-6 py-2 mt-6 transition bg-teal-200 rounded hover:bg-teal-500 hover:text-white"
          :href="route('logout')"
          method="post"
        >Logout</inertia-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/ui/Logo";

export default {
  metaInfo: { title: "Access Denied" },
  components: {
    Logo
  }
};
</script>
