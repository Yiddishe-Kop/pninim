<template>
  <div class="flex items-center justify-center min-h-screen p-6 bg-gray-800">
    <div class="w-full max-w-md">
      <form class="mt-8 overflow-hidden bg-gray-200 rounded-lg shadow-xl" @submit.prevent="submit">
        <div class="px-10 py-12">
          <logo class="block w-full max-w-xs mx-auto fill-white" height="50" />
          <h1 class="mt-4 text-3xl font-bold text-center">Halpern Insurance</h1>
          <h3 class="mt-5 font-semibold text-center">Register for a new account</h3>
          <div class="w-24 mx-auto mt-6" />
          <formulate-input
            v-model="form.name"
            :errors="$page.errors.name"
            class="mt-10"
            label="Name"
            type="text"
            autofocus
            autocapitalize="off"
          />
          <formulate-input
            v-model="form.email"
            :errors="$page.errors.email"
            class="mt-6"
            label="Email"
            type="email"
            autofocus
            autocapitalize="off"
          />
          <formulate-input v-model="form.password" class="mt-6" label="Password" type="password" />
          <formulate-input
            v-model="form.passwordConfirm"
            :errors="$page.errors.password"
            class="mt-6"
            label="Confirm Password"
            type="password"
          />
          <label class="flex items-center mt-6 select-none" for="remember">
            <input id="remember" v-model="form.remember" class="mr-1" type="checkbox" />
            <span class="text-sm">Remember Me</span>
          </label>
          <div class="mt-4 text-center">
            <span class="text-gray-500">or</span>
            <br />
            <inertia-link
              href="/login"
              class="inline-block px-3 py-2 mt-2 text-gray-600 border border-gray-600 rounded hover:text-gray-800 hover:bg-gray-100"
            >login</inertia-link>
          </div>
        </div>
        <div class="flex items-center justify-between px-10 py-4 bg-white border-t border-gray-200">
          <div></div>
          <loading-button :loading="sending" class="btn-teal" type="submit">Register</loading-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import LoadingButton from "@/components/ui/LoadingButton";
import Logo from "@/components/ui/Logo";

export default {
  metaInfo: { title: "Register" },
  components: {
    LoadingButton,
    Logo
  },
  props: {
    errors: Object
  },
  data() {
    return {
      sending: false,
      form: {
        name: "John Doe",
        email: "johndoe@example.com",
        password: "12345678",
        passwordConfirm: "12345678",
        remember: true
      }
    };
  },
  methods: {
    submit() {
      this.sending = true;
      this.$inertia
        .post(this.route("register.attempt"), {
          name: this.form.name,
          email: this.form.email,
          password: this.form.password,
          password_confirmation: this.form.passwordConfirm,
          remember: this.form.remember
        })
        .then(() => (this.sending = false));
    }
  }
};
</script>
