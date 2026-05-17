import { readArticle } from "../../server/article";
import { md2React } from "../../server/markdown";

export default async (_: PageProps<"/about">) => {
  const article = await readArticle("about");
  return (
    <div>
      <div style={{ flex: 1 }}>{md2React(article)}</div>
    </div>
  );
};
