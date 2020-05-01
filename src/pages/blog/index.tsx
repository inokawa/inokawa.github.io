import { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import { readArticles } from "../../utils/article";
import { extractFrontmatter } from "../../utils/markdown";

type Prop = { articles: { id: string; frontmatter: { [key: string]: any } }[] };

const Page: NextPage<Prop> = ({ articles }) => {
  return (
    <div>
      {articles.map((d) => (
        <div key={d.id}>
          <Link href={`/blog/${d.id}`}>
            <a>{`${d.frontmatter.date || "nodate"} - ${
              d.frontmatter.title || "notitle"
            }`}</a>
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
      articles: articles.map((a) => {
        return {
          id: a.id,
          frontmatter: extractFrontmatter(a.content),
        };
      }),
    },
  };
};

export default Page;
