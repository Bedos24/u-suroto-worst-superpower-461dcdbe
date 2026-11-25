// Worst Superpower — u-suroto-worst-superpower-461dcdbe
// Writes one funny line (the worst superpower imaginable) to /output/entry.txt.
// Deterministic: the same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I can turn back time by three seconds, but it takes me four seconds to do it.";

// Self-check against the sealed gate: 1-140 chars, single line, not only whitespace.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry line is ${LINE.length} chars, must be 1-140`);
}
if (/\r|\n/.test(LINE) || !LINE.trim()) {
  throw new Error("entry line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
