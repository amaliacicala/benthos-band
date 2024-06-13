import axios from 'axios'
import { defineStore } from 'pinia'
import type { EventData, Event } from '@/types/Bandsintown'

export const useBandsintownStore = defineStore({
  id: 'bandsintown',
  state: () => ({
    events: [] as Event[],
    loading: false
  }),

  getters: {
    noUpcomingShows: (state) => {
      return state.events.some((event) => event.name === 'Notify Me')
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
        console.log(bandsintownEvents)
        this.events = bandsintownEvents.map((e) => ({
          name: e.title,
          date: new Date(e.datetime),
          venue: e.venue.name,
          city: e.venue.city,
          country: e.venue.country,
          eventUrl: e.url,
          ticketsUrl: e.offers[0]?.url,
          sold_out: e.sold_out
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
              ticketsUrl: `https://www.bandsintown.com/a/${import.meta.env.VITE_BANDSINTOWN_ARTIST_ID}?came_from=267&app_id=${import.meta.env.VITE_BANDSINTOWN_APP_ID}&trigger=notify_me`,
              sold_out: false
            }
          ]
        }
      } catch (error) {
        console.error('Error fetching events:', error)
        return Promise.reject(error)
      } finally {
        this.loading = false
      }
    }
  }
})
