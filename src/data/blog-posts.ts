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
  {
    slug: "n8n-la-gi",
    title: "n8n Là Gì? Hướng Dẫn Toàn Diện Cho Người Mới 2026",
    description: "n8n là gì? Hướng dẫn A-Z: cài đặt, 400+ tích hợp, 70+ AI nodes, so sánh Zapier/Make, bảng giá VND, 5 workflow cho SME Việt Nam.",
    date: "2026-04-01", readTime: "20 phút", category: "Pillar", featured: true,
  },
  {
    slug: "dong-bo-shopee-misa",
    title: "Đồng Bộ Đơn Shopee → MISA Tự Động — Hết Nhập Tay, Hết Sai Sót",
    description: "4 workflow n8n đồng bộ đơn Shopee sang MISA. Tồn kho real-time, Zalo thông báo, báo cáo mỗi sáng.",
    date: "2026-04-01", readTime: "12 phút", category: "E-commerce", featured: false,
  },
  {
    slug: "tiktok-shop-automation",
    title: "TikTok Shop + n8n: Tự Động Hóa Đơn Hàng Cho Seller Việt Nam",
    description: "TikTok Shop chiếm 41% thị phần TMĐT Việt Nam. 4 workflow n8n tự động xác nhận đơn, sync tồn kho, Zalo notify.",
    date: "2026-04-01", readTime: "12 phút", category: "E-commerce", featured: false,
  },
  {
    slug: "kiotviet-n8n-tich-hop",
    title: "KiotViet + n8n: Đồng Bộ Tồn Kho & Đơn Hàng Tự Động",
    description: "150,000+ cửa hàng dùng KiotViet. Hướng dẫn tích hợp n8n để đồng bộ tồn kho, đơn hàng, khách hàng tự động.",
    date: "2026-04-01", readTime: "12 phút", category: "E-commerce", featured: false,
  },
  {
    slug: "lead-facebook-ads-bds",
    title: "Tự Động Hóa Lead Facebook Ads Cho BĐS — Phản Hồi Trong 30 Giây",
    description: "78% khách mua nhà chọn agent phản hồi đầu tiên. 4 workflow n8n giúp agency BĐS phản hồi lead trong 30 giây.",
    date: "2026-04-01", readTime: "12 phút", category: "Bất động sản", featured: false,
  },
  {
    slug: "nhac-lich-zalo-oa-giao-duc",
    title: "Nhắc Lịch Học Viên Qua Zalo OA — Giảm 80% Miss Lịch",
    description: "5 workflow Zalo OA cho trung tâm đào tạo: nhắc lịch 24h+2h, điểm danh, lead capture, báo cáo sĩ số.",
    date: "2026-04-01", readTime: "12 phút", category: "Giáo dục", featured: false,
  },
  {
    slug: "automation-phong-kham",
    title: "Tự Động Hóa Phòng Khám: Nhắc Lịch, Xác Nhận, Chăm Sóc Bệnh Nhân",
    description: "Giảm 38-60% no-show bằng automation. 4 workflow nhắc lịch, xác nhận, feedback, tái hẹn qua Zalo OA.",
    date: "2026-04-01", readTime: "12 phút", category: "Y tế", featured: false,
  },
  {
    slug: "ai-agent-n8n-sme",
    title: "AI Agent + n8n: Tự Động Hóa Thông Minh Cho SME Việt Nam 2026",
    description: "40% ứng dụng doanh nghiệp sẽ có AI Agent trong 2026. 5 use cases thực tế cho SME VN với 70+ AI nodes.",
    date: "2026-04-01", readTime: "14 phút", category: "AI", featured: false,
  },
  {
    slug: "crm-tu-dong-startup",
    title: "CRM Tự Động Cho Startup B2B — Đừng Để Lead Rơi",
    description: "42 giờ — thời gian phản hồi lead trung bình B2B. 4 workflow n8n giúp startup không bỏ lỡ lead nào.",
    date: "2026-04-01", readTime: "12 phút", category: "Startup", featured: false,
  },
  {
    slug: "5-dau-hieu-can-automation",
    title: "5 Dấu Hiệu Doanh Nghiệp Bạn Cần Tự Động Hóa — Ngay Bây Giờ",
    description: "94% doanh nghiệp đang làm việc lặp lại mà máy làm được. 5 dấu hiệu + data từ Gartner, MIT.",
    date: "2026-04-01", readTime: "10 phút", category: "Kiến thức", featured: false,
  },
  {
    slug: "tu-lam-hay-thue",
    title: "Tự Làm Automation Hay Thuê Chuyên Gia? So Sánh Chi Tiết",
    description: "DIY $9,240/năm vs Agency $2,900. So sánh chi phí, thời gian, rủi ro giữa tự làm và thuê chuyên gia.",
    date: "2026-04-01", readTime: "12 phút", category: "Kiến thức", featured: false,
  },
  {
    slug: "n8n-vs-zapier",
    title: "n8n vs Zapier — SME Việt Nam Nên Chọn Cái Nào? 2026",
    description: "So sánh n8n vs Zapier: $60/năm vs $3,588/năm, tích hợp Zalo/MISA/Shopee, self-hosting.",
    date: "2026-04-01", readTime: "15 phút", category: "So sánh", featured: false,
  },
  {
    slug: "chatbot-zalo-oa-n8n",
    title: "Cách Tạo Chatbot Zalo OA Bằng n8n — Hướng Dẫn Từ Zero",
    description: "79.6 triệu người dùng Zalo. Hướng dẫn tạo chatbot FAQ, tra cứu đơn, AI support bằng n8n.",
    date: "2026-04-01", readTime: "14 phút", category: "Hướng dẫn", featured: false,
  },
  {
    slug: "webhook-la-gi",
    title: "Webhook Là Gì? Giải Thích Đơn Giản Cho Người Không Biết Code",
    description: "Webhook vs API — giải thích bằng ví dụ đời thường. Hướng dẫn dùng webhook trong n8n.",
    date: "2026-04-01", readTime: "8 phút", category: "Kiến thức", featured: false,
  },
  {
    slug: "n8n-workflow-templates",
    title: "10 n8n Workflow Templates Miễn Phí Cho SME Việt Nam",
    description: "9,022 templates trong thư viện n8n. 10 templates tốt nhất cho lead gen, e-commerce, CRM, báo cáo, AI.",
    date: "2026-04-01", readTime: "15 phút", category: "Hướng dẫn", featured: false,
  },
  {
    slug: "bao-cao-doanh-thu-tu-dong",
    title: "Báo Cáo Doanh Thu Tự Động Cho Chuỗi Cửa Hàng — Hết Gom Excel",
    description: "Chuỗi 50 store: 20 giờ/tuần gom báo cáo → 2 giờ. 3 workflow n8n tự động báo cáo ngày/tuần/tháng.",
    date: "2026-04-01", readTime: "12 phút", category: "Retail", featured: false,
  },
  {
    slug: "sme-chuyen-doi-so-2026",
    title: "80% SME Tìm Giải Pháp Công Nghệ Nhưng Không Biết Bắt Đầu — Lộ Trình 2026",
    description: "99% SME nộp thuế điện tử nhưng chỉ 14% đổi mới quy trình. Lộ trình 90 ngày chuyển đổi số thực tế.",
    date: "2026-04-01", readTime: "12 phút", category: "Kiến thức", featured: false,
  },
  {
    slug: "zalo-oa-fnb",
    title: "Tự Động Hóa Zalo OA Cho Nhà Hàng, Quán Cafe 2026",
    description: "4 workflow Zalo OA cho F&B: xác nhận đơn, nhắc đặt bàn, chăm sóc, khuyến mãi. Tăng 40% khách quay lại.",
    date: "2026-04-01", readTime: "12 phút", category: "F&B", featured: false,
  },
];
