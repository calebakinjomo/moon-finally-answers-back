// The Moon Finally Answers Back — make.fun bounty
// u-mang-the-moon-finally-answers-back-781a7ec1
//
// One line, in the Moon's voice, answering everyone who ever stared up at
// it — the wishes, the howls, the late-night promises. Wry, old, and a
// little tired of being wished upon after four billion years.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "You howl, you wish, you promise you'll change. Four billion years, and I'm still waiting for one quiet night.";

// The grader runs the program in a sandbox where /output is the artifact
// directory; MAKEFUN_OUTPUT_DIR lets the same program be run locally.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
