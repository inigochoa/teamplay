import { defineCollection, z } from 'astro:content'

export const legals = defineCollection({
  schema: z.object({
    name: z.string(),
    summary: z.string(),
  })
})
