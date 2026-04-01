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
    slug: "dong-bo-shopee-misa",
    title: "Đồng Bộ Đơn Shopee → MISA Tự Động — Hết Nhập Tay, Hết Sai Sót",
    description:
      "Hướng dẫn 4 workflow n8n đồng bộ đơn hàng Shopee sang MISA tự động. Tồn kho real-time, Zalo thông báo, báo cáo mỗi sáng — tiết kiệm 5 giờ/ngày.",
    date: "2026-04-01",
    readTime: "12 phút",
    category: "E-commerce",
    featured: true,
  },
  {
    slug: "5-dau-hieu-can-automation",
    title: "5 Dấu Hiệu Doanh Nghiệp Bạn Cần Tự Động Hóa — Ngay Bây Giờ",
    description:
      "94% doanh nghiệp đang làm việc lặp lại mà máy làm được. 5 dấu hiệu rõ ràng cho thấy bạn đang mất tiền vì chưa tự động hóa.",
    date: "2026-04-01",
    readTime: "10 phút",
    category: "Kiến thức",
    featured: false,
  },
  {
    slug: "n8n-vs-zapier",
    title: "n8n vs Zapier — SME Việt Nam Nên Chọn Cái Nào? So Sánh Chi Tiết 2026",
    description:
      "So sánh n8n vs Zapier: giá ($60/năm vs $3,588/năm), tích hợp Zalo/MISA/Shopee, self-hosting, bảo mật data. Cho doanh nghiệp Việt Nam.",
    date: "2026-04-01",
    readTime: "15 phút",
    category: "So sánh",
    featured: false,
  },
  {
    slug: "zalo-oa-fnb",
    title: "Tự Động Hóa Zalo OA Cho Nhà Hàng, Quán Cafe — Hướng Dẫn Chi Tiết 2026",
    description:
      "4 workflow Zalo OA cho F&B: xác nhận đơn hàng, nhắc lịch đặt bàn, chăm sóc sau bữa ăn, khuyến mãi cá nhân hóa. Tăng 40% khách quay lại.",
    date: "2026-04-01",
    readTime: "12 phút",
    category: "F&B",
    featured: false,
  },
];
