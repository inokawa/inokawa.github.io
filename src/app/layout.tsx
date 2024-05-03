import "normalize.css";
import "./global.css";
import "highlight.js/styles/vs2015.css";
import styles from "./layout.module.css";
import { LinkTab } from "./_components/LinkTab";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <title>inokawa.github.io</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </head>
      <body>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.header}>
              <div className={styles["tab-area"]}>
                <LinkTab href="/" title="Home" />
                <LinkTab href="/about" title="About" />
                <LinkTab href="/posts" title="Posts" />
              </div>
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
