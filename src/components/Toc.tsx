import React from "react";
import { createTocReact } from "../utils/markdown";
import { SPACING, COLOR_LIGHT_GRAY, BORDER_RADIUS } from "../constants/styles";

const tocStyle = {
  position: "sticky",
  alignSelf: "start",
  top: 0,
  width: 300,
} as const;

const Ul: React.FC<{}> = ({ children }) => (
  <ul>
    {children}
    <style jsx>
      {`
        ul {
          margin: 0;
          padding-top: 0px;
          padding-bottom: 0px;
          padding-right: 0px;
          padding-left: ${SPACING}px;
        }
      `}
    </style>
  </ul>
);

const Li: React.FC<{}> = ({ children }) => (
  <li>
    {children}
    <style jsx>
      {`
        li {
          list-style-type: none;
        }
      `}
    </style>
  </li>
);

const P: React.FC<{}> = ({ children }) => <>{children}</>;

const A: React.FC<{}> = ({ children }) => (
  <a>
    {children}
    <style jsx>
      {`
        a {
          display: block;
          background-color: ${COLOR_LIGHT_GRAY};
          padding: ${SPACING / 2}px;
          margin: ${SPACING / 2}px;
          border-radius: ${BORDER_RADIUS}px;

          transition: all 0.1s ease-in-out;
        }
        a:hover {
          filter: opacity(50%);
        }
      `}
    </style>
  </a>
);

const Component: React.FC<{ md: string }> = ({ md }) => {
  return (
    <nav style={tocStyle}>
      {createTocReact(md, {
        ul: Ul,
        li: Li,
        p: P,
        a: A,
      })}
    </nav>
  );
};

export default Component;
