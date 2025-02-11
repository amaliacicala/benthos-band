export interface DataAttributes<T> {
  attributes: T
}

export interface Response<T> {
  data: DataAttributes<T> | DataAttributes<T>[]
}

export interface Product {
  name: string
  description?: string
  default_price: string
  position: number
  url: string
  primary_image_url: string
  on_sale: boolean
  status: string
  category_names: [string]
}

export interface BGMerch {
  name: string
  description?: string
  price: string
  position: number
  url: string
  imageUrl: string
  onSale: boolean
  status: string
  category: string
}
