import type { Language } from "@i18n/constants";

export interface BlogArticle {
	title: string;
	description: string;
	url: string;
	publishedAt: string;
	language: Language;
	platform: "zenn.dev" | "dev.to";
}

export const blogArticles: BlogArticle[] = [
	// English articles on dev.to
	{
		title: "The Technology Behind SmoothCSV - The Ultimate CSV Editor",
		description:
			"I released SmoothCSV 3, so I'll explain the architecture and technical details of SmoothCSV.",
		url: "https://dev.to/kohii/the-technology-behind-smoothcsv-the-ultimate-csv-editor-3lg0",
		publishedAt: "2025-06-30",
		language: "en",
		platform: "dev.to",
	},
	{
		title: "How to Implement Virtual Scrolling Beyond the Browser's Limit",
		description:
			"Technical guide on implementing custom virtual scrolling to handle datasets beyond browser rendering limits.",
		url: "https://dev.to/kohii/how-to-implement-virtual-scrolling-beyond-the-browsers-limit-16ol",
		publishedAt: "2024-10-08",
		language: "en",
		platform: "dev.to",
	},
	// Japanese articles on zenn.dev
	{
		title: "最強のCSVエディタ「SmoothCSV」を支える技術",
		description:
			"SmoothCSV 3 をリリースしたので、アーキテクチャや技術的な工夫について解説します。",
		url: "https://zenn.dev/kohii/articles/23fee770d7dbe8",
		publishedAt: "2025-07-01",
		language: "ja",
		platform: "zenn.dev",
	},
	{
		title: "バーチャルスクロールの限界を突破する",
		description:
			"バーチャルスクロールの限界の説明と、その限界を超えるための独自実装の解説。",
		url: "https://zenn.dev/kohii/articles/50e0bf572aac0b",
		publishedAt: "2024-10-08",
		language: "ja",
		platform: "zenn.dev",
	},
	{
		title: "人生3回目のCSVエディタを作っている話",
		description:
			"私は今、人生で3回目の CSV エディタを作っています。もはや狂気です。なぜ作り始め、なぜ今また作り直しているかみたいな話を書きたいと思います。",
		url: "https://zenn.dev/kohii/articles/079c73ab14856f",
		publishedAt: "2024-09-12",
		language: "ja",
		platform: "zenn.dev",
	},
];

export function getArticlesByLanguage(language: Language): BlogArticle[] {
	return blogArticles
		.filter((article) => article.language === language)
		.sort(
			(a, b) =>
				new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
		);
}
