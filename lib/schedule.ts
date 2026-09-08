// Doubleheader schedule generator, ported from the proven artifact algorithm.
// Randomized greedy edge-coloring: builds the required game list (division
// rivals N times, cross-division opponents M times), then packs games into
// weekly rounds of perfect matchings so every team plays the configured
// number of games per week.

export type ScheduleWeek = { round1: [string, string][]; round2: [string, string][] };

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function buildDoubleheaderSchedule(
  divisionTeamIds: Record<string, string[]>, // e.g. { Countdown: [...5 ids], Primetime: [...5 ids] }
  weeks: number,
  divisionGamesEach: number,
  crossDivisionGamesEach: number,
  gamesPerWeek = 2
): ScheduleWeek[] {
  const divisions = Object.values(divisionTeamIds);
  const pairsWithin = (list: string[]) => {
    const p: [string, string][] = [];
    for (let i = 0; i < list.length; i++) for (let j = i + 1; j < list.length; j++) p.push([list[i], list[j]]);
    return p;
  };

  const baseGames: [string, string][] = [];
  divisions.forEach((div) => {
    pairsWithin(div).forEach(([a, b]) => {
      for (let k = 0; k < divisionGamesEach; k++) baseGames.push([a, b]);
    });
  });
  // Cross-division: every pair of teams from different divisions
  for (let i = 0; i < divisions.length; i++) {
    for (let j = i + 1; j < divisions.length; j++) {
      divisions[i].forEach((a) => {
        divisions[j].forEach((b) => {
          for (let k = 0; k < crossDivisionGamesEach; k++) baseGames.push([a, b]);
        });
      });
    }
  }

  const allTeams = divisions.flat();
  const rounds = weeks * gamesPerWeek;
  const teamsPerRound = allTeams.length / 2;

  for (let attempt = 0; attempt < 3000; attempt++) {
    let pool = shuffle(baseGames);
    const roundResults: [string, string][][] = [];
    let ok = true;
    for (let r = 0; r < rounds; r++) {
      const used = new Set<string>();
      const round: [string, string][] = [];
      const chosen: [string, string][] = [];
      const poolShuffled = shuffle(pool);
      for (const pair of poolShuffled) {
        if (round.length >= teamsPerRound) break;
        if (!used.has(pair[0]) && !used.has(pair[1])) {
          used.add(pair[0]);
          used.add(pair[1]);
          round.push(pair);
          chosen.push(pair);
        }
      }
      if (round.length < teamsPerRound) {
        ok = false;
        break;
      }
      roundResults.push(round);
      chosen.forEach((pair) => {
        const idx = pool.findIndex((p) => p[0] === pair[0] && p[1] === pair[1]);
        if (idx > -1) pool.splice(idx, 1);
      });
    }
    if (ok && pool.length === 0) {
      const out: ScheduleWeek[] = [];
      for (let w = 0; w < weeks; w++) {
        out.push({ round1: roundResults[w * gamesPerWeek], round2: roundResults[w * gamesPerWeek + 1] });
      }
      return out;
    }
  }

  throw new Error(
    "Could not generate a valid schedule with these settings (team count, games-each, and weeks must be mutually consistent — e.g. 10 teams needs division/cross game counts that sum to weeks*gamesPerWeek per team)."
  );
}
