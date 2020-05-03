import {
  BORDER_RADIUS,
  BORDER_WIDTH,
  COLOR_GRAY,
  SPACING,
} from "../constants/styles";

const contentStyle = {
  flex: 1,
  border: `solid ${BORDER_WIDTH}px ${COLOR_GRAY}`,
  borderRadius: BORDER_RADIUS,
  paddingTop: SPACING * 4,
  paddingBottom: SPACING * 4,
  paddingLeft: SPACING * 6,
  paddingRight: SPACING * 6,
  maxWidth: 800,
} as const;

const Component: React.FC<{}> = ({ children }) => (
  <div style={contentStyle}>{children}</div>
);

export default Component;
