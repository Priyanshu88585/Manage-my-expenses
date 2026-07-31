# AI Notes & Collaboration Documentation

This document details the collaboration between the developer and the AI agent (using the Antigravity IDE) during the development of the Smart Expense Tracker.

## 1. AI-Generated vs. Developer-Written Code

### AI-Generated Parts
- **Unified Architecture Migrations:** Restructured the codebase from separate Next.js and Express servers into a consolidated, monorepo/workspace Next.js application, reducing dev server startup complexity.
- **Cinematic Design System:** Implemented the Google Flow design language in Tailwind/CSS, introducing smooth backdrop-blur glassmorphism, black base gradients, and custom animations (`float-slow`, `fade-in-up`).
- **CRM Feature Modules:** Scaffolding and interactive mockup components for 13 CRM and financial sub-modules (Deals board, Contacts table, Inbox thread list, Activitytimeline, AutomationBuilder, AnalyticsOverview).
- **ESM Test Suite:** Generated the Jest test suite in `tests/expenses.test.js` targeting the ES-module based business logic services.

### Developer-Written & Directed Parts
- **Design Guidance & Feedback:** Instigated the aesthetic direction ("strict force re-design" matching Google Flow styling, Rupee symbol `₹` currency updates).
- **Core Requirements:** Specified the Next.js API structure, storage engine choice (`data/expenses.json`), validation rules, and page routing.
- **Troubleshooting Direction:** Identified navigation bugs (e.g. hash links not functioning while on the `/dashboard` route) and instructed the fix.

---

## 2. Validations, Tests, and Modifications

- **Path Resolving fixes:** Modified `tailwind.config.js` content paths to escape monorepo directory constraints properly, eliminating Turbopack build crashes.
- **Currency Localisation:** Changed all currency instances from USD (`$`) to Indian Rupee (`₹`) across the landing page, dashboard summary cards, forms, and tables.
- **Navbar Absolute Anchors:** Changed marketing navigation links from hash fragments (e.g. `#features`) to absolute paths (e.g. `/#features`) to prevent dead links when users clicked them from `/dashboard`.
- **ESM Node VM Environment:** Configured Jest execution inside `package.json` utilizing `NODE_OPTIONS=--experimental-vm-modules` to support ES module parsing natively.

---

## 3. Suggestions Rejected & Rationale

- **External Swiper Library:** The AI suggested importing external swiper libraries for the features carousel on the landing page. This was rejected to maintain a fast, clean production build and avoid unnecessary third-party package dependencies. Instead, it was replaced with a lightweight CSS snap-scroll horizontal container.
- **Database Engine (SQL/NoSQL):** The AI proposed introducing SQLite or MongoDB. This was rejected to keep the deployment simple, lightweight, and compliant with the assignment's rule of using local JSON file data storage.
