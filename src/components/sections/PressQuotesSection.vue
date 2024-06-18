<script lang="ts" setup>
import { computed } from 'vue'
import epkData from '@/data/epkData.json'

const quotes = computed(() => {
  const midIndex = Math.ceil(epkData.pressQuotes.length / 2)
  return [epkData.pressQuotes.slice(0, midIndex), epkData.pressQuotes.slice(midIndex)]
})
</script>

<template>
  <div
    id="press-quotes"
    class="d-flex flex-column justify-center align-center bg-paper-green text-dark px-4 py-8 pa-md-12"
  >
    <p class="text-overline text-center text-dark">Reviews from around the world</p>
    <h1 class="text-md-h1 text-h2 text-dark">Press Quotes</h1>

    <v-container class="pt-12">
      <v-row>
        <v-col cols="12" md="6" v-for="(column, colIndex) in quotes" :key="colIndex">
          <div v-for="(quote, index) in column" :key="index" class="d-flex flex-column px-4 pb-8">
            <span class="text-body-1 bg-brown-lighten-5 font-weight-bold mb-3">
              <a :href="quote.link" target="_blank" ref="noopener noreferrer"> {{ quote.author }}</a
              >{{ quote.details ? ', ' + quote.details : '' }}
            </span>
            <span
              :style="{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '18px !important'
              }"
            >
              <v-icon icon="mdi-format-quote-open" />
              {{ quote.quote }}
              <v-icon icon="mdi-format-quote-close" />
            </span>

            <v-divider v-if="index !== column.length - 1" class="mt-6" color="brown-darken-4" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
a:link,
a:visited,
a:active {
  color: rgb(var(--v-theme-green-darken-4)) !important;
}
a:hover {
  color: rgb(var(--v-theme-brown-darken-3)) !important;
}
</style>
