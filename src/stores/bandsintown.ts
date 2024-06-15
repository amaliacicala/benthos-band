import axios from 'axios'
import { defineStore } from 'pinia'
import type { EventData, Event } from '@/types/Bandsintown'

export const useBandsintownStore = defineStore({
  id: 'bandsintown',
  state: () => ({
    loading: true,
    events: [] as Event[]
  }),

  getters: {
    noUpcomingShows: (state) => {
      return state.events.some((event) => event.name === 'Notify Me')
    },
    isPastDate: () => (event: Event) => {
      const eventDate = new Date(event.date)
      const currentDate = new Date()
      return eventDate < currentDate
    }
  },

  actions: {
    async fetchEvents(showPastEvents = false) {
      try {
        this.loading = true

        const bandsintownData = await axios.get(
          `https://rest.bandsintown.com/artists/id_${import.meta.env.VITE_BANDSINTOWN_ARTIST_ID}/events`,
          {
            params: {
              app_id: import.meta.env.VITE_BANDSINTOWN_APP_ID,
              date: showPastEvents ? 'past' : 'upcoming'
            }
          }
        )

        const bandsintownEvents = bandsintownData.data as EventData[]

        this.events = bandsintownEvents.map((e) => ({
          name: e.title,
          date: new Date(e.datetime),
          venue: e.venue.name,
          city: e.venue.city,
          country: e.venue.country,
          eventUrl: e.url,
          ticketsUrl: e.offers[0]?.url
        }))

        // show "Notify Me" if no events are found
        if (this.events.length === 0) {
          this.events = [
            {
              name: 'Notify Me',
              date: '',
              venue: '',
              city: '',
              country: '',
              eventUrl: '',
              ticketsUrl: `https://www.bandsintown.com/a/${import.meta.env.VITE_BANDSINTOWN_ARTIST_ID}?came_from=267&app_id=${import.meta.env.VITE_BANDSINTOWN_APP_ID}&trigger=notify_me`
            }
          ]
        }

        this.loading = false
      } catch (error) {
        console.error('Error fetching events:', error)
        return Promise.reject(error)
      }
    }
  }
})
