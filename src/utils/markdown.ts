import { unified } from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import rehype2react from "rehype-react";
import slug from "remark-slug";
// @ts-ignore
import toc from "remark-extract-toc";
import frontmatter from "remark-frontmatter";
import highlight from "rehype-highlight";
import matter from "gray-matter";
import { remove } from "./unist";
import { ReactElement } from "rehype-react/lib";
import { createElement } from "react";

export const createContentReact = (mdText: string): ReactElement => {
  const processor = unified()
    .use(markdown)
    .use(frontmatter, ["yaml", "toml"])
    .use(slug)
    .use(remove as any, ["yaml", "toml"])
    .use(remark2rehype)
    .use(highlight)
    .use(rehype2react, {
      createElement,
    });

  const data = processor().processSync(mdText);
  return data.result as React.ReactElement;
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
  const data = processor().runSync(node);
  return data as any as Toc[];
};

export const extractIdFromToc = (nodes: Toc[]): string[] =>
  nodes.reduce<string[]>((acc, node) => {
    acc.push(node.data.id);
    acc.push(...extractIdFromToc(node.children));
    return acc;
  }, []);

export type Frontmatter = { title: string; date: string; categories: string[] };

export const extractFrontmatter = (mdText: string): Frontmatter => {
  const fm = matter(mdText).data;
  return {
    title: fm.title || "notitle",
    date: fm.date || "nodate",
    categories: fm.categories || [],
  };
};
