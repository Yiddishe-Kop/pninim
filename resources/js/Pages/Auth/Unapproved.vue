<template>
  <div class="flex items-center justify-center min-h-screen p-6 bg-gray-800" dir="rtl">
    <div class="w-full max-w-md">
      <div class="px-10 py-12 mt-8 overflow-hidden text-center bg-gray-200 rounded-lg shadow-xl">
        <logo class="w-12 dark" />
        <h1 class="mt-4 text-6xl font-bold text-center font-siddur">פנינים</h1>
        <badge color="red" size="large" class="mt-6 border-2 border-red-400">הגישה נחסמה</badge>
        <p class="mt-4 text-sm leading-5 text-gray-700">
          אין לך הרשאות להשתמש באפליקציה זו. אנא פנה אלינו לקבלת גישה.
        </p>
        <p class="mt-2 text-xs leading-5 text-gray-600">
          <inertia-link href="/" class="underline">לחץ כאן</inertia-link> להיכנס, אחרי שקיבלת גישה לאפליקציה.
        </p>

        <inertia-link
          class="inline-block px-6 py-2 mt-6 transition bg-blue-200 rounded hover:bg-blue-500 hover:text-white"
          :href="route('logout')"
          method="post"
          >יציאה</inertia-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/ui/Logo';

export default {
  metaInfo: { title: 'Access Denied' },
  components: {
    Logo,
  },
};
</script>
