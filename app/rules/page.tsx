import { SiteHeader } from "@/components/site-header";

const scoringRules = [
  { label: "Passing yards", value: "1 pt / 25 yds" },
  { label: "Rushing or receiving yards", value: "1 pt / 10 yds" },
  { label: "Reception", value: "0.5 pt" },
  { label: "Passing touchdown", value: "4 pts" },
  { label: "Rushing or receiving touchdown", value: "6 pts" },
  { label: "40+ yard touchdown bonus", value: "+5 pts" },
  { label: "2-point conversion", value: "+2 pts" },
  { label: "Interception", value: "-2 pts" },
  { label: "Fumble lost", value: "-2 pts" },
];

const playoffRounds = [
  {
    week: "Week 12",
    title: "Wildcard",
    body: "Single week. In each division, the #2 seed plays the #3 seed. The #1 seed gets the week off.",
  },
  {
    week: "Weeks 13–14",
    title: "Division final",
    body: "Two-week cumulative. In each division, the #1 seed plays the Week 12 winner. Combined score decides the division champion.",
  },
  {
    week: "Weeks 15–16",
    title: "Championship",
    body: "Two-week cumulative. Countdown's division champion vs. Primetime's division champion. Combined score crowns the 20th Anniversary Champion.",
  },
];

const faq = [
  {
    q: "Can I trade after the draft?",
    a: "No. Locked roster is the whole bit — this is a draft-day event, not a season-long management league.",
  },
  {
    q: "What if I forget my position needs?",
    a: "The app won't let you draft a position that's already full on your roster.",
  },
  {
    q: "What happens if a box score can't be verified?",
    a: "It's flagged, not guessed. The week stays locked until someone supplies the real stat line.",
  },
  {
    q: "Does this touch our real league?",
    a: "Not at all — totally separate, just for the 20-year mark.",
  },
  {
    q: "What if I don't recognize a name in the pool?",
    a: "That's half the fun — look them up, or ask the room. Some of the best picks are the ones nobody else remembers.",
  },
];

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-hairline px-6 py-14 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl text-parchment sm:text-4xl">
          {title}
        </h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

export default function RulesPage() {
  return (
    <div className="flex flex-col flex-1">
      <SiteHeader />

      {/* Hero */}
      <section className="mx-auto w-full max-w-5xl px-6 pt-16 pb-4 sm:pt-20">
        <h1 className="font-display text-4xl text-parchment sm:text-5xl">
          Rules
        </h1>
        <p className="mt-4 max-w-lg text-base leading-7 text-muted">
          2026 marks year 21 of the league — 20 full seasons wrapped. This
          one-time, one-day commemorative side league drafts the best
          fantasy performers from across that era. It&rsquo;s purely for
          bragging rights and has zero effect on the real league standings.
        </p>
      </section>

      <Section title="The draft">
        <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
          <div>
            <h3 className="font-mono text-xs uppercase text-gold">Format</h3>
            <p className="mt-1 text-sm leading-6 text-parchment">
              Live, in person, one sitting. 10 GMs, 10 teams.
            </p>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase text-gold">Order</h3>
            <p className="mt-1 text-sm leading-6 text-parchment">
              Snake draft. Order is randomized the moment the draft starts.
            </p>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase text-gold">Length</h3>
            <p className="mt-1 text-sm leading-6 text-parchment">
              11 rounds. Roster requirement is 2 QB / 3 RB / 4 WR / 2 TE —
              the app won&rsquo;t let you draft a position once it&rsquo;s
              full on your roster.
            </p>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase text-gold">Pace</h3>
            <p className="mt-1 text-sm leading-6 text-parchment">
              No hard clock, but aim for roughly 60–90 seconds a pick to keep
              the room moving.
            </p>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase text-gold">
              No do-overs
            </h3>
            <p className="mt-1 text-sm leading-6 text-parchment">
              Once a player&rsquo;s drafted, he&rsquo;s off the board. No
              stashing, no keeper claims from the real league.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Roster — best ball">
        <p className="max-w-2xl text-sm leading-6 text-muted">
          Your 11-man roster locks the moment the draft ends: 2 QB, 3 RB, 4
          WR, 2 TE. No trades, no waivers, no injury replacements — you
          draft it, you ride it all season. Every week, the app
          automatically sets your highest-scoring legal lineup: your
          top-scoring QB, your top 2 RBs, your top 3 WRs, and your top TE.
          Seven starters, no FLEX, no SUPERFLEX — straight best-at-position.
        </p>
      </Section>

      <Section title="Scoring — decimal, half-PPR">
        <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {scoringRules.map((rule) => (
            <div
              key={rule.label}
              className="flex items-baseline justify-between gap-4 border-b border-hairline pb-2"
            >
              <span className="text-sm text-parchment">{rule.label}</span>
              <span className="font-mono text-sm text-gold">
                {rule.value}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="How a week's score is generated">
        <p className="max-w-2xl text-sm leading-6 text-muted">
          Every score comes from a real, actual NFL box score — not a
          simulation, and never a guess. Each player in the pool has 5
          identified statistical seasons, drawn only from 2006–2025.
          Every week, one of those 5 eligible seasons is drawn at random,
          per player, and that player&rsquo;s real box score from the
          matching week number of that season is pulled and scored. If the
          drawn season lands on a real bye week or injury absence,
          that&rsquo;s real too — it shows up as a scoreless week, same as
          it would have in real life.
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-parchment">
          No estimates, ever. If a lookup can&rsquo;t be confidently
          verified against a real source, it does not get a made-up number.
          That player-week is flagged{" "}
          <span className="font-mono text-gold">NEEDS REVIEW</span>, and the
          entire week&rsquo;s release is held — for every matchup, not just
          the affected one — until it&rsquo;s corrected with real stats.
        </p>
      </Section>

      <Section title="Schedule">
        <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
          <p className="text-sm leading-6 text-muted">
            10 teams split into two 5-team divisions — Countdown and
            Primetime. 11 regular-season weeks, and every week is a
            doubleheader: each team plays two games.
          </p>
          <p className="text-sm leading-6 text-muted">
            You play each of your 4 division rivals 3 times, and each of the
            5 teams in the other division 2 times. Standings are ranked by
            division win-loss record, with ties broken by head-to-head
            record, then total points scored.
          </p>
        </div>
      </Section>

      <Section title="Playoffs — two division brackets">
        <p className="max-w-2xl text-sm leading-6 text-muted">
          Each division runs its own mini-bracket. The two division
          champions meet in the league championship.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {playoffRounds.map((round) => (
            <div key={round.week} className="border-l-2 border-gold pl-4">
              <div className="font-mono text-xs text-gold">{round.week}</div>
              <h3 className="mt-1 font-display text-xl text-parchment">
                {round.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {round.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Weekly release — Sundays at noon">
        <p className="max-w-2xl text-sm leading-6 text-muted">
          Once a week is simulated, results are computed but locked — they
          don&rsquo;t show until Sunday at 12:00 PM, same as waiting on a
          real NFL Sunday slate. If anything in that week is flagged{" "}
          <span className="font-mono text-gold">NEEDS REVIEW</span>, the
          lock holds past noon until it&rsquo;s fixed.
        </p>
      </Section>

      <Section title="FAQ">
        <div className="divide-y divide-hairline">
          {faq.map((item) => (
            <div key={item.q} className="grid gap-2 py-5 sm:grid-cols-[1fr_1.4fr] sm:gap-8">
              <h3 className="text-sm font-semibold text-parchment">
                {item.q}
              </h3>
              <p className="text-sm leading-6 text-muted">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <footer className="mt-auto border-t border-hairline">
        <div className="mx-auto max-w-5xl px-6 py-8 text-xs text-muted">
          Commissioned by Chris. Real box scores only — if it can&rsquo;t be
          verified, it doesn&rsquo;t count.
        </div>
      </footer>
    </div>
  );
}
