import { ReactNode } from "react";
import { SPACING, BORDER_RADIUS, COLOR } from "../constants/styles";

export default ({ children }: { children: ReactNode }) => (
  <span>
    {children}
    <style jsx>
      {`
        span {
          background-color: ${COLOR.LIGHT_GRAY};
          border-radius: ${BORDER_RADIUS}px;
          margin: ${SPACING}px;
          padding: ${SPACING}px;
        }
      `}
    </style>
  </span>
);
