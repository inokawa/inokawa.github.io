import unified from "unified";
import markdown from "remark-parse";
// @ts-ignore
import remark2rehype from "remark-rehype";
// @ts-ignore
import html from "rehype-stringify";

const processor = unified()
  .use(markdown, { commonmark: true })
  .use(remark2rehype)
  .use(html);

export const createHtml = async (input: string) => processor.process(input);
