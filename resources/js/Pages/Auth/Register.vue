<template>
  <div class="flex items-center justify-center min-h-screen p-6 bg-gray-800" dir="rtl">
    <div class="w-full max-w-md">
      <form class="mt-8 overflow-hidden bg-gray-200 rounded-lg shadow-xl" @submit.prevent="submit">
        <div class="px-10 py-12">
          <logo class="dark" />
          <h1 class="mt-4 text-6xl font-bold text-center font-siddur">פנינים</h1>
          <h3 class="mt-5 font-semibold text-center">יצירת חשבון חדש</h3>
          <div class="w-24 mx-auto mt-6" />
          <formulate-input
            v-model="form.name"
            :errors="$page.errors.name"
            class="mt-10"
            label="שם משתמש"
            type="text"
            autofocus
            autocapitalize="off"
          />
          <formulate-input
            v-model="form.email"
            :errors="$page.errors.email"
            class="mt-6"
            label="אימייל"
            type="email"
            autofocus
            autocapitalize="off"
          />
          <formulate-input v-model="form.password" class="mt-6" label="סיסמה" type="password" />
          <formulate-input
            v-model="form.passwordConfirm"
            :errors="$page.errors.password"
            class="mt-6"
            label="אשר סיסמה"
            type="password"
          />
          <label class="flex items-center mt-6 select-none" for="remember">
            <input id="remember" v-model="form.remember" class="ml-1" type="checkbox" />
            <span class="text-sm">זכור אותי</span>
          </label>
          <div class="mt-4 text-center">
            <span class="text-gray-500">או</span>
            <br />
            <inertia-link
              href="/login"
              class="inline-block px-3 py-2 mt-2 text-gray-600 border border-gray-600 rounded hover:text-gray-800 hover:bg-gray-100"
              >כניסה</inertia-link
            >
          </div>
        </div>
        <div class="flex items-center justify-between px-10 py-4 bg-white border-t border-gray-200">
          <div></div>
          <loading-button :loading="sending" class="btn-teal" type="submit">הירשם</loading-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import LoadingButton from '@/components/ui/LoadingButton';
import Logo from '@/components/ui/Logo';

export default {
  metaInfo: { title: 'Register' },
  components: {
    LoadingButton,
    Logo,
  },
  props: {
    errors: Object,
  },
  data() {
    return {
      sending: false,
      form: {
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
        remember: true,
      },
    };
  },
  methods: {
    submit() {
      this.sending = true;
      this.$inertia
        .post(this.route('register.attempt'), {
          name: this.form.name,
          email: this.form.email,
          password: this.form.password,
          password_confirmation: this.form.passwordConfirm,
          remember: this.form.remember,
        })
        .then(() => (this.sending = false));
    },
  },
};
</script>
