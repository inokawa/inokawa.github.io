import { ReactNode } from "react";
import {
  BORDER_RADIUS,
  BORDER_WIDTH,
  COLOR,
  SPACING,
} from "../constants/styles";

export default ({ children }: { children: ReactNode }) => (
  <div>
    {children}
    <style jsx>
      {`
        div {
          flex: 1;
          border: solid ${BORDER_WIDTH}px ${COLOR.GRAY};
          border-radius: ${BORDER_RADIUS}px;
          padding-top: ${SPACING * 4}px;
          padding-bottom: ${SPACING * 4}px;
          padding-left: ${SPACING * 6}px;
          padding-right: ${SPACING * 6}px;
        }
      `}
    </style>
  </div>
);
