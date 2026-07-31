# Smart Expense Tracker

A modern, enterprise-grade personal expense tracker built with Next.js (App Router, Turbopack) and Tailwind CSS. The user interface features a cinematic dark mode with glassmorphic accents, a floating navigation bar, interactive dashboard summaries, and fully functional CRM components.

## Core Features
1. **Add Expense**: Log new expenses with a title, amount (formatted in Indian Rupees ₹), category, and date.
2. **View Expenses**: Browse all transactions in a clean, borderless list.
3. **Filter Expenses**: Filter transaction logs dynamically by category.
4. **Total Calculation**: Displays overall spending totals and filtered category totals automatically.
5. **Delete Expense**: Remove any logged transaction with one-click deletion.
6. **Unified CRM & Financial Features**: 
   - Deals Kanban Pipeline (`/deals`)
   - Contacts Directory (`/contacts`)
   - Company profiles (`/companies`)
   - Tasks management board (`/tasks`)
   - Interactive calendar (`/calendar`)
   - Messaging inbox (`/inbox`)
   - Automated workflow builder (`/automation`)
   - Comprehensive audit log (`/activities`)
   - Interactive trend charts (`/reports`)
   - Global Cmd+K Search modal for quick module navigation.

---

## Installation & Setup

Please follow these exact commands to install dependencies, run the server, and execute tests.

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Start the Server
To start the Next.js development server:
```bash
pnpm run dev
```
The application will be accessible at [http://localhost:3000](http://localhost:3000).

### 3. Run the Test Suite
To run the automated Jest unit tests covering all core expense service layer logic:
```bash
pnpm run test
```

---

## API Endpoints (Local Storage)
All expense data is stored locally in `data/expenses.json` (created automatically on first run).
- `GET /api/expenses` - Retrieve all expenses (supports filtering with `?category=Food`)
- `POST /api/expenses` - Add a new expense (JSON body requires `title`, `amount`, `category`, and `date`)
- `GET /api/expenses/total` - Get overall expense total (supports category filter with `?category=Food`)
- `DELETE /api/expenses/[id]` - Delete a transaction by its unique ID
