import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishedAt: z.string(),
		draft: z.boolean().default(false),
	}),
});

export const collections = { blog };
