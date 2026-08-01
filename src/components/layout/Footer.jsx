import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full py-12 px-6 bg-transparent z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity drop-shadow-[0_8px_16px_rgba(0,0,0,1)]">
          <span className="text-xl font-bold text-white">₹</span>
          <span className="font-display font-medium text-white tracking-tight">Manage My Expense</span>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50 drop-shadow-[0_8px_16px_rgba(0,0,0,1)]">
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          <span>&copy; {year} Manage My Expense.</span>
        </div>
      </div>
    </footer>
  );
}
