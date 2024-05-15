<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/layout/AppHeader.vue'
</script>

<template>
  <v-app>
    <v-container>
      <AppHeader />
    </v-container>

    <RouterView />
    <!-- // add v-container and v-main to views -->
  </v-app>
</template>
