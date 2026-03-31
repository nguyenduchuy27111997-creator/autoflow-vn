import { SITE_NAME, SITE_URL, SUPPORT_EMAIL } from "@/data/constants";

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
  },
  growth: {
    level: "Sẵn Sàng Tăng Trưởng",
    description:
      "Bạn đang ở giai đoạn lý tưởng để tự động hóa. Các điểm nghẽn đã rõ — nhập liệu chậm, lead rơi, báo cáo tốn thời gian.",
    insight:
      "3-5 workflows song song giải quyết cùng lúc: đồng bộ đơn hàng, tự động chăm lead, báo cáo real-time. Tiết kiệm tương đương 1 nhân viên full-time.",
    package: "Growth (20-35 triệu đồng, 3-4 tuần)",
  },
  scale: {
    level: "Cần Tự Động Hóa Ngay",
    description:
      "Doanh nghiệp bạn đang mất tiền và thời gian mỗi ngày vì thiếu tự động hóa. Mỗi ngày chậm triển khai là thêm chi phí nhân sự và lead bị mất.",
    insight:
      "8-12 workflows bao phủ đơn hàng, kho, tài chính, marketing, báo cáo. Tiết kiệm 5+ giờ/ngày — tương đương 2-3 nhân viên full-time, 200-300 triệu/năm.",
    package: "Scale (50-80 triệu đồng, 6-8 tuần)",
  },
} as const;

// ── Internal helpers ───────────────────────────────────────────────────────────

function emailWrapper(bodyHtml: string): string {
  return `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px; background: #ffffff;">
      <div style="text-align: center; margin-bottom: 32px;">
        <div style="font-size: 24px; font-weight: 800; color: #0F172A;">${SITE_NAME}</div>
        <div style="font-size: 13px; color: #94A3B8; margin-top: 4px;">Chuyên gia #1 về n8n automation tại Việt Nam</div>
      </div>

      ${bodyHtml}

      <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 28px 0;" />
      <p style="font-size: 14px; color: #475569; line-height: 1.6;">Trân trọng,<br/><strong>Đội ngũ AutoFlow</strong></p>
      <p style="font-size: 12px; color: #94A3B8; text-align: center; line-height: 1.6;">${SITE_NAME} — Tự động hóa quy trình cho SME Việt Nam<br/><a href="${SITE_URL}" style="color: #0066FF; text-decoration: none;">autoflowvn.net</a> · <a href="mailto:${SUPPORT_EMAIL}" style="color: #0066FF; text-decoration: none;">${SUPPORT_EMAIL}</a></p>
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

// ── Quiz Email 1 — Day 0: Results ──────────────────────────────────────────────

export function quizEmail1(params: {
  name?: string;
  score: number;
  tier: QuizTier;
}): EmailResult {
  const { name, score, tier } = params;
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

    ${ctaButton(`${SITE_URL}/audit`, "Đặt Lịch Audit Miễn Phí →")}
  `;

  return {
    subject,
    html: emailWrapper(bodyHtml),
  };
}

// ── Quiz Email 2 — Day 3: Case Study ──────────────────────────────────────────

const CASE_STUDIES = {
  starter: {
    title: "Trung tâm tiếng Anh 8 nhân viên tại Hà Nội",
    body: `<p style="font-size: 14px; color: #475569; margin: 0 0 8px 0; line-height: 1.6;"><strong>Vấn đề:</strong> Nhân viên mất 2 giờ/ngày nhập tay thông tin học viên đăng ký từ Facebook vào Google Sheet.</p>
      <p style="font-size: 14px; color: #475569; margin: 0 0 8px 0; line-height: 1.6;"><strong>Giải pháp:</strong> 1 workflow n8n kết nối Facebook Lead Ads → Google Sheet → Zalo notification.</p>
      <p style="font-size: 14px; color: #475569; margin: 0; line-height: 1.6;"><strong>Kết quả:</strong> Tiết kiệm 40 giờ/tháng, không còn bỏ sót lead đăng ký ngoài giờ.</p>`,
  },
  growth: {
    title: "Shop thời trang online 20 nhân viên tại TP.HCM",
    body: `<p style="font-size: 14px; color: #475569; margin: 0 0 8px 0; line-height: 1.6;"><strong>Vấn đề:</strong> Team mất 3-4 giờ/ngày tổng hợp đơn hàng từ 3 kênh (Shopee, website, TikTok Shop) — thường xuyên sai tồn kho.</p>
      <p style="font-size: 14px; color: #475569; margin: 0 0 8px 0; line-height: 1.6;"><strong>Giải pháp:</strong> Hệ thống tự động đồng bộ đơn hàng real-time, báo cáo doanh thu hàng ngày tự động gửi Zalo.</p>
      <p style="font-size: 14px; color: #475569; margin: 0; line-height: 1.6;"><strong>Kết quả:</strong> Tiết kiệm 80 giờ/tháng, tương đương 1 nhân viên admin — ROI dưới 6 tháng.</p>`,
  },
  scale: {
    title: "Công ty bất động sản 35 nhân viên tại Hà Nội",
    body: `<p style="font-size: 14px; color: #475569; margin: 0 0 8px 0; line-height: 1.6;"><strong>Vấn đề:</strong> Lead từ 5 nguồn (Batdongsan.com.vn, Cen, Facebook, website, giới thiệu) rơi vãi — team sale không biết ai follow up ai. Mất 4-5 giờ/ngày cho báo cáo thủ công.</p>
      <p style="font-size: 14px; color: #475569; margin: 0 0 8px 0; line-height: 1.6;"><strong>Giải pháp:</strong> 9 workflows tự động: gom lead từ tất cả nguồn → phân loại → assign sale → nhắc follow up → báo cáo real-time.</p>
      <p style="font-size: 14px; color: #475569; margin: 0; line-height: 1.6;"><strong>Kết quả:</strong> Tiết kiệm 100+ giờ/tháng, tỉ lệ chuyển đổi tăng 35%, hoàn vốn sau 3 tháng.</p>`,
  },
} as const;

export function quizEmail2(params: {
  name?: string;
  tier: QuizTier;
}): EmailResult {
  const { name, tier } = params;
  const displayName = name ? name : "bạn";
  const tierData = TIER_DATA[tier];
  const caseStudy = CASE_STUDIES[tier];

  const subject = "Doanh nghiệp như bạn đã tiết kiệm được bao nhiêu?";

  const bodyHtml = `
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Chào <strong>${displayName}</strong>,</p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">3 ngày trước bạn đã làm quiz của AutoFlow và đạt mức <strong>"${tierData.level}"</strong>.</p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Hôm nay mình muốn chia sẻ một case study thực tế từ doanh nghiệp có profile tương tự bạn:</p>

    <div style="background: #F0F7FF; border-radius: 12px; padding: 20px; margin: 24px 0; border-left: 4px solid #0066FF;">
      <p style="font-size: 13px; font-weight: 600; color: #0052CC; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 0.05em;">Case Study Thực Tế</p>
      <p style="font-size: 15px; font-weight: 600; color: #0F172A; margin: 0 0 12px 0;">${caseStudy.title}</p>
      ${caseStudy.body}
    </div>

    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Doanh nghiệp của bạn hoàn toàn có thể đạt kết quả tương tự — thậm chí tốt hơn nếu triển khai đúng cách.</p>

    ${ctaButton(`${SITE_URL}/audit`, "Tôi Muốn Kết Quả Tương Tự →")}
  `;

  return {
    subject,
    html: emailWrapper(bodyHtml),
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
  name?: string;
  tier: QuizTier;
}): EmailResult {
  const { name, tier } = params;
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

    ${ctaButton(`${SITE_URL}/audit`, "Đặt Lịch 30 Phút Miễn Phí →")}

    <p style="font-size: 13px; color: #94A3B8; text-align: center; margin-top: 16px;">Không muốn nhận thêm email? Nhấp vào link hủy đăng ký bên dưới.</p>
  `;

  return {
    subject,
    html: emailWrapper(bodyHtml),
  };
}

// ── PDF Email 1 — Day 0: Quick wins from the PDF ───────────────────────────────

export function pdfEmail1(params: { name?: string }): EmailResult {
  const { name } = params;
  const displayName = name ? name : "bạn";

  const subject = "3 quick wins từ tài liệu bạn vừa tải";

  const bodyHtml = `
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Chào <strong>${displayName}</strong>,</p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Cảm ơn bạn đã tải tài liệu "10 Quy Trình SME Nên Tự Động Hóa Ngay". Mình hy vọng bạn đã có cơ hội xem qua.</p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Để giúp bạn bắt đầu nhanh hơn, đây là 3 quy trình nhiều khách hàng của AutoFlow thường triển khai đầu tiên vì ROI rõ nhất:</p>

    <div style="background: #F0F7FF; border-radius: 12px; padding: 20px; margin: 24px 0; border-left: 4px solid #0066FF;">
      <p style="font-size: 14px; color: #334155; margin: 0 0 8px 0; line-height: 1.6;">1. Tự động hóa lead capture từ Facebook/Zalo → Google Sheet (tiết kiệm 30-60 phút/ngày)</p>
      <p style="font-size: 14px; color: #334155; margin: 0 0 8px 0; line-height: 1.6;">2. Tự động gửi báo giá/thông tin sản phẩm khi khách hỏi (phản hồi trong 2 phút, không cần nhân viên trực)</p>
      <p style="font-size: 14px; color: #334155; margin: 0 0 8px 0; line-height: 1.6;">3. Tự động tổng hợp báo cáo doanh thu cuối ngày gửi Zalo (không cần ai làm thủ công)</p>
    </div>

    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Trong tài liệu còn 7 quy trình khác — nhưng 3 cái trên là điểm khởi đầu tốt nhất cho hầu hết SME.</p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Nếu bạn muốn mình xem qua và đề xuất quy trình nào phù hợp nhất với doanh nghiệp của bạn — đặt lịch audit miễn phí 30 phút nhé.</p>

    ${ctaButton(`${SITE_URL}/audit`, "Đặt Lịch Audit Miễn Phí →")}
  `;

  return {
    subject,
    html: emailWrapper(bodyHtml),
  };
}

// ── PDF Email 2 — Day 3: Cross-sell to quiz ────────────────────────────────────

export function pdfEmail2(params: { name?: string }): EmailResult {
  const { name } = params;
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
      <p style="font-size: 14px; color: #334155; margin: 0; line-height: 1.6;">Hơn 200 SME đã làm quiz này. Kết quả cá nhân hóa theo từng doanh nghiệp — không phải câu trả lời chung chung.</p>
    </div>

    ${ctaButton(`${SITE_URL}/quiz`, "Làm Quiz Đánh Giá Miễn Phí →")}
  `;

  return {
    subject,
    html: emailWrapper(bodyHtml),
  };
}

// ── PDF Email 3 — Day 7: CTA audit ────────────────────────────────────────────

export function pdfEmail3(params: { name?: string }): EmailResult {
  const { name } = params;
  const displayName = name ? name : "bạn";

  const subject = "Bạn đã sẵn sàng bắt đầu tự động hóa chưa?";

  const bodyHtml = `
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Chào <strong>${displayName}</strong>,</p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Một tuần trước bạn đã tải tài liệu về tự động hóa quy trình. Mình không biết bạn đang ở giai đoạn nào trong hành trình này — chỉ muốn để lại một lời mời.</p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Nếu bạn đang cân nhắc và muốn có thêm góc nhìn từ người đã triển khai automation cho 50+ SME Việt Nam — mình sẵn sàng dành 30 phút nói chuyện.</p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 8px 0;">Trong buổi audit miễn phí, mình sẽ:</p>
    <p style="font-size: 15px; color: #334155; margin: 0 0 8px 0; line-height: 1.6; padding-left: 16px; position: relative;">• Nghe bạn mô tả quy trình hiện tại</p>
    <p style="font-size: 15px; color: #334155; margin: 0 0 8px 0; line-height: 1.6; padding-left: 16px; position: relative;">• Xác định 2-3 điểm có thể tự động hóa ngay</p>
    <p style="font-size: 15px; color: #334155; margin: 0 0 16px 0; line-height: 1.6; padding-left: 16px; position: relative;">• Ước tính ROI cụ thể cho doanh nghiệp của bạn</p>
    <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 0 0 16px 0;">Không cam kết, không phí. Chỉ là cuộc trao đổi thực chất.</p>

    ${ctaButton(`${SITE_URL}/audit`, "Đặt Lịch Tư Vấn Miễn Phí →")}
  `;

  return {
    subject,
    html: emailWrapper(bodyHtml),
  };
}
