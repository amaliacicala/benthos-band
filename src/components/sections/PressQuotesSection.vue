<script lang="ts" setup>
import { computed } from 'vue'
import epkData from '@/data/epkData.json'

const props = defineProps({
  bgColor: {
    type: String,
    default: 'bg-paper-green'
  }
})

const quotes = computed(() => {
  const midIndex = Math.ceil(epkData.pressQuotes.length / 2)
  return [epkData.pressQuotes.slice(0, midIndex), epkData.pressQuotes.slice(midIndex)]
})
</script>

<template>
  <div
    id="press-quotes"
    :class="[
      props.bgColor,
      'd-flex flex-column justify-center align-center text-dark px-4 py-8 pa-md-12'
    ]"
  >
    <v-container>
      <div class="d-flex flex-column align-center">
        <p class="text-overline text-center text-dark">Reviews from around the world</p>
        <h1 class="text-md-h1 text-h2 text-dark">Press Quotes</h1>
      </div>

      <v-row class="pt-12">
        <v-col cols="12" md="6" v-for="(column, colIndex) in quotes" :key="colIndex">
          <div v-for="(quote, index) in column" :key="index" class="d-flex flex-column px-4 pb-8">
            <span class="text-body-1 bg-brown-lighten-5 font-weight-bold mb-3">
              <a :href="quote.link" target="_blank" ref="noopener noreferrer"> {{ quote.author }}</a
              >{{ quote.details ? ', ' + quote.details : '' }}
            </span>
            <span
              :style="{
                fontFamily: 'Open Sans, sans-serif'
              }"
            >
              <v-icon icon="fa fa-quote-left" size="18px" />
              {{ quote.quote }}
              <v-icon icon="fa fa-quote-right" size="18px" />
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
