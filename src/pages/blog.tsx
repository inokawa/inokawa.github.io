import { NextPage, GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import { createHtml } from "../utils/markdown";

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

export const getStaticProps: GetStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), "./src/articles/test.md");
  const text = fs.readFileSync(postsDirectory, "utf-8");
  const html = await createHtml(text);
  return {
    props: {
      data: html.contents,
    },
  };
};

export default Page;
