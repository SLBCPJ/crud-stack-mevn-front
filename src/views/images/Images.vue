<template>
    <div>
        <h1 class="text-center">IMAGENES</h1>
        <appImg :items="items"></appImg>
    </div>
</template>

<script>
import appImg from '@/components/Imagen.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'Imagenes',
    components: {
        appImg
    },
    created() {
        this.loadImgs()
    },
    data() {
        return {
        }
    },
    methods: {
        ...mapActions('images',['loadImgs'])
    },
    computed:{
        ...mapGetters('images',['items'])
    }
}
</script>

<style lang="scss" scoped>

</style>