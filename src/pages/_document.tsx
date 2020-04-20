import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <style jsx global>{`
            body {
              margin: 0;
              padding: 0;
              font-size: 18px;
              font-weight: 400;
              line-height: 1.8;
              color: #333;
              font-family: sans-serif;
            }
            h1 {
              font-weight: 700;
            }
            p {
              margin-bottom: 10px;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
