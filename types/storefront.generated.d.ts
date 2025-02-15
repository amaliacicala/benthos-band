/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import type * as StorefrontTypes from './storefront.types';

export type ArticlesQueryVariables = StorefrontTypes.Exact<{ [key: string]: never; }>;


export type ArticlesQuery = { articles: { nodes: Array<(
      Pick<StorefrontTypes.Article, 'id' | 'title' | 'handle' | 'content' | 'contentHtml' | 'excerpt' | 'excerptHtml'>
      & { image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'id' | 'url' | 'altText' | 'width' | 'height'>> }
    )> } };

export type CartCreateMutationVariables = StorefrontTypes.Exact<{
  input?: StorefrontTypes.InputMaybe<StorefrontTypes.CartInput>;
}>;


export type CartCreateMutation = { cartCreate?: StorefrontTypes.Maybe<{ cart?: StorefrontTypes.Maybe<(
      Pick<StorefrontTypes.Cart, 'id' | 'checkoutUrl'>
      & { buyerIdentity: Pick<StorefrontTypes.CartBuyerIdentity, 'countryCode'>, discountCodes: Array<Pick<StorefrontTypes.CartDiscountCode, 'code' | 'applicable'>>, estimatedCost: { subtotalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalDutyAmount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>>, totalTaxAmount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>> }, lines: { nodes: Array<(
          Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
          & { cost: { amountPerQuantity: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, subtotalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> } }
        ) | (
          Pick<StorefrontTypes.ComponentizableCartLine, 'id' | 'quantity'>
          & { cost: { amountPerQuantity: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, subtotalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> } }
        )> } }
    )>, userErrors: Array<Pick<StorefrontTypes.CartUserError, 'field' | 'message'>>, warnings: Array<Pick<StorefrontTypes.CartWarning, 'code' | 'message' | 'target'>> }> };

interface GeneratedQueryTypes {
  "#graphql\nquery Articles {\n  articles {\n    nodes {\n      id\n      title\n      handle\n\n      content\n      contentHtml\n      excerpt\n      excerptHtml\n\n      image {\n        id\n        url\n        altText\n        width\n        height\n      }\n    }\n  }\n}": {return: ArticlesQuery, variables: ArticlesQueryVariables},
}

interface GeneratedMutationTypes {
  "#graphql\nmutation cartCreate($input: CartInput) {\n  cartCreate(input: $input) {\n    cart {\n      id\n      checkoutUrl\n      buyerIdentity {\n        countryCode\n      }\n      discountCodes {\n        code\n        applicable\n      }\n      estimatedCost {\n        subtotalAmount {\n          amount\n          currencyCode\n        }\n        totalAmount {\n          amount\n          currencyCode\n        }\n        totalDutyAmount {\n          amount\n          currencyCode\n        }\n        totalTaxAmount {\n          amount\n          currencyCode\n        }\n      }\n      lines {\n        nodes {\n          id\n          quantity\n          cost {\n            amountPerQuantity {\n              amount\n              currencyCode\n            }\n            subtotalAmount {\n              amount\n              currencyCode\n            }\n            totalAmount {\n              amount\n              currencyCode\n            }\n          }\n        }\n      }\n    }\n    userErrors {\n      field\n      message\n    }\n    warnings {\n      code\n      message\n      target\n    }\n  }\n}": {return: CartCreateMutation, variables: CartCreateMutationVariables},
}
declare module '@shopify/storefront-api-client' {
  type InputMaybe<T> = StorefrontTypes.InputMaybe<T>;
  interface StorefrontQueries extends GeneratedQueryTypes {}
  interface StorefrontMutations extends GeneratedMutationTypes {}
}
