import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The `blog` collection loads every .md / .mdx file under src/content/blog.
// The frontmatter of each file must match this schema, so a typo in a date
// or a missing title fails the build instead of shipping broken.
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // Relative path to a hero image in the post folder, or omit it.
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    // Set draft: true to keep a post out of production builds.
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
