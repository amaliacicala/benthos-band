<script setup lang="ts">
import { useDisplay } from 'vuetify'
import PageHeader from '@/components/layout/PageHeader.vue'
import merch_mockups_sm from '/images/merch_mockups-sm.png'
import merch_mockups_lg from '/images/merch_mockups-lg.png'

const { mobile, mdAndDown } = useDisplay()
</script>

<template>
  <div class="bg-red py-16 h-100">
    <v-container>
      <PageHeader :title="'Merchandise'" :color="'brown-lighten-5'" />
    </v-container>

    <v-fade-transition appear>
      <v-container
        class="d-flex flex-column justify-center align-center py-0 px-md-0 px-6"
        :style="{ gap: '1rem' }"
      >
        <p class="text-h4 text-brown-lighten-5 text-center pb-6">
          Shop official Benthos merch from the stores below.
        </p>
        <v-btn
          variant="flat"
          class="bg-brown-lighten-5 w-md-50 w-100"
          height="4rem"
          :size="mobile ? 'large' : 'x-large'"
          :href="'http://store.benthos-band.com/'"
          target="_blank"
        >
          EU & UK STORE
        </v-btn>

        <v-btn
          variant="flat"
          class="bg-brown-lighten-5 w-md-50 w-100"
          height="4rem"
          :size="mobile ? 'large' : 'x-large'"
          :href="'https://merchbooth.net/benthos/'"
          target="_blank"
        >
          US, CANADA & WORLDWIDE STORE
        </v-btn>

        <v-img
          :src="mdAndDown ? merch_mockups_sm : merch_mockups_lg"
          :class="[mdAndDown ? 'px-4' : '', 'cursor-pointer py-8']"
          alt="Benthos Official Merchandise"
          :width="mdAndDown ? '100%' : '80%'"
          eager
        />
      </v-container>
    </v-fade-transition>
  </div>
</template>

<style lang="scss" scoped>
.v-card {
  background-color: transparent;
}
:deep(.v-field-label--floating) {
  text-transform: uppercase !important;
}
</style>
