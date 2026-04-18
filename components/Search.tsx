import Fuse from "fuse.js";
import { useState } from "react";

export default function Search({ docs }: any) {
  const [query, setQuery] = useState("");

  const fuse = new Fuse(docs, {
    keys: ["title", "content"],
  });

  const results = query ? fuse.search(query) : [];

  return (
    <div>
      <input
        data-testid="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div data-testid="search-results">
        {results.map((r: any, i: number) => (
          <div key={i}>{r.item.title}</div>
        ))}
      </div>

      {query && results.length === 0 && (
        <div data-testid="search-no-results">No results</div>
      )}
    </div>
  );
}