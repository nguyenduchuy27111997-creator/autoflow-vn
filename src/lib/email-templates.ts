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

// ── UTM helper ─────────────────────────────────────────────────────────────────

function utm(
  path: string,
  sequence: string,
  emailNum: number,
  campaign: string = "nurture"
): string {
  return `${SITE_URL}${path}?utm_source=email&utm_medium=nurture&utm_campaign=${campaign}_${sequence}&utm_content=email${emailNum}`;
}

// ── Unsubscribe link ───────────────────────────────────────────────────────────

function unsubscribeUrl(email: string): string {
  const encoded = encodeURIComponent(email);
  return `${SITE_URL}/api/unsubscribe?email=${encoded}`;
}

// ── Internal helpers ───────────────────────────────────────────────────────────

function preheader(text: string): string {
  // Hidden preheader text visible in email client previews
  return `<div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">${text}</div>`;
}

function emailWrapper(
  bodyHtml: string,
  preheaderText: string,
  recipientEmail: string
): string {
  return `
    ${preheader(preheaderText)}
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px; background: #ffffff;">
      <div style="text-align: center; margin-bottom: 32px;">
        <div style="font-size: 24px; font-weight: 800; color: #0F172A;">${SITE_NAME}</div>
        <div style="font-size: 13px; color: #94A3B8; margin-top: 4px;">Chuyên gia #1 về n8n automation tại Việt Nam</div>
      </div>

      ${bodyHtml}

      <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 28px 0;" />
      <p style="font-size: 14px; color: #475569; line-height: 1.6;">Trân trọng,<br/><strong>Huy — AutoFlow VN</strong></p>
      <p style="font-size: 12px; color: #94A3B8; text-align: center; line-height: 1.6;">${SITE_NAME} — Tự động hóa quy trình cho SME Việt Nam<br/><a href="${SITE_URL}" style="color: #0066FF; text-decoration: none;">autoflowvn.net</a> · <a href="mailto:${SUPPORT_EMAIL}" style="color: #0066FF; text-decoration: none;">${SUPPORT_EMAIL}</a></p>
      <p style="font-size: 11px; color: #CBD5E1; text-align: center; margin-top: 16px;"><a href="${unsubscribeUrl(recipientEmail)}" style="color: #CBD5E1; text-decoration: underline;">Hủy nhận email</a></p>
    </div>
  `;
}

function ctaButton(href: string, label: string): string {
  return `
    <div style="text-align: center; margin: 28px 0;">
      <a href="${href}" style="display: inline-block; background: #0066FF; color: white; font-weight: 600; font-size: 14px; padding: 14px 28px; border-radius: 10px; text-decoration: none; min-height: 44px; line-height: 1.2;">${label}</a>
    </div>
  `;
}

// ── Case study block from centralized data ─────────────────────────────────────

function caseStudyBlock(slug: string): string {
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return "";

  const beforeItems = cs.workflows
    .slice(0, 2)
    .map(
      (wf) =>
        `<p style="font-size: 14px; color: #475569; margin: 0 0 6px 0; line-height: 1.6;">• <strong>${wf.name}:</strong> ${wf.before}</p>`
    )
    .join("");

  const afterItems = cs.workflows
    .slice(0, 2)
    .map(
      (wf) =>
        `<p style="font-size: 14px; color: #475569; margin: 0 0 6px 0; line-height: 1.6;">✓ <strong>${wf.name}:</strong> ${wf.after}</p>`
    )
    .join("");

  return `
    <div style="background: #F0F7FF; border-radius: 12px; padding: 20px; margin: 24px 0; border-left: 4px solid #0066FF;">
      <p style="font-size: 13px; font-weight: 600; color: #0052CC; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 0.05em;">Case Study Thực Tế</p>
      <p style="font-size: 15px; font-weight: 600; color: #0F172A; margin: 0 0 4px 0;">${cs.company} — ${cs.employees}</p>
      <p style="font-size: 13px; color: #94A3B8; margin: 0 0 14px 0;">${cs.subtitle}</p>
      <p style="font-size: 13px; font-weight: 600; color: #DC2626; margin: 0 0 6px 0;">Trước:</p>
      ${beforeItems}
      <p style="font-size: 13px; font-weight: 600; color: #059669; margin: 12px 0 6px 0;">Sau AutoFlow:</p>
      ${afterItems}
      <div style="background: #ECFDF5; border-radius: 8px; padding: 12px; margin-top: 14px;">
        <p style="font-size: 14px; font-weight: 600; color: #059669; margin: 0;">📈 ${cs.homepageResult}</p>
      </div>
    </div>
  `;
}

// ── Testimonial block from centralized data ────────────────────────────────────

function testimonialBlock(slug: string): string {
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return "";

  return `
    <div style="background: #FAFAFA; border-radius: 12px; padding: 20px; margin: 24px 0; border-left: 4px solid #94A3B8;">
      <p style="font-size: 14px; color: #475569; font-style: italic; margin: 0 0 8px 0; line-height: 1.6;">"${cs.testimonial.quote}"</p>
      <p style="font-size: 13px; color: #94A3B8; margin: 0;">— ${cs.testimonial.name}, ${cs.testimonial.role}</p>
    </div>
  `;
}

// ═══════════════════════════════════════════════════════════════════════════════
// QUIZ SEQUENCE (5 emails)
// ═══════════════════════════════════════════════════════════════════════════════

// ── Quiz Email 1 — Day 0: Results ──────────────────────────────────────────────

export function quizEmail1(params: {
  email: string;
  name?: string;
  score: number;
  tier: QuizTier;
}): EmailResult {
  const { email, name, score, tier } = params;
  const displayName = name ? name : "bạn";

  const baseSubject = `Kết quả quiz của ${displayName} — ${score}/40`;
  const fallbackSubject = `Kết quả quiz của bạn — ${score}/40`;
  const subject =
    baseSubject.length <= 50 ? baseSubject : fallbackSubject;

  const tierData = TIER_DATA[tier];

  const bodyHtml = `
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Chào <strong>${displayName}</strong>,</p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Bạn vừa hoàn thành bài quiz đánh giá mức độ sẵn sàng tự động hóa của AutoFlow. Đây là kết quả:</p>

    <div style="background: #F0F7FF; border-radius: 12px; padding: 20px; margin: 24px 0; border-left: 4px solid #0066FF;">
      <p style="font-size: 16px; font-weight: 700; color: #0052CC; margin: 0 0 4px 0;">Điểm: ${score}/40 — ${tierData.level}</p>
      <p style="font-size: 14px; color: #475569; margin: 0 0 8px 0; line-height: 1.6;">${tierData.description}</p>
    </div>

    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 8px 0;"><strong>Insight chính cho doanh nghiệp của bạn:</strong></p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">${tierData.insight}</p>

    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;"><strong>Gói phù hợp:</strong> ${tierData.package}</p>

    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Bước tiếp theo là đặt lịch audit miễn phí 30 phút để mình phân tích cụ thể quy trình của bạn.</p>

    ${ctaButton(utm("/audit", "quiz", 1), "Đặt Lịch Audit Miễn Phí →")}
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

// ── Quiz Email 2 — Day 3: Case Study ──────────────────────────────────────────

export function quizEmail2(params: {
  email: string;
  name?: string;
  tier: QuizTier;
}): EmailResult {
  const { email, name, tier } = params;
  const displayName = name ? name : "bạn";
  const tierData = TIER_DATA[tier];
  const csSlug = tierData.caseStudySlug;

  const subject = "Doanh nghiệp như bạn đã tiết kiệm được bao nhiêu?";

  const bodyHtml = `
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Chào <strong>${displayName}</strong>,</p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">3 ngày trước bạn đã làm quiz của AutoFlow và đạt mức <strong>"${tierData.level}"</strong>.</p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Hôm nay mình muốn chia sẻ một case study thực tế từ doanh nghiệp có profile tương tự bạn:</p>

    ${caseStudyBlock(csSlug)}

    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Doanh nghiệp của bạn hoàn toàn có thể đạt kết quả tương tự — thậm chí tốt hơn nếu triển khai đúng cách.</p>

    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Xem thêm chi tiết case study này trên website:</p>

    ${ctaButton(utm(`/ket-qua/${csSlug}`, "quiz", 2), "Xem Case Study Chi Tiết →")}

    <p style="font-size: 14px; color: #64748B; text-align: center;">Hoặc <a href="${utm("/audit", "quiz", 2, "nurture_cta2")}" style="color: #0066FF; text-decoration: none;">đặt lịch audit miễn phí</a> để mình phân tích cụ thể cho doanh nghiệp bạn.</p>
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

// ── Quiz Email 3 — Day 7: Soft CTA ────────────────────────────────────────────

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
  const displayName = name ? name : "bạn";
  const tierData = TIER_DATA[tier];
  const urgency = TIER_URGENCY[tier];

  const subject = "Một tuần rồi — bạn đã bắt đầu chưa?";

  const bodyHtml = `
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Chào <strong>${displayName}</strong>,</p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Một tuần trước bạn làm quiz và đạt <strong>"${tierData.level}"</strong>. Mình không muốn thúc ép — nhưng muốn hỏi thêm: bạn đã có cơ hội suy nghĩ về tự động hóa chưa?</p>

    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">${urgency}</p>

    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Nếu bạn muốn nói chuyện — không có cam kết gì — mình sẵn sàng dành 30 phút audit miễn phí để phân tích cụ thể quy trình của bạn.</p>

    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Không phải sales call. Mình sẽ chỉ lắng nghe và đưa ra nhận xét thực tế — dù bạn có chọn AutoFlow hay không.</p>

    ${ctaButton(utm("/audit", "quiz", 3), "Đặt Lịch 30 Phút Miễn Phí →")}
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

// ── Quiz Email 4 — Day 14: ROI Calculator ──────────────────────────────────────

export function quizEmail4(params: {
  email: string;
  name?: string;
  tier: QuizTier;
}): EmailResult {
  const { email, name, tier } = params;
  const displayName = name ? name : "bạn";
  const tierData = TIER_DATA[tier];

  const subject = "Bạn đang mất bao nhiêu tiền mỗi tháng cho việc thủ công?";

  const roiExamples = {
    starter: {
      hours: "1-2 giờ/ngày",
      monthlyCost: "~5-8 triệu/tháng",
      example: "Ví dụ: 1 nhân viên dành 2 giờ/ngày nhập lead từ Facebook vào Sheet = 44 giờ/tháng × 50k/giờ = 2.2 triệu. Cộng thêm lead bị miss ngoài giờ, chi phí thực tế cao hơn nhiều.",
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
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Chào <strong>${displayName}</strong>,</p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">2 tuần trước bạn đạt <strong>"${tierData.level}"</strong> trong quiz của AutoFlow. Hôm nay mình muốn giúp bạn tính một con số cụ thể.</p>

    <div style="background: #FEF2F2; border-radius: 12px; padding: 20px; margin: 24px 0; border-left: 4px solid #DC2626;">
      <p style="font-size: 13px; font-weight: 600; color: #DC2626; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.05em;">Chi phí ẩn mỗi tháng</p>
      <p style="font-size: 14px; color: #334155; margin: 0 0 6px 0; line-height: 1.6;">⏱ Team đang mất <strong>${roi.hours}</strong> cho công việc lặp lại</p>
      <p style="font-size: 14px; color: #334155; margin: 0 0 6px 0; line-height: 1.6;">💰 Ước tính chi phí ẩn: <strong>${roi.monthlyCost}</strong></p>
      <p style="font-size: 13px; color: #64748B; margin: 8px 0 0 0; line-height: 1.6;">${roi.example}</p>
    </div>

    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Mình có thể giúp bạn tính ROI chính xác cho doanh nghiệp bạn trong buổi audit 30 phút — hoàn toàn miễn phí, không cam kết.</p>

    ${ctaButton(utm("/audit", "quiz", 4), "Tính ROI Cho Doanh Nghiệp Tôi →")}
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

// ── Quiz Email 5 — Day 21: Final + social proof ────────────────────────────────

export function quizEmail5(params: {
  email: string;
  name?: string;
  tier: QuizTier;
}): EmailResult {
  const { email, name, tier } = params;
  const displayName = name ? name : "bạn";
  const tierData = TIER_DATA[tier];
  // Pick a different case study than email 2
  const altSlug = tier === "growth" ? "fnb" : tier === "scale" ? "e-commerce" : "fnb";

  const subject = "Lời mời cuối — audit miễn phí vẫn dành cho bạn";

  const bodyHtml = `
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Chào <strong>${displayName}</strong>,</p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Đây là email cuối cùng trong chuỗi email từ AutoFlow. Mình không muốn spam — chỉ muốn để lại một lời mời.</p>

    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">3 tuần trước bạn quan tâm đến tự động hóa quy trình. Nếu bạn vẫn đang cân nhắc, đây là feedback từ một khách hàng thực tế:</p>

    ${testimonialBlock(altSlug)}

    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Lời mời audit miễn phí 30 phút vẫn mở — bất cứ khi nào bạn sẵn sàng. Không deadline, không áp lực.</p>

    ${ctaButton(utm("/audit", "quiz", 5), "Đặt Lịch Khi Bạn Sẵn Sàng →")}

    <p style="font-size: 14px; color: #64748B; text-align: center;">Hoặc khám phá <a href="${utm("/ket-qua", "quiz", 5, "nurture_results")}" style="color: #0066FF; text-decoration: none;">tất cả case studies</a> trên website.</p>
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

// ── PDF Email 1 — Day 0: Quick wins from the PDF ───────────────────────────────

export function pdfEmail1(params: { email: string; name?: string }): EmailResult {
  const { email, name } = params;
  const displayName = name ? name : "bạn";

  const subject = "3 quick wins từ tài liệu bạn vừa tải";

  const bodyHtml = `
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Chào <strong>${displayName}</strong>,</p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Cảm ơn bạn đã tải tài liệu "10 Quy Trình SME Nên Tự Động Hóa Ngay". Mình hy vọng bạn đã có cơ hội xem qua.</p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Để giúp bạn bắt đầu nhanh hơn, đây là 3 quy trình nhiều khách hàng thường triển khai đầu tiên vì ROI rõ nhất:</p>

    <div style="background: #F0F7FF; border-radius: 12px; padding: 20px; margin: 24px 0; border-left: 4px solid #0066FF;">
      <p style="font-size: 14px; color: #334155; margin: 0 0 8px 0; line-height: 1.6;">1. Tự động hóa lead capture từ Facebook/Zalo → Google Sheet (tiết kiệm 30-60 phút/ngày)</p>
      <p style="font-size: 14px; color: #334155; margin: 0 0 8px 0; line-height: 1.6;">2. Tự động gửi báo giá/thông tin sản phẩm khi khách hỏi (phản hồi trong 2 phút, không cần nhân viên trực)</p>
      <p style="font-size: 14px; color: #334155; margin: 0 0 8px 0; line-height: 1.6;">3. Tự động tổng hợp báo cáo doanh thu cuối ngày gửi Zalo (không cần ai làm thủ công)</p>
    </div>

    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Trong tài liệu còn 7 quy trình khác — nhưng 3 cái trên là điểm khởi đầu tốt nhất cho hầu hết SME.</p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Nếu bạn muốn mình xem qua và đề xuất quy trình nào phù hợp nhất với doanh nghiệp của bạn — đặt lịch audit miễn phí 30 phút nhé.</p>

    ${ctaButton(utm("/audit", "pdf", 1), "Đặt Lịch Audit Miễn Phí →")}
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

// ── PDF Email 2 — Day 3: Cross-sell to quiz ────────────────────────────────────

export function pdfEmail2(params: { email: string; name?: string }): EmailResult {
  const { email, name } = params;
  const displayName = name ? name : "bạn";

  const subject = "Doanh nghiệp bạn cần tự động hóa gấp không?";

  const bodyHtml = `
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Chào <strong>${displayName}</strong>,</p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">3 ngày trước bạn đã tải tài liệu về 10 quy trình tự động hóa của AutoFlow.</p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Nhiều người đọc xong thường tự hỏi: "Liệu doanh nghiệp mình có thực sự cần tự động hóa không? Và nên bắt đầu từ đâu?"</p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Mình đã xây một bài quiz 10 câu hỏi — chỉ mất 3 phút — để đánh giá chính xác:</p>
    <ul style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0; padding-left: 20px;">
      <li>Mức độ sẵn sàng tự động hóa của doanh nghiệp bạn (điểm 10-40)</li>
      <li>Quy trình nào nên ưu tiên trước</li>
      <li>Gói giải pháp phù hợp với quy mô hiện tại</li>
    </ul>

    <div style="background: #F0F7FF; border-radius: 12px; padding: 20px; margin: 24px 0; border-left: 4px solid #0066FF;">
      <p style="font-size: 14px; color: #334155; margin: 0; line-height: 1.6;">Kết quả cá nhân hóa theo quy mô và ngành của doanh nghiệp bạn — không phải câu trả lời chung chung.</p>
    </div>

    ${ctaButton(utm("/quiz", "pdf", 2), "Làm Quiz Đánh Giá Miễn Phí →")}
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

// ── PDF Email 3 — Day 7: Case study + CTA audit ──────────────────────────────

export function pdfEmail3(params: { email: string; name?: string }): EmailResult {
  const { email, name } = params;
  const displayName = name ? name : "bạn";

  const subject = "Shop thời trang tiết kiệm 18 giờ/tuần — bạn thì sao?";

  const bodyHtml = `
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Chào <strong>${displayName}</strong>,</p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Một tuần trước bạn đã tải tài liệu về tự động hóa quy trình. Hôm nay mình muốn chia sẻ một case study để bạn thấy rõ hơn automation hoạt động như thế nào trong thực tế.</p>

    ${caseStudyBlock("e-commerce")}

    ${testimonialBlock("e-commerce")}

    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Nếu bạn muốn có thêm góc nhìn từ mình — 30 phút audit miễn phí, không cam kết, chỉ là cuộc trao đổi thực chất.</p>

    ${ctaButton(utm("/audit", "pdf", 3), "Đặt Lịch Tư Vấn Miễn Phí →")}
  `;

  return {
    subject,
    html: emailWrapper(
      bodyHtml,
      `Case study: shop thời trang 15 NV tiết kiệm 18 giờ/tuần, tăng 23% doanh thu nhờ n8n automation.`,
      email
    ),
  };
}

// ── PDF Email 4 — Day 14: Another industry case study ──────────────────────────

export function pdfEmail4(params: { email: string; name?: string }): EmailResult {
  const { email, name } = params;
  const displayName = name ? name : "bạn";

  const subject = "Agency BĐS: 0% lead miss, tăng 35% xem nhà";

  const bodyHtml = `
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Chào <strong>${displayName}</strong>,</p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Lần trước mình chia sẻ case study e-commerce. Hôm nay là một ngành hoàn toàn khác — bất động sản — để bạn thấy automation áp dụng đa dạng thế nào.</p>

    ${caseStudyBlock("bat-dong-san")}

    ${testimonialBlock("bat-dong-san")}

    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Dù bạn ở ngành nào, vấn đề cốt lõi thường giống nhau: nhập liệu thủ công, lead rơi, báo cáo chậm. Automation giải quyết tất cả.</p>

    ${ctaButton(utm("/ket-qua", "pdf", 4), "Xem Tất Cả Case Studies →")}

    <p style="font-size: 14px; color: #64748B; text-align: center;">Hoặc <a href="${utm("/audit", "pdf", 4, "nurture_cta2")}" style="color: #0066FF; text-decoration: none;">đặt lịch audit miễn phí</a> nếu bạn muốn trao đổi trực tiếp.</p>
  `;

  return {
    subject,
    html: emailWrapper(
      bodyHtml,
      `Case study BĐS: 0% lead miss, tăng 35% tỉ lệ xem nhà. Xem automation hoạt động ở nhiều ngành.`,
      email
    ),
  };
}

// ── PDF Email 5 — Day 21: Final farewell ───────────────────────────────────────

export function pdfEmail5(params: { email: string; name?: string }): EmailResult {
  const { email, name } = params;
  const displayName = name ? name : "bạn";

  const subject = "Lời mời cuối — mình vẫn ở đây khi bạn cần";

  const bodyHtml = `
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Chào <strong>${displayName}</strong>,</p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Đây là email cuối cùng trong chuỗi từ AutoFlow. Mình hoàn toàn hiểu nếu bây giờ chưa phải lúc — mỗi doanh nghiệp có timeline riêng.</p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Nếu sau này bạn cần trao đổi về tự động hóa — dù là tháng tới hay năm sau — lời mời audit miễn phí vẫn mở. Chỉ cần nhắn mình.</p>

    <div style="background: #F0F7FF; border-radius: 12px; padding: 20px; margin: 24px 0; border-left: 4px solid #0066FF;">
      <p style="font-size: 14px; color: #334155; margin: 0 0 8px 0; line-height: 1.6;">📧 Reply email này bất cứ lúc nào</p>
      <p style="font-size: 14px; color: #334155; margin: 0 0 8px 0; line-height: 1.6;">🌐 <a href="${SITE_URL}" style="color: #0066FF; text-decoration: none;">autoflowvn.net</a> — xem case studies, bảng giá, tài liệu</p>
      <p style="font-size: 14px; color: #334155; margin: 0; line-height: 1.6;">📋 <a href="${utm("/audit", "pdf", 5)}" style="color: #0066FF; text-decoration: none;">Đặt lịch audit miễn phí</a> — 30 phút, không cam kết</p>
    </div>

    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Chúc doanh nghiệp bạn phát triển tốt!</p>
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

// ── Audit Email 1 — Day 0: Confirmation + preparation checklist ───────────────

export function auditEmail1(params: { email: string; name?: string }): EmailResult {
  const { email, name } = params;
  const displayName = name ? name : "bạn";

  const subject = "Xác nhận đặt lịch audit — AutoFlow";

  const bodyHtml = `
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Chào <strong>${displayName}</strong>,</p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Mình đã nhận được yêu cầu audit của bạn. Mình sẽ liên hệ trong vòng 24 giờ để xác nhận lịch cụ thể.</p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Trong khi chờ, bạn có thể chuẩn bị trước một số thông tin để buổi audit hiệu quả hơn:</p>

    <div style="background: #F0F7FF; border-radius: 12px; padding: 20px; margin: 24px 0; border-left: 4px solid #0066FF;">
      <p style="font-size: 13px; font-weight: 600; color: #0052CC; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 0.05em;">Checklist Chuẩn Bị Audit</p>
      <p style="font-size: 14px; color: #334155; margin: 0 0 8px 0; line-height: 1.6;">☑ Liệt kê 3-5 quy trình thủ công tốn thời gian nhất hiện tại</p>
      <p style="font-size: 14px; color: #334155; margin: 0 0 8px 0; line-height: 1.6;">☑ Ước tính số giờ/ngày team bạn dành cho những việc lặp lại</p>
      <p style="font-size: 14px; color: #334155; margin: 0 0 8px 0; line-height: 1.6;">☑ Các công cụ đang dùng (phần mềm kế toán, CRM, kênh bán hàng...)</p>
      <p style="font-size: 14px; color: #334155; margin: 0 0 8px 0; line-height: 1.6;">☑ Ngân sách dự kiến cho giải pháp tự động hóa (nếu có)</p>
    </div>

    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Chuẩn bị sẵn 4 điểm trên sẽ giúp mình đưa ra gợi ý cụ thể và thực tế hơn trong 30 phút.</p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Nếu bạn muốn thay đổi hoặc cần gấp hơn, reply email này trực tiếp.</p>
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

// ── Audit Email 2 — Day 3: Value-add content ──────────────────────────────────

export function auditEmail2(params: { email: string; name?: string }): EmailResult {
  const { email, name } = params;
  const displayName = name ? name : "bạn";

  const subject = "5 dấu hiệu bạn đang tốn tiền vào việc thủ công";

  const bodyHtml = `
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Chào <strong>${displayName}</strong>,</p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">3 ngày trước bạn đã đặt lịch audit với AutoFlow — mình muốn chia sẻ một bài viết ngắn trong khi chờ.</p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Đây là 5 dấu hiệu phổ biến nhất mà doanh nghiệp đang "đốt tiền" cho công việc có thể tự động hóa:</p>

    <div style="background: #F0F7FF; border-radius: 12px; padding: 20px; margin: 24px 0; border-left: 4px solid #0066FF;">
      <p style="font-size: 14px; color: #334155; margin: 0 0 8px 0; line-height: 1.6;">1. Nhân viên mất hơn 1 giờ/ngày để copy-paste dữ liệu giữa các hệ thống</p>
      <p style="font-size: 14px; color: #334155; margin: 0 0 8px 0; line-height: 1.6;">2. Báo cáo cuối tháng mất 1-3 ngày để tổng hợp từ nhiều nguồn</p>
      <p style="font-size: 14px; color: #334155; margin: 0 0 8px 0; line-height: 1.6;">3. Khách liên hệ ngoài giờ không được trả lời trong vòng 1 giờ</p>
      <p style="font-size: 14px; color: #334155; margin: 0 0 8px 0; line-height: 1.6;">4. Đơn hàng từ nhiều kênh phải nhập lại thủ công vào một chỗ</p>
      <p style="font-size: 14px; color: #334155; margin: 0 0 8px 0; line-height: 1.6;">5. Không biết chính xác số liệu doanh thu hôm nay mà không mở file Excel</p>
    </div>

    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Nếu doanh nghiệp bạn có 2+ dấu hiệu trên — automation sẽ có ROI rõ ràng.</p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Mình sẽ đi vào chi tiết hơn trong buổi audit. Nếu chưa xác nhận lịch, bạn có thể đặt lại ở đây.</p>

    ${ctaButton(utm("/audit", "audit", 2), "Xác Nhận Lịch Audit →")}
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
  const displayName = name ? name : "bạn";

  const subject = "Chuỗi trung tâm tiếng Anh giảm 80% miss lịch";

  const bodyHtml = `
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Chào <strong>${displayName}</strong>,</p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Một tuần trước bạn đã liên hệ với AutoFlow. Mình muốn chia sẻ một case study để bạn hình dung rõ hơn kết quả thực tế.</p>

    ${caseStudyBlock("giao-duc")}

    ${testimonialBlock("giao-duc")}

    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Trong buổi audit, mình sẽ phân tích cụ thể quy trình của bạn và chỉ ra đâu có thể đạt kết quả tương tự.</p>

    ${ctaButton(utm("/audit", "audit", 3), "Đặt Lịch Audit →")}

    <p style="font-size: 14px; color: #64748B; text-align: center;">Xem thêm <a href="${utm("/ket-qua", "audit", 3, "nurture_results")}" style="color: #0066FF; text-decoration: none;">case studies các ngành khác</a></p>
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

// ── Audit Email 4 — Day 14: Cross-sell quiz ────────────────────────────────────

export function auditEmail4(params: { email: string; name?: string }): EmailResult {
  const { email, name } = params;
  const displayName = name ? name : "bạn";

  const subject = "Chưa sẵn sàng audit? Thử quiz 3 phút trước";

  const bodyHtml = `
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Chào <strong>${displayName}</strong>,</p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">2 tuần trước bạn quan tâm đến audit miễn phí. Mình hiểu nếu lịch bạn chưa cho phép.</p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Nếu bạn muốn tìm hiểu thêm trước khi nói chuyện, mình có quiz đánh giá mức độ sẵn sàng tự động hóa — chỉ 3 phút, hoàn toàn miễn phí:</p>

    <div style="background: #F0F7FF; border-radius: 12px; padding: 20px; margin: 24px 0; border-left: 4px solid #0066FF;">
      <p style="font-size: 14px; color: #334155; margin: 0 0 8px 0; line-height: 1.6;">✅ Đánh giá mức độ sẵn sàng (điểm 10-40)</p>
      <p style="font-size: 14px; color: #334155; margin: 0 0 8px 0; line-height: 1.6;">✅ Xác định quy trình nên ưu tiên</p>
      <p style="font-size: 14px; color: #334155; margin: 0; line-height: 1.6;">✅ Gợi ý gói phù hợp với quy mô</p>
    </div>

    ${ctaButton(utm("/quiz", "audit", 4), "Làm Quiz 3 Phút →")}

    <p style="font-size: 14px; color: #64748B; text-align: center;">Hoặc nếu đã sẵn sàng: <a href="${utm("/audit", "audit", 4, "nurture_cta2")}" style="color: #0066FF; text-decoration: none;">đặt lịch audit ngay</a></p>
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

// ── Audit Email 5 — Day 21: Final farewell ─────────────────────────────────────

export function auditEmail5(params: { email: string; name?: string }): EmailResult {
  const { email, name } = params;
  const displayName = name ? name : "bạn";

  const subject = "Mình vẫn ở đây nếu bạn cần — AutoFlow";

  const bodyHtml = `
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Chào <strong>${displayName}</strong>,</p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Đây là email cuối cùng trong chuỗi từ AutoFlow. Mình hoàn toàn hiểu nếu bây giờ chưa phải lúc.</p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Khi bạn sẵn sàng nói chuyện — dù là tuần tới hay tháng sau — mình vẫn ở đây. Lời mời audit miễn phí không có hạn.</p>

    <div style="background: #F0F7FF; border-radius: 12px; padding: 20px; margin: 24px 0; border-left: 4px solid #0066FF;">
      <p style="font-size: 14px; color: #334155; margin: 0 0 8px 0; line-height: 1.6;">📧 Reply email này bất cứ lúc nào</p>
      <p style="font-size: 14px; color: #334155; margin: 0 0 8px 0; line-height: 1.6;">🌐 <a href="${SITE_URL}" style="color: #0066FF; text-decoration: none;">autoflowvn.net</a> — xem case studies, bảng giá, tài liệu</p>
      <p style="font-size: 14px; color: #334155; margin: 0; line-height: 1.6;">📋 <a href="${utm("/audit", "audit", 5)}" style="color: #0066FF; text-decoration: none;">Đặt lịch audit miễn phí</a> — 30 phút, không cam kết</p>
    </div>

    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Chúc doanh nghiệp bạn phát triển tốt!</p>
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
