import { defineStore } from 'pinia'
import { fetchMerch } from '@/api/bigcartel'
import type { DataAttributes, Product, Merch } from '@/types/Bigcartel'

export const useBigcartelStore = defineStore({
  id: 'bigcartel',
  state: () => ({
    merch: [] as Merch[],
    loading: true
  }),

  getters: {
    availableMerch: (state) => state.merch.filter((item) => !item.onSale)
  },

  actions: {
    async loadMerch() {
      try {
        this.loading = true

        const res = await fetchMerch()

        this.merch = (res.data as DataAttributes<Product>[]).map((e) => ({
          name: e.attributes.name,
          description: e.attributes.description,
          price: `€ ${Number.parseFloat(e.attributes.default_price).toFixed(2)}`,
          position: e.attributes.position,
          url: e.attributes.url,
          imageUrl: e.attributes.primary_image_url,
          status: e.attributes.status,
          onSale: e.attributes.on_sale,
          category: e.attributes.category_names.join(', ')
        }))

        this.loading = false
      } catch (err) {
        console.error('Error loading merch:', err)
        this.loading = false
        return Promise.reject(err)
      }
    }
  }
})
