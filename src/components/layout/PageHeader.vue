<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'primary'
  }
})
</script>

<template>
  <h1 :class="[`text-${props.color}`, 'text-center text-md-h1 text-h2 pb-4']">
    {{ props.title }}
  </h1>

  <v-divider :color="props.color" class="border-opacity-25 pb-12" />
</template>
