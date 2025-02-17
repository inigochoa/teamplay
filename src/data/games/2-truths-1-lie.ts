import GameInternal from '../../models/GameInternal'

const twoTruthsOneLie = new GameInternal(
  '🤥',
  '2-truths-1-lie',
  '2 verdades, 1 mentira',
  ['Colaboración', 'Confianza', 'Deducción'],
  `
    <p>"2 verdades, 1 mentira" es un juego en el que cada participante dice tres
    afirmaciones sobre sí mismo: dos son ciertas y una es falsa. Los demás deben
    adivinar cuál es la mentira. Es ideal para romper el hielo y conocer datos
    curiosos de la gente.</p>
  `,
  150,
)

export default twoTruthsOneLie
