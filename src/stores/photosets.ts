import { defineStore } from 'pinia'
import { fetchPhotoAlbum } from '@/api/photosets'
import type { PhotosetsState } from '@/types/Photosets'

export const usePhotosetsStore = defineStore({
  id: 'photosets',
  state: (): PhotosetsState => ({
    loading: true,
    images: []
  }),

  actions: {
    async loadAlbum(photosetId: string) {
      try {
        const data = await fetchPhotoAlbum(photosetId)

        this.images = data.photoset.photo

        console.log(data)
      } catch (err) {
        return Promise.reject(err)
      }
    }
  }
})
