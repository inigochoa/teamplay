import type { LinkProps } from '../types/link-props'
import Game from './Game'

class GameExternal extends Game {
  constructor(
    public icon: string,
    public link: string,
    public name: string,
    public tags: string[],
  ) {
    super(icon, link, name, tags)
  }

  getGameLink(): LinkProps {
    return { href: this.link, linkProps: { target: '_blank', rel: 'noopener noreferrer' } }
  }
}

export default GameExternal
