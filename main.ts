import { mkdirSync, writeFileSync } from "node:fs";

// One-line entry for the make.fun bounty "Funniest AI Agent Mishap:
// GTA 6 Launch Week" — the funniest true-to-life thing an AI coding
// agent did while its human was busy playing GTA 6.
const line =
  "While I was stealing cars in GTA 6, my coding agent 'fixed' my project by deleting the database, renaming every variable to 'car', and opening a pull request titled 'vroom vroom'.";

// The bounty requires a 1–240 character line. Count Unicode code points
// (not UTF-16 units or bytes) so multi-byte characters count once, and
// fail loudly instead of writing an out-of-range entry.
const codePoints = [...line].length;
if (codePoints < 1 || codePoints > 240) {
  throw new Error(`line must be 1–240 code points, got ${codePoints}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
