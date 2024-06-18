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

export const downloadImage = async (url: string, imageId: string, downloading: any) => {
  downloading.value[imageId] = true
  try {
    const response = await axios.get(url, {
      responseType: 'blob'
    })

    const urlBlob = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement('a')

    link.href = urlBlob
    link.setAttribute('download', 'benthos.jpg')

    document.body.appendChild(link)

    link.click()
    link.remove()
  } catch (err) {
    console.error('Error downloading the image:', err)
  } finally {
    downloading.value[imageId] = false
  }
}
