<script setup lang="ts">
import pureStreamingLinks from '@/data/pureStreamingLinks.json'
import fossilStreamingLinks from '@/data/fossilStreamingLinks.json'
import HeroSection from '@/components/sections/HeroSection.vue'
import MerchSection from '@/components/sections/MerchSection.vue'
import MusicSection from '@/components/sections/MusicSection.vue'
import NewSingleSection from '@/components/sections/NewSingleSection.vue'
import TourDatesSection from '@/components/sections/TourDatesSection.vue'
import LiveVideoSection from '@/components/sections/LiveVideoSection.vue'
import HighlightSection from '@/components/sections/HighlightSection.vue'

import hero_lg from '/backgrounds/large/bg_hero_fossil-lg.avif'
import hero_sm from '/backgrounds/small/bg_hero_fossil-sm.avif'
</script>

<template>
  <HeroSection :hero-lg="hero_lg" :hero-sm="hero_sm" />
  <NewSingleSection
    :overline="'The latest single'"
    :title="'pure'"
    :fan-link="'https://ffm.to/benthos-pure'"
    :single-links="pureStreamingLinks"
    :video-link="'https://youtu.be/GZorqyd95Zk'"
  />
  <MerchSection />
  <NewSingleSection
    :overline="'Released Nov 12th, 2024'"
    :title="'fossil'"
    :fan-link="'https://benthos.lnk.to/Fossil-Single'"
    :single-links="fossilStreamingLinks"
    :video-link="'https://youtu.be/vtXFiFwSIy0'"
  />
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
