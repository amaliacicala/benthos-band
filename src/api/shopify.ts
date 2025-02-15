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

export async function articles() {
  const { data, errors } = await client().request(Articles)
  if (errors) {
    throw errors.message
  }

  return data?.articles?.nodes
}

export async function createCart() {
  const { data, errors } = await client().request(CartCreate)
  if (errors) {
    throw errors.message
  }

  return data?.cartCreate
}

// --- Queries and mutations --- //
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

/// Mutations
const CartCreate = `#graphql
mutation cartCreate($input: CartInput) {
  cartCreate(input: $input) {
    cart {
      id
      checkoutUrl
      buyerIdentity {
        countryCode
      }
      discountCodes {
        code
        applicable
      }
      estimatedCost {
        subtotalAmount {
          amount
          currencyCode
        }
        totalAmount {
          amount
          currencyCode
        }
        totalDutyAmount {
          amount
          currencyCode
        }
        totalTaxAmount {
          amount
          currencyCode
        }
      }
      lines {
        nodes {
          id
          quantity
          cost {
            amountPerQuantity {
              amount
              currencyCode
            }
            subtotalAmount {
              amount
              currencyCode
            }
            totalAmount {
              amount
              currencyCode
            }
          }
        }
      }
    }
    userErrors {
      field
      message
    }
    warnings {
      code
      message
      target
    }
  }
}`

/*prettier-ignore*/
