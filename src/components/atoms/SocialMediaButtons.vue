<script lang="ts" setup>
import socialMedia from '@/data/socialMedia.json'
</script>

<template>
  <v-btn
    v-for="(social, index) in socialMedia"
    icon
    variant="text"
    class="text-dark"
    :key="index"
    :href="social.link"
    target="_blank"
  >
    <v-icon :icon="`mdi-${social.name}`" />
  </v-btn>
</template>
