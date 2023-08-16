import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/SoapView.vue'
import PomeloView from '../views/Pomelo2023.vue'
const routes = [
  {
    path: '/get-good',
    name: 'home',
    component: HomeView
  },
  {
    path: '/get-good/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/get-good/pomelo2023',
    name: 'pomelo',
    component: PomeloView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
