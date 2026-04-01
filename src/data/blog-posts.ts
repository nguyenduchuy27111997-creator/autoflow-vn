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
  { slug: "n8n-la-gi", title: "n8n Là Gì? Hướng Dẫn Toàn Diện 2026", description: "Hướng dẫn A-Z: cài đặt, 400+ tích hợp, 70+ AI nodes, so sánh Zapier/Make, bảng giá VND.", date: "2026-04-01", readTime: "20 phút", category: "Pillar", featured: true },

  // E-commerce
  { slug: "dong-bo-shopee-misa", title: "Đồng Bộ Đơn Shopee → MISA Tự Động", description: "4 workflow n8n đồng bộ đơn Shopee sang MISA. Tồn kho real-time, Zalo thông báo.", date: "2026-04-01", readTime: "12 phút", category: "E-commerce", featured: false },
  { slug: "tiktok-shop-automation", title: "TikTok Shop + n8n: Tự Động Hóa Đơn Hàng", description: "TikTok Shop 41% thị phần TMĐT VN. 4 workflow tự động xác nhận đơn, sync tồn kho.", date: "2026-04-01", readTime: "12 phút", category: "E-commerce", featured: false },
  { slug: "kiotviet-n8n-tich-hop", title: "KiotViet + n8n: Đồng Bộ Tồn Kho Tự Động", description: "150,000+ cửa hàng dùng KiotViet. Tích hợp n8n đồng bộ tồn kho, đơn hàng, khách hàng.", date: "2026-04-01", readTime: "12 phút", category: "E-commerce", featured: false },
  { slug: "haravan-n8n-automation", title: "Haravan + n8n: Tự Động Hóa Shop Online Đa Kênh", description: "50,000+ businesses dùng Haravan. 4 workflow n8n cho order sync, inventory, Zalo care.", date: "2026-04-01", readTime: "12 phút", category: "E-commerce", featured: false },
  { slug: "sapo-n8n-da-kenh", title: "Sapo + n8n: Quản Lý Đa Kênh Tự Động", description: "230,000+ merchants trên Sapo. 4 workflow đồng bộ đơn, tồn kho, khách hàng, báo cáo.", date: "2026-04-01", readTime: "12 phút", category: "E-commerce", featured: false },

  // Industry
  { slug: "lead-facebook-ads-bds", title: "Tự Động Hóa Lead Facebook Ads Cho BĐS", description: "78% khách mua nhà chọn agent phản hồi đầu tiên. Phản hồi lead trong 30 giây.", date: "2026-04-01", readTime: "12 phút", category: "Bất động sản", featured: false },
  { slug: "nhac-lich-zalo-oa-giao-duc", title: "Nhắc Lịch Học Viên Qua Zalo OA — Giảm 80% Miss", description: "5 workflow Zalo OA cho trung tâm đào tạo. ZNS 200-800 VND/tin.", date: "2026-04-01", readTime: "12 phút", category: "Giáo dục", featured: false },
  { slug: "automation-phong-kham", title: "Tự Động Hóa Phòng Khám: Nhắc Lịch Bệnh Nhân", description: "Giảm 38-60% no-show. 4 workflow nhắc lịch, xác nhận, feedback, tái hẹn.", date: "2026-04-01", readTime: "12 phút", category: "Y tế", featured: false },
  { slug: "automation-salon-spa", title: "Tự Động Hóa Salon & Spa: Đặt Lịch, Nhắc Hẹn, VIP", description: "Thị trường làm đẹp VN $2.79B. Giảm 70% no-show, tăng loyalty.", date: "2026-04-01", readTime: "12 phút", category: "Làm đẹp", featured: false },
  { slug: "zalo-oa-fnb", title: "Tự Động Hóa Zalo OA Cho Nhà Hàng, Quán Cafe", description: "4 workflow Zalo OA cho F&B. Tăng 40% khách quay lại.", date: "2026-04-01", readTime: "12 phút", category: "F&B", featured: false },
  { slug: "crm-tu-dong-startup", title: "CRM Tự Động Cho Startup B2B — Đừng Để Lead Rơi", description: "42 giờ — thời gian phản hồi lead trung bình. 4 workflow CRM automation.", date: "2026-04-01", readTime: "12 phút", category: "Startup", featured: false },
  { slug: "bao-cao-doanh-thu-tu-dong", title: "Báo Cáo Doanh Thu Tự Động Cho Chuỗi Cửa Hàng", description: "20 giờ/tuần → 2 giờ. 3 workflow báo cáo ngày/tuần/tháng.", date: "2026-04-01", readTime: "12 phút", category: "Retail", featured: false },
  { slug: "onboarding-nhan-vien-tu-dong", title: "Onboarding Nhân Viên Tự Động Cho SME", description: "Chi phí $4-7K/hire. Automation tăng 82% retention, 65% productivity.", date: "2026-04-01", readTime: "12 phút", category: "HR", featured: false },
  { slug: "hoa-don-dien-tu-tu-dong", title: "Hóa Đơn Điện Tử Tự Động: n8n + MISA meInvoice", description: "E-invoicing bắt buộc từ 7/2022. Tự động xuất hóa đơn, đối soát thuế.", date: "2026-04-01", readTime: "12 phút", category: "Kế toán", featured: false },

  // AI & Tech
  { slug: "ai-agent-n8n-sme", title: "AI Agent + n8n Cho SME Việt Nam 2026", description: "40% apps sẽ có AI Agent (Gartner). 5 use cases với 70+ AI nodes.", date: "2026-04-01", readTime: "14 phút", category: "AI", featured: false },
  { slug: "tao-noi-dung-ai-n8n", title: "Tạo Nội Dung Bằng AI + n8n: Blog, Social, Email", description: "77% companies dùng AI. Workflow tạo blog, caption, newsletter, video tự động.", date: "2026-04-01", readTime: "12 phút", category: "AI", featured: false },

  // Knowledge
  { slug: "5-dau-hieu-can-automation", title: "5 Dấu Hiệu Cần Tự Động Hóa — Ngay Bây Giờ", description: "94% doanh nghiệp làm việc lặp lại mà máy làm được.", date: "2026-04-01", readTime: "10 phút", category: "Kiến thức", featured: false },
  { slug: "tu-lam-hay-thue", title: "Tự Làm Automation Hay Thuê Chuyên Gia?", description: "DIY $9,240/năm vs Agency $2,900. So sánh chi tiết.", date: "2026-04-01", readTime: "12 phút", category: "Kiến thức", featured: false },
  { slug: "n8n-vs-zapier", title: "n8n vs Zapier — SME Việt Nam Nên Chọn Cái Nào?", description: "$60/năm vs $3,588/năm. Tích hợp Zalo/MISA/Shopee.", date: "2026-04-01", readTime: "15 phút", category: "So sánh", featured: false },
  { slug: "webhook-la-gi", title: "Webhook Là Gì? Giải Thích Cho Người Không Biết Code", description: "Webhook vs API bằng ví dụ đời thường.", date: "2026-04-01", readTime: "8 phút", category: "Kiến thức", featured: false },
  { slug: "sme-chuyen-doi-so-2026", title: "80% SME Tìm Giải Pháp Nhưng Không Biết Bắt Đầu", description: "Lộ trình 90 ngày chuyển đổi số. Decision 433 hỗ trợ 500,000 SME.", date: "2026-04-01", readTime: "12 phút", category: "Kiến thức", featured: false },

  // Tutorials
  { slug: "chatbot-zalo-oa-n8n", title: "Cách Tạo Chatbot Zalo OA Bằng n8n", description: "79.6 triệu người dùng Zalo. Chatbot FAQ, tra cứu đơn, AI support.", date: "2026-04-01", readTime: "14 phút", category: "Hướng dẫn", featured: false },
  { slug: "telegram-bot-n8n", title: "Telegram Bot + n8n: Thông Báo & Quản Lý Từ Xa", description: "1 tỷ MAU Telegram. Bot thông báo đơn, tồn kho, báo cáo, quản lý team.", date: "2026-04-01", readTime: "14 phút", category: "Hướng dẫn", featured: false },
  { slug: "n8n-workflow-templates", title: "10 n8n Workflow Templates Miễn Phí Cho SME", description: "9,022 templates. 10 tốt nhất cho lead gen, e-commerce, CRM, AI.", date: "2026-04-01", readTime: "15 phút", category: "Hướng dẫn", featured: false },
  { slug: "google-sheets-n8n-automation", title: "Google Sheets + n8n: Biến Sheet Thành Hệ Thống", description: "1.1B+ users. 5 workflow biến bảng tính thành automation hub.", date: "2026-04-01", readTime: "12 phút", category: "Hướng dẫn", featured: false },
  { slug: "email-marketing-automation-n8n", title: "Email Marketing Automation Với n8n — ROI 3,600%", description: "ROI $36-45 per $1. Welcome sequence, cart abandonment, re-engagement.", date: "2026-04-01", readTime: "12 phút", category: "Marketing", featured: false },
  { slug: "tu-dong-dang-bai-social-media", title: "Tự Động Đăng Bài Social Media — 9 Nền Tảng, 1 Workflow", description: "514+ social media workflows. Đăng bài 9 nền tảng cùng lúc.", date: "2026-04-01", readTime: "12 phút", category: "Marketing", featured: false },
];
