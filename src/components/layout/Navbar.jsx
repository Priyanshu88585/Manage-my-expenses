"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '@workspace/ui/Button';
import { MoreVertical } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <nav 
        className={`pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${
          scrolled 
            ? 'bg-black/40 backdrop-blur-md border border-white/10 shadow-lg w-full max-w-[1200px]' 
            : 'bg-transparent w-full max-w-[1200px]'
        }`}
      >
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-3xl font-bold"> ₹ </span>
            <span className="font-display font-bold text-white text-lg tracking-tight group-hover:opacity-80 transition-opacity">
              Manage My Expense
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <Link href="/#overview" className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-white' : 'text-white/70 hover:text-white'}`}>Overview</Link>
          <Link href="/#features" className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-white' : 'text-white/70 hover:text-white'}`}>Features</Link>
          <Link href="/#capabilities" className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-white' : 'text-white/70 hover:text-white'}`}>Capabilities</Link>
          <Link href="/dashboard" className={`text-sm font-medium transition-colors ${isActive('/dashboard') ? 'text-white font-semibold' : 'text-white/70 hover:text-white'}`}>Dashboard</Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <Link href="https://twitter.com" className="text-white/60 hover:text-white transition-colors" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </Link>
            <Link href="https://instagram.com" className="text-white/60 hover:text-white transition-colors" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </Link>
            <div className="w-px h-4 bg-white/20 mx-2"></div>
            <Link href="/login">
              <Button variant="outline" className="h-9 px-4 text-xs font-medium uppercase tracking-wider text-white border-white/20 hover:bg-white hover:text-black">Log In</Button>
            </Link>
            <Link href="/login">
              <Button variant="primary" className="h-9 px-4 text-xs font-medium uppercase tracking-wider bg-white text-black hover:bg-zinc-200">Start Free</Button>
            </Link>
          </div>

          <button className="md:hidden text-white/60 hover:text-white" aria-label="Menu">
            <MoreVertical className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </header>
  );
}
