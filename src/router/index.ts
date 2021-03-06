import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Todo.vue";
import About from "../views/About.vue";
import Shop from "../views/Shop.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
