import Link from "next/link";
import { readPosts } from "../_utils/article";
import { extractFrontmatter } from "../_utils/markdown";

export default async () => {
  const articles = await readPosts();

  return (
    <div>
      {articles.map((d) => {
        const frontmatter = extractFrontmatter(d.content);
        return (
          <div key={d.id}>
            <Link href={`/posts/${d.id}`}>
              {`${frontmatter.date} - ${frontmatter.title}`}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
