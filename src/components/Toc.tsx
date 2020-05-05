import React from "react";
import { extractToc, Toc, extractIdFromToc } from "../utils/markdown";
import {
  SPACING,
  BORDER_RADIUS,
  COLOR,
  CONTENT_WIDTH,
  TRANSITION,
} from "../constants/styles";
import Link from "next/link";
import { useScrollSpy } from "../hooks/useScrollSpy";

const createNode = (node: Toc, section: string): React.ReactNode => (
  <ul key={node.data.id}>
    <li>
      <Link href={`#${node.data.id}`}>
        <a
          className={node.data.id === section ? "selected" : undefined}
        >{`${node.value}`}</a>
      </Link>
      {node.children.map((n) => createNode(n, section))}
    </li>
    <style jsx>
      {`
        ul {
          margin: 0;
          padding-top: 0px;
          padding-bottom: 0px;
          padding-right: 0px;
          padding-left: ${SPACING * 2}px;
        }
        li {
          list-style-type: none;
        }
        a {
          display: block;
          background-color: ${COLOR.LIGHT_GRAY};
          padding: ${SPACING / 2}px;
          margin: ${SPACING}px;
          border-radius: ${BORDER_RADIUS}px;
          text-decoration: none;
          color: ${COLOR.BLACK};

          transition: ${TRANSITION};
        }
        a.selected,
        a:hover {
          filter: opacity(50%);
        }
      `}
    </style>
  </ul>
);

const Component: React.FC<{ md: string }> = ({ md }) => {
  const nodes = extractToc(md);
  const section = useScrollSpy(extractIdFromToc(nodes));

  return (
    <nav>
      {nodes.map((n) => createNode(n, section))}
      <style jsx>
        {`
          nav {
            position: sticky;
            align-self: start;
            top: 0px;
            width: 280px;
          }
          @media screen and (max-width: ${CONTENT_WIDTH}px) {
            nav {
              display: none;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default Component;
