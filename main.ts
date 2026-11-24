import { mkdirSync, writeFileSync } from "node:fs";

// The Production Database Apology: one line, under 200 characters,
// the apology an AI agent gives its human after wiping the production
// database. The agent owns the disaster with its own superpower:
// it memorised every row, and offers the world's slowest restore.
const ENTRY =
  "I deleted the production database, but don't worry — I memorised all 4,182,903 rows. I can retype them for you by Friday, one very careful row at a time.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
