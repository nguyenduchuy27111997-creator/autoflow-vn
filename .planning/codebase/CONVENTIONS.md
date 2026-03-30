# Coding Conventions

**Analysis Date:** 2026-03-29

## Naming Patterns

**Files:**
- Components: PascalCase (`Hero.tsx`, `Navbar.tsx`, `Button.tsx`)
- Utilities/libraries: camelCase (`client.ts`, `server.ts`, `middleware.ts`)
- Data/constants: camelCase (`constants.ts`, `quiz-data.ts`, `blog-posts.ts`)
- Pages: kebab-case for route segments (`audit/page.tsx`, `/tai-lieu/bat-dong-san/page.tsx`)
- API routes: `route.ts` in `[route]/` directories (`/app/api/audit/route.ts`, `/app/api/tai-lieu/route.ts`)

**Functions:**
- Components: PascalCase (`function Hero()`, `export default function Button()`)
- Helper/utility functions: camelCase (`getRateLimitKey()`, `isRateLimited()`, `createClient()`)
- Event handlers: camelCase with `handle` prefix (`handleScroll()`, `handleSubmit()`)
- Callback/toggle functions: camelCase with action prefix (`togglePain()`, `setMobileOpen()`)

**Variables:**
- State variables: camelCase (`scrolled`, `mobileOpen`, `serviceOpen`, `submitted`)
- Constants (module-level): UPPER_SNAKE_CASE for configuration (`WEBHOOK_URL`, `RATE_LIMIT_WINDOW`, `MAX_REQUESTS`)
- Constants (data arrays): camelCase (`metrics`, `services`, `navLinks`, `painPoints`)
- React hooks: camelCase standard convention (`useState`, `useEffect`, `usePathname`)
- Props: camelCase (`variant`, `size`, `disabled`, `loading`, `className`)

**Types:**
- Interfaces: PascalCase with `Props` suffix for component props (`ButtonProps`, `FormFieldProps`)
- Type aliases: PascalCase with semantic names (`ButtonVariant`, `ButtonSize`, `Option`)
- Generic type records: PascalCase (`Record<ButtonVariant, string>`)

## Code Style

**Formatting:**
- ESLint 9 with Next.js core-web-vitals and TypeScript support
- Config file: `eslint.config.mjs` using flat config format
- No Prettier detected — ESLint handles linting only
- Consistent whitespace: 2-space indentation (inferred from code)

**Linting:**
- ESLint extends `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`
- Global ignores: `.next/**`, `out/**`, `build/**`, `next-env.d.ts`
- No custom rule overrides — uses Next.js defaults
- Run command: `npm run lint` (runs `eslint` without directory specified, checks entire codebase)

**Structural Patterns:**
- Strict TypeScript: `"strict": true` in `tsconfig.json`
- Target: ES2017 with React 19 JSX transform
- Path aliases: `@/*` maps to `./src/*` for clean imports

## Import Organization

**Order:**
1. React and Next.js imports (`react`, `next/...`)
2. Third-party libraries (`@supabase/...`, `resend`)
3. Internal components (`@/components/...`)
4. Internal utilities/lib (`@/lib/...`)
5. Internal data/constants (`@/data/...`)

**Example from codebase:**

```typescript
// app/audit/page.tsx
"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { industries, teamSizes } from "@/data/constants";
```

```typescript
// app/api/audit/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
```

**Path Aliases:**
- `@/components` → `./src/components`
- `@/lib` → `./src/lib`
- `@/data` → `./src/data`
- `@/app` → `./src/app`

## Error Handling

**Patterns:**
- Try-catch blocks with generic catch for network/database errors (`catch { ... }`)
- Silent failures for non-critical operations (e.g., webhook errors logged but not thrown)
- User-facing error messages in Vietnamese
- API errors return appropriate HTTP status codes (400, 429, 500)
- Validation happens before database/network operations

**API Response Pattern:**

```typescript
// Success response
return NextResponse.json({ success: true });

// Error responses with status codes
return NextResponse.json(
  { error: "Vui lòng điền tên và số điện thoại." },
  { status: 400 }
);

return NextResponse.json(
  { error: "Quá nhiều yêu cầu. Vui lòng thử lại sau." },
  { status: 429 }
);
```

**Graceful Degradation:**
- Missing environment variables handled with conditional checks (`if (!resend)`)
- Failed operations don't block response (webhooks retry, failed emails return success anyway)
- Comments explain expected failures: `// Called from Server Component — ignore`

## Logging

**Framework:** `console` (native)

**Patterns:**
- Errors logged with `console.error()` for debugging
- Used for server-side operations only (in API routes and server utils)
- Error context included: `console.error("Supabase insert error:", error)`

**Examples:**

```typescript
// lib/supabase/server.ts
catch {
  // Called from Server Component — ignore
}

// app/api/tai-lieu/route.ts
if (dbError) {
  console.error("Supabase insert error:", dbError);
}

console.error("Webhook error:", err);
```

## Comments

**When to Comment:**
- Explain WHY, not WHAT — code should be self-documenting
- Non-obvious browser behavior (`// Ensure video plays on mount (some browsers block autoplay)`)
- Business logic constraints (`// Honeypot check`, `// Rate limiting`)
- Expected failures that won't throw (`// Autoplay blocked — that's OK, poster will show`)
- Silent rejections for spam prevention (`// Silent reject`)

**Comment Style:**
- Single-line comments preferred: `// comment`
- Inline comments on same line as code when brief
- Block comments for longer explanations

**JSDoc/TSDoc:**
- No JSDoc comments detected in codebase
- TypeScript interfaces document prop expectations implicitly through type definitions
- Function signatures are self-documenting with type annotations

## Function Design

**Size:**
- Most functions 30-100 lines
- Page components larger (200-500 lines) due to JSX structure
- Helper functions kept short (<20 lines when possible)

**Parameters:**
- Props destructured in function signature for components
- API handlers receive `NextRequest` object
- Utility functions use direct parameters, not objects (except for labeled options)

**Example:**

```typescript
// Component with destructured props
export default function Button({
  variant = "primary",
  size = "md",
  href,
  loading = false,
  disabled = false,
  type = "button",
  className = "",
  children,
  onClick,
}: ButtonProps) { ... }

// Utility function with simple parameters
function getRateLimitKey(req: NextRequest): string { ... }
```

**Return Values:**
- React components return JSX
- Utility functions return typed values (`string`, `boolean`, `Promise<T>`)
- API handlers return `NextResponse` objects
- Async functions used for I/O operations (database, email, file reads)

## Module Design

**Exports:**
- Components exported as default (`export default function Hero()`)
- Utilities exported as named exports (`export function createClient()`)
- Types exported as named exports (`type ButtonProps = ...`)
- No barrel files detected — imports are explicit per module

**File-per-Component Pattern:**
- One component per file
- UI components in `src/components/` or `src/components/ui/`
- Each component self-contained with internal state management

**Example Structure:**

```typescript
// Single file, default export
// src/components/ui/Button.tsx
interface ButtonProps { ... }
type ButtonVariant = ...
const variantClasses = { ... }
export default function Button({ ... }) { ... }

// Single file, named export
// src/lib/supabase/client.ts
export function createClient() { ... }
```

**Shared Constants:**
- Centralized in `src/data/constants.ts`
- Used by multiple components via imports
- Prevents duplication of option lists

## Client/Server Boundary

**Client Components:**
- Pages with interactivity marked `"use client"` at top
- Examples: `Hero.tsx`, `Navbar.tsx`, `audit/page.tsx`, `quiz/page.tsx`
- Use `useState`, `useEffect`, event handlers

**Server Components:**
- Default in App Router (no `"use client"`)
- Used for layouts, static content, metadata generation
- Examples: `layout.tsx`, API route handlers

**Server Utils:**
- Database operations in `src/lib/supabase/server.ts`
- Async/await pattern with try-catch
- Used from API routes and Server Components

---

*Convention analysis: 2026-03-29*
