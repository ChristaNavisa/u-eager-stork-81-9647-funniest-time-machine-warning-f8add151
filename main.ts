import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "WARNING: If you meet your grandfather, do not introduce yourself.";

function writeEntry(outDir: string, line: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeEntry(outDir, LINE);
