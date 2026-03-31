export interface Metric {
  value: string;
  unit: string;
  label: string;
}

export interface Workflow {
  name: string;
  before: string;
  after: string;
}

export interface TimelineStep {
  week: string;
  title: string;
  desc: string;
}

export interface ROI {
  cost: string;
  savingsLabel: string;
  savings: string;
  savingsDetail: string;
  paybackLabel: string;
  payback: string;
}

export interface CaseStudy {
  slug: string;
  industry: string;
  industryColor: string; // tailwind bg + text classes
  badgeBg: string;
  badgeText: string;
  company: string;
  employees: string;
  headline: string;
  subtitle: string;
  backgroundParagraphs: string[];
  metrics: Metric[];
  workflows: Workflow[];
  timeline: TimelineStep[];
  roi: ROI;
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  // For homepage Results component
  homepageBefore: {
    hours: string;
    errors: string;
    cost: string;
  };
  homepageAfter: {
    hours: string;
    errors: string;
    cost: string;
  };
  homepageResult: string;
  homepageTimeline: string;
  homepagePackage: string;
  // Testimonial quote (simulated)
  testimonial: {
    quote: string;
    name: string;
    role: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "e-commerce",
    industry: "E-commerce",
    industryColor: "text-[#EE4D2D]",
    badgeBg: "bg-[#EE4D2D]/10",
    badgeText: "text-[#EE4D2D]",
    company: "Shop thời trang online",
    employees: "15 nhân viên",
    headline:
      "Shop thời trang online — tiết kiệm 18 giờ/tuần, tăng 23% doanh thu",
    subtitle: "15 nhân viên · Gói Growth — 28 triệu đồng · Triển khai 3 tuần",
    backgroundParagraphs: [
      "Shop thời trang online tại TP.HCM, bán trên 3 sàn (Shopee, Tiki, TikTok Shop) + website riêng. 15 nhân viên, trong đó 2 người full-time chỉ để nhập đơn từ các sàn vào MISA và quản lý tồn kho.",
      "Vấn đề lớn nhất: sai tồn kho liên tục dẫn đến oversell, hủy đơn, khách đánh giá 1 sao. Mỗi tuần trung bình 8–10 lỗi nhập tay. Chủ shop đã cố gắng thuê thêm 1 người nhưng lỗi vẫn xảy ra vì bản chất là con người không thể sync real-time giữa 4 kênh.",
    ],
    metrics: [
      { value: "18", unit: "giờ/tuần", label: "tiết kiệm cho team" },
      { value: "0", unit: "lỗi", label: "sai sót nhập tay" },
      { value: "23%", unit: "", label: "tăng doanh thu" },
      { value: "3", unit: "tuần", label: "triển khai xong" },
    ],
    workflows: [
      {
        name: "Đồng bộ đơn hàng Shopee → MISA",
        before:
          "2 nhân viên nhập tay 5 giờ/ngày, sai 8–10 đơn/tuần",
        after: "Tự động 100%, 0 lỗi, real-time sync",
      },
      {
        name: "Auto-reply review + escalation",
        before:
          "Reply review trung bình sau 12 giờ, nhiều review xấu bị miss",
        after: "Reply trong 30 giây, review xấu escalate ngay cho manager",
      },
      {
        name: "Lead capture → CRM → Zalo OA",
        before:
          "Lead từ Facebook ghi vào sổ tay, 40% bị quên follow-up",
        after: "100% lead được capture + auto follow-up ngày 3, 7",
      },
      {
        name: "Báo cáo tồn kho tự động",
        before:
          "Cuối tuần ngồi gom data từ 3 nguồn, mất 3–4 giờ",
        after: "Báo cáo tự gửi qua Zalo mỗi sáng thứ 2, 0 phút effort",
      },
      {
        name: "Upsell sequence cho khách đã mua",
        before:
          "Không có remarketing, khách mua 1 lần rồi quên",
        after:
          "Zalo OA tự gửi khảo sát → gợi ý sản phẩm → voucher thân thiết",
      },
    ],
    timeline: [
      {
        week: "Tuần 1",
        title: "Audit & Planning",
        desc: "Discovery call 2h, process mapping, xác định 5 workflows ưu tiên, proposal chi tiết.",
      },
      {
        week: "Tuần 2",
        title: "Build đồng bộ đơn hàng + tồn kho",
        desc: "Workflow #1 và #4 chạy thật. Test với data thực từ Shopee Seller Center.",
      },
      {
        week: "Tuần 3",
        title: "Build lead, review, upsell",
        desc: "Workflow #2, #3, #5 hoàn thành. Training session 2h cho team. Video Loom hướng dẫn.",
      },
      {
        week: "Bàn giao",
        title: "Go-live & Support",
        desc: "Tất cả 5 workflows chạy production. SOP document. Support 14 ngày.",
      },
    ],
    roi: {
      cost: "28 triệu",
      savingsLabel: "Tiết kiệm năm đầu",
      savings: "~180 triệu",
      savingsDetail: "(2 nhân viên × 11tr × 8 tháng + tăng doanh thu)",
      paybackLabel: "Hoàn vốn sau",
      payback: "~2 tháng",
    },
    ctaTitle: "Shop bạn có vấn đề tương tự?",
    ctaDescription:
      "Audit miễn phí 30 phút — mình phân tích quy trình shop bạn và chỉ ra chính xác đâu nên tự động hóa trước.",
    ctaButtonText: "Audit miễn phí cho shop",
    homepageBefore: {
      hours: "5 giờ/ngày nhập đơn từ 3 sàn",
      errors: "8–10 lỗi sai tồn kho/tuần",
      cost: "2 nhân viên chỉ làm việc nhập liệu",
    },
    homepageAfter: {
      hours: "0 giờ — tự động 100%",
      errors: "0 lỗi — đồng bộ real-time",
      cost: "2 nhân viên chuyển sang chăm khách",
    },
    homepageResult:
      "Tiết kiệm 18 giờ/tuần, tăng 23% doanh thu nhờ chăm khách tốt hơn",
    homepageTimeline: "3 tuần triển khai",
    homepagePackage: "Growth — 28 triệu đồng",
    testimonial: {
      quote:
        "Trước đây 2 bạn nhập đơn cả ngày mà vẫn sai. Giờ tồn kho sync real-time, team chuyển sang chăm khách — doanh thu tăng thấy rõ.",
      name: "Chị Linh",
      role: "Chủ shop thời trang, TP.HCM",
    },
  },
  {
    slug: "giao-duc",
    industry: "Giáo dục",
    industryColor: "text-indigo-600",
    badgeBg: "bg-indigo-50",
    badgeText: "text-indigo-600",
    company: "Chuỗi trung tâm tiếng Anh",
    employees: "45 nhân viên · 8 chi nhánh",
    headline:
      "Chuỗi trung tâm tiếng Anh — giảm 80% miss lịch, tiết kiệm 1 nhân sự full-time",
    subtitle:
      "45 nhân viên · 8 chi nhánh · Gói Scale — 65 triệu đồng · Triển khai 4 tuần",
    backgroundParagraphs: [
      "Chuỗi trung tâm tiếng Anh tại TP.HCM, 8 chi nhánh, 45 nhân viên (giáo viên + admin + CSKH). Mỗi chi nhánh có 80–120 học viên đang học, tổng hơn 800 học viên.",
      "Vấn đề lớn nhất: 15% học viên miss lịch mỗi tháng vì nhắc lịch bằng tay không xuể. 1 nhân viên full-time chỉ để gọi điện nhắc lịch và gom báo cáo từ 8 chi nhánh. Lead từ Facebook và Zalo follow-up chậm — 67% phụ huynh hỏi học phí nhưng không được reply trong 1 giờ → đăng ký trung tâm khác.",
    ],
    metrics: [
      { value: "80%", unit: "", label: "giảm miss lịch" },
      { value: "1", unit: "FTE", label: "tiết kiệm nhân sự" },
      { value: "100%", unit: "", label: "follow-up lead tự động" },
      { value: "4", unit: "tuần", label: "triển khai xong" },
    ],
    workflows: [
      {
        name: "Nhắc lịch học viên qua Zalo OA",
        before:
          "Nhân viên gọi điện nhắc từng người, mất 3 giờ/ngày, vẫn miss 15%",
        after:
          "Zalo OA tự nhắc 24h trước, xác nhận tự động, miss lịch giảm còn 3%",
      },
      {
        name: "Lead nurturing tự động",
        before:
          "Phụ huynh hỏi học phí, reply chậm 12–24 giờ, 67% lead mất",
        after:
          "Zalo OA reply ngay + gửi thông tin khóa học + follow-up ngày 3, 7",
      },
      {
        name: "Điểm danh & thông báo phụ huynh",
        before:
          "Giáo viên điểm danh trên sổ, phụ huynh không biết con đã đến lớp chưa",
        after:
          "Check-in qua form → Zalo tự gửi phụ huynh → feedback cuối buổi",
      },
      {
        name: "Báo cáo 8 chi nhánh tự động",
        before:
          "Cuối tháng gom data từ 8 nơi, mất 3 ngày, sai số thường xuyên",
        after:
          "Mỗi sáng thứ 2: báo cáo tổng hợp gửi qua Zalo cho quản lý, 0 phút",
      },
      {
        name: "Upsell khóa mới & gia hạn",
        before:
          "Không ai nhớ học viên nào sắp hết khóa, mất cơ hội gia hạn",
        after:
          "2 tuần trước khi hết khóa → Zalo gửi offer gia hạn giảm 10% → nhắc lại nếu chưa reply",
      },
    ],
    timeline: [
      {
        week: "Tuần 1",
        title: "Audit & Planning",
        desc: "Discovery call 2h, mapping quy trình 8 chi nhánh, xác định 5 workflows ưu tiên.",
      },
      {
        week: "Tuần 2",
        title: "Build nhắc lịch + điểm danh",
        desc: "Workflow #1 và #3 chạy thật. Test với lịch học viên thực tế. Kết nối Zalo OA.",
      },
      {
        week: "Tuần 3",
        title: "Build lead nurture + báo cáo + upsell",
        desc: "Workflow #2, #4, #5 hoàn thành. Training session 2h cho admin 8 chi nhánh.",
      },
      {
        week: "Tuần 4",
        title: "Go-live & Support",
        desc: "Tất cả chạy production. SOP cho từng chi nhánh. Video Loom hướng dẫn. Support 14 ngày.",
      },
    ],
    roi: {
      cost: "65 triệu",
      savingsLabel: "Tiết kiệm năm đầu",
      savings: "~150 triệu",
      savingsDetail: "(1 FTE × 10tr × 12 tháng + giảm miss lịch + tăng gia hạn)",
      paybackLabel: "Hoàn vốn sau",
      payback: "~5 tháng",
    },
    ctaTitle: "Trung tâm bạn có vấn đề tương tự?",
    ctaDescription:
      "Audit miễn phí 30 phút — mình phân tích quy trình trung tâm bạn và chỉ ra workflow nào giảm miss lịch ngay.",
    ctaButtonText: "Audit miễn phí cho trung tâm",
    homepageBefore: {
      hours: "3 giờ/ngày gọi nhắc lịch học viên",
      errors: "15% học viên miss lịch học/tháng",
      cost: "1 người chỉ để tổng hợp báo cáo 8 chi nhánh",
    },
    homepageAfter: {
      hours: "Zalo OA tự nhắc lịch 24h trước",
      errors: "Miss lịch giảm còn 3%",
      cost: "Báo cáo 8 chi nhánh tự động mỗi sáng thứ 2",
    },
    homepageResult: "Giảm 80% miss lịch, tiết kiệm 1 nhân sự full-time",
    homepageTimeline: "4 tuần triển khai",
    homepagePackage: "Scale — 65 triệu đồng",
    testimonial: {
      quote:
        "Ngày trước admin gọi nhắc lịch cả ngày mà học viên vẫn quên. Giờ Zalo nhắc tự động, miss lịch gần như bằng 0 — bạn admin chuyển sang chăm lead mới.",
      name: "Anh Tuấn",
      role: "Giám đốc chuỗi trung tâm tiếng Anh, TP.HCM",
    },
  },
  {
    slug: "bat-dong-san",
    industry: "Bất động sản",
    industryColor: "text-emerald-600",
    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-600",
    company: "Agency BĐS",
    employees: "12 sales",
    headline: "Agency BĐS — 0% lead miss, tăng 35% tỉ lệ xem nhà",
    subtitle: "12 sales · Gói Growth — 32 triệu đồng · Triển khai 3 tuần",
    backgroundParagraphs: [
      "Agency bất động sản tại TP.HCM, 12 sales, quản lý ~1.500 leads đang active từ nhiều nguồn: Facebook Ads, Zalo, Batdongsan.com.vn, hotline, và referral. Bán căn hộ + đất nền khu vực Q7, Q2, Thủ Đức.",
      "Vấn đề lớn nhất: lead đến từ 5 kênh nhưng ghi vào Excel riêng của từng sales → trùng lead, miss follow-up, không ai biết tổng pipeline. Matching BĐS với khách hoàn toàn bằng tay — sales nhớ trong đầu ai cần gì. Quản lý mất 5 ngày cuối tháng để gom báo cáo từ 12 người.",
    ],
    metrics: [
      { value: "0%", unit: "", label: "lead bị miss" },
      { value: "35%", unit: "", label: "tăng tỉ lệ xem nhà" },
      { value: "2", unit: "giờ/ngày", label: "tiết kiệm matching" },
      { value: "3", unit: "tuần", label: "triển khai xong" },
    ],
    workflows: [
      {
        name: "Lead capture đa kênh → CRM",
        before:
          "Lead từ Facebook, Zalo, Batdongsan.com.vn ghi vào Excel riêng, 40% bị miss hoặc trùng",
        after:
          "Tất cả lead tự động vào 1 CRM, phân loại theo nguồn + khu vực + budget, assign cho sales",
      },
      {
        name: "Follow-up Zalo sequence tự động",
        before:
          "Sales nhớ trong đầu ai cần gọi lại, follow-up rate chỉ 60%",
        after:
          "Zalo OA tự gửi: thông tin dự án → ảnh thực tế → mời xem nhà → offer. 100% lead được nurture",
      },
      {
        name: "Matching BĐS – khách hàng",
        before:
          "Sales lật 500 căn để tìm phù hợp, mất 2 giờ/ngày, hay bỏ sót",
        after:
          "Khách đăng ký → n8n so khớp tự động → gửi top 5 căn phù hợp qua Zalo trong 30 giây",
      },
      {
        name: "Nhắc lịch xem nhà & follow-up sau xem",
        before:
          "30% khách quên lịch xem nhà, sau xem không ai follow-up kịp thời",
        after:
          "Zalo nhắc 24h trước, sau xem tự hỏi feedback, no-show giảm 70%",
      },
      {
        name: "Báo cáo pipeline sales",
        before:
          "Quản lý mất 5 ngày cuối tháng gom data từ Zalo, Sheet, sổ tay",
        after:
          "Mỗi sáng thứ 2: dashboard pipeline gửi qua Zalo — lead mới, đang xem, sắp chốt",
      },
    ],
    timeline: [
      {
        week: "Tuần 1",
        title: "Audit & Planning",
        desc: "Discovery call 2h, mapping pipeline sales, xác định 5 workflows ưu tiên theo conversion funnel.",
      },
      {
        week: "Tuần 2",
        title: "Build lead capture + matching + follow-up",
        desc: "Workflow #1, #2, #3 chạy thật. Kết nối Facebook Lead Ads + Zalo OA + Google Sheet.",
      },
      {
        week: "Tuần 3",
        title: "Build nhắc lịch + báo cáo + training",
        desc: "Workflow #4, #5 hoàn thành. Training 2h cho team sales. Video hướng dẫn.",
      },
      {
        week: "Bàn giao",
        title: "Go-live & Support",
        desc: "5 workflows production. SOP document. Support 14 ngày. Retainer option.",
      },
    ],
    roi: {
      cost: "32 triệu",
      savingsLabel: "Giá trị deal tăng thêm/năm",
      savings: "~500 triệu",
      savingsDetail:
        "(35% tăng xem nhà × conversion rate × giá trị deal BĐS)",
      paybackLabel: "Hoàn vốn sau",
      payback: "1 deal",
    },
    ctaTitle: "Agency bạn có vấn đề tương tự?",
    ctaDescription:
      "Audit miễn phí 30 phút — mình phân tích pipeline và chỉ ra workflow nào chốt deal nhanh hơn.",
    ctaButtonText: "Audit miễn phí cho agency",
    homepageBefore: {
      hours: "2 giờ/ngày matching BĐS bằng tay",
      errors: "40% lead miss hoặc trùng từ 5 kênh",
      cost: "5 ngày/tháng gom báo cáo từ 12 sales",
    },
    homepageAfter: {
      hours: "Matching tự động trong 30 giây",
      errors: "0% lead miss — tất cả vào 1 CRM",
      cost: "Pipeline report tự gửi mỗi sáng thứ 2",
    },
    homepageResult:
      "0% lead miss, tăng 35% tỉ lệ xem nhà, hoàn vốn sau 1 deal",
    homepageTimeline: "3 tuần triển khai",
    homepagePackage: "Growth — 32 triệu đồng",
    testimonial: {
      quote:
        "Trước đây lead đến từ 5 kênh mà sales ghi Excel riêng — trùng, miss liên tục. Giờ tất cả vào 1 chỗ, matching tự động, tỉ lệ xem nhà tăng rõ rệt.",
      name: "Anh Khoa",
      role: "Giám đốc agency BĐS, TP.HCM",
    },
  },
  {
    slug: "fnb",
    industry: "F&B",
    industryColor: "text-orange-600",
    badgeBg: "bg-orange-50",
    badgeText: "text-orange-600",
    company: "Chuỗi quán cafe 3 chi nhánh",
    employees: "22 nhân viên · 3 chi nhánh",
    headline:
      "Chuỗi quán cafe 3 chi nhánh — tiết kiệm 3 giờ/ngày, tăng 25% khách quay lại",
    subtitle:
      "22 nhân viên · 3 chi nhánh · Gói Growth — 30 triệu đồng · Triển khai 3 tuần",
    backgroundParagraphs: [
      "Chuỗi quán cafe tại TP.HCM, 3 chi nhánh, 22 nhân viên (pha chế + phục vụ + bếp + quản lý). Bán tại quán + delivery qua GrabFood và ShopeeFood. Mỗi chi nhánh trung bình 80–120 đơn/ngày.",
      "Vấn đề lớn nhất: đối chiếu đơn delivery mất 1–2 giờ mỗi tối, sai lệch doanh thu 5–8% mỗi tháng. Khách đến 1 lần rồi quên — không có hệ thống remarketing. Quản lý 3 chi nhánh phải gom báo cáo bằng tay mỗi tuần, quyết định luôn chậm vì thiếu data real-time.",
    ],
    metrics: [
      { value: "3", unit: "giờ/ngày", label: "tiết kiệm nhập đơn" },
      { value: "25%", unit: "", label: "tăng khách quay lại" },
      { value: "0", unit: "phút", label: "báo cáo doanh thu" },
      { value: "3", unit: "tuần", label: "triển khai xong" },
    ],
    workflows: [
      {
        name: "Đồng bộ đơn GrabFood/ShopeeFood → Sheet/POS",
        before:
          "Thu ngân đối chiếu đơn delivery bằng tay mỗi tối, sai lệch doanh thu thường xuyên",
        after: "Đơn tự động lưu vào Sheet, đối chiếu real-time, sai lệch = 0",
      },
      {
        name: "Chăm sóc khách quay lại qua Zalo OA",
        before:
          "Khách ăn xong đi luôn, không remarketing, repeat rate chỉ 20%",
        after:
          "Sau 7 ngày: Zalo gửi giảm 10%. Sau 30 ngày: tặng món khai vị. Repeat rate tăng 25%",
      },
      {
        name: "Nhắc ca làm & xác nhận nhân viên",
        before:
          "Quản lý gọi điện nhắc ca, nhân viên quên ca → thiếu người giờ cao điểm",
        after:
          "Zalo tự nhắc 12h trước, nhân viên xác nhận/đổi ca, quản lý biết ngay ca trống",
      },
      {
        name: "Cảnh báo tồn kho nguyên liệu",
        before:
          "Kiểm kê tay mỗi ngày 45 phút, hay hết nguyên liệu giữa ca bận",
        after:
          "Tồn kho dưới mức → alert bếp trưởng qua Zalo → tự tạo đơn đặt nhà cung cấp",
      },
      {
        name: "Báo cáo doanh thu 3 chi nhánh",
        before:
          "Cuối tuần gom data từ 3 nơi, mất 2 ngày, quyết định chậm",
        after:
          "Mỗi tối 10h: báo cáo tự gửi qua Zalo — doanh thu, số đơn, food cost, top món",
      },
    ],
    timeline: [
      {
        week: "Tuần 1",
        title: "Audit & Planning",
        desc: "Discovery call 2h, khảo sát 3 chi nhánh, mapping quy trình từ nhận đơn đến báo cáo.",
      },
      {
        week: "Tuần 2",
        title: "Build đồng bộ đơn + tồn kho + báo cáo",
        desc: "Workflow #1, #4, #5 chạy thật. Kết nối GrabFood, ShopeeFood, Google Sheet.",
      },
      {
        week: "Tuần 3",
        title: "Build chăm khách + nhắc ca + training",
        desc: "Workflow #2, #3 hoàn thành. Training cho quản lý 3 chi nhánh. Go-live.",
      },
      {
        week: "Bàn giao",
        title: "Support & Optimize",
        desc: "Tất cả chạy production. SOP cho từng chi nhánh. Support 14 ngày. Tối ưu flow.",
      },
    ],
    roi: {
      cost: "30 triệu",
      savingsLabel: "Tiết kiệm + doanh thu tăng/năm",
      savings: "~120 triệu",
      savingsDetail:
        "(giảm hao hụt + tăng repeat + tiết kiệm nhân sự báo cáo)",
      paybackLabel: "Hoàn vốn sau",
      payback: "~3 tháng",
    },
    ctaTitle: "Nhà hàng bạn có vấn đề tương tự?",
    ctaDescription:
      "Audit miễn phí 30 phút — mình phân tích vận hành và chỉ ra workflow nào tăng hiệu quả ngay.",
    ctaButtonText: "Audit miễn phí cho nhà hàng",
    homepageBefore: {
      hours: "3 giờ/ngày đối chiếu đơn delivery",
      errors: "Sai lệch doanh thu 5–8%/tháng",
      cost: "Repeat rate chỉ 20%, không remarketing",
    },
    homepageAfter: {
      hours: "0 giờ — đồng bộ tự động real-time",
      errors: "Sai lệch = 0, đối chiếu chính xác",
      cost: "Repeat rate tăng 25% nhờ Zalo remarketing",
    },
    homepageResult:
      "Tiết kiệm 3 giờ/ngày, tăng 25% khách quay lại, hoàn vốn sau 3 tháng",
    homepageTimeline: "3 tuần triển khai",
    homepagePackage: "Growth — 30 triệu đồng",
    testimonial: {
      quote:
        "Đối chiếu đơn GrabFood trước đây mất 2 tiếng mỗi tối, giờ tự động hết. Khách quay lại tăng rõ nhờ Zalo gửi offer tự động — đỡ phải nhớ trong đầu.",
      name: "Anh Minh",
      role: "Chủ chuỗi cafe, TP.HCM",
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getAllSlugs(): string[] {
  return caseStudies.map((cs) => cs.slug);
}
