import type { ReactNode } from "react";
import LanguageSwitcher from "../../components/LanguageSwitcher";

export default function LocaleLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <LanguageSwitcher />
      {children}
    </div>
  );
}
