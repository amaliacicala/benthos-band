<script lang="ts" setup>
import { computed } from 'vue'
import epkData from '@/data/epkData.json'
import MarkdownText from '@/components/atoms/MarkdownText.vue'

const props = defineProps({
  textColor: {
    type: String,
    default: 'text-dark'
  },
  bio: {
    type: String,
    required: true
  }
})

const bioContent = computed(() => {
  const content = epkData[props.bio as keyof typeof epkData]
  return typeof content === 'string' ? content : ''
})
</script>

<template>
  <h2
    :class="[props.textColor, 'text-body-1 font-weight-bold text-decoration-underline pb-6']"
    :style="{ textUnderlineOffset: '4px !important' }"
  >
    biography
  </h2>

  <MarkdownText :source="bioContent" :class="[props.textColor, 'col-6']" />
</template>
