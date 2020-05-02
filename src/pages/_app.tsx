import React from "react";
import { AppProps } from "next/app";
import "normalize.css";
import "highlight.js/styles/vs2015.css";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import Content from "../components/Content";

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
