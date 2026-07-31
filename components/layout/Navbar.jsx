"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path) => pathname === path;

  return (
    <header className="sticky top-0 z-sticky bg-black/75 backdrop-blur-xl border-b border-border h-16 flex items-center">
      <nav className="flex items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main Navigation">
        <Link href="/" className="flex items-center gap-2 no-underline text-text-heading font-bold text-lg tracking-tight transition-opacity duration-150 hover:opacity-85" onClick={closeMenu}>
          <span className="text-xl">💰</span>
          <span>ExpenseTracker</span>
        </Link>

        <button
          className="md:hidden flex flex-col justify-center gap-1.5 w-7 h-7 cursor-pointer bg-transparent border-none p-0 z-50"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <span className={`block w-full h-[2px] bg-text-primary rounded-full transition-all duration-250 origin-center ${isOpen ? 'translate-y-[7px] rotate-45' : ''}`}></span>
          <span className={`block w-full h-[2px] bg-text-primary rounded-full transition-all duration-250 origin-center ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-full h-[2px] bg-text-primary rounded-full transition-all duration-250 origin-center ${isOpen ? '-translate-y-[7px] -rotate-45' : ''}`}></span>
        </button>

        <ul className={`md:flex md:items-center md:gap-8 list-none md:static md:flex-row md:bg-transparent md:p-0 md:h-auto md:border-none md:translate-y-0 md:opacity-100 md:pointer-events-auto fixed top-16 left-0 right-0 flex flex-col bg-black/95 backdrop-blur-xl p-8 gap-6 border-b border-border transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-[120%] opacity-0 pointer-events-none md:opacity-100'}`}>
          <li>
            <Link
              href="/"
              className={`text-sm md:text-sm font-medium uppercase tracking-wider py-2 relative transition-colors duration-150 group ${isActive('/') ? 'text-accent' : 'text-text-secondary hover:text-text-heading'}`}
              onClick={closeMenu}
            >
              Home
              <span className={`absolute -bottom-[2px] left-0 h-[2px] rounded-full transition-all duration-250 bg-accent ${isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className={`text-sm md:text-sm font-medium uppercase tracking-wider py-2 relative transition-colors duration-150 group ${isActive('/dashboard') ? 'text-accent' : 'text-text-secondary hover:text-text-heading'}`}
              onClick={closeMenu}
            >
              Dashboard
              <span className={`absolute -bottom-[2px] left-0 h-[2px] rounded-full transition-all duration-250 bg-accent ${isActive('/dashboard') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
