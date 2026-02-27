export type ApiListResponse<T> = {
  data: T[]
  meta?: unknown
}

export type ApiItemResponse<T> = {
  data: T
  meta?: unknown
}

export type Review = {
  id: string
  username: string
  rating: number
  description: string
  created: string
}

export type Product = {
  id: string
  title: string
  description: string
  image: {
    url: string
    alt: string
  }
  price: number
  discountedPrice: number
  rating: number
  tags?: string[]
  reviews?: Review[]
}