export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* Top bar */}
      <header className="border-b border-hairline">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 text-sm">
          <span className="font-semibold tracking-tight text-parchment">
            20 Seasons
          </span>
          <span className="font-mono text-muted">Est. 2006</span>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto w-full max-w-5xl px-6 pt-16 pb-12 sm:pt-24 sm:pb-16">
        <h1 className="font-display text-5xl leading-[0.95] text-parchment sm:text-7xl">
          Twenty seasons.
          <br />
          Two hundred fifty-four legends.
          <br />
          One draft.
        </h1>
        <p className="mt-8 max-w-md text-lg leading-8 text-muted">
          A ten-team best-ball league drafted entirely from real historical
          performances. Every week is scored from actual box scores — no
          simulations, no estimates.
        </p>
      </section>

      {/* Stat strip */}
      <section className="border-y border-hairline">
        <div className="mx-auto grid max-w-5xl grid-cols-2 divide-x divide-y divide-hairline sm:grid-cols-4 sm:divide-y-0">
          {[
            { value: "2006", label: "League founded" },
            { value: "254", label: "Players in the pool" },
            { value: "10", label: "Teams, two divisions" },
            { value: "20", label: "Seasons of history" },
          ].map((stat) => (
            <div key={stat.label} className="px-6 py-8">
              <div className="font-mono text-4xl text-gold">{stat.value}</div>
              <div className="mt-2 text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Concept */}
      <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
        <h2 className="font-display text-3xl text-parchment sm:text-4xl">
          The concept
        </h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          <p className="max-w-md text-base leading-7 text-muted">
            Ten commissioners drafted from a pool of 254 players — the
            league&rsquo;s greatest fantasy performers, unranked, grouped only
            by the franchise they played for.
          </p>
          <p className="max-w-md text-base leading-7 text-muted">
            Each roster is scored week by week using that player&rsquo;s real
            statistics from their best eligible seasons between 2006 and
            2025. Half-PPR, best-ball lineups, no trades, no waivers.
          </p>
        </div>
      </section>

      {/* Divisions */}
      <section className="border-t border-hairline">
        <div className="mx-auto grid max-w-5xl sm:grid-cols-2">
          <div className="border-b border-hairline px-6 py-10 sm:border-r sm:border-b-0">
            <div className="h-1 w-10 bg-countdown" />
            <h3 className="mt-5 font-display text-2xl text-parchment">
              Countdown
            </h3>
            <p className="mt-3 max-w-xs text-sm leading-6 text-muted">
              Five teams. Three meetings a season against each division
              rival.
            </p>
          </div>
          <div className="px-6 py-10">
            <div className="h-1 w-10 bg-primetime" />
            <h3 className="mt-5 font-display text-2xl text-parchment">
              Primetime
            </h3>
            <p className="mt-3 max-w-xs text-sm leading-6 text-muted">
              Five teams. Three meetings a season against each division
              rival.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-hairline">
        <div className="mx-auto max-w-5xl px-6 py-8 text-xs text-muted">
          Commissioned by Chris. Real box scores only — if it can&rsquo;t be
          verified, it doesn&rsquo;t count.
        </div>
      </footer>
    </div>
  );
}
