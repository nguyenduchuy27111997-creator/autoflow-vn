# AutoFlow VN — Launch Checklist

## Pre-launch Tasks

- [ ] **Deploy** — Fix Vercel fair use (contact support) hoặc deploy qua Netlify/Cloudflare Pages. Set env vars: `AUDIT_WEBHOOK_URL`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] **Domain** — Trỏ autoflowvn.net về hosting (Vercel/Netlify). Setup SSL (auto).
- [ ] **GA4** — Tạo GA4 property tại analytics.google.com → Data stream → Web → copy Measurement ID → thêm `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` vào env
- [ ] **Search Console** — Verify domain tại search.google.com/search-console → Submit sitemap: `https://autoflowvn.net/sitemap.xml`
- [ ] **Zalo OA** — Tạo Official Account tại oa.zalo.me → copy OA ID → thêm `NEXT_PUBLIC_ZALO_OA_ID=xxxxxxxxxx` vào env
