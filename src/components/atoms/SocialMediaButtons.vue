<script lang="ts" setup>
import socialMedia from '@/data/socialMedia.json'

const props = defineProps({
  color: {
    type: String,
    default: 'text-dark'
  }
})
</script>

<template>
  <v-btn
    v-for="(social, index) in socialMedia"
    icon
    variant="text"
    :class="props.color"
    :key="index"
    :href="social.link"
    target="_blank"
  >
    <v-icon :icon="`mdi-${social.name}`" />
  </v-btn>
</template>
