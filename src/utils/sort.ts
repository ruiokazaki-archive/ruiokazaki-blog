import type { Post } from "@type/post";

const sort = (allPosts: Post[]) =>
  allPosts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).valueOf() -
      new Date(a.frontmatter.date).valueOf()
  );

export default sort;
