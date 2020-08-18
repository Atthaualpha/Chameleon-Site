import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueBus from "vue-bus";
import('animate.css')
require("./config/httpConfig");
require("../public/scss/main.scss");

Vue.config.productionTip = false;

Vue.use(VueBus);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
