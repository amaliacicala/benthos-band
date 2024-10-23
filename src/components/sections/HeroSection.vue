<script setup lang="ts">
import { useDisplay } from 'vuetify'
import hero_lg from '@/assets/backgrounds/large/bg_hero_fossil-lg.avif'

const { mobile } = useDisplay()
</script>

<template>
  <v-fade-transition appear>
    <v-parallax v-if="!mobile" :src="hero_lg">
      <div class="w-100 h-screen" />
    </v-parallax>

    <div v-else class="bg-hero w-100" />
  </v-fade-transition>
</template>
