<template>
    <div>
        <v-alert :type="type">{{message}}</v-alert>
        <v-btn class="mb-5" :color="type" @click="exit">Cerrar</v-btn>
    </div>
</template>

<script>
export default {
    props: ['type', 'message'],
    methods:{
        exit(){
            this.$emit('salir',false)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>