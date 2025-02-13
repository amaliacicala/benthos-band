/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Bandsintown
  readonly VITE_BANDSINTOWN_APP_ID: string
  readonly VITE_BANDSINTOWN_ARTIST_ID: string

  // Bigcartel
  readonly VITE_BIGCARTEL_ACCOUNT_ID: string
  readonly VITE_BIGCARTEL_USERNAME: string
  readonly VITE_BIGCARTEL_PASSWORD: string

  // Instagram
  readonly VITE_INSTAGRAM_TOKEN: string

  // Flickr
  readonly VITE_FLICKR_API_KEY: string
  readonly VITE_FLICKR_EPK_PS_PHOTOSET: string
  readonly VITE_FLICKR_EPK_LIVE_PHOTOSET: string

  // Shopify
  readonly VITE_SHOPIFY_STORE_DOMAIN: string
  readonly VITE_SHOPIFY_STOREFRONT_TOKEN: string

  // EPK
  readonly VITE_EPK_PASSWORD: string
  readonly VITE_EPK_USERNAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
