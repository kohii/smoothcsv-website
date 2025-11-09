// @ts-check

import cloudflare from "@astrojs/cloudflare";

import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	site: "https://smoothcsv.com/",

	i18n: {
		defaultLocale: "en",
		locales: [
			"en",
			"zh-cn",
			"fr",
			"it",
			"es",
			"ja",
			"de",
			"ru",
			"ko",
			"pt",
		],
		routing: "manual",
	},

	server: {
		host: "0.0.0.0",
	},

	output: "server",
	adapter: cloudflare(),
});
