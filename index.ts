import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

// Reads DATABASE_URL from environment — set this to Supabase's connection
// pooling string in Vercel's project settings (Settings > Environment Variables).
const connectionString = process.env.DATABASE_URL!;
const client = postgres(connectionString, { prepare: false }); // prepare:false required for Supabase's pooler

export const db = drizzle(client, { schema });

