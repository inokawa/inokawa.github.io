import "normalize.css";
import "highlight.js/styles/vs2015.css";
import Wrapper from "./_components/Wrapper";
import { LinkTab } from "./_components/LinkTab";
import { ReactNode } from "react";
import {
  BORDER_RADIUS,
  BORDER_WIDTH,
  COLOR,
  CONTENT_WIDTH,
  TRANSITION,
} from "./_constants/styles";

const MyApp = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <head>
        <title>inokawa.github.io</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
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
              transition: ${TRANSITION};
            }
            a:visited {
              color: ${COLOR.PRIMARY_LIGHT};
            }
            a:hover {
              color: ${COLOR.PRIMARY_DARK};
            }
            
            .content {
              flex: 1;
              align-self: center;
              width: 100%;
              max-width: ${CONTENT_WIDTH}px;
              padding-top: 0px;
              padding-bottom: 2rem;
              padding-left: 2rem;
              padding-right: 2rem;
            }
            .header {
              position: sticky;
              top: 0px;
              display: flex;
              padding-top: 2rem;
              padding-bottom: 2rem;
              background: linear-gradient(
                to top,
                rgba(255, 255, 255, 0),
                #fff 50%
              );
            }
            .tab-area {
              display: flex;
              flex: 1;
              align-items: center;
            }
            
            ::selection {
              color: white;
              background: ${COLOR.PRIMARY_LIGHT};
            }
            
            blockquote {
              border-left: solid 4px ${COLOR.GRAY};
              padding-left: 1rem;
              padding-right: 1rem;
            }
            code {
              background-color: ${COLOR.LIGHT_GRAY};
              border: solid ${BORDER_WIDTH}px ${COLOR.GRAY};
              border-radius: ${BORDER_RADIUS}px;
              padding: 0.5rem;
            }
            table {
              border-collapse: collapse;
              margin: 0.5rem;
            }
            td,th{
              border: solid ${BORDER_WIDTH}px ${COLOR.GRAY};
              padding: 0.5rem;
            }
          `}</style>
      </head>
      <body>
        <Wrapper>
          <div className="content">
            <div className="header">
              <div className="tab-area">
                <LinkTab href="/" title="Home" />
                <LinkTab href="/about" title="About" />
                <LinkTab href="/posts" title="Posts" />
              </div>
            </div>
            {children}
          </div>
        </Wrapper>
      </body>
    </html>
  );
};

export default MyApp;
