<script setup lang="ts">
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
import fossil_highlight_lg from '/backgrounds/large/fossil_highlight-lg.avif'
import fossil_highlight_sm from '/backgrounds/small/fossil_highlight-sm.avif'
import cordyceps_highlight_lg from '/backgrounds/large/cordyceps_highlight-lg.jpg'
import cordyceps_highlight_sm from '/backgrounds/large/cordyceps_highlight-lg.jpg'
import plunge_highlight from '/backgrounds/large/bg_hero-lg.avif'

const props = defineProps({
  image: {
    type: String,
    required: true
  }
})

const { mobile } = useDisplay()

const imageSrc = computed(() => {
  if (props.image === 'fossil') {
    return mobile.value ? fossil_highlight_sm : fossil_highlight_lg
  } else if (props.image === 'cordyceps') {
    return mobile.value ? cordyceps_highlight_sm : cordyceps_highlight_lg
  } else if (props.image === 'plunge') {
    return plunge_highlight
  }
  return ''
})
</script>

<template>
  <v-fade-transition appear>
    <v-parallax v-if="!mobile" :src="imageSrc" height="40rem" class="position-relative" />

    <v-img v-else :src="imageSrc" cover style="height: 15rem" />
  </v-fade-transition>
</template>
