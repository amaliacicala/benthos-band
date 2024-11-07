<script setup lang="ts">
import fossilStreamingLinks from '@/data/fossilStreamingLinks.json'
import HeroSection from '@/components/sections/HeroSection.vue'
import MerchSection from '@/components/sections/MerchSection.vue'
import MusicSection from '@/components/sections/MusicSection.vue'
import NewSingleSection from '@/components/sections/NewSingleSection.vue'
import TourDatesSection from '@/components/sections/TourDatesSection.vue'
import LiveVideoSection from '@/components/sections/LiveVideoSection.vue'
import HighlightSection from '@/components/sections/HighlightSection.vue'

import hero_lg from '@/assets/backgrounds/large/bg_hero_fossil-lg.avif'
import hero_sm from '@/assets/backgrounds/small/bg_hero_fossil-sm.avif'
</script>

<template>
  <HeroSection :hero-lg="hero_lg" :hero-sm="hero_sm" />
  <NewSingleSection
    :overline="'The brand new single'"
    :title="'Fossil'"
    :fan-link="'https://benthos.lnk.to/Fossil-Single'"
    :single-links="fossilStreamingLinks"
    :video-link="'https://youtu.be/vtXFiFwSIy0'"
  />
  <MerchSection />
  <HighlightSection />
  <MusicSection />
  <LiveVideoSection
    :overline="'Live at Dissonance Festival'"
    :title="'Talk to Me, Dragonfly!'"
    :fan-link="'https://lnk.to/bnttlk'"
    :single-links="fossilStreamingLinks"
    :video-link="'https://www.youtube.com/watch?v=ue1BDz156Z4'"
  />
  <TourDatesSection :show-header="true" />
</template>
