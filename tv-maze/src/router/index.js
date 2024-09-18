import { createRouter, createWebHistory } from "vue-router";
import ShowList from "../components/ShowList.vue";
import ShowDetail from "../components/ShowDetail.vue";

const routes = [
  { path: "/", component: ShowList },
  { path: "/show/:id", component: ShowDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
