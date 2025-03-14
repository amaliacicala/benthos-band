<script lang="ts" setup>
import { useDisplay } from 'vuetify'
import bg_lg from '/backgrounds/large/bg_red-lg.avif'
import bg_sm from '/backgrounds/small/bg_red-sm.avif'
import merch_mockups_sm from '/images/merch_mockups-sm.png'
import merch_mockups_lg from '/images/merch_mockups-lg.png'

const { mobile, mdAndDown } = useDisplay()
</script>

<template>
  <v-lazy transition="fade-transition">
    <v-parallax :src="mobile ? bg_sm : bg_lg">
      <v-container>
        <div class="d-flex flex-column align-center pt-16" :style="{ gap: '24px' }">
          <div class="text-center">
            <p class="text-overline">Supporter 101</p>
            <h1 class="text-md-h1 text-h2">Merchandise</h1>
          </div>

          <v-img
            :src="mdAndDown ? merch_mockups_sm : merch_mockups_lg"
            :class="[mdAndDown ? 'px-4' : '']"
            alt="Benthos Official Merchandise"
            :width="mdAndDown ? '100%' : '80%'"
            eager
          />

          <div class="d-flex justify-center pt-10" :style="{ gap: '2rem' }">
            <v-btn
              variant="outlined"
              class="text-brown-lighten-5 w-md-75 w-100"
              height="4rem"
              :size="mobile ? 'large' : 'x-large'"
              :href="'http://store.benthos-band.com/'"
              target="_blank"
            >
              EU & UK STORE
            </v-btn>

            <v-btn
              variant="outlined"
              class="text-brown-lighten-5 w-md-75 w-100"
              height="4rem"
              :size="mobile ? 'large' : 'x-large'"
              :href="'https://merchbooth.net/benthos/'"
              target="_blank"
            >
              US, CANADA & WORLDWIDE STORE
            </v-btn>
          </div>
        </div>
      </v-container>
    </v-parallax>
  </v-lazy>
</template>
