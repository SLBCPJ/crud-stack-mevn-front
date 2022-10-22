<template>
  <v-container mt-5>
    <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="login">

      <v-text-field v-model="formData.email" :rules="emailRules" label="E-mail" required></v-text-field>
      <v-text-field v-model="formData.password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password"
        hint="Al menos 8 carácteres" counter @click:append="show1 = !show1"></v-text-field>
      <v-btn type="submit" :disabled="!valid" color="success" class="mr-4" @click="validate">
        Login
      </v-btn>
      <br>

      {{respuesta}}
      {{$store.state.value}}


      <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

      <v-btn color="warning" @click="resetValidation"> Reset Validation </v-btn>
    </v-form>
  </v-container>
</template>
<script>
// import { mapActions, mapState } from "vuex";
import axios from 'axios';
export default {
  name: 'Login',
  data: () => ({
    respuesta: '',
    show1: false,
    formData: {
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
    // ...mapActions('auth', ["login"]),
    login() {
      /*      axios.post('http://localhost:5000/api/auth/login', this.formData).then(res => {
             if (res.status === 200) {
               if (res.data) {
                 this.$store.commit('setToken',res.data.data.token)
                 this.$router.push('/auth/register')
     
                 // this.respuesta = res
                 console.log(res.data.data.token);
               } else {
                 this.respuesta = 'Login Incorrecto'
               }
             }
           }) */

      const payload = {
        method: 'post',
        url: 'http://localhost:5000/api/auth/login',
        data: this.formData
      }
      this.$store.dispatch('login', payload)
      this.$router.push('/auth/register')
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
  // computed: {
  //   ...mapState('auth', ['error'])
  // }
};
</script>