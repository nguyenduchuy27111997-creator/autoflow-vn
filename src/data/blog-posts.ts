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
    description:
      "n8n là gì? Hướng dẫn A-Z: cài đặt, 400+ tích hợp, 70+ AI nodes, so sánh Zapier/Make, bảng giá VND, 5 workflow cho SME Việt Nam.",
    date: "2026-04-01",
    readTime: "20 phút",
    category: "Pillar",
    featured: true,
  },
  {
    slug: "dong-bo-shopee-misa",
    title: "Đồng Bộ Đơn Shopee → MISA Tự Động — Hết Nhập Tay, Hết Sai Sót",
    description:
      "4 workflow n8n đồng bộ đơn Shopee sang MISA. Tồn kho real-time, Zalo thông báo, báo cáo mỗi sáng — tiết kiệm 5 giờ/ngày.",
    date: "2026-04-01",
    readTime: "12 phút",
    category: "E-commerce",
    featured: false,
  },
  {
    slug: "lead-facebook-ads-bds",
    title: "Tự Động Hóa Lead Facebook Ads Cho BĐS — Phản Hồi Trong 30 Giây",
    description:
      "78% khách mua nhà chọn agent phản hồi đầu tiên. 4 workflow n8n giúp agency BĐS phản hồi lead Facebook trong 30 giây thay vì 15 giờ.",
    date: "2026-04-01",
    readTime: "12 phút",
    category: "Bất động sản",
    featured: false,
  },
  {
    slug: "nhac-lich-zalo-oa-giao-duc",
    title: "Nhắc Lịch Học Viên Qua Zalo OA — Giảm 80% Miss Lịch",
    description:
      "5 workflow Zalo OA cho trung tâm đào tạo: nhắc lịch 24h+2h, điểm danh, lead capture, báo cáo sĩ số. ZNS chỉ 200-800 VND/tin.",
    date: "2026-04-01",
    readTime: "12 phút",
    category: "Giáo dục",
    featured: false,
  },
  {
    slug: "ai-agent-n8n-sme",
    title: "AI Agent + n8n: Tự Động Hóa Thông Minh Cho SME Việt Nam 2026",
    description:
      "40% ứng dụng doanh nghiệp sẽ có AI Agent trong 2026 (Gartner). 5 use cases thực tế cho SME VN với 70+ AI nodes của n8n.",
    date: "2026-04-01",
    readTime: "14 phút",
    category: "AI",
    featured: false,
  },
  {
    slug: "5-dau-hieu-can-automation",
    title: "5 Dấu Hiệu Doanh Nghiệp Bạn Cần Tự Động Hóa — Ngay Bây Giờ",
    description:
      "94% doanh nghiệp đang làm việc lặp lại mà máy làm được. 5 dấu hiệu rõ ràng + data thực tế từ Gartner, MIT.",
    date: "2026-04-01",
    readTime: "10 phút",
    category: "Kiến thức",
    featured: false,
  },
  {
    slug: "n8n-vs-zapier",
    title: "n8n vs Zapier — SME Việt Nam Nên Chọn Cái Nào? 2026",
    description:
      "So sánh n8n vs Zapier: $60/năm vs $3,588/năm, tích hợp Zalo/MISA/Shopee, self-hosting. Cho doanh nghiệp Việt Nam.",
    date: "2026-04-01",
    readTime: "15 phút",
    category: "So sánh",
    featured: false,
  },
  {
    slug: "zalo-oa-fnb",
    title: "Tự Động Hóa Zalo OA Cho Nhà Hàng, Quán Cafe 2026",
    description:
      "4 workflow Zalo OA cho F&B: xác nhận đơn, nhắc đặt bàn, chăm sóc, khuyến mãi. Tăng 40% khách quay lại.",
    date: "2026-04-01",
    readTime: "12 phút",
    category: "F&B",
    featured: false,
  },
];
