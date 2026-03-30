# Testing Patterns

**Analysis Date:** 2026-03-29

## Test Framework

**Status:** Not detected

**No testing framework installed:**
- No Jest, Vitest, or testing library in `package.json`
- No test files found in codebase (no `*.test.*` or `*.spec.*` files)
- No test configuration files (`jest.config.*`, `vitest.config.*`)

**Current Setup:**
- ESLint configured but only for linting, not testing
- TypeScript strict mode enabled for type safety
- No testing infrastructure in place

## Implications

**Testing Gap:**
- API routes lack automated test coverage
- React components untested
- Rate-limiting logic not validated by tests
- Supabase integration logic untested
- Email sending logic untested

**Risk Areas Without Tests:**
- `src/app/api/audit/route.ts`: Rate limiting, honeypot validation, webhook forwarding
- `src/app/api/tai-lieu/route.ts`: Rate limiting, PDF handling, email sending via Resend
- `src/components/` components: State management, event handling, conditional rendering
- `src/lib/supabase/` clients: Database operations, error handling

## Recommended Testing Strategy

**Priority 1: API Routes**

```typescript
// Example test structure for api/audit/route.ts
describe("POST /api/audit", () => {
  it("should reject requests without name and phone", async () => {
    const response = await POST(
      new NextRequest("http://localhost/api/audit", {
        method: "POST",
        body: JSON.stringify({ name: "", phone: "" }),
      })
    );
    expect(response.status).toBe(400);
  });

  it("should rate limit after MAX_REQUESTS", async () => {
    // Test rate limiting logic
  });

  it("should silently accept honeypot submissions", async () => {
    // Test spam filter
  });

  it("should save to Supabase and forward to webhook", async () => {
    // Test database insert and webhook call
  });
});
```

**Priority 2: React Components**

```typescript
// Example test structure for components
describe("Button component", () => {
  it("renders with primary variant by default", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toHaveClass("bg-primary");
  });

  it("renders as link when href prop provided", () => {
    render(<Button href="/test">Link</Button>);
    expect(screen.getByRole("link")).toHaveAttribute("href", "/test");
  });

  it("shows loading state", () => {
    render(<Button loading>Submit</Button>);
    expect(screen.getByText("Đang gửi...")).toBeInTheDocument();
  });
});
```

**Priority 3: Integration Tests**

```typescript
// Example: Form submission flow
describe("Audit form submission", () => {
  it("should submit form data to API", async () => {
    render(<AuditPage />);

    // Fill form
    fireEvent.change(screen.getByName("name"), { target: { value: "John" } });
    fireEvent.change(screen.getByName("phone"), { target: { value: "0123456789" } });

    // Submit
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    // Verify success state
    expect(screen.getByText(/success/i)).toBeInTheDocument();
  });
});
```

## Test File Organization

**Recommended Pattern:**

```
src/
├── components/
│   ├── Hero.tsx
│   ├── Hero.test.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   └── Button.test.tsx
├── lib/
│   ├── supabase/
│   │   ├── client.ts
│   │   ├── client.test.ts
│   │   ├── server.ts
│   │   └── server.test.ts
├── app/
│   ├── api/
│   │   ├── audit/
│   │   │   ├── route.ts
│   │   │   └── route.test.ts
│   │   └── tai-lieu/
│   │       ├── route.ts
│   │       └── route.test.ts
```

**Approach:** Co-located tests
- Test file lives in same directory as source file
- Same filename with `.test.ts/tsx` suffix
- Clear association between code and tests

## What Needs Testing

**Critical Path - API Routes:**

1. **Rate Limiting** (`src/app/api/audit/route.ts`, `src/app/api/tai-lieu/route.ts`)
   - Verify `isRateLimited()` correctly tracks requests
   - Verify 429 response after `MAX_REQUESTS` threshold
   - Verify rate limit window resets properly

2. **Spam Prevention** (Both API routes)
   - Verify honeypot field (`website`) silently rejects submissions
   - Verify no error message exposed to attacker

3. **Validation** (Both API routes)
   - Required fields: `name`, `phone` (audit), `email` (tai-lieu)
   - Invalid email detection in tai-lieu route
   - Return 400 status with user message

4. **External Integrations:**
   - Supabase insert errors logged but don't block response
   - Webhook failures logged but don't block response (should return 200 anyway)
   - Email sending errors in tai-lieu route return appropriate status

**Components:**

1. **Button Component** (`src/components/ui/Button.tsx`)
   - Renders as button by default, link when `href` provided
   - All variant classes applied correctly
   - Loading state shows "Đang gửi..."
   - Disabled state applies opacity and disables interaction

2. **Form Components** (`src/components/ui/FormField.tsx`)
   - Renders correct input type
   - Select field shows options
   - Textarea respects rows prop

3. **State-Heavy Components** (Hero, Navbar, Audit page)
   - Event handlers fire correctly
   - State updates reflect in UI
   - Multi-step forms progress correctly

## What NOT to Test

- Hardcoded strings in components (change when requirements change)
- Exact Tailwind class names (tested implicitly by visual regression)
- Third-party library behavior (assume it works)
- Environment variable presence (verify in integration tests instead)

## Testing Dependencies to Add

**Recommendation:**
```json
{
  "devDependencies": {
    "@testing-library/react": "^14",
    "@testing-library/jest-dom": "^6",
    "jest": "^29",
    "jest-environment-jsdom": "^29",
    "@types/jest": "^29"
  }
}
```

**Alternative:** Use Vitest (faster, better ESM support)
```json
{
  "devDependencies": {
    "vitest": "^1",
    "@testing-library/react": "^14",
    "@testing-library/jest-dom": "^6",
    "jsdom": "^24"
  }
}
```

## CI/CD Testing Strategy

**Pre-commit:** ESLint (already configured)
- Run: `npm run lint`
- Catches style and type errors

**Pre-push (if added):** Unit tests
- Run: `npm test` or `npm run test:unit`
- Coverage target: 70%+ for API routes, 50%+ for components

**Manual testing for:**
- Email sending (hard to automate — test in staging)
- Webhook forwarding (test with webhook.site)
- Rate limiting (can mock time in tests, but browser testing useful)
- Form submission flow (E2E recommended for user-facing forms)

## Coverage Goals (Future)

- API routes: 80%+ (critical for data flow)
- Components: 50%+ (visual testing preferred over unit tests)
- Utilities: 90%+ (small files, easy to test completely)
- Overall: 60%+ minimum

---

*Testing analysis: 2026-03-29*
