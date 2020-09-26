import { createContentReact } from "../utils/markdown";

const Component: React.FC<{ md: string }> = ({ md }) => {
  return (
    <div className="article">
      {createContentReact(md)}
      <style jsx>
        {`
          .article {
            flex: 1;
          }
        `}
      </style>
    </div>
  );
};

export default Component;
