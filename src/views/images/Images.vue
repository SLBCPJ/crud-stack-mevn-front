<template>
    <div>
        <h1 class="text-center">IMAGENES</h1>
        <appImg :items="items"></appImg>
    </div>
</template>

<script>
import appImg from '@/components/Imagen.vue';
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
            items: []
        }
    },
    methods: {
        loadImgs: async function () {
            try {
                const setting = {
                    method: 'GET'
                }
                const url = 'https://picsum.photos/v2/list?page=2&limit=10'
                const data = await fetch(url, setting)
                const json = await data.json()
                this.items = json
            } catch (e) {
                console.log(e);
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>