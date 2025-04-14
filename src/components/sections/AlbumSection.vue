<script lang="ts" setup>
import { useDisplay } from 'vuetify'
import epkData from '@/data/epkData.json'

import cover_lg from '/album_covers/large/benthos_fromnothing_cover-lg.avif'
import cover_sm from '/album_covers/small/benthos_fromnothing_cover-sm.avif'
import fromnothing_mockups_lg from '/images/fromnothing_mockups-lg.png'
import fromnothing_mockups_sm from '/images/fromnothing_mockups-sm.png'
import insideout_logo from '/logos/insideout_logo_white.png'

const props = defineProps({
  overline: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  }
})

const { mobile, mdAndDown } = useDisplay()

const navigateToUrl = (url: string) => {
  if (url) {
    window.open(url, '_blank')
  }
}
</script>

<template>
  <div class="bg-fromnothing text-primary">
    <v-lazy transition="fade-transition">
      <v-container class="d-flex flex-column align-center py-16">
        <div class="px-10 px-md-16" :style="{ gap: '24px' }">
          <div class="text-center">
            <p class="text-overline">{{ props.overline }}</p>
            <h1 class="text-md-h1 text-h2">{{ props.title }}</h1>
            <p class="text-h3">{{ props.subtitle }}</p>
          </div>
        </div>

        <v-btn
          variant="flat"
          class="bg-green-lighten-2 text-body-2 text-md-body-1 mr-4 w-50 w-md-25 mt-6 mb-8"
          :size="mobile ? 'large' : 'x-large'"
          :href="'https://benthos.lnk.to/FromNothing-Album'"
          target="_blank"
        >
          STREAM / BUY
        </v-btn>

        <v-row class="w-100 d-flex justify-center">
          <v-col cols="12" md="5" class="d-flex flex-column">
            <p class="text-h4">tracklist</p>

            <p
              v-for="(track, index) in epkData.albumTrackList"
              :key="index"
              class="text-body-2 text-md-body-1 mt-2"
            >
              <span style="opacity: 0.5"> {{ (index + 1).toString().padStart(2, '0') }}. </span>
              <span class="font-weight-bold">{{ track.songTitle }}</span>
              <span style="opacity: 0.5"> ({{ track.length }}) </span>
            </p>
          </v-col>

          <v-col cols="12" md="5" class="order-first order-md-last">
            <v-img :src="mdAndDown ? cover_sm : cover_lg" alt="Benthos - From Nothing" eager />
          </v-col>
        </v-row>

        <v-img
          :src="mdAndDown ? fromnothing_mockups_sm : fromnothing_mockups_lg"
          :class="[mdAndDown ? 'px-4' : '', 'cursor-pointer mt-6']"
          @click="navigateToUrl('https://ffm.bio/benthos')"
          alt="Benthos - From Nothing"
          :width="mdAndDown ? '100%' : '80%'"
          eager
        />

        <footer class="d-flex flex-column justify-center align-center opacity-70 mt-6">
          <v-img :src="insideout_logo" :width="120" alt="InsideOut Music" />
        </footer>
      </v-container>
    </v-lazy>
  </div>
</template>

<style lang="scss" scoped>
.v-btn .v-img {
  filter: grayscale(100%) !important;
}
</style>
