<script lang="ts" setup>
import TourDatesBlock from '../atoms/TourDatesBlock.vue'
</script>

<template>
  <div
    id="tour-dates"
    class="d-flex flex-column justify-center align-center text-dark px-4 pt-8 pb-12 pa-md-12"
  >
    <v-container>
      <div class="pb-4">
        <p class="text-center text-overline text-dark">Catch us playing live</p>
        <h1 class="text-center text-md-h1 text-h2 text-dark">Tour Dates</h1>
      </div>

      <TourDatesBlock />
    </v-container>
  </div>
</template>
