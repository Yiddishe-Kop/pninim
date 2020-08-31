<template>
  <div>
    <h1 class="text-2xl font-bold">הפרופיל שלי</h1>
    <avatar :user="user" class="float-left" />
    <formulate-form :schema="schema" v-model="values" @submit="submit" class="grid gap-3 mt-12" />
  </div>
</template>

<script>
import Layout from '../../Layouts/App';
import Avatar from '../../components/ui/Avatar';

export default {
  name: 'EditProfile',
  layout: Layout,
  components: { Avatar },
  computed: {
    user() {
      return this.$page.auth.user;
    },
    schema() {
      return [
        {
          name: 'name',
          label: 'שם משתמש',
          value: this.$page.auth.user.name,
          errors: this.$page.errors.name,
        },
        {
          name: 'email',
          label: 'אימייל',
          validation: 'email',
          value: this.$page.auth.user.email,
          errors: this.$page.errors.email,
        },
        {
          type: 'image',
          uploadBehavior: 'delayed',
          name: 'avatar',
          label: 'תמונת פרופיל',
          validation: 'mime:image/jpeg,image/png',
          value: this.$page.auth.user.photo_url,
          errors: this.$page.errors.photo,
        },
        {
          component: 'div',
          class: 'grid grid-cols-2 gap-3',
          children: [
            {
              type: 'password',
              name: 'password',
              label: 'סיסמה',
              help: 'הנח ריק אם אין ברצונך לשנות את הסיסמה',
              errors: this.$page.errors.password,
            },
            {
              type: 'password',
              name: 'password_confirmation',
              label: 'אשר סיסמה',
              help: 'הנח ריק אם אין ברצונך לשנות את הסיסמה',
              validationName: 'Password confirmation',
            },
            {
              type: 'submit',
              label: 'עדכן פרופיל',
            },
          ],
        },
      ];
    },
  },
  data() {
    return {
      values: {},
    };
  },
  methods: {
    submit() {
      if (this.values.avatar) {
        this.values.avatar = this.values.avatar.results[0].url;
      }
      this.$inertia.put(this.route('users.update', this.user.id), this.values);
    },
  },
};
</script>
