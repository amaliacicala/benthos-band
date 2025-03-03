<script lang="ts" setup>
import { useBandsintownStore } from '@/stores/bandsintown'
import type { Event } from '@/types/Bandsintown'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const props = defineProps({
  concertList: {
    type: Array<Event>,
    required: true
  },
  primaryColor: {
    type: String,
    default: 'red-darken-2'
  }
})

const bandsintownStore = useBandsintownStore()
const { isPastDate } = storeToRefs(bandsintownStore)

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

onMounted(() => {
  console.log(props.concertList)
})
</script>

<template>
  <v-row
    v-for="(event, index) of props.concertList"
    :key="index"
    class="align-center py-2"
    :style="{
      minHeight: '85px',
      borderBottom: index === props.concertList.length - 1 ? '' : 'solid 1px #bd776e5a'
    }"
  >
    <v-col cols="6" md="2" lg="2">
      <p
        v-if="event.date"
        :class="`text-${props.primaryColor} text-uppercase`"
        style="font-size: 16px !important; font-weight: 700 !important"
      >
        {{ formatDate(event.date).datePart }}
      </p>
      <p v-if="event.date" class="text-brown-lighten-5 opacity-40 text-body-2 mt-1">
        {{ formatDate(event.date).weekdayTimePart }}
      </p>
    </v-col>

    <v-col cols="6" md="4" lg="3">
      <p
        v-if="event.city"
        class="text-h5 text-right text-md-left text-brown-lighten-5 font-weight-bold"
        style="font-size: 28px !important"
      >
        {{ event.city + ', ' + event.country }}
      </p>
    </v-col>

    <v-col cols="6" md="3" lg="4">
      <p v-if="event.venue" class="text-brown-lighten-5">{{ event.venue }}</p>
    </v-col>

    <v-col cols="6" md="3" lg="3" class="d-flex justify-end">
      <v-btn
        :href="event.ticketsUrl ? event.ticketsUrl : event.eventUrl"
        target="_blank"
        size="large"
        variant="plain"
        :class="`bg-${props.primaryColor} text-brown-lighten-5 flat-shadow opacity-100`"
        :disabled="isPastDate(event)"
      >
        buy tickets
      </v-btn>
    </v-col>
  </v-row>
</template>
