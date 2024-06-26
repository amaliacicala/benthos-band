export interface EventData {
  title: string
  datetime: string
  venue: {
    name: string
    city: string
    country: string
  }
  url: string
  offers: Array<{ url: string }>
}

export interface Event {
  name: string
  date: Date | string
  venue: string
  city: string
  country: string
  eventUrl: string
  ticketsUrl: string
}
