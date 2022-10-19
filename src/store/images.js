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
    loadImgs: async function ({ commit }) {
      try {
        const setting = {
          method: "GET",
        };
        const url = "https://picsum.photos/v2/list?page=2&limit=50";
        const data = await fetch(url, setting);
        const json = await data.json();
        commit("llenarItems", json);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
