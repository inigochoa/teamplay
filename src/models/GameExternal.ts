import type { LinkProps } from '../types/link-props'
import Game from './Game'

class GameExternal extends Game {
  constructor(
    icon: string,
    link: string,
    name: string,
  ) {
    super(icon, link, name)
  }

  getGameLink(): LinkProps {
    return { href: this.link, linkProps: { target: '_blank', rel: 'noopener noreferrer' } }
  }
}

export default GameExternal
