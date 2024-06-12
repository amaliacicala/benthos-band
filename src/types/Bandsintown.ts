export interface EventData {
  title: string
  datetime: string
  venue: {
    name: string
    location: string
    city: string
    country: string
  }
  offers: [
    {
      url: string
    }?
  ]
}

export interface Event {
  name: string
  date: Date
  city: string
  country: string
  venue: string
  location: string
  ticketsUrl?: string
}
