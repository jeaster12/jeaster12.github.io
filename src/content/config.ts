// prettier-ignore-file
import { defineCollection, z } from 'astro:content'

const blogCollection = {
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    featuredImage: z.object({
      url: z.string(),
      name: z.string()
    }),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().optional().default(false)
  })
} as const

const portfolioCollection = {
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      client: z.string(),
      skills: z.array(z.string()),
      featuredImage: z.object({
        url: z.string(),
        name: z.string()
      }).optional(),
      images: z.array(
        z.object({
          url: z.string(),
          name: z.string()
        })
      )
      .optional(),
      tools: z.array(z.string()).optional().default([]),
      tech: z.array(z.string()).optional().default([]),
      links: z.array(
        z.object({
          label: z.string(),
          url: z.string()
        })
      ).optional().default([]),
      tags: z.array(z.string()).default([]),
      date: z.coerce.date(),
      featured: z.boolean().optional().default(false),
      draft: z.boolean().optional().default(false)
    })
} as const

export const collections = {
  blog: defineCollection(blogCollection),
  portfolio: defineCollection(portfolioCollection)
}
