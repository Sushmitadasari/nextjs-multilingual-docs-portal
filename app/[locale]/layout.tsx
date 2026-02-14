import { ReactNode } from "react";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import ThemeToggle from "../../components/ThemeToggle";

export default function LocaleLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <header className="flex justify-between items-center p-4 border-b dark:border-gray-700">
        <LanguageSwitcher />
        <ThemeToggle />
      </header>

      <main>{children}</main>
    </div>
  );
}
