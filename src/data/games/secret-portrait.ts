import GameInternal from '../../models/GameInternal'

const secretPortrait = new GameInternal(
  '👤',
  'secret-portrait',
  'Retrato secreto',
  ['Colaboración', 'Confianza', 'Deducción'],
  `
    <p>"Retrato secreto" es un juego en el que cada uno se describe usando varias
    categorías y, a partir de esas pistas, los demás tienen que adivinar de quién
    se trata.</p>

    <p>Ejemplos de categorías:</p>

    <ul>
      <li><strong>Gustos:</strong> música, comida, hobbies</li>
      <li><strong>Juegos:</strong> videojuegos, deportes, juegos de mesa</li>
      <li><strong>Viajes:</strong> destinos soñados o aventuras vividas</li>
      <li><strong>Películas:</strong> géneros o títulos favoritos</li>
      <li><strong>Libros:</strong> autores o historias que te han marcado</li>
      <li><strong>Series:</strong> series imprescindibles o de culto</li>
      <li><strong>Anécdotas</strong></li>
    </ul>
  `,
)

export default secretPortrait
