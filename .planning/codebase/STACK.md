# Technology Stack

**Analysis Date:** 2026-03-29

## Languages

**Primary:**
- TypeScript 5.x - All application code and configuration
- JavaScript - Configuration files (ESM modules)

**Secondary:**
- JSX/TSX - React component files and page components

## Runtime

**Environment:**
- Node.js (version not specified - no .nvmrc file)

**Package Manager:**
- npm (version not specified)
- Lockfile: `package-lock.json` present

## Frameworks

**Core:**
- Next.js 16.2.1 - Full-stack React framework with App Router, API routes, server/client components
- React 19.2.4 - UI library
- React DOM 19.2.4 - DOM rendering

**Styling:**
- Tailwind CSS 4.x - Utility-first CSS framework
- @tailwindcss/postcss 4.x - PostCSS integration for Tailwind
- @tailwindcss/typography 0.5.19 - Typography plugin for styled prose content

**Email:**
- Resend 6.9.4 - Email sending service via API

**Database:**
- @supabase/supabase-js 2.100.1 - PostgreSQL database client and API
- @supabase/ssr 0.9.0 - Server-side rendering utilities for Supabase authentication

## Key Dependencies

**Critical:**
- @supabase/supabase-js - Handles all database operations via Supabase PostgreSQL backend
- @supabase/ssr - Server-side authentication and cookie management for Supabase
- resend - Email delivery for lead magnet PDFs (uses API key authentication)

**Build & Development:**
- eslint 9.x - JavaScript/TypeScript linting
- eslint-config-next 16.2.1 - Next.js ESLint configuration preset
- @types/node 20.x - TypeScript types for Node.js APIs
- @types/react 19.x - TypeScript types for React 19
- @types/react-dom 19.x - TypeScript types for React DOM 19

## Configuration

**Environment:**
- Configuration via environment variables (both public and private)
- `.env.local` for local development (present but not tracked in git)
- `.env.example` as template for required configuration

**Required Public Environment Variables:**
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous public key
- `NEXT_PUBLIC_GA_ID` - Google Analytics 4 measurement ID (optional)
- `NEXT_PUBLIC_ZALO_OA_ID` - Zalo Official Account ID for chat widget (optional)

**Required Private Environment Variables:**
- `RESEND_API_KEY` - Resend email API key for sending PDFs
- `AUDIT_WEBHOOK_URL` - External webhook endpoint for audit form submissions (optional, supports n8n, Zapier, Make)

**Build:**
- `tsconfig.json` - TypeScript compiler configuration with strict mode enabled
- `next.config.ts` - Next.js build configuration (minimal, using defaults)
- `postcss.config.mjs` - PostCSS configuration for Tailwind CSS processing
- `eslint.config.mjs` - ESLint configuration with Next.js and TypeScript presets

## Platform Requirements

**Development:**
- Node.js (version unspecified - check package-lock.json or run `npm install`)
- npm or compatible package manager
- TypeScript 5.x support required

**Production:**
- Node.js 18.17+ (typical for Next.js 16)
- Deployment target: Vercel (Next.js native), or any Node.js hosting with ESM support
- Supabase project (PostgreSQL database backend)
- Resend API key for email functionality

## Build & Development Scripts

```bash
npm run dev      # Start Next.js development server on http://localhost:3000
npm run build    # Build production-optimized application
npm start        # Start production server
npm run lint     # Run ESLint on codebase
```

---

*Stack analysis: 2026-03-29*
