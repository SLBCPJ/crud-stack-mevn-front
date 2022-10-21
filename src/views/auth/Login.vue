<template>
  <v-container mt-5>
    <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="submit">

      <v-text-field v-model="user.email" :rules="emailRules" label="E-mail" required></v-text-field>
      <v-text-field v-model="user.password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password"
        hint="Al menos 8 carácteres" counter @click:append="show1 = !show1"></v-text-field>
      <input type="submit" value="Login">
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Validate
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

      <v-btn color="warning" @click="resetValidation"> Reset Validation </v-btn>
    </v-form>
  </v-container>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: 'Login',
  data: () => ({
    show1: false,
    user: {
      email: "",
      password: "",
    },
    emailRules: [
      (v) => !!v || "E-mail es requerido",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    rules: {
      required: (value) => !!value || "Contraseña requerida.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => `The email and password you entered don't match`,
    },
    valid: true,
  }),

  methods: {
    ...mapActions('auth', ["login"]),
    submit: function () {
      this.$store.dispatch('login', this.form)
        .then(() => this.$router.push('/product'))
        .catch(err => console.log(err))
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
  computed: {
    ...mapState('auth', ['error'])
  }
};
</script>