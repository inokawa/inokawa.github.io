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
import matter, { GrayMatterFile } from "gray-matter";
import React from "react";
import filter from "./unistFilter";

export const createReactElement = (input: string): React.ReactElement => {
  const processor = unified()
    .use(markdown, { commonmark: true })
    .use(frontmatter, ["yaml", "toml"])
    .use(slug)
    .use(filter, ["yaml", "toml"])
    .use(remark2rehype)
    .use(rehype2react, { createElement: React.createElement });

  const data = processor().processSync(input);
  return (data as any).result as React.ReactElement;
};

export const createContents = (input: string): React.ReactElement => {
  const processor = unified()
    .use(markdown, { commonmark: true })
    .use(contents)
    .use(remark2rehype)
    .use(rehype2react, { createElement: React.createElement });

  const data = processor().processSync(input);
  return (data as any).result as React.ReactElement;
};

export const extractFrontmatter = (
  input: string
): GrayMatterFile<string>["data"] => {
  return matter(input).data;
};
