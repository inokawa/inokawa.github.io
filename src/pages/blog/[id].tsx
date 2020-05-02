import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { createContents, extractFrontmatter } from "../../utils/markdown";
import { readArticle, readArticles } from "../../utils/article";
import Article from "../../components/Article";
import Toc from "../../components/Toc";

type Param = { id: string };
type Prop = {
  textMd: string;
  tocHtml: string;
  frontmatter: { [key: string]: any };
};

const pageStyle = {
  display: "flex",
  flex: 1,
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "center",
} as const;

const contentStyle = {
  flex: 1,
};

const Page: NextPage<Prop> = ({ textMd, tocHtml, frontmatter }) => {
  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <div>
          <h1>{frontmatter.title || "notitle"}</h1>
        </div>
        <Article md={textMd} />
      </div>
      <Toc html={tocHtml} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<Prop, Param> = async ({
  params,
}) => {
  const article = readArticle(params?.id || "");
  const toc = await createContents(article.content);
  return {
    props: {
      textMd: article.content,
      tocHtml: toc,
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
