import fs from "fs/promises";
import path from "path";

export type Article = { id: string; content: string };

export const readArticle = async (id: string): Promise<Article> => {
  const filePath = path.join(process.cwd(), `./src/articles/${id}.md`);
  return {
    id,
    content: await fs.readFile(filePath, "utf8"),
  };
};

export const readPosts = async (): Promise<Article[]> => {
  const dirPath = path.join(process.cwd(), "./src/articles/posts");
  const filenames = await fs.readdir(dirPath);

  return Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(dirPath, filename);
      const fileContents = await fs.readFile(filePath, "utf8");
      return {
        id: path.basename(filename, path.extname(filename)),
        content: fileContents,
      };
    })
  );
};
