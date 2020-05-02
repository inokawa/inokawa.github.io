import { createContentReact } from "../utils/markdown";

const textStyle = {
  flex: 1,
};

const Component: React.FC<{ md: string }> = ({ md }) => {
  return <div style={textStyle}>{createContentReact(md)}</div>;
};

export default Component;
