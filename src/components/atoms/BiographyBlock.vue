<script lang="ts" setup>
import epkData from '@/data/epkData.json'
import MarkdownText from '../atoms/MarkdownText.vue'
</script>

<template>
  <h2
    class="text-body-1 font-weight-bold text-decoration-underline text-dark pb-6"
    :style="{ textUnderlineOffset: '4px !important' }"
  >
    biography
  </h2>

  <MarkdownText
    :source="epkData.bio"
    class="col-6"
    :style="{
      fontFamily: 'Open Sans, sans-serif',
      fontSize: '18px !important'
    }"
  />
</template>
