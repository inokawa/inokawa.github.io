const layoutStyle = {
  width: "100vw",
  height: "100vh",
  padding: 20,
};

const Component: React.FC<{}> = ({ children }) => (
  <div style={layoutStyle}>{children}</div>
);

export default Component;
