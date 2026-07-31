export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-black py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
          <span className="text-xl">💰</span>
          <span className="font-display font-medium text-white tracking-tight">ExpenseTracker</span>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Help</a>
          <span>&copy; {year} Smart Expense Tracker.</span>
        </div>
      </div>
    </footer>
  );
}
