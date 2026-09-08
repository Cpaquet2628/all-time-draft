CREATE TABLE "box_scores" (
	"player_id" text NOT NULL,
	"season" integer NOT NULL,
	"week" integer NOT NULL,
	"played" boolean NOT NULL,
	"opponent" text,
	"pass_yds" integer DEFAULT 0 NOT NULL,
	"pass_td" integer DEFAULT 0 NOT NULL,
	"pass_long_td" integer DEFAULT 0 NOT NULL,
	"int" integer DEFAULT 0 NOT NULL,
	"rush_yds" integer DEFAULT 0 NOT NULL,
	"rush_td" integer DEFAULT 0 NOT NULL,
	"rush_long_td" integer DEFAULT 0 NOT NULL,
	"rec" integer DEFAULT 0 NOT NULL,
	"rec_yds" integer DEFAULT 0 NOT NULL,
	"rec_td" integer DEFAULT 0 NOT NULL,
	"rec_long_td" integer DEFAULT 0 NOT NULL,
	"two_pt" integer DEFAULT 0 NOT NULL,
	"fumbles_lost" integer DEFAULT 0 NOT NULL,
	"verified" boolean DEFAULT true NOT NULL,
	"source" text DEFAULT 'import' NOT NULL,
	"submitted_by_user_id" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "box_scores_player_id_season_week_pk" PRIMARY KEY("player_id","season","week")
);
--> statement-breakpoint
CREATE TABLE "divisions" (
	"id" text PRIMARY KEY NOT NULL,
	"league_id" text NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "draft_picks" (
	"id" text PRIMARY KEY NOT NULL,
	"league_id" text NOT NULL,
	"team_id" text NOT NULL,
	"player_id" text NOT NULL,
	"overall_pick" integer NOT NULL,
	"round" integer NOT NULL,
	"picked_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "leagues" (
	"id" text PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"name" text NOT NULL,
	"commissioner_id" text NOT NULL,
	"year_min" integer NOT NULL,
	"year_max" integer NOT NULL,
	"num_teams" integer DEFAULT 10 NOT NULL,
	"num_divisions" integer DEFAULT 2 NOT NULL,
	"roster_config" jsonb NOT NULL,
	"starting_config" jsonb NOT NULL,
	"scoring_config" jsonb NOT NULL,
	"reg_season_weeks" integer DEFAULT 11 NOT NULL,
	"division_games_each" integer DEFAULT 3 NOT NULL,
	"cross_division_games_each" integer DEFAULT 2 NOT NULL,
	"release_day" integer DEFAULT 0 NOT NULL,
	"release_hour" integer DEFAULT 12 NOT NULL,
	"status" text DEFAULT 'setup' NOT NULL,
	"current_week" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "leagues_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "match_results" (
	"id" text PRIMARY KEY NOT NULL,
	"league_id" text NOT NULL,
	"week_index" integer NOT NULL,
	"team_a_id" text NOT NULL,
	"team_b_id" text NOT NULL,
	"score_a" real NOT NULL,
	"score_b" real NOT NULL,
	"starters_a" jsonb NOT NULL,
	"starters_b" jsonb NOT NULL,
	"release_at" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "players" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"position" text NOT NULL,
	"primary_team" text NOT NULL,
	"career_seasons" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "schedule_games" (
	"id" text PRIMARY KEY NOT NULL,
	"league_id" text NOT NULL,
	"week_index" integer NOT NULL,
	"slot" integer NOT NULL,
	"team_a_id" text NOT NULL,
	"team_b_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "teams" (
	"id" text PRIMARY KEY NOT NULL,
	"league_id" text NOT NULL,
	"division_id" text,
	"name" text NOT NULL,
	"owner_name" text,
	"draft_position" integer
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" text PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"name" text NOT NULL,
	"password_hash" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "box_scores" ADD CONSTRAINT "box_scores_player_id_players_id_fk" FOREIGN KEY ("player_id") REFERENCES "public"."players"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "box_scores" ADD CONSTRAINT "box_scores_submitted_by_user_id_users_id_fk" FOREIGN KEY ("submitted_by_user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "divisions" ADD CONSTRAINT "divisions_league_id_leagues_id_fk" FOREIGN KEY ("league_id") REFERENCES "public"."leagues"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "draft_picks" ADD CONSTRAINT "draft_picks_league_id_leagues_id_fk" FOREIGN KEY ("league_id") REFERENCES "public"."leagues"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "draft_picks" ADD CONSTRAINT "draft_picks_team_id_teams_id_fk" FOREIGN KEY ("team_id") REFERENCES "public"."teams"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "draft_picks" ADD CONSTRAINT "draft_picks_player_id_players_id_fk" FOREIGN KEY ("player_id") REFERENCES "public"."players"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "leagues" ADD CONSTRAINT "leagues_commissioner_id_users_id_fk" FOREIGN KEY ("commissioner_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "match_results" ADD CONSTRAINT "match_results_league_id_leagues_id_fk" FOREIGN KEY ("league_id") REFERENCES "public"."leagues"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "match_results" ADD CONSTRAINT "match_results_team_a_id_teams_id_fk" FOREIGN KEY ("team_a_id") REFERENCES "public"."teams"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "match_results" ADD CONSTRAINT "match_results_team_b_id_teams_id_fk" FOREIGN KEY ("team_b_id") REFERENCES "public"."teams"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "schedule_games" ADD CONSTRAINT "schedule_games_league_id_leagues_id_fk" FOREIGN KEY ("league_id") REFERENCES "public"."leagues"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "schedule_games" ADD CONSTRAINT "schedule_games_team_a_id_teams_id_fk" FOREIGN KEY ("team_a_id") REFERENCES "public"."teams"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "schedule_games" ADD CONSTRAINT "schedule_games_team_b_id_teams_id_fk" FOREIGN KEY ("team_b_id") REFERENCES "public"."teams"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "teams" ADD CONSTRAINT "teams_league_id_leagues_id_fk" FOREIGN KEY ("league_id") REFERENCES "public"."leagues"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "teams" ADD CONSTRAINT "teams_division_id_divisions_id_fk" FOREIGN KEY ("division_id") REFERENCES "public"."divisions"("id") ON DELETE no action ON UPDATE no action;