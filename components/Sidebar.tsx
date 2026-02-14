"use client";

import { useState } from "react";
import Link from "next/link";

type SidebarProps = {
  locale: string;
  version: string;
};

const navItems = [
  { slug: "introduction", label: "Introduction" },
  { slug: "installation", label: "Installation" },
];

export default function Sidebar({ locale, version }: SidebarProps) {
  const [open, setOpen] = useState(true);

  return (
  <div
    data-testid="sidebar"
    className="w-64 bg-gray-100 dark:bg-gray-800 text-black dark:text-white p-4"
  >

      <button
        className="mb-4 text-sm"
        onClick={() => setOpen(!open)}
      >
        {open ? "Collapse" : "Expand"}
      </button>

      {open &&
        navItems.map((item) => (
          <div key={item.slug} className="mb-2">
            <Link
              href={`/${locale}/docs/${version}/${item.slug}`}
              data-testid={`sidebar-nav-link-${item.slug}`}
              className="text-blue-600 dark:text-blue-400"
            >
              {item.label}
            </Link>
          </div>
        ))}
    </div>
  );
}
