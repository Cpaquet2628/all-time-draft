import { pgTable, text, integer, real, boolean, timestamp, jsonb, primaryKey } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

/* ============================================================
   USERS & LEAGUES
   ============================================================ */

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  passwordHash: text("password_hash").notNull(),
  createdAt: timestamp("created_at").notNull().default(sql`now()`)
});

// A league is commissioner-owned and fully configurable — this is the multi-tenant
// core of the whole product. Year range, roster shape, and scoring are all per-league,
// not hardcoded, so different commissioners can run completely different formats.
export const leagues = pgTable("leagues", {
  id: text("id").primaryKey(),
  slug: text("slug").notNull().unique(), // used in URLs, e.g. /league/20-seasons
  name: text("name").notNull(),
  commissionerId: text("commissioner_id").notNull().references(() => users.id),

  yearMin: integer("year_min").notNull(),
  yearMax: integer("year_max").notNull(),

  numTeams: integer("num_teams").notNull().default(10),
  numDivisions: integer("num_divisions").notNull().default(2),

  // Roster & lineup shape, e.g. {"QB":2,"RB":3,"WR":4,"TE":2}
  rosterConfig: jsonb("roster_config").notNull(),
  // Starting lineup shape, e.g. {"QB":1,"RB":2,"WR":3,"TE":1} (no flex/superflex by default)
  startingConfig: jsonb("starting_config").notNull(),

  // Scoring weights — all configurable per league
  scoringConfig: jsonb("scoring_config").notNull(),

  regSeasonWeeks: integer("reg_season_weeks").notNull().default(11),
  divisionGamesEach: integer("division_games_each").notNull().default(3),
  crossDivisionGamesEach: integer("cross_division_games_each").notNull().default(2),

  releaseDay: integer("release_day").notNull().default(0), // 0=Sunday, JS getDay() convention
  releaseHour: integer("release_hour").notNull().default(12), // 24h, local to commissioner for now

  status: text("status").notNull().default("setup"), // setup | draft | season | playoffs | complete
  currentWeek: integer("current_week").notNull().default(0),

  createdAt: timestamp("created_at").notNull().default(sql`now()`)
});

export const divisions = pgTable("divisions", {
  id: text("id").primaryKey(),
  leagueId: text("league_id").notNull().references(() => leagues.id),
  name: text("name").notNull()
});

export const teams = pgTable("teams", {
  id: text("id").primaryKey(),
  leagueId: text("league_id").notNull().references(() => leagues.id),
  divisionId: text("division_id").references(() => divisions.id),
  name: text("name").notNull(),
  ownerName: text("owner_name"), // free text for now; can link to users.id later for real logins per GM
  draftPosition: integer("draft_position") // seed for snake draft order, set at draft start
});

/* ============================================================
   PLAYERS — global reference pool, shared across every league.
   Real people, real careers. Not league-specific.
   ============================================================ */

export const players = pgTable("players", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  position: text("position").notNull(), // QB | RB | WR | TE
  primaryTeam: text("primary_team").notNull(), // franchise most associated with, for pool grouping
  // All real years this player had meaningful NFL action, full career span —
  // NOT pre-filtered to any league's year range. Filtering happens at query time
  // per-league, so the same player record works for a 2006-2025 league AND
  // a hypothetical 1990-2010 league without needing separate curation.
  careerSeasons: jsonb("career_seasons").notNull() // e.g. [1999,2000,2001,2006,2007,2008,2009]
});

/* ============================================================
   DRAFT — the draft pick IS the roster. No separate roster table.
   ============================================================ */

export const draftPicks = pgTable("draft_picks", {
  id: text("id").primaryKey(),
  leagueId: text("league_id").notNull().references(() => leagues.id),
  teamId: text("team_id").notNull().references(() => teams.id),
  playerId: text("player_id").notNull().references(() => players.id),
  overallPick: integer("overall_pick").notNull(),
  round: integer("round").notNull(),
  pickedAt: timestamp("picked_at").notNull().default(sql`now()`)
});

/* ============================================================
   SCHEDULE & RESULTS
   ============================================================ */

export const scheduleGames = pgTable("schedule_games", {
  id: text("id").primaryKey(),
  leagueId: text("league_id").notNull().references(() => leagues.id),
  weekIndex: integer("week_index").notNull(), // 0-based; regular season + playoff weeks share this space
  slot: integer("slot").notNull(), // which game of the week for doubleheaders (0 or 1)
  teamAId: text("team_a_id").notNull().references(() => teams.id),
  teamBId: text("team_b_id").notNull().references(() => teams.id)
});

export const matchResults = pgTable("match_results", {
  id: text("id").primaryKey(),
  leagueId: text("league_id").notNull().references(() => leagues.id),
  weekIndex: integer("week_index").notNull(),
  teamAId: text("team_a_id").notNull().references(() => teams.id),
  teamBId: text("team_b_id").notNull().references(() => teams.id),
  scoreA: real("score_a").notNull(),
  scoreB: real("score_b").notNull(),
  startersA: jsonb("starters_a").notNull(), // annotated starter lines for box score display
  startersB: jsonb("starters_b").notNull(),
  releaseAt: timestamp("release_at").notNull(),
  createdAt: timestamp("created_at").notNull().default(sql`now()`)
});

/* ============================================================
   BOX SCORE CACHE — global across ALL leagues. This is the big win
   of a real database: once any commissioner loads a player's real
   stats for a season/week, every league that ever drafts that
   player reuses it. Keyed by player + real season + real week only.
   ============================================================ */

export const boxScores = pgTable(
  "box_scores",
  {
    playerId: text("player_id").notNull().references(() => players.id),
    season: integer("season").notNull(),
    week: integer("week").notNull(),

    played: boolean("played").notNull(),
    opponent: text("opponent"),

    passYds: integer("pass_yds").notNull().default(0),
    passTd: integer("pass_td").notNull().default(0),
    passLongTd: integer("pass_long_td").notNull().default(0),
    int: integer("int").notNull().default(0),
    rushYds: integer("rush_yds").notNull().default(0),
    rushTd: integer("rush_td").notNull().default(0),
    rushLongTd: integer("rush_long_td").notNull().default(0),
    rec: integer("rec").notNull().default(0),
    recYds: integer("rec_yds").notNull().default(0),
    recTd: integer("rec_td").notNull().default(0),
    recLongTd: integer("rec_long_td").notNull().default(0),
    twoPt: integer("two_pt").notNull().default(0),
    fumblesLost: integer("fumbles_lost").notNull().default(0),

    verified: boolean("verified").notNull().default(true),
    source: text("source").notNull().default("import"), // import | manual | commissioner
    submittedByUserId: text("submitted_by_user_id").references(() => users.id),
    createdAt: timestamp("created_at").notNull().default(sql`now()`)
  },
  (t) => ({
    pk: primaryKey({ columns: [t.playerId, t.season, t.week] })
  })
);

