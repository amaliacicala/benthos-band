<script setup lang="ts">
import PageHeader from '@/components/layout/PageHeader.vue'
import TourDatesBlock from '@/components/atoms/TourDatesBlock.vue'

const props = defineProps({
  primaryColor: {
    type: String,
    default: 'red-darken-2'
  },
  secondaryColor: {
    type: String,
    default: 'red-lighten-2'
  },
  textColor: {
    type: String,
    default: 'brown-lighten-5'
  }
})
</script>

<template>
  <div class="bg-black-texture py-16 h-100">
    <v-container class="px-6">
      <PageHeader :title="'Tour Dates'" :color="'brown-lighten-5'" />

      <TourDatesBlock :primary-color="props.primaryColor" :secondary-color="props.secondaryColor" />
    </v-container>
  </div>
</template>
