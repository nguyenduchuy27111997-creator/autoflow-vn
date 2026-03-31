const UTM_KEY = "autoflow_utm";
const UTM_TTL = 30 * 24 * 60 * 60 * 1000; // 30 days

const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

export interface UTMData {
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_term: string | null;
  utm_content: string | null;
}

const EMPTY_UTM: UTMData = {
  utm_source: null,
  utm_medium: null,
  utm_campaign: null,
  utm_term: null,
  utm_content: null,
};

/** Capture UTM params from URL and store in localStorage (first-touch). */
export function captureUTM(searchParams: URLSearchParams) {
  // First-touch guard: don't overwrite existing UTMs
  const existing = localStorage.getItem(UTM_KEY);
  if (existing) {
    try {
      const parsed = JSON.parse(existing);
      if (parsed.expires > Date.now()) return; // Still valid, keep first touch
    } catch {
      // Corrupted, overwrite
    }
  }

  // Check if any UTM param is present
  const hasUTM = UTM_PARAMS.some((p) => searchParams.get(p));
  if (!hasUTM) return;

  const data: Record<string, string | null> = {};
  for (const param of UTM_PARAMS) {
    data[param] = searchParams.get(param) || null;
  }

  localStorage.setItem(
    UTM_KEY,
    JSON.stringify({ ...data, expires: Date.now() + UTM_TTL })
  );
}

/** Get stored UTM data for Supabase insert. Returns null values if no UTM stored. */
export function getStoredUTM(): UTMData {
  if (typeof window === "undefined") return EMPTY_UTM;

  const stored = localStorage.getItem(UTM_KEY);
  if (!stored) return EMPTY_UTM;

  try {
    const parsed = JSON.parse(stored);
    if (parsed.expires && parsed.expires < Date.now()) {
      localStorage.removeItem(UTM_KEY);
      return EMPTY_UTM;
    }
    return {
      utm_source: parsed.utm_source || null,
      utm_medium: parsed.utm_medium || null,
      utm_campaign: parsed.utm_campaign || null,
      utm_term: parsed.utm_term || null,
      utm_content: parsed.utm_content || null,
    };
  } catch {
    return EMPTY_UTM;
  }
}
