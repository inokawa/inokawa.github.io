import { NextPage } from "next";
import Header from "../components/Header";
import Layout from "../components/Layout";

const Page: NextPage = () => {
  return (
    <Layout>
      <Header />
      <p>Hello Next.js</p>
    </Layout>
  );
};

export default Page;
