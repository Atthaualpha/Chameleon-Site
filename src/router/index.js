import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/projects",
    name: "ProjectList",
    component: Projects,
  },
  {
    path: "/requests",
    name: "RequestList",
    component: () =>
      import(/* webpackChunkName: "requests" */ "../views/Requests.vue"),
  },
  {
    path: "/new-request",
    name: "NewRequest",
    component: () =>
      import(
        /* webpackChunkName: "new-request" */ "../components/requests/newRequest/NewRequest.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
