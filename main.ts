// One-Line Roast: The Gadget You Use Every Day
// Entry: a single original roast line about a gadget used every day.
// Roast target: the smartwatch — a gadget worn every day that cheers
// one stand, then silently watches six hours of chips. Verified:
// the line is 115 characters, 20 words, one line, inside the 1-200 gate.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

export const ENTRY =
  "My smartwatch congratulated me for standing up, then watched me sit back down and eat chips for six hours straight.";

const OUT = "/output/entry.txt";

function main(): void {
  // The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
  // not only white space, a single line.
  if (ENTRY.length < 1 || ENTRY.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (ENTRY.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, ENTRY + "\n", "utf8");
  console.log(`wrote ${ENTRY.length} characters to ${OUT}`);
}

main();
