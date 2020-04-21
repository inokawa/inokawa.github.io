import React from "react";
import { AppProps } from "next/app";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import Content from "../components/Content";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Component {...pageProps} />
      </Content>
    </Wrapper>
  );
};

export default MyApp;
