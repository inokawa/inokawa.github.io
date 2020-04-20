import React from "react";
import App, { Container } from "next/app";
import Header from "../components/Header";
import Body from "../components/Body";
import Content from "../components/Content";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

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
  }
}

export default MyApp;
