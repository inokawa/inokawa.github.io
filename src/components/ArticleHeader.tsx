import { SPACING } from "../constants/styles";
import Tag from "./Tag";
import { Frontmatter } from "../utils/markdown";

export default ({ frontmatter }: { frontmatter: Frontmatter }) => {
  return (
    <div className="header">
      <h1>{frontmatter.title}</h1>
      <p className="right">{frontmatter.date}</p>
      <p>
        {(frontmatter.categories || []).map((c: any) => (
          <Tag key={c}>{c}</Tag>
        ))}
      </p>
      <style jsx>
        {`
          .header {
            margin-bottom: ${SPACING * 6}px;
          }
          .right {
            text-align: right;
          }
        `}
      </style>
    </div>
  );
};
