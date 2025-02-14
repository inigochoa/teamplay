import type { InternalGame } from '../../types/game'

const twoTruthsOneLie: InternalGame = {
  content: `
    <p>"2 verdades, 1 mentira" es un juego en el que cada participante dice tres
    afirmaciones sobre sí mismo: dos son ciertas y una es falsa. Los demás deben
    adivinar cuál es la mentira. Es ideal para romper el hielo y conocer datos
    curiosos de la gente.</p>
  `,
  icon: '🤥',
  link: '2-truths-1-lie',
  name: '2 verdades, 1 mentira',
  timer: 150,
  type: 'internal',
}

export default twoTruthsOneLie
