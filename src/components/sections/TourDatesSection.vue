<script lang="ts" setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useBandsintownStore } from '@/stores/bandsintown'
import icon from '@/assets/icons/bandsintown.svg'
import NoShowsBlock from '@/components/atoms/NoShowsBlock.vue'
import ConcertListBlock from '@/components/atoms/ConcertListBlock.vue'

const bandsintownStore = useBandsintownStore()
const { fetchEvents } = bandsintownStore
const { loading, events, noUpcomingShows, isPastDate } = storeToRefs(bandsintownStore)

onMounted(() => {
  fetchEvents(false)
})
</script>

<template>
  <div
    id="tour-dates"
    class="d-flex flex-column justify-center align-center bg-paper-green text-dark px-4 py-8 pa-md-12"
  >
    <p class="text-overline text-center text-dark">Catch us playing live</p>
    <h1 class="text-md-h1 text-h2 text-dark">Tour Dates</h1>

    <v-chip-group class="text-body-1 text-dark pt-4">
      <v-chip class="bg-green-lighten-2 py-6 px-6 px-md-8" @click="fetchEvents(false)">
        upcoming shows
      </v-chip>

      <v-chip class="bg-green-lighten-2 py-6 px-6 px-md-8" @click="fetchEvents(true)">
        past shows
      </v-chip>
    </v-chip-group>

    <div v-if="loading" class="d-flex flex-column my-16 align-center justify-center">
      <v-progress-circular
        color="green-darken-3"
        :size="mobile ? 50 : 60"
        :width="mobile ? 4 : 7"
        class="self-center my-8"
        indeterminate
      />
    </div>

    <v-container v-else class="d-flex flex-column pt-12 px-lg-8">
      <NoShowsBlock v-if="noUpcomingShows" :notify-link="events[0].ticketsUrl" />

      <ConcertListBlock v-else :concert-list="events" :past-date="isPastDate" />

      <v-row v-if="!noUpcomingShows" class="justify-center mt-8">
        <v-btn
          href="https://www.bandsintown.com/a/1419641-benthos"
          target="_blank"
          size="x-large"
          color="green-darken-3"
          class="mt-6 text-primary flat-shadow"
        >
          <img :src="icon" width="22px" class="mr-3" />
          View past dates
        </v-btn>
      </v-row>
    </v-container>
  </div>
</template>
