import { createContentReact } from "../utils/markdown";

export default ({ md }: { md: string }) => {
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
