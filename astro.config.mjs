import { defineConfig } from "astro/config";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  markdown: {
    syntaxHighlight: "shiki",
  },
  integrations: [mdx()],
});
