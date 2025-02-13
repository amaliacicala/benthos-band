import { createStorefrontApiClient, type StorefrontApiClient } from '@shopify/storefront-api-client'

let _client: StorefrontApiClient

function client(): StorefrontApiClient {
  if (!_client) {
    _client = createStorefrontApiClient({
      apiVersion: '2025-01',
      storeDomain: import.meta.env.VITE_SHOPIFY_STORE_DOMAIN,
      privateAccessToken: import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN
    })
  }

  return _client
}
