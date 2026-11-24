import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line time machine warning label (92 chars): a deadpan safety
// notice about meeting your duplicate self, with the punchline saved
// for the last few words.
const LINE =
  "WARNING: Do not meet yourself. If you do, do not lend yourself money. He never pays it back.";

function writeEntry(outDir: string, line: string): void {
  const chars = [...line].length;
  if (chars < 1 || chars > 120 || line.trim().length === 0) {
    throw new Error(`entry must be 1-120 characters, got ${chars}`);
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeEntry(outDir, LINE);
