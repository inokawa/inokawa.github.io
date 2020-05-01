import fs from "fs";
import path from "path";

export type Article = { id: string; content: string };

export const readArticle = (id: string): Article => {
  const filePath = path.join(process.cwd(), `./src/articles/${id}.md`);
  return {
    id,
    content: fs.readFileSync(filePath, "utf8"),
  };
};

export const readArticles = (): Article[] => {
  const dirPath = path.join(process.cwd(), "./src/articles");
  const filenames = fs.readdirSync(dirPath);

  return filenames.map((filename) => {
    const filePath = path.join(dirPath, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    return {
      id: path.basename(filename, path.extname(filename)),
      content: fileContents,
    };
  });
};
