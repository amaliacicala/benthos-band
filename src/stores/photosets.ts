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
        this.loading = true

        const data = await fetchPhotoAlbum(photosetId)
        this.images = data.photoset.photo

        setTimeout(() => {
          this.loading = false
        }, 1000)
      } catch (err) {
        console.error('Error fetching photos:', err)
        return Promise.reject(err)
      }
    }
  }
})
