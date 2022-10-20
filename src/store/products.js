import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    items: [],
  },
  getters: {
    items(state) {
      return state.items;
    },
  },
  mutations: {
    llenarItems(state, data) {
      state.items = data;
    },
  },
  actions: {
    loadProducts: async function ({ commit }) {
      try {
        const setting = {
          method: "GET",
        };
        const url = "http://localhost:5000/api/product/products";
        const data = await fetch(url, setting);
        const json = await data.json();
        commit("llenarItems", json);
      } catch (e) {
        console.log(e);
      }
    },
    deleteProduct: async function ({ commit,dispatch }) {
      try {
        const setting = {
          method: "DELETE",
        };
        const url = "http://localhost:5000/api/product";
        const data = await fetch(url, setting);
        const json = await data.json();
        dispatch("cargarProducts");
      } catch (e) {
        console.log(e);
      }
    },
  },
};
