<script lang="ts" setup>
import { computed } from 'vue'
import { marked } from 'marked'

const props = defineProps({
  source: { type: String, required: true },
  textStyle: { type: String, default: 'text-body-1' }
})

const content = computed(() => marked(props.source, { breaks: true }))
</script>

<template>
  <!-- eslint-disable vue/no-v-html -->
  <div :class="['markdown', props.textStyle]" data-testid="markdown" v-html="content" />
</template>

<style lang="scss">
.markdown p {
  margin: 0 !important;
}
</style>
