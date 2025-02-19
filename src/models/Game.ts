import type { GameListLdJson, GamePageLdJson } from '../types/ld-json'
import site from '../data/site'

abstract class Game {
  description: string = ''
  descriptionShort: string = ''
  icon: string = ''
  name: string = ''
  slug: string = ''
  tags: string[] = []

  getGameLink(): string {
    return `/juegos/${this.slug}`
  }

  getLabel(): string {
    return `Jugar a ${this.name}`
  }

  getListLdJson(baseURL: string): GameListLdJson {
    const base = String(baseURL).replace(/\/$/, '')

    return {
      '@type': 'ListItem',
      position: 0,
      name: this.name,
      url: `${base}${this.getGameLink()}`,
    }
  }

  getPageLdJson(baseURL: string): GamePageLdJson {
    const base = String(baseURL).replace(/\/$/, '')

    return {
      '@context': 'https://schema.org',
      '@type': 'Game',
      name: this.name,
      description: this.descriptionShort,
      url: `${base}${this.getGameLink()}`,
      author: {
        '@type': 'Person',
        name: site.chef.name,
        url: site.chef.url,
      },
      genre: this.tags,
      keywords: 'team building, dinámica, juego, equipo',
    }
  }

  setDescription(description: string) {
    this.description = description

    return this
  }

  setDescriptionShort(descriptionShort: string) {
    this.descriptionShort = descriptionShort

    return this
  }

  setIcon(icon: string) {
    this.icon = icon

    return this
  }

  setName(name: string) {
    this.name = name

    return this
  }

  setSlug(slug: string) {
    this.slug = slug

    return this
  }

  setTags(tags: string[]) {
    this.tags = tags

    return this
  }
}

export default Game
