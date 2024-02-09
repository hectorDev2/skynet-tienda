export interface TShirt {
  id: string
  name: string
  category: number
  price: number
  colors: Color[]
  description: string
  image: string[]
}

export interface Color {
  id: number
  name: string
}
