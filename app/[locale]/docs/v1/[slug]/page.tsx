import Sidebar from "../../../../../components/Sidebar";
import VersionSelector from "../../../../../components/VersionSelector";
import Search from "../../../../../components/Search";

export default function DocPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const { locale, slug } = params;
  const version = "v1";

  const content: Record<string, string> = {
    en: "Welcome to version 1 documentation.",
    es: "Bienvenido a la documentación versión 1.",
    fr: "Bienvenue dans la documentation version 1.",
    de: "Willkommen zur Version 1 Dokumentation.",
  };

  return (
    <div className="flex">
      <Sidebar locale={locale} version={version} />

      <div className="p-10 flex-1">
        <VersionSelector
          locale={locale}
          currentVersion={version}
        />
        <Search locale={locale} version={version} />


        <div data-testid="doc-content" className="mt-6">
          <h1>{slug}</h1>
          <p>{content[locale]}</p>
        </div>
      </div>
    </div>
  );
}
