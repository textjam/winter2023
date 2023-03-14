import { z, defineCollection } from "astro:content";

const submissionsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    creator: z.string(),
    creatorLink: z.string().optional(),
    using: z.array(z.string()).optional(),
    githubProfile: z.string().optional(),
    githubLink: z.string().optional(),
    itchioLink: z.string().optional(),
    devlogPrefix: z.string().optional(),
    wip: z.boolean().default(false),
    example: z.boolean().default(false),
  }),
});

const updatesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

const devlogsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

export const collections = {
  submissions: submissionsCollection,
  updates: updatesCollection,
  devlogs: devlogsCollection,
};
