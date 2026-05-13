/**
 * Trigger.dev v4 project configuration for AutoFlow website.
 *
 * Phase 120 - Email-Queue Reliability.
 * Region: eu-central-1 (Frankfurt) - selected at the Trigger.dev Cloud
 * dashboard level (Project Settings -> Regions). This config does NOT set
 * the region; the dashboard does. EU is mandatory per D-01 (VN Law 91/2025
 * cross-border data residency framing).
 *
 * Retry defaults: maxAttempts:4 (initial + 3 retries), factor:4, 1s->16s.
 * Per-task overrides allowed in src/trigger/*.ts (see email-sequence.ts).
 */
import { defineConfig } from "@trigger.dev/sdk";

export default defineConfig({
  project: "proj_vuksidwybrpebjqtsaaj",
  dirs: ["./src/trigger"],
  runtime: "node",
  maxDuration: 60, // 60s ceiling per task — email-sequence is fast (Supabase queries + insert)
  retries: {
    enabledInDev: false, // fail fast in dev - don't wait 16s on errors
    default: {
      maxAttempts: 4,
      factor: 4,
      minTimeoutInMs: 1000,
      maxTimeoutInMs: 16000,
      randomize: false,
    },
  },
});
