import { NextPage } from "next";
import Header from "../components/Header";
import Body from "../components/Body";

const Page: NextPage = () => {
  return (
    <Body>
      <Header />
      <p>Hello Next.js</p>
    </Body>
  );
};

export default Page;
