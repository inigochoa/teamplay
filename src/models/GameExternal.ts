import Game from './Game'

class GameExternal extends Game {
  link: string = ''

  setLink(link: string) {
    this.link = link

    return this
  }
}

export default GameExternal
