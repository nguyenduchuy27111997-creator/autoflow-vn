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
    slug: "zalo-oa-automation",
    title: "Hướng dẫn tự động hóa Zalo OA cho doanh nghiệp — từ A đến Z",
    description:
      "Cách tích hợp Zalo Official Account với n8n để tự động gửi tin nhắn, follow-up khách hàng, và chăm sóc sau bán hàng — không cần biết code.",
    date: "2026-03-28",
    readTime: "8 phút",
    category: "Hướng dẫn",
    featured: true,
  },
  {
    slug: "tu-dong-hoa-shopee",
    title: "Tự động hóa đơn hàng Shopee — Hết nhập tay, hết sai sót",
    description:
      "Hướng dẫn 4 workflow n8n giúp shop Shopee tự động đồng bộ đơn, cập nhật tồn kho, reply review, và báo cáo — tiết kiệm 4+ giờ/ngày.",
    date: "2026-03-28",
    readTime: "10 phút",
    category: "Hướng dẫn",
    featured: false,
  },
  {
    slug: "huong-dan-n8n",
    title: "Hướng dẫn n8n tiếng Việt — Từ zero đến workflow đầu tiên",
    description:
      "n8n là gì? So sánh với Zapier, Make.com. Hướng dẫn cài đặt, 3 workflow đầu tay, và khi nào nên thuê chuyên gia — tất cả bằng tiếng Việt.",
    date: "2026-03-28",
    readTime: "12 phút",
    category: "Hướng dẫn",
    featured: false,
  },
  {
    slug: "n8n-vs-zapier",
    title: "So sánh n8n vs Zapier cho doanh nghiệp Việt Nam — Nên chọn cái nào?",
    description:
      "So sánh chi tiết n8n vs Zapier vs Make.com: giá, giới hạn, tích hợp Zalo/MISA/Shopee, bảo mật data.",
    date: "2026-03-29",
    readTime: "10 phút",
    category: "So sánh",
    featured: false,
  },
  {
    slug: "tich-hop-shopee-misa",
    title: "Cách tích hợp Shopee với MISA tự động — Hết nhập tay, hết sai sót",
    description:
      "Hướng dẫn đồng bộ đơn hàng Shopee sang MISA tự động bằng n8n. Thay thế 3-4 giờ nhập tay/ngày, 0 lỗi, real-time sync.",
    date: "2026-03-29",
    readTime: "8 phút",
    category: "Hướng dẫn",
    featured: false,
  },
  {
    slug: "nhac-lich-zalo-oa",
    title: "Tự động nhắc lịch học viên qua Zalo OA — Giảm 80% miss lịch",
    description:
      "Hướng dẫn setup nhắc lịch tự động qua Zalo OA cho trung tâm đào tạo bằng n8n. Miss lịch giảm từ 15% xuống 3%.",
    date: "2026-03-29",
    readTime: "8 phút",
    category: "Hướng dẫn",
    featured: false,
  },
  {
    slug: "chi-phi-tu-dong-hoa",
    title: "Chi phí tự động hóa cho SME — Bao nhiêu là đủ?",
    description:
      "Breakdown chi phí automation cho SME VN: so sánh thuê người vs automation, 3 gói giá, ROI thực tế, chi phí ẩn cần biết.",
    date: "2026-03-29",
    readTime: "8 phút",
    category: "Kiến thức",
    featured: false,
  },
  {
    slug: "5-dau-hieu-can-automation",
    title: "5 dấu hiệu doanh nghiệp bạn cần tự động hóa — ngay bây giờ",
    description:
      "5 dấu hiệu rõ ràng cho thấy doanh nghiệp đang mất tiền vì chưa tự động hóa. Kèm giải pháp và số liệu thực tế.",
    date: "2026-03-29",
    readTime: "7 phút",
    category: "Kiến thức",
    featured: false,
  },
];
