import { setActivePinia, createPinia } from 'pinia'
import { useShopifyStore } from '@/stores/shopify'

describe('Shopify Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('creates the store', () => {
    const shopify = useShopifyStore()
    expect(shopify.$id).toBe('shopify')
  })
})
