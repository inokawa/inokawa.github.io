import { NextPage, GetStaticProps } from "next";
import { readArticles } from "../../utils/article";

type Prop = { contents: { id: string; content: string }[] };

const Page: NextPage<Prop> = ({ contents }) => {
  return (
    <div>
      {contents.map((d) => (
        <div>{d.id + " - " + d.content}</div>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = readArticles();
  return {
    props: {
      contents: posts,
    },
  };
};

export default Page;
