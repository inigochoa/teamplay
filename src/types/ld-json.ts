type Author = {
  '@type': 'Person'
  name: string
  url?: string
}

export type GameListLdJson = {
  '@type': 'ListItem'
  position: number
  name: string
  url: string
}

export type GamePageLdJson = {
  '@context': 'https://schema.org'
  '@type': 'Game'
  name: string
  description: string
  url: string
  author: Author
  genre: string[]
  keywords: string
}
