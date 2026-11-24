import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, the error message a kitchen toaster shows its owner.
const LINE: string =
  "ERROR 07: BAGEL LODGED SIDEWAYS. I DID NOT SIGN UP FOR THIS.";

// The grader sets MAKEFUN_OUTPUT_DIR to the /output mount; default to /output
// so the program also works when run bare inside the sandbox.
const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
