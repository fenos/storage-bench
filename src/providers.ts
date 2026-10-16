import { Files } from "files-sdk";
import { backblazeB2 } from "files-sdk/backblaze-b2";
import { neon } from "files-sdk/neon";
import { r2 } from "files-sdk/r2";
import { s3 } from "files-sdk/s3";
import { z } from "zod";

export const providerIds = ["aws-s3", "r2", "railway", "b2", "neon", "supabase"] as const;
export type ProviderId = (typeof providerIds)[number];

export type Provider = {
  readonly id: ProviderId;
  readonly label: string;
  /** Where the bucket lives, as the provider names it. */
  readonly region: string;
  /** Builds a fresh client. Each call opens new connections, which is what the cold-start test relies on. */
  readonly connect: () => Files;
  /** Largest object the account's plan accepts, when the plan caps it. Bigger sizes are skipped, not failed. */
  readonly maxObjectBytes?: number;
};

const nonEmpty = z.string().min(1);

// Each provider is optional: it joins the run only when every variable it needs is set.
const specs = {
  "aws-s3": z.object({
    AWS_S3_BUCKET: nonEmpty,
    AWS_S3_REGION: nonEmpty,
    AWS_S3_ACCESS_KEY_ID: nonEmpty,
    AWS_S3_SECRET_ACCESS_KEY: nonEmpty,
  }),
  r2: z.object({
    R2_ACCOUNT_ID: nonEmpty,
    R2_BUCKET: nonEmpty,
    R2_ACCESS_KEY_ID: nonEmpty,
    R2_SECRET_ACCESS_KEY: nonEmpty,
    R2_REGION_LABEL: z.string().default("enam (location hint)"),
  }),
  railway: z.object({
    RAILWAY_BUCKET: nonEmpty,
    RAILWAY_ENDPOINT: z.url(),
    RAILWAY_ACCESS_KEY_ID: nonEmpty,
    RAILWAY_SECRET_ACCESS_KEY: nonEmpty,
    RAILWAY_REGION_LABEL: z.string().default("iad"),
  }),
  b2: z.object({
    B2_BUCKET: nonEmpty,
    B2_REGION: nonEmpty,
    B2_APPLICATION_KEY_ID: nonEmpty,
    B2_APPLICATION_KEY: nonEmpty,
  }),
  neon: z.object({
    NEON_BUCKET: nonEmpty,
    NEON_ENDPOINT: z.url(),
    NEON_REGION: nonEmpty,
    NEON_ACCESS_KEY_ID: nonEmpty,
    NEON_SECRET_ACCESS_KEY: nonEmpty,
  }),
  supabase: z.object({
    SUPABASE_S3_BUCKET: nonEmpty,
    SUPABASE_S3_ENDPOINT: z.url(),
    SUPABASE_S3_REGION: nonEmpty,
    SUPABASE_S3_ACCESS_KEY_ID: nonEmpty,
    SUPABASE_S3_SECRET_ACCESS_KEY: nonEmpty,
    // The project's upload size limit (Storage settings, 50 MB by default) also caps multipart totals.
    // Left empty, it means no cap (an empty string must not coerce to 0 and drop the provider).
    SUPABASE_MAX_OBJECT_MB: z.preprocess((v) => (v === "" ? undefined : v), z.coerce.number().positive().optional()),
  }),
} satisfies Record<ProviderId, z.ZodType>;

type Env = Record<string, string | undefined>;

const build = (id: ProviderId, env: Env): Provider | undefined => {
  switch (id) {
    case "aws-s3": {
      const e = specs["aws-s3"].safeParse(env);
      if (!e.success) return undefined;
      const v = e.data;
      return {
        id,
        label: "Amazon S3",
        region: v.AWS_S3_REGION,
        connect: () =>
          new Files({
            retries: 0,
            adapter: s3({
              bucket: v.AWS_S3_BUCKET,
              region: v.AWS_S3_REGION,
              credentials: { accessKeyId: v.AWS_S3_ACCESS_KEY_ID, secretAccessKey: v.AWS_S3_SECRET_ACCESS_KEY },
            }),
          }),
      };
    }
    case "r2": {
      const e = specs.r2.safeParse(env);
      if (!e.success) return undefined;
      const v = e.data;
      return {
        id,
        label: "Cloudflare R2",
        region: v.R2_REGION_LABEL,
        connect: () =>
          new Files({
            retries: 0,
            adapter: r2({
              bucket: v.R2_BUCKET,
              accountId: v.R2_ACCOUNT_ID,
              accessKeyId: v.R2_ACCESS_KEY_ID,
              secretAccessKey: v.R2_SECRET_ACCESS_KEY,
              // Same AWS SDK client as every other S3-compatible provider in the run.
              client: "aws-sdk",
            }),
          }),
      };
    }
    case "railway": {
      const e = specs.railway.safeParse(env);
      if (!e.success) return undefined;
      const v = e.data;
      return {
        id,
        label: "Railway Buckets",
        region: v.RAILWAY_REGION_LABEL,
        // No dedicated adapter: Railway documents its buckets as plain S3-compatible storage.
        connect: () =>
          new Files({
            retries: 0,
            adapter: s3({
              bucket: v.RAILWAY_BUCKET,
              region: "auto",
              endpoint: v.RAILWAY_ENDPOINT,
              credentials: { accessKeyId: v.RAILWAY_ACCESS_KEY_ID, secretAccessKey: v.RAILWAY_SECRET_ACCESS_KEY },
            }),
          }),
      };
    }
    case "b2": {
      const e = specs.b2.safeParse(env);
      if (!e.success) return undefined;
      const v = e.data;
      return {
        id,
        label: "Backblaze B2",
        region: v.B2_REGION,
        connect: () =>
          new Files({
            retries: 0,
            adapter: backblazeB2({
              bucket: v.B2_BUCKET,
              region: v.B2_REGION,
              accessKeyId: v.B2_APPLICATION_KEY_ID,
              secretAccessKey: v.B2_APPLICATION_KEY,
            }),
          }),
      };
    }
    case "neon": {
      const e = specs.neon.safeParse(env);
      if (!e.success) return undefined;
      const v = e.data;
      return {
        id,
        label: "Neon",
        region: v.NEON_REGION,
        connect: () =>
          new Files({
            retries: 0,
            adapter: neon({
              bucket: v.NEON_BUCKET,
              endpoint: v.NEON_ENDPOINT,
              region: v.NEON_REGION,
              accessKeyId: v.NEON_ACCESS_KEY_ID,
              secretAccessKey: v.NEON_SECRET_ACCESS_KEY,
            }),
          }),
      };
    }
    case "supabase": {
      const e = specs.supabase.safeParse(env);
      if (!e.success) return undefined;
      const v = e.data;
      return {
        id,
        label: "Supabase Storage",
        region: v.SUPABASE_S3_REGION,
        ...(v.SUPABASE_MAX_OBJECT_MB !== undefined ? { maxObjectBytes: v.SUPABASE_MAX_OBJECT_MB * 1024 * 1024 } : {}),
        // Supabase's S3-compatible endpoint, not files-sdk/supabase: that adapter uses the REST API and has no range reads.
        connect: () =>
          new Files({
            retries: 0,
            adapter: s3({
              bucket: v.SUPABASE_S3_BUCKET,
              region: v.SUPABASE_S3_REGION,
              endpoint: v.SUPABASE_S3_ENDPOINT,
              // Supabase only serves path-style requests: <endpoint>/<bucket>/<key>.
              forcePathStyle: true,
              credentials: { accessKeyId: v.SUPABASE_S3_ACCESS_KEY_ID, secretAccessKey: v.SUPABASE_S3_SECRET_ACCESS_KEY },
            }),
          }),
      };
    }
    default: {
      const _exhaustive: never = id;
      return _exhaustive;
    }
  }
};

export const isProviderId = (value: string): value is ProviderId =>
  providerIds.some((id) => id === value);

/** Providers whose credentials are present, optionally narrowed to `only`. */
export const loadProviders = ({ env, only }: { env: Env; only: readonly ProviderId[] | undefined }): Provider[] =>
  providerIds
    .filter((id) => only === undefined || only.includes(id))
    .map((id) => build(id, env))
    .filter((p): p is Provider => p !== undefined);
