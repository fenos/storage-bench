// Tweet-style 16:9 cards comparing Supabase (smoke run, us-east-1) with the published storage-bench numbers.
// Every provider is summarised over the same four locations: Ashburn, San Francisco, Amsterdam and Lille.
import { readdir, readFile, writeFile } from "node:fs/promises";

// Run from the repo root: node --experimental-strip-types reports/build-cards.ts <out.html> [samples dir], then print the HTML
// to PDF (Chrome: --headless --no-pdf-header-footer --print-to-pdf). The samples dir defaults to the us-east-1 smoke run.
const root = process.cwd();
const smokeDir = process.argv[3] ?? `${root}/results/raw-supabase-use1-smoke`;
const out = process.argv[2] ?? "cards.html";

type Row = { client: string; provider: string; op: string; size: string; n: number; failures: number; p50: number; ttfbP50?: number; mbpsP50?: number };
type Sample = { provider: string; op: string; size: string; ms: number; ttfbMs?: number; ok: boolean };
type Meta = { location?: { city?: string; org?: string }; node: string; filesSdk: string; startedAt: string; profile: string };

const summary: { rows: Row[]; runs: { client: string; startedAt: string }[] } = JSON.parse(await readFile(`${root}/results/summary.json`, "utf8"));
const costs: { checkedOn: string; workloads: { name: string; what: string }[]; costs: { id: string; model: string; monthly: number[] }[] } = JSON.parse(
  await readFile(`${root}/results/costs.json`, "utf8"),
);

const smoke: Record<string, Sample[]> = {};
const smokeMeta: Record<string, Meta> = {};
for (const f of (await readdir(smokeDir)).filter((f) => /-fly-[a-z]+\.jsonl$/.test(f))) {
  const region = f.match(/-fly-([a-z]+)\.jsonl$/)![1]!;
  // Several passes from one region merge into one set of samples, as report.ts does.
  smoke[region] = [...(smoke[region] ?? []), ...(await readFile(`${smokeDir}/${f}`, "utf8")).split("\n").filter(Boolean).map((l) => JSON.parse(l))];
  smokeMeta[region] ??= JSON.parse(await readFile(`${smokeDir}/${f.replace(/\.jsonl$/, ".meta.json")}`, "utf8"));
}
const isSmoke = Object.values(smokeMeta).every((m) => m.profile === "smoke");

const median = (xs: number[]): number => {
  const s = [...xs].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length === 0 ? Number.NaN : s.length % 2 ? s[m]! : (s[m - 1]! + s[m]!) / 2;
};

// Site colours, so every provider looks the way it does on storage-bench.vercel.app.
const providers = [
  { id: "aws-s3", label: "S3", color: "oklch(0.8 0.15 75)" },
  { id: "r2", label: "R2", color: "oklch(0.7 0.17 42)" },
  { id: "railway", label: "Railway", color: "oklch(0.68 0.19 300)" },
  { id: "b2", label: "B2", color: "oklch(0.65 0.2 25)" },
  { id: "neon", label: "Neon", color: "oklch(0.8 0.16 160)" },
  { id: "supabase", label: "Supabase", color: "oklch(0.72 0.13 220)" },
] as const;
type ProviderId = (typeof providers)[number]["id"];

const locations = [
  { client: "railway-ashburn", region: "iad", label: "Ashburn", theirs: "Railway", ours: "Fly iad" },
  { client: "freestyle-sf", region: "sjc", label: "San Francisco", theirs: "Freestyle VM", ours: "Fly sjc" },
  { client: "railway-amsterdam", region: "ams", label: "Amsterdam", theirs: "Railway", ours: "Fly ams" },
  { client: "boat-lille", region: "cdg", label: "Lille", theirs: "OVH sandbox", ours: "Fly cdg, Paris" },
] as const;
type Location = (typeof locations)[number];

type Metric = { title: string; note: string; op: string; size: string; v: "p50" | "ttfb" | "mbps"; better: "lower" | "higher" };
const M = {
  ttfb: { title: "Time to first byte", note: "1 KB, presigned GET", op: "url-get", size: "1KB", v: "ttfb", better: "lower" },
  get1: { title: "Download 1 MB", note: "presigned GET", op: "url-get", size: "1MB", v: "p50", better: "lower" },
  get100: { title: "Download 100 MB", note: "presigned GET", op: "url-get", size: "100MB", v: "mbps", better: "higher" },
  up1: { title: "Upload 1 MB", note: "put()", op: "upload", size: "1MB", v: "p50", better: "lower" },
  par: { title: "16 uploads in parallel", note: "100 KB each", op: "concurrent-upload", size: "16x100KB", v: "p50", better: "lower" },
  first: { title: "First request", note: "fresh client, new TLS", op: "first-request", size: "1KB", v: "p50", better: "lower" },
  range: { title: "Seek in a video", note: "256 KB range of 10 MB", op: "range-get", size: "256KB of 10MB", v: "p50", better: "lower" },
  up100: { title: "Upload 100 MB", note: "multipart put()", op: "upload", size: "100MB", v: "mbps", better: "higher" },
  signed: { title: "Browser upload", note: "1 MB PUT to a signed URL", op: "signed-upload", size: "1MB", v: "p50", better: "lower" },
  copy: { title: "Copy 10 MB", note: "server-side", op: "copy", size: "10MB", v: "p50", better: "lower" },
  list: { title: "List 1,000 objects", note: "every page", op: "list-all", size: "1000 objects", v: "p50", better: "lower" },
} as const satisfies Record<string, Metric>;
/** Every test, in the order the table card lists them. */
const allTests: Metric[] = [M.ttfb, M.get1, M.get100, M.up1, M.up100, M.par, M.signed, M.first, M.range, M.copy, M.list];

const value = (m: Metric, p: ProviderId, loc: Location): { v: number; n: number } | null => {
  if (p === "supabase") {
    const ok = (smoke[loc.region] ?? []).filter((s) => s.ok && s.op === m.op && s.size === m.size);
    if (ok.length === 0) return null;
    if (m.v === "mbps") {
      const bytes = m.size === "100MB" ? 100 * 1024 * 1024 : 0;
      return { v: bytes / 1e6 / (median(ok.map((s) => s.ms)) / 1000), n: ok.length };
    }
    return { v: median(ok.map((s) => (m.v === "ttfb" ? (s.ttfbMs ?? Number.NaN) : s.ms))), n: ok.length };
  }
  const row = summary.rows.find((r) => r.client === loc.client && r.provider === p && r.op === m.op && r.size === m.size);
  const v = row ? (m.v === "ttfb" ? row.ttfbP50 : m.v === "mbps" ? row.mbpsP50 : row.p50) : undefined;
  return row && v != null && Number.isFinite(v) ? { v, n: row.n - row.failures } : null;
};

/** The tweet's "median of N locations": the median, over locations, of each location's median. */
const acrossLocations = (m: Metric, p: ProviderId): number => median(locations.flatMap((l) => value(m, p, l)?.v ?? []));

const uploadOps = new Set(["upload", "concurrent-upload", "burst-upload", "signed-upload"]);
const uploadFailures = (p: ProviderId): { failures: number; attempts: number } => {
  if (p === "supabase") {
    const s = locations.flatMap((l) => smoke[l.region] ?? []).filter((x) => uploadOps.has(x.op));
    return { failures: s.filter((x) => !x.ok).length, attempts: s.length };
  }
  const rows = summary.rows.filter((r) => r.provider === p && uploadOps.has(r.op) && locations.some((l) => l.client === r.client));
  return { failures: rows.reduce((a, r) => a + r.failures, 0), attempts: rows.reduce((a, r) => a + r.n, 0) };
};

const fmtMs = (n: number) => (n >= 1000 ? `${(n / 1000).toFixed(2)} s` : `${Math.round(n)} ms`);
const fmtUsd = (n: number) => (n >= 100 ? `$${Math.round(n).toLocaleString("en-US")}` : n === 0 ? "$0" : `$${n.toFixed(2)}`);
const fmtPct = (f: number, a: number) => (f === 0 ? "0%" : f / a < 0.001 ? "<0.1%" : `${((100 * f) / a).toFixed(1)}%`);

// ---------- dithered bars (Bayer 4x4, sparse at the baseline, solid at the value, as on the site) ----------

const BAYER = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
].map((r) => r.map((v) => (v + 0.5) / 16));

const ditherBar = (x: number, y: number, w: number, h: number, color: string): string => {
  const cell = 3;
  if (w < 14) return `<rect x="${x}" y="${y}" width="${Math.max(3, w)}" height="${h}" style="fill:${color}"/>`;
  const solid = 12;
  const fade = Math.min(80, w * 0.5);
  let d = "";
  const cols = Math.floor((w - solid) / cell);
  const rows = Math.floor(h / cell);
  for (let c = 0; c < cols; c++) {
    const cx = c * cell;
    const t = Math.min(1, Math.max(0, (cx - (w - solid - fade)) / fade));
    const coverage = 0.28 + 0.72 * t;
    for (let r = 0; r < rows; r++) if (BAYER[r % 4]![c % 4]! < coverage) d += `M${x + cx} ${y + r * cell}h${cell - 1}v${cell - 1}h-${cell - 1}z`;
  }
  const sx = x + cols * cell;
  return `<path d="${d}" style="fill:${color}"/><rect x="${sx}" y="${y}" width="${x + w - sx}" height="${rows * cell - 1}" style="fill:${color}"/>`;
};

type Bar = { id: ProviderId; text: string; v: number; sub?: string };
const panel = (title: string, hint: string, bars: Bar[], opts: { better: "lower" | "higher"; width: number; maxW?: number }): string => {
  const sorted = [...bars].sort((a, b) => (opts.better === "lower" ? a.v - b.v : b.v - a.v));
  const labelW = 96;
  const rowH = 30;
  const barH = 15;
  const maxBar = opts.maxW ?? opts.width - labelW - 120;
  const max = Math.max(...sorted.map((b) => b.v));
  const H = sorted.length * rowH;
  const rows = sorted
    .map((b, i) => {
      const p = providers.find((x) => x.id === b.id)!;
      const y = i * rowH;
      const w = Math.max(3, (b.v / max) * maxBar);
      const top = i === 0;
      return `<text x="0" y="${y + barH / 2 + 1}" dominant-baseline="central" class="${top ? "name top" : "name"}">${p.label}</text>
        ${ditherBar(labelW, y, w, barH, p.color)}
        <text x="${labelW + w + 12}" y="${y + barH / 2 + 1}" dominant-baseline="central" class="${top ? "num top" : "num"}">${b.text}${b.sub ? `<tspan class="sub"> ${b.sub}</tspan>` : ""}</text>`;
    })
    .join("");
  return `<div class="panel"><div class="ptitle">${title}<span>${hint}</span></div>
    <svg width="${opts.width}" height="${H}" viewBox="0 0 ${opts.width} ${H}">${rows}</svg></div>`;
};

const speedPanel = (m: Metric, hint: string, width: number, loc?: Location, title = m.title): string =>
  panel(
    title,
    hint,
    providers.flatMap((p) => {
      const v = loc ? value(m, p.id, loc)?.v : acrossLocations(m, p.id);
      return v == null || Number.isNaN(v) ? [] : [{ id: p.id, v, text: m.v === "mbps" ? `${Math.round(v)} MB/s` : fmtMs(v) }];
    }),
    { better: m.better, width },
  );

const range = (ns: number[]) => (Math.min(...ns) === Math.max(...ns) ? `${ns[0]}` : `${Math.min(...ns)}–${Math.max(...ns)}`);
const publishedN = (ms: Metric[]) =>
  range(ms.flatMap((m) => locations.flatMap((l) => providers.filter((p) => p.id !== "supabase").flatMap((p) => value(m, p.id, l)?.n ?? []))));
const supabaseN = (m: Metric) => {
  const ns = locations.flatMap((l) => value(m, "supabase", l)?.n ?? []);
  return Math.min(...ns) === Math.max(...ns) ? `${ns[0]}` : `${Math.min(...ns)}–${Math.max(...ns)}`;
};

// ---------- cards ----------

const label = isSmoke ? "Initial results · Supabase smoke run" : "Supabase full runs";
const runDay = "16 Oct 2026";
const footer = (left: string) =>
  `<div class="foot"><span class="brand">storage<span>bench</span></span><span>${left}</span></div>`;

const failurePanel = panel(
  "Failed uploads",
  "no retries",
  providers.map((p) => {
    const f = uploadFailures(p.id);
    return { id: p.id, v: f.attempts === 0 ? 0 : f.failures / f.attempts, text: fmtPct(f.failures, f.attempts), sub: `${f.failures} of ${f.attempts.toLocaleString("en-US")}` };
  }),
  { better: "lower", width: 520, maxW: 200 },
);

const heavy = costs.workloads.findIndex((w) => w.name === "Media-heavy app");
const costPanel = (i: number, title: string, hint: string, width: number) =>
  panel(
    title,
    hint,
    providers.flatMap((p) => {
      const c = costs.costs.find((x) => x.id === p.id);
      return c ? [{ id: p.id, v: c.monthly[i]!, text: fmtUsd(c.monthly[i]!) }] : [];
    }),
    { better: "lower", width },
  );

const ranked = (m: Metric, loc: Location) =>
  providers.flatMap((p) => {
    const v = value(m, p.id, loc)?.v;
    return v == null ? [] : [{ id: p.id, label: p.label, v }];
  }).sort((a, b) => (m.better === "lower" ? a.v - b.v : b.v - a.v));
const rankOf = (m: Metric, loc: Location) => ranked(m, loc).findIndex((r) => r.id === "supabase") + 1;
const ordinal = (n: number) => ["", "first", "second", "third", "fourth", "fifth", "sixth"][n] ?? `${n}th`;
const list = (xs: string[]) => (xs.length <= 1 ? (xs[0] ?? "none") : `${xs.slice(0, -1).join(", ")} and ${xs.at(-1)}`);
const ash = locations[0];
const ashTop = ranked(M.ttfb, ash);
const leadsTtfb = locations.filter((l) => rankOf(M.ttfb, l) === 1).map((l) => l.label);
const leadsGet = locations.filter((l) => rankOf(M.get1, l) === 1).map((l) => l.label);
const parRank = [...providers].map((p) => ({ id: p.id, v: acrossLocations(M.par, p.id) })).sort((a, b) => a.v - b.v).findIndex((r) => r.id === "supabase") + 1;
const sbUp = uploadFailures("supabase");
const overall = (m: Metric) =>
  providers.map((p) => ({ id: p.id, label: p.label, v: acrossLocations(m, p.id) })).filter((r) => !Number.isNaN(r.v)).sort((a, b) => (m.better === "lower" ? a.v - b.v : b.v - a.v));
const overallRank = (m: Metric) => overall(m).findIndex((r) => r.id === "supabase") + 1;
const fmtV = (m: Metric, v: number) => (m.v === "mbps" ? `${Math.round(v)} MB/s` : fmtMs(v));
const wins = allTests.filter((m) => overallRank(m) === 1);
const worst = [...allTests].sort((a, b) => overallRank(b) - overallRank(a))[0]!;
const ashRanks = allTests.map((m) => rankOf(m, ash));
const locCardNo = isSmoke ? 7 : 9;
const lower = (t: string) => t[0]!.toLowerCase() + t.slice(1);
const others = providers.filter((p) => p.id !== "supabase").map((p) => ({ ...p, ...uploadFailures(p.id) }));
const noFailures = others.filter((p) => p.failures === 0).map((p) => p.label);
const mostFailures = [...others].sort((a, b) => b.failures / b.attempts - a.failures / a.attempts)[0]!;
const costOf = (id: string) => costs.costs.find((c) => c.id === id)!.monthly[costs.workloads.findIndex((w) => w.name === "Media-heavy app")]!;
const cardTake = `<section class="card">
  <div class="kicker">${label}</div>
  <h2>What the ${isSmoke ? "initial " : ""}numbers say</h2>
  <ul class="take">${isSmoke ? "" : `
    <li><b>Fastest on ${wins.length} of ${allTests.length} tests across the four locations</b>: ${list(wins.map((m) => lower(m.title)))}. Time to first byte is ${fmtMs(acrossLocations(M.ttfb, "supabase"))} against ${fmtMs(overall(M.ttfb).find((r) => r.id !== "supabase")!.v)} for the next provider, ${overall(M.ttfb).find((r) => r.id !== "supabase")!.label}.</li>
    <li><b>Its weakest result is ${lower(worst.title)}:</b> ${fmtV(worst, acrossLocations(worst, "supabase"))}, ${ordinal(overallRank(worst))} of six; ${overall(worst)[0]!.label} leads with ${fmtV(worst, overall(worst)[0]!.v)}.</li>`}
    <li><b>Next to the bucket, Supabase is slower.</b> From Ashburn its 1 KB time to first byte is ${fmtMs(value(M.ttfb, "supabase", ash)!.v)}, ${ordinal(rankOf(M.ttfb, ash))} of six; ${ashTop[0]!.label} and ${ashTop[1]!.label} answer in ${fmtMs(ashTop[0]!.v)} and ${fmtMs(ashTop[1]!.v)}.${isSmoke ? "" : ` Across all ${allTests.length} tests from Ashburn it is never first and ranks ${ordinal(Math.min(...ashRanks))} at best.`}</li>
    <li><b>Farther from the bucket, it leads.</b> Fastest first byte from ${list(leadsTtfb)}, and the fastest 1 MB download from ${list(leadsGet)}. Supabase ran from different client networks than the others (card ${locCardNo}), so part of that gap may come from the client rather than the service.</li>
    ${isSmoke ? `<li><b>Parallel uploads are its weakest test:</b> ${fmtMs(acrossLocations(M.par, "supabase"))} for 16 uploads at once, ${ordinal(parRank)} of six.</li>` : ""}
    <li><b>${sbUp.failures === 0 ? "No failed uploads" : `${sbUp.failures} failed uploads`} in ${sbUp.attempts.toLocaleString("en-US")} attempts.</b> ${isSmoke ? "Too few attempts to compare with the others' failure rates, which come from thousands." : `${noFailures.length ? `${list(noFailures)} also had none; ` : ""}${mostFailures.label} failed ${fmtPct(mostFailures.failures, mostFailures.attempts)}.`}</li>
    <li><b>Cost follows egress.</b> ${fmtUsd(costOf("supabase"))} a month for the media-heavy workload, between R2 (${fmtUsd(costOf("r2"))}) and S3 (${fmtUsd(costOf("aws-s3"))}). Serving 50 TB at $0.09/GB is most of it.</li>
  </ul>
  ${isSmoke ? `<p class="small">Smoke run: 1 to 3 samples per Supabase number. Three full passes per location are running and will replace these numbers.</p>` : ""}
  ${footer("Every number on these cards uses the same four locations for every provider")}
</section>`;

const card1 = `<section class="card">
  <div class="kicker">${label}</div>
  <h1>S3, R2, Railway, Backblaze, Neon and Supabase, measured from 4 places</h1>
  <div class="grid2">
    ${speedPanel(M.ttfb, "lower is better", 520)}
    ${isSmoke ? speedPanel(M.get1, "lower is better", 520) : speedPanel(M.get100, "higher is better", 520)}
    ${failurePanel}
    ${costPanel(heavy, "Monthly cost", "10 TB stored, 50 TB served", 520)}
  </div>
  ${footer(`Speed: median of 4 locations · Supabase: ${isSmoke ? "smoke run, 1–3 samples per number" : "three full passes"}, ${runDay} · others: published runs, 9 and 15 Oct`)}
</section>`;

const card2 = `<section class="card">
  <div class="kicker">${label}</div>
  <h2>Time to first byte, location by location</h2>
  <p class="lede">A 1 KB file through a presigned GET, the path a browser takes. Lower is better. Every bucket is in US East, including Supabase's (us-east-1), so distance to Virginia sets the floor.</p>
  <div class="grid2 tight">
    ${locations.map((l) => speedPanel(M.ttfb, `others from ${l.theirs} · Supabase from ${l.ours}`, 520, l, `From ${l.label}`)).join("")}
  </div>
  ${footer(`Samples per location: Supabase ${supabaseN(M.ttfb)} · others ${publishedN([M.ttfb])}`)}
</section>`;

const card3 = `<section class="card">
  <div class="kicker">${label}</div>
  <h2>Uploads, cold starts and seeking</h2>
  <div class="grid2">
    ${speedPanel(M.up1, "lower is better", 520)}
    ${speedPanel(M.par, "lower is better", 520)}
    ${speedPanel(M.first, "lower is better", 520)}
    ${speedPanel(M.range, "lower is better", 520)}
  </div>
  ${footer(`Median of 4 locations · Supabase samples per location: upload ${supabaseN(M.up1)}, parallel ${supabaseN(M.par)}, first request ${supabaseN(M.first)}, seek ${supabaseN(M.range)}`)}
</section>`;

const card100 = isSmoke ? "" : `<section class="card">
  <div class="kicker">${label}</div>
  <h2>100 MB files</h2>
  <p class="lede">Uploads use multipart with 5 MiB parts, 4 in flight; downloads go through a presigned GET. Megabytes per second at the median, higher is better.</p>
  <div class="grid2 tight">
    ${speedPanel(M.get100, "median of 4 locations", 520, undefined, "Download 100 MB")}
    ${speedPanel(M.up100, "median of 4 locations", 520, undefined, "Upload 100 MB")}
    ${speedPanel(M.get100, "next to the buckets", 520, ash, "Download 100 MB from Ashburn")}
    ${speedPanel(M.up100, "next to the buckets", 520, ash, "Upload 100 MB from Ashburn")}
  </div>
  ${footer(`Samples per location: Supabase ${supabaseN(M.get100)} · others ${publishedN([M.get100, M.up100])}`)}
</section>`;

const tableCard = isSmoke ? "" : `<section class="card">
  <div class="kicker">${label}</div>
  <h2>Every test, median of the four locations</h2>
  <table class="every">
    <thead><tr><th>Test</th>${providers.map((p) => `<th class="n${p.id === "supabase" ? " hi" : ""}"><i style="background:${p.color}"></i>${p.label}</th>`).join("")}<th class="n">Supabase rank</th></tr></thead>
    <tbody>${allTests
      .map((m) => {
        const vals = providers.map((p) => acrossLocations(m, p.id));
        const best = m.better === "lower" ? Math.min(...vals) : Math.max(...vals);
        return `<tr><td>${m.title}<span>${m.note}${m.v === "mbps" ? ", MB/s" : ""}</span></td>${vals
          .map((v, i) => `<td class="n${providers[i]!.id === "supabase" ? " hi" : ""}${v === best ? " best" : ""}">${fmtV(m, v)}</td>`)
          .join("")}<td class="n rank">${ordinal(overallRank(m))}</td></tr>`;
      })
      .join("")}</tbody>
  </table>
  ${footer("Bold: best in the row · each provider's median per location, then the median of the four")}
</section>`;

const sb = costs.costs.find((c) => c.id === "supabase")!;
const card4 = `<section class="card">
  <div class="kicker">List prices</div>
  <h2>Monthly cost for three workloads</h2>
  <div class="grid3">
    ${costs.workloads.map((w, i) => costPanel(i, w.name, "", 340)).join("")}
  </div>
  <div class="workloads">${costs.workloads.map((w) => `<div><b>${w.name}</b> ${w.what}</div>`).join("")}</div>
  <p class="small">Supabase: ${sb.model}. The Pro plan fee also covers the project's Postgres database, Auth and other services. Other providers: list prices from the published storage-bench cost model, checked ${costs.checkedOn}.</p>
  ${footer("Storage, requests and egress only · no compute, support plans or taxes")}
</section>`;

const card5 = `<section class="card">
  <div class="kicker">Method</div>
  <h2>What is like for like, and what is not</h2>
  <div class="cols">
    <div>
      <h3>Same for every provider</h3>
      <ul>
        <li><b>Bucket region.</b> Supabase in AWS us-east-1, Virginia, like Neon; Railway and B2 are in Virginia, S3 in Ohio, R2 on an Eastern North America hint.</li>
        <li><b>Harness.</b> The storage-bench code, files-sdk ${smokeMeta.iad?.filesSdk ?? "3.0.0"}, the AWS SDK S3 client, Node 24, identical operations and object sizes.</li>
        <li><b>No retries.</b> One attempt per request; failures are counted.</li>
        <li><b>Locations.</b> Every number on these cards uses the same four: Ashburn, San Francisco, Amsterdam, Lille. Seattle and the Florida home line are left out for everyone.</li>
        <li><b>Summary method.</b> Median per location, then the median of the four, as in the original summary.</li>
        ${isSmoke ? "" : `<li><b>Sample size.</b> Three full passes per location for every provider: ${publishedN(allTests)} samples per number for the others, ${range(allTests.flatMap((m) => locations.flatMap((l) => value(m, "supabase", l)?.n ?? [])))} for Supabase.</li>`}
      </ul>
    </div>
    <div>
      <h3>Different</h3>
      <ul>
        <li><b>Client machines and networks.</b> Supabase ran from Fly.io in or near each city; the others ran from Railway, a Freestyle VM and an OVH sandbox (next card).</li>
        <li><b>When.</b> Supabase on ${runDay}; the others on 9 and 15 Oct.</li>
        <li><b>Not interleaved.</b> The original run took the five providers in a random order every round, so a slow minute hit everyone. Supabase ran on its own.</li>
        ${isSmoke ? `<li><b>Sample size.</b> This is a smoke run: 1 to 3 samples per Supabase number, no 100 MB tests. The other numbers come from three full passes (${publishedN(Object.values(M))} samples). Supabase's three full passes are running now.</li>` : ""}
      </ul>
    </div>
  </div>
  ${footer("Credentials for the other five providers would allow a rerun of all six together from the same machines")}
</section>`;

const card6 = `<section class="card">
  <div class="kicker">Method</div>
  <h2>Where the clients and buckets are</h2>
  <table>
    <thead><tr><th>Location</th><th>Original client</th><th>Network</th><th>Our client (Supabase)</th><th>Network (ipinfo)</th></tr></thead>
    <tbody>
      <tr><td>Ashburn</td><td>Railway server (us-east4)</td><td>AS400940 Railway</td><td>Fly iad, Ashburn</td><td>${smokeMeta.iad?.location?.org ?? "–"}</td></tr>
      <tr><td>San Francisco</td><td>Freestyle VM</td><td>AS36320 Freestyle Cloud</td><td>Fly sjc, Santa Clara (60 km)</td><td>${smokeMeta.sjc?.location?.org ?? "–"}</td></tr>
      <tr><td>Amsterdam</td><td>Railway server (europe-west4)</td><td>AS400940 Railway</td><td>Fly ams, Amsterdam</td><td>${smokeMeta.ams?.location?.org ?? "–"}</td></tr>
      <tr><td>Lille</td><td>boat sandbox on OVH</td><td>AS16276 OVH</td><td>Fly cdg, Paris (205 km)</td><td>${smokeMeta.cdg?.location?.org ?? "–"}</td></tr>
      <tr class="dim"><td>Seattle</td><td>Tenki VM</td><td>Wowrack, then Luxor</td><td>none: Fly has no Seattle region</td><td>excluded for all</td></tr>
      <tr class="dim"><td>Florida</td><td>Home server</td><td>AS7018 AT&amp;T</td><td>none: a home line can't be reproduced</td><td>excluded for all</td></tr>
    </tbody>
  </table>
  <table class="buckets">
    <thead><tr><th>Provider</th><th>S3</th><th>R2</th><th>Railway</th><th>B2</th><th>Neon</th><th>Supabase</th></tr></thead>
    <tbody><tr><td>Bucket</td><td>us-east-2, Ohio</td><td>ENAM hint</td><td>iad, Virginia</td><td>us-east-005</td><td>aws us-east-1</td><td>aws us-east-1</td></tr></tbody>
  </table>
  ${footer("Supabase reached through its S3 endpoint (&lt;project&gt;.storage.supabase.co/storage/v1/s3), path-style")}
</section>`;

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Supabase on storage-bench</title>
<style>
  @page { size: 1280px 720px; margin: 0; }
  * { box-sizing: border-box; }
  html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { margin: 0; background: #0b0b0a; color: #f0efec; font-family: system-ui, -apple-system, "Segoe UI", sans-serif; }
  .card { width: 1280px; height: 720px; padding: 52px 72px 0; position: relative; overflow: hidden; break-after: page; background: #0b0b0a; }
  .card:last-child { break-after: auto; }
  .kicker { font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: oklch(0.72 0.13 220); font-weight: 600; margin-bottom: 10px; }
  h1 { font-size: 34px; font-weight: 600; letter-spacing: -0.02em; margin: 0 0 34px; }
  h2 { font-size: 30px; font-weight: 600; letter-spacing: -0.02em; margin: 0 0 10px; }
  h3 { font-size: 17px; margin: 0 0 10px; font-weight: 600; }
  .lede { color: #a9a8a3; font-size: 15px; margin: 0 0 22px; max-width: 980px; line-height: 1.45; }
  .grid2 { display: grid; grid-template-columns: 520px 520px; column-gap: 96px; row-gap: 30px; }
  .grid2.tight { row-gap: 22px; }
  .grid3 { display: grid; grid-template-columns: repeat(3, 340px); column-gap: 32px; margin-top: 26px; }
  .panel .ptitle { font-size: 20px; font-weight: 600; margin-bottom: 14px; white-space: nowrap; }
  .panel .ptitle span { font-size: 14px; font-weight: 400; color: #a9a8a3; margin-left: 10px; }
  .panel .ptitle em { font-style: normal; color: #6f6e69; }
  .grid2.tight .panel .ptitle { font-size: 17px; margin-bottom: 10px; }
  .grid2.tight .panel svg { transform: scale(0.94); transform-origin: left top; }
  svg .name { font-size: 15px; fill: #c3c2b7; }
  svg .num { font-size: 15px; fill: #c3c2b7; font-variant-numeric: tabular-nums; }
  svg .top { fill: #ffffff; font-weight: 700; }
  svg .sub { font-size: 11px; fill: #6f6e69; font-weight: 400; }
  .foot { position: absolute; left: 72px; right: 72px; bottom: 30px; display: flex; justify-content: space-between; align-items: baseline; color: #898781; font-size: 13px; gap: 24px; }
  .foot > span:last-child { text-align: right; }
  .brand { font-size: 19px; font-weight: 600; color: #f0efec; letter-spacing: -0.01em; white-space: nowrap; }
  .brand span { color: #898781; font-weight: 400; }
  .workloads { display: grid; grid-template-columns: repeat(3, 340px); column-gap: 32px; margin-top: 16px; font-size: 13px; color: #a9a8a3; }
  .workloads b { color: #f0efec; display: block; font-weight: 600; }
  .small { font-size: 12.5px; color: #898781; margin-top: 22px; max-width: 1100px; line-height: 1.5; }
  .cols { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; margin-top: 24px; }
  ul { margin: 0; padding-left: 18px; color: #c3c2b7; font-size: 14.5px; line-height: 1.5; }
  li { margin-bottom: 10px; }
  li b { color: #f0efec; }
  ul.take { margin-top: 30px; font-size: 19px; line-height: 1.5; max-width: 1080px; }
  ul.take li { margin-bottom: 18px; }
  table { width: 100%; border-collapse: collapse; font-size: 14px; margin-top: 18px; }
  th { text-align: left; color: #898781; font-weight: 500; padding: 8px 10px; border-bottom: 1px solid #383835; font-size: 13px; }
  td { padding: 8px 10px; border-bottom: 1px solid #262624; color: #c3c2b7; }
  td:first-child { color: #f0efec; font-weight: 600; }
  tr.dim td { color: #6f6e69; }
  table.buckets { margin-top: 26px; }
  table.every { margin-top: 16px; font-size: 14.5px; }
  table.every td, table.every th { padding: 6px 10px; }
  table.every td:first-child span { font-size: 11.5px; color: #6f6e69; font-weight: 400; margin-left: 8px; }
  table.every .n { text-align: right; font-variant-numeric: tabular-nums; white-space: nowrap; }
  table.every th i { display: inline-block; width: 9px; height: 9px; border-radius: 2px; margin-right: 6px; }
  table.every td.hi { background: rgba(96, 165, 220, 0.10); color: #f0efec; }
  table.every th.hi { color: #f0efec; }
  table.every td.best { color: #ffffff; font-weight: 700; }
  table.every td.rank { color: #a9a8a3; }
</style></head><body>
${card1}${cardTake}${card2}${card100}${card3}${tableCard}${card4}${card5}${card6}
</body></html>`;

await writeFile(out, html);
console.log(`wrote ${out} (${isSmoke ? "smoke" : "full"} data from ${smokeDir})`);
