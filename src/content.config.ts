import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: ["**/*.md", "!**/README.md"], base: "./src/content/posts" }),
  schema: z.object({
    title: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    img: z.string().optional(),
    aspectRatio: z.union([z.string(), z.number()]).optional().default("3/4"),
    col: z.number().optional().default(1),
    date: z.union([z.string(), z.date()]).optional(),
    description: z.string().optional(),
  }),
});

const specificwork = defineCollection({
  loader: glob({ pattern: ["**/*.md", "!**/README.md"], base: "./src/content/specificwork" }),
  schema: z.object({
    title: z.string().optional(),
    mediaType: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    img: z.string().optional(),
    isHero: z.boolean().optional().default(false),
    aspectRatio: z.union([z.string(), z.number()]).optional().default("3/4"),
    col: z.number().optional().default(1),
    date: z.union([z.string(), z.date()]).optional(),
    description: z.string().optional(),
  }),
});

export const collections = { posts, specificwork };
