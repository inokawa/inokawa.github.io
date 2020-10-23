import { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import { readPosts } from "../../utils/article";
import { extractFrontmatter, Frontmatter } from "../../utils/markdown";

type Props = { articles: { id: string; frontmatter: Frontmatter }[] };

const Page: NextPage<Props> = ({ articles }) => {
  return (
    <div>
      {articles.map((d) => (
        <div key={d.id}>
          <Link href={`/posts/${d.id}`}>
            <a>{`${d.frontmatter.date} - ${d.frontmatter.title}`}</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const articles = readPosts();

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
