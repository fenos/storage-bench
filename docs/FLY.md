# Running the bench on Fly.io

A Fly machine is one more client location, just like the Railway runners upstream. It runs the same image in every region and stays idle. Runs are started over SSH, so a multi-hour run never depends on an HTTP request or a deploy. Raw samples go to a volume at `/app/results` and are pulled back to `results/raw/` here.

The location name is `fly-<region>` (for example `fly-iad` or `fly-fra`). [scripts/remote.sh](../scripts/remote.sh) knows it, so `push`, `start`, `status`, `pull`, and `clean` work like they do for the other clients.

## What you need

- `flyctl`, logged in (`fly auth login`) with access to the `supabase-dev` organization.
- A `.env` with credentials for the providers you want to run (see [.env.example](../.env.example)). For Supabase:
  - The bucket in `SUPABASE_S3_BUCKET` must already exist.
  - The project's upload size limit (Storage settings, 50 MB on a new project) must be at least 100 MB, or set `SUPABASE_MAX_OBJECT_MB` to that limit so the 100 MB tests are skipped rather than failed.

## One-time setup

The app name is global on Fly. If `supabase-storage-bench` is taken, pick another, change `app` in [fly.toml](../fly.toml), and run `export FLY_APP=<name>` so `scripts/remote.sh` uses it.

```sh
fly apps create supabase-storage-bench --org supabase-dev

# Only NAME=value lines with a value. Fly stores quotes literally, so .env values must be unquoted.
grep -E '^[A-Z0-9_]+=.+' .env | fly secrets import -a supabase-storage-bench --stage

# Builds the image remotely and starts one performance-1x machine in iad, with a 1 GB volume.
fly deploy -a supabase-storage-bench --ha=false
```

Check that the machine sees the credentials:

```sh
fly ssh console -a supabase-storage-bench -C "printenv SUPABASE_S3_ENDPOINT"
```

## More regions

Clone the first machine into each extra region. Each clone gets its own new, empty volume.

```sh
fly machine list -a supabase-storage-bench
fly machine clone <machine-id> --region fra -a supabase-storage-bench
```

`fly platform regions` lists the region codes. These are the closest matches for the upstream client locations:

| Upstream client | Fly region | |
|---|---|---|
| `railway-ashburn` (Ashburn, Virginia) | `iad` (Ashburn) | Same metro |
| `freestyle-sf` (San Francisco) | `sjc` (San Jose) | About 70 km away |
| `railway-amsterdam` (Amsterdam) | `ams` (Amsterdam) | Same metro |
| `boat-lille` (Lille, France) | `cdg` (Paris) | About 200 km away |
| `tenki-seattle` (Seattle) | none | Fly has no Seattle region |
| `ms-a2` (Florida home line) | none | A residential line; no data center stands in for it |

## Running

Do a smoke run first. It takes a couple of minutes and touches every operation once or twice:

```sh
scripts/remote.sh fly-iad start smoke-1 --profile smoke --providers supabase
scripts/remote.sh fly-iad status smoke-1   # "EXIT 0" means it finished
```

Then a full run, which takes a few hours:

```sh
scripts/remote.sh fly-iad start p1-main --profile full --code-version "$(git rev-parse --short HEAD)"
```

To watch it live:

```sh
fly ssh console -a supabase-storage-bench -r iad -C "tail -f /app/logs/p1-main.log"
```

Or run several passes from several regions unattended:

```sh
scripts/campaign.sh 3 fly-iad fly-fra
```

## Getting the results

```sh
scripts/remote.sh fly-iad pull
npm run report
```

`npm run report` only reads `--profile full` runs, so a smoke run is never mixed into the results. Run `scripts/remote.sh fly-iad clean` once the files are pulled to empty the volume.

## Updating the code

```sh
scripts/remote.sh fly-iad push
```

This redeploys only that region's machine. A redeploy restarts the machine, which kills any run on it, so check `status` first.

Credentials changes go through `fly secrets set NAME=value -a supabase-storage-bench`. That also restarts the machines.

## Cost and teardown

A `performance-1x` machine costs about $30 a month if it runs all the time, plus a few cents for each 1 GB volume (see [Fly pricing](https://fly.io/docs/about/pricing/)). It uses a dedicated CPU because shared CPUs get throttled after a burst, which would show up as slower hashing on the 100 MB tests. Stop machines between campaigns:

```sh
fly machine stop <machine-id> -a supabase-storage-bench
fly apps destroy supabase-storage-bench   # removes the app, its machines, and its volumes
```

## Reading the numbers fairly

The client region decides most of the latency, and every upstream bucket is in US East. From `iad`, a Supabase project in `eu-central-1` is about 90 ms further away than the other buckets. From `ams` or `cdg` it is the closest one. To compare like for like, put the Supabase project in `us-east-1` and run from the same regions as the other providers.
