import { mkdir, readFile, writeFile } from "node:fs/promises";
import { buildModel, costsSchema, summarySchema } from "./model.ts";

/** Writes site/src/data/results.json, the only data the site reads. Run after `npm run report` and `npm run costs`. */

const model = buildModel(
  summarySchema.parse(JSON.parse(await readFile("results/summary.json", "utf8"))),
  costsSchema.parse(JSON.parse(await readFile("results/costs.json", "utf8"))),
);
await mkdir("site/src/data", { recursive: true });
await writeFile("site/src/data/results.json", `${JSON.stringify(model, null, 2)}\n`);
process.stdout.write(`wrote site/src/data/results.json (${model.clients.length} locations, ${model.runs} runs)\n`);
