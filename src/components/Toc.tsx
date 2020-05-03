import { createTocReact } from "../utils/markdown";

const tocStyle = {
  position: "fixed", // FIXME
  top: 100,
  right: 0,
  width: 300,
} as const;

const Component: React.FC<{ md: string }> = ({ md }) => {
  return <div style={tocStyle}>{createTocReact(md, {})}</div>;
};

export default Component;
