import { defineStore } from 'pinia'
import { fetchEvents } from '@/api/bandsintown'
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
      return eventDate.getTime() < currentDate.getTime()
    }
  },

  actions: {
    async loadEvents(showPastEvents = false) {
      try {
        this.loading = true

        const bandsintownEvents = await fetchEvents(showPastEvents)

        this.events = bandsintownEvents.map((e: EventData) => ({
          name: e.title,
          date: new Date(e.datetime),
          venue: e.venue.name,
          city: e.venue.city,
          country: e.venue.country,
          eventUrl: e.url,
          ticketsUrl: e.offers[0]?.url
        }))

        const now = new Date().getTime()

        // sort upcoming events as earliest first (ascending)
        const upcomingEvents = this.events
          .filter((event) => new Date(event.date).getTime() >= now)
          .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

        // sort past events as latest first (descending)
        const pastEvents = this.events
          .filter((event) => new Date(event.date).getTime() < now)
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

        this.events = [...upcomingEvents, ...pastEvents]

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
      } catch (err) {
        console.error('Error fetching events:', err)
        return Promise.reject(err)
      }
    }
  }
})
