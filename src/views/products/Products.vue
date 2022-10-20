<template>
  <v-container mt-5>
    <appTableComponent
      Title="Productos"
      :headers="Header"
      :Items="items"
    ></appTableComponent>
  </v-container>
</template>

<script>
import appAlert from "@/components/Alerts.vue";
import { mapActions, mapGetters } from "vuex";
import appTableComponent from "@/components/products/Table.vue";
export default {
  name: "Products",
  components: {
    appAlert,
    appTableComponent,
  },
  created() {
    this.loadProducts();
  },
  data() {
    return {
      Header: [
        {
          text: "Nombre",
          value: "name",
        },
        {
          text: "Precio",
          value: "price",
        },
        {
          text: "Stock",
          value: "stock",
        },
        {
          text: "Activo",
          value: "active",
        },
        {
          text: "Acciones",
          value: "actions",
        },
      ],
    };
  },
  methods: {
    ...mapActions("products", ["loadProducts"]),
  },
  computed: {
    ...mapGetters("products", ["items"]),
  },
};
</script>
