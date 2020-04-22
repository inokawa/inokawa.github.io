import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { createHtml, createContents } from "../../utils/markdown";
import { readArticle, readArticles } from "../../utils/article";
import Toc from "../../components/Toc";

type Param = { id: string };
type Prop = { textHtml: string; tocHtml: string };

const pageStyle = {
  display: "flex",
  flex: 1,
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "center",
} as const;

const textStyle = {
  flex: 1,
};

const Page: NextPage<Prop> = ({ textHtml, tocHtml }) => {
  return (
    <div style={pageStyle}>
      <div
        style={textStyle}
        dangerouslySetInnerHTML={{
          __html: textHtml,
        }}
      />
      <Toc html={tocHtml} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<Prop, Param> = async ({
  params,
}) => {
  const text = readArticle(params?.id || "");
  const html = await createHtml(text);
  const toc = await createContents(text);
  return {
    props: {
      textHtml: html,
      tocHtml: toc,
    },
  };
};

export const getStaticPaths: GetStaticPaths<Param> = async () => {
  const paths = readArticles();
  return {
    paths: paths.map((d) => ({ params: { id: d.id } })),
    fallback: false,
  };
};

export default Page;
