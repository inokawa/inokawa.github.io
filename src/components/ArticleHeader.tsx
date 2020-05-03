import { SPACING } from "../constants/styles";

const style = {
  marginBottom: SPACING * 6,
} as const;

const Component: React.FC<{ frontmatter: { [key: string]: any } }> = ({
  frontmatter,
}) => {
  return (
    <div style={style}>
      <h1>{frontmatter.title || "notitle"}</h1>
    </div>
  );
};

export default Component;
