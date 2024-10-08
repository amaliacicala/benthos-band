<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useDisplay } from 'vuetify'
import defaultNavigation from '@/data/navigation.json'
import epkNavigation from '@/data/epkNavigation.json'
import logo from '@/assets/logos/benthos_logo_black.png'
import AppSideMenu from '@/components/layout/AppSideMenu.vue'

const { mobile } = useDisplay()

const router = useRouter()
const route = useRoute()

const navigation = ref(defaultNavigation)

const showDialog = ref(false)

const isActive = (link: string) => {
  return route.path === link
}

const updateNavigationLinks = () => {
  if (route.path === '/epk') {
    navigation.value = epkNavigation
  } else {
    navigation.value = defaultNavigation
  }
}

watch(route, () => {
  updateNavigationLinks()
})

onMounted(() => {
  updateNavigationLinks()
})
</script>

<template>
  <v-app-bar
    elevation="0"
    color="brown-lighten-5"
    :scroll-behavior="route.path === '/' ? 'hide' : 'none'"
    scroll-threshold="100"
    class="pa-2 pa-md-0"
    :height="mobile ? 58 : 75"
  >
    <v-container class="d-flex justify-space-between align-center px-4">
      <div>
        <v-img
          :src="logo"
          :width="120"
          cursor-pointer
          eager
          alt="Benthos band logo"
          @click="router.push({ name: 'Homepage' })"
        />
      </div>

      <div class="d-none d-md-flex">
        <v-list-item
          v-for="item in navigation"
          :key="item.name"
          link
          height="80"
          class="d-flex justify-center text-lowercase"
          :class="{ 'active font-weight-bold': isActive(item.link) }"
          @click="
            route.path === '/epk'
              ? router.push({ path: '/epk', hash: item.link })
              : router.push({ name: item.name })
          "
        >
          {{ item.name }}
        </v-list-item>
      </div>

      <v-app-bar-nav-icon
        id="appsidemenu-activator"
        icon="mdi-menu"
        variant="text"
        color="black"
        class="d-flex d-md-none"
      />
      <v-dialog
        v-model="showDialog"
        activator="#appsidemenu-activator"
        fullscreen
        content-class="ma-0"
        location="left"
        class="justify-start"
        transition="slide-x-transition"
      >
        <v-card height="100%" class="py-2 px-4 bg-brown-lighten-5" rounded="0">
          <AppSideMenu :nav-links="navigation" @close="showDialog = false" />
        </v-card>
      </v-dialog>
    </v-container>
  </v-app-bar>
</template>

<style lang="scss" scoped>
:deep(.mdi-menu::before) {
  content: '\F035C';
  font-size: 32px;
}
.v-app-bar {
  border-bottom: solid 3px;
  @media screen and (max-width: 959px) {
    border-image: url('@/assets/backgrounds/small/pattern-sm.avif') 20 round;
  }
  @media screen and (min-width: 960px) and (max-width: 1279px) {
    border-image: url('@/assets/backgrounds/medium/pattern-md.avif') 40 round;
  }
  @media screen and (min-width: 1280px) {
    border-image: url('@/assets/backgrounds/large/pattern-lg.avif') 50 round;
  }
}
.v-img {
  &:hover {
    cursor: pointer;
  }
}
.active {
  text-decoration: underline !important;
  text-underline-offset: 2px !important;
}
.v-list-item {
  &:hover {
    text-decoration: underline !important;
    text-underline-offset: 2px !important;
    text-decoration-style: dotted !important;
  }
}
:deep(.v-list-item__overlay),
:deep(.v-ripple__container) {
  opacity: 0 !important;
}
.v-card {
  border: solid 10px;
  animation: animatedBorder 3s ease-in-out infinite alternate;
  border-image: url('@/assets/backgrounds/medium/pattern-md.avif') 100 round;
}
@keyframes animatedBorder {
  from {
    border-image: url('@/assets/backgrounds/medium/pattern-md.avif') 20;
  }
  to {
    border-image: url('@/assets/backgrounds/medium/pattern-md.avif') 5;
  }
}
</style>
