"use client";

import { extractToc, Toc, extractIdFromToc } from "../_utils/markdown";
import {
  BORDER_RADIUS,
  COLOR,
  CONTENT_WIDTH,
  TRANSITION,
} from "../_constants/styles";
import { useScrollSpy } from "../_hooks/useScrollSpy";

const createNode = (node: Toc, section: string): React.ReactNode => (
  <ul key={node.data.id}>
    <li>
      <a
        className={node.data.id === section ? "selected" : undefined}
        href={`#${node.data.id}`}
      >{`${node.value}`}</a>
      {node.children.map((n) => createNode(n, section))}
    </li>
    <style jsx>
      {`
        ul {
          margin: 0;
          padding-top: 0px;
          padding-bottom: 0px;
          padding-right: 0px;
          padding-left: 2rem;
        }
        li {
          list-style-type: none;
        }
        a {
          display: block;
          background-color: ${COLOR.LIGHT_GRAY};
          padding: 0.5rem;
          margin: 1px;
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

export default ({ md }: { md: string }) => {
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
