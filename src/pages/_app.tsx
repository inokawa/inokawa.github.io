import React from "react";
import { Container, AppProps } from "next/app";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import Content from "../components/Content";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Container>
      <Wrapper>
        <Header />
        <Content>
          <Component {...pageProps} />
        </Content>
      </Wrapper>
    </Container>
  );
};

export default MyApp;
