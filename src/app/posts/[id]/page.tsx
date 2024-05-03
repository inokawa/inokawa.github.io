import {
  md2React,
  extractFrontmatter,
  extractToc,
} from "../../../utils/markdown";
import { readArticle, readPosts } from "../../../utils/article";
import ArticleHeader from "./_components/ArticleHeader";
import Toc from "./_components/Toc";
import styles from "./page.module.css";

type Param = { id: string };

export default async ({ params }: { params: Param }) => {
  const article = await readArticle(`posts/${params.id}`);
  const frontmatter = extractFrontmatter(article);

  const tocs = extractToc(article);

  return (
    <div className={styles.wrapper}>
      <div className={styles["article-wrapper"]}>
        <ArticleHeader frontmatter={frontmatter} />
        <div style={{ flex: 1 }}>{md2React(article)}</div>
      </div>
      <Toc tocs={tocs} />
    </div>
  );
};

export const generateStaticParams = async () => {
  const articles = await readPosts();
  return articles.map((d) => ({ id: d.id }));
};
