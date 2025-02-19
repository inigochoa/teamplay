import GameExternal from '../../models/GameExternal'

const etiquetas = new GameExternal()
  .setIcon('🔖')
  .setLink('https://juegos.nrnnm.com/etiquetas/')
  .setName('Etiquetas')
  .setSlug('etiquetas')
  .setTags(['Confianza', 'Cooperativo', 'Deducción', 'En línea'])
  .setDescription(`
    <p>Un juego sobre identidad y percepción. La web elige cinco etiquetas al azar y
    cada jugador selecciona las que mejor lo representan. Luego, el grupo intenta
    adivinar qué palabras eligió cada uno. ¿Te ven como "aventurero", "creativo" o
    "fan de la pizza"? Un juego perfecto para conocerse mejor y sorprenderse con las
    coincidencias.</p>
  `)
  .setDescriptionShort('Elige las cinco etiquetas que mejor te representan y deja que el grupo intente adivinarlas.')

export default etiquetas
