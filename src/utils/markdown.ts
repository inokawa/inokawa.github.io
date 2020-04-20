import remark from "remark";
// @ts-ignore
import html from "remark-html";

const processor = remark().use(html).data("settings", { commonmark: true });

export const createHtml = async (input: string): Promise<string> => {
  const data = await processor.process(input);
  return data.contents as string;
};
