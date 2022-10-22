import Vue from "vue";
import Vuex from "vuex";
import images from "./images";
import products from "./products";
// import auth from "./auth";
import axios from "axios";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    value: "hello",
    token:'',
    // messages:''
  },
  getters: {
    getToken(state) {
      state.token = localStorage.getItem("token");
      return state.token;
    },
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
      localStorage.setItem("token", payload);
    },  
  },
  actions: {
    // Login Action

    login({ commit }, payload) {
      try {
        const config = {
          method: payload.method,
          url: payload.url,
          data: payload.data,
        };
        axios(config).then((res) => {
          if (res.status === 200) {
            if (res.data) {
              console.log(res.data);
              commit("setToken", res.data.data.token);
            }
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {
    images,
    products,
    // auth
  },
});
