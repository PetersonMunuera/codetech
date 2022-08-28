export type ProductProps = {
  image: string
  name: string
  rating: number
  oldPrice: number
  currentPrice: number
}

export type ProductsList = {
  products: ProductProps[]
}