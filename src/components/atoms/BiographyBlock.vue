<script lang="ts" setup>
import epkData from '@/data/epkData.json'
import MarkdownText from '@/components/atoms/MarkdownText.vue'

const props = defineProps({
  textColor: {
    type: String,
    default: 'text-dark'
  }
})
</script>

<template>
  <h2
    :class="[props.textColor, 'text-body-1 font-weight-bold text-decoration-underline pb-6']"
    :style="{ textUnderlineOffset: '4px !important' }"
  >
    biography
  </h2>

  <MarkdownText
    :source="epkData.bio"
    :class="[props.textColor, 'col-6']"
    :style="{
      fontFamily: 'Open Sans, sans-serif'
    }"
  />
</template>
