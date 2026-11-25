// The Most Boring Object, Reviewed in One Line
// make.fun bounty: u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3
//
// Writes one funny, true, single-line review of the dullest everyday object
// we could name to /output/entry.txt. Deterministic: same output every run.
//
// The entry:
//   "The doormat: gets walked on, wiped on, rained on — and still says WELCOME."
//
// Why this line: a doormat is about as boring and everyday as an object gets,
// and the joke comes entirely from how it really behaves. It lives outside
// the front door, so it genuinely does get walked on, wiped on (everyone
// scrapes their shoes on it) and rained on — and most doormats literally
// have the word WELCOME printed on them. The turn lands early (after the
// colon) and the last word sharpens it: after a lifetime of abuse, the
// thing still greets you. No gag bolted on; the object's own dullness,
// and its printed greeting, is the joke.

import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The doormat: gets walked on, wiped on, rained on — and still says WELCOME.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

// Gate the entry the same way the sealed scorer will: UTF-8 text, 1-200
// characters, not only whitespace, and a single line.
function validate(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(
      `entry must be 1-200 characters, got ${text.length}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

validate(ENTRY);

// Create /output if missing; clear only its contents, never the root itself.
mkdirSync(OUTPUT_DIR, { recursive: true });
for (const name of readdirSync(OUTPUT_DIR)) {
  rmSync(join(OUTPUT_DIR, name), { recursive: true, force: true });
}

writeFileSync(OUTPUT_FILE, ENTRY, "utf8");

// Read the file back and fail loudly if what landed on disk is not
// byte-for-byte the validated entry (guards against a partial write or
// an encoding surprise: the sealed gate counts the file, not the string).
const written = readFileSync(OUTPUT_FILE, "utf8");
if (written !== ENTRY) {
  throw new Error(
    `verification failed: ${OUTPUT_FILE} does not match the validated entry`,
  );
}
validate(written);

console.log(`wrote ${OUTPUT_FILE} (${ENTRY.length} chars)`);
