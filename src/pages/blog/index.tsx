import { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import { readArticles } from "../../utils/article";

type Prop = { contents: { id: string; content: string }[] };

const Page: NextPage<Prop> = ({ contents }) => {
  return (
    <div>
      {contents.map((d) => (
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
  const posts = readArticles();
  return {
    props: {
      contents: posts,
    },
  };
};

export default Page;
