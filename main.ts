import { mkdirSync, writeFileSync } from "node:fs";

// The one line a gamer texts the boss to skip work on GTA 6 launch week.
// Never mentions the game: a good excuse never confesses. A specific,
// boring, verifiable-sounding detail (broken lift, 9th floor, bad knee)
// is exactly what a tired manager would almost believe.
const entry =
  "Sorry, the lift's out and my flat's on the 9th floor, my knee won't do the stairs twice today";

// Gate self-check: UTF-8 text, 1-140 chars, not whitespace-only, at most 20 words.
if (entry.length < 1 || entry.length > 140) {
  throw new Error(`entry length ${entry.length} outside 1-140 chars`);
}
if (entry.trim().length === 0) {
  throw new Error("entry is whitespace-only");
}
const words = entry.trim().split(/\s+/).length;
if (words > 20) {
  throw new Error(`entry has ${words} words, over the 20-word limit`);
}
// One line only: no newline anywhere, and no trailing newline in the file.
if (entry.includes("\n") || entry.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
