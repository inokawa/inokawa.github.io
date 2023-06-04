import { ReactNode } from "react";
import { BORDER_RADIUS, COLOR } from "../constants/styles";

export default ({ children }: { children: ReactNode }) => (
  <span
    style={{
      backgroundColor: COLOR.LIGHT_GRAY,
      borderRadius: `${BORDER_RADIUS}px`,
      margin: "1rem",
      padding: "1rem",
    }}
  >
    {children}
  </span>
);
