const Component: React.FC<{ html: string }> = ({ html }) => {
  return (
    <>
      <div
        className="article"
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
      <style jsx>
        {`
          .article {
            flex: 1;
          }
        `}
      </style>
    </>
  );
};

export default Component;
