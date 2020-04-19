import { NextPage } from "next";
import { createHtml } from "../utils/markdown";

type Prop = { data: string };

const Page: NextPage<Prop, {}> = ({ data }) => {
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

Page.getInitialProps = async () => {
  const res = await createHtml(`
  # はじめてのRemark
  **太字**_斜体_テキスト
  `);
  return { data: res };
};

export default Page;
