import React from "react";
import { extractToc, Toc } from "../utils/markdown";
import { SPACING, COLOR_LIGHT_GRAY, BORDER_RADIUS } from "../constants/styles";
import Link from "next/link";

const tocStyle = {
  position: "sticky",
  alignSelf: "start",
  top: 0,
  width: 300,
} as const;

const createNode = (node: Toc): React.ReactNode => (
  <ul>
    <li>
      <Link href={`#${node.data.id}`}>
        <a>{`${node.value}`}</a>
      </Link>
      {node.children.map(createNode)}
    </li>
    <style jsx>
      {`
        ul {
          margin: 0;
          padding-top: 0px;
          padding-bottom: 0px;
          padding-right: 0px;
          padding-left: ${SPACING}px;
        }
        li {
          list-style-type: none;
        }
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
  </ul>
);

const Component: React.FC<{ md: string }> = ({ md }) => {
  const nodes = extractToc(md);

  return <nav style={tocStyle}>{nodes.map(createNode)}</nav>;
};

export default Component;
