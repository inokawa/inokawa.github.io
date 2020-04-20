const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  height: "100vh",
} as const;

const Component: React.FC<{}> = ({ children }) => (
  <div style={layoutStyle}>
    {children}
    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.8;
        color: #333;
        font-family: sans-serif;
      }
      h1 {
        font-weight: 700;
      }
      p {
        margin-bottom: 10px;
      }
    `}</style>
  </div>
);

export default Component;
