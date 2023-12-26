import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: import('../views/UserView.vue')
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: import('../views/CalendarView.vue')
  },
  {
    path: '/crypto-exchanger',
    name: 'crypto-exchanger',
    component: import('../views/CryptoExchangerView.vue')
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
