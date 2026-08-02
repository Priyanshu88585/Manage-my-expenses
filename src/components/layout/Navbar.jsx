"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '@workspace/ui/Button';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (path) => pathname === path;

  const NAV_LINKS = [
    { href: '/#overview', label: 'Overview', match: '/' },
    { href: '/#features', label: 'Features', match: '/' },
    { href: '/#capabilities', label: 'Capabilities', match: '/' },
    { href: '/dashboard', label: 'Dashboard', match: '/dashboard' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
        <nav 
          className={`pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${
            scrolled 
              ? 'bg-black/40 backdrop-blur-md border border-white/10 shadow-lg w-full max-w-[1300px]' 
              : 'bg-transparent w-full max-w-[1450px]'
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
            {NAV_LINKS.map(link => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`text-sm font-medium transition-colors ${isActive(link.match) ? 'text-white' : 'text-white/70 hover:text-white'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <Link href="/about">
                <Button variant="outline" className="h-9 px-4 text-xs font-medium uppercase tracking-wider text-white border-white/20 hover:bg-white hover:text-black">About</Button>
              </Link>
              <div className="w-px h-4 bg-white/20 mx-2"></div>
              <Link href="/login">
                <Button variant="outline" className="h-9 px-4 text-xs font-medium uppercase tracking-wider text-white border-white/20 hover:bg-white hover:text-black">Log In</Button>
              </Link>
              <Link href="/contact">
                <Button variant="primary" className="h-9 px-4 text-xs font-medium uppercase tracking-wider bg-white text-black hover:bg-zinc-200">Let's Talk</Button>
              </Link>
            </div>

            <button 
              className="md:hidden text-white/60 hover:text-white transition-colors" 
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[49] md:hidden">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-[80px] left-4 right-4 bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 shadow-2xl animate-fade-in-up z-10">
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map(link => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive(link.match) 
                      ? 'text-white bg-white/10' 
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="h-px bg-white/10 my-3" />
              
              <Link 
                href="/about"
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive('/about') ? 'text-white bg-white/10' : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                About
              </Link>
              <Link 
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive('/contact') ? 'text-white bg-white/10' : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                Contact
              </Link>
              <Link 
                href="/reports"
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive('/reports') ? 'text-white bg-white/10' : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                Reports
              </Link>

              <div className="h-px bg-white/10 my-3" />
              
              <div className="flex flex-col gap-3 mt-2">
                <Link href="/login" onClick={() => setMobileOpen(false)}>
                  <Button variant="outline" className="w-full h-12 text-sm font-medium uppercase tracking-wider text-white border-white/20 hover:bg-white hover:text-black">
                    Log In
                  </Button>
                </Link>
                <Link href="/dashboard" onClick={() => setMobileOpen(false)}>
                  <Button variant="primary" className="w-full h-12 text-sm font-medium uppercase tracking-wider bg-white text-black hover:bg-zinc-200">
                    Go to Dashboard
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
