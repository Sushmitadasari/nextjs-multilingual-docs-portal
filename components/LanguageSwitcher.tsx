"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const locales = ["en", "es", "fr", "de"];

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const pathWithoutLocale = pathname.replace(/^\/(en|es|fr|de)/, "");

  return (
    <div data-testid="language-switcher" className="flex gap-4 p-4">
      {locales.map((locale) => (
        <Link key={locale} href={`/${locale}${pathWithoutLocale}`}>
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
