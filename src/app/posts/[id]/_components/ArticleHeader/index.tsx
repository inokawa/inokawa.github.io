import { Frontmatter } from "../../../../../server/markdown";
import styles from "./index.module.css";

export default ({ frontmatter }: { frontmatter: Frontmatter }) => {
  return (
    <div className={styles.wrapper}>
      <h1>{frontmatter.title}</h1>
      <p className={styles.date}>{frontmatter.date}</p>
      <p>
        {frontmatter.categories.map((c) => (
          <span key={c} className={styles.tag}>
            {c}
          </span>
        ))}
      </p>
    </div>
  );
};
