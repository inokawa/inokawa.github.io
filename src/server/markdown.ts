import "server-only";
import { unified } from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import rehype2react from "rehype-react";
import gfm from "remark-gfm";
import slug from "remark-slug";
import toc from "remark-extract-toc";
import frontmatter from "remark-frontmatter";
import highlight from "rehype-highlight";
import matter from "gray-matter";
import { remove } from "./unist";
import { ReactElement } from "react";
import production from "react/jsx-runtime";

export const md2React = (mdText: string): ReactElement => {
  const processor = unified()
    .use(markdown)
    .use(gfm)
    .use(frontmatter, ["yaml", "toml"])
    .use(slug)
    .use(remove, ["yaml", "toml"])
    .use(remark2rehype)
    .use(highlight)
    .use(rehype2react, production);

  return processor().processSync(mdText).result;
};

export type Toc = {
  depth: number;
  value: string;
  children: Toc[];
  data: { id: string };
};

export const extractToc = (mdText: string): Toc[] => {
  const processor = unified()
    .use(markdown)
    .use(slug)
    .use(toc, { keys: ["data"] });

  const node = processor().parse(mdText);
  return processor().processSync(node).result;
};

export type Frontmatter = { title: string; date: string; categories: string[] };

export const extractFrontmatter = (mdText: string): Frontmatter => {
  const fm = matter(mdText).data;
  return {
    title: fm.title || "notitle",
    date: fm.date || "nodate",
    categories: fm.categories || [],
  };
};
