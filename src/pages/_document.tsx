import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import {
  BORDER_RADIUS,
  BORDER_WIDTH,
  SPACING,
  COLOR,
} from "../constants/styles";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <style>{`
            body {
              margin: 0;
              padding: 0;
              font-size: 18px;
              font-weight: 400;
              line-height: 1.8;
              color: #333;
              font-family: sans-serif;
            }
            
            code {
              background-color: ${COLOR.LIGHT_GRAY};
              border: solid ${BORDER_WIDTH}px ${COLOR.GRAY};
              border-radius: ${BORDER_RADIUS}px;
              padding: ${SPACING / 2}px;
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
