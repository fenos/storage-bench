import { z } from "zod";
import raw from "@/data/results.json";

/**
 * The benchmark results, as written by `npm run site:data` in the repo root (src/model.ts). Parsed here once,
 * at build time, so every component works with checked types.
 */

const latLon = z.tuple([z.number(), z.number()]);
const better = z.enum(["lower", "higher"]);
const cell = z.object({ value: z.number(), p95: z.number().nullable(), n: z.number(), failRate: z.number() });

const resultsSchema = z.object({
  metrics: z.array(
    z.object({ id: z.string(), title: z.string(), note: z.string(), value: z.enum(["p50", "ttfb", "mbps"]), better, batch: z.boolean() }),
  ),
  providers: z.array(z.object({ id: z.string(), label: z.string(), place: z.string(), region: z.string(), at: latLon.nullable() })),
  clients: z.array(z.object({ id: z.string(), label: z.string(), host: z.string(), at: latLon, note: z.string(), runs: z.number() })),
  data: z.record(z.string(), z.record(z.string(), z.record(z.string(), cell.nullable()))),
  reliability: z.record(z.string(), z.record(z.string(), z.object({ samples: z.number(), failures: z.number() }))),
  uploadReliability: z.record(z.string(), z.record(z.string(), z.object({ samples: z.number(), failures: z.number() }))),
  errors: z.array(z.object({ provider: z.string(), message: z.string(), count: z.number() })),
  costs: z.object({
    checkedOn: z.string(),
    workloads: z.array(z.object({ name: z.string(), what: z.string() })),
    rows: z.array(z.object({ id: z.string(), label: z.string(), model: z.string(), source: z.string(), monthly: z.array(z.number()) })),
  }),
  runDates: z.array(z.string()),
  runs: z.number(),
});

export type Results = z.infer<typeof resultsSchema>;
export type Metric = Results["metrics"][number];
export type Provider = Results["providers"][number];
export type Client = Results["clients"][number];
export type Cell = z.infer<typeof cell>;

export const results: Results = resultsSchema.parse(raw);

/** The value for one metric, provider, and location, or null when there were no successful samples. */
export const cellFor = (metric: Metric, providerId: string, clientId: string): Cell | null =>
  results.data[metric.id]?.[providerId]?.[clientId] ?? null;

export const formatValue = (metric: Pick<Metric, "value">, value: number): string => {
  if (metric.value === "mbps") return `${value >= 10 ? Math.round(value) : value.toFixed(1)} MB/s`;
  return formatMs(value);
};

export const formatMs = (ms: number): string => (ms >= 1000 ? `${(ms / 1000).toFixed(2)} s` : `${Math.round(ms)} ms`);

export const formatUsd = (usd: number): string =>
  usd >= 100 ? `$${Math.round(usd).toLocaleString("en-US")}` : `$${usd.toFixed(2)}`;
