import GameInternal from '../../models/GameInternal'

const retratoSecreto = new GameInternal()
  .setIcon('👤')
  .setName('Retrato secreto')
  .setSlug('retrato-secreto')
  .setTags(['Confianza', 'Cooperativo', 'Deducción', 'Presencial'])
  .setDescription(
    `
      <p>¿Quién es quién en base a sus propias descripciones? Cada persona escribe de
      forma anónima una descripción suya según varias categorías y el grupo debe
      adivinar quién es quién. Un juego perfecto para conocerse mejor y descubrir cómo
      te ven los demás.</p>

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
    `
  )
  .setDescriptionShort('Los jugadores se describen anónimamente en una categoría, y el grupo debe adivinar quién es quién.')
  .setTimer(120)

export default retratoSecreto
