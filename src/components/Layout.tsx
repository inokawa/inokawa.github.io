const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
};

const Component: React.FC<{}> = ({ children }) => (
  <div style={layoutStyle}>{children}</div>
);

export default Component;
