import { readArticle } from "../../src/utils/article";
import Article from "../../src/components/Article";

export default async () => {
  const article = await readArticle("about");
  return (
    <div>
      <Article md={article.content} />
    </div>
  );
};
