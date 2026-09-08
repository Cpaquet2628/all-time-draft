// Scoring & lineup logic, ported from the proven artifact implementation.
// Default weights match the "20 Seasons" league's rules exactly, but every
// value is a league setting now, not hardcoded — different commissioners
// can run different formats.

export type ScoringConfig = {
  passYdPt: number;       // points per passing yard (e.g. 0.04 = 1pt/25yd)
  passTd: number;         // points per passing TD
  passInt: number;        // points per interception (negative)
  rushRecYdPt: number;    // points per rushing/receiving yard (e.g. 0.1 = 1pt/10yd)
  rushTd: number;         // points per rushing TD
  recTd: number;          // points per receiving TD
  reception: number;      // points per reception (0.5 = half-PPR)
  longTdBonus: number;    // bonus points for any 40+ yard TD
  longTdThreshold: number;// yard threshold for the bonus (default 40)
  twoPtConversion: number;// points per 2-point conversion
  fumbleLost: number;     // points per fumble lost (negative)
};

export const DEFAULT_SCORING: ScoringConfig = {
  passYdPt: 0.04,
  passTd: 4,
  passInt: -2,
  rushRecYdPt: 0.1,
  rushTd: 6,
  recTd: 6,
  reception: 0.5,
  longTdBonus: 5,
  longTdThreshold: 40,
  twoPtConversion: 2,
  fumbleLost: -2
};

export type BoxScoreStats = {
  played: boolean;
  passYds: number; passTd: number; passLongTd: number; int: number;
  rushYds: number; rushTd: number; rushLongTd: number;
  rec: number; recYds: number; recTd: number; recLongTd: number;
  twoPt: number; fumblesLost: number;
};

export function statsToPoints(st: BoxScoreStats | null | undefined, cfg: ScoringConfig = DEFAULT_SCORING): number {
  if (!st || !st.played) return 0;
  const pts =
    st.passYds * cfg.passYdPt + st.passTd * cfg.passTd + st.passLongTd * cfg.longTdBonus +
    st.int * cfg.passInt +
    st.rushYds * cfg.rushRecYdPt + st.rushTd * cfg.rushTd + st.rushLongTd * cfg.longTdBonus +
    st.rec * cfg.reception + st.recYds * cfg.rushRecYdPt + st.recTd * cfg.recTd + st.recLongTd * cfg.longTdBonus +
    st.twoPt * cfg.twoPtConversion +
    st.fumblesLost * cfg.fumbleLost;
  return Math.round(pts * 10) / 10;
}

export type StartingConfig = Record<string, number>; // e.g. {"QB":1,"RB":2,"WR":3,"TE":1}

export type RosterPlayer = { id: string; pos: string; name: string };

// Best-ball optimizer: for each position, take the top N scorers per the
// league's starting lineup config, in position order. No flex/superflex
// unless a league explicitly configures one (via a "FLEX" pseudo-position
// key mapping to eligible real positions — left as a future extension).
export function bestBallScore(
  roster: RosterPlayer[],
  weekScores: Record<string, number>,
  startingConfig: StartingConfig
): { total: number; starters: (RosterPlayer & { score: number })[] } {
  const withScores = roster.map((p) => ({ ...p, score: weekScores[p.id] ?? 0 }));
  const byPos: Record<string, (RosterPlayer & { score: number })[]> = {};
  withScores.forEach((p) => {
    (byPos[p.pos] = byPos[p.pos] || []).push(p);
  });
  Object.values(byPos).forEach((arr) => arr.sort((a, b) => b.score - a.score));

  const starters: (RosterPlayer & { score: number })[] = [];
  Object.entries(startingConfig).forEach(([pos, count]) => {
    (byPos[pos] || []).slice(0, count).forEach((p) => starters.push(p));
  });

  const total = Math.round(starters.reduce((s, p) => s + p.score, 0) * 10) / 10;
  return { total, starters };
}

// Filters a player's full career seasons down to the ones eligible for a
// specific league's configured year range. This is why career data is
// stored globally on the player record rather than pre-curated per league —
// the same player works correctly for any commissioner's year window.
export function eligibleSeasons(careerSeasons: number[], yearMin: number, yearMax: number, maxCount = 5): number[] {
  const inRange = careerSeasons.filter((y) => y >= yearMin && y <= yearMax);
  return inRange.slice(0, maxCount);
}
