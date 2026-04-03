import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const referer = req.headers.get("referer") || "";
  const via = req.nextUrl.searchParams.get("via");

  // Detect traffic source — prefer explicit ?via= override (for platforms that strip Referer)
  let source = "direct";
  let medium = "referral";

  if (via) {
    source = via;
    medium = via === "email" ? "email" : "social";
  } else if (/facebook\.com|fb\.com|fbclid/i.test(referer)) {
    source = "facebook";
    medium = "social";
  } else if (/linkedin\.com|lnkd\.in/i.test(referer)) {
    source = "linkedin";
    medium = "social";
  } else if (/mail|outlook|gmail/i.test(referer)) {
    source = "email";
    medium = "email";
  } else if (/zalo/i.test(referer)) {
    source = "zalo";
    medium = "messaging";
  }

  const target = `https://autoflowvn.net/blog/${slug}?utm_source=${source}&utm_medium=${medium}&utm_campaign=${slug}&utm_content=short-link`;

  return NextResponse.redirect(target, 302);
}
