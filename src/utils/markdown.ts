import unified from "unified";
import markdown from "remark-parse";
// @ts-ignore
import remark2rehype from "remark-rehype";
// @ts-ignore
import html from "rehype-stringify";
// @ts-ignore
import slug from "remark-slug";
// @ts-ignore
import toc from "remark-extract-toc";
import frontmatter from "remark-frontmatter";
import matter from "gray-matter";
import { remove } from "./unified/unist";
import { colorize } from "./unified/hast";

export const createContentHtml = async (mdText: string) => {
  const processor = unified()
    .use(markdown, { commonmark: true })
    .use(frontmatter, ["yaml", "toml"])
    .use(slug)
    .use(remove as any, ["yaml", "toml"])
    .use(remark2rehype)
    .use(colorize)
    .use(html, { allowDangerousHtml: true });

  const data = await processor().process(mdText);
  return (data as any).contents as string;
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
