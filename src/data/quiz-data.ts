export interface QuizAnswer {
  text: string;
  sub: string;
  score: number;
}

export interface QuizQuestion {
  id: number;
  question: string;
  description: string;
  answers: QuizAnswer[];
}

export interface QuizResultTier {
  range: [number, number];
  level: string;
  badge: string;
  badgeColor: string;
  ringGradient: string;
  description: string;
  insights: { icon: "target" | "clock" | "trending"; title: string; desc: string }[];
  package: { name: string; price: string; timeline: string };
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Nhân viên của bạn dành bao nhiêu thời gian mỗi ngày cho việc nhập liệu thủ công?",
    description: "Copy-paste đơn hàng, nhập data vào hệ thống, tổng hợp số liệu...",
    answers: [
      { text: "Dưới 1 giờ", sub: "Quy trình khá gọn, ít việc lặp lại", score: 1 },
      { text: "1–3 giờ", sub: "Có một số việc lặp nhưng vẫn kiểm soát được", score: 2 },
      { text: "3–5 giờ", sub: "Tốn nhiều thời gian, ảnh hưởng đến năng suất", score: 3 },
      { text: "Trên 5 giờ", sub: 'Đang "đốt tiền" cho công việc máy làm được', score: 4 },
    ],
  },
  {
    id: 2,
    question: "Khi khách hàng liên hệ ngoài giờ làm việc, điều gì xảy ra?",
    description: "Tin nhắn Zalo, Facebook, email lúc tối/cuối tuần...",
    answers: [
      { text: "Có chatbot/auto-reply hoạt động 24/7", sub: "Đã có hệ thống tự động phản hồi", score: 1 },
      { text: "Nhân viên trực ca trả lời", sub: "Có người xử lý nhưng tốn nhân lực", score: 2 },
      { text: "Sáng hôm sau mới reply", sub: "Trả lời chậm, có nguy cơ mất lead", score: 3 },
      { text: "Phụ thuộc ai nhìn thấy trước", sub: "Không có quy trình, dễ bỏ sót", score: 4 },
    ],
  },
  {
    id: 3,
    question: "Doanh nghiệp bạn đang bán hàng trên bao nhiêu kênh?",
    description: "Shopee, Tiki, TikTok Shop, website, cửa hàng...",
    answers: [
      { text: "1 kênh duy nhất", sub: "Dễ quản lý, chưa cần tự động hóa nhiều", score: 1 },
      { text: "2–3 kênh", sub: "Bắt đầu phức tạp, cần đồng bộ đơn hàng", score: 2 },
      { text: "4–5 kênh", sub: "Nhiều nguồn data, dễ sai sót khi tổng hợp", score: 3 },
      { text: "6+ kênh", sub: "Rất phức tạp, bắt buộc phải có hệ thống", score: 4 },
    ],
  },
  {
    id: 4,
    question: "Để ra được báo cáo doanh thu/tồn kho cuối tháng, bạn mất bao lâu?",
    description: "Gom data từ các nguồn, tổng hợp, kiểm tra sai sót...",
    answers: [
      { text: "Tự động, có sẵn real-time", sub: "Dashboard cập nhật liên tục", score: 1 },
      { text: "Nửa ngày", sub: "Tương đối nhanh, có template sẵn", score: 2 },
      { text: "1–2 ngày", sub: "Tốn thời gian gom data từ nhiều nguồn", score: 3 },
      { text: "3 ngày trở lên", sub: "Data phân tán, phải kiểm tra chéo nhiều", score: 4 },
    ],
  },
  {
    id: 5,
    question: "Bạn đang quản lý khách hàng/lead bằng gì?",
    description: "Công cụ theo dõi khách hàng tiềm năng và khách hàng hiện tại.",
    answers: [
      { text: "CRM chuyên nghiệp (HubSpot, Salesforce...)", sub: "Đã có hệ thống, cần tích hợp thêm", score: 1 },
      { text: "Google Sheet/Excel", sub: "Có theo dõi nhưng thủ công, dễ bỏ sót", score: 2 },
      { text: "Ghi chú trong Zalo/Messenger", sub: "Rải rác, không tổng hợp được", score: 3 },
      { text: "Không có hệ thống, nhớ trong đầu", sub: "Rủi ro cao, chắc chắn mất lead", score: 4 },
    ],
  },
  {
    id: 6,
    question: "Tần suất xảy ra sai sót do nhập liệu thủ công?",
    description: "Sai số lượng, sai giá, sai thông tin khách hàng, trùng data...",
    answers: [
      { text: "Gần như không có", sub: "Quy trình chặt chẽ hoặc đã tự động", score: 1 },
      { text: "Thỉnh thoảng (1–2 lần/tháng)", sub: "Có nhưng ít ảnh hưởng", score: 2 },
      { text: "Thường xuyên (hàng tuần)", sub: "Ảnh hưởng đáng kể đến vận hành", score: 3 },
      { text: "Rất thường xuyên (hàng ngày)", sub: "Gây thiệt hại tiền bạc và uy tín", score: 4 },
    ],
  },
  {
    id: 7,
    question: "Doanh nghiệp bạn có bao nhiêu nhân viên?",
    description: "Quy mô ảnh hưởng đến mức độ phức tạp cần tự động hóa.",
    answers: [
      { text: "1–5 người", sub: "Micro business, bắt đầu gọn nhẹ", score: 1 },
      { text: "6–15 người", sub: "Đang mở rộng, quy trình bắt đầu phức tạp", score: 2 },
      { text: "16–30 người", sub: "Nhiều bộ phận, cần đồng bộ", score: 3 },
      { text: "30+ người", sub: "Quy mô lớn, bắt buộc có hệ thống", score: 4 },
    ],
  },
  {
    id: 8,
    question: "Bạn đã từng nghe/thử nghiệm công cụ tự động hóa nào chưa?",
    description: "Zapier, Make, n8n, Power Automate, hoặc tương tự...",
    answers: [
      { text: "Đã dùng và đang chạy một số workflow", sub: "Có kinh nghiệm, cần mở rộng/tối ưu", score: 1 },
      { text: "Đã thử nhưng bỏ vì phức tạp", sub: "Biết giá trị nhưng cần hỗ trợ triển khai", score: 2 },
      { text: "Nghe nói nhưng chưa thử", sub: "Quan tâm nhưng chưa bắt tay vào", score: 3 },
      { text: "Chưa biết gì", sub: "Hoàn toàn mới, cần tư vấn từ đầu", score: 4 },
    ],
  },
  {
    id: 9,
    question: "Chi phí nhân sự cho việc nhập liệu/admin/báo cáo hiện tại khoảng bao nhiêu?",
    description: "Tính cả lương + bảo hiểm cho các vị trí làm công việc lặp lại.",
    answers: [
      { text: "Dưới 10 triệu/tháng", sub: "Ít nhân sự cho việc thủ công", score: 1 },
      { text: "10–20 triệu/tháng", sub: "1–2 người chuyên nhập liệu", score: 2 },
      { text: "20–40 triệu/tháng", sub: "2–3 người, chi phí đáng kể", score: 3 },
      { text: "Trên 40 triệu/tháng", sub: "Team admin lớn, ROI automation rất rõ", score: 4 },
    ],
  },
  {
    id: 10,
    question: "Nếu có giải pháp tự động hóa phù hợp ngay bây giờ, bạn sẵn sàng đầu tư không?",
    description: "Mức độ sẵn sàng quyết định tốc độ triển khai.",
    answers: [
      { text: "Sẵn sàng ngay, đang tìm đối tác", sub: "Biết rõ nhu cầu, muốn bắt đầu sớm", score: 4 },
      { text: "Quan tâm, cần thêm thông tin & ROI", sub: "Muốn hiểu rõ trước khi quyết định", score: 3 },
      { text: "Đang cân nhắc, chưa có ngân sách rõ", sub: "Biết cần nhưng chưa ưu tiên", score: 2 },
      { text: "Chưa nghĩ đến, chỉ đang tìm hiểu", sub: "Giai đoạn khám phá", score: 1 },
    ],
  },
];

export const quizResults: Record<string, QuizResultTier> = {
  starter: {
    range: [10, 20],
    level: "Giai Doạn Khởi Đầu",
    badge: "BEGINNER",
    badgeColor: "#3B82F6",
    ringGradient: "linear-gradient(135deg, #3B82F6, #60A5FA)",
    description:
      "Doanh nghiệp bạn vẫn đang vận hành tương đối gọn. Tự động hóa chưa cấp bách, nhưng đây là thời điểm tốt nhất để bắt đầu — trước khi quy mô lớn hơn và mọi thứ trở nên phức tạp.",
    insights: [
      { icon: "target", title: "Bắt đầu với 1 workflow", desc: "Chọn 1 quy trình mất nhiều thời gian nhất và tự động hóa nó. Ví dụ: Lead capture tự động." },
      { icon: "clock", title: "Tiết kiệm 1-2 giờ/ngày", desc: "Với quy mô hiện tại, 1 workflow đơn giản đã tạo ra sự khác biệt rõ rệt." },
      { icon: "trending", title: "Xây nền tảng sớm", desc: "Đầu tư sớm giúp bạn scale nhanh hơn khi doanh nghiệp mở rộng." },
    ],
    package: { name: "Starter", price: "8-15 triệu đồng", timeline: "1-2 tuần" },
  },
  growth: {
    range: [21, 30],
    level: "Sẵn Sàng Tăng Trưởng",
    badge: "GROWTH READY",
    badgeColor: "#10B981",
    ringGradient: "linear-gradient(135deg, #10B981, #34D399)",
    description:
      "Doanh nghiệp bạn đang ở giai đoạn lý tưởng để tự động hóa. Bạn đã nhận thấy các điểm nghẽn — nhập liệu chậm, lead rơi, báo cáo tốn thời gian. Đầu tư automation bây giờ sẽ tạo ra ROI rõ rệt.",
    insights: [
      { icon: "target", title: "3-5 workflows song song", desc: "Đồng bộ đơn hàng, tự động chăm lead, báo cáo real-time — giải quyết cùng lúc nhiều điểm nghẽn." },
      { icon: "clock", title: "Tiết kiệm 3-4 giờ/ngày", desc: "Tương đương tiết kiệm 1 nhân viên full-time mỗi tháng." },
      { icon: "trending", title: "ROI trong 5-7 tháng", desc: "Với mức đầu tư 20-35 triệu, bạn hoàn vốn trong nửa năm và tiết kiệm liên tục sau đó." },
    ],
    package: { name: "Growth", price: "20-35 triệu đồng", timeline: "3-4 tuần" },
  },
  scale: {
    range: [31, 40],
    level: "Cần Tự Động Hóa Ngay",
    badge: "URGENT",
    badgeColor: "#EF4444",
    ringGradient: "linear-gradient(135deg, #EF4444, #F97316)",
    description:
      "Doanh nghiệp bạn đang mất rất nhiều tiền và thời gian vì thiếu tự động hóa. Mỗi ngày chậm triển khai là thêm chi phí nhân sự, sai sót, và lead bị mất. Đây là lúc cần hành động — không phải cân nhắc thêm.",
    insights: [
      { icon: "target", title: "Tự động hóa toàn diện", desc: "8-12 workflows bao phủ đơn hàng, kho, tài chính, marketing, báo cáo — tất cả chạy tự động." },
      { icon: "clock", title: "Tiết kiệm 5+ giờ/ngày", desc: "Tương đương 2-3 nhân viên full-time. Tiết kiệm 200-300 triệu/năm." },
      { icon: "trending", title: "ROI trong 3 tháng", desc: "Đầu tư 50-80 triệu, hoàn vốn sau 3 tháng. Data ở Việt Nam, hệ thống chạy 24/7." },
    ],
    package: { name: "Scale", price: "50-80 triệu đồng", timeline: "6-8 tuần" },
  },
};

export function getResultTier(totalScore: number): QuizResultTier {
  if (totalScore <= 20) return quizResults.starter;
  if (totalScore <= 30) return quizResults.growth;
  return quizResults.scale;
}

export function getResultTierKey(totalScore: number): string {
  if (totalScore <= 20) return "starter";
  if (totalScore <= 30) return "growth";
  return "scale";
}
