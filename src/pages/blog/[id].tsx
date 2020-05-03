import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { extractFrontmatter } from "../../utils/markdown";
import { readArticle, readArticles } from "../../utils/article";
import Article from "../../components/Article";
import ArticleWrapper from "../../components/ArticleWrapper";
import Toc from "../../components/Toc";

type Param = { id: string };
type Prop = {
  mdText: string;
  frontmatter: { [key: string]: any };
};

const pageStyle = {
  display: "flex",
  flex: 1,
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "center",
} as const;


const Page: NextPage<Prop> = ({ mdText, frontmatter }) => {
  return (
    <div style={pageStyle}>
      <ArticleWrapper>
        <div>
          <h1>{frontmatter.title || "notitle"}</h1>
        </div>
        <Article md={mdText} />
      </ArticleWrapper>
      </div>
      <Toc md={mdText} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<Prop, Param> = async ({
  params,
}) => {
  const article = readArticle(params?.id || "");
  return {
    props: {
      mdText: article.content,
      frontmatter: extractFrontmatter(article.content),
    },
  };
};

export const getStaticPaths: GetStaticPaths<Param> = async () => {
  const articles = readArticles();
  return {
    paths: articles.map((d) => ({ params: { id: d.id } })),
    fallback: false,
  };
};

export default Page;
