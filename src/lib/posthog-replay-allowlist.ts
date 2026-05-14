// D-05b verbatim allowlist — DO NOT EXPAND without explicit user approval.
// Session replay is enabled ONLY on public marketing pages.
// All other routes (incl. /audit/*, /api/*, /chat/*, /dashboard/*) are blocked.

const REPLAY_ALLOWED_PREFIXES = ["/bang-gia", "/blog/", "/tai-lieu/"];

/**
 * Returns true if the given pathname is on the ANL-03 session-replay allowlist.
 * Exact match for "/" (homepage); prefix match for the 3 marketing path prefixes.
 */
export function isReplayAllowed(path: string): boolean {
  if (path === "/") return true;
  return REPLAY_ALLOWED_PREFIXES.some((p) => path.startsWith(p));
}
