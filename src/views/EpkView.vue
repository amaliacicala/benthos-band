<script setup lang="ts">
import epkNavigation from '../data/epkNavigation.json'
import AppHeader from '@/components/layout/AppHeader.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import BioSection from '@/components/sections/BioSection.vue'
import EpkMusicSection from '@/components/sections/EpkMusicSection.vue'
import PressQuotesSection from '@/components/sections/PressQuotesSection.vue'
import EpkVideoSection from '@/components/sections/EpkVideoSection.vue'
import EpkPhotoSection from '@/components/sections/EpkPhotoSection.vue'
import ConcertListSection from '@/components/sections/ConcertListSection.vue'
</script>

<template>
  <v-container>
    <AppHeader :nav-links="epkNavigation" />
  </v-container>

  <HeroSection />
  <BioSection />
  <EpkMusicSection />
  <PressQuotesSection />
  <EpkVideoSection />
  <EpkPhotoSection />
  <ConcertListSection />
</template>
