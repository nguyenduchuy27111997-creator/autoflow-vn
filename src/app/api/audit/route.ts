import { NextRequest, NextResponse } from "next/server";
import { readFile, writeFile, mkdir } from "fs/promises";
import { join } from "path";

const WEBHOOK_URL = process.env.AUDIT_WEBHOOK_URL;
const DATA_DIR = join(process.cwd(), "data");
const SUBMISSIONS_FILE = join(DATA_DIR, "audit-submissions.json");
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5;

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function getRateLimitKey(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(key);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (entry.count >= MAX_REQUESTS) {
    return true;
  }

  entry.count++;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Honeypot check
    if (body.website) {
      return NextResponse.json({ success: true }); // Silent reject
    }

    // Rate limiting
    const clientKey = getRateLimitKey(req);
    if (isRateLimited(clientKey)) {
      return NextResponse.json(
        { error: "Quá nhiều yêu cầu. Vui lòng thử lại sau." },
        { status: 429 }
      );
    }

    // Validate required fields
    const { name, phone, industry, teamSize, painPoints, details, company } =
      body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Vui lòng điền tên và số điện thoại." },
        { status: 400 }
      );
    }

    const submission = {
      name,
      phone,
      company: company || "",
      industry: industry || "",
      teamSize: teamSize || "",
      painPoints: painPoints || [],
      details: details || "",
      submittedAt: new Date().toISOString(),
      source: req.headers.get("referer") || "direct",
    };

    // Save to local JSON file
    try {
      await mkdir(DATA_DIR, { recursive: true });
      let submissions: unknown[] = [];
      try {
        const existing = await readFile(SUBMISSIONS_FILE, "utf-8");
        submissions = JSON.parse(existing);
      } catch {
        // File doesn't exist yet
      }
      submissions.push(submission);
      await writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));
    } catch (err) {
      console.error("File save error:", err);
    }

    // Forward to webhook (n8n, Zapier, Make, etc.)
    if (WEBHOOK_URL) {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      }).catch((err) => {
        console.error("Webhook error:", err);
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Có lỗi xảy ra. Vui lòng thử lại." },
      { status: 500 }
    );
  }
}
