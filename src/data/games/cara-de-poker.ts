import GameInternal from '../../models/GameInternal'

const caraDePoker = new GameInternal()
  .setIcon('🃏')
  .setName('Cara de póker')
  .setSlug('cara-de-poker')
  .setTags(['Competitivo', 'Estrategia', 'Presencial', 'Risas'])
  .setDescription(
    `
      <p>Lee algo gracioso sin reírte... si puedes. Cada persona recibe frases o chistes
      y debe leerlos en voz alta sin mostrar emoción. El resto del grupo intenta
      hacerlos reír. Si te ríes, pierdes. Parece fácil, pero con las frases adecuadas,
      aguantar la risa es casi imposible.</p>
    `
  )
  .setDescriptionShort('Lee frases graciosas sin reírte mientras los demás intentan hacerte perder la compostura.')

export default caraDePoker
