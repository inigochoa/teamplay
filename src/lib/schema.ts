import type { GameListLdJson, GamePageLdJson } from '../types/ld-json'
import site from '../data/site'

export function getListLdJson(baseURL: URL|undefined, game: any): GameListLdJson {
  const base = String(baseURL).replace(/\/$/, '')

  return {
    '@type': 'ListItem',
    position: 0,
    name: game.data.name,
    url: `${base}/juegos/${game.slug}`,
  }
}

export function getPageLdJson(baseURL: URL|undefined, game: any): GamePageLdJson {
  const base = String(baseURL).replace(/\/$/, '')

  return {
    '@context': 'https://schema.org',
    '@type': 'Game',
    name: game.data.name,
    description: game.data.summary,
    url: `${base}/juegos/${game.slug}`,
    author: {
      '@type': 'Person',
      name: site.chef.name,
      url: site.chef.url,
    },
    genre: game.data.tags,
    keywords: 'team building, dinámica, juego, equipo',
  }
}
