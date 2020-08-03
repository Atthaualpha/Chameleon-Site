import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

require("../public/scss/main.scss");

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.response.use(
  function(response) {
    //Return allways the data from response
    return response.data;
  },
  function(error) {
    //Return allways the data from response
    return Promise.reject(error.response.data);
  }
);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
