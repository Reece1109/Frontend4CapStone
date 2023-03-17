import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    // checked
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/getaway',
    name: 'getaway',
    component: () => import('../views/GetawayView.vue')
  },
  // {
  //   path: '/cart',
  //   name: 'cart',

  //   component: () => import('../views/')
  // },
  {
    path: '/contact',
    name: 'contact',

    component: () => import('../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
