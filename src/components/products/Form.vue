<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card>
                <v-card-title>
                    <span v-if="item._id === ''" class="text-h5">Agregar Producto</span>
                    <span v-else class="text-h5">Editar Producto</span>
                    <v-spacer></v-spacer>
                    <span v-if="item._id !== ''">ID: {{item._id}}</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="12">
                                <v-text-field label="Nombre*" v-model="item.name" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field label="Precio*" v-model="item.price" type="number" min="100">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field label="Stock*" v-model="item.stock" type="number" min="0" required>
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-select :items="[true, false]" v-model="item.active" label="Activo"></v-select>
                            </v-col>
                        </v-row>
                    </v-container>
                    <small>*Campos requeridos</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDialog()">
                        Cerrar
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="insert">
                        Guardar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<script>
import {mapActions} from 'vuex';
export default {
    props: ['dialog', 'item'],
    data: () => ({
    }),
    methods: {
        ...mapActions('products',['addProduct']),
        insert() {
            this.addProduct()
            this.closeDialog()
        },
        closeDialog() {
            this.$emit('dialog', false)
        },
    }
}
</script>