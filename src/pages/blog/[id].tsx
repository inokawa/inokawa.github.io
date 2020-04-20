import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { createHtml } from "../../utils/markdown";
import { readArticle, readArticles } from "../../utils/article";

type Param = { id: string };
type Prop = { data: string };

const Page: NextPage<Prop> = ({ data }) => {
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: data,
        }}
      />
    </div>
  );
};

export const getStaticProps: GetStaticProps<Prop, Param> = async ({
  params,
}) => {
  const text = readArticle(params?.id || "");
  const html = await createHtml(text);
  return {
    props: {
      data: html,
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
