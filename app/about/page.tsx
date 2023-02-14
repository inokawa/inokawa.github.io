import { readArticle } from "../../src/utils/article";
import Article from "../../src/components/Article";

const Page = () => {
  const article = readArticle("about");
  return (
    <div>
      <Article md={article.content} />
    </div>
  );
};

export default Page;
