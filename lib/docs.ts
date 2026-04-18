import fs from "fs";
import path from "path";

const docsDir = path.join(process.cwd(), "_docs");

// Get single doc
export function getDocContent(locale: string, version: string, slug: string) {
  const filePath = path.join(docsDir, locale, version, `${slug}.md`);

  if (!fs.existsSync(filePath)) return null;

  const content = fs.readFileSync(filePath, "utf-8");

  return {
    title: slug,
    content,
  };
}

// Get all slugs
export function getAllSlugs(locale: string, version: string) {
  const dir = path.join(docsDir, locale, version);

  if (!fs.existsSync(dir)) return [];

  return fs.readdirSync(dir).map(file => file.replace(".md", ""));
}