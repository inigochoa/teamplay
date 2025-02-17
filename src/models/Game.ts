import type { LinkProps } from '../types/link-props'

abstract class Game {
  constructor(
    public icon: string,
    public link: string,
    public name: string,
    public tags: string[],
  ) {}

  abstract getGameLink(): LinkProps

  getLabel() {
    return `Jugar a ${this.name}`
  }
}

export default Game
