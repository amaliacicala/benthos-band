import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth.ts'
// import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import EpkView from '../views/EpkView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/',
      name: 'Electronic Press Kit',
      component: EpkView,
      meta: { requiresAuth: true }
    }
    // {
    //   path: '/',
    //   name: 'Homepage',
    //   component: HomeView
    // },
    // {
    //   path: '/music',
    //   name: 'Music',
    //   component: HomeView
    // },
    // {
    //   path: '/video',
    //   name: 'Video',
    //   component: HomeView
    // },
    // {
    //   path: '/tour-dates',
    //   name: 'Tour',
    //   component: HomeView
    // },
    // {
    //   path: '/shop-merch',
    //   name: 'Shop',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'About',
    //   component: HomeView
    // },
    // {
    //   path: '/contacts',
    //   name: 'Contacts',
    //   component: HomeView
    // }
  ]
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router
