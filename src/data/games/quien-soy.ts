import GameInternal from '../../models/GameInternal'

const quienSoy = new GameInternal()
  .setIcon('🕵️‍♂️')
  .setName('¿Quién soy?')
  .setSlug('quien-soy')
  .setTags(['Cooperativo', 'Deducción', 'Presencial'])
  .setDescription(
    `
      <p>Coloca un personaje en tu frente (puede ser un famoso, un personaje de ficción o
      hasta alguien del grupo). A través de preguntas de "sí" o "no", intenta
      descubrir quién eres antes de que los demás lo hagan. "¿Soy un superhéroe?"
      "¿Salgo en películas de Disney?" Un juego de deducción que siempre deja momentos
      memorables.</p>
    `
  )
  .setDescriptionShort('Descubre el personaje que tienes en la frente haciendo preguntas de "sí" o "no" hasta acertarlo.')
  .setTimer(120)

export default quienSoy
