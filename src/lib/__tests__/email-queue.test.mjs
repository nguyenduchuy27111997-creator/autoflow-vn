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

describe("Wrapper → task integration (Plan 120-01)", () => {
  it("USE_TRIGGER_DEV=true branch calls tasks.trigger with exactly {email_queue_row_id, sequence_type}", () => {
    const source = readSource("src/lib/email-queue.ts");
    const triggerCall = source.match(
      /tasks\.trigger[<\w\s\.,>]*\(\s*["']email-sequence["']\s*,\s*\{([\s\S]*?)\}\s*\)/
    );
    assert.ok(triggerCall, "tasks.trigger('email-sequence', {...}) call required");
    const stripped = triggerCall[1].replace(/\/\/[^\n]*/g, "");
    const keys = [...stripped.matchAll(/(\w+)\s*:/g)].map((m) => m[1]);
    assert.deepEqual(
      keys.sort(),
      ["email_queue_row_id", "sequence_type"].sort(),
      `trigger payload keys must be exactly {email_queue_row_id, sequence_type}; found: ${keys.join(", ")}`
    );
  });

  it("legacy 5-row schedule preserved for USE_TRIGGER_DEV=false branch", () => {
    const source = readSource("src/lib/email-queue.ts");
    assert.match(source, /EMAIL_SCHEDULE/);
    // Verify 5 schedule entries (days_offset 0, 3, 7, 14, 21)
    for (const offset of [0, 3, 7, 14, 21]) {
      assert.match(
        source,
        new RegExp(`days_offset:\\s*${offset}\\b`),
        `legacy schedule must keep days_offset ${offset}`
      );
    }
  });

  it("task body fetches PII via SUPABASE_SERVICE_ROLE_KEY (D-02)", () => {
    const source = readSource("src/trigger/email-sequence.ts");
    assert.match(source, /process\.env\.SUPABASE_SERVICE_ROLE_KEY/);
    assert.match(source, /from\(["']email_queue["']\)/);
    assert.match(source, /eq\(["']id["'],\s*payload\.email_queue_row_id\)/);
  });

  it("task body throws on errors (no silent swallow — Trigger.dev retry surfaces failures)", () => {
    const source = readSource("src/trigger/email-sequence.ts");
    // Run() body must contain throw statements + must NOT contain .catch(() => {})
    const runBody = source.match(/run:\s*async[\s\S]*?^\s*\}\s*,?\s*$/m);
    assert.ok(runBody, "run() body must exist");
    assert.match(runBody[0], /throw new Error/);
    assert.ok(
      !/\.catch\(\s*\(\s*\)\s*=>\s*\{\s*\}\s*\)/.test(runBody[0]),
      "task body must NOT contain fire-and-forget .catch(() => {}) — Phase 120 explicitly forbids this anti-pattern"
    );
  });

  it("task body expands schedule to 5 rows total (anchor + 4 remainder)", () => {
    const source = readSource("src/trigger/email-sequence.ts");
    // Remainder must cover email_number 2, 3, 4, 5
    for (const n of [2, 3, 4, 5]) {
      assert.match(
        source,
        new RegExp(`email_number:\\s*${n}\\b`),
        `task body must schedule email_number ${n}`
      );
    }
  });
});

describe("Route inventory invariants (Plan 120-02)", () => {
  const ROUTES = [
    "src/app/api/audit/route.ts",
    "src/app/api/chat/route.ts",
    "src/app/api/quiz/route.ts",
    "src/app/api/tai-lieu/route.ts",
    "src/app/api/newsletter/route.ts",
    "src/app/api/partner/route.ts",
  ];

  it("exactly 6 routes call enqueueEmailSequence (no callers added or lost)", () => {
    let total = 0;
    for (const route of ROUTES) {
      const source = readSource(route);
      const matches = source.match(/enqueueEmailSequence\(/g);
      assert.ok(
        matches && matches.length >= 1,
        `${route} must contain at least one enqueueEmailSequence() call`
      );
      total += matches.length;
    }
    // Each route must contain exactly one call; total === 6
    assert.equal(total, 6, `expected 6 total enqueueEmailSequence calls across the 6 routes; found ${total}`);
  });

  it("each route's sequenceType is one of {audit, quiz, pdf} (resolved Q3 — preserve current behavior)", () => {
    const allowed = new Set(["audit", "quiz", "pdf"]);
    for (const route of ROUTES) {
      const source = readSource(route);
      // Find each enqueueEmailSequence call and inspect its sequenceType
      const calls = source.match(
        /enqueueEmailSequence\(\s*\{[\s\S]*?\}\s*\)/g
      );
      assert.ok(calls && calls.length > 0, `${route} has no enqueueEmailSequence call`);
      for (const call of calls) {
        const seqMatch = call.match(/sequenceType:\s*["']([^"']+)["']/);
        assert.ok(seqMatch, `${route} call missing sequenceType: ${call.slice(0, 80)}`);
        assert.ok(
          allowed.has(seqMatch[1]),
          `${route} uses sequenceType "${seqMatch[1]}" — only ${[...allowed].join("/")} allowed in Phase 120`
        );
      }
    }
  });

  it("no route imports @trigger.dev/sdk directly (wrapper-only — Pitfall 3 + Pitfall 7)", () => {
    for (const route of ROUTES) {
      const source = readSource(route);
      assert.ok(
        !/from\s+["']@trigger\.dev\/sdk["']/.test(source),
        `${route} must NOT import @trigger.dev/sdk directly; the wrapper handles it`
      );
    }
  });

  it("no route calls tasks.trigger() directly (wrapper-only)", () => {
    for (const route of ROUTES) {
      const source = readSource(route);
      assert.ok(
        !/tasks\.trigger\(/.test(source),
        `${route} must NOT call tasks.trigger() directly; only email-queue.ts wrapper does`
      );
    }
  });
});
