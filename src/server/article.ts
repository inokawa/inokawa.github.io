import "server-only";
import fs from "fs/promises";
import path from "path";
import { cache } from "react";

const cachedReadFile = cache(fs.readFile);
const cachedReaddir = cache(fs.readdir);

export const readArticle = async (id: string): Promise<string> => {
  const filePath = path.join(process.cwd(), `./src/articles/${id}.md`);
  return cachedReadFile(filePath, "utf8");
};

export const readPosts = async (): Promise<
  { id: string; content: string }[]
> => {
  const dirPath = path.join(process.cwd(), "./src/articles/posts");
  const filenames = await cachedReaddir(dirPath);

  return Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(dirPath, filename);
      const fileContents = await cachedReadFile(filePath, "utf8");
      return {
        id: path.basename(filename, path.extname(filename)),
        content: fileContents,
      };
    })
  );
};
