import { defineCollection, z } from 'astro:content'

export const games = defineCollection({
  schema: z.object({
    external: z.boolean().default(false),
    icon: z.string().emoji('Must be an emoji'),
    link: z.string().url().optional(),
    name: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    timer: z.number().positive().optional(),
  }).refine(
    (data) => !data.external || !!data.link,
    { message: 'Field "link" is mandatory for "external" games' }
  )
})
