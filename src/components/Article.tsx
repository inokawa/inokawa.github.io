import { createReactElement } from "../utils/markdown";

const textStyle = {
  flex: 1,
};

const Component: React.FC<{ md: string }> = ({ md }) => {
  return <div style={textStyle}>{createReactElement(md)}</div>;
};

export default Component;
