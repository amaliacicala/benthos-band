<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppFooter from './components/layout/AppFooter.vue'
</script>

<template>
  <v-app>
    <RouterView />
    <!-- // add v-container and v-main to views -->

    <AppFooter />
  </v-app>
</template>
