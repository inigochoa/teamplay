import Game from './Game'

class GameInternal extends Game {
  timer?: number

  setTimer(timer: number): GameInternal {
    this.timer = timer

    return this
  }
}

export default GameInternal
