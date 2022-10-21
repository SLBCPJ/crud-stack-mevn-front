import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";

Vue.config.productionTip = false;
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:5000/api/'
//Setting up default vue's http modules for api calls
//Vue.prototype.$http = axios;
//Load the token from the LocalStorage
const token = localStorage.getItem("token");
// Is there is any token then we will simply append default axios authorization headers
if (token) {
  axios.defaults.headers.common["Authorization"] = token;
}

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
