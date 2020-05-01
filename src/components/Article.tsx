const textStyle = {
  flex: 1,
};

const Component: React.FC<{ html: string }> = ({ html }) => {
  return (
    <div
      style={textStyle}
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
};

export default Component;
