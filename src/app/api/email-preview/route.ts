import { NextRequest, NextResponse } from "next/server";
import {
  quizEmail1,
  quizEmail2,
  quizEmail3,
  quizEmail4,
  quizEmail5,
  pdfEmail1,
  pdfEmail2,
  pdfEmail3,
  pdfEmail4,
  pdfEmail5,
  auditEmail1,
  auditEmail2,
  auditEmail3,
  auditEmail4,
  auditEmail5,
} from "@/lib/email-templates";
import type { QuizTier } from "@/lib/email-templates";

// Dev-only email preview — blocked in production
const IS_DEV = process.env.NODE_ENV === "development";

interface EmailDef {
  label: string;
  day: number;
  render: (tier: QuizTier) => { subject: string; html: string };
}

const EMAILS: Record<string, EmailDef[]> = {
  quiz: [
    { label: "Quiz 1 — Ket qua", day: 0, render: (tier) => quizEmail1({ email: "preview@test.com", name: "Minh Anh", score: tier === "starter" ? 14 : tier === "growth" ? 26 : 36, tier }) },
    { label: "Quiz 2 — Case Study", day: 3, render: (tier) => quizEmail2({ email: "preview@test.com", name: "Minh Anh", tier }) },
    { label: "Quiz 3 — Soft CTA", day: 7, render: (tier) => quizEmail3({ email: "preview@test.com", name: "Minh Anh", tier }) },
    { label: "Quiz 4 — ROI Calculator", day: 14, render: (tier) => quizEmail4({ email: "preview@test.com", name: "Minh Anh", tier }) },
    { label: "Quiz 5 — Final", day: 21, render: (tier) => quizEmail5({ email: "preview@test.com", name: "Minh Anh", tier }) },
  ],
  pdf: [
    { label: "PDF 1 — Quick Wins", day: 0, render: () => pdfEmail1({ email: "preview@test.com", name: "Minh Anh" }) },
    { label: "PDF 2 — Cross-sell Quiz", day: 3, render: () => pdfEmail2({ email: "preview@test.com", name: "Minh Anh" }) },
    { label: "PDF 3 — Case Study", day: 7, render: () => pdfEmail3({ email: "preview@test.com", name: "Minh Anh", resource: "checklist-ecommerce" }) },
    { label: "PDF 4 — Another Case Study", day: 14, render: () => pdfEmail4({ email: "preview@test.com", name: "Minh Anh", resource: "checklist-ecommerce" }) },
    { label: "PDF 5 — Final Farewell", day: 21, render: () => pdfEmail5({ email: "preview@test.com", name: "Minh Anh" }) },
  ],
  audit: [
    { label: "Audit 1 — Confirmation", day: 0, render: () => auditEmail1({ email: "preview@test.com", name: "Minh Anh" }) },
    { label: "Audit 2 — 5 Dau Hieu", day: 3, render: () => auditEmail2({ email: "preview@test.com", name: "Minh Anh" }) },
    { label: "Audit 3 — Case Study", day: 7, render: () => auditEmail3({ email: "preview@test.com", name: "Minh Anh" }) },
    { label: "Audit 4 — Cross-sell Quiz", day: 14, render: () => auditEmail4({ email: "preview@test.com", name: "Minh Anh" }) },
    { label: "Audit 5 — Final Farewell", day: 21, render: () => auditEmail5({ email: "preview@test.com", name: "Minh Anh" }) },
  ],
};

function renderShell(
  sequence: string,
  emailIdx: number,
  tier: QuizTier,
  width: string,
  emailResult: { subject: string; html: string }
): string {
  const widthPx = width === "mobile" ? "375px" : "700px";

  const sequenceButtons = Object.keys(EMAILS)
    .map((seq) => {
      const active = seq === sequence;
      return `<a href="?sequence=${seq}&email=0&tier=${tier}&width=${width}" style="display:inline-block;padding:6px 16px;border-radius:8px;font-size:13px;font-weight:600;text-decoration:none;margin-right:4px;${active ? "background:#1E40AF;color:#fff;" : "background:#F1F5F9;color:#475569;"}">${seq.toUpperCase()}</a>`;
    })
    .join("");

  const emailButtons = (EMAILS[sequence] ?? [])
    .map((def, idx) => {
      const active = idx === emailIdx;
      return `<a href="?sequence=${sequence}&email=${idx}&tier=${tier}&width=${width}" style="display:block;padding:10px 14px;border-radius:8px;font-size:13px;text-decoration:none;margin-bottom:4px;border:1px solid ${active ? "#1E40AF" : "#E2E8F0"};${active ? "background:#DBEAFE;color:#1E40AF;font-weight:600;" : "background:#fff;color:#475569;"}">
        <div>${def.label}</div>
        <div style="font-size:11px;color:#94A3B8;margin-top:2px;">Day ${def.day}</div>
      </a>`;
    })
    .join("");

  const tierButtons = (["starter", "growth", "scale"] as const)
    .map((t) => {
      const active = t === tier;
      return `<a href="?sequence=${sequence}&email=${emailIdx}&tier=${t}&width=${width}" style="display:inline-block;padding:4px 12px;border-radius:6px;font-size:12px;font-weight:500;text-decoration:none;margin-right:4px;${active ? "background:#1E40AF;color:#fff;" : "background:#F1F5F9;color:#475569;"}">${t}</a>`;
    })
    .join("");

  const widthButtons = (["desktop", "mobile"] as const)
    .map((w) => {
      const active = w === width;
      return `<a href="?sequence=${sequence}&email=${emailIdx}&tier=${tier}&width=${w}" style="display:inline-block;padding:4px 12px;border-radius:6px;font-size:12px;font-weight:500;text-decoration:none;margin-right:4px;${active ? "background:#0F172A;color:#fff;" : "background:#F1F5F9;color:#475569;"}">${w === "desktop" ? "Desktop" : "Mobile"}</a>`;
    })
    .join("");

  // Escape HTML for the subject display
  const escapedSubject = emailResult.subject.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Preview — AutoFlow VN</title>
  <meta name="robots" content="noindex">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #F8FAFC; color: #0F172A; }
    .shell { display: flex; height: 100vh; }
    .sidebar { width: 280px; background: #fff; border-right: 1px solid #E2E8F0; padding: 20px; overflow-y: auto; flex-shrink: 0; }
    .sidebar h1 { font-size: 16px; font-weight: 700; margin-bottom: 16px; }
    .sidebar h2 { font-size: 11px; font-weight: 600; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.5px; margin: 16px 0 8px 0; }
    .main { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
    .toolbar { background: #fff; border-bottom: 1px solid #E2E8F0; padding: 12px 24px; display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
    .toolbar .subject { flex: 1; min-width: 200px; }
    .toolbar .subject span { font-size: 11px; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.5px; display: block; }
    .toolbar .subject strong { font-size: 14px; color: #0F172A; }
    .preview { flex: 1; overflow: auto; display: flex; justify-content: center; padding: 24px; background: #F1F5F9; }
    .preview iframe { border: 1px solid #E2E8F0; border-radius: 12px; background: #fff; box-shadow: 0 4px 24px rgba(0,0,0,0.06); min-height: 1200px; }
  </style>
</head>
<body>
  <script>
    // Auto-resize iframe to fit content
    window.addEventListener('load', function() {
      const iframe = document.querySelector('iframe');
      if (iframe) {
        iframe.onload = function() {
          try { iframe.style.height = iframe.contentDocument.body.scrollHeight + 40 + 'px'; } catch(e) {}
        };
        // Trigger on initial load too
        try { if (iframe.contentDocument) iframe.style.height = iframe.contentDocument.body.scrollHeight + 40 + 'px'; } catch(e) {}
      }
    });
  </script>
  <div class="shell">
    <div class="sidebar">
      <h1>Email Preview</h1>
      <h2>Sequence</h2>
      <div style="margin-bottom:12px;">${sequenceButtons}</div>
      ${sequence === "quiz" ? `<h2>Tier</h2><div style="margin-bottom:12px;">${tierButtons}</div>` : ""}
      <h2>Emails</h2>
      ${emailButtons}
    </div>
    <div class="main">
      <div class="toolbar">
        <div class="subject">
          <span>Subject</span>
          <strong>${escapedSubject}</strong>
        </div>
        <div>${widthButtons}</div>
      </div>
      <div class="preview">
        <iframe srcdoc="${emailResult.html.replace(/"/g, "&quot;").replace(/\n/g, "")}" style="width:${widthPx};" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</body>
</html>`;
}

export async function GET(request: NextRequest) {
  if (!IS_DEV) {
    return NextResponse.json({ error: "Not available in production" }, { status: 403 });
  }

  const searchParams = request.nextUrl.searchParams;
  const sequence = searchParams.get("sequence") ?? "quiz";
  const emailIdx = parseInt(searchParams.get("email") ?? "0", 10);
  const tier = (searchParams.get("tier") ?? "growth") as QuizTier;
  const width = searchParams.get("width") ?? "desktop";

  const emails = EMAILS[sequence];
  if (!emails) {
    return NextResponse.json({ error: "Unknown sequence" }, { status: 400 });
  }

  const idx = Math.max(0, Math.min(emailIdx, emails.length - 1));
  const emailResult = emails[idx].render(tier);

  const html = renderShell(sequence, idx, tier, width, emailResult);

  return new NextResponse(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
