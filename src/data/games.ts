const modules = import.meta.glob('./games/*.ts', { eager: true })
const games = Object
  .values(modules)
  .map((mod: any) => mod.default)

export default games
