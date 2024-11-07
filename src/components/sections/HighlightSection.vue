<script setup lang="ts">
import { useDisplay } from 'vuetify'
import highlight_lg from '@/assets/backgrounds/large/highlight-lg.avif'
import highlight_sm from '@/assets/backgrounds/small/highlight-sm.avif'

const { mobile } = useDisplay()
</script>

<template>
  <v-fade-transition appear>
    <v-parallax v-if="!mobile" :src="highlight_lg" height="40rem" class="position-relative" />

    <v-img v-else :src="highlight_sm" cover style="height: 15rem" />
  </v-fade-transition>
</template>
