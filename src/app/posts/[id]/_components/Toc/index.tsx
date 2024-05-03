"use client";

import { Toc } from "../../../../../server/markdown";
import { useScrollSpy } from "./useScrollSpy";
import styles from "./index.module.css";

const Item = ({
  node,
  selectedId,
}: {
  node: Toc;
  selectedId: string;
}): React.ReactNode => (
  <ul className={styles.ul}>
    <li className={styles.li}>
      <a
        className={node.data.id === selectedId ? "selected" : undefined}
        href={`#${node.data.id}`}
      >{`${node.value}`}</a>
      {node.children.map((n) => (
        <Item key={n.data.id} node={n} selectedId={selectedId} />
      ))}
    </li>
    <style jsx>
      {`
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

const extractIdFromToc = (nodes: Toc[]): string[] =>
  nodes.reduce<string[]>((acc, node) => {
    acc.push(node.data.id);
    acc.push(...extractIdFromToc(node.children));
    return acc;
  }, []);

export default ({ tocs }: { tocs: Toc[] }) => {
  const selectedSectionId = useScrollSpy(extractIdFromToc(tocs));

  return (
    <nav>
      {tocs.map((n) => (
        <Item key={n.data.id} node={n} selectedId={selectedSectionId} />
      ))}
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
