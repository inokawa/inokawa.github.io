import { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import { readArticles, Article } from "../../utils/article";

type Prop = { articles: Article[] };

const Page: NextPage<Prop> = ({ articles }) => {
  return (
    <div>
      {articles.map((d) => (
        <div key={d.id}>
          <Link href={`/blog/${d.id}`}>
            <a>{d.id + " - " + d.content}</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps<Prop> = async () => {
  const articles = readArticles();
  return {
    props: {
      articles,
    },
  };
};

export default Page;
