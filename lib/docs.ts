type DocContent = {
  title: string;
  body: string;
};

type LocaleDocs = {
  [slug: string]: DocContent;
};

export const docsContent: Record<string, LocaleDocs> = {
  en: {
    introduction: {
      title: "Introduction",
      body: "Welcome to version 1 of our documentation.",
    },
  },
  es: {
    introduction: {
      title: "Introducción",
      body: "Bienvenido a la versión 1 de nuestra documentación.",
    },
  },
  fr: {
    introduction: {
      title: "Introduction",
      body: "Bienvenue dans la version 1 de notre documentation.",
    },
  },
  de: {
    introduction: {
      title: "Einführung",
      body: "Willkommen zur Version 1 unserer Dokumentation.",
    },
  },
};

export function getDoc(locale: string, slug: string) {
  return docsContent[locale]?.[slug];
}

export function getAllSlugs() {
  return ["introduction"];
}

export function getAllLocales() {
  return ["en", "es", "fr", "de"];
}
