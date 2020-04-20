import { NextPage } from "next";
import Header from "../components/Header";
import Body from "../components/Body";
import Content from "../components/Content";

const Page: NextPage = () => {
  return (
    <Body>
      <Header />
      <Content>
        <p>WIP</p>
      </Content>
    </Body>
  );
};

export default Page;
