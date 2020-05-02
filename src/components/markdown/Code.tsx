import {
  SPACING,
  BORDER_RADIUS,
  BORDER_WIDTH,
  COLOR_LIGHT_GRAY,
  COLOR_GRAY,
} from "../../constants/styles";

const style = {
  display: "block",
  backgroundColor: COLOR_LIGHT_GRAY,
  border: `solid ${BORDER_WIDTH}px ${COLOR_GRAY}`,
  borderRadius: BORDER_RADIUS,
  padding: SPACING,
} as const;

const Component: React.FC<{}> = ({ children }) => {
  return <code style={style}>{children}</code>;
};

export default Component;
