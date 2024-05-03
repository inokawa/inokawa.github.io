"use client";

import { Toc, extractIdFromToc } from "../../../../../utils/markdown";
import { useScrollSpy } from "../../../../../hooks/useScrollSpy";

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
          background-color: var(--color-gray-light);
          padding: 0.5rem;
          margin: 1px;
          border-radius: var(--border-radius);
          text-decoration: none;
          color: var(--color-black);

          transition: var(--transition);
        }
        a.selected,
        a:hover {
          filter: opacity(50%);
        }
      `}
    </style>
  </ul>
);

export default ({ tocs }: { tocs: Toc[] }) => {
  const selectedSectionId = useScrollSpy(extractIdFromToc(tocs));

  return (
    <nav>
      {tocs.map((n) => createNode(n, selectedSectionId))}
      <style jsx>
        {`
          nav {
            position: sticky;
            align-self: start;
            top: 0px;
            width: 280px;
          }
          @media screen and (max-width: var(--content-width)) {
            nav {
              display: none;
            }
          }
        `}
      </style>
    </nav>
  );
};
