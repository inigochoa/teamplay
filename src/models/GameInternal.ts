import type { LinkProps } from '../types/link-props'
import Game from './Game'

class GameInternal extends Game {
  description: string
  timer?: number

  constructor(
    icon: string,
    link: string,
    name: string,
    description: string,
    timer?: number
  ) {
    super(icon, link, name)

    this.description = description
    this.timer = timer
  }

  getGameLink(): LinkProps {
    return { href: `/games/${this.link}`, linkProps: {} }
  }
}

export default GameInternal
