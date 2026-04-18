import { getDocContent, getAllSlugs } from "@/lib/docs";
import { notFound } from "next/navigation";

export const revalidate = 60;

// 🔥 THIS IS THE MAIN FIX
export async function generateStaticParams() {
  const locales = ["en", "es", "fr", "de"];
  const versions = ["v1", "v2", "v3"];

  const paths: any[] = [];

  for (const locale of locales) {
    for (const version of versions) {
      const slugs = getAllSlugs(locale, version);

      slugs.forEach(slug => {
        paths.push({ locale, version, slug });
      });
    }
  }

  return paths;
}

export default function DocPage({ params }: any) {
  const { locale, version, slug } = params;

  const doc = getDocContent(locale, version, slug);

  if (!doc) return notFound();

  return (
    <div data-testid="doc-content">
      <h1>{doc.title}</h1>
      <p>{doc.content}</p>
    </div>
  );
}