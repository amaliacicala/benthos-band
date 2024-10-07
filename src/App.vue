<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

const route = useRoute()

const isLogin = computed(() => route.path === '/login')
</script>

<template>
  <v-app>
    <AppHeader v-if="!isLogin" />

    <v-main>
      <RouterView />
    </v-main>

    <AppFooter v-if="!isLogin" />
  </v-app>
</template>
