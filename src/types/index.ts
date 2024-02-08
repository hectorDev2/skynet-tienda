export interface TShirt {
  id: string
  name: string
  category: number
  price: number
  colors: Color[]
  description: string
  image: Image[]
}

export interface Color {
  id: number
  name: string
}

export interface Image {
  id: number
  url: string
}
