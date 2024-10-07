import { createRouter, createWebHistory } from 'vue-router'
// import { useAuthStore } from '@/stores/auth'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import EpkView from '@/views/EpkView.vue'
import MusicView from '@/views/MusicView.vue'
import MediaView from '@/views/MediaView.vue'
import TourDatesView from '@/views/TourDatesView.vue'
import MerchView from '@/views/MerchView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactsView from '@/views/ContactsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: HomeView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/epk',
      name: 'Electronic Press Kit',
      component: EpkView,
      meta: { requiresAuth: true }
    },
    {
      path: '/music',
      name: 'Music',
      component: MusicView
    },
    {
      path: '/media',
      name: 'Media',
      component: MediaView
    },
    {
      path: '/tour-dates',
      name: 'Tour',
      component: TourDatesView
    },
    {
      path: '/shop-merch',
      name: 'Merch',
      component: MerchView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: ContactsView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash
      }
    } else {
      return { top: 0 }
    }
  }
})

// router.beforeEach((to, from, next) => {
//   const authStore = useAuthStore()

//   if (to.meta.requiresAuth && !authStore.isAuthenticated) {
//     next({
//       path: '/login',
//       query: { redirect: to.fullPath }
//     })
//   } else {
//     next()
//   }
// })

export default router
