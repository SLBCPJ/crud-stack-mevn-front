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
    addProduct: async function({commit,dispatch},data){
      try {
        const setting = {
          method: "POST",
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify(data)
        };
        const url = "http://localhost:5000/api/product";
        const data = await fetch(url, setting);
        const json = await data.json();
        dispatch("loadProducts");
      } catch (error) {
        console.log(error);
      }
    },
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
    deleteProduct: async function ({ commit, dispatch },_id) {
      try {
        const setting = {
          method: "DELETE",
        };
        const url = `http://localhost:5000/api/product/${_id}`;
        const data = await fetch(url, setting);
        const json = await data.json();
        dispatch("loadProducts");
      } catch (e) {
        console.log(e);
      }
    },
  },
};
