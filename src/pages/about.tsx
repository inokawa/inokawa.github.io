import { GetStaticProps, NextPage } from "next";
import { readArticle } from "../utils/article";
import Article from "../components/Article";

type Props = {
  mdText: string;
};
const Page: NextPage<Props> = ({ mdText }) => {
  return (
    <div>
      <Article md={mdText} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const article = readArticle("about");
  return {
    props: {
      mdText: article.content,
    },
  };
};

export default Page;
