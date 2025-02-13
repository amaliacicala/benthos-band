/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import type * as StorefrontTypes from './storefront.types';

export type ArticlesQueryVariables = StorefrontTypes.Exact<{ [key: string]: never; }>;


export type ArticlesQuery = { articles: { nodes: Array<(
      Pick<StorefrontTypes.Article, 'id' | 'title' | 'handle' | 'content' | 'contentHtml' | 'excerpt' | 'excerptHtml'>
      & { image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'id' | 'url' | 'altText' | 'width' | 'height'>> }
    )> } };

interface GeneratedQueryTypes {
  "#graphql\nquery Articles {\n  articles {\n    nodes {\n      id\n      title\n      handle\n\n      content\n      contentHtml\n      excerpt\n      excerptHtml\n\n      image {\n        id\n        url\n        altText\n        width\n        height\n      }\n    }\n  }\n}": {return: ArticlesQuery, variables: ArticlesQueryVariables},
}

interface GeneratedMutationTypes {
}
declare module '@shopify/storefront-api-client' {
  type InputMaybe<T> = StorefrontTypes.InputMaybe<T>;
  interface StorefrontQueries extends GeneratedQueryTypes {}
  interface StorefrontMutations extends GeneratedMutationTypes {}
}
