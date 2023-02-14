import { extractFrontmatter } from "../../../src/utils/markdown";
import { readArticle, readPosts } from "../../../src/utils/article";
import ArticleHeader from "../../../src/components/ArticleHeader";
import Article from "../../../src/components/Article";
import ArticleWrapper from "../../../src/components/ArticleWrapper";
import Toc from "../../../src/components/Toc";

type Param = { id: string };

const Page = ({ params }: { params: Param }) => {
  const article = readArticle(`posts/${params.id}`);
  const frontmatter = extractFrontmatter(article.content);
  const mdText = article.content;

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-around",
      }}
    >
      <ArticleWrapper>
        <ArticleHeader frontmatter={frontmatter} />
        <Article md={mdText} />
      </ArticleWrapper>
      <Toc md={mdText} />
    </div>
  );
};

export const generateStaticParams = async () => {
  const articles = readPosts();
  return articles.map((d) => ({ id: d.id }));
};

export default Page;
