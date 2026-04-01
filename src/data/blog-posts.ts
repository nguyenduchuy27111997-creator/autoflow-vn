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
    slug: "zalo-oa-fnb",
    title: "Tự Động Hóa Zalo OA Cho Nhà Hàng, Quán Cafe — Hướng Dẫn Chi Tiết 2026",
    description:
      "4 workflow Zalo OA cho F&B: xác nhận đơn hàng, nhắc lịch đặt bàn, chăm sóc sau bữa ăn, khuyến mãi cá nhân hóa. Tăng 40% khách quay lại.",
    date: "2026-04-01",
    readTime: "12 phút",
    category: "F&B",
    featured: true,
  },
];
