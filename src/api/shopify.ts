import { createStorefrontApiClient, type StorefrontApiClient } from '@shopify/storefront-api-client'

let _client: StorefrontApiClient

function client(): StorefrontApiClient {
  if (!_client) {
    _client = createStorefrontApiClient({
      apiVersion: '2025-01', // this has to match with the one in `.graphqlrc.ts`
      storeDomain: import.meta.env.VITE_SHOPIFY_STORE_DOMAIN,
      privateAccessToken: import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN
    })
  }

  return _client
}

async function articles() {
  const { data, errors } = await client().request(Articles)
  if (errors) {
    throw errors.message
  }

  return data?.articles.nodes
}

// --- Queries --- ///
const Articles = `#graphql
query Articles {
  articles {
    nodes {
      id
      title
      handle

      content
      contentHtml
      excerpt
      excerptHtml

      image {
        id
        url
        altText
        width
        height
      }
    }
  }
}`
