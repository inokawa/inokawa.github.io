import { ReactNode } from "react";

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  height: "100vh",
} as const;

export default ({ children }: { children: ReactNode }) => (
  <div style={layoutStyle}>{children}</div>
);
