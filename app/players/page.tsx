"use client";

import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { players } from "@/lib/players-data";

export default function PlayersPage() {
  const [query, setQuery] = useState("");

  const franchises = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = q
      ? players.filter(
          (p) =>
            p.name.toLowerCase().includes(q) ||
            p.franchise.toLowerCase().includes(q)
        )
      : players;

    const byFranchise = new Map<string, typeof players>();
    for (const p of filtered) {
      const list = byFranchise.get(p.franchise) ?? [];
      list.push(p);
      byFranchise.set(p.franchise, list);
    }

    return Array.from(byFranchise.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([franchise, list]) => [
        franchise,
        [...list].sort((a, b) => a.name.localeCompare(b.name)),
      ] as const);
  }, [query]);

  const resultCount = franchises.reduce((n, [, list]) => n + list.length, 0);

  return (
    <div className="flex flex-col flex-1">
      <SiteHeader />

      <section className="mx-auto w-full max-w-5xl px-6 pt-16 pb-8 sm:pt-20">
        <h1 className="font-display text-4xl text-parchment sm:text-5xl">
          Player pool
        </h1>
        <p className="mt-4 max-w-md text-base leading-7 text-muted">
          {players.length} players, unranked, grouped by the franchise they
          played for.
        </p>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name or team"
          className="mt-8 w-full max-w-sm border border-hairline bg-panel px-4 py-2.5 text-sm text-parchment placeholder:text-muted focus:border-gold focus:outline-none"
        />
        <p className="mt-3 font-mono text-xs text-muted">
          {resultCount} {resultCount === 1 ? "result" : "results"}
        </p>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 pb-20">
        {franchises.length === 0 ? (
          <p className="border-t border-hairline pt-8 text-sm text-muted">
            No players match &ldquo;{query}&rdquo;.
          </p>
        ) : (
          <div className="divide-y divide-hairline border-t border-hairline">
            {franchises.map(([franchise, list]) => (
              <div
                key={franchise}
                className="grid gap-4 py-6 sm:grid-cols-[220px_1fr]"
              >
                <h2 className="font-display text-xl text-parchment">
                  {franchise}
                </h2>
                <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                  {list.map((p) => (
                    <li
                      key={p.name}
                      className="flex items-baseline justify-between gap-3 text-sm text-parchment"
                    >
                      <span>{p.name}</span>
                      <span className="font-mono text-xs text-muted">
                        {p.position}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </section>

      <footer className="mt-auto border-t border-hairline">
        <div className="mx-auto max-w-5xl px-6 py-8 text-xs text-muted">
          Commissioned by Chris. Real box scores only — if it can&rsquo;t be
          verified, it doesn&rsquo;t count.
        </div>
      </footer>
    </div>
  );
}
