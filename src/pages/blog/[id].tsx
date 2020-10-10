import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { extractFrontmatter, Frontmatter } from "../../utils/markdown";
import { readArticle, readArticles } from "../../utils/article";
import ArticleHeader from "../../components/ArticleHeader";
import Article from "../../components/Article";
import ArticleWrapper from "../../components/ArticleWrapper";
import Toc from "../../components/Toc";
import { getCss, getBackgroundColor } from "../../utils/monaco";
import { createContentHtml } from "../../utils/markdown";

type Param = { id: string };
type Prop = {
  html: string;
  frontmatter: Frontmatter;
  codeCss: string;
};

const Page: NextPage<Prop> = ({ html, frontmatter, codeCss }) => {
  return (
    <div>
      <ArticleWrapper>
        <ArticleHeader frontmatter={frontmatter} />
        <Article html={html} />
      </ArticleWrapper>
      {/* <Toc md={mdText} /> */}
      <style jsx>
        {`
          div {
            display: flex;
            flex: 1,
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-around;
          }
        `}
      </style>
      <style>{codeCss}</style>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Prop, Param> = async ({
  params,
}) => {
  const article = readArticle(params?.id || "");
  const codeCss = `pre { background-color: ${getBackgroundColor()}; } ${getCss()}`;
  const html = await createContentHtml(article.content);
  return {
    props: {
      html: html,
      frontmatter: extractFrontmatter(article.content),
      codeCss,
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
