import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: ('../views/AboutView.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: ('../views/AdminPageView.vue')
  },
  {
    path: '/getaway',
    name: 'Getaway',
    component:('../views/GetawaysView.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => ('../views/CartView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component:('../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
