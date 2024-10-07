<script setup lang="ts">
import fossilStreamingLinks from '@/data/fossilStreamingLinks.json'
import HeroSection from '@/components/sections/HeroSection.vue'
import MerchSection from '@/components/sections/MerchSection.vue'
import MusicSection from '@/components/sections/MusicSection.vue'
import NewSingleSection from '@/components/sections/NewSingleSection.vue'
import TourDatesSection from '@/components/sections/TourDatesSection.vue'
</script>

<template>
  <HeroSection />
  <NewSingleSection
    :overline="'The brand new single'"
    :title="'Fossil'"
    :fan-link="'#'"
    :single-links="fossilStreamingLinks"
    :video-link="'https://www.youtube.com/@BENTHOS'"
  />
  <MerchSection />
  <MusicSection />
  <TourDatesSection />
</template>
