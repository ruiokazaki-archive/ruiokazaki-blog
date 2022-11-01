---
name: "Article"
root: "public/contents"
output: "."
questions:
  title: "Title"
  slug: "Slug"
---

# `{{ inputs.slug | kebab }}/{{ inputs.slug | kebab }}.mdx`

```mdx
---
title: "{{ inputs.title }}"
description: "{{ inputs.title }}についての記事です。"
slug: "{{ inputs.slug | kebab }}"
date: "{{date "YYYY-MM-DD"}}"
tags:
  - ""
thumbnail: "thumbnail.jpg"
---

import L from "@mdxComponents/Link.astro";
import S from "@mdxComponents/Small.astro";

## まえがき

## さいごに

```
