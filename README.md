<p align="center">
  <a href="https://x.com/leodev"><img alt="Follow @leodev on X" src="https://shieldcn.dev/x/follow/leodev.svg?variant=branded&mode=dark" /></a>
</p>

storage-bench measures how fast Amazon S3, Cloudflare R2, Railway Buckets, Backblaze B2, and Neon are for the things apps actually do, and what each costs per month. Every provider runs through the same SDK ([files-sdk](https://files-sdk.dev) 3.0.0) on Node 24, from six places: Ashburn, a home line in Florida, San Francisco, Seattle, Amsterdam, and Lille.

[See the results](https://storage-bench.vercel.app) · [Read the methodology](docs/METHODOLOGY.md) · [Every number](results/RESULTS.md)

## Results

Distance decides most of it, so the order changes with where your app runs. Median time to first byte for a 1 KB file:

| From | Fastest | Slowest |
|---|---|---|
| Ashburn, Virginia | Railway 8 ms, B2 11 ms | R2 76 ms |
| Florida home line | Railway 40 ms, B2 45 ms | R2 129 ms |
| San Francisco | S3 110 ms, Railway 123 ms | B2 221 ms |
| Amsterdam | R2 200 ms, Railway 213 ms | S3 310 ms |

Monthly cost from list prices, for 500 GB stored, 2 TB served, 5M uploads, and 50M reads:

| Railway Buckets | Backblaze B2 | Cloudflare R2 | Neon | Amazon S3 |
|---|---|---|---|---|
| $7.50 | $8.41 | $39.75 | $162 | $227 |

With no retries, Backblaze B2 failed 54 of 3,888 upload attempts (1.4%), from every location: 27 single uploads and 27 parallel batches, where a batch fails if any upload in it does. Railway had no failures, and S3, R2, and Neon had two or three each.

Two of the six test machines run on Railway's own network, which may favor Railway Buckets. The site marks them, and every other caveat is in the [methodology](docs/METHODOLOGY.md).

## Run it

You need Node 24 and credentials for at least one provider. [.env.example](.env.example) lists the variables; providers without credentials are skipped.

```sh
cp .env.example .env
npm ci
set -a; . ./.env; set +a
npm run bench -- --profile full --client my-laptop
npm run report
```

`--profile smoke` runs a quick check, and `--providers r2,railway` limits the run. To run from Fly.io machines in one or more regions, see [docs/FLY.md](docs/FLY.md).

<p align="center"><sub>Built by <a href="https://x.com/leodev">@leodev</a></sub></p>
