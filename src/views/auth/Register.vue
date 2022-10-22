<template>
    <div>
        <v-container mt-5>
            <h1>Register User</h1>
            <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="createUser(user)">
                <v-text-field v-model="user.name" :counter="10" :rules="nameRules" label="Nombre" required>
                </v-text-field>

                <v-text-field v-model="user.email" :rules="emailRules" label="E-mail" required></v-text-field>
                <v-text-field v-model="user.password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1"
                    label="Password" hint="Al menos 8 carácteres" counter @click:append="show1 = !show1"></v-text-field>
                <v-text-field v-model="user.password2" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1"
                    label="Confirm Password" hint="Al menos 8 carácteres" counter @click:append="show1 = !show1">
                </v-text-field>

                <v-btn :disabled="!valid" color="success" class="mr-4" type="submit" @click="validate">
                    Registrar
                </v-btn>

               <!--  <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

                <v-btn color="warning" @click="resetValidation"> Reset Validation </v-btn> -->
                {{token}}
            </v-form>
        </v-container>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
    name: 'Register',
    data: () => ({
        token:'',
        show1: false,
        user: {
            name: '',
            email: '',
            password: '',
            password2: ''
        },
        rules: {
            required: (value) => !!value || "Contraseña requerida.",
            min: (v) => v.length >= 8 || "Min 8 characters",
            emailMatch: () => `The email and password you entered don't match`,
        },
        valid: true,
        nameRules: [
            (v) => !!v || "El nombre es requerido",
            (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
        ],
        emailRules: [
            (v) => !!v || "E-mail es requerido",
            (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],
    }),
    mounted(){
        this.token = this.$store.getters.getToken
    },

    methods: {
        ...mapActions('auth', ['createUser']),
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
        ...mapState('auth',['error'])
    }
}
</script>

