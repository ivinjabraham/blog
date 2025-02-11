import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    image: z.string().default("/static/blog-placeholder.png"),
  }),
});

const updates = defineCollection({
  type: "content",
  schema: z.object({
    date: z.coerce.date(),
  }),
});

export const collections = { posts, updates };
