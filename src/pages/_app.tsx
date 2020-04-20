import React from "react";
import { Container, AppProps } from "next/app";
import Header from "../components/Header";
import Body from "../components/Body";
import Content from "../components/Content";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Container>
      <Body>
        <Header />
        <Content>
          <Component {...pageProps} />
        </Content>
      </Body>
    </Container>
  );
};

export default MyApp;
