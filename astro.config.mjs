// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://smoothcsv.com/",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
  },
  server: {
    host: "0.0.0.0",
  },
});
