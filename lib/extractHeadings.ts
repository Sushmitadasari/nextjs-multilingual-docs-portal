export type Heading = {
  id: string;
  text: string;
  level: number;
};

function generateId(text: string) {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

export function addHeadingIds(html: string): string {
  return html.replace(
    /<(h[2-3])>(.*?)<\/h[2-3]>/g,
    (_, tag, text) => {
      const id = generateId(text);
      return `<${tag} id="${id}">${text}</${tag}>`;
    }
  );
}

export function extractHeadings(html: string): Heading[] {
  const regex = /<(h[2-3])>(.*?)<\/h[2-3]>/g;
  const headings: Heading[] = [];

  let match;
  while ((match = regex.exec(html)) !== null) {
    const level = match[1] === "h2" ? 2 : 3;
    const text = match[2].replace(/<[^>]+>/g, "");
    const id = generateId(text);

    headings.push({ id, text, level });
  }

  return headings;
}