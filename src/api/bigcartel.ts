import axios from 'axios'

export const fetchMerch = async () => {
  try {
    const accountId = import.meta.env.VITE_BIGCARTEL_ACCOUNT_ID
    const response = await axios.get(
      `https://api.bigcartel.com/v1/accounts/${accountId}/products`,
      {
        auth: {
          username: import.meta.env.VITE_BIGCARTEL_USERNAME,
          password: import.meta.env.VITE_BIGCARTEL_PASSWORD
        },
        headers: {
          Accept: 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json'
        }
      }
    )

    return response.data
  } catch (err: any) {
    return Promise.reject(err.response ? err.response.data : err)
  }
}
