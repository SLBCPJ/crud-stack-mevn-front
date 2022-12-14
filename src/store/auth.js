import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    user: {},
    status: "",
    error: "",
    token: "",
    valor: "",
  },
  getters: {
    /*     isLoggedIn:function(state) {
      if (state.token != '') {
        return true
      }else{
        return false
      }
    } */

    getTokenD: (state) => {
      state.token = localStorage.getItem("token");
      return state.token;
    },
  },
  mutations: {
    setTokenD: (state, payload) => {
      state.token = payload;
      localStorage.setItem("token", payload);
    },
    setUser(state, user) {
      state.user = user;
    },
    setError(state, error) {
      state.error = error;
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
              commit("setToken", res.data.token);
            }
          }
        });
      } catch (error) {
        console.log(error);
      }
    },

    // Register
    /*  async createUser({ commit }, user) {
      try {
        // commit('register_request');
        let newUser = await axios.post(
          "http://localhost:5000/api/auth/register",
          user
        );
        // if (res.data.success !== undefined) {
        //     commit('register_success');
        // }
        commit("setUser", newUser);
      } catch (err) {
        commit("setError", err);
      }
    }, */

    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({ url: "auth/register", data: user, method: "POST" })
          .then((resp) => {
            const token = "Bearer " + resp.data.token;
            const user = resp.data.user;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", token, user);
            commit("setError", "");
            resolve(resp);
          })
          .catch((error) => {
            localStorage.removeItem("token");
            reject(error);
          });
      });
    },

    // Logout the user
    async logout({ commit }) {
      await localStorage.removeItem("token");
      commit("logout");
      delete axios.defaults.headers.common["Authorization"];
      router.push("/login");
      return;
    },
  },
};
