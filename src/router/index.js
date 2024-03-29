import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/SoapView.vue'
import PomeloView from '../views/Pomelo2023.vue'
const routes = [
  {
    path: '/',
    redirect: { name: 'home' }
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    redirect: { name: 'about' }
  },
  {
    path: '/pomelo2023',
    name: 'pomelo',
    component: PomeloView
  },
  {
    path: '/get-good/pomelo2023',
    name: 'pomelo-github',
    component: PomeloView
  },
  {
    path: '/get-good/about',
    name: 'about',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router