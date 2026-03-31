/** Fire GA4 generate_lead event after successful form submission. */
export function trackGenerateLead(params: {
  form_type: "audit" | "quiz" | "pdf";
  score?: number;
  result_tier?: string;
  resource?: string;
}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "generate_lead", {
    ...params,
    currency: "VND",
  });
}
