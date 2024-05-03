import { readArticle } from "../../utils/article";
import { md2React } from "../../utils/markdown";

export default async () => {
  const article = await readArticle("about");
  return (
    <div>
      <div style={{ flex: 1 }}>{md2React(article)}</div>
    </div>
  );
};
