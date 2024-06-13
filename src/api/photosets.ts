import axios from 'axios'

export const fetchPhotoAlbum = async (photosetId: string) => {
  try {
    const res = await axios.get('https://api.flickr.com/services/rest', {
      params: {
        method: 'flickr.photosets.getPhotos',
        api_key: import.meta.env.VITE_FLICKR_API_KEY,
        photoset_id: photosetId,
        extras: 'url_c, url_l, url_o',
        page: 1,
        format: 'json',
        nojsoncallback: 1,
        per_page: 100
      }
    })

    return res.data
  } catch (err: any) {
    return Promise.reject(err.response ? err.response.data : err)
  }
}
