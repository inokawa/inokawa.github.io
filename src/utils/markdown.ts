import unified from "unified";
import markdown from "remark-parse";
// @ts-ignore
import remark2rehype from "remark-rehype";
// @ts-ignore
import rehype2react from "rehype-react";
// @ts-ignore
import slug from "remark-slug";
import contents from "remark-contents";
import frontmatter from "remark-frontmatter";
// @ts-ignore
import highlight from "rehype-highlight";
import matter, { GrayMatterFile } from "gray-matter";
import React from "react";
import filter from "./unistFilter";

export const createContentReact = (
  mdText: string,
  components: { [key: string]: React.ReactNode }
): React.ReactElement => {
  const processor = unified()
    .use(markdown, { commonmark: true })
    .use(frontmatter, ["yaml", "toml"])
    .use(slug)
    .use(filter, ["yaml", "toml"])
    .use(remark2rehype)
    .use(highlight)
    .use(rehype2react, {
      createElement: React.createElement,
      components,
    });

  const data = processor().processSync(mdText);
  return (data as any).result as React.ReactElement;
};

export const createTocReact = (
  mdText: string,
  components: { [key: string]: React.ReactNode }
): React.ReactElement => {
  const processor = unified()
    .use(markdown, { commonmark: true })
    .use(contents)
    .use(remark2rehype)
    .use(rehype2react, { createElement: React.createElement, components });

  const data = processor().processSync(mdText);
  return (data as any).result as React.ReactElement;
};

export const extractFrontmatter = (
  mdText: string
): GrayMatterFile<string>["data"] => {
  return matter(mdText).data;
};
