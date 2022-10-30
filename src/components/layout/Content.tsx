import { ReactNode } from "react";
import { SPACING, CONTENT_WIDTH } from "../../constants/styles";

export default ({ children }: { children: ReactNode }) => (
  <div>
    {children}
    <style jsx>
      {`
        div {
          flex: 1;
          align-self: center;
          width: 100%;
          max-width: ${CONTENT_WIDTH}px;
          padding-top: 0px;
          padding-bottom: ${SPACING * 2}px;
          padding-left: ${SPACING * 2}px;
          padding-right: ${SPACING * 2}px;
        }
      `}
    </style>
  </div>
);
