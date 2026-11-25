import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One warm, funny, heartfelt family scene (one or two lines, <= 280 chars).
const scene =
  "Last night my six-year-old taped her crayon drawing of us to the fridge — " +
  "me, her dad, and the dog, all with the same crooked smile — and whispered, " +
  "'I drew us happy, so we stay happy.' Dad has been grinning at the fridge ever since.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), scene, "utf8");
