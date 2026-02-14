"use client";

import { useState } from "react";

export default function CodeBlock({
  code,
}: {
  code: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <div
      data-testid="code-block"
      className="relative bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-6"
    >
      <button
        data-testid="copy-code-button"
        onClick={handleCopy}
        className="absolute top-2 right-2 px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {copied ? "Copied!" : "Copy"}
      </button>

      <pre className="overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}
