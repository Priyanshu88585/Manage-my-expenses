function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 mt-24">
      <div className="flex flex-col items-center gap-4 text-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="text-xl">💰</span>
          <span className="text-base font-semibold text-text-heading">ExpenseTracker</span>
        </div>
        <p className="text-sm text-text-muted">
          &copy; {year} Smart Expense Tracker. Built with Next.js & Tailwind.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
