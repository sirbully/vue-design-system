import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/inputs",
    name: "Inputs",
    component: () =>
      import(/* webpackChunkName: "input" */ "../views/Inputs.vue")
  },
  {
    path: "/buttons",
    name: "Buttons",
    component: () =>
      import(/* webpackChunkName: "button" */ "../views/Buttons.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
