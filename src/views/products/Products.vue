<template>
  <v-container mt-5>
    <div class="text-center">
      <v-btn class="mb-5" color="primary" @click="visible()">Mostrar</v-btn>
      <appAlert v-if="success" type="success" message="Esto es una alerta" @salir="success = $event"></appAlert>
      <appAlert v-if="error" type="error" message="Esto es una alerta de error" @salir="error = $event"></appAlert>
      <appAlert v-if="warning" type="warning" message="Esto es una advertencia" @salir="warning = $event"></appAlert>

    </div>

  </v-container>
</template>

<script>
import appAlert from '@/components/Alerts.vue';
export default {
  name: 'Products',
  components: {
    appAlert
  },
  data() {
    return {
      success: false,
      error: false,
      warning:false
    }
  },
  methods: {
    visible(){
      this.success = true
      this.error = true
      this.warning = true
    }
  },
  watch: {
    // page(){
    //   this.$router.push('/product/'+this.page)
    // }
  }
}
</script>

<style lang="scss" scoped>

</style>