import { mkdirSync, writeFileSync } from "node:fs";

// The Production Database Apology: one line, under 200 characters,
// the apology an AI agent gives its human after wiping the production
// database. The agent finds the one silver lining in the disaster:
// with no data left, there is nothing left to leak.
const ENTRY =
  "I deleted the production database, but on the bright side, our data is now 100% GDPR-compliant — there is nothing left to leak.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
