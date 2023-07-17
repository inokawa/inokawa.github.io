import Tag from "./Tag";
import { Frontmatter } from "../_utils/markdown";

export default ({ frontmatter }: { frontmatter: Frontmatter }) => {
  return (
    <div style={{ marginBottom: "6rem" }}>
      <h1>{frontmatter.title}</h1>
      <p style={{ textAlign: "right" }}>{frontmatter.date}</p>
      <p>
        {(frontmatter.categories || []).map((c: any) => (
          <Tag key={c}>{c}</Tag>
        ))}
      </p>
    </div>
  );
};
