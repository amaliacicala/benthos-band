<script lang="ts" setup>
import { useDisplay } from 'vuetify'
import MusicBlock from '@/components/atoms/MusicBlock.vue'

const { mobile } = useDisplay()
</script>

<template>
  <v-lazy transition="fade-transition">
    <div
      class="d-flex flex-column align-center bg-debris bg-red-darken-4 py-16 px-8"
      :style="{ gap: mobile ? '24px' : '48px' }"
    >
      <v-container>
        <div class="text-center pb-8">
          <p class="text-overline">Benthos Catalogue</p>
          <h1 class="text-md-h1 text-h2">Past Releases</h1>
        </div>

        <MusicBlock />
      </v-container>
    </div>
  </v-lazy>
</template>
