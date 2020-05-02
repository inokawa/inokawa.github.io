import { SPACING } from "../constants/styles";
import Tag from "./Tag";

const Component: React.FC<{ frontmatter: { [key: string]: any } }> = ({
  frontmatter,
}) => {
  return (
    <div className="header">
      <h1>{frontmatter.title || "notitle"}</h1>
      <p className="right">{frontmatter.date || "nodate"}</p>
      <p>
        {(frontmatter.categories || []).map((c: any) => (
          <Tag>{c}</Tag>
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

export default Component;
