import type { InternalGame } from '../../types/game'

const stop: InternalGame = {
  content: `
    <p>"Stop" es un juego en el que se elige una letra al azar y, en un tiempo
    limitado, cada jugador debe escribir una palabra que empiece por esa letra para
    cada categoría establecida. Al acabar la ronda, se comparan las respuestas y se
    otorgan puntos por originalidad y si nadie ha puesto la misma palabra.</p>

    <p>Por ejemplo, algunas categorías pueden ser:</p>

    <ul>
      <li><strong>Nombre</strong></li>
      <li><strong>Apellido</strong></li>
      <li><strong>Ciudad</strong></li>
      <li><strong>Animal</strong></li>
      <li><strong>Comida</strong></li>
      <li><strong>Objeto</strong></li>
    </ul>
  `,
  icon: '🛑',
  link: 'stop',
  name: 'Stop',
  type: 'internal',
}

export default stop
