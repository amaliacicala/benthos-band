<script lang="ts" setup>
import type { Event } from '@/types/Bandsintown'

const props = defineProps({
  concertList: {
    type: Array<Event>,
    required: true
  },
  pastDate: {
    type: Boolean,
    required: true
  }
})

const formatDate = (date: string | number | Date) => {
  const optionsDate: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }

  const dateObj = new Date(date)
  const datePart = dateObj.toLocaleDateString('en-US', optionsDate)
  const weekdayTimePart = `${dateObj.toLocaleDateString('en-US', { weekday: 'short' })}  ${dateObj.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}`

  return { datePart, weekdayTimePart }
}
</script>

<template>
  <v-row
    v-for="(event, index) of props.concertList"
    :key="index"
    class="align-center py-2"
    style="min-height: 85px; border-bottom: solid 1px #aab5a1"
  >
    <v-col cols="6" md="2" lg="2">
      <p
        v-if="event.date"
        class="text-uppercase"
        style="font-size: 16px !important; font-weight: 700 !important"
      >
        {{ formatDate(event.date).datePart }}
      </p>
      <p v-if="event.date" class="text-body-2 mt-1">
        {{ formatDate(event.date).weekdayTimePart }}
      </p>
    </v-col>

    <v-col cols="6" md="4" lg="3">
      <p
        v-if="event.city"
        class="text-h5 text-right text-md-left text-green-darken-3 font-weight-bold"
        style="font-size: 28px !important"
      >
        {{ event.city + ', ' + event.country }}
      </p>
    </v-col>

    <v-col cols="6" md="3" lg="4">
      <p v-if="event.venue">{{ event.venue }}</p>
    </v-col>

    <v-col cols="6" md="3" lg="3" class="d-flex justify-end">
      <v-btn
        :href="event.ticketsUrl ? event.ticketsUrl : event.eventUrl"
        target="_blank"
        color="green-darken-3"
        size="large"
        variant="outlined"
        class="bg-brown-lighten-5 flat-shadow"
        :disabled="props.pastDate"
      >
        buy tickets
      </v-btn>
    </v-col>
  </v-row>
</template>
