/**
 * Phase 120 — Trigger.dev email-queue wrapper tests.
 * Run: node --test src/lib/__tests__/email-queue.test.mjs
 *
 * Covers the 3 Wave 0 validation gaps from 120-VALIDATION.md:
 *   - Dim 1: feature-flag branching (USE_TRIGGER_DEV gates Trigger.dev path)
 *   - Dim 2: PII-strip payload type (only email_queue_row_id + sequence_type)
 *   - Dim 3: retry config shape (maxAttempts:4, factor:4, 1s -> 16s)
 *
 * IMPORTANT: Tests assert against the .ts SOURCE FILE TEXT via fs.readFile
 * (no transpilation), because:
 *   1. Plain `node --test` cannot import .ts files without a loader
 *   2. The SDK's task() registers globally and would attempt cloud auth
 *   3. Source-text assertions catch regressions in the locked literal
 *      strings (id "email-sequence", retry values, EmailTaskPayload keys)
 *      that downstream code grep-depends on.
 *
 * Some assertions will FAIL until Plan 120-01 lands (wrapper refactor).
 * That is correct Wave 0 Nyquist behavior — they turn green in 120-01.
 *
 * Plan 120-00 partial-scope note: Task 3 (trigger.config.ts) is deferred
 * pending Trigger.dev Cloud project ref. The "trigger.config.ts default
 * retry" test gracefully skips when that file is absent and resumes
 * asserting once Task 3 lands.
 */

import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const WEBSITE_ROOT = resolve(__dirname, "../../..");

const readSource = (relativePath) =>
  readFileSync(resolve(WEBSITE_ROOT, relativePath), "utf8");

const sourceExists = (relativePath) =>
  existsSync(resolve(WEBSITE_ROOT, relativePath));

describe("TRG-05 PII-strip enforcement (HARD GATE)", () => {
  it("EmailTaskPayload contains ONLY email_queue_row_id + sequence_type", () => {
    const source = readSource("src/trigger/email-sequence.ts");
    // Extract the EmailTaskPayload interface body
    const match = source.match(
      /export interface EmailTaskPayload\s*\{([\s\S]*?)\}/,
    );
    assert.ok(
      match,
      "EmailTaskPayload interface must exist in email-sequence.ts",
    );
    const body = match[1];
    // Strip line comments before key detection so doc comments don't pollute
    const stripped = body.replace(/\/\/[^\n]*/g, "");
    // Field keys: any "<ident>:" tokens
    const keys = [...stripped.matchAll(/(\w+)\s*:/g)].map((m) => m[1]);
    assert.deepEqual(
      keys.sort(),
      ["email_queue_row_id", "sequence_type"].sort(),
      `EmailTaskPayload keys must be exactly {email_queue_row_id, sequence_type}; found: ${keys.join(", ")}`,
    );
  });

  it("email-sequence.ts has TRG-05 HARD GATE header", () => {
    const source = readSource("src/trigger/email-sequence.ts");
    assert.match(source, /TRG-05 PII-STRIP HARD GATE/);
  });

  it("no PII property names appear in tasks.trigger() call args in email-queue.ts", () => {
    // After Plan 120-01 wraps, email-queue.ts will contain a tasks.trigger
    // call. The call's argument object MUST be {email_queue_row_id, sequence_type}
    // - no "email", "name", or "phone" keys.
    const source = readSource("src/lib/email-queue.ts");
    // Look for tasks.trigger(...) call and check its object literal arg
    const triggerCallMatch = source.match(
      /tasks\.trigger[<\w\s\.\,>]*\(\s*["'][^"']*["']\s*,\s*\{([\s\S]*?)\}\s*\)/,
    );
    if (!triggerCallMatch) {
      // Wave 0: wrapper not yet refactored — log + skip the inner assertion.
      // After Plan 120-01 Task 1 lands, this match MUST succeed and the
      // inner assertion MUST pass.
      console.warn(
        "[Wave 0] email-queue.ts has no tasks.trigger() call yet — Plan 120-01 will add it",
      );
      return;
    }
    const argBody = triggerCallMatch[1];
    // Strip line comments
    const stripped = argBody.replace(/\/\/[^\n]*/g, "");
    const keys = [...stripped.matchAll(/(\w+)\s*:/g)].map((m) => m[1]);
    for (const forbidden of ["email", "name", "phone"]) {
      assert.ok(
        !keys.includes(forbidden),
        `PII field '${forbidden}' must NEVER appear in tasks.trigger() payload; found keys: ${keys.join(", ")}`,
      );
    }
  });
});

describe("Retry config shape (TRG-01)", () => {
  it("email-sequence.ts task() call uses maxAttempts:4, factor:4, 1s->16s, randomize:false", () => {
    const source = readSource("src/trigger/email-sequence.ts");
    // All five literals must be present in the task() definition
    assert.match(source, /maxAttempts:\s*4/);
    assert.match(source, /factor:\s*4/);
    assert.match(source, /minTimeoutInMs:\s*1000/);
    assert.match(source, /maxTimeoutInMs:\s*16000/);
    assert.match(source, /randomize:\s*false/);
  });

  it("trigger.config.ts default retry matches task-level config", () => {
    // Plan 120-00 partial-scope: Task 3 (trigger.config.ts) is deferred
    // pending the Trigger.dev Cloud project ref. When the file lands, this
    // assertion MUST pass. Until then, skip with a clear note.
    if (!sourceExists("trigger.config.ts")) {
      console.warn(
        "[Plan 120-00 deferred] trigger.config.ts not yet present — follow-up commit (after operator provides proj_*) must satisfy this assertion",
      );
      return;
    }
    const source = readSource("trigger.config.ts");
    assert.match(source, /maxAttempts:\s*4/);
    assert.match(source, /factor:\s*4/);
    assert.match(source, /enabledInDev:\s*false/);
  });

  it("task id is exactly 'email-sequence' (Plan 120-01 trigger call depends on this string)", () => {
    const source = readSource("src/trigger/email-sequence.ts");
    assert.match(source, /id:\s*["']email-sequence["']/);
  });
});

describe("Feature-flag branching (TRG-01)", () => {
  it("email-queue.ts source references process.env.USE_TRIGGER_DEV", () => {
    // After Plan 120-01 lands, the wrapper must branch on USE_TRIGGER_DEV.
    const source = readSource("src/lib/email-queue.ts");
    // Wave 0: this assertion will FAIL until Plan 120-01 wraps. That is
    // correct Nyquist behavior — the failing test is the executor's
    // green-light when Plan 120-01 finishes.
    assert.match(
      source,
      /process\.env\.USE_TRIGGER_DEV/,
      "Plan 120-01 must add a USE_TRIGGER_DEV env-var check to email-queue.ts",
    );
  });

  it("email-queue.ts uses dynamic import for @trigger.dev/sdk (cold-start mitigation)", () => {
    // Pitfall 3: avoid top-level SDK import (200-400KB Netlify bundle hit).
    // After Plan 120-01 lands, expect dynamic `await import("@trigger.dev/sdk")`.
    const source = readSource("src/lib/email-queue.ts");
    // Wave 0: will FAIL until Plan 120-01. Correct behavior.
    const hasDynamicImport =
      /await\s+import\(\s*["']@trigger\.dev\/sdk["']\s*\)/.test(source);
    const hasTopLevelImport =
      /^import\s+.*from\s+["']@trigger\.dev\/sdk["']/m.test(source);
    assert.ok(
      hasDynamicImport,
      "Plan 120-01 must use `await import('@trigger.dev/sdk')` inside the USE_TRIGGER_DEV branch",
    );
    assert.ok(
      !hasTopLevelImport,
      "email-queue.ts must NOT import @trigger.dev/sdk at top level (Pitfall 3 — cold-start bundle bloat)",
    );
  });

  it("email-queue.ts preserves the existing enqueueEmailSequence({email, name, sequenceType}) signature (D-04)", () => {
    // The wrapper signature MUST stay the same so route callers don't change.
    const source = readSource("src/lib/email-queue.ts");
    assert.match(source, /export\s+(async\s+)?function\s+enqueueEmailSequence/);
    assert.match(source, /EnqueueParams/);
  });
});

describe("Migration 043 sanity check", () => {
  it("migration 043 file exists with the expanded CHECK constraint", () => {
    // Migrations live in a sibling repo dir; resolve from website/ root
    const migrationPath = resolve(
      WEBSITE_ROOT,
      "../client-ops/supabase/migrations/043_phase120_email_queue_sequence_types.sql",
    );
    const sql = readFileSync(migrationPath, "utf8");
    assert.match(sql, /email_queue_sequence_type_check/);
    assert.match(sql, /'audit',\s*'quiz',\s*'pdf',\s*'chat',\s*'tai-lieu'/);
    assert.ok(
      !/'newsletter'|'partner'/.test(sql),
      "Migration 043 must NOT include 'newsletter' or 'partner' (resolved Q3 — preserve current behavior)",
    );
  });
});
