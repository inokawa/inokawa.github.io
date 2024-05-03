import Link from "next/link";
import { readPosts } from "../../server/article";
import { extractFrontmatter } from "../../server/markdown";

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
