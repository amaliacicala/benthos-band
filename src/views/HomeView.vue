<script setup lang="ts">
import navigation from '../data/navigation.json'
import AppHeader from '@/components/layout/AppHeader.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import MusicSection from '@/components/sections/MusicSection.vue'
import TourDatesSection from '@/components/sections/TourDatesSection.vue'
</script>

<template>
  <v-container>
    <AppHeader :nav-links="navigation" />
  </v-container>

  <HeroSection />
  <MusicSection />
  <TourDatesSection />
</template>
