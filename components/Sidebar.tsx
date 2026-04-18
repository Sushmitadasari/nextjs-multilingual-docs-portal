"use client";

import Link from "next/link";

export default function Sidebar({ slugs, locale, version }: any) {
  return (
    <div data-testid="sidebar">
      {slugs.map((slug: string) => (
        <Link
          key={slug}
          href={`/${locale}/docs/${version}/${slug}`}
          data-testid={`sidebar-nav-link-${slug}`}
        >
          {slug}
        </Link>
      ))}
    </div>
  );
}