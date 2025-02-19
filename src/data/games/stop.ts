import GameInternal from '../../models/GameInternal'

const stop = new GameInternal()
  .setIcon('🛑')
  .setName('Stop')
  .setSlug('stop')
  .setTags(['Competitivo', 'Presencial', 'Trivia'])
  .setDescription(
    `
      <p>El reto de pensar rápido. Se elige una letra y los jugadores deben escribir
      palabras que empiecen con ella en distintas categorías. El primero en completar
      todas grita "STOP" y los demás deben dejar de escribir. Quien tenga más palabras
      válidas, gana. ¿Se te ocurre un país que empiece por "J"?</p>

      <p>Por ejemplo, algunas categorías pueden ser:</p>

      <ul>
        <li><strong>Nombre</strong></li>
        <li><strong>Apellido</strong></li>
        <li><strong>Ciudad</strong></li>
        <li><strong>Animal</strong></li>
        <li><strong>Comida</strong></li>
        <li><strong>Objeto</strong></li>
      </ul>
    `
  )
  .setDescriptionShort('Un reto de vocabulario en el que debes escribir palabras que comiencen con una letra dada en diferentes categorías.')
  .setTimer(120)

export default stop
