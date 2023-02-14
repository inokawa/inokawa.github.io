import { ReactNode } from "react";
import { BORDER_RADIUS, BORDER_WIDTH, COLOR } from "../constants/styles";

export default ({ children }: { children: ReactNode }) => (
  <div
    style={{
      flex: 1,
      border: `solid ${BORDER_WIDTH}px ${COLOR.GRAY}`,
      borderRadius: `${BORDER_RADIUS}px`,
      paddingTop: "4rem",
      paddingBottom: "4rem",
      paddingLeft: "6rem",
      paddingRight: "6rem",
    }}
  >
    {children}
  </div>
);
