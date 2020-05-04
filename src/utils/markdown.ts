import unified from "unified";
import markdown from "remark-parse";
// @ts-ignore
import remark2rehype from "remark-rehype";
// @ts-ignore
import rehype2react from "rehype-react";
// @ts-ignore
import slug from "remark-slug";
// @ts-ignore
import toc from "remark-extract-toc";
import frontmatter from "remark-frontmatter";
// @ts-ignore
import highlight from "rehype-highlight";
import matter, { GrayMatterFile } from "gray-matter";
import React from "react";
import { remove } from "./unist";

export const createContentReact = (
  mdText: string,
  components: { [key: string]: React.ReactNode }
): React.ReactElement => {
  const processor = unified()
    .use(markdown, { commonmark: true })
    .use(frontmatter, ["yaml", "toml"])
    .use(slug)
    .use(remove, ["yaml", "toml"])
    .use(remark2rehype)
    .use(highlight)
    .use(rehype2react, {
      createElement: React.createElement,
      components,
    });

  const data = processor().processSync(mdText);
  return (data as any).result as React.ReactElement;
};

export type Toc = {
  depth: number;
  value: string;
  children: Toc[];
  data: { id: string };
};

export const extractToc = (mdText: string): Toc[] => {
  const processor = unified()
    .use(markdown, { commonmark: true })
    .use(slug)
    .use(toc, { keys: ["data"] });

  const node = processor().parse(mdText);
  const data = processor().runSync(node);
  return (data as any) as Toc[];
};

export const extractFrontmatter = (
  mdText: string
): GrayMatterFile<string>["data"] => {
  return matter(mdText).data;
};
