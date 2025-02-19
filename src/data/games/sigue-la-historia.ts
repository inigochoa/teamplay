import GameInternal from '../../models/GameInternal'

const sigueLaHistoria = new GameInternal()
  .setIcon('📜')
  .setName('Sigue la historia')
  .setSlug('sigue-la-historia')
  .setTags(['Cooperativo', 'Creatividad', 'Improvisación', 'Presencial'])
  .setDescription(
    `
      <p>Imaginación al poder. Los participantes escriben personajes, acciones, lugares y
      objetos en papeles que se sacan aleatoriamente. A partir de estos elementos, se
      construye una historia en cadena donde cada persona añade una parte improvisada.
      Puede ser una aventura épica, un misterio o una comedia absurda. "Érase una vez
      un gato que quería ser astronauta..." y de repente, alguien lo manda a un mundo
      de queso gigante. ¿Hasta dónde puede llegar la locura?</p>
    `
  )
  .setDescriptionShort('Cada jugador contribuye con una parte de la historia usando elementos al azar, creando relatos inesperados y divertidos.')

export default sigueLaHistoria
