"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  locale: string;
  currentVersion: string;
};

const versions = ["v1", "v2", "v3"];

export default function VersionSelector({
  locale,
  currentVersion,
}: Props) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const pathWithoutVersion = pathname.replace(
    `/${locale}/docs/${currentVersion}`,
    ""
  );

  return (
    <div className="relative">
      <button
        data-testid="version-selector"
        onClick={() => setOpen(!open)}
        className="border px-3 py-1"
      >
        {currentVersion}
      </button>

      {open && (
        <div className="absolute bg-white border mt-1">
          {versions.map((v) => (
            <Link
              key={v}
              href={`/${locale}/docs/${v}${pathWithoutVersion}`}
              data-testid={`version-option-${v}`}
              className="block px-3 py-1 hover:bg-gray-200"
            >
              {v}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
