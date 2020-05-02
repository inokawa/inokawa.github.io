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
              font-size: 16px;
              font-weight: 400;
              line-height: 1.8;
              color: ${COLOR.BLACK};
              font-family: sans-serif;
              word-wrap: break-word;
            }
            a {
              color: ${COLOR.PRIMARY};
            }
            a:visited {
              color: ${COLOR.PRIMARY_LIGHT};
            }
            
            ::selection {
              color: white;
              background: ${COLOR.PRIMARY_LIGHT};
            }
            
            blockquote {
              display: block;
              border-left: solid 4px ${COLOR.GRAY};
              padding: ${SPACING}px;
              margin: 0;
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
