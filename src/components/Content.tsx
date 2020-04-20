import { SPACING } from "../constants/styles";

const layoutStyle = {
  flex: 1,
  padding: SPACING,
} as const;

const Component: React.FC<{}> = ({ children }) => (
  <div style={layoutStyle}>{children}</div>
);

export default Component;
