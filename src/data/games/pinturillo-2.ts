import GameExternal from '../../models/GameExternal'

const pinturilloTwo = new GameExternal()
  .setIcon('🖌️')
  .setLink('https://www.pinturillo2.com/es/')
  .setName('Pinturillo 2')
  .setSlug('pinturillo-2')
  .setTags(['Competitivo', 'Creatividad', 'Dibujar', 'En línea'])
  .setDescription(`
    <p>¡Afila el lápiz virtual! Uno dibuja, los demás intentan adivinar qué es antes de
    que se acabe el tiempo. Desde cosas simples como "gato" hasta conceptos
    abstractos como "desesperación", este juego de dibujo pone a prueba la
    creatividad y la rapidez. Y sí, el arte puede volverse... bastante surealista.</p>
  `)
  .setDescriptionShort('Dibuja palabras mientras los demás intentan adivinar lo más rápido posible en este divertido reto de creatividad.')

export default pinturilloTwo
