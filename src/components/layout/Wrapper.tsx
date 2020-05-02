const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  height: "100vh",
} as const;

const Component: React.FC<{}> = ({ children }) => (
  <div style={layoutStyle}>{children}</div>
);

export default Component;
