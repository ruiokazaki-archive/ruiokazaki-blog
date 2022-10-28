import { defineConfig } from "astro/config";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.ruiokazaki.com",
  markdown: {
    syntaxHighlight: "shiki",
  },
  integrations: [
    mdx(),
    react(),
    sitemap({
      filter: (page) => page !== "https://blog.ruiokazaki.com/404",
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
