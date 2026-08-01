<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Specific Guidelines

- **Design System:** Use Tailwind CSS to implement the "Cinematic" design language (black base gradients, glassmorphic backdrop blurs `backdrop-blur-md`, subtle borders `border-white/10`, and smooth animations). Avoid pure white backgrounds; use `#0a0a0a` or black.
- **Currency:** Always use Indian Rupee (`₹`) for all monetary values and placeholders.
- **State Management:** For dashboard components, prefer inline editable states (`isEditing`) over separate edit pages or intrusive modals where possible.
- **Package Manager:** Use `pnpm` for all dependency management (`pnpm install`, `pnpm run dev`, `pnpm run test`).
- **Data Storage:** Read/write to local JSON files (`data/expenses.json` and `data/premium.json`) using Node.js `fs.promises` instead of connecting to a remote database.
