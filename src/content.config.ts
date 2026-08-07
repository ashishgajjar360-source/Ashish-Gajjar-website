import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: ["**/*.md", "!**/README.md"], base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    category: z.string().default("Graphic"),
    image: z.string().optional(),
    aspectRatio: z.string().default("3/4"),
    col: z.number().default(1),
    date: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { posts };
