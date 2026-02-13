"use client";

import { useState } from "react";
import Link from "next/link";

type DocItem = {
  slug: string;
  title: string;
  content: string;
};

type Props = {
  locale: string;
  version: string;
};

const docsData: DocItem[] = [
  {
    slug: "introduction",
    title: "Introduction",
    content: "Welcome to version documentation setup guide.",
  },
  {
    slug: "installation",
    title: "Installation",
    content: "To install the project run npm install and npm run dev.",
  },
];

export default function Search({ locale, version }: Props) {
  const [query, setQuery] = useState("");

  const filtered = docsData.filter((doc) =>
    (doc.title + " " + doc.content)
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search documentation..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        data-testid="search-input"
        className="border px-3 py-2 w-full"
      />

      {query && filtered.length === 0 && (
        <div
          data-testid="search-no-results"
          className="mt-3 text-red-500"
        >
          No results found.
        </div>
      )}

      {query && filtered.length > 0 && (
        <div
          data-testid="search-results"
          className="mt-3 border p-3"
        >
          {filtered.map((doc) => (
            <div key={doc.slug} className="mb-2">
              <Link
                href={`/${locale}/docs/${version}/${doc.slug}`}
                className="text-blue-600"
              >
                {doc.title}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
