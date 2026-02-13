export const revalidate = 60;

export async function generateStaticParams() {
  return [
    { locale: "en", slug: "introduction" },
    { locale: "es", slug: "introduction" },
    { locale: "fr", slug: "introduction" },
    { locale: "de", slug: "introduction" },
  ];
}

export default function DocPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const content: Record<string, string> = {
    en: "Welcome to version 1 documentation.",
    es: "Bienvenido a la documentación versión 1.",
    fr: "Bienvenue dans la documentation version 1.",
    de: "Willkommen zur Version 1 Dokumentation.",
  };

  return (
    <div data-testid="doc-content" className="p-10">
      <h1>Introduction</h1>
      <p>{content[params.locale]}</p>
    </div>
  );
}
