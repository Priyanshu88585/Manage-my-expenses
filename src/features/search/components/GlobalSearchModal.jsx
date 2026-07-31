"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const QUICK_LINKS = [
  { label: 'Expense Dashboard', href: '/dashboard', icon: '💰' },
  { label: 'Deals & Pipeline', href: '/deals', icon: '💼' },
  { label: 'Contacts Directory', href: '/contacts', icon: '👤' },
  { label: 'Company Profiles', href: '/companies', icon: '🏢' },
  { label: 'Task Management', href: '/tasks', icon: '✅' },
  { label: 'Financial Calendar', href: '/calendar', icon: '📅' },
  { label: 'Inbox & Messages', href: '/inbox', icon: '📥' },
  { label: 'Financial Reports', href: '/reports', icon: '📊' },
  { label: 'Workflow Automations', href: '/automation', icon: '⚡' },
  { label: 'Billing Settings', href: '/settings/billing', icon: '💳' },
];

export default function GlobalSearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!open) return null;

  const filtered = QUICK_LINKS.filter((l) =>
    l.label.toLowerCase().includes(query.toLowerCase())
  );

  const navigateTo = (href) => {
    setOpen(false);
    router.push(href);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-24 px-4">
      <div className="w-full max-w-xl bg-[#0a0a0a] border border-white/15 rounded-3xl p-6 shadow-2xl animate-fade-in-scale">
        <div className="flex items-center gap-3 pb-4 border-b border-white/10">
          <span className="text-xl">🔍</span>
          <input
            type="text"
            placeholder="Type to search modules, deals, reports... (Esc to close)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-white text-base outline-none placeholder-white/40"
            autoFocus
          />
          <button onClick={() => setOpen(false)} className="text-xs text-white/40 hover:text-white">Esc</button>
        </div>

        <div className="py-4 flex flex-col gap-1 max-h-80 overflow-y-auto">
          {filtered.map((link, idx) => (
            <button
              key={idx}
              onClick={() => navigateTo(link.href)}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 text-left transition-colors"
            >
              <span className="text-lg">{link.icon}</span>
              <span className="text-sm font-medium text-white">{link.label}</span>
            </button>
          ))}
          {filtered.length === 0 && (
            <div className="py-8 text-center text-sm text-white/40">No matching modules found.</div>
          )}
        </div>
      </div>
    </div>
  );
}
