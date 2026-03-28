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
];
