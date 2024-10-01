<script setup lang="ts">
import navigation from '../data/navigation.json'
import fossilStreamingLinks from '@/data/fossilStreamingLinks.json'
import AppHeader from '@/components/layout/AppHeader.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import MerchSection from '@/components/sections/MerchSection.vue'
import MusicSection from '@/components/sections/MusicSection.vue'
import NewSingleSection from '@/components/sections/NewSingleSection.vue'
import TourDatesSection from '@/components/sections/TourDatesSection.vue'
</script>

<template>
  <v-container>
    <AppHeader :nav-links="navigation" />
  </v-container>

  <v-main class="pa-0">
    <HeroSection />
    <NewSingleSection
      :overline="'The new single'"
      :title="'Fossil'"
      :fan-link="'#'"
      :single-links="fossilStreamingLinks"
      :video-link="'https://www.youtube.com/@BENTHOS'"
    />
    <MerchSection />
    <MusicSection />
    <TourDatesSection />
  </v-main>
</template>
