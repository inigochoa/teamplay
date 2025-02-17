import type Game from '../models/Game'
import games from './games'

const filters = Array.from(new Set(games.flatMap((game: Game) => game.tags))).sort((a: string, b: string) => a.localeCompare(b))

export default filters
