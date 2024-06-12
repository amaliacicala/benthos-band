<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import BioSection from '@/components/sections/BioSection.vue'
import EpkMusicSection from '@/components/sections/EpkMusicSection.vue'
import PressQuotesSection from '@/components/sections/PressQuotesSection.vue'
import EpkVideoSection from '@/components/sections/EpkVideoSection.vue'
import EpkPhotoSection from '@/components/sections/EpkPhotoSection.vue'
</script>

<template>
  <v-container>
    <AppHeader />
  </v-container>

  <HeroSection />
  <BioSection />
  <EpkMusicSection />
  <PressQuotesSection />
  <EpkVideoSection />
  <EpkPhotoSection />
</template>
