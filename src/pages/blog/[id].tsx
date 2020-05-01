import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import {
  createHtml,
  createContents,
  extractFrontmatter,
} from "../../utils/markdown";
import { readArticle, readArticles } from "../../utils/article";
import Toc from "../../components/Toc";

type Param = { id: string };
type Prop = {
  textHtml: string;
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

const textStyle = {
  flex: 1,
};

const Page: NextPage<Prop> = ({ textHtml, tocHtml, frontmatter }) => {
  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <div>
          <h1>{frontmatter.title || "notitle"}</h1>
        </div>
        <div
          style={textStyle}
          dangerouslySetInnerHTML={{
            __html: textHtml,
          }}
        />
      </div>
      <Toc html={tocHtml} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<Prop, Param> = async ({
  params,
}) => {
  const article = readArticle(params?.id || "");
  const html = await createHtml(article.content);
  const toc = await createContents(article.content);
  return {
    props: {
      textHtml: html,
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
