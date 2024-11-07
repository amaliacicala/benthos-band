<script lang="ts" setup>
import { onMounted } from 'vue'
import { useDisplay } from 'vuetify'
import { storeToRefs } from 'pinia'
import { useBandsintownStore } from '@/stores/bandsintown'
import icon from '@/assets/icons/bandsintown.svg'
import NoShowsBlock from '@/components/atoms/NoShowsBlock.vue'
import ConcertListBlock from '@/components/atoms/ConcertListBlock.vue'

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

const { mobile } = useDisplay()

const bandsintownStore = useBandsintownStore()
const { loadEvents } = bandsintownStore
const { loading, events, noUpcomingShows, isPastDate } = storeToRefs(bandsintownStore)

onMounted(() => {
  loadEvents(false)
})
</script>

<template>
  <v-fade-transition appear>
    <div class="d-flex flex-column align-center">
      <v-chip-group class="text-body-1 pt-0">
        <v-chip
          variant="text"
          :class="`bg-${props.primaryColor} text-${props.textColor} py-6 px-6 px-md-8`"
          @click="loadEvents(false)"
        >
          upcoming shows
        </v-chip>

        <v-chip
          variant="text"
          :class="`bg-${props.primaryColor}  text-${props.textColor} py-6 px-6 px-md-8`"
          @click="loadEvents(true)"
        >
          past shows
        </v-chip>
      </v-chip-group>
    </div>
  </v-fade-transition>

  <div v-if="loading" class="d-flex flex-column my-16 align-center justify-center">
    <v-progress-circular
      color="brown-lighten-5"
      :size="mobile ? 50 : 60"
      :width="mobile ? 4 : 7"
      class="self-center my-8"
      indeterminate
    />
  </div>

  <div v-else class="d-flex flex-column text-dark pt-6 pt-md-12 px-lg-8 pb-16">
    <v-fade-transition appear>
      <NoShowsBlock
        v-if="noUpcomingShows"
        :notify-link="events[0].ticketsUrl"
        :primary-color="props.primaryColor"
        :secondary-color="props.secondaryColor"
        :text-color="props.textColor"
      />

      <ConcertListBlock
        v-else
        :concert-list="events"
        :past-date="isPastDate"
        :primary-color="props.primaryColor"
      />

      <v-row v-if="!noUpcomingShows" class="justify-center mt-8">
        <v-btn
          href="https://www.bandsintown.com/a/1419641-benthos"
          target="_blank"
          size="large"
          color="red-darken-2"
          class="mt-6 text-brown-lighten-5 flat-shadow"
        >
          <img :src="icon" width="22px" class="mr-3" />
          View more past dates
        </v-btn>
      </v-row>
    </v-fade-transition>
  </div>
</template>
