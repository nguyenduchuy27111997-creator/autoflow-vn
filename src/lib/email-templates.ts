import { SITE_NAME, SITE_URL, SUPPORT_EMAIL } from "@/data/constants";
import { caseStudies } from "@/lib/case-studies";

// ── Types ──────────────────────────────────────────────────────────────────────

export type QuizTier = "starter" | "growth" | "scale";

export interface EmailResult {
  subject: string;
  html: string;
}

// ── Tier data (internal) ───────────────────────────────────────────────────────

const TIER_DATA = {
  starter: {
    level: "Giai Đoạn Khởi Đầu",
    description:
      "Doanh nghiệp bạn vẫn đang vận hành tương đối gọn. Đây là thời điểm tốt nhất để bắt đầu — trước khi quy mô lớn hơn.",
    insight:
      "Bắt đầu với 1 workflow đơn giản — ví dụ tự động hóa lead capture — có thể tiết kiệm 1-2 giờ mỗi ngày ngay lập tức.",
    package: "Starter (8-15 triệu đồng, 1-2 tuần)",
    caseStudySlug: "giao-duc",
  },
  growth: {
    level: "Sẵn Sàng Tăng Trưởng",
    description:
      "Bạn đang ở giai đoạn lý tưởng để tự động hóa. Các điểm nghẽn đã rõ — nhập liệu chậm, lead rơi, báo cáo tốn thời gian.",
    insight:
      "3-5 workflows song song giải quyết cùng lúc: đồng bộ đơn hàng, tự động chăm lead, báo cáo real-time. Tiết kiệm tương đương 1 nhân viên full-time.",
    package: "Growth (20-35 triệu đồng, 3-4 tuần)",
    caseStudySlug: "e-commerce",
  },
  scale: {
    level: "Cần Tự Động Hóa Ngay",
    description:
      "Doanh nghiệp bạn đang mất tiền và thời gian mỗi ngày vì thiếu tự động hóa. Mỗi ngày chậm triển khai là thêm chi phí nhân sự và lead bị mất.",
    insight:
      "8-12 workflows bao phủ đơn hàng, kho, tài chính, marketing, báo cáo. Tiết kiệm 5+ giờ/ngày — tương đương 2-3 nhân viên full-time, 200-300 triệu/năm.",
    package: "Scale (50-80 triệu đồng, 6-8 tuần)",
    caseStudySlug: "bat-dong-san",
  },
} as const;

// ── Design tokens ─────────────────────────────────────────────────────────────

const COLORS = {
  primary: "#1E40AF",
  primaryLight: "#DBEAFE",
  primaryDark: "#1E3A8A",
  accent: "#2563EB",
  navy: "#0F172A",
  text: "#1E293B",
  textSecondary: "#475569",
  textMuted: "#64748B",
  textLight: "#94A3B8",
  border: "#E2E8F0",
  bgLight: "#F8FAFC",
  bgCard: "#F1F5F9",
  success: "#059669",
  successBg: "#ECFDF5",
  successBorder: "#A7F3D0",
  danger: "#DC2626",
  dangerBg: "#FEF2F2",
  dangerBorder: "#FECACA",
  white: "#FFFFFF",
} as const;

// ── UTM helper ────────────────────────────────────────────────────────────────

function utm(
  path: string,
  sequence: string,
  emailNum: number,
  campaign: string = "nurture"
): string {
  return `${SITE_URL}${path}?utm_source=email&utm_medium=nurture&utm_campaign=${campaign}_${sequence}&utm_content=email${emailNum}`;
}

// ── Unsubscribe link ──────────────────────────────────────────────────────────

function unsubscribeUrl(email: string): string {
  const encoded = encodeURIComponent(email);
  return `${SITE_URL}/api/unsubscribe?email=${encoded}`;
}

// ── Internal helpers ──────────────────────────────────────────────────────────

function preheader(text: string): string {
  return `<div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">${text}</div>`;
}

function emailWrapper(
  bodyHtml: string,
  preheaderText: string,
  recipientEmail: string
): string {
  return `<!DOCTYPE html>
<html lang="vi">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:${COLORS.bgLight};font-family:'Segoe UI',Roboto,Arial,sans-serif;">
  ${preheader(preheaderText)}
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${COLORS.bgLight};">
    <tr><td align="center" style="padding:32px 16px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;background:${COLORS.white};border-radius:16px;overflow:hidden;border:1px solid ${COLORS.border};">

        <!-- Brand accent bar -->
        <tr><td style="height:4px;background:linear-gradient(90deg,${COLORS.primary},${COLORS.accent});font-size:0;line-height:0;">&nbsp;</td></tr>

        <!-- Header -->
        <tr><td style="padding:28px 32px 20px 32px;text-align:center;border-bottom:1px solid ${COLORS.border};">
          <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
            <tr>
              <td style="width:36px;height:36px;vertical-align:middle;">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='36' height='36'%3E%3Crect width='32' height='32' rx='7' fill='%230066FF'/%3E%3Ccircle cx='9' cy='9' r='1.8' fill='rgba(255,255,255,0.35)'/%3E%3Ccircle cx='16' cy='9' r='1.8' fill='rgba(255,255,255,0.35)'/%3E%3Ccircle cx='23' cy='9' r='1.8' fill='rgba(255,255,255,0.35)'/%3E%3Ccircle cx='9' cy='16' r='1.8' fill='rgba(255,255,255,0.35)'/%3E%3Ccircle cx='16' cy='16' r='1.8' fill='rgba(255,255,255,0.35)'/%3E%3Ccircle cx='23' cy='16' r='1.8' fill='rgba(255,255,255,0.35)'/%3E%3Ccircle cx='9' cy='23' r='1.8' fill='rgba(255,255,255,0.35)'/%3E%3Ccircle cx='16' cy='23' r='1.8' fill='rgba(255,255,255,0.35)'/%3E%3Ccircle cx='23' cy='23' r='1.8' fill='rgba(255,255,255,0.35)'/%3E%3Cpolyline points='9,9 16,9 16,16 23,16 23,23' fill='none' stroke='white' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' opacity='0.9'/%3E%3Ccircle cx='9' cy='9' r='3' fill='white'/%3E%3Ccircle cx='16' cy='9' r='2.5' fill='white'/%3E%3Ccircle cx='16' cy='16' r='2.5' fill='white'/%3E%3Ccircle cx='23' cy='16' r='2.5' fill='white'/%3E%3Ccircle cx='23' cy='23' r='3' fill='white'/%3E%3C/svg%3E" width="36" height="36" alt="AutoFlow VN" style="display:block;border-radius:10px;" />
              </td>
              <td style="padding-left:12px;">
                <div style="font-size:20px;font-weight:700;color:${COLORS.navy};letter-spacing:-0.3px;">${SITE_NAME}</div>
              </td>
            </tr>
          </table>
          <div style="font-size:12px;color:${COLORS.textLight};margin-top:6px;letter-spacing:0.3px;">Chuyên gia tự động hóa quản lý cho SME Việt Nam</div>
        </td></tr>

        <!-- Body -->
        <tr><td style="padding:32px 32px 24px 32px;">
          ${bodyHtml}
        </td></tr>

        <!-- Signature -->
        <tr><td style="padding:0 32px 28px 32px;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
            <tr><td style="border-top:1px solid ${COLORS.border};padding-top:24px;">
              <p style="font-size:14px;color:${COLORS.textSecondary};line-height:1.6;margin:0;">Trân trọng,</p>
              <p style="font-size:14px;color:${COLORS.navy};font-weight:600;margin:4px 0 0 0;">${SITE_NAME}</p>
            </td></tr>
          </table>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:${COLORS.bgLight};padding:24px 32px;border-top:1px solid ${COLORS.border};">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
            <tr><td style="text-align:center;">
              <p style="font-size:12px;color:${COLORS.textMuted};margin:0 0 4px 0;line-height:1.6;">${SITE_NAME} &mdash; Tự động hóa quy trình cho SME Việt Nam</p>
              <p style="font-size:12px;color:${COLORS.textMuted};margin:0 0 12px 0;line-height:1.6;">
                <a href="${SITE_URL}" style="color:${COLORS.accent};text-decoration:none;">autoflowvn.net</a>
                &nbsp;&middot;&nbsp;
                <a href="mailto:${SUPPORT_EMAIL}" style="color:${COLORS.accent};text-decoration:none;">${SUPPORT_EMAIL}</a>
              </p>
              <p style="font-size:11px;color:${COLORS.textLight};margin:0;">
                <a href="${unsubscribeUrl(recipientEmail)}" style="color:${COLORS.textLight};text-decoration:underline;">Hủy nhận email</a>
              </p>
            </td></tr>
          </table>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function ctaButton(href: string, label: string): string {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin:28px 0;">
      <tr><td align="center">
        <table role="presentation" cellpadding="0" cellspacing="0">
          <tr><td style="background:${COLORS.primary};border-radius:10px;">
            <a href="${href}" style="display:inline-block;padding:14px 32px;color:${COLORS.white};font-weight:600;font-size:14px;text-decoration:none;letter-spacing:0.2px;line-height:1.4;">${label}</a>
          </td></tr>
        </table>
      </td></tr>
    </table>`;
}

function secondaryCta(href: string, label: string): string {
  return `<p style="font-size:14px;color:${COLORS.textMuted};text-align:center;margin:0;">Hoặc <a href="${href}" style="color:${COLORS.accent};text-decoration:none;font-weight:500;">${label}</a></p>`;
}

function infoCard(content: string, borderColor: string = COLORS.primary): string {
  return `
    <div style="background:${COLORS.bgLight};border-radius:12px;padding:20px 24px;margin:24px 0;border-left:4px solid ${borderColor};">
      ${content}
    </div>`;
}

function statHighlight(icon: string, value: string, label: string): string {
  return `
    <td style="text-align:center;padding:12px 8px;">
      <div style="font-size:20px;margin-bottom:4px;">${icon}</div>
      <div style="font-size:20px;font-weight:700;color:${COLORS.navy};line-height:1.2;">${value}</div>
      <div style="font-size:11px;color:${COLORS.textMuted};margin-top:2px;">${label}</div>
    </td>`;
}

// ── Body text helpers ─────────────────────────────────────────────────────────

function p(text: string): string {
  return `<p style="font-size:15px;color:${COLORS.text};line-height:1.7;margin:0 0 16px 0;">${text}</p>`;
}

function pBold(text: string): string {
  return `<p style="font-size:15px;color:${COLORS.text};line-height:1.7;margin:0 0 16px 0;"><strong>${text}</strong></p>`;
}

function greeting(name?: string): string {
  const dn = name ? name : "bạn";
  return p(`Chào <strong>${dn}</strong>,`);
}

function displayName(name?: string): string {
  return name ? name : "bạn";
}

// ── Case study block ──────────────────────────────────────────────────────────

function caseStudyBlock(slug: string): string {
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return "";

  const beforeItems = cs.workflows
    .slice(0, 2)
    .map(
      (wf) =>
        `<p style="font-size:14px;color:${COLORS.textSecondary};margin:0 0 6px 0;line-height:1.6;">&bull; <strong>${wf.name}:</strong> ${wf.before}</p>`
    )
    .join("");

  const afterItems = cs.workflows
    .slice(0, 2)
    .map(
      (wf) =>
        `<p style="font-size:14px;color:${COLORS.textSecondary};margin:0 0 6px 0;line-height:1.6;">&check; <strong>${wf.name}:</strong> ${wf.after}</p>`
    )
    .join("");

  return `
    <div style="background:${COLORS.bgLight};border-radius:12px;padding:24px;margin:24px 0;border:1px solid ${COLORS.border};">
      <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
        <tr><td>
          <div style="display:inline-block;background:${COLORS.primaryLight};color:${COLORS.primary};font-size:11px;font-weight:600;padding:4px 10px;border-radius:6px;text-transform:uppercase;letter-spacing:0.5px;">Case Study</div>
          <p style="font-size:16px;font-weight:700;color:${COLORS.navy};margin:12px 0 4px 0;">${cs.company} &mdash; ${cs.employees}</p>
          <p style="font-size:13px;color:${COLORS.textMuted};margin:0 0 16px 0;">${cs.subtitle}</p>
        </td></tr>
      </table>

      <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td width="50%" style="vertical-align:top;padding-right:10px;">
            <p style="font-size:12px;font-weight:600;color:${COLORS.danger};margin:0 0 8px 0;text-transform:uppercase;letter-spacing:0.5px;">Trước</p>
            ${beforeItems}
          </td>
          <td width="50%" style="vertical-align:top;padding-left:10px;">
            <p style="font-size:12px;font-weight:600;color:${COLORS.success};margin:0 0 8px 0;text-transform:uppercase;letter-spacing:0.5px;">Sau AutoFlow</p>
            ${afterItems}
          </td>
        </tr>
      </table>

      <div style="background:${COLORS.successBg};border-radius:8px;padding:12px 16px;margin-top:16px;border:1px solid ${COLORS.successBorder};">
        <p style="font-size:14px;font-weight:600;color:${COLORS.success};margin:0;">${cs.homepageResult}</p>
      </div>
    </div>`;
}

// ── Testimonial block ─────────────────────────────────────────────────────────

function testimonialBlock(slug: string): string {
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return "";

  return `
    <div style="background:${COLORS.bgLight};border-radius:12px;padding:20px 24px;margin:24px 0;border:1px solid ${COLORS.border};">
      <div style="font-size:28px;color:${COLORS.primaryLight};line-height:1;margin-bottom:8px;">&ldquo;</div>
      <p style="font-size:14px;color:${COLORS.text};font-style:italic;margin:0 0 12px 0;line-height:1.7;">${cs.testimonial.quote}</p>
      <table role="presentation" cellpadding="0" cellspacing="0">
        <tr>
          <td style="width:32px;height:32px;background:${COLORS.primaryLight};border-radius:50%;text-align:center;vertical-align:middle;">
            <span style="color:${COLORS.primary};font-size:14px;font-weight:700;line-height:32px;">${cs.testimonial.name.charAt(0)}</span>
          </td>
          <td style="padding-left:10px;">
            <p style="font-size:13px;font-weight:600;color:${COLORS.navy};margin:0;">${cs.testimonial.name}</p>
            <p style="font-size:12px;color:${COLORS.textMuted};margin:0;">${cs.testimonial.role}</p>
          </td>
        </tr>
      </table>
    </div>`;
}

// ═══════════════════════════════════════════════════════════════════════════════
// QUIZ SEQUENCE (5 emails)
// ═══════════════════════════════════════════════════════════════════════════════

// ── Quiz Email 1 — Day 0: Results ─────────────────────────────────────────────

export function quizEmail1(params: {
  email: string;
  name?: string;
  score: number;
  tier: QuizTier;
}): EmailResult {
  const { email, name, score, tier } = params;
  const dn = displayName(name);
  const tierData = TIER_DATA[tier];

  const baseSubject = `Kết quả quiz của ${dn} — ${score}/40`;
  const fallbackSubject = `Kết quả quiz của bạn — ${score}/40`;
  const subject = baseSubject.length <= 50 ? baseSubject : fallbackSubject;

  const scoreColor = tier === "scale" ? COLORS.danger : tier === "growth" ? "#D97706" : COLORS.success;

  const bodyHtml = `
    ${greeting(name)}
    ${p(`Bạn vừa hoàn thành bài quiz đánh giá mức độ sẵn sàng tự động hóa của AutoFlow. Đây là kết quả:`)}

    <div style="background:${COLORS.bgLight};border-radius:12px;padding:24px;margin:24px 0;border:1px solid ${COLORS.border};text-align:center;">
      <div style="font-size:40px;font-weight:800;color:${scoreColor};line-height:1;">${score}<span style="font-size:20px;color:${COLORS.textMuted};font-weight:400;">/40</span></div>
      <div style="font-size:16px;font-weight:700;color:${COLORS.navy};margin-top:8px;">${tierData.level}</div>
      <div style="display:inline-block;background:${COLORS.primaryLight};color:${COLORS.primary};font-size:11px;font-weight:600;padding:4px 12px;border-radius:20px;margin-top:8px;">${tierData.package}</div>
    </div>

    ${infoCard(`
      <p style="font-size:13px;font-weight:600;color:${COLORS.primary};margin:0 0 8px 0;text-transform:uppercase;letter-spacing:0.5px;">Nhận xét</p>
      <p style="font-size:14px;color:${COLORS.text};margin:0 0 8px 0;line-height:1.6;">${tierData.description}</p>
      <p style="font-size:14px;color:${COLORS.text};margin:0;line-height:1.6;"><strong>Insight:</strong> ${tierData.insight}</p>
    `)}

    ${p(`Bước tiếp theo là đặt lịch audit miễn phí 30 phút để mình phân tích cụ thể quy trình của bạn.`)}

    ${ctaButton(utm("/audit", "quiz", 1), "Đặt Lịch Audit Miễn Phí &rarr;")}
  `;

  return {
    subject,
    html: emailWrapper(
      bodyHtml,
      `Điểm ${score}/40 — ${tierData.level}. Xem insight và gói phù hợp cho doanh nghiệp bạn.`,
      email
    ),
  };
}

// ── Quiz Email 2 — Day 3: Case Study ─────────────────────────────────────────

export function quizEmail2(params: {
  email: string;
  name?: string;
  tier: QuizTier;
}): EmailResult {
  const { email, name, tier } = params;
  const tierData = TIER_DATA[tier];
  const csSlug = tierData.caseStudySlug;

  const subject = "Doanh nghiệp như bạn đã tiết kiệm được bao nhiêu?";

  const bodyHtml = `
    ${greeting(name)}
    ${p(`3 ngày trước bạn đã làm quiz của AutoFlow và đạt mức <strong>"${tierData.level}"</strong>.`)}
    ${p(`Hôm nay mình muốn chia sẻ một case study thực tế từ doanh nghiệp có profile tương tự bạn:`)}

    ${caseStudyBlock(csSlug)}

    ${p(`Doanh nghiệp của bạn hoàn toàn có thể đạt kết quả tương tự — thậm chí tốt hơn nếu triển khai đúng cách.`)}

    ${ctaButton(utm(`/ket-qua/${csSlug}`, "quiz", 2), "Xem Case Study Chi Tiết &rarr;")}

    ${secondaryCta(utm("/audit", "quiz", 2, "nurture_cta2"), "đặt lịch audit miễn phí")}
  `;

  return {
    subject,
    html: emailWrapper(
      bodyHtml,
      `Case study thực tế: xem doanh nghiệp tương tự bạn đã tiết kiệm bao nhiêu nhờ automation.`,
      email
    ),
  };
}

// ── Quiz Email 3 — Day 7: Soft CTA ───────────────────────────────────────────

const TIER_URGENCY = {
  starter:
    "Lúc này là thời điểm tốt nhất để bắt đầu, trước khi quy mô lớn hơn và chi phí thay đổi cao hơn.",
  growth:
    "Mỗi tuần không có automation là thêm một tuần team bạn làm việc dư thừa. Với mức Growth của bạn, ROI rõ ràng trong 5-7 tháng.",
  scale:
    "Với điểm Scale của bạn, mỗi ngày chậm triển khai là tiền thực sự đang mất — chi phí nhân sự, lead bị bỏ sót, sai sót nhập liệu.",
} as const;

export function quizEmail3(params: {
  email: string;
  name?: string;
  tier: QuizTier;
}): EmailResult {
  const { email, name, tier } = params;
  const tierData = TIER_DATA[tier];
  const urgency = TIER_URGENCY[tier];

  const subject = "Một tuần rồi — bạn đã bắt đầu chưa?";

  const bodyHtml = `
    ${greeting(name)}
    ${p(`Một tuần trước bạn làm quiz và đạt <strong>"${tierData.level}"</strong>. Mình không muốn thúc ép — nhưng muốn hỏi thêm: bạn đã có cơ hội suy nghĩ về tự động hóa chưa?`)}

    ${infoCard(`<p style="font-size:14px;color:${COLORS.text};margin:0;line-height:1.6;">${urgency}</p>`, "#D97706")}

    ${p(`Nếu bạn muốn nói chuyện — không có cam kết gì — mình sẵn sàng dành 30 phút audit miễn phí để phân tích cụ thể quy trình của bạn.`)}
    ${p(`Không phải sales call. Mình sẽ chỉ lắng nghe và đưa ra nhận xét thực tế — dù bạn có chọn AutoFlow hay không.`)}

    ${ctaButton(utm("/audit", "quiz", 3), "Đặt Lịch 30 Phút Miễn Phí &rarr;")}
  `;

  return {
    subject,
    html: emailWrapper(
      bodyHtml,
      `${urgency.slice(0, 80)}...`,
      email
    ),
  };
}

// ── Quiz Email 4 — Day 14: ROI Calculator ─────────────────────────────────────

export function quizEmail4(params: {
  email: string;
  name?: string;
  tier: QuizTier;
}): EmailResult {
  const { email, name, tier } = params;
  const tierData = TIER_DATA[tier];

  const subject = "Bạn đang mất bao nhiêu tiền mỗi tháng cho việc thủ công?";

  const roiExamples = {
    starter: {
      hours: "1-2 giờ/ngày",
      monthlyCost: "~5-8 triệu/tháng",
      example: "Ví dụ: 1 nhân viên dành 2 giờ/ngày nhập lead từ Facebook vào Sheet = 44 giờ/tháng x 50k/giờ = 2.2 triệu. Cộng thêm lead bị miss ngoài giờ, chi phí thực tế cao hơn nhiều.",
    },
    growth: {
      hours: "3-5 giờ/ngày",
      monthlyCost: "~15-25 triệu/tháng",
      example: "Ví dụ: 2 người nhập đơn 5 giờ/ngày + 1 người gom báo cáo 3 giờ/tuần + lead miss do follow-up chậm = 15-25 triệu/tháng chi phí ẩn.",
    },
    scale: {
      hours: "5+ giờ/ngày",
      monthlyCost: "~30-50 triệu/tháng",
      example: "Ví dụ: 3 người nhập liệu + 1 người báo cáo + sai sót tồn kho gây hủy đơn + lead rơi từ 5 kênh = 30-50 triệu/tháng — chưa tính thiệt hại uy tín.",
    },
  } as const;

  const roi = roiExamples[tier];

  const bodyHtml = `
    ${greeting(name)}
    ${p(`2 tuần trước bạn đạt <strong>"${tierData.level}"</strong> trong quiz của AutoFlow. Hôm nay mình muốn giúp bạn tính một con số cụ thể.`)}

    <div style="background:${COLORS.dangerBg};border-radius:12px;padding:24px;margin:24px 0;border:1px solid ${COLORS.dangerBorder};">
      <div style="display:inline-block;background:${COLORS.dangerBg};color:${COLORS.danger};font-size:11px;font-weight:600;padding:4px 10px;border-radius:6px;text-transform:uppercase;letter-spacing:0.5px;border:1px solid ${COLORS.dangerBorder};">Chi phí ẩn mỗi tháng</div>

      <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-top:16px;">
        <tr>
          ${statHighlight("&#9201;", roi.hours, "thời gian mất")}
          ${statHighlight("&#128176;", roi.monthlyCost, "chi phí ẩn")}
        </tr>
      </table>

      <p style="font-size:13px;color:${COLORS.textMuted};margin:12px 0 0 0;line-height:1.6;border-top:1px solid ${COLORS.dangerBorder};padding-top:12px;">${roi.example}</p>
    </div>

    ${p(`Mình có thể giúp bạn tính ROI chính xác cho doanh nghiệp bạn trong buổi audit 30 phút — hoàn toàn miễn phí, không cam kết.`)}

    ${ctaButton(utm("/audit", "quiz", 4), "Tính ROI Cho Doanh Nghiệp Tôi &rarr;")}
  `;

  return {
    subject,
    html: emailWrapper(
      bodyHtml,
      `Doanh nghiệp bạn đang mất ${roi.monthlyCost} cho công việc thủ công. Xem cách tính chi tiết.`,
      email
    ),
  };
}

// ── Quiz Email 5 — Day 21: Final + social proof ──────────────────────────────

export function quizEmail5(params: {
  email: string;
  name?: string;
  tier: QuizTier;
}): EmailResult {
  const { email, name, tier } = params;
  // Pick a different case study than email 2
  const altSlug = tier === "growth" ? "fnb" : tier === "scale" ? "e-commerce" : "fnb";

  const subject = "Lời mời cuối — audit miễn phí vẫn dành cho bạn";

  const bodyHtml = `
    ${greeting(name)}
    ${p(`Đây là email cuối cùng trong chuỗi email từ AutoFlow. Mình không muốn spam — chỉ muốn để lại một lời mời.`)}

    ${p(`3 tuần trước bạn quan tâm đến tự động hóa quy trình. Nếu bạn vẫn đang cân nhắc, đây là feedback từ một khách hàng thực tế:`)}

    ${testimonialBlock(altSlug)}

    ${p(`Lời mời audit miễn phí 30 phút vẫn mở — bất cứ khi nào bạn sẵn sàng. Không deadline, không áp lực.`)}

    ${ctaButton(utm("/audit", "quiz", 5), "Đặt Lịch Khi Bạn Sẵn Sàng &rarr;")}

    ${secondaryCta(utm("/ket-qua", "quiz", 5, "nurture_results"), "khám phá tất cả case studies")}
  `;

  return {
    subject,
    html: emailWrapper(
      bodyHtml,
      `Email cuối cùng — lời mời audit miễn phí vẫn dành cho bạn. Không deadline, không áp lực.`,
      email
    ),
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// PDF SEQUENCE (5 emails)
// ═══════════════════════════════════════════════════════════════════════════════

// ── PDF Email 1 — Day 0: Quick wins from the PDF ──────────────────────────────

export function pdfEmail1(params: { email: string; name?: string }): EmailResult {
  const { email, name } = params;

  const subject = "3 quick wins từ tài liệu bạn vừa tải";

  const bodyHtml = `
    ${greeting(name)}
    ${p(`Cảm ơn bạn đã tải tài liệu "10 Quy Trình SME Nên Tự Động Hóa Ngay". Mình hy vọng bạn đã có cơ hội xem qua.`)}
    ${p(`Để giúp bạn bắt đầu nhanh hơn, đây là 3 quy trình nhiều khách hàng thường triển khai đầu tiên vì ROI rõ nhất:`)}

    <div style="background:${COLORS.bgLight};border-radius:12px;margin:24px 0;border:1px solid ${COLORS.border};overflow:hidden;">
      <div style="padding:16px 20px;border-bottom:1px solid ${COLORS.border};">
        <table role="presentation" cellpadding="0" cellspacing="0"><tr>
          <td style="width:28px;height:28px;background:${COLORS.primaryLight};border-radius:50%;text-align:center;vertical-align:middle;">
            <span style="color:${COLORS.primary};font-size:13px;font-weight:700;line-height:28px;">1</span>
          </td>
          <td style="padding-left:12px;">
            <p style="font-size:14px;color:${COLORS.text};margin:0;line-height:1.5;"><strong>Lead capture</strong> từ Facebook/Zalo &rarr; Google Sheet</p>
            <p style="font-size:12px;color:${COLORS.success};margin:2px 0 0 0;">Tiết kiệm 30-60 phút/ngày</p>
          </td>
        </tr></table>
      </div>
      <div style="padding:16px 20px;border-bottom:1px solid ${COLORS.border};">
        <table role="presentation" cellpadding="0" cellspacing="0"><tr>
          <td style="width:28px;height:28px;background:${COLORS.primaryLight};border-radius:50%;text-align:center;vertical-align:middle;">
            <span style="color:${COLORS.primary};font-size:13px;font-weight:700;line-height:28px;">2</span>
          </td>
          <td style="padding-left:12px;">
            <p style="font-size:14px;color:${COLORS.text};margin:0;line-height:1.5;"><strong>Tự động gửi báo giá</strong> khi khách hỏi</p>
            <p style="font-size:12px;color:${COLORS.success};margin:2px 0 0 0;">Phản hồi trong 2 phút, không cần nhân viên trực</p>
          </td>
        </tr></table>
      </div>
      <div style="padding:16px 20px;">
        <table role="presentation" cellpadding="0" cellspacing="0"><tr>
          <td style="width:28px;height:28px;background:${COLORS.primaryLight};border-radius:50%;text-align:center;vertical-align:middle;">
            <span style="color:${COLORS.primary};font-size:13px;font-weight:700;line-height:28px;">3</span>
          </td>
          <td style="padding-left:12px;">
            <p style="font-size:14px;color:${COLORS.text};margin:0;line-height:1.5;"><strong>Báo cáo doanh thu</strong> cuối ngày gửi Zalo</p>
            <p style="font-size:12px;color:${COLORS.success};margin:2px 0 0 0;">Tự động, không cần ai làm thủ công</p>
          </td>
        </tr></table>
      </div>
    </div>

    ${p(`Trong tài liệu còn 7 quy trình khác — nhưng 3 cái trên là điểm khởi đầu tốt nhất cho hầu hết SME.`)}
    ${p(`Nếu bạn muốn mình xem qua và đề xuất quy trình nào phù hợp nhất với doanh nghiệp của bạn — đặt lịch audit miễn phí 30 phút nhé.`)}

    ${ctaButton(utm("/audit", "pdf", 1), "Đặt Lịch Audit Miễn Phí &rarr;")}
  `;

  return {
    subject,
    html: emailWrapper(
      bodyHtml,
      `3 quy trình ROI cao nhất từ tài liệu bạn vừa tải — bắt đầu từ đâu?`,
      email
    ),
  };
}

// ── PDF Email 2 — Day 3: Cross-sell to quiz ───────────────────────────────────

export function pdfEmail2(params: { email: string; name?: string }): EmailResult {
  const { email, name } = params;

  const subject = "Doanh nghiệp bạn cần tự động hóa gấp không?";

  const bodyHtml = `
    ${greeting(name)}
    ${p(`3 ngày trước bạn đã tải tài liệu về 10 quy trình tự động hóa của AutoFlow.`)}
    ${p(`Nhiều người đọc xong thường tự hỏi: "Liệu doanh nghiệp mình có thực sự cần tự động hóa không? Và nên bắt đầu từ đâu?"`)}
    ${p(`Mình đã xây một bài quiz 10 câu hỏi — chỉ mất 3 phút — để đánh giá chính xác:`)}

    <div style="background:${COLORS.bgLight};border-radius:12px;padding:20px 24px;margin:24px 0;border:1px solid ${COLORS.border};">
      <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td style="padding:6px 0;"><span style="color:${COLORS.success};font-weight:600;">&#10003;</span>&nbsp;&nbsp;<span style="font-size:14px;color:${COLORS.text};">Mức độ sẵn sàng tự động hóa (điểm 10-40)</span></td>
        </tr>
        <tr>
          <td style="padding:6px 0;"><span style="color:${COLORS.success};font-weight:600;">&#10003;</span>&nbsp;&nbsp;<span style="font-size:14px;color:${COLORS.text};">Quy trình nào nên ưu tiên trước</span></td>
        </tr>
        <tr>
          <td style="padding:6px 0;"><span style="color:${COLORS.success};font-weight:600;">&#10003;</span>&nbsp;&nbsp;<span style="font-size:14px;color:${COLORS.text};">Gói giải pháp phù hợp với quy mô</span></td>
        </tr>
      </table>
    </div>

    ${infoCard(`<p style="font-size:14px;color:${COLORS.text};margin:0;line-height:1.6;">Kết quả cá nhân hóa theo quy mô và ngành của doanh nghiệp bạn — không phải câu trả lời chung chung.</p>`)}

    ${ctaButton(utm("/quiz", "pdf", 2), "Làm Quiz Đánh Giá Miễn Phí &rarr;")}
  `;

  return {
    subject,
    html: emailWrapper(
      bodyHtml,
      `Quiz 3 phút: đánh giá mức độ sẵn sàng tự động hóa và biết nên bắt đầu từ đâu.`,
      email
    ),
  };
}

// ── PDF Email 3 — Day 7: Case study + CTA audit ─────────────────────────────

// Resource-to-case-study mapping for PDF personalization
const RESOURCE_CASE_STUDY: Record<string, [string, string]> = {
  // [primary case study, secondary case study]
  "checklist-ecommerce": ["e-commerce", "bat-dong-san"],
  "checklist-bat-dong-san": ["bat-dong-san", "e-commerce"],
  "checklist-giao-duc": ["giao-duc", "e-commerce"],
  "checklist-fnb": ["fnb", "giao-duc"],
};
const DEFAULT_CASE_STUDIES: [string, string] = ["e-commerce", "bat-dong-san"];

function pdfCaseStudies(resource?: string): [string, string] {
  if (resource && resource in RESOURCE_CASE_STUDY) {
    return RESOURCE_CASE_STUDY[resource];
  }
  return DEFAULT_CASE_STUDIES;
}

export function pdfEmail3(params: { email: string; name?: string; resource?: string }): EmailResult {
  const { email, name, resource } = params;
  const [primary] = pdfCaseStudies(resource);
  const cs = caseStudies.find((c) => c.slug === primary);
  const csName = cs?.company ?? "Shop thời trang";

  const subject = `${csName} — xem kết quả automation thực tế`;

  const bodyHtml = `
    ${greeting(name)}
    ${p(`Một tuần trước bạn đã tải tài liệu về tự động hóa quy trình. Hôm nay mình muốn chia sẻ một case study để bạn thấy rõ hơn automation hoạt động như thế nào trong thực tế.`)}

    ${caseStudyBlock(primary)}

    ${testimonialBlock(primary)}

    ${p(`Nếu bạn muốn có thêm góc nhìn từ mình — 30 phút audit miễn phí, không cam kết, chỉ là cuộc trao đổi thực chất.`)}

    ${ctaButton(utm("/audit", "pdf", 3), "Đặt Lịch Tư Vấn Miễn Phí &rarr;")}
  `;

  return {
    subject,
    html: emailWrapper(
      bodyHtml,
      `Case study thực tế: xem doanh nghiệp tương tự đã đạt kết quả gì nhờ tự động hóa quy trình.`,
      email
    ),
  };
}

// ── PDF Email 4 — Day 14: Another industry case study ─────────────────────────

export function pdfEmail4(params: { email: string; name?: string; resource?: string }): EmailResult {
  const { email, name, resource } = params;
  const [, secondary] = pdfCaseStudies(resource);
  const cs = caseStudies.find((c) => c.slug === secondary);
  const csName = cs?.company ?? "Agency BĐS";

  const subject = `${csName} — một ngành khác, cùng kết quả`;

  const bodyHtml = `
    ${greeting(name)}
    ${p(`Lần trước mình chia sẻ một case study. Hôm nay là một ngành hoàn toàn khác — để bạn thấy automation áp dụng đa dạng thế nào.`)}

    ${caseStudyBlock(secondary)}

    ${testimonialBlock(secondary)}

    ${p(`Dù bạn ở ngành nào, vấn đề cốt lõi thường giống nhau: nhập liệu thủ công, lead rơi, báo cáo chậm. Automation giải quyết tất cả.`)}

    ${ctaButton(utm("/ket-qua", "pdf", 4), "Xem Tất Cả Case Studies &rarr;")}

    ${secondaryCta(utm("/audit", "pdf", 4, "nurture_cta2"), "đặt lịch audit miễn phí")}
  `;

  return {
    subject,
    html: emailWrapper(
      bodyHtml,
      `Case study ngành khác: xem automation hoạt động ở nhiều lĩnh vực.`,
      email
    ),
  };
}

// ── PDF Email 5 — Day 21: Final farewell ──────────────────────────────────────

export function pdfEmail5(params: { email: string; name?: string }): EmailResult {
  const { email, name } = params;

  const subject = "Lời mời cuối — mình vẫn ở đây khi bạn cần";

  const bodyHtml = `
    ${greeting(name)}
    ${p(`Đây là email cuối cùng trong chuỗi từ AutoFlow. Mình hoàn toàn hiểu nếu bây giờ chưa phải lúc — mỗi doanh nghiệp có timeline riêng.`)}
    ${p(`Nếu sau này bạn cần trao đổi về tự động hóa — dù là tháng tới hay năm sau — lời mời audit miễn phí vẫn mở. Chỉ cần nhắn mình.`)}

    <div style="background:${COLORS.bgLight};border-radius:12px;padding:20px 24px;margin:24px 0;border:1px solid ${COLORS.border};">
      <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
        <tr><td style="padding:8px 0;">
          <span style="font-size:14px;">&#9993;</span>&nbsp;&nbsp;<span style="font-size:14px;color:${COLORS.text};">Reply email này bất cứ lúc nào</span>
        </td></tr>
        <tr><td style="padding:8px 0;border-top:1px solid ${COLORS.border};">
          <span style="font-size:14px;">&#127760;</span>&nbsp;&nbsp;<span style="font-size:14px;color:${COLORS.text};"><a href="${SITE_URL}" style="color:${COLORS.accent};text-decoration:none;font-weight:500;">autoflowvn.net</a> — xem case studies, bảng giá, tài liệu</span>
        </td></tr>
        <tr><td style="padding:8px 0;border-top:1px solid ${COLORS.border};">
          <span style="font-size:14px;">&#128203;</span>&nbsp;&nbsp;<span style="font-size:14px;color:${COLORS.text};"><a href="${utm("/audit", "pdf", 5)}" style="color:${COLORS.accent};text-decoration:none;font-weight:500;">Đặt lịch audit miễn phí</a> — 30 phút, không cam kết</span>
        </td></tr>
      </table>
    </div>

    ${p(`Chúc doanh nghiệp bạn phát triển tốt!`)}
  `;

  return {
    subject,
    html: emailWrapper(
      bodyHtml,
      `Email cuối cùng. Lời mời audit miễn phí vẫn mở — bất cứ khi nào bạn sẵn sàng.`,
      email
    ),
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// AUDIT SEQUENCE (5 emails)
// ═══════════════════════════════════════════════════════════════════════════════

// ── Audit Email 1 — Day 0: Confirmation + preparation checklist ──────────────

export function auditEmail1(params: { email: string; name?: string }): EmailResult {
  const { email, name } = params;

  const subject = "Xác nhận đặt lịch audit — AutoFlow";

  const bodyHtml = `
    ${greeting(name)}
    ${p(`Mình đã nhận được yêu cầu audit của bạn. Mình sẽ liên hệ trong vòng 24 giờ để xác nhận lịch cụ thể.`)}
    ${p(`Trong khi chờ, bạn có thể chuẩn bị trước một số thông tin để buổi audit hiệu quả hơn:`)}

    <div style="background:${COLORS.primaryLight};border-radius:12px;padding:24px;margin:24px 0;border:1px solid #BFDBFE;">
      <div style="display:inline-block;background:${COLORS.white};color:${COLORS.primary};font-size:11px;font-weight:600;padding:4px 10px;border-radius:6px;text-transform:uppercase;letter-spacing:0.5px;">Checklist Chuẩn Bị</div>
      <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-top:16px;">
        <tr><td style="padding:8px 0;border-bottom:1px solid #BFDBFE;">
          <span style="color:${COLORS.primary};font-weight:600;">&#9745;</span>&nbsp;&nbsp;<span style="font-size:14px;color:${COLORS.text};">Liệt kê 3-5 quy trình thủ công tốn thời gian nhất hiện tại</span>
        </td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #BFDBFE;">
          <span style="color:${COLORS.primary};font-weight:600;">&#9745;</span>&nbsp;&nbsp;<span style="font-size:14px;color:${COLORS.text};">Ước tính số giờ/ngày team bạn dành cho những việc lặp lại</span>
        </td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #BFDBFE;">
          <span style="color:${COLORS.primary};font-weight:600;">&#9745;</span>&nbsp;&nbsp;<span style="font-size:14px;color:${COLORS.text};">Các công cụ đang dùng (phần mềm kế toán, CRM, kênh bán hàng...)</span>
        </td></tr>
        <tr><td style="padding:8px 0;">
          <span style="color:${COLORS.primary};font-weight:600;">&#9745;</span>&nbsp;&nbsp;<span style="font-size:14px;color:${COLORS.text};">Ngân sách dự kiến cho giải pháp tự động hóa (nếu có)</span>
        </td></tr>
      </table>
    </div>

    ${p(`Chuẩn bị sẵn 4 điểm trên sẽ giúp mình đưa ra gợi ý cụ thể và thực tế hơn trong 30 phút.`)}
    ${p(`Nếu bạn muốn thay đổi hoặc cần gấp hơn, reply email này trực tiếp.`)}
  `;

  return {
    subject,
    html: emailWrapper(
      bodyHtml,
      `Đã nhận yêu cầu audit! Chuẩn bị 4 điểm này để buổi audit hiệu quả nhất.`,
      email
    ),
  };
}

// ── Audit Email 2 — Day 3: Value-add content ─────────────────────────────────

export function auditEmail2(params: { email: string; name?: string }): EmailResult {
  const { email, name } = params;

  const subject = "5 dấu hiệu bạn đang tốn tiền vào việc thủ công";

  const bodyHtml = `
    ${greeting(name)}
    ${p(`3 ngày trước bạn đã đặt lịch audit với AutoFlow — mình muốn chia sẻ một bài viết ngắn trong khi chờ.`)}
    ${pBold(`5 dấu hiệu phổ biến nhất doanh nghiệp đang "đốt tiền" cho công việc có thể tự động hóa:`)}

    <div style="background:${COLORS.bgLight};border-radius:12px;margin:24px 0;border:1px solid ${COLORS.border};overflow:hidden;">
      <div style="padding:14px 20px;border-bottom:1px solid ${COLORS.border};">
        <table role="presentation" cellpadding="0" cellspacing="0"><tr>
          <td style="width:24px;height:24px;background:${COLORS.dangerBg};border-radius:50%;text-align:center;vertical-align:middle;">
            <span style="color:${COLORS.danger};font-size:12px;font-weight:700;line-height:24px;">1</span>
          </td>
          <td style="padding-left:12px;"><p style="font-size:14px;color:${COLORS.text};margin:0;line-height:1.5;">Nhân viên mất hơn 1 giờ/ngày copy-paste dữ liệu giữa các hệ thống</p></td>
        </tr></table>
      </div>
      <div style="padding:14px 20px;border-bottom:1px solid ${COLORS.border};">
        <table role="presentation" cellpadding="0" cellspacing="0"><tr>
          <td style="width:24px;height:24px;background:${COLORS.dangerBg};border-radius:50%;text-align:center;vertical-align:middle;">
            <span style="color:${COLORS.danger};font-size:12px;font-weight:700;line-height:24px;">2</span>
          </td>
          <td style="padding-left:12px;"><p style="font-size:14px;color:${COLORS.text};margin:0;line-height:1.5;">Báo cáo cuối tháng mất 1-3 ngày để tổng hợp từ nhiều nguồn</p></td>
        </tr></table>
      </div>
      <div style="padding:14px 20px;border-bottom:1px solid ${COLORS.border};">
        <table role="presentation" cellpadding="0" cellspacing="0"><tr>
          <td style="width:24px;height:24px;background:${COLORS.dangerBg};border-radius:50%;text-align:center;vertical-align:middle;">
            <span style="color:${COLORS.danger};font-size:12px;font-weight:700;line-height:24px;">3</span>
          </td>
          <td style="padding-left:12px;"><p style="font-size:14px;color:${COLORS.text};margin:0;line-height:1.5;">Khách liên hệ ngoài giờ không được trả lời trong vòng 1 giờ</p></td>
        </tr></table>
      </div>
      <div style="padding:14px 20px;border-bottom:1px solid ${COLORS.border};">
        <table role="presentation" cellpadding="0" cellspacing="0"><tr>
          <td style="width:24px;height:24px;background:${COLORS.dangerBg};border-radius:50%;text-align:center;vertical-align:middle;">
            <span style="color:${COLORS.danger};font-size:12px;font-weight:700;line-height:24px;">4</span>
          </td>
          <td style="padding-left:12px;"><p style="font-size:14px;color:${COLORS.text};margin:0;line-height:1.5;">Đơn hàng từ nhiều kênh phải nhập lại thủ công vào một chỗ</p></td>
        </tr></table>
      </div>
      <div style="padding:14px 20px;">
        <table role="presentation" cellpadding="0" cellspacing="0"><tr>
          <td style="width:24px;height:24px;background:${COLORS.dangerBg};border-radius:50%;text-align:center;vertical-align:middle;">
            <span style="color:${COLORS.danger};font-size:12px;font-weight:700;line-height:24px;">5</span>
          </td>
          <td style="padding-left:12px;"><p style="font-size:14px;color:${COLORS.text};margin:0;line-height:1.5;">Không biết chính xác số liệu doanh thu hôm nay mà không mở file Excel</p></td>
        </tr></table>
      </div>
    </div>

    ${p(`Nếu doanh nghiệp bạn có 2+ dấu hiệu trên — automation sẽ có ROI rõ ràng.`)}
    ${p(`Mình sẽ đi vào chi tiết hơn trong buổi audit. Nếu chưa xác nhận lịch, bạn có thể đặt lại ở đây.`)}

    ${ctaButton(utm("/audit", "audit", 2), "Xác Nhận Lịch Audit &rarr;")}
  `;

  return {
    subject,
    html: emailWrapper(
      bodyHtml,
      `5 dấu hiệu doanh nghiệp đang đốt tiền cho việc thủ công. Bạn có bao nhiêu?`,
      email
    ),
  };
}

// ── Audit Email 3 — Day 7: Case study proof ──────────────────────────────────

export function auditEmail3(params: { email: string; name?: string }): EmailResult {
  const { email, name } = params;

  const subject = "Chuỗi trung tâm tiếng Anh giảm 80% miss lịch";

  const bodyHtml = `
    ${greeting(name)}
    ${p(`Một tuần trước bạn đã liên hệ với AutoFlow. Mình muốn chia sẻ một case study để bạn hình dung rõ hơn kết quả thực tế.`)}

    ${caseStudyBlock("giao-duc")}

    ${testimonialBlock("giao-duc")}

    ${p(`Trong buổi audit, mình sẽ phân tích cụ thể quy trình của bạn và chỉ ra đâu có thể đạt kết quả tương tự.`)}

    ${ctaButton(utm("/audit", "audit", 3), "Đặt Lịch Audit &rarr;")}

    ${secondaryCta(utm("/ket-qua", "audit", 3, "nurture_results"), "xem case studies các ngành khác")}
  `;

  return {
    subject,
    html: emailWrapper(
      bodyHtml,
      `Case study: chuỗi 8 chi nhánh giảm 80% miss lịch, tiết kiệm 1 nhân sự full-time nhờ automation.`,
      email
    ),
  };
}

// ── Audit Email 4 — Day 14: Cross-sell quiz ───────────────────────────────────

export function auditEmail4(params: { email: string; name?: string }): EmailResult {
  const { email, name } = params;

  const subject = "Chưa sẵn sàng audit? Thử quiz 3 phút trước";

  const bodyHtml = `
    ${greeting(name)}
    ${p(`2 tuần trước bạn quan tâm đến audit miễn phí. Mình hiểu nếu lịch bạn chưa cho phép.`)}
    ${p(`Nếu bạn muốn tìm hiểu thêm trước khi nói chuyện, mình có quiz đánh giá mức độ sẵn sàng tự động hóa — chỉ 3 phút, hoàn toàn miễn phí:`)}

    <div style="background:${COLORS.bgLight};border-radius:12px;padding:20px 24px;margin:24px 0;border:1px solid ${COLORS.border};">
      <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
        <tr><td style="padding:6px 0;">
          <span style="color:${COLORS.success};font-weight:600;">&#10003;</span>&nbsp;&nbsp;<span style="font-size:14px;color:${COLORS.text};">Đánh giá mức độ sẵn sàng (điểm 10-40)</span>
        </td></tr>
        <tr><td style="padding:6px 0;">
          <span style="color:${COLORS.success};font-weight:600;">&#10003;</span>&nbsp;&nbsp;<span style="font-size:14px;color:${COLORS.text};">Xác định quy trình nên ưu tiên</span>
        </td></tr>
        <tr><td style="padding:6px 0;">
          <span style="color:${COLORS.success};font-weight:600;">&#10003;</span>&nbsp;&nbsp;<span style="font-size:14px;color:${COLORS.text};">Gợi ý gói phù hợp với quy mô</span>
        </td></tr>
      </table>
    </div>

    ${ctaButton(utm("/quiz", "audit", 4), "Làm Quiz 3 Phút &rarr;")}

    ${secondaryCta(utm("/audit", "audit", 4, "nurture_cta2"), "đặt lịch audit ngay")}
  `;

  return {
    subject,
    html: emailWrapper(
      bodyHtml,
      `Quiz 3 phút: đánh giá mức độ sẵn sàng tự động hóa trước khi nói chuyện.`,
      email
    ),
  };
}

// ── Audit Email 5 — Day 21: Final farewell ────────────────────────────────────

export function auditEmail5(params: { email: string; name?: string }): EmailResult {
  const { email, name } = params;

  const subject = "Mình vẫn ở đây nếu bạn cần — AutoFlow";

  const bodyHtml = `
    ${greeting(name)}
    ${p(`Đây là email cuối cùng trong chuỗi từ AutoFlow. Mình hoàn toàn hiểu nếu bây giờ chưa phải lúc.`)}
    ${p(`Khi bạn sẵn sàng nói chuyện — dù là tuần tới hay tháng sau — mình vẫn ở đây. Lời mời audit miễn phí không có hạn.`)}

    <div style="background:${COLORS.bgLight};border-radius:12px;padding:20px 24px;margin:24px 0;border:1px solid ${COLORS.border};">
      <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
        <tr><td style="padding:8px 0;">
          <span style="font-size:14px;">&#9993;</span>&nbsp;&nbsp;<span style="font-size:14px;color:${COLORS.text};">Reply email này bất cứ lúc nào</span>
        </td></tr>
        <tr><td style="padding:8px 0;border-top:1px solid ${COLORS.border};">
          <span style="font-size:14px;">&#127760;</span>&nbsp;&nbsp;<span style="font-size:14px;color:${COLORS.text};"><a href="${SITE_URL}" style="color:${COLORS.accent};text-decoration:none;font-weight:500;">autoflowvn.net</a> — xem case studies, bảng giá, tài liệu</span>
        </td></tr>
        <tr><td style="padding:8px 0;border-top:1px solid ${COLORS.border};">
          <span style="font-size:14px;">&#128203;</span>&nbsp;&nbsp;<span style="font-size:14px;color:${COLORS.text};"><a href="${utm("/audit", "audit", 5)}" style="color:${COLORS.accent};text-decoration:none;font-weight:500;">Đặt lịch audit miễn phí</a> — 30 phút, không cam kết</span>
        </td></tr>
      </table>
    </div>

    ${p(`Chúc doanh nghiệp bạn phát triển tốt!`)}
  `;

  return {
    subject,
    html: emailWrapper(
      bodyHtml,
      `Email cuối cùng. Lời mời audit miễn phí không có hạn — mình vẫn ở đây khi bạn cần.`,
      email
    ),
  };
}
