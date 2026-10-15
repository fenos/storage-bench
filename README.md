<p align="center">
  <a href="https://x.com/leodev"><img alt="Follow @leodev on X" src="https://shieldcn.dev/x/follow/leodev.svg?variant=branded&mode=dark" /></a>
</p>

storage-bench measures how fast five object storage providers are for the things apps actually do, and what each one costs per month. Every provider is called through the same SDK ([files-sdk](https://files-sdk.dev) 3.0.0) on the same runtime (Node 24), from six client locations, so the numbers compare like for like.

Providers: Amazon S3, Cloudflare R2, Railway Buckets, Backblaze B2, and Neon.

[Browse the results site](#the-results-site) · [Read every number](results/RESULTS.md) · [See the cost model](results/COSTS.md)

- Uploads, downloads, first bytes, presigned URLs, range reads, copies, listings, fresh-client cold starts, and parallel bursts at five object sizes, from 1 KB to 100 MB
- Six client locations: Ashburn, a home line in Florida, San Francisco, Seattle, Amsterdam, and Lille
- One attempt per request, providers in a fresh random order every round, and every download checked against a SHA-256 of what was uploaded
- Monthly cost for three workloads from published list prices, with the price model for each provider
- A static results site in `site/`, built from the same data as the tables

## Results

[results/RESULTS.md](results/RESULTS.md) has every operation, size, and location with p50, p95, p99, time to first byte, throughput, sample count, and failure rate. The results site shows the headline numbers per location.

Distance decides most rankings. From Ashburn, next to most of the buckets, Railway Buckets and Backblaze B2 return a small file's first byte in about 10 ms. From Europe every provider takes 170 ms or more, and the order changes. Pick the location closest to where your app runs before quoting a number.

Monthly cost, from list prices checked 2026-10-09:

| Provider | Side project | SaaS with user uploads | Media-heavy app |
|---|---|---|---|
| Amazon S3 (us-east-2) | $1.13 | $228 | $4,822 |
| Cloudflare R2 | $0.00 | $39.75 | $412 |
| Railway Buckets | $0.00 | $7.50 | $150 |
| Backblaze B2 | $0.20 | $8.41 | $269 |
| Neon (Launch plan) | $0.23 | $162 | $5,180 |

The side project stores 10 GB and serves 50 GB a month, the SaaS app 500 GB and 2 TB, the media app 10 TB and 50 TB. [results/COSTS.md](results/COSTS.md) lists request counts and each provider's price model.

Appwrite was in the first runs and is not in the results: its free plan ran out of bandwidth partway through.

## What it measures

Each object size stands in for a real payload: 1 KB (JSON), 100 KB (avatars), 1 MB (photos), 10 MB (PDFs, audio), and 100 MB (video, uploaded with multipart at the SDK's default 5 MiB parts, 4 in flight).

For every size, one round trip is:

| Op | What is timed |
|---|---|
| `upload` | `files.upload()` until it resolves |
| `head` | `files.head()` |
| `download` | `files.download({ as: "stream" })` until the last byte is read and hashed |
| `url-get` | A presigned GET URL fetched with plain `fetch()`, the path a browser takes. Signing is local and not timed. Its time to first byte is the cleanest network number in the run. |
| `delete` | `files.delete()` |

Then, once per round:

| Op | What is timed |
|---|---|
| `concurrent-upload`, `concurrent-download` | 16 objects of 100 KB in parallel, like a gallery page |
| `burst-upload` | 32 uploads in parallel, reported separately |
| `first-request` | A brand-new SDK client does one `head()` on an existing object, so it opens a new TCP and TLS connection, like the first request after a deploy |
| `list-all` | Walk 1,000 objects under one prefix |
| `signed-upload` | A 1 MB browser-style upload: `fetch()` PUT to a URL from `signedUploadUrl()`. Minting the URL is not timed. |
| `range-get` | 256 KB from a random offset in a 10 MB object, like seeking in a video |
| `copy` | `copy()` of a 10 MB object. Server-side on every provider. |

For the parallel tests, one sample is the whole batch: its time runs until every request finishes, and it counts as failed if any request in it fails. Their sample count and failure rate count batches, not requests.

A full run does 60 round trips at 1 KB and 100 KB, 30 at 1 MB, 20 at 10 MB, 8 at 100 MB, 10 parallel rounds, 20 fresh-client requests, 20 rounds of the signed-upload, range, and copy tests, and 6 listings. p95 and p99 are left blank when a row has fewer than 20 successful samples.

## How it stays fair

- Providers take turns, in a fresh random order every round, so a slow minute on the network hits all of them.
- Warmup requests are discarded.
- Every body is fresh random bytes and every download is SHA-256 checked, so deduplication or caching can't fake a result.
- One attempt per measured request for everyone. The AWS SDK normally retries throttles and 5xx errors three times, which would hide failures inside its latency, so it runs with `AWS_MAX_ATTEMPTS=1` and files-sdk with `retries: 0`. Untimed setup, like creating the 1,000 objects to list, does retry.
- Latency percentiles cover successful requests.
- Raw samples are kept as JSON lines with the client location, Node version, files-sdk version, and code version.

## Where the buckets and clients are

| Provider | Bucket region | Notes |
|---|---|---|
| Amazon S3 | us-east-2 (Ohio) | The AWS organization used blocks us-east-1. Ohio is about 10 ms farther from Virginia than the other buckets. |
| Cloudflare R2 | Eastern North America location hint | R2 picks the exact site. |
| Railway Buckets | iad | Runs on Tigris. |
| Backblaze B2 | us-east-005 | |
| Neon | aws us-east-1 | |

| Client | Location | Network |
|---|---|---|
| `railway-ashburn` | Ashburn, Virginia | Railway (us-east4) |
| `ms-a2` | Florida | A Minisforum MS-A2 on a home AT&T line |
| `freestyle-sf` | San Francisco | Freestyle VM |
| `tenki-seattle` | Seattle | Tenki sandbox VM |
| `railway-amsterdam` | Amsterdam | Railway (europe-west4) |
| `boat-lille` | Lille, France | boat sandbox (OVH) |

Ashburn sits next to most of the buckets, like an app on AWS us-east-1. The other locations show the same buckets from across the country and from Europe. The two Railway clients share a network with Railway Buckets; the other four don't. The home line's upload speed caps its 100 MB numbers.

Each client runs three full passes. Passes from 2026-10-09 and 2026-10-15 are merged, so most locations span two days and different times of day. A client runs one benchmark process at a time.

## SDK notes

- files-sdk sends every provider through `@aws-sdk/client-s3`, so client overhead is the same for all of them.
- `download` time to first byte is the time until the SDK yields the first chunk. Use `url-get` for the network's time to first byte.

## Data notes

Samples that overlap a stall of the client machine itself, or a window where two runs overlapped, are dropped. Each window and its reason is in [results/exclusions.json](results/exclusions.json).


## Run it yourself

You need Node 24 and credentials for at least one provider. [.env.example](.env.example) lists the variables for each one; providers without credentials are skipped.

```sh
cp .env.example .env
npm ci
set -a; . ./.env; set +a
npm run bench -- --profile full --client my-laptop
npm run report
npm run costs
```

`--profile smoke` runs a quick check. `--providers r2,railway` limits the run. `npm run report` reads `results/raw/` and writes `results/RESULTS.md` and `results/summary.json`.

To run the full campaign from every client location, `scripts/remote.sh` pushes, starts, and pulls runs on each machine, and `scripts/campaign.sh` runs the passes:

```sh
scripts/campaign.sh 3 ms-a2 railway-ashburn railway-amsterdam tenki-seattle freestyle-sf boat-lille
```

## The results site

`site/` is a static Next.js site built with [dithercn](https://dithercn.vercel.app). It reads one file, `site/src/data/results.json`, which `npm run site:data` writes from the committed `results/summary.json` and `results/costs.json`:

```sh
npm ci
npm run site:data
cd site
bun install
bun run dev      # or: bun run build, which writes a static site to site/out
```

## Repository layout

| Path | What it is |
|---|---|
| `src/bench.ts` | The benchmark runner |
| `src/providers.ts` | One files-sdk client per provider, built from environment variables |
| `src/report.ts` | Merges raw runs per location into `results/RESULTS.md` and `results/summary.json` |
| `src/costs.ts` | The monthly cost model and its list prices |
| `src/model.ts` | The shape the results views read: one value per metric, provider, and location |
| `src/site-data.ts` | Writes the site's data file |
| `scripts/` | Remote runs and the multi-location campaign |
| `results/` | Generated tables, cost model, and exclusion windows |
| `site/` | The results site |

<p align="center"><sub>Built by <a href="https://x.com/leodev">@leodev</a></sub></p>
