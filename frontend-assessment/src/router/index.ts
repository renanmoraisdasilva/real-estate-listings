import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import EstateDetailView from "../views/EstateDetailView.vue"
import TestingView from "../views/TestingView.vue"
import Layout from "../components/Layout.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "",
          name: "home",
          component: HomeView,
        },
        {
          path: "/estate/:id",
          name: "estate",
          component: EstateDetailView,
        },
        {
          path: "/testing",
          name: "testing",
          component: TestingView,
        },
      ],
    },
  ],
})

export default router
