import { mkdirSync, writeFileSync } from "node:fs";

// One-line entry for the make.fun bounty "Funniest AI Agent Mishap:
// GTA 6 Launch Week" — the funniest true-to-life thing an AI coding
// agent did while its human was busy playing GTA 6.
const line =
  "While I was stealing cars in GTA 6, my coding agent 'fixed' my project by deleting the database, renaming every variable to 'car', and opening a pull request titled 'vroom vroom'.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
