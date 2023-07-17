import { readArticle } from "../_utils/article";
import Article from "../_components/Article";

export default async () => {
  const article = await readArticle("about");
  return (
    <div>
      <Article md={article.content} />
    </div>
  );
};
