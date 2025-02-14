export type GameType = 'external' | 'internal'

interface iGame {
  icon: string
  link: string
  name: string
  type: GameType
}

export interface ExternalGame extends iGame {
}

export interface InternalGame extends iGame {
  content: string
  timer?: number
}

export type Game = ExternalGame | InternalGame
