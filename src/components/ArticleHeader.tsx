import { SPACING } from "../constants/styles";

const Component: React.FC<{ frontmatter: { [key: string]: any } }> = ({
  frontmatter,
}) => {
  return (
    <div className="header">
      <h1>{frontmatter.title || "notitle"}</h1>
      <style jsx>
        {`
          .header {
            margin-bottom: ${SPACING * 6}px;
          }
        `}
      </style>
    </div>
  );
};

export default Component;
