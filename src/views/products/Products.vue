<template>
    <div>
        <h1>Vista de productos:{{$router.params.id}}</h1>
<!--         <div class="text-center">
        <v-pagination
          v-model="page"
          :length="4"
          circle
        ></v-pagination>
      </div> -->
    </div>
</template>

<script>
export default {
    data () {
      return {
        page: 1,
      }
    },
}
</script>

<style lang="scss" scoped>

</style>