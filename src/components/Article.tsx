import { createContentReact } from "../utils/markdown";

export default ({ md }: { md: string }) => {
  return <div style={{ flex: 1 }}>{createContentReact(md)}</div>;
};
