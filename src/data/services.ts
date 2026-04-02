export interface PainPoint {
  stat: string;
  title: string;
  desc: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface Workflow {
  name: string;
  flow: string;
  time: string;
  color: string;
}

export interface Integration {
  name: string;
  icon: string;
}

export interface PricingTier {
  name: string;
  badge?: string;
  desc: string;
  price: string;
  features: string[];
  isPrimary: boolean;
  ctaText: string;
}

export interface ROIConfig {
  title: string;
  subtitle: string;
  sliderA: { label: string; min: number; max: number; default: number };
  sliderB: { label: string; min: number; max: number; default: number };
  salary: number;
  savingsRate: number;
  costLabel: string;
}

export interface ServiceConfig {
  slug: string;
  industry: string;
  badge: { text: string; bgClass: string; textClass: string };
  hero: {
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    description: string;
    ctaText: string;
  };
  integrationsLabel: string;
  integrations: Integration[];
  painPointsSection: { title: string; subtitle: string };
  painPointHoverBorder: string;
  painPoints: PainPoint[];
  workflowsSection: { title: string; highlight: string; subtitle: string };
  workflows: Workflow[];
  roi: ROIConfig;
  pricingTitle: string;
  pricing: PricingTier[];
  complianceBadges: string[];
  faqs: FAQ[];
  cta: { title: string; subtitle: string; buttonText: string };
  fbPixelContentName: string;
  metadata: { title: string; description: string };
}

// ─── E-commerce ──────────────────────────────────────────────

export const ecommerceService: ServiceConfig = {
  slug: "e-commerce",
  industry: "E-commerce",
  badge: { text: "Dich vu cho E-commerce", bgClass: "bg-[#EE4D2D]/10", textClass: "text-[#EE4D2D]" },
  hero: {
    titlePrefix: "Tu dong hoa ",
    titleHighlight: "shop online",
    titleSuffix: " — tu don hang den cham khach",
    description:
      "AutoFlow giup shop Shopee, Tiki, TikTok Shop tu dong dong bo don hang, quan ly ton kho, reply review, va follow-up khach — giam 65% thoi gian van hanh, 0 loi nhap tay.",
    ctaText: "Nhan audit mien phi cho shop",
  },
  integrationsLabel: "Tich hop truc tiep voi he sinh thai e-commerce Viet Nam",
  integrations: [
    { name: "Shopee", icon: "\ud83d\uded2" },
    { name: "Tiki", icon: "\ud83d\udcd8" },
    { name: "TikTok Shop", icon: "\ud83c\udfb5" },
    { name: "Lazada", icon: "\ud83d\udce6" },
    { name: "MISA", icon: "\ud83d\udcca" },
    { name: "KiotViet", icon: "\ud83c\udfea" },
    { name: "Zalo OA", icon: "\ud83d\udcac" },
    { name: "Haravan", icon: "\ud83d\udecd\ufe0f" },
    { name: "Sapo", icon: "\ud83d\udce6" },
    { name: "Google Sheets", icon: "\ud83d\udcd7" },
  ],
  painPointsSection: {
    title: "B\u1ea1n \u0111ang g\u1eb7p v\u1ea5n \u0111\u1ec1 n\u00e0o?",
    subtitle: "\u0110\u00e2y l\u00e0 4 pain points ph\u1ed5 bi\u1ebfn nh\u1ea5t c\u1ee7a shop e-commerce VN",
  },
  painPointHoverBorder: "hover:border-red-200",
  painPoints: [
    {
      stat: "4.5 gi\u1edd/ng\u00e0y",
      title: "Nh\u1eadp \u0111\u01a1n t\u1eeb 3\u20135 s\u00e0n b\u1eb1ng tay",
      desc: "Shopee, Tiki, TikTok Shop, Lazada \u2014 m\u1ed7i s\u00e0n m\u1ed9t giao di\u1ec7n. Nh\u00e2n vi\u00ean copy-paste t\u1eeb s\u00e1ng \u0111\u1ebfn chi\u1ec1u, sai 1 s\u1ed1 l\u00e0 m\u1ea5t ti\u1ec1n.",
    },
    {
      stat: "8\u201310 l\u1ed7i/tu\u1ea7n",
      title: "Sai t\u1ed3n kho li\u00ean t\u1ee5c",
      desc: "B\u00e1n tr\u00ean s\u00e0n A nh\u01b0ng ch\u01b0a update s\u00e0n B \u2192 oversell \u2192 ph\u1ea3i h\u1ee7y \u0111\u01a1n \u2192 kh\u00e1ch \u0111\u00e1nh gi\u00e1 x\u1ea5u \u2192 m\u1ea5t uy t\u00edn.",
    },
    {
      stat: "67%",
      title: "Lead m\u1ea5t v\u00ec reply ch\u1eadm",
      desc: "Kh\u00e1ch inbox Zalo l\u00fac 11 gi\u1edd \u0111\u00eam h\u1ecfi gi\u00e1. S\u00e1ng h\u00f4m sau reply th\u00ec h\u1ecd \u0111\u00e3 mua b\u00ean \u0111\u1ed1i th\u1ee7.",
    },
    {
      stat: "3 ng\u00e0y",
      title: "B\u00e1o c\u00e1o cu\u1ed1i th\u00e1ng gom t\u1eeb 5 ngu\u1ed3n",
      desc: "D\u1eef li\u1ec7u n\u1eb1m r\u1ea3i r\u00e1c: Shopee Seller Center, MISA, Google Sheet, group Zalo. T\u1ed5ng h\u1ee3p b\u1eb1ng tay, sai s\u1ed1 l\u00e0 chuy\u1ec7n th\u01b0\u1eddng.",
    },
  ],
  workflowsSection: {
    title: "5 workflows AutoFlow build cho ",
    highlight: "E-commerce",
    subtitle: "M\u1ed7i workflow thay th\u1ebf h\u00e0ng gi\u1edd l\u00e0m vi\u1ec7c th\u1ee7 c\u00f4ng m\u1ed7i ng\u00e0y",
  },
  workflows: [
    {
      name: "\u0110\u1ed3ng b\u1ed9 \u0111\u01a1n h\u00e0ng \u0111a k\u00eanh",
      flow: "\u0110\u01a1n m\u1edbi t\u1eeb Shopee/Tiki/TikTok Shop \u2192 T\u1ef1 \u0111\u1ed9ng l\u01b0u v\u00e0o Google Sheet \u2192 \u0110\u1ed3ng b\u1ed9 sang MISA \u2192 C\u1eadp nh\u1eadt t\u1ed3n kho real-time",
      time: "Thay th\u1ebf 3\u20134 gi\u1edd nh\u1eadp tay/ng\u00e0y",
      color: "#EE4D2D",
    },
    {
      name: "Auto-reply review & escalation",
      flow: "Review m\u1edbi tr\u00ean Shopee \u2192 AI ph\u00e2n t\u00edch sentiment \u2192 Review t\u1ed1t: reply c\u1ea3m \u01a1n t\u1ef1 \u0111\u1ed9ng \u2192 Review x\u1ea5u: escalate cho manager qua Zalo",
      time: "Response time: 30 gi\u00e2y thay v\u00ec 12 gi\u1edd",
      color: "#F59E0B",
    },
    {
      name: "Lead capture \u2192 CRM \u2192 Zalo OA",
      flow: "Lead t\u1eeb Facebook/Website \u2192 L\u01b0u v\u00e0o CRM \u2192 Zalo OA g\u1eedi tin ch\u00e0o h\u00e0ng \u2192 Nh\u1eafc follow-up ng\u00e0y 3, 7 n\u1ebfu ch\u01b0a reply",
      time: "0% lead b\u1ecb miss, 100% \u0111\u01b0\u1ee3c follow-up",
      color: "#0068FF",
    },
    {
      name: "B\u00e1o c\u00e1o t\u1ed3n kho t\u1ef1 \u0111\u1ed9ng",
      flow: "M\u1ed7i s\u00e1ng th\u1ee9 2 \u2192 n8n k\u00e9o data t\u1eeb KiotViet + Shopee \u2192 T\u1ed5ng h\u1ee3p b\u00e1o c\u00e1o \u2192 G\u1eedi qua Zalo/Email cho qu\u1ea3n l\u00fd",
      time: "0 ph\u00fat thay v\u00ec 3 ng\u00e0y gom data",
      color: "#10B981",
    },
    {
      name: "Upsell sequence t\u1ef1 \u0111\u1ed9ng",
      flow: "Kh\u00e1ch mua h\u00e0ng \u2192 Sau 7 ng\u00e0y: Zalo OA g\u1eedi tin kh\u1ea3o s\u00e1t \u2192 Sau 14 ng\u00e0y: g\u1ee3i \u00fd s\u1ea3n ph\u1ea9m li\u00ean quan \u2192 Sau 30 ng\u00e0y: voucher kh\u00e1ch h\u00e0ng th\u00e2n thi\u1ebft",
      time: "T\u0103ng repeat purchase rate 15\u201325%",
      color: "#6366F1",
    },
  ],
  roi: {
    title: "T\u00ednh ROI cho shop c\u1ee7a b\u1ea1n",
    subtitle: "Nh\u1eadp s\u1ed1 li\u1ec7u th\u1ef1c t\u1ebf \u2014 xem b\u1ea1n \u0111ang m\u1ea5t bao nhi\u00eau cho vi\u1ec7c nh\u1eadp tay",
    sliderA: { label: "Nh\u00e2n vi\u00ean nh\u1eadp \u0111\u01a1n/qu\u1ea3n l\u00fd s\u00e0n", min: 1, max: 10, default: 3 },
    sliderB: { label: "Gi\u1edd nh\u1eadp tay/ng\u00e0y m\u1ed7i ng\u01b0\u1eddi", min: 1, max: 8, default: 4 },
    salary: 11,
    savingsRate: 0.65,
    costLabel: "tri\u1ec7u \u0111/n\u0103m chi ph\u00ed l\u01b0\u01a1ng",
  },
  pricingTitle: "G\u00f3i ph\u00f9 h\u1ee3p cho E-commerce",
  pricing: [
    {
      name: "Pilot",
      badge: "R\u00e0o c\u1ea3n th\u1ea5p nh\u1ea5t",
      desc: "Th\u1eed tr\u01b0\u1edbc, kh\u00f4ng r\u1ee7i ro",
      price: "5\u20138",
      features: ["1 workflow tr\u1ecdn v\u1eb9n", "Timeline: 1 tu\u1ea7n", "Th\u1ea5y k\u1ebft qu\u1ea3 ngay"],
      isPrimary: true,
      ctaText: "B\u1eaft \u0111\u1ea7u Pilot",
    },
    {
      name: "Starter",
      desc: "Cho shop nh\u1ecf 1\u20135 ng\u01b0\u1eddi",
      price: "8\u201315",
      features: ["1 workflow + m\u1edf r\u1ed9ng", "Timeline: 1\u20132 tu\u1ea7n", "Support 7 ng\u00e0y"],
      isPrimary: true,
      ctaText: "Audit mi\u1ec5n ph\u00ed",
    },
    {
      name: "Growth",
      desc: "Cho shop 5\u201320 nh\u00e2n vi\u00ean",
      price: "20\u201335",
      features: ["3\u20135 workflows", "Training 2h cho team", "Support 14 ng\u00e0y", "Timeline: 3\u20134 tu\u1ea7n"],
      isPrimary: false,
      ctaText: "Audit mi\u1ec5n ph\u00ed",
    },
    {
      name: "Scale",
      desc: "Cho shop 20\u201350 ng\u01b0\u1eddi, nhi\u1ec1u k\u00eanh",
      price: "50\u201380",
      features: [
        "8\u201312 workflows to\u00e0n b\u1ed9",
        "n8n self-hosted",
        "Training 2 bu\u1ed5i + 30-day warranty",
        "Timeline: 6\u20138 tu\u1ea7n",
      ],
      isPrimary: false,
      ctaText: "Audit mi\u1ec5n ph\u00ed",
    },
  ],
  complianceBadges: [
    "Tu\u00e2n th\u1ee7 Ngh\u1ecb \u0111\u1ecbnh 123 v\u1ec1 h\u00f3a \u0111\u01a1n \u0111i\u1ec7n t\u1eed",
    "Data l\u01b0u tr\u1eef t\u1ea1i Vi\u1ec7t Nam, tu\u00e2n th\u1ee7 quy \u0111\u1ecbnh b\u1ea3o m\u1eadt d\u1eef li\u1ec7u",
  ],
  faqs: [
    {
      q: "T\u00edch h\u1ee3p \u0111\u01b0\u1ee3c v\u1edbi s\u00e0n n\u00e0o?",
      a: "AutoFlow t\u00edch h\u1ee3p tr\u1ef1c ti\u1ebfp v\u1edbi Shopee, TikTok Shop, Lazada, Tiki qua API ch\u00ednh th\u1ee9c. Ngo\u00e0i ra c\u00f2n h\u1ed7 tr\u1ee3 Haravan, KiotViet, MISA, Zalo OA v\u00e0 Google Sheets.",
    },
    {
      q: "N\u1ebfu t\u00f4i b\u00e1n tr\u00ean 3-4 s\u00e0n c\u00f9ng l\u00fac th\u00ec sao?",
      a: "\u0110\u00e2y ch\u00ednh l\u00e0 th\u1ebf m\u1ea1nh c\u1ee7a AutoFlow. Workflow t\u1ef1 \u0111\u1ed9ng \u0111\u1ed3ng b\u1ed9 \u0111\u01a1n h\u00e0ng, t\u1ed3n kho, gi\u00e1 b\u00e1n gi\u1eefa t\u1ea5t c\u1ea3 c\u00e1c s\u00e0n theo th\u1eddi gian th\u1ef1c \u2014 kh\u00f4ng c\u1ea7n nh\u1eadp tay t\u1eebng s\u00e0n.",
    },
    {
      q: "C\u00f3 \u1ea3nh h\u01b0\u1edfng \u0111\u1ebfn t\u00e0i kho\u1ea3n s\u00e0n c\u1ee7a t\u00f4i kh\u00f4ng?",
      a: "Kh\u00f4ng. AutoFlow s\u1eed d\u1ee5ng API ch\u00ednh th\u1ee9c c\u1ee7a t\u1eebng s\u00e0n, ho\u1ea1t \u0111\u1ed9ng \u0111\u00fang quy \u0111\u1ecbnh. Kh\u00f4ng d\u00f9ng tool hack hay b\u00ean th\u1ee9 ba kh\u00f4ng \u0111\u01b0\u1ee3c ph\u00e9p.",
    },
    {
      q: "M\u1ea5t bao l\u00e2u \u0111\u1ec3 setup cho shop?",
      a: "G\u00f3i Starter (1 workflow): 1-2 tu\u1ea7n. G\u00f3i Growth (3-5 workflows): 3-4 tu\u1ea7n. B\u1ea1n th\u1ea5y k\u1ebft qu\u1ea3 ngay t\u1eeb workflow \u0111\u1ea7u ti\u00ean.",
    },
    {
      q: "Chi ph\u00ed h\u00e0ng th\u00e1ng sau khi setup xong?",
      a: "Ch\u1ec9 ph\u00ed VPS hosting (~100-200k/th\u00e1ng) \u0111\u1ec3 ch\u1ea1y n8n. Kh\u00f4ng c\u00f3 ph\u00ed subscription hay gi\u1edbi h\u1ea1n s\u1ed1 l\u01b0\u1ee3ng \u0111\u01a1n x\u1eed l\u00fd. Ho\u1eb7c ch\u1ecdn g\u00f3i retainer 8-15 tri\u1ec7u/th\u00e1ng n\u1ebfu c\u1ea7n b\u1ea3o tr\u00ec + ph\u00e1t tri\u1ec3n th\u00eam.",
    },
  ],
  cta: {
    title: "Shop b\u1ea1n \u0111ang m\u1ea5t bao nhi\u00eau gi\u1edd cho vi\u1ec7c nh\u1eadp tay?",
    subtitle:
      "30 ph\u00fat audit mi\u1ec5n ph\u00ed \u2014 m\u00ecnh ch\u1ec9 ra c\u1ee5 th\u1ec3 workflow n\u00e0o n\u00ean t\u1ef1 \u0111\u1ed9ng h\u00f3a tr\u01b0\u1edbc.",
    buttonText: "Audit mi\u1ec5n ph\u00ed cho shop",
  },
  fbPixelContentName: "D\u1ecbch v\u1ee5 E-commerce",
  metadata: {
    title: "T\u1ef1 \u0111\u1ed9ng h\u00f3a E-commerce | AutoFlow",
    description:
      "AutoFlow gi\u00fap shop Shopee, Tiki, TikTok Shop t\u1ef1 \u0111\u1ed9ng \u0111\u1ed3ng b\u1ed9 \u0111\u01a1n h\u00e0ng, qu\u1ea3n l\u00fd t\u1ed3n kho, reply review, v\u00e0 follow-up kh\u00e1ch.",
  },
};

// ─── F&B ─────────────────────────────────────────────────────

export const fnbService: ServiceConfig = {
  slug: "fnb",
  industry: "F&B",
  badge: {
    text: "D\u1ecbch v\u1ee5 cho F&B / Nh\u00e0 h\u00e0ng",
    bgClass: "bg-orange-50",
    textClass: "text-orange-600",
  },
  hero: {
    titlePrefix: "T\u1ef1 \u0111\u1ed9ng h\u00f3a ",
    titleHighlight: "nh\u00e0 h\u00e0ng & qu\u00e1n cafe",
    titleSuffix: " \u2014 t\u1eeb \u0111\u01a1n h\u00e0ng \u0111\u1ebfn ch\u0103m kh\u00e1ch",
    description:
      "AutoFlow gi\u00fap chu\u1ed7i F&B t\u1ef1 \u0111\u1ed9ng \u0111\u1ed3ng b\u1ed9 \u0111\u01a1n delivery, ch\u0103m s\u00f3c kh\u00e1ch quay l\u1ea1i, qu\u1ea3n l\u00fd ca l\u00e0m, c\u1ea3nh b\u00e1o t\u1ed3n kho, v\u00e0 b\u00e1o c\u00e1o doanh thu \u0111a chi nh\u00e1nh \u2014 gi\u1ea3m 55% th\u1eddi gian v\u1eadn h\u00e0nh.",
    ctaText: "Nh\u1eadn audit mi\u1ec5n ph\u00ed cho nh\u00e0 h\u00e0ng",
  },
  integrationsLabel:
    "T\u00edch h\u1ee3p v\u1edbi h\u1ec7 sinh th\u00e1i F&B Vi\u1ec7t Nam \u2014 h\u1ed7 tr\u1ee3 nhi\u1ec1u h\u1ec7 th\u1ed1ng POS ph\u1ed5 bi\u1ebfn",
  integrations: [
    { name: "GrabFood", icon: "\ud83d\udeb5" },
    { name: "ShopeeFood", icon: "\ud83d\uded2" },
    { name: "Zalo OA", icon: "\ud83d\udcac" },
    { name: "Google Sheets", icon: "\ud83d\udcd7" },
    { name: "KiotViet", icon: "\ud83c\udfea" },
    { name: "iPOS", icon: "\ud83d\udcf1" },
    { name: "CukCuk", icon: "\ud83c\udf7d\ufe0f" },
    { name: "Sapo POS", icon: "\ud83d\udce6" },
    { name: "MISA", icon: "\ud83d\udcca" },
    { name: "Facebook", icon: "\ud83d\udce3" },
    { name: "Telegram", icon: "\u2708\ufe0f" },
  ],
  painPointsSection: {
    title: "Nh\u00e0 h\u00e0ng b\u1ea1n \u0111ang g\u1eb7p v\u1ea5n \u0111\u1ec1 n\u00e0o?",
    subtitle: "4 pain points ph\u1ed5 bi\u1ebfn nh\u1ea5t c\u1ee7a chu\u1ed7i F&B VN",
  },
  painPointHoverBorder: "hover:border-orange-200",
  painPoints: [
    {
      stat: "3 gi\u1edd/ng\u00e0y",
      title: "Nh\u1eadp \u0111\u01a1n t\u1eeb GrabFood, ShopeeFood b\u1eb1ng tay",
      desc: "M\u1ed7i app delivery m\u1ed9t giao di\u1ec7n. Nh\u00e2n vi\u00ean ph\u1ea3i \u0111\u1ed1i chi\u1ebfu \u0111\u01a1n t\u1eeb 3\u20134 n\u1ec1n t\u1ea3ng v\u1edbi POS/s\u1ed5 s\u00e1ch. Gi\u1edd cao \u0111i\u1ec3m sai \u0111\u01a1n l\u00e0 m\u1ea5t kh\u00e1ch.",
    },
    {
      stat: "30%",
      title: "Kh\u00e1ch kh\u00f4ng quay l\u1ea1i v\u00ec kh\u00f4ng ch\u0103m s\u00f3c",
      desc: "Kh\u00e1ch \u0103n xong, \u0111i lu\u00f4n. Kh\u00f4ng ai follow-up, kh\u00f4ng ai g\u1eedi \u01b0u \u0111\u00e3i quay l\u1ea1i. M\u1ed7i kh\u00e1ch m\u1ea5t = m\u1ea5t 5\u201310 b\u1eefa \u0103n ti\u1ec1m n\u0103ng.",
    },
    {
      stat: "45 ph\u00fat",
      title: "Ki\u1ec3m k\u00ea t\u1ed3n kho nguy\u00ean li\u1ec7u m\u1ed7i ng\u00e0y",
      desc: "\u0110\u1ebfm tay, ghi s\u1ed5, so v\u1edbi \u0111\u01a1n b\u00e1n ra. Sai l\u1ec7ch \u2192 mua th\u1eeba nguy\u00ean li\u1ec7u \u2192 hao h\u1ee5t \u2192 \u1ea3nh h\u01b0\u1edfng l\u1ee3i nhu\u1eadn.",
    },
    {
      stat: "2 ng\u00e0y",
      title: "B\u00e1o c\u00e1o doanh thu \u0111a chi nh\u00e1nh",
      desc: "3 chi nh\u00e1nh, m\u1ed7i n\u01a1i b\u00e1o kh\u00e1c nhau. Cu\u1ed1i tu\u1ea7n qu\u1ea3n l\u00fd m\u1ea5t 2 ng\u00e0y t\u1ed5ng h\u1ee3p doanh thu, chi ph\u00ed, food cost. Quy\u1ebft \u0111\u1ecbnh ch\u1eadm v\u00ec thi\u1ebfu data.",
    },
  ],
  workflowsSection: {
    title: "5 workflows AutoFlow build cho ",
    highlight: "F&B",
    subtitle: "M\u1ed7i workflow gi\u1ea3i quy\u1ebft 1 pain point v\u1eadn h\u00e0nh h\u00e0ng ng\u00e0y",
  },
  workflows: [
    {
      name: "\u0110\u1ed3ng b\u1ed9 \u0111\u01a1n delivery \u2192 POS/Sheet",
      flow: "\u0110\u01a1n m\u1edbi t\u1eeb GrabFood/ShopeeFood/Baemin \u2192 n8n t\u1ef1 \u0111\u1ed9ng l\u01b0u v\u00e0o Google Sheet/POS \u2192 \u0110\u1ed1i chi\u1ebfu doanh thu \u2192 C\u1eadp nh\u1eadt t\u1ed3n kho nguy\u00ean li\u1ec7u",
      time: "Thay th\u1ebf 3 gi\u1edd nh\u1eadp \u0111\u01a1n/ng\u00e0y",
      color: "#00B14F",
    },
    {
      name: "Ch\u0103m s\u00f3c kh\u00e1ch quay l\u1ea1i qua Zalo",
      flow: "Kh\u00e1ch check-in/\u0111\u1eb7t b\u00e0n \u2192 L\u01b0u S\u0110T \u2192 Sau 7 ng\u00e0y: Zalo OA g\u1eedi 'C\u1ea3m \u01a1n, gi\u1ea3m 10% l\u1ea7n t\u1edbi' \u2192 Sau 30 ng\u00e0y: 'L\u00e2u r\u1ed3i ch\u01b0a gh\u00e9, t\u1eb7ng m\u00f3n khai v\u1ecb'",
      time: "T\u0103ng repeat rate 20\u201335%",
      color: "#EE4D2D",
    },
    {
      name: "Nh\u1eafc ca l\u00e0m & qu\u1ea3n l\u00fd nh\u00e2n s\u1ef1",
      flow: "L\u1ecbch ca trong Google Sheet \u2192 Zalo nh\u1eafc nh\u00e2n vi\u00ean 12h tr\u01b0\u1edbc ca \u2192 Nh\u00e2n vi\u00ean x\u00e1c nh\u1eadn/\u0111\u1ed5i ca \u2192 Qu\u1ea3n l\u00fd nh\u1eadn th\u00f4ng b\u00e1o n\u1ebfu ca tr\u1ed1ng",
      time: "0 cu\u1ed9c g\u1ecdi nh\u1eafc ca, 100% x\u00e1c nh\u1eadn",
      color: "#F59E0B",
    },
    {
      name: "C\u1ea3nh b\u00e1o t\u1ed3n kho nguy\u00ean li\u1ec7u",
      flow: "T\u1ed3n kho d\u01b0\u1edbi m\u1ee9c t\u1ed1i thi\u1ec3u \u2192 n8n g\u1eedi alert cho b\u1ebfp tr\u01b0\u1edfng/qu\u1ea3n l\u00fd qua Zalo \u2192 T\u1ef1 t\u1ea1o \u0111\u01a1n \u0111\u1eb7t h\u00e0ng nh\u00e0 cung c\u1ea5p \u2192 Theo d\u00f5i giao h\u00e0ng",
      time: "H\u1ebft h\u1ebft nguy\u00ean li\u1ec7u gi\u1eefa ca b\u1eadn",
      color: "#6366F1",
    },
    {
      name: "B\u00e1o c\u00e1o doanh thu t\u1ef1 \u0111\u1ed9ng \u0111a chi nh\u00e1nh",
      flow: "M\u1ed7i t\u1ed1i 10 gi\u1edd \u2192 n8n k\u00e9o data t\u1eeb POS/delivery apps \u2192 T\u1ed5ng h\u1ee3p: doanh thu, s\u1ed1 \u0111\u01a1n, food cost, top m\u00f3n b\u00e1n ch\u1ea1y \u2192 G\u1eedi qua Zalo cho owner",
      time: "B\u00e1o c\u00e1o h\u00e0ng ng\u00e0y thay v\u00ec h\u00e0ng tu\u1ea7n",
      color: "#0068FF",
    },
  ],
  roi: {
    title: "T\u00ednh ROI cho nh\u00e0 h\u00e0ng c\u1ee7a b\u1ea1n",
    subtitle:
      "Nh\u1eadp s\u1ed1 li\u1ec7u \u2014 xem b\u1ea1n \u0111ang m\u1ea5t bao nhi\u00eau cho vi\u1ec7c v\u1eadn h\u00e0nh th\u1ee7 c\u00f4ng",
    sliderA: {
      label: "Nh\u00e2n vi\u00ean admin/k\u1ebf to\u00e1n/qu\u1ea3n l\u00fd",
      min: 1,
      max: 10,
      default: 3,
    },
    sliderB: {
      label: "Gi\u1edd nh\u1eadp \u0111\u01a1n + b\u00e1o c\u00e1o/ng\u00e0y",
      min: 1,
      max: 8,
      default: 3,
    },
    salary: 9,
    savingsRate: 0.55,
    costLabel: "tri\u1ec7u \u0111/n\u0103m chi ph\u00ed v\u1eadn h\u00e0nh",
  },
  pricingTitle: "G\u00f3i ph\u00f9 h\u1ee3p cho F&B",
  pricing: [
    {
      name: "Pilot",
      badge: "R\u00e0o c\u1ea3n th\u1ea5p nh\u1ea5t",
      desc: "Th\u1eed tr\u01b0\u1edbc, kh\u00f4ng r\u1ee7i ro",
      price: "5\u20138",
      features: ["1 workflow tr\u1ecdn v\u1eb9n", "Timeline: 1 tu\u1ea7n", "Th\u1ea5y k\u1ebft qu\u1ea3 ngay"],
      isPrimary: true,
      ctaText: "B\u1eaft \u0111\u1ea7u Pilot",
    },
    {
      name: "Starter",
      desc: "Cho qu\u00e1n \u0111\u01a1n l\u1ebb",
      price: "8\u201315",
      features: ["1 workflow + m\u1edf r\u1ed9ng", "Timeline: 1\u20132 tu\u1ea7n", "Support 7 ng\u00e0y"],
      isPrimary: true,
      ctaText: "Audit mi\u1ec5n ph\u00ed",
    },
    {
      name: "Growth",
      desc: "Cho nh\u00e0 h\u00e0ng 1\u20133 chi nh\u00e1nh",
      price: "20\u201335",
      features: [
        "3\u20135 workflows",
        "Training 2h cho qu\u1ea3n l\u00fd",
        "Support 14 ng\u00e0y",
        "Timeline: 3\u20134 tu\u1ea7n",
      ],
      isPrimary: false,
      ctaText: "Audit mi\u1ec5n ph\u00ed",
    },
    {
      name: "Scale",
      desc: "Cho chu\u1ed7i 4+ chi nh\u00e1nh",
      price: "50\u201380",
      features: [
        "8\u201312 workflows to\u00e0n b\u1ed9",
        "n8n self-hosted",
        "Training 2 bu\u1ed5i + 30-day warranty",
        "Timeline: 6\u20138 tu\u1ea7n",
      ],
      isPrimary: false,
      ctaText: "Audit mi\u1ec5n ph\u00ed",
    },
  ],
  complianceBadges: [
    "H\u1ed7 tr\u1ee3 h\u00f3a \u0111\u01a1n \u0111i\u1ec7n t\u1eed theo quy \u0111\u1ecbnh",
    "Data l\u01b0u tr\u1eef t\u1ea1i Vi\u1ec7t Nam, tu\u00e2n th\u1ee7 quy \u0111\u1ecbnh b\u1ea3o m\u1eadt d\u1eef li\u1ec7u",
  ],
  faqs: [
    {
      q: "Nh\u00e0 h\u00e0ng t\u00f4i nh\u1ecf, c\u00f3 c\u1ea7n t\u1ef1 \u0111\u1ed9ng h\u00f3a kh\u00f4ng?",
      a: "N\u1ebfu b\u1ea1n \u0111ang m\u1ea5t 2+ gi\u1edd/ng\u00e0y cho nh\u1eadp li\u1ec7u, qu\u1ea3n l\u00fd \u0111\u01a1n online, ho\u1eb7c b\u00e1o c\u00e1o \u2014 th\u00ec c\u00f3. AutoFlow Starter ch\u1ec9 t\u1eeb 8 tri\u1ec7u, r\u1ebb h\u01a1n n\u1eeda th\u00e1ng l\u01b0\u01a1ng nh\u00e2n vi\u00ean.",
    },
    {
      q: "T\u00edch h\u1ee3p v\u1edbi POS n\u00e0o?",
      a: "H\u1ed7 tr\u1ee3 KiotViet, iPOS, CukCuk, Sapo POS v\u00e0 c\u00e1c POS c\u00f3 API. AutoFlow t\u01b0\u01a1ng th\u00edch v\u1edbi h\u1ea7u h\u1ebft h\u1ec7 th\u1ed1ng POS ph\u1ed5 bi\u1ebfn t\u1ea1i Vi\u1ec7t Nam. Ngo\u00e0i ra t\u00edch h\u1ee3p v\u1edbi GrabFood, ShopeeFood, Zalo OA cho \u0111\u01a1n online.",
    },
    {
      q: "C\u00f3 qu\u1ea3n l\u00fd \u0111\u01b0\u1ee3c nguy\u00ean v\u1eadt li\u1ec7u kh\u00f4ng?",
      a: "C\u00f3. Workflow t\u1ef1 \u0111\u1ed9ng tr\u1eeb t\u1ed3n kho nguy\u00ean v\u1eadt li\u1ec7u theo \u0111\u01a1n b\u00e1n, th\u00f4ng b\u00e1o khi g\u1ea7n h\u1ebft, v\u00e0 t\u1ea1o \u0111\u1ec1 xu\u1ea5t nh\u1eadp h\u00e0ng t\u1ef1 \u0111\u1ed9ng.",
    },
    {
      q: "T\u00f4i c\u00f3 3 chi nh\u00e1nh, qu\u1ea3n l\u00fd chung \u0111\u01b0\u1ee3c kh\u00f4ng?",
      a: "\u0110\u01b0\u1ee3c. AutoFlow t\u1ed5ng h\u1ee3p d\u1eef li\u1ec7u t\u1eeb t\u1ea5t c\u1ea3 chi nh\u00e1nh v\u00e0o 1 dashboard. B\u00e1o c\u00e1o doanh thu, t\u1ed3n kho, chi ph\u00ed theo t\u1eebng chi nh\u00e1nh ho\u1eb7c t\u1ed5ng.",
    },
    {
      q: "N\u1ebfu internet qu\u00e1n b\u1ecb m\u1ea5t th\u00ec sao?",
      a: "Workflow ch\u1ea1y tr\u00ean cloud server ri\u00eang, kh\u00f4ng ph\u1ee5 thu\u1ed9c internet qu\u00e1n. Khi internet qu\u00e1n kh\u00f4i ph\u1ee5c, d\u1eef li\u1ec7u t\u1ef1 \u0111\u1ed3ng b\u1ed9 l\u1ea1i. \u0110\u01a1n offline v\u1eabn \u0111\u01b0\u1ee3c x\u1eed l\u00fd khi k\u1ebft n\u1ed1i l\u1ea1i.",
    },
  ],
  cta: {
    title: "Nh\u00e0 h\u00e0ng b\u1ea1n \u0111ang m\u1ea5t bao nhi\u00eau kh\u00e1ch v\u00ec kh\u00f4ng ch\u0103m s\u00f3c?",
    subtitle:
      "30 ph\u00fat audit mi\u1ec5n ph\u00ed \u2014 m\u00ecnh ph\u00e2n t\u00edch v\u1eadn h\u00e0nh v\u00e0 ch\u1ec9 ra workflow n\u00e0o t\u0103ng kh\u00e1ch quay l\u1ea1i ngay.",
    buttonText: "Audit mi\u1ec5n ph\u00ed cho nh\u00e0 h\u00e0ng",
  },
  fbPixelContentName: "D\u1ecbch v\u1ee5 F&B",
  metadata: {
    title: "T\u1ef1 \u0111\u1ed9ng h\u00f3a F&B / Nh\u00e0 h\u00e0ng | AutoFlow",
    description:
      "AutoFlow gi\u00fap chu\u1ed7i F&B t\u1ef1 \u0111\u1ed9ng \u0111\u1ed3ng b\u1ed9 \u0111\u01a1n delivery, ch\u0103m s\u00f3c kh\u00e1ch quay l\u1ea1i, qu\u1ea3n l\u00fd ca l\u00e0m, c\u1ea3nh b\u00e1o t\u1ed3n kho.",
  },
};

// ─── Giao duc ────────────────────────────────────────────────

export const giaoDucService: ServiceConfig = {
  slug: "giao-duc",
  industry: "Gi\u00e1o d\u1ee5c",
  badge: {
    text: "D\u1ecbch v\u1ee5 cho Gi\u00e1o d\u1ee5c & \u0110\u00e0o t\u1ea1o",
    bgClass: "bg-indigo-50",
    textClass: "text-indigo-600",
  },
  hero: {
    titlePrefix: "T\u1ef1 \u0111\u1ed9ng h\u00f3a ",
    titleHighlight: "trung t\u00e2m \u0111\u00e0o t\u1ea1o",
    titleSuffix: " \u2014 t\u1eeb nh\u1eafc l\u1ecbch \u0111\u1ebfn ch\u0103m h\u1ecdc vi\u00ean",
    description:
      "AutoFlow gi\u00fap trung t\u00e2m \u0111\u00e0o t\u1ea1o, chu\u1ed7i tr\u01b0\u1eddng h\u1ecdc t\u1ef1 \u0111\u1ed9ng nh\u1eafc l\u1ecbch qua Zalo, nurture lead, \u0111i\u1ec3m danh, b\u00e1o c\u00e1o \u0111a chi nh\u00e1nh \u2014 gi\u1ea3m 60% th\u1eddi gian admin, miss l\u1ecbch gi\u1ea3m t\u1eeb 15% xu\u1ed1ng 3%.",
    ctaText: "Nh\u1eadn audit mi\u1ec5n ph\u00ed cho trung t\u00e2m",
  },
  integrationsLabel: "T\u00edch h\u1ee3p v\u1edbi h\u1ec7 sinh th\u00e1i gi\u00e1o d\u1ee5c & qu\u1ea3n l\u00fd",
  integrations: [
    { name: "Zalo OA", icon: "\ud83d\udcac" },
    { name: "Google Calendar", icon: "\ud83d\udcc5" },
    { name: "Google Sheets", icon: "\ud83d\udcd7" },
    { name: "Notion", icon: "\ud83d\uddd2\ufe0f" },
    { name: "MISA", icon: "\ud83d\udcca" },
    { name: "Facebook", icon: "\ud83d\udce3" },
    { name: "Gmail", icon: "\ud83d\udce7" },
    { name: "Telegram", icon: "\u2708\ufe0f" },
  ],
  painPointsSection: {
    title: "Trung t\u00e2m b\u1ea1n \u0111ang g\u1eb7p v\u1ea5n \u0111\u1ec1 n\u00e0o?",
    subtitle: "4 pain points ph\u1ed5 bi\u1ebfn nh\u1ea5t c\u1ee7a trung t\u00e2m \u0111\u00e0o t\u1ea1o VN",
  },
  painPointHoverBorder: "hover:border-indigo-200",
  painPoints: [
    {
      stat: "3 gi\u1edd/ng\u00e0y",
      title: "G\u1ecdi \u0111i\u1ec7n nh\u1eafc l\u1ecbch h\u1ecdc vi\u00ean b\u1eb1ng tay",
      desc: "M\u1ed7i bu\u1ed5i h\u1ecdc, nh\u00e2n vi\u00ean ph\u1ea3i g\u1ecdi/nh\u1eafn t\u1eebng h\u1ecdc vi\u00ean. 100 h\u1ecdc vi\u00ean = 3 gi\u1edd. Miss 1 cu\u1ed9c = h\u1ecdc vi\u00ean v\u1eafng, trung t\u00e2m m\u1ea5t ti\u1ec1n.",
    },
    {
      stat: "15%",
      title: "H\u1ecdc vi\u00ean miss l\u1ecbch m\u1ed7i th\u00e1ng",
      desc: "Kh\u00f4ng nh\u1eafc \u0111\u00fang l\u00fac \u2192 qu\u00ean l\u1ecbch \u2192 v\u1eafng \u2192 gi\u1ea3m ch\u1ea5t l\u01b0\u1ee3ng \u2192 kh\u00f4ng gia h\u1ea1n. M\u1ed7i h\u1ecdc vi\u00ean miss = m\u1ea5t 3\u20135 tri\u1ec7u doanh thu.",
    },
    {
      stat: "67%",
      title: "Lead m\u1ea5t v\u00ec follow-up ch\u1eadm",
      desc: "Ph\u1ee5 huynh h\u1ecfi h\u1ecdc ph\u00ed l\u00fac 10 gi\u1edd \u0111\u00eam. S\u00e1ng h\u00f4m sau reply th\u00ec h\u1ecd \u0111\u00e3 \u0111\u0103ng k\u00fd trung t\u00e2m kh\u00e1c. Kh\u00f4ng ai follow-up \u0111\u01b0\u1ee3c 24/7.",
    },
    {
      stat: "3 ng\u00e0y",
      title: "Gom b\u00e1o c\u00e1o t\u1eeb nhi\u1ec1u chi nh\u00e1nh",
      desc: "8 chi nh\u00e1nh, m\u1ed7i n\u01a1i b\u00e1o c\u00e1o kh\u00e1c nhau: Google Sheet, Zalo group, email. Cu\u1ed1i th\u00e1ng m\u1ea5t 3 ng\u00e0y t\u1ed5ng h\u1ee3p, sai s\u1ed1 l\u00e0 chuy\u1ec7n th\u01b0\u1eddng.",
    },
  ],
  workflowsSection: {
    title: "5 workflows AutoFlow build cho ",
    highlight: "Gi\u00e1o d\u1ee5c",
    subtitle: "M\u1ed7i workflow thay th\u1ebf h\u00e0ng gi\u1edd l\u00e0m vi\u1ec7c admin m\u1ed7i ng\u00e0y",
  },
  workflows: [
    {
      name: "Nh\u1eafc l\u1ecbch h\u1ecdc t\u1ef1 \u0111\u1ed9ng qua Zalo OA",
      flow: "L\u1ecbch h\u1ecdc trong Google Calendar/CRM \u2192 n8n ki\u1ec3m tra 24h tr\u01b0\u1edbc \u2192 Zalo OA g\u1eedi tin nh\u1eafc cho h\u1ecdc vi\u00ean/ph\u1ee5 huynh \u2192 N\u1ebfu kh\u00f4ng x\u00e1c nh\u1eadn \u2192 nh\u1eafc l\u1ea1i l\u1ea7n 2 v\u00e0o s\u00e1ng h\u00f4m sau",
      time: "Miss l\u1ecbch gi\u1ea3m t\u1eeb 15% xu\u1ed1ng 3%",
      color: "#0068FF",
    },
    {
      name: "Lead nurturing t\u1ef1 \u0111\u1ed9ng",
      flow: "Lead m\u1edbi t\u1eeb Facebook/Website \u2192 L\u01b0u v\u00e0o CRM \u2192 Zalo OA g\u1eedi th\u00f4ng tin kh\u00f3a h\u1ecdc + h\u1ecdc ph\u00ed \u2192 Sau 3 ng\u00e0y: g\u1eedi testimonial \u2192 Sau 7 ng\u00e0y: offer \u01b0u \u0111\u00e3i \u0111\u0103ng k\u00fd s\u1edbm",
      time: "0% lead b\u1ecb miss, 100% \u0111\u01b0\u1ee3c follow-up",
      color: "#10B981",
    },
    {
      name: "\u0110i\u1ec3m danh & th\u00f4ng b\u00e1o ph\u1ee5 huynh",
      flow: "Gi\u00e1o vi\u00ean check-in tr\u00ean Google Form \u2192 n8n ghi nh\u1eadn \u0111i\u1ec3m danh \u2192 Zalo OA g\u1eedi th\u00f4ng b\u00e1o cho ph\u1ee5 huynh: 'Con b\u1ea1n \u0111\u00e3 \u0111\u1ebfn l\u1edbp' \u2192 Cu\u1ed1i bu\u1ed5i: g\u1eedi feedback ng\u1eafn",
      time: "Ph\u1ee5 huynh y\u00ean t\u00e2m, trung t\u00e2m chuy\u00ean nghi\u1ec7p",
      color: "#F59E0B",
    },
    {
      name: "B\u00e1o c\u00e1o \u0111a chi nh\u00e1nh t\u1ef1 \u0111\u1ed9ng",
      flow: "M\u1ed7i s\u00e1ng th\u1ee9 2 \u2192 n8n k\u00e9o data t\u1eeb t\u1ea5t c\u1ea3 chi nh\u00e1nh (Google Sheet/CRM) \u2192 T\u1ed5ng h\u1ee3p: h\u1ecdc vi\u00ean m\u1edbi, gia h\u1ea1n, v\u1eafng, doanh thu \u2192 G\u1eedi b\u00e1o c\u00e1o qua Zalo/Email cho qu\u1ea3n l\u00fd",
      time: "0 ph\u00fat thay v\u00ec 3 ng\u00e0y gom data",
      color: "#6366F1",
    },
    {
      name: "Upsell kh\u00f3a m\u1edbi & gia h\u1ea1n",
      flow: "H\u1ecdc vi\u00ean s\u1eafp h\u1ebft kh\u00f3a (2 tu\u1ea7n tr\u01b0\u1edbc) \u2192 Zalo OA g\u1eedi tin nh\u1eafn: 'Kh\u00f3a h\u1ecdc s\u1eafp k\u1ebft th\u00fac, \u0111\u0103ng k\u00fd kh\u00f3a ti\u1ebfp theo gi\u1ea3m 10%' \u2192 N\u1ebfu kh\u00f4ng ph\u1ea3n h\u1ed3i \u2192 nh\u1eafc l\u1ea1i + offer m\u1ea1nh h\u01a1n",
      time: "T\u0103ng t\u1ec9 l\u1ec7 gia h\u1ea1n 20\u201330%",
      color: "#EE4D2D",
    },
  ],
  roi: {
    title: "T\u00ednh ROI cho trung t\u00e2m c\u1ee7a b\u1ea1n",
    subtitle:
      "Nh\u1eadp s\u1ed1 li\u1ec7u \u2014 xem b\u1ea1n \u0111ang m\u1ea5t bao nhi\u00eau cho vi\u1ec7c nh\u1eafc l\u1ecbch, b\u00e1o c\u00e1o th\u1ee7 c\u00f4ng",
    sliderA: { label: "Nh\u00e2n vi\u00ean admin/CSKH", min: 1, max: 10, default: 2 },
    sliderB: {
      label: "Gi\u1edd nh\u1eafc l\u1ecbch + b\u00e1o c\u00e1o/ng\u00e0y",
      min: 1,
      max: 8,
      default: 3,
    },
    salary: 10,
    savingsRate: 0.6,
    costLabel: "tri\u1ec7u \u0111/n\u0103m chi ph\u00ed l\u01b0\u01a1ng admin",
  },
  pricingTitle: "G\u00f3i ph\u00f9 h\u1ee3p cho Gi\u00e1o d\u1ee5c",
  pricing: [
    {
      name: "Pilot",
      badge: "R\u00e0o c\u1ea3n th\u1ea5p nh\u1ea5t",
      desc: "Th\u1eed tr\u01b0\u1edbc, kh\u00f4ng r\u1ee7i ro",
      price: "5\u20138",
      features: ["1 workflow tr\u1ecdn v\u1eb9n", "Timeline: 1 tu\u1ea7n", "Th\u1ea5y k\u1ebft qu\u1ea3 ngay"],
      isPrimary: true,
      ctaText: "B\u1eaft \u0111\u1ea7u Pilot",
    },
    {
      name: "Starter",
      desc: "Cho trung t\u00e2m nh\u1ecf",
      price: "8\u201315",
      features: ["1 workflow + m\u1edf r\u1ed9ng", "Timeline: 1\u20132 tu\u1ea7n", "Support 7 ng\u00e0y"],
      isPrimary: true,
      ctaText: "Audit mi\u1ec5n ph\u00ed",
    },
    {
      name: "Growth",
      desc: "Cho trung t\u00e2m 1\u20133 chi nh\u00e1nh",
      price: "20\u201335",
      features: [
        "3\u20135 workflows",
        "Training 2h cho team admin",
        "Support 14 ng\u00e0y",
        "Timeline: 3\u20134 tu\u1ea7n",
      ],
      isPrimary: false,
      ctaText: "Audit mi\u1ec5n ph\u00ed",
    },
    {
      name: "Scale",
      desc: "Cho chu\u1ed7i 4+ chi nh\u00e1nh",
      price: "50\u201380",
      features: [
        "8\u201312 workflows to\u00e0n b\u1ed9",
        "n8n self-hosted",
        "Training 2 bu\u1ed5i + 30-day warranty",
        "Timeline: 6\u20138 tu\u1ea7n",
      ],
      isPrimary: false,
      ctaText: "Audit mi\u1ec5n ph\u00ed",
    },
  ],
  complianceBadges: [
    "Data l\u01b0u tr\u1eef t\u1ea1i Vi\u1ec7t Nam, tu\u00e2n th\u1ee7 quy \u0111\u1ecbnh b\u1ea3o m\u1eadt d\u1eef li\u1ec7u",
  ],
  faqs: [
    {
      q: "Lo\u1ea1i h\u00ecnh gi\u00e1o d\u1ee5c n\u00e0o ph\u00f9 h\u1ee3p?",
      a: "Trung t\u00e2m ngo\u1ea1i ng\u1eef, trung t\u00e2m tin h\u1ecdc, luy\u1ec7n thi, k\u1ef9 n\u0103ng m\u1ec1m, m\u1ea7m non t\u01b0 th\u1ee5c \u2014 b\u1ea5t k\u1ef3 c\u01a1 s\u1edf n\u00e0o c\u00f3 h\u1ecdc vi\u00ean c\u1ea7n qu\u1ea3n l\u00fd \u0111\u1ec1u ph\u00f9 h\u1ee3p.",
    },
    {
      q: "C\u00f3 t\u00edch h\u1ee3p v\u1edbi ph\u1ea7n m\u1ec1m qu\u1ea3n l\u00fd gi\u00e1o d\u1ee5c kh\u00f4ng?",
      a: "H\u1ed7 tr\u1ee3 Google Sheets, Airtable, v\u00e0 k\u1ebft n\u1ed1i qua API v\u1edbi h\u1ea7u h\u1ebft ph\u1ea7n m\u1ec1m qu\u1ea3n l\u00fd. Trong audit m\u00ecnh s\u1ebd \u0111\u00e1nh gi\u00e1 c\u1ee5 th\u1ec3 ph\u1ea7n m\u1ec1m b\u1ea1n \u0111ang d\u00f9ng.",
    },
    {
      q: "T\u1ef1 \u0111\u1ed9ng nh\u1eafc h\u1ecdc ph\u00ed th\u1ebf n\u00e0o?",
      a: "Workflow t\u1ef1 \u0111\u1ed9ng g\u1eedi tin nh\u1eafn Zalo OA nh\u1eafc tr\u01b0\u1edbc 3-5-7 ng\u00e0y. N\u1ebfu qu\u00e1 h\u1ea1n, t\u1ef1 escalate cho nh\u00e2n vi\u00ean thu ph\u00ed. Ph\u1ee5 huynh nh\u1eadn th\u00f4ng b\u00e1o chuy\u00ean nghi\u1ec7p, kh\u00f4ng c\u1ea7n g\u1ecdi \u0111i\u1ec7n t\u1eebng ng\u01b0\u1eddi.",
    },
    {
      q: "T\u00f4i c\u00f3 5 c\u01a1 s\u1edf, c\u1ea7n setup ri\u00eang cho t\u1eebng c\u01a1 s\u1edf?",
      a: "Kh\u00f4ng. 1 h\u1ec7 th\u1ed1ng qu\u1ea3n l\u00fd t\u1eadp trung cho t\u1ea5t c\u1ea3 c\u01a1 s\u1edf. D\u1eef li\u1ec7u t\u00e1ch bi\u1ec7t theo c\u01a1 s\u1edf nh\u01b0ng b\u00e1o c\u00e1o t\u1ed5ng h\u1ee3p \u0111\u01b0\u1ee3c. Th\u00eam c\u01a1 s\u1edf m\u1edbi ch\u1ec9 c\u1ea7n c\u1ea5u h\u00ecnh, kh\u00f4ng c\u1ea7n build l\u1ea1i.",
    },
    {
      q: "B\u1ea3o m\u1eadt th\u00f4ng tin h\u1ecdc vi\u00ean th\u1ebf n\u00e0o?",
      a: "Data ch\u1ea1y tr\u00ean VPS ri\u00eang t\u1ea1i Vi\u1ec7t Nam, kh\u00f4ng chia s\u1ebb b\u00ean th\u1ee9 ba. Ph\u00f9 h\u1ee3p quy \u0111\u1ecbnh b\u1ea3o v\u1ec7 d\u1eef li\u1ec7u c\u00e1 nh\u00e2n. Ch\u1ec9 nh\u1eefng ng\u01b0\u1eddi \u0111\u01b0\u1ee3c ph\u00e2n quy\u1ec1n m\u1edbi truy c\u1eadp \u0111\u01b0\u1ee3c.",
    },
  ],
  cta: {
    title: "Trung t\u00e2m b\u1ea1n \u0111ang m\u1ea5t bao nhi\u00eau h\u1ecdc vi\u00ean v\u00ec qu\u00ean l\u1ecbch?",
    subtitle:
      "30 ph\u00fat audit mi\u1ec5n ph\u00ed \u2014 m\u00ecnh ph\u00e2n t\u00edch quy tr\u00ecnh v\u00e0 ch\u1ec9 ra workflow n\u00e0o gi\u1ea3m miss l\u1ecbch ngay l\u1eadp t\u1ee9c.",
    buttonText: "Audit mi\u1ec5n ph\u00ed cho trung t\u00e2m",
  },
  fbPixelContentName: "D\u1ecbch v\u1ee5 Gi\u00e1o d\u1ee5c",
  metadata: {
    title: "T\u1ef1 \u0111\u1ed9ng h\u00f3a Gi\u00e1o d\u1ee5c & \u0110\u00e0o t\u1ea1o | AutoFlow",
    description:
      "AutoFlow gi\u00fap trung t\u00e2m \u0111\u00e0o t\u1ea1o t\u1ef1 \u0111\u1ed9ng nh\u1eafc l\u1ecbch qua Zalo, nurture lead, \u0111i\u1ec3m danh, b\u00e1o c\u00e1o \u0111a chi nh\u00e1nh.",
  },
};

// ─── Bat dong san ────────────────────────────────────────────

export const batDongSanService: ServiceConfig = {
  slug: "bat-dong-san",
  industry: "B\u1ea5t \u0111\u1ed9ng s\u1ea3n",
  badge: {
    text: "D\u1ecbch v\u1ee5 cho B\u1ea5t \u0111\u1ed9ng s\u1ea3n",
    bgClass: "bg-emerald-50",
    textClass: "text-emerald-600",
  },
  hero: {
    titlePrefix: "T\u1ef1 \u0111\u1ed9ng h\u00f3a ",
    titleHighlight: "agency B\u0110S",
    titleSuffix: " \u2014 t\u1eeb lead \u0111\u1ebfn ch\u1ed1t deal",
    description:
      "AutoFlow gi\u00fap s\u00e0n giao d\u1ecbch, agency B\u0110S t\u1ef1 \u0111\u1ed9ng capture lead \u0111a k\u00eanh, follow-up qua Zalo, matching B\u0110S v\u1edbi kh\u00e1ch, v\u00e0 b\u00e1o c\u00e1o pipeline \u2014 kh\u00f4ng miss lead, kh\u00f4ng qu\u00ean follow-up.",
    ctaText: "Nh\u1eadn audit mi\u1ec5n ph\u00ed cho agency",
  },
  integrationsLabel: "T\u00edch h\u1ee3p v\u1edbi h\u1ec7 sinh th\u00e1i B\u0110S Vi\u1ec7t Nam",
  integrations: [
    { name: "Zalo OA", icon: "\ud83d\udcac" },
    { name: "Facebook", icon: "\ud83d\udce3" },
    { name: "Google Sheets", icon: "\ud83d\udcd7" },
    { name: "Google Calendar", icon: "\ud83d\udcc5" },
    { name: "MISA", icon: "\ud83d\udcca" },
    { name: "Batdongsan", icon: "\ud83c\udfe0" },
    { name: "Gmail", icon: "\ud83d\udce7" },
    { name: "Telegram", icon: "\u2708\ufe0f" },
  ],
  painPointsSection: {
    title: "Agency b\u1ea1n \u0111ang g\u1eb7p v\u1ea5n \u0111\u1ec1 n\u00e0o?",
    subtitle: "4 pain points ph\u1ed5 bi\u1ebfn nh\u1ea5t c\u1ee7a agency B\u0110S VN",
  },
  painPointHoverBorder: "hover:border-emerald-200",
  painPoints: [
    {
      stat: "40%",
      title: "Lead m\u1ea5t v\u00ec kh\u00f4ng reply k\u1ecbp t\u1eeb \u0111a k\u00eanh",
      desc: "Lead \u0111\u1ebfn t\u1eeb Facebook, Zalo, Batdongsan.com.vn, hotline \u2014 m\u1ed7i k\u00eanh m\u1ed9t giao di\u1ec7n. Sales ph\u1ea3i nh\u1ea3y qua nh\u1ea3y l\u1ea1i, miss lead l\u00e0 chuy\u1ec7n h\u00e0ng ng\u00e0y.",
    },
    {
      stat: "100+ leads",
      title: "Follow-up b\u1eb1ng tay kh\u00f4ng xu\u1ec3",
      desc: "M\u1ed7i sales qu\u1ea3n l\u00fd 100+ leads \u1edf c\u00e1c giai \u0111o\u1ea1n kh\u00e1c nhau. Nh\u1edb ai c\u1ea7n g\u1ecdi l\u1ea1i, ai c\u1ea7n g\u1eedi th\u00eam th\u00f4ng tin \u2014 t\u1ea5t c\u1ea3 b\u1eb1ng \u0111\u1ea7u v\u00e0 Excel.",
    },
    {
      stat: "2 gi\u1edd/ng\u00e0y",
      title: "Matching B\u0110S v\u1edbi kh\u00e1ch h\u00e0ng th\u1ee7 c\u00f4ng",
      desc: "Kh\u00e1ch c\u1ea7n c\u0103n 2PN qu\u1eadn 7, budget 3 t\u1ef7. Sales ph\u1ea3i l\u1eadt danh s\u00e1ch 500 c\u0103n \u0111\u1ec3 t\u00ecm ph\u00f9 h\u1ee3p. M\u1ea5t th\u1eddi gian, hay b\u1ecf s\u00f3t.",
    },
    {
      stat: "5 ng\u00e0y",
      title: "B\u00e1o c\u00e1o pipeline sales cu\u1ed1i th\u00e1ng",
      desc: "Qu\u1ea3n l\u00fd c\u1ea7n bi\u1ebft: bao nhi\u00eau lead m\u1edbi, bao nhi\u00eau \u0111ang xem nh\u00e0, bao nhi\u00eau s\u1eafp ch\u1ed1t. Data n\u1eb1m r\u1ea3i r\u00e1c trong Zalo, Sheet, s\u1ed5 tay.",
    },
  ],
  workflowsSection: {
    title: "5 workflows AutoFlow build cho ",
    highlight: "B\u1ea5t \u0111\u1ed9ng s\u1ea3n",
    subtitle: "M\u1ed7i workflow thay th\u1ebf h\u00e0ng gi\u1edd ch\u1ea1y lead th\u1ee7 c\u00f4ng m\u1ed7i ng\u00e0y",
  },
  workflows: [
    {
      name: "Lead capture \u0111a k\u00eanh \u2192 CRM",
      flow: "Lead t\u1eeb Facebook/Zalo/Batdongsan.com.vn/Hotline \u2192 n8n t\u1ef1 \u0111\u1ed9ng l\u01b0u v\u00e0o Google Sheet/CRM \u2192 Ph\u00e2n lo\u1ea1i theo ngu\u1ed3n, ng\u00e2n s\u00e1ch, khu v\u1ef1c \u2192 Assign cho sales ph\u00f9 h\u1ee3p",
      time: "0% lead b\u1ecb miss, 100% \u0111\u01b0\u1ee3c track",
      color: "#0068FF",
    },
    {
      name: "Follow-up Zalo sequence t\u1ef1 \u0111\u1ed9ng",
      flow: "Lead m\u1edbi \u2192 Zalo OA g\u1eedi th\u00f4ng tin d\u1ef1 \u00e1n + b\u1ea3ng gi\u00e1 \u2192 Sau 2 ng\u00e0y: g\u1eedi \u1ea3nh th\u1ef1c t\u1ebf + video \u2192 Sau 5 ng\u00e0y: m\u1eddi xem nh\u00e0 m\u1eabu \u2192 Sau 14 ng\u00e0y: offer \u01b0u \u0111\u00e3i",
      time: "Follow-up rate: 100% thay v\u00ec 60%",
      color: "#10B981",
    },
    {
      name: "Matching B\u0110S \u2013 kh\u00e1ch h\u00e0ng t\u1ef1 \u0111\u1ed9ng",
      flow: "Kh\u00e1ch \u0111\u0103ng k\u00fd (khu v\u1ef1c, ng\u00e2n s\u00e1ch, lo\u1ea1i B\u0110S) \u2192 n8n so kh\u1edbp v\u1edbi database c\u0103n h\u1ed9/\u0111\u1ea5t \u2192 G\u1eedi top 3\u20135 c\u0103n ph\u00f9 h\u1ee3p qua Zalo \u2192 Kh\u00e1ch quan t\u00e2m \u2192 t\u1ef1 t\u1ea1o l\u1ecbch xem nh\u00e0",
      time: "Thay th\u1ebf 2 gi\u1edd matching th\u1ee7 c\u00f4ng/ng\u00e0y",
      color: "#F59E0B",
    },
    {
      name: "Nh\u1eafc l\u1ecbch xem nh\u00e0 & follow-up sau xem",
      flow: "L\u1ecbch xem nh\u00e0 trong Calendar \u2192 Zalo OA nh\u1eafc 24h tr\u01b0\u1edbc \u2192 Sau xem nh\u00e0: g\u1eedi tin nh\u1eafn 'Anh/ch\u1ecb c\u1ea3m th\u1ea5y th\u1ebf n\u00e0o?' \u2192 N\u1ebfu kh\u00f4ng reply \u2192 nh\u1eafc l\u1ea1i sau 3 ng\u00e0y",
      time: "T\u1ec9 l\u1ec7 no-show gi\u1ea3m 70%",
      color: "#6366F1",
    },
    {
      name: "B\u00e1o c\u00e1o pipeline t\u1ef1 \u0111\u1ed9ng",
      flow: "M\u1ed7i s\u00e1ng th\u1ee9 2 \u2192 n8n k\u00e9o data t\u1eeb CRM/Sheet \u2192 T\u1ed5ng h\u1ee3p: lead m\u1edbi, \u0111ang nurture, xem nh\u00e0, \u0111\u00e0m ph\u00e1n, ch\u1ed1t \u2192 G\u1eedi dashboard qua Zalo/Email cho qu\u1ea3n l\u00fd",
      time: "0 ph\u00fat thay v\u00ec 5 ng\u00e0y cu\u1ed1i th\u00e1ng",
      color: "#EE4D2D",
    },
  ],
  roi: {
    title: "T\u00ednh ROI cho agency c\u1ee7a b\u1ea1n",
    subtitle:
      "Nh\u1eadp s\u1ed1 li\u1ec7u \u2014 xem b\u1ea1n \u0111ang m\u1ea5t bao nhi\u00eau cho vi\u1ec7c ch\u1ea1y lead th\u1ee7 c\u00f4ng",
    sliderA: {
      label: "S\u1ed1 sales/admin qu\u1ea3n l\u00fd lead",
      min: 1,
      max: 20,
      default: 5,
    },
    sliderB: {
      label: "Gi\u1edd nh\u1eadp lead + follow-up/ng\u00e0y",
      min: 1,
      max: 8,
      default: 3,
    },
    salary: 12,
    savingsRate: 0.5,
    costLabel: "tri\u1ec7u \u0111/n\u0103m chi ph\u00ed sales admin",
  },
  pricingTitle: "G\u00f3i ph\u00f9 h\u1ee3p cho B\u1ea5t \u0111\u1ed9ng s\u1ea3n",
  pricing: [
    {
      name: "Pilot",
      badge: "R\u00e0o c\u1ea3n th\u1ea5p nh\u1ea5t",
      desc: "Th\u1eed tr\u01b0\u1edbc, kh\u00f4ng r\u1ee7i ro",
      price: "5\u20138",
      features: ["1 workflow tr\u1ecdn v\u1eb9n", "Timeline: 1 tu\u1ea7n", "Th\u1ea5y k\u1ebft qu\u1ea3 ngay"],
      isPrimary: true,
      ctaText: "B\u1eaft \u0111\u1ea7u Pilot",
    },
    {
      name: "Starter",
      desc: "Cho agency nh\u1ecf 1\u20135 sales",
      price: "8\u201315",
      features: ["1 workflow + m\u1edf r\u1ed9ng", "Timeline: 1\u20132 tu\u1ea7n", "Support 7 ng\u00e0y"],
      isPrimary: true,
      ctaText: "Audit mi\u1ec5n ph\u00ed",
    },
    {
      name: "Growth",
      desc: "Cho agency 5\u201315 sales",
      price: "20\u201335",
      features: [
        "3\u20135 workflows",
        "Training 2h cho team sales",
        "Support 14 ng\u00e0y",
        "Timeline: 3\u20134 tu\u1ea7n",
      ],
      isPrimary: false,
      ctaText: "Audit mi\u1ec5n ph\u00ed",
    },
    {
      name: "Scale",
      desc: "Cho s\u00e0n 15+ sales, nhi\u1ec1u d\u1ef1 \u00e1n",
      price: "50\u201380",
      features: [
        "8\u201312 workflows to\u00e0n b\u1ed9",
        "n8n self-hosted",
        "Training 2 bu\u1ed5i + 30-day warranty",
        "Timeline: 6\u20138 tu\u1ea7n",
      ],
      isPrimary: false,
      ctaText: "Audit mi\u1ec5n ph\u00ed",
    },
  ],
  complianceBadges: [
    "Data l\u01b0u tr\u1eef t\u1ea1i Vi\u1ec7t Nam, tu\u00e2n th\u1ee7 quy \u0111\u1ecbnh b\u1ea3o m\u1eadt d\u1eef li\u1ec7u",
  ],
  faqs: [
    {
      q: "AutoFlow t\u00edch h\u1ee3p v\u1edbi CRM b\u1ea5t \u0111\u1ed9ng s\u1ea3n n\u00e0o?",
      a: "H\u1ed7 tr\u1ee3 Google Sheets, Airtable, v\u00e0 c\u00e1c CRM ph\u1ed5 bi\u1ebfn qua API. N\u1ebfu b\u1ea1n \u0111ang d\u00f9ng CRM ri\u00eang, m\u00ecnh s\u1ebd \u0111\u00e1nh gi\u00e1 kh\u1ea3 n\u0103ng t\u00edch h\u1ee3p trong bu\u1ed5i audit mi\u1ec5n ph\u00ed.",
    },
    {
      q: "C\u00f3 t\u1ef1 \u0111\u1ed9ng ph\u00e2n lead cho t\u1eebng sales kh\u00f4ng?",
      a: "C\u00f3. Workflow t\u1ef1 \u0111\u1ed9ng ph\u00e2n lo\u1ea1i lead theo khu v\u1ef1c, ng\u00e2n s\u00e1ch, lo\u1ea1i B\u0110S v\u00e0 g\u00e1n cho sales ph\u00f9 h\u1ee3p. Lead n\u00f3ng \u0111\u01b0\u1ee3c \u01b0u ti\u00ean th\u00f4ng b\u00e1o ngay qua Zalo.",
    },
    {
      q: "Kh\u00e1ch h\u00e0ng hay h\u1ecfi ngo\u00e0i gi\u1edd, x\u1eed l\u00fd th\u1ebf n\u00e0o?",
      a: "AutoFlow setup chatbot Zalo OA tr\u1ea3 l\u1eddi t\u1ef1 \u0111\u1ed9ng 24/7 \u2014 g\u1eedi th\u00f4ng tin d\u1ef1 \u00e1n, b\u1ea3ng gi\u00e1, l\u1ecbch h\u1eb9n xem nh\u00e0. Lead \u0111\u01b0\u1ee3c l\u01b0u l\u1ea1i v\u00e0 ph\u00e2n lo\u1ea1i ngay, s\u00e1ng h\u00f4m sau sales c\u00f3 danh s\u00e1ch s\u1eb5n.",
    },
    {
      q: "T\u00f4i c\u00f3 nhi\u1ec1u d\u1ef1 \u00e1n, m\u1ed7i d\u1ef1 \u00e1n c\u1ea7n workflow ri\u00eang?",
      a: "Kh\u00f4ng nh\u1ea5t thi\u1ebft. Workflow \u0111\u01b0\u1ee3c thi\u1ebft k\u1ebf linh ho\u1ea1t \u2014 1 workflow c\u00f3 th\u1ec3 x\u1eed l\u00fd nhi\u1ec1u d\u1ef1 \u00e1n, t\u1ef1 \u0111\u1ed9ng ph\u00e2n lo\u1ea1i theo d\u1ef1 \u00e1n. Ch\u1ec9 c\u1ea7n th\u00eam d\u1ef1 \u00e1n m\u1edbi v\u00e0o h\u1ec7 th\u1ed1ng.",
    },
    {
      q: "Bao l\u00e2u th\u00ec th\u1ea5y ROI?",
      a: "Th\u00f4ng th\u01b0\u1eddng 3-5 th\u00e1ng. V\u1edbi B\u0110S, ch\u1ec9 c\u1ea7n ch\u1ed1t th\u00eam 1 deal nh\u1edd kh\u00f4ng m\u1ea5t lead l\u00e0 \u0111\u00e3 ho\u00e0n v\u1ed1n g\u1ea5p nhi\u1ec1u l\u1ea7n.",
    },
  ],
  cta: {
    title: "Agency b\u1ea1n \u0111ang miss bao nhi\u00eau lead m\u1ed7i ng\u00e0y?",
    subtitle:
      "30 ph\u00fat audit mi\u1ec5n ph\u00ed \u2014 m\u00ecnh ph\u00e2n t\u00edch pipeline v\u00e0 ch\u1ec9 ra workflow n\u00e0o ch\u1ed1t deal nhanh h\u01a1n.",
    buttonText: "Audit mi\u1ec5n ph\u00ed cho agency",
  },
  fbPixelContentName: "D\u1ecbch v\u1ee5 B\u1ea5t \u0111\u1ed9ng s\u1ea3n",
  metadata: {
    title: "T\u1ef1 \u0111\u1ed9ng h\u00f3a B\u1ea5t \u0111\u1ed9ng s\u1ea3n | AutoFlow",
    description:
      "AutoFlow gi\u00fap s\u00e0n giao d\u1ecbch, agency B\u0110S t\u1ef1 \u0111\u1ed9ng capture lead \u0111a k\u00eanh, follow-up qua Zalo, matching B\u0110S v\u1edbi kh\u00e1ch.",
  },
};
