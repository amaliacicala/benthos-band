<script lang="ts" setup>
import TourDatesBlock from '../atoms/TourDatesBlock.vue'

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
  <div
    id="tour-dates"
    class="d-flex flex-column justify-center align-center bg-black-texture text-dark px-4 pt-8 pb-12 pa-md-12"
  >
    <v-container>
      <div class="pb-4">
        <p class="text-center text-overline text-brown-lighten-5">Catch us playing live</p>
        <h1 class="text-center text-md-h1 text-h2 text-brown-lighten-5">Tour Dates</h1>
      </div>

      <TourDatesBlock
        :primary-color="props.primaryColor"
        :secondary-color="props.secondaryColor"
        :text-color="props.textColor"
      />
    </v-container>
  </div>
</template>
