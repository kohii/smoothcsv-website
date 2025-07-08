# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the marketing website for SmoothCSV (https://smoothcsv.com/), a CSV editor application. The website is built with Astro 4.16.6 using server-side rendering and deployed to Cloudflare Pages.

## Key Commands

### Development
- `pnpm dev` or `pnpm start` - Start development server on http://localhost:4321
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally

### Code Quality
- `pnpm lint` - Run Biome linter
- `pnpm lint:fix` - Auto-fix linting issues
- `pnpm test` - Run all tests (searches for `*.test.ts` files in src/)

### Deployment
- `pnpm pages:deploy` - Deploy to Cloudflare Pages (requires CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN)
- Note: Deployment is automated via GitHub Actions on push to main (production) or other branches (preview).

## Architecture

### Technology Stack
- **Framework**: Astro with SSR (server-side rendering)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with Typography plugin
- **Linting**: Biome (configured with tabs and double quotes)
- **Testing**: tsx with Node.js built-in test runner
- **Deployment**: Cloudflare Pages via Wrangler

### Directory Structure
- `src/components/` - Reusable Astro components
- `src/pages/` - Route pages (includes `/ja/` for Japanese versions)
- `src/i18n/` - Internationalization logic and translations
- `src/data/` - Data files (blog articles)
- `src/layouts/` - Page layouts
- `src/utils/` - Utility functions
- `public/` - Static assets and legacy version documentation

### Internationalization
The site supports English (default) and Japanese with manual routing:
- Language detection via URL, cookie, or Accept-Language header
- Per-path language support configured in `src/i18n/constants.ts`
- Middleware handles automatic redirects based on user preference
- Japanese pages are under `/ja/` paths

### Blog System
Blog articles are external links to:
- English articles: dev.to
- Japanese articles: zenn.dev

Articles are managed in `src/data/blogArticles.ts` and filtered by language.

### Important Configuration
- **Biome**: All code must use tabs for indentation and double quotes for strings
- **TypeScript**: Strict mode enabled with path aliases (@components, @assets, @utils, @i18n)
- **Environment**: PUBLIC_SMOOTHCSV_VERSION is fetched from GitHub releases during deployment
- **Node version**: (see .node-version)
- **Package manager**: pnpm

### Testing
Tests use Node.js built-in test runner with the pattern `*.test.ts`:
```typescript
import { test } from "node:test";
import assert from "node:assert";
```

