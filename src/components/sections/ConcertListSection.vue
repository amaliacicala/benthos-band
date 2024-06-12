<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useBandsintownStore } from '@/stores/bandsintown'

const { events } = storeToRefs(useBandsintownStore())

const formatDate = (date: string | number | Date) => {
  const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: '2-digit' }
  return new Date(date).toLocaleDateString('en-US', options)
}
</script>

<template>
  <table
    class="w-full table-fixed rounded-md bg-black bg-opacity-70 backdrop-blur-sm md:table-fixed lg:table-auto"
  >
    <tbody>
      <tr
        v-for="event of events"
        :key="event.name"
        class="flex-no-wrap flex border-collapse flex-col border-b border-white/50 last:border-b-0 sm:table-row"
      >
        <td class="pt-6 font-semibold md:py-6 md:px-4 lg:p-6">
          {{ event.name }}
        </td>
        <td class="pt-4 md:w-1/5 md:py-6 lg:p-6">
          {{ formatDate(event.date) }}
        </td>
        <td class="md:py-6 lg:py-6">
          {{ `${event.location}` }}
        </td>
        <td class="pt-6 pb-8 md:py-6 lg:w-1/4 lg:p-6">
          <a
            :href="event.ticketsUrl"
            :hidden="!event.ticketsUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-lg border py-2 px-4 font-medium text-white transition-all duration-400 hover:border-cream hover:text-cream"
          >
            <FontAwesomeIcon icon="fa-ticket" class="mr-2"></FontAwesomeIcon>
            Buy tickets
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</template>
