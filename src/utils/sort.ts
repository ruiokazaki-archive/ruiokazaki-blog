import type { Post } from "@type/post";
import type { MDXInstance } from "astro";

const sort = (allPosts: MDXInstance<Post>[]) =>
  allPosts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).valueOf() -
      new Date(a.frontmatter.date).valueOf()
  );

export default sort;
