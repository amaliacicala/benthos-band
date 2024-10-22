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
  <TourDatesSection :show-header="true" class="bg-paper-green" />

  <div class="d-flex align-center justify-center" :style="{ height: '300px' }">
    <iframe
      src="https://bandsintown.com/artist/1419641/email_signup_form?headerTextColor=rgba(244,242,228,1)&backgroundColor=transparent&ctaBackgroundColor=rgba(244,242,228,1)&title=Newsletter&headerTextStyle=normal&headerText=Sign up to get the latest Benthos updates.&font=JetBrains Mono&ctaIcon=show&ctaBorderRadius=4px&ctaBorderWidth=2px&ctaBorderColor=rgba(151,50,61,1)&ctaFontColor=rgba(151,50,61,1)&alignment=center&emailInputField=show&ctaLabel=Subscribe&layout=wide&locale=en&ctaSize=medium"
      width="100%"
      height="100%"
      title="newsletter-widget"
    ></iframe>
  </div>
</template>
