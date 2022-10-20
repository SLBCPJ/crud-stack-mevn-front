<template>
  <div>
    <h1 class="text-center mt-5">{{ Title }}</h1>
    <v-card>
      <v-card-title>
        {{ Title }}
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-shopping"
          label="Buscar"
          single-line
          hide-details
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn color="primary" dark class="mb-2"> Nuevo </v-btn>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="Items"
        :items-per-page="5"
        class="elevation-1"
      >
        <template v-slot:[`item.active`]="{ item }">
          <v-chip :color="getColor(item.active)" dark>
            {{ item.active }}
          </v-chip>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <v-tooltip bottom color="warning">
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                small
                class="mr-2"
                @click="edit(item)"
                v-bind="attrs"
                v-on="on"
              >
                mdi-pencil
              </v-icon>
            </template>
            <span>Editar</span>
          </v-tooltip>
          <v-tooltip bottom color="error">
            <template v-slot:activator="{ on, attrs }">
              <v-icon small @click="remove(item)" v-bind="attrs" v-on="on">
                mdi-delete
              </v-icon>
            </template>
            <span>Eliminar</span>
          </v-tooltip>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { mapActions } from "vuex";
export default {
  props: ["Title", "headers", "Items"],
  data() {
    return {
      search: "",
    };
  },
  methods: {
    ...mapActions("products", ["deleteProduct"]),
    remove(item) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Aceptar!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteProduct(item);
          Swal.fire({
            title: "Producto Eliminado!",
            html: `El producto <b>${item.name}</b> fue eliminado de la base de datos, correctamente`,
            icon: "success",
          });
        }
      });
    },
    getColor(active) {
      if (!active) return "red";
      else return "green";
    },
  },
};
</script>
