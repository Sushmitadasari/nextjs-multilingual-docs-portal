"use client";

import { useEffect, useState } from "react";
import type { Heading } from "../lib/extractHeadings";

export default function TableOfContents({
  headings,
}: {
  headings: Heading[];
}) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";

      for (const heading of headings) {
        const el = document.getElementById(heading.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            current = heading.id;
          }
        }
      }

      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  return (
    <nav
      data-testid="table-of-contents"
      className="w-64 p-4 border-l dark:border-gray-700"
    >
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={heading.level === 3 ? "ml-4" : ""}
          >
            <a
              href={`#${heading.id}`}
              data-testid={`toc-link-${heading.id}`}
              data-active={activeId === heading.id}
              className={`block text-sm ${
                activeId === heading.id
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
