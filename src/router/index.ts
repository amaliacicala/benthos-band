import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: HomeView
    },
    {
      path: '/music',
      name: 'Music',
      component: HomeView
    },
    {
      path: '/video',
      name: 'Video',
      component: HomeView
    },
    {
      path: '/tour-dates',
      name: 'Tour',
      component: HomeView
    },
    {
      path: '/shop-merch',
      name: 'Shop',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      component: HomeView
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: HomeView
    }
  ]
})

export default router
