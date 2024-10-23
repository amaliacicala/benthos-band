import axios from 'axios'

export const fetchInstagramPosts = async () => {
  try {
    const accessToken = import.meta.env.VITE_INSTAGRAM_TOKEN

    const res = await axios.get(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=${accessToken}&limit=6`
    )

    return res.data
  } catch (err: any) {
    return Promise.reject(err.response ? err.response.data : err)
  }
}
