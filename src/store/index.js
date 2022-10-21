import Vue from 'vue'
import Vuex from 'vuex'
import images from "./images";
import products from "./products";
import auth from "./auth";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // toke:'',
    // messages:''
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    images,
    products,
    auth
  }
})
