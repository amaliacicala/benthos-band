<script lang="ts" setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useBandsintownStore } from '@/stores/bandsintown'
import icon from '@/assets/icons/bandsintown.svg'
import NoShowsBlock from '@/components/atoms/NoShowsBlock.vue'

const bandsintownStore = useBandsintownStore()
const { fetchEvents } = bandsintownStore
const { events, noUpcomingShows } = storeToRefs(bandsintownStore)

const formatDate = (date: string | number | Date) => {
  const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' }
  return new Date(date).toLocaleDateString('en-US', options)
}

onMounted(() => {
  fetchEvents(false)
})
</script>

<template>
  <div
    id="bio"
    class="d-flex flex-column justify-center align-center bg-green-lighten-1 px-4 py-8 pa-md-12"
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

    <v-container class="d-flex flex-column pt-12">
      <NoShowsBlock v-if="noUpcomingShows" :notify-link="events[0].ticketsUrl" />

      <v-row v-else v-for="(event, index) of events" :key="index">
        <v-col cols="3">
          <p v-if="event.city">
            {{ event.city + ', ' + event.country }}
          </p>
        </v-col>

        <v-col cols="5">
          <p v-if="event.venue">{{ event.venue }}</p>
        </v-col>

        <v-col>
          <p v-if="event.date">{{ formatDate(event.date) }}</p>
        </v-col>

        <v-col>
          <v-btn :href="event.ticketsUrl ? event.ticketsUrl : event.eventUrl" target="_blank">
            buy tickets
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
