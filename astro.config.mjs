// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	site: "https://smoothcsv.com/",

	i18n: {
		defaultLocale: "en",
		locales: ["en", "ja"],
		routing: "manual",
	},

	server: {
		host: "0.0.0.0",
	},

	output: "server",
	adapter: cloudflare(),
});
