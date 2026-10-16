// Builds the Supabase smoke-run report as print-ready HTML (Chrome prints it to PDF).
// Upstream numbers: results/summary.json (published full runs). Supabase numbers: the eu-central-1 smoke runs in
// results/raw-supabase-euc1. Run from the repo root: node --experimental-strip-types reports/build-eu-central-1-report.ts <out.html>
import { readdir, readFile, writeFile } from "node:fs/promises";

const root = process.cwd();
const rawDir = `${root}/results/raw-supabase-euc1`;
const out = process.argv[2] ?? "report.html";

type Row = { client: string; provider: string; op: string; size: string; n: number; failures: number; p50: number; ttfbP50?: number };
type Sample = { provider: string; op: string; size: string; ms: number; ttfbMs?: number; ok: boolean };

const summary: { rows: Row[] } = JSON.parse(await readFile(`${root}/results/summary.json`, "utf8"));

const smoke: Record<string, Sample[]> = {};
const smokeMeta: Record<string, { location?: { city?: string; org?: string }; node: string; filesSdk: string; startedAt: string }> = {};
for (const f of (await readdir(rawDir)).filter((f) => /-fly-[a-z]+\.jsonl$/.test(f))) {
  const region = f.match(/-fly-([a-z]+)\.jsonl$/)![1]!;
  smoke[region] = (await readFile(`${rawDir}/${f}`, "utf8")).split("\n").filter(Boolean).map((l) => JSON.parse(l));
  smokeMeta[region] = JSON.parse(await readFile(`${rawDir}/${f.replace(/\.jsonl$/, ".meta.json")}`, "utf8"));
}
const totalSamples = Object.values(smoke).reduce((a, s) => a + s.length, 0);
const totalFailures = Object.values(smoke).reduce((a, s) => a + s.filter((x) => !x.ok).length, 0);
const opsCovered = new Set(Object.values(smoke).flatMap((s) => s.map((x) => x.op))).size;
// Every timed operation in src/bench.ts (its Op type).
const opsTotal = ["upload", "head", "download", "url-get", "delete", "first-request", "concurrent-upload", "concurrent-download", "burst-upload", "list-all", "signed-upload", "range-get", "copy"].length;

const median = (xs: number[]): number => {
  const s = [...xs].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length === 0 ? Number.NaN : s.length % 2 ? s[m]! : (s[m - 1]! + s[m]!) / 2;
};

const providers = [
  { id: "aws-s3", label: "Amazon S3" },
  { id: "r2", label: "Cloudflare R2" },
  { id: "railway", label: "Railway" },
  { id: "b2", label: "Backblaze B2" },
  { id: "neon", label: "Neon" },
  { id: "supabase", label: "Supabase" },
] as const;

const locations = [
  { client: "railway-ashburn", region: "iad", label: "Ashburn", ours: "Fly iad, Ashburn" },
  { client: "freestyle-sf", region: "sjc", label: "San Francisco", ours: "Fly sjc, Santa Clara" },
  { client: "railway-amsterdam", region: "ams", label: "Amsterdam", ours: "Fly ams, Amsterdam" },
  { client: "boat-lille", region: "cdg", label: "Lille", ours: "Fly cdg, Paris" },
] as const;

const metrics = [
  { id: "ttfb", title: "Read a small file", detail: "1 KB presigned GET, time to first byte", op: "url-get", size: "1KB", v: "ttfb" },
  { id: "up1", title: "Upload a photo", detail: "1 MB upload with put()", op: "upload", size: "1MB", v: "p50" },
  { id: "get1", title: "Download a photo", detail: "1 MB presigned GET, whole body", op: "url-get", size: "1MB", v: "p50" },
  { id: "first", title: "First request", detail: "Fresh client: new TCP and TLS, one HEAD", op: "first-request", size: "1KB", v: "p50" },
  { id: "par", title: "Gallery upload", detail: "16 uploads of 100 KB in parallel", op: "concurrent-upload", size: "16x100KB", v: "p50" },
] as const;
type Metric = (typeof metrics)[number];

type Cell = { value: number; n: number } | null;
const cell = (m: Metric, provider: string, loc: (typeof locations)[number]): Cell => {
  if (provider === "supabase") {
    const ok = (smoke[loc.region] ?? []).filter((s) => s.ok && s.op === m.op && s.size === m.size);
    const value = median(ok.map((s) => (m.v === "ttfb" ? (s.ttfbMs ?? Number.NaN) : s.ms)));
    return Number.isNaN(value) ? null : { value, n: ok.length };
  }
  const row = summary.rows.find((r) => r.client === loc.client && r.provider === provider && r.op === m.op && r.size === m.size);
  const value = row ? (m.v === "ttfb" ? row.ttfbP50 : row.p50) : undefined;
  return row && value !== undefined && Number.isFinite(value) ? { value, n: row.n - row.failures } : null;
};

// Great-circle distance, for the setup comparison.
const km = (a: readonly [number, number], b: readonly [number, number]): number => {
  const rad = (d: number) => (d * Math.PI) / 180;
  const h = Math.sin(rad(b[0] - a[0]) / 2) ** 2 + Math.cos(rad(a[0])) * Math.cos(rad(b[0])) * Math.sin(rad(b[1] - a[1]) / 2) ** 2;
  return 2 * 6371 * Math.asin(Math.sqrt(h));
};
const at = {
  frankfurt: [50.11, 8.68],
  amsterdam: [52.37, 4.9],
  paris: [48.86, 2.35],
  lille: [50.63, 3.06],
  ashburn: [39.04, -77.49],
  santaClara: [37.35, -121.95],
  sanFrancisco: [37.77, -122.42],
  ohio: [40.0, -83.0],
  virginia: [38.95, -77.45],
} as const;
const roundKm = (n: number) => (n < 1000 ? `${Math.round(n / 5) * 5} km` : `${(Math.round(n / 100) * 100).toLocaleString("en-US")} km`);

const ms = (n: number) => (n >= 1000 ? `${(n / 1000).toFixed(2)} s` : `${Math.round(n)} ms`);

const upstreamN = metrics.flatMap((m) => locations.flatMap((loc) => providers.filter((p) => p.id !== "supabase").flatMap((p) => cell(m, p.id, loc)?.n ?? [])));
const smokeN = metrics.flatMap((m) => locations.flatMap((loc) => cell(m, "supabase", loc)?.n ?? []));
const nRange = (xs: number[]) => `${Math.min(...xs)} to ${Math.max(...xs)}`;

// ---------- charts ----------

const C = { blue: "#2a78d6", gray: "#8f8d86", ink: "#0b0b0b", ink2: "#52514e", muted: "#898781", grid: "#e1e0d9", base: "#c3c2b7" };

/** Ranked horizontal bars for one location, Supabase in blue and the others in gray, each with its value. */
const barChart = (m: Metric, loc: (typeof locations)[number]): string => {
  const rows = providers
    .map((p) => ({ ...p, c: cell(m, p.id, loc) }))
    .filter((r): r is typeof r & { c: NonNullable<Cell> } => r.c !== null)
    .sort((a, b) => a.c.value - b.c.value);
  const W = 330;
  const labelW = 92;
  const valueW = 52;
  const barH = 14;
  const gap = 8;
  const top = 4;
  const plotW = W - labelW - valueW;
  const max = Math.max(...rows.map((r) => r.c.value));
  const H = top + rows.length * (barH + gap) - gap + 4;
  const bars = rows
    .map((r, i) => {
      const y = top + i * (barH + gap);
      const w = Math.max(3, (r.c.value / max) * plotW);
      const hi = r.id === "supabase";
      const fill = hi ? C.blue : C.gray;
      // Square at the baseline, 4px rounded at the data end.
      const rr = Math.min(4, w / 2);
      const path = `M${labelW},${y} H${labelW + w - rr} Q${labelW + w},${y} ${labelW + w},${y + rr} V${y + barH - rr} Q${labelW + w},${y + barH} ${labelW + w - rr},${y + barH} H${labelW} Z`;
      return `
        <text x="${labelW - 8}" y="${y + barH / 2}" text-anchor="end" dominant-baseline="central" class="${hi ? "lbl lbl-hi" : "lbl"}">${r.label}</text>
        <path d="${path}" fill="${fill}"/>
        <text x="${labelW + w + 6}" y="${y + barH / 2}" dominant-baseline="central" class="${hi ? "val val-hi" : "val"}">${ms(r.c.value)}</text>`;
    })
    .join("");
  return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${m.title} from ${loc.label}">
    <line x1="${labelW}" y1="0" x2="${labelW}" y2="${H}" stroke="${C.base}" stroke-width="1"/>${bars}
  </svg>`;
};

/** Distance from each of our clients to the Supabase bucket and to US East, on one scale. */
const distanceChart = (): string => {
  const rows = [
    { label: "Fly cdg, Paris", fra: km(at.paris, at.frankfurt), us: km(at.paris, at.virginia) },
    { label: "Fly ams, Amsterdam", fra: km(at.amsterdam, at.frankfurt), us: km(at.amsterdam, at.virginia), hi: true },
    { label: "Fly iad, Ashburn", fra: km(at.ashburn, at.frankfurt), us: km(at.ashburn, at.virginia) },
    { label: "Fly sjc, Santa Clara", fra: km(at.santaClara, at.frankfurt), us: km(at.santaClara, at.virginia) },
  ];
  const W = 680;
  const labelW = 140;
  const plotW = W - labelW - 90;
  const max = 10000;
  const rowH = 40;
  const H = 26 + rows.length * rowH;
  const x = (v: number) => labelW + (v / max) * plotW;
  const ticks = [0, 2500, 5000, 7500, 10000]
    .map((t) => `<line x1="${x(t)}" y1="18" x2="${x(t)}" y2="${H}" stroke="${C.grid}"/><text x="${x(t)}" y="10" text-anchor="middle" class="tick">${t === 0 ? "0" : `${t / 1000}k km`}</text>`)
    .join("");
  const marks = rows
    .map((r, i) => {
      const y = 26 + i * rowH;
      const bar = (v: number, dy: number, fill: string, text: string) => {
        const w = Math.max(3, x(v) - labelW);
        const rr = Math.min(3, w / 2);
        return `<path d="M${labelW},${y + dy} H${labelW + w - rr} Q${labelW + w},${y + dy} ${labelW + w},${y + dy + rr} V${y + dy + 11 - rr} Q${labelW + w},${y + dy + 11} ${labelW + w - rr},${y + dy + 11} H${labelW} Z" fill="${fill}"/>
          <text x="${labelW + w + 6}" y="${y + dy + 5.5}" dominant-baseline="central" class="val">${text}</text>`;
      };
      return `<text x="${labelW - 10}" y="${y + 12}" text-anchor="end" dominant-baseline="central" class="${r.hi ? "lbl lbl-hi" : "lbl"}">${r.label}</text>
        ${bar(r.fra, 0, C.blue, `${roundKm(r.fra)} to Frankfurt`)}
        ${bar(r.us, 13, C.gray, `${roundKm(r.us)} to Virginia`)}`;
    })
    .join("");
  return `<svg viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="Distance from each Fly client to the Supabase bucket and to US East">${ticks}${marks}</svg>`;
};

// ---------- tables ----------

const fullTable = (m: Metric): string => {
  const head = `<tr><th>From</th>${providers.map((p) => `<th class="${p.id === "supabase" ? "num col-hi" : "num"}">${p.id === "supabase" ? "Supabase*" : p.label.replace("Amazon ", "").replace("Cloudflare ", "").replace("Backblaze ", "")}</th>`).join("")}</tr>`;
  const body = locations
    .map((loc) => {
      const cells = providers.map((p) => cell(m, p.id, loc));
      const best = Math.min(...cells.flatMap((c) => (c ? [c.value] : [])));
      const tds = cells
        .map((c, i) => {
          const cls = ["num", providers[i]!.id === "supabase" ? "col-hi" : "", c && c.value === best ? "best" : ""].filter(Boolean).join(" ");
          return `<td class="${cls}">${c ? ms(c.value) : "–"}</td>`;
        })
        .join("");
      return `<tr class="${loc.region === "ams" ? "row-hi" : ""}"><td>${loc.label}</td>${tds}</tr>`;
    })
    .join("");
  return `<table class="data"><thead>${head}</thead><tbody>${body}</tbody></table>`;
};

// ---------- page ----------

const ams = locations[2];
const tiles = metrics
  .map((m) => {
    const sb = cell(m, "supabase", ams)!;
    const others = providers.filter((p) => p.id !== "supabase").map((p) => ({ ...p, c: cell(m, p.id, ams) })).filter((r) => r.c !== null);
    const fastest = others.sort((a, b) => a.c!.value - b.c!.value)[0]!;
    const lead = sb.value < fastest.c!.value;
    return `<div class="tile">
      <div class="tile-title">${m.title}</div>
      <div class="tile-value">${ms(sb.value)}</div>
      <div class="tile-sub">Fastest other provider: ${fastest.label}, ${ms(fastest.c!.value)}${lead ? "" : ` <span class="note">(faster than Supabase)</span>`}</div>
    </div>`;
  })
  .join("");

const amsCharts = metrics
  .map((m) => {
    const sb = cell(m, "supabase", ams)!;
    const upN = providers.filter((p) => p.id !== "supabase").map((p) => cell(m, p.id, ams)?.n ?? 0);
    return `<figure class="chart">
      <figcaption><span class="chart-title">${m.title}</span><span class="chart-detail">${m.detail}. Median, lower is better.</span></figcaption>
      ${barChart(m, ams)}
      <div class="chart-n">Samples: Supabase ${sb.n}, other providers ${Math.min(...upN) === Math.max(...upN) ? Math.min(...upN) : `${Math.min(...upN)}–${Math.max(...upN)}`} each.</div>
    </figure>`;
  })
  .join("");

const meta = (r: string) => smokeMeta[r]!;
const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<title>Supabase Storage on storage-bench</title>
<style>
  @page { size: A4; margin: 15mm 15mm 16mm; @bottom-left { content: "Supabase Storage on storage-bench · smoke run, 16 October 2026"; font: 8pt system-ui, -apple-system, sans-serif; color: #898781; } @bottom-right { content: counter(page) " / " counter(pages); font: 8pt system-ui, -apple-system, sans-serif; color: #898781; } }
  :root { --ink: ${C.ink}; --ink2: ${C.ink2}; --muted: ${C.muted}; --grid: ${C.grid}; --blue: ${C.blue}; --tint: #edf4fd; --warn-bg: #fdf6e7; --warn-line: #eda100; }
  * { box-sizing: border-box; }
  html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { margin: 0; background: #fff; color: var(--ink); font: 9.5pt/1.5 system-ui, -apple-system, "Segoe UI", sans-serif; }
  h1 { font-size: 24pt; line-height: 1.15; letter-spacing: -0.02em; margin: 0 0 6px; font-weight: 650; }
  h2 { font-size: 14pt; letter-spacing: -0.01em; margin: 0 0 4px; font-weight: 650; }
  h3 { font-size: 10.5pt; margin: 14px 0 4px; font-weight: 650; }
  p { margin: 0 0 8px; color: var(--ink2); }
  p.lead { font-size: 11pt; color: var(--ink2); max-width: 150mm; }
  .eyebrow { font-size: 8pt; text-transform: uppercase; letter-spacing: 0.08em; color: var(--blue); font-weight: 650; margin-bottom: 8px; }
  .page { break-after: page; }
  .page:last-child { break-after: auto; }
  .section-intro { margin-bottom: 14px; max-width: 160mm; }
  .callout { border-left: 3px solid var(--warn-line); background: var(--warn-bg); padding: 10px 14px; margin: 14px 0 18px; border-radius: 0 6px 6px 0; }
  .callout b { color: var(--ink); }
  .callout p { margin: 0; color: var(--ink2); }
  .facts { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 6px 0 20px; }
  .fact { border: 1px solid rgba(11,11,11,0.10); border-radius: 8px; padding: 10px 12px; }
  .fact-value { font-size: 18pt; font-weight: 650; letter-spacing: -0.02em; }
  .fact-label { font-size: 8.5pt; color: var(--ink2); }
  .tiles { display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; margin: 8px 0 6px; }
  .tile { border-radius: 8px; padding: 10px; background: var(--tint); }
  .tile-title { font-size: 8pt; color: var(--ink2); font-weight: 600; min-height: 2.6em; }
  .tile-value { font-size: 17pt; font-weight: 650; letter-spacing: -0.02em; color: var(--ink); margin: 2px 0; }
  .tile-sub { font-size: 7.5pt; color: var(--ink2); line-height: 1.35; }
  .tile-sub .note { color: var(--ink); font-weight: 600; }
  .legend { display: flex; gap: 18px; font-size: 8.5pt; color: var(--ink2); margin: 2px 0 12px; }
  .legend i { display: inline-block; width: 10px; height: 10px; border-radius: 2px; margin-right: 6px; vertical-align: -1px; }
  .charts { display: grid; grid-template-columns: 1fr 1fr; gap: 14px 22px; }
  .chart { margin: 0; break-inside: avoid; }
  .chart figcaption { margin-bottom: 6px; }
  .chart-title { display: block; font-weight: 650; font-size: 10pt; }
  .chart-detail { display: block; font-size: 8pt; color: var(--muted); }
  .chart-n { font-size: 7.5pt; color: var(--muted); margin-top: 4px; }
  svg .lbl { font-size: 9px; fill: ${C.ink2}; }
  svg .lbl-hi { fill: ${C.ink}; font-weight: 700; }
  svg .val { font-size: 9px; fill: ${C.ink2}; font-variant-numeric: tabular-nums; }
  svg .val-hi { fill: ${C.ink}; font-weight: 700; }
  svg .tick { font-size: 8px; fill: ${C.muted}; }
  table { width: 100%; border-collapse: collapse; font-size: 8.5pt; }
  table.data { margin-bottom: 12px; break-inside: avoid; }
  th { text-align: left; font-weight: 600; color: var(--ink2); border-bottom: 1px solid ${C.base}; padding: 4px 6px; font-size: 8pt; }
  td { padding: 4px 6px; border-bottom: 1px solid var(--grid); vertical-align: top; }
  .num { text-align: right; font-variant-numeric: tabular-nums; }
  .col-hi { color: var(--ink); font-weight: 600; }
  .best { font-weight: 700; text-decoration: underline; text-decoration-color: ${C.base}; text-underline-offset: 2px; }
  tr.row-hi td { background: var(--tint); }
  tr.row-hi td:first-child { font-weight: 650; box-shadow: inset 3px 0 0 var(--blue); }
  .metric-block h3 { margin-top: 10px; }
  .metric-block .detail { font-size: 8pt; color: var(--muted); font-weight: 400; margin-left: 6px; }
  table.setup td:first-child { font-weight: 600; }
  table.setup td.none { color: var(--muted); }
  .muted { color: var(--muted); }
  ul { margin: 4px 0 10px; padding-left: 18px; color: var(--ink2); }
  li { margin-bottom: 4px; }
  li b { color: var(--ink); }
  .two { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
  .foot { font-size: 8pt; color: var(--muted); margin-top: 6px; }
</style></head>
<body>

<section class="page">
  <div class="eyebrow">storage-bench · Supabase Storage · smoke run</div>
  <h1>Supabase Storage on storage-bench</h1>
  <p class="lead">Supabase Storage, reached through its S3-compatible endpoint, run through the same harness as the published storage-bench results (files-sdk ${meta("ams").filesSdk}, Node 24, no retries), from four Fly.io machines placed as close as Fly allows to the original client locations.</p>

  <div class="callout"><p><b>This is a smoke run, not a benchmark result.</b> Each Supabase number comes from ${nRange(smokeN)} samples; the published numbers come from ${nRange(upstreamN)}. The Supabase bucket is in Frankfurt while every other provider's bucket is in US East, so the ranking follows geography more than service speed. Page 3 explains how the two setups differ.</p></div>

  <div class="facts">
    <div class="fact"><div class="fact-value">${totalSamples - totalFailures} / ${totalSamples}</div><div class="fact-label">requests succeeded across the four regions, with no retries</div></div>
    <div class="fact"><div class="fact-value">${opsCovered} of ${opsTotal}</div><div class="fact-label">timed operations exercised: upload, head, download, delete, presigned GET and PUT, range read, copy, listing, parallel and burst uploads, fresh-client HEAD</div></div>
    <div class="fact"><div class="fact-value">4 regions</div><div class="fact-label">Fly iad, sjc, ams and cdg, matching Ashburn, San Francisco, Amsterdam and Lille</div></div>
  </div>

  <h2>Amsterdam at a glance</h2>
  <p class="section-intro">Amsterdam is the one location where both setups ran from the same city, and our closest client to the Frankfurt bucket (${roundKm(km(at.amsterdam, at.frankfurt))}, against about ${roundKm(km(at.amsterdam, at.virginia))} to the US East buckets). Supabase median from Fly ams, next to the fastest of the five published providers from Railway's Amsterdam server.</p>
  <div class="tiles">${tiles}</div>
  <p class="foot">Medians. Supabase: Fly ams, 16 Oct 2026, smoke profile. Others: published storage-bench results from railway-amsterdam, full profile, three passes on 9 and 15 Oct 2026.</p>

  <h2 style="margin-top:22px">What this shows</h2>
  <ul>
    <li><b>The S3 path works end to end.</b> Every timed operation the harness runs succeeded against Supabase from all four regions, with no retries.</li>
    <li><b>In Europe, Supabase is ahead because its bucket is nearby.</b> From Amsterdam and Paris it leads every test except 16 parallel uploads, where Railway is slightly faster from both (by ${ms(cell(metrics[4], "supabase", ams)!.value - cell(metrics[4], "railway", ams)!.value)} and ${ms(cell(metrics[4], "supabase", locations[3])!.value - cell(metrics[4], "railway", locations[3])!.value)}). The other buckets are about ${roundKm(km(at.amsterdam, at.virginia))} away.</li>
    <li><b>In the US, it trails for the same reason.</b> From Ashburn, Supabase is the slowest on every test; the other buckets are within about ${roundKm(km(at.ashburn, at.ohio))}, while Frankfurt is ${roundKm(km(at.ashburn, at.frankfurt))} away.</li>
    <li><b>A fair comparison needs a us-east-1 project</b> and full runs, as set out on the last page.</li>
  </ul>
</section>

<section class="page">
  <div class="eyebrow">Amsterdam in detail</div>
  <h2>Five everyday operations from Amsterdam</h2>
  <p class="section-intro">Each chart ranks the six providers for one operation. Supabase's bucket is about ${roundKm(km(at.amsterdam, at.frankfurt))} away; the others are across the Atlantic. Even so, Railway edges Supabase on 16 parallel uploads (${ms(cell(metrics[4], "railway", ams)!.value)} against ${ms(cell(metrics[4], "supabase", ams)!.value)}, from a single Supabase sample).</p>
  <div class="legend"><span><i style="background:${C.blue}"></i>Supabase (bucket in Frankfurt, eu-central-1)</span><span><i style="background:${C.gray}"></i>Published providers (buckets in US East)</span></div>
  <div class="charts">${amsCharts}
    <figure class="chart"><figcaption><span class="chart-title">Why Amsterdam</span></figcaption>
      <p>Both setups have a client in Amsterdam (Railway europe-west4 upstream, Fly ams here), so this is the most direct comparison available. By distance it is also our closest client to Frankfurt.</p>
      <p>Paris (Fly cdg) is about ${roundKm(km(at.paris, at.frankfurt) - km(at.amsterdam, at.frankfurt))} farther from Frankfurt, yet it measured lower latency in this run: ${ms(cell(metrics[0], "supabase", locations[3])!.value)} against ${ms(cell(metrics[0], "supabase", ams)!.value)} to the first byte of a 1 KB read. Network routes, not straight-line distance, decide.</p>
    </figure>
  </div>
</section>

<section class="page">
  <div class="eyebrow">Setup</div>
  <h2>How our setup differs from the original</h2>
  <p class="section-intro">Same harness, same SDK, same operations and the same no-retry rule. What differs is where the client machines run, which networks they use, where the bucket is, and how many samples were taken.</p>

  <h3>Client locations</h3>
  <table class="setup">
    <thead><tr><th>Original client</th><th>Host and network</th><th>Our client</th><th>Host and network</th><th class="num">Apart</th></tr></thead>
    <tbody>
      <tr><td>Ashburn, Virginia</td><td>Railway (us-east4), AS400940 Railway</td><td>Fly iad, Ashburn</td><td>Fly.io; ipinfo: ${meta("iad").location?.org ?? "?"}</td><td class="num">same metro</td></tr>
      <tr><td>San Francisco</td><td>Freestyle VM, AS36320 Freestyle Cloud</td><td>Fly sjc, Santa Clara</td><td>Fly.io; ipinfo: ${meta("sjc").location?.org ?? "?"}</td><td class="num">${roundKm(km(at.sanFrancisco, at.santaClara))}</td></tr>
      <tr class="row-hi"><td>Amsterdam</td><td>Railway (europe-west4), AS400940 Railway</td><td>Fly ams, Amsterdam</td><td>Fly.io; ipinfo: ${meta("ams").location?.org ?? "?"}</td><td class="num">same metro</td></tr>
      <tr><td>Lille, France</td><td>boat sandbox on OVH, AS16276 OVH</td><td>Fly cdg, Paris</td><td>Fly.io; ipinfo: ${meta("cdg").location?.org ?? "?"}</td><td class="num">${roundKm(km(at.lille, at.paris))}</td></tr>
      <tr><td>Seattle</td><td>Tenki VM, Wowrack then Luxor</td><td class="none">none</td><td class="none">Fly has no Seattle region</td><td class="num none">–</td></tr>
      <tr><td>Florida home line</td><td>Home server, AS7018 AT&amp;T</td><td class="none">none</td><td class="none">A residential line; no data center stands in for it</td><td class="num none">–</td></tr>
    </tbody>
  </table>

  <h3>Bucket locations</h3>
  <table class="setup">
    <thead><tr><th>Provider</th><th>Bucket region</th><th class="num">From Amsterdam</th><th class="num">From Ashburn</th></tr></thead>
    <tbody>
      <tr><td>Amazon S3</td><td>us-east-2, Ohio</td><td class="num">${roundKm(km(at.amsterdam, at.ohio))}</td><td class="num">${roundKm(km(at.ashburn, at.ohio))}</td></tr>
      <tr><td>Cloudflare R2</td><td>Eastern North America location hint; R2 picks the site</td><td class="num muted">n/a</td><td class="num muted">n/a</td></tr>
      <tr><td>Railway Buckets</td><td>iad, Virginia</td><td class="num">${roundKm(km(at.amsterdam, at.virginia))}</td><td class="num">same metro</td></tr>
      <tr><td>Backblaze B2</td><td>us-east-005, Virginia</td><td class="num">${roundKm(km(at.amsterdam, at.virginia))}</td><td class="num">same metro</td></tr>
      <tr><td>Neon</td><td>aws us-east-1, Virginia</td><td class="num">${roundKm(km(at.amsterdam, at.virginia))}</td><td class="num">same metro</td></tr>
      <tr class="row-hi"><td>Supabase Storage</td><td>aws eu-central-1, Frankfurt</td><td class="num">${roundKm(km(at.amsterdam, at.frankfurt))}</td><td class="num">${roundKm(km(at.ashburn, at.frankfurt))}</td></tr>
    </tbody>
  </table>

  <h3>Distance from each of our clients to the buckets</h3>
  ${distanceChart()}
  <p class="foot">Great-circle distances between city centers. Latency follows network routes, which are longer.</p>

</section>

<section class="page">
  <div class="eyebrow">All regions</div>
  <h2>Every location, every provider</h2>
  <p class="section-intro">Medians, lower is better. The fastest value in each row is underlined. Amsterdam is highlighted. *Supabase: smoke run from the Fly region listed on page 3, ${nRange(smokeN)} samples per value.</p>
  ${metrics.map((m) => `<div class="metric-block"><h3>${m.title}<span class="detail">${m.detail}</span></h3>${fullTable(m)}</div>`).join("")}
</section>

<section class="page">
  <div class="eyebrow">Other differences and next steps</div>
  <h2>Everything else that differs</h2>
  <p class="section-intro">Beyond the regions on page 3.</p>
  <div class="two">
    <ul>
      <li><b>Same:</b> files-sdk ${meta("ams").filesSdk} with the AWS SDK S3 client, identical operations and object sizes, fresh random bodies with SHA-256 checks, one attempt per request.</li>
      <li><b>Runtime:</b> Node ${meta("ams").node.replace("v", "")} on Fly; the original runs used Node 24.14 to 24.21.</li>
      <li><b>Machines:</b> Fly performance-1x (one dedicated CPU, 2 GB), against Railway servers, VMs, a sandbox and a home server.</li>
    </ul>
    <ul>
      <li><b>Samples:</b> smoke profile (${nRange(smokeN)} per number, no 100 MB tests, 100-object listing) against the full profile (10 to 60 per pass, three passes per location).</li>
      <li><b>Timing:</b> Supabase ran alone on 16 Oct; the other providers ran together on 9 and 15 Oct, interleaved in a random order every round.</li>
      <li><b>Untested:</b> 100 MB multipart uploads. The project's upload size limit has to be raised to at least 100 MB first.</li>
    </ul>
  </div>

  <h2 style="margin-top:18px">Getting to a fair comparison</h2>
  <p class="section-intro">The harness works against Supabase end to end. Before the numbers can stand next to the published results, four things need to change.</p>
  <ul>
    <li><b>Put the bucket in us-east-1.</b> Every other provider stores data in US East (Ohio or Virginia). A Supabase project in aws us-east-1 sits in the same region as Neon and in the same metro as Railway and B2.</li>
    <li><b>Run the full profile.</b> Three full passes per location, as in the original runs, so every median rests on ${nRange(upstreamN)} samples, like the published ones, and the 95th and 99th percentiles are reported.</li>
    <li><b>Run a reference provider on the same machines.</b> Our clients use different hosts and networks than the original ones. Running at least one of the published providers (for example an S3 bucket in us-east-2) alongside Supabase, in the same process and the same random order, separates provider differences from client differences.</li>
    <li><b>Raise the upload size limit to 100 MB or more</b>, so the 100 MB multipart upload and download tests run instead of failing.</li>
  </ul>
  <h3>What cannot be matched on Fly</h3>
  <p>Fly has no Seattle region, and no data center reproduces a residential connection like the original Florida home line. Those two locations need other hosts, or are left out of the comparison.</p>
  <h3>Sources</h3>
  <p>Published numbers: results/summary.json in storage-bench (commit f38ad93). Supabase numbers: raw samples in results/raw-supabase-euc1, all four runs started at ${[...new Set(Object.values(smokeMeta).map((m) => m.startedAt.slice(11, 16)))].join(", ")} UTC on 16 Oct 2026. Client network names come from ipinfo.io as recorded by the harness.</p>
</section>

</body></html>`;

await writeFile(out, html);
console.log(`wrote ${out}`);
