import unified from "unified";
import markdown from "remark-parse";
// @ts-ignore
import remark2rehype from "remark-rehype";
// @ts-ignore
import html from "rehype-stringify";
// @ts-ignore
import slug from "remark-slug";
import contents from "remark-contents";

const processor = unified()
  .use(markdown, { commonmark: true })
  .use(slug)
  .use(remark2rehype)
  .use(html)
  .freeze();

const contentsProcessor = unified()
  .use(markdown, { commonmark: true })
  .use(contents)
  .use(remark2rehype)
  .use(html)
  .freeze();

export const createHtml = async (input: string): Promise<string> => {
  const data = await processor().process(input);
  return data.contents as string;
};

export const createContents = async (input: string): Promise<string> => {
  const data = await contentsProcessor().process(input);
  return data.contents as string;
};
