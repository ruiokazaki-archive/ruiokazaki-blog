import type { AstroComponentFactory } from "astro/dist/runtime/server";

export type Post = {
  Content: AstroComponentFactory;
  frontmatter: {
    title: string;
    date: string;
    slug: string;
    tags: string[];
  };
  url: string;
};
