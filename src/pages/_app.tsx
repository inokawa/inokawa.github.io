import React from "react";
import { AppProps } from "next/app";
import "normalize.css";
import Wrapper from "../components/layout/Wrapper";
import Header from "../components/layout/Header";
import Content from "../components/layout/Content";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Wrapper>
      <Content>
        <Header />
        <Component {...pageProps} />
      </Content>
    </Wrapper>
  );
};

export default MyApp;
