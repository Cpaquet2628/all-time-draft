import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-hairline">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 text-sm">
        <Link
          href="/"
          className="font-semibold tracking-tight text-parchment"
        >
          20 Seasons
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/players" className="text-muted hover:text-parchment">
            Player pool
          </Link>
          <span className="font-mono text-muted">Est. 2006</span>
        </nav>
      </div>
    </header>
  );
}
