import { getCollection } from "astro:content";
import type { Language } from "@i18n/constants";
import { blogArticles } from "./blogArticles";

export type BlogEntry =
	| {
			type: "internal";
			title: string;
			description: string;
			publishedAt: string;
			slug: string;
			language: Language;
	  }
	| {
			type: "external";
			title: string;
			description: string;
			publishedAt: string;
			url: string;
			platform: string;
	  };

export async function getAllBlogEntries(
	language: Language,
): Promise<BlogEntry[]> {
	const posts = await getCollection("blog", (entry) => {
		const entryLang = entry.id.split("/")[0];
		return entryLang === language && !entry.data.draft;
	});

	const internalEntries: BlogEntry[] = posts.map((post) => {
		const slug = post.id.split("/").slice(1).join("/").replace(/\.md$/, "");
		return {
			type: "internal",
			title: post.data.title,
			description: post.data.description,
			publishedAt: post.data.publishedAt,
			slug,
			language: language,
		};
	});

	const externalEntries: BlogEntry[] = blogArticles
		.filter((article) => article.language === language)
		.map((article) => ({
			type: "external",
			title: article.title,
			description: article.description,
			publishedAt: article.publishedAt,
			url: article.url,
			platform: article.platform,
		}));

	const allEntries = [...internalEntries, ...externalEntries];
	allEntries.sort(
		(a, b) =>
			new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
	);
	return allEntries;
}
