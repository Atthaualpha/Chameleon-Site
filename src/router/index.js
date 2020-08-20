import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
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
    path: "/requests/:projectId",
    name: "RequestList",
    component: () =>
      import(/* webpackChunkName: "requests" */ "../views/Requests.vue"),
  },
  {
    path: "/new-request/:projectId",
    name: "NewRequest",
    component: () =>
      import(
        /* webpackChunkName: "new-request" */ "../components/requests/newRequest/NewRequest.vue"
      ),
  },
  {
    path: "/edit-request/:requestId",
    name: "EditRequest",
    component: () =>
      import(
        /* webpackChunkName: "edit-request" */ "../components/requests/editRequest/editRequest.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  validateRoute(to, from, () => {
    next();
  });
});

const validateRoute = (to, from, callback) => {
  if (to.name === "RequestList" && from.name !== "EditRequest") {
    store.commit("menu/setProject", {
      id: to.params.projectId,
      name: to.query.name,
    });
  } else if (to.name === "ProjectList" || to.name === "Home") {
    store.commit("menu/clearProject");
  }
  callback();
};

export default router;
