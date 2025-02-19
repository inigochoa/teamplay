import GameExternal from '../../models/GameExternal'

const openguesser = new GameExternal()
  .setIcon('🌍')
  .setLink('https://openguessr.com/')
  .setName('Opengessr')
  .setSlug('openguessr')
  .setTags(['Competitivo', 'En línea', 'Trivia'])
  .setDescription(`
    <p>Viaja sin moverte del sitio y demuestra tus habilidades geográficas. Se te
    muestra una imagen de un lugar del mundo y tienes que adivinar en qué parte
    está. Puede ser una calle de Tokio, un parque de Brasil o una playa perdida en
    Grecia. ¿Hasta dónde llega tu sentido de la orientación?</p>
  `)
  .setDescriptionShort('Pon a prueba tus habilidades geográficas adivinando ubicaciones a partir de imágenes de diferentes partes del mundo.')

export default openguesser
