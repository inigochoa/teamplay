import GameExternal from '../../models/GameExternal'

const kahoot = new GameExternal()
  .setIcon('❓')
  .setLink('https://create.kahoot.it/discover')
  .setName('Kahoot')
  .setSlug('kahoot')
  .setTags(['Competitivo', 'En línea', 'Trivia'])
  .setDescription(`
    <p>Demuestra lo que sabes y pon a prueba tu rapidez. Con preguntas de cultura
    general, curiosidades o temas personalizados, este juego tipo test enfrenta a
    los participantes en una batalla de conocimiento. Cuanto más rápido respondas,
    más puntos consigues. ¿Listo para el reto?</p>
  `)
  .setDescriptionShort('Un desafío de trivia en el que la rapidez y el conocimiento se combinan para ganar puntos en cada pregunta.')

export default kahoot
