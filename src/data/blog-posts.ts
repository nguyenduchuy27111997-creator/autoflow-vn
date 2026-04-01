export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  // Pillar
  { slug: "n8n-la-gi", title: "n8n Là Gì? Hướng Dẫn Toàn Diện 2026", description: "Hướng dẫn A-Z: cài đặt, 400+ tích hợp, 70+ AI nodes, so sánh Zapier/Make, bảng giá VND.", date: "2026-01-06", readTime: "20 phút", category: "Pillar", featured: true },

  // Knowledge / Comparison (older content)
  { slug: "5-dau-hieu-can-automation", title: "5 Dấu Hiệu Cần Tự Động Hóa — Ngay Bây Giờ", description: "94% doanh nghiệp làm việc lặp lại.", date: "2026-01-10", readTime: "10 phút", category: "Kiến thức", featured: false },
  { slug: "n8n-vs-zapier", title: "n8n vs Zapier — SME Việt Nam Nên Chọn?", description: "$60/năm vs $3,588/năm.", date: "2026-01-13", readTime: "15 phút", category: "So sánh", featured: false },
  { slug: "tu-lam-hay-thue", title: "Tự Làm Automation Hay Thuê Chuyên Gia?", description: "DIY $9,240/năm vs Agency $2,900.", date: "2026-01-17", readTime: "12 phút", category: "Kiến thức", featured: false },
  { slug: "webhook-la-gi", title: "Webhook Là Gì? Giải Thích Cho Người Không Code", description: "Webhook vs API bằng ví dụ đời thường.", date: "2026-01-21", readTime: "8 phút", category: "Kiến thức", featured: false },
  { slug: "sme-chuyen-doi-so-2026", title: "80% SME Tìm Giải Pháp Nhưng Không Biết Bắt Đầu", description: "Lộ trình 90 ngày chuyển đổi số.", date: "2026-01-25", readTime: "12 phút", category: "Kiến thức", featured: false },
  { slug: "api-la-gi", title: "API Là Gì? Giải Thích Cho Chủ Doanh Nghiệp", description: "82% organizations API-first.", date: "2026-01-29", readTime: "8 phút", category: "Kiến thức", featured: false },

  // E-commerce
  { slug: "dong-bo-shopee-misa", title: "Đồng Bộ Đơn Shopee → MISA Tự Động", description: "4 workflow n8n đồng bộ đơn Shopee sang MISA.", date: "2026-02-02", readTime: "12 phút", category: "E-commerce", featured: false },
  { slug: "tiktok-shop-automation", title: "TikTok Shop + n8n: Tự Động Hóa Đơn Hàng", description: "TikTok Shop 41% thị phần TMĐT VN.", date: "2026-02-05", readTime: "12 phút", category: "E-commerce", featured: false },
  { slug: "kiotviet-n8n-tich-hop", title: "KiotViet + n8n: Đồng Bộ Tồn Kho Tự Động", description: "150,000+ cửa hàng dùng KiotViet.", date: "2026-02-08", readTime: "12 phút", category: "E-commerce", featured: false },
  { slug: "haravan-n8n-automation", title: "Haravan + n8n: Tự Động Hóa Shop Online Đa Kênh", description: "50,000+ businesses dùng Haravan.", date: "2026-02-11", readTime: "12 phút", category: "E-commerce", featured: false },
  { slug: "sapo-n8n-da-kenh", title: "Sapo + n8n: Quản Lý Đa Kênh Tự Động", description: "230,000+ merchants trên Sapo.", date: "2026-02-14", readTime: "12 phút", category: "E-commerce", featured: false },
  { slug: "bao-mat-data-automation", title: "Bảo Mật Data Khi Dùng Automation — Hướng Dẫn SME", description: "$4.4M avg breach cost. Self-host advantage.", date: "2026-02-17", readTime: "12 phút", category: "Kiến thức", featured: false },

  // Industry verticals
  { slug: "lead-facebook-ads-bds", title: "Tự Động Hóa Lead Facebook Ads Cho BĐS", description: "78% khách mua nhà chọn agent phản hồi đầu tiên.", date: "2026-02-20", readTime: "12 phút", category: "Bất động sản", featured: false },
  { slug: "nhac-lich-zalo-oa-giao-duc", title: "Nhắc Lịch Học Viên Qua Zalo OA — Giảm 80% Miss", description: "5 workflow Zalo OA cho trung tâm đào tạo.", date: "2026-02-22", readTime: "12 phút", category: "Giáo dục", featured: false },
  { slug: "automation-phong-kham", title: "Tự Động Hóa Phòng Khám: Nhắc Lịch Bệnh Nhân", description: "Giảm 38-60% no-show.", date: "2026-02-24", readTime: "12 phút", category: "Y tế", featured: false },
  { slug: "automation-salon-spa", title: "Tự Động Hóa Salon & Spa: Đặt Lịch, Nhắc Hẹn, VIP", description: "Thị trường làm đẹp VN $2.79B.", date: "2026-02-26", readTime: "12 phút", category: "Làm đẹp", featured: false },
  { slug: "zalo-oa-fnb", title: "Tự Động Hóa Zalo OA Cho Nhà Hàng, Quán Cafe", description: "4 workflow Zalo OA cho F&B.", date: "2026-02-28", readTime: "12 phút", category: "F&B", featured: false },
  { slug: "crm-tu-dong-startup", title: "CRM Tự Động Cho Startup B2B — Đừng Để Lead Rơi", description: "42 giờ — thời gian phản hồi lead trung bình.", date: "2026-03-02", readTime: "12 phút", category: "Startup", featured: false },
  { slug: "bao-cao-doanh-thu-tu-dong", title: "Báo Cáo Doanh Thu Tự Động Cho Chuỗi Cửa Hàng", description: "20 giờ/tuần → 2 giờ.", date: "2026-03-04", readTime: "12 phút", category: "Retail", featured: false },
  { slug: "onboarding-nhan-vien-tu-dong", title: "Onboarding Nhân Viên Tự Động Cho SME", description: "+82% retention, +65% productivity.", date: "2026-03-05", readTime: "12 phút", category: "HR", featured: false },
  { slug: "hoa-don-dien-tu-tu-dong", title: "Hóa Đơn Điện Tử Tự Động: n8n + MISA meInvoice", description: "E-invoicing bắt buộc từ 7/2022.", date: "2026-03-07", readTime: "12 phút", category: "Kế toán", featured: false },
  { slug: "automation-du-lich-khach-san", title: "Automation Cho Du Lịch & Khách Sạn", description: "21M+ du khách quốc tế. $25.67B hospitality market.", date: "2026-03-10", readTime: "12 phút", category: "Du lịch", featured: false },
  { slug: "automation-agency-marketing", title: "Automation Cho Agency Marketing — 10 Client Như 1", description: "544% ROI, 80% more leads, 12 hrs/week saved.", date: "2026-03-12", readTime: "12 phút", category: "Marketing", featured: false },
  { slug: "logistics-van-chuyen-tu-dong", title: "Logistics & Vận Chuyển Tự Động: GHN, GHTK + n8n", description: "VN logistics $52B. GHN/GHTK API + n8n.", date: "2026-03-14", readTime: "12 phút", category: "Logistics", featured: false },

  // Tutorials
  { slug: "chatbot-zalo-oa-n8n", title: "Cách Tạo Chatbot Zalo OA Bằng n8n", description: "79.6M người dùng Zalo.", date: "2026-03-15", readTime: "14 phút", category: "Hướng dẫn", featured: false },
  { slug: "n8n-error-handling", title: "n8n Error Handling: Xử Lý Lỗi Như Chuyên Gia", description: "3 loại error node, retry, alert.", date: "2026-03-16", readTime: "12 phút", category: "Hướng dẫn", featured: false },
  { slug: "notion-n8n-crm", title: "Notion + n8n: Biến Notion Thành CRM Tự Động", description: "100M+ users. 14 actions + 2 triggers.", date: "2026-03-18", readTime: "12 phút", category: "Hướng dẫn", featured: false },
  { slug: "whatsapp-business-n8n", title: "WhatsApp Business + n8n: Giao Tiếp Khách Quốc Tế", description: "2.9B users, 90% open rate.", date: "2026-03-20", readTime: "12 phút", category: "Hướng dẫn", featured: false },
  { slug: "quan-ly-review-google-maps", title: "Quản Lý Review Google Maps Tự Động", description: "88% đọc review trước khi chọn.", date: "2026-03-22", readTime: "11 phút", category: "Marketing", featured: false },
  { slug: "telegram-bot-n8n", title: "Telegram Bot + n8n: Thông Báo & Quản Lý Từ Xa", description: "1B MAU Telegram.", date: "2026-03-23", readTime: "14 phút", category: "Hướng dẫn", featured: false },
  { slug: "roi-calculator-automation", title: "ROI Calculator: Tính Tiết Kiệm Khi Tự Động Hóa", description: "Payback 3-6 tháng. ROI 544%.", date: "2026-03-24", readTime: "10 phút", category: "Kiến thức", featured: false },
  { slug: "n8n-workflow-templates", title: "10 n8n Workflow Templates Miễn Phí Cho SME", description: "9,022 templates.", date: "2026-03-25", readTime: "15 phút", category: "Hướng dẫn", featured: false },
  { slug: "google-sheets-n8n-automation", title: "Google Sheets + n8n: Biến Sheet Thành Hệ Thống", description: "1.1B+ users.", date: "2026-03-26", readTime: "12 phút", category: "Hướng dẫn", featured: false },

  // AI & Tech (more recent)
  { slug: "tao-noi-dung-ai-n8n", title: "Tạo Nội Dung Bằng AI + n8n: Blog, Social, Email", description: "77% companies dùng AI content.", date: "2026-03-27", readTime: "12 phút", category: "AI", featured: false },
  { slug: "ai-agent-n8n-sme", title: "AI Agent + n8n Cho SME Việt Nam 2026", description: "40% apps sẽ có AI Agent (Gartner).", date: "2026-03-28", readTime: "14 phút", category: "AI", featured: false },

  // Marketing (most recent before pillar refresh)
  { slug: "email-marketing-automation-n8n", title: "Email Marketing Automation — ROI 3,600%", description: "ROI $36-45 per $1.", date: "2026-03-29", readTime: "12 phút", category: "Marketing", featured: false },
  { slug: "tu-dong-dang-bai-social-media", title: "Tự Động Đăng Bài Social Media — 9 Nền Tảng", description: "514+ social media workflows.", date: "2026-03-30", readTime: "12 phút", category: "Marketing", featured: false },
];
