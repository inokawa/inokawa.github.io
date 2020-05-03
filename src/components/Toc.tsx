import { createTocReact } from "../utils/markdown";

const tocStyle = {
  position: "sticky",
  alignSelf: "start",
  top: 0,
  width: 300,
} as const;

const Component: React.FC<{ md: string }> = ({ md }) => {
  return <nav style={tocStyle}>{createTocReact(md, {})}</nav>;
};

export default Component;
