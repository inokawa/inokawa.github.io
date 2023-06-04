import Link from "next/link";
import { readPosts } from "../../src/utils/article";
import { extractFrontmatter } from "../../src/utils/markdown";

const Page = async () => {
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

export default Page;
