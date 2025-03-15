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
            <p class="text-body font-weight-bold">{{ props.subtitle }}</p>
          </div>
        </div>

        <v-btn
          variant="flat"
          class="bg-green-lighten-2 text-body-2 text-md-body-1 mr-4 w-50 w-md-25 mt-6 mb-8"
          :size="mobile ? 'large' : 'x-large'"
          :href="'https://ffm.bio/benthos'"
          target="_blank"
        >
          Pre-order now
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

        <div
          class="d-flex justify-center align-center flex-wrap mt-16"
          :style="{ gap: mdAndDown ? '12px' : '24px' }"
        >
          <v-btn
            variant="flat"
            class="text-body-2 text-md-body-15 bg-green-lighten-2 text-dark"
            :size="mobile ? 'large' : 'x-large'"
            :href="'https://www.insideoutshop.de/de/collections/vendors?q=Benthos'"
            target="_blank"
          >
            InsideOutMusic (EU & Worldwide)
          </v-btn>

          <v-btn
            variant="flat"
            class="text-body-2 text-md-body-15 bg-green-lighten-2 text-dark"
            :size="mobile ? 'large' : 'x-large'"
            :href="'https://www.emp.de/search?q=benthos&specialCharacters=true'"
            target="_blank"
          >
            EMP (EU)
          </v-btn>

          <v-btn
            variant="flat"
            class="text-body-2 text-md-body-15 bg-green-lighten-2 text-dark"
            :size="mobile ? 'large' : 'x-large'"
            :href="'https://burningshed.com/index.php?route=product/search&filter_name=benthos&filter_sub_category=true'"
            target="_blank"
          >
            Burning Shed (UK)
          </v-btn>
        </div>

        <div
          class="d-flex justify-center align-center flex-wrap mt-4 mt-md-6"
          :style="{ gap: mdAndDown ? '12px' : '24px' }"
        >
          <v-btn
            variant="outlined"
            class="text-body-2 text-primary"
            :size="mobile ? 'large' : 'x-large'"
            :href="'https://www.amazon.co.uk/dp/B0DTB5M7TP/ref=sr_1_2?crid=1IRR1CUYTH26D&dib=eyJ2IjoiMSJ9.Ao7b20ky5vAHuVo3giwi9LJSsaONRIeHvaHbOgT29-saQOpjJ9kii3aljCAkXKl4l4MKqwXpHbq-m7R8fIUAnqP7I36AV_3PX7tInem--wc.Z8tTdDvysOeDW7BjflbLoIRDrS7Ly7qsG0DfF879IAA&dib_tag=se&keywords=benthos+from+nothing&qid=1739194887&sprefix=benthos+from+nothing%2Caps%2C98&sr=8-2'"
            target="_blank"
          >
            MerchBooth (US, Canada & Worldwide)
          </v-btn>
        </div>

        <div
          class="d-flex justify-center align-center flex-wrap mt-4 mt-md-6"
          :style="{ gap: mdAndDown ? '12px' : '24px' }"
        >
          <v-btn
            variant="flat"
            class="text-body-2 text-md-body-15 bg-green-lighten-2 text-dark"
            :size="mobile ? 'large' : 'x-large'"
            :href="'https://www.amazon.co.uk/dp/B0DTB5M7TP/ref=sr_1_2?crid=1IRR1CUYTH26D&dib=eyJ2IjoiMSJ9.Ao7b20ky5vAHuVo3giwi9LJSsaONRIeHvaHbOgT29-saQOpjJ9kii3aljCAkXKl4l4MKqwXpHbq-m7R8fIUAnqP7I36AV_3PX7tInem--wc.Z8tTdDvysOeDW7BjflbLoIRDrS7Ly7qsG0DfF879IAA&dib_tag=se&keywords=benthos+from+nothing&qid=1739194887&sprefix=benthos+from+nothing%2Caps%2C98&sr=8-2'"
            target="_blank"
          >
            Amazon (Worldwide)
          </v-btn>

          <v-btn
            variant="flat"
            class="text-body-2 text-md-body-15 bg-green-lighten-2 text-dark"
            :size="mobile ? 'large' : 'x-large'"
            :href="'https://benthosmusic.bandcamp.com/album/from-nothing-24-bit-hd-audio'"
            target="_blank"
          >
            Bandcamp (Digital)
          </v-btn>
        </div>

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
