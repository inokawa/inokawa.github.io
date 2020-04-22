const tocStyle = {
  position: "fixed", // FIXME
  top: 100,
  right: 0,
  width: 300,
} as const;

const Component: React.FC<{ html: string }> = ({ html }) => {
  return (
    <div
      style={tocStyle}
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
};

export default Component;
