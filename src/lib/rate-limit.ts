import type { NextRequest } from "next/server";

const rateLimitMaps = new Map<string, Map<string, { count: number; resetAt: number }>>();

function getMap(namespace: string) {
  if (!rateLimitMaps.has(namespace)) {
    rateLimitMaps.set(namespace, new Map());
  }
  return rateLimitMaps.get(namespace)!;
}

export function getRateLimitKey(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

export function isRateLimited(
  key: string,
  namespace: string,
  { maxRequests = 5, windowMs = 60 * 60 * 1000 } = {}
): boolean {
  const map = getMap(namespace);
  const now = Date.now();
  const entry = map.get(key);

  if (!entry || now > entry.resetAt) {
    map.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  if (entry.count >= maxRequests) return true;
  entry.count++;
  return false;
}
