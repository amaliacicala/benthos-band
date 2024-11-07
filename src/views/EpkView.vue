<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import BioSection from '@/components/sections/BioSection.vue'
import EpkMusicSection from '@/components/sections/EpkMusicSection.vue'
import PressQuotesSection from '@/components/sections/PressQuotesSection.vue'
import EpkVideoSection from '@/components/sections/EpkVideoSection.vue'
import EpkPhotoSection from '@/components/sections/EpkPhotoSection.vue'
import TourDatesSection from '@/components/sections/TourDatesSection.vue'

import hero_lg from '@/assets/backgrounds/large/bg_hero-lg.avif'
import hero_sm from '@/assets/backgrounds/small/bg_hero-sm.avif'
</script>

<template>
  <HeroSection :hero-lg="hero_lg" :hero-sm="hero_sm" />
  <BioSection />
  <EpkMusicSection />
  <PressQuotesSection />
  <EpkVideoSection />
  <EpkPhotoSection />
  <TourDatesSection
    :primary-color="'green-lighten-2'"
    :secondary-color="'green-lighten-2'"
    :text-color="'dark'"
  />
</template>
