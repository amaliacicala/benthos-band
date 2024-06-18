import axios from 'axios'

export const fetchEvents = async (showPastEvents = false) => {
  try {
    const res = await axios.get(
      `https://rest.bandsintown.com/artists/id_${import.meta.env.VITE_BANDSINTOWN_ARTIST_ID}/events`,
      {
        params: {
          app_id: import.meta.env.VITE_BANDSINTOWN_APP_ID,
          date: showPastEvents ? 'past' : 'upcoming'
        }
      }
    )

    return res.data
  } catch (err: any) {
    return Promise.reject(err.response ? err.response.data : err)
  }
}
