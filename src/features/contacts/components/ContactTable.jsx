"use client";
import { useState } from 'react';

const INITIAL_CONTACTS = [
  { id: '1', name: 'Vikram Sharma', email: 'vikram@acmecorp.in', phone: '+91 98765 43210', company: 'Acme Corp', role: 'VP Engineering', score: 92 },
  { id: '2', name: 'Ananya Roy', email: 'ananya@stark.io', phone: '+91 98123 45678', company: 'Stark Industries', role: 'Product Lead', score: 85 },
  { id: '3', name: 'Rohan Mehta', email: 'rohan@wayne.com', phone: '+91 97654 32109', company: 'Wayne Enterprises', role: 'CFO', score: 98 },
  { id: '4', name: 'Priya Nair', email: 'priya@cyberdyne.ai', phone: '+91 99887 76655', company: 'Cyberdyne Systems', role: 'Head of Operations', score: 78 },
];

export default function ContactTable() {
  const [contacts, setContacts] = useState(INITIAL_CONTACTS);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');

  const filtered = contacts.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase()) || 
    c.company.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setContacts(prev => [
      ...prev,
      { id: String(Date.now()), name, email, company: company || 'N/A', phone: '+91 90000 00000', role: 'Contact', score: 60 }
    ]);
    setName('');
    setEmail('');
    setCompany('');
    setShowModal(false);
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <input 
          type="text" 
          placeholder="Search contacts..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-80 bg-[#0a0a0a] border border-white/10 rounded-full px-5 py-3 text-sm text-white outline-none focus:border-white/30"
        />
        <button 
          onClick={() => setShowModal(true)}
          className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all shadow-[0_0_15px_rgba(255,255,255,0.15)]"
        >
          + Add Contact
        </button>
      </div>

      <div className="w-full overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/10">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10 bg-black/40 text-xs font-semibold text-white/50 uppercase tracking-widest">
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Company & Role</th>
              <th className="px-6 py-4">Contact Info</th>
              <th className="px-6 py-4 text-right">Lead Score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {filtered.map(contact => (
              <tr key={contact.id} className="hover:bg-white/[0.02] transition-colors">
                <td className="px-6 py-4">
                  <div className="font-medium text-white text-sm">{contact.name}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-white/80">{contact.company}</div>
                  <div className="text-xs text-white/50">{contact.role}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-white/80">{contact.email}</div>
                  <div className="text-xs text-white/50">{contact.phone}</div>
                </td>
                <td className="px-6 py-4 text-right">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {contact.score} / 100
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-[#0a0a0a] border border-white/15 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-display font-medium text-white mb-6">Add New Contact</h3>
            <form onSubmit={handleAdd} className="flex flex-col gap-4">
              <div>
                <label className="text-xs text-white/60 mb-1 block">Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sen"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none"
                  required
                />
              </div>
              <div>
                <label className="text-xs text-white/60 mb-1 block">Email</label>
                <input
                  type="email"
                  placeholder="e.g. rahul@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none"
                  required
                />
              </div>
              <div>
                <label className="text-xs text-white/60 mb-1 block">Company</label>
                <input
                  type="text"
                  placeholder="e.g. TechCorp"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none"
                />
              </div>
              <div className="flex justify-end gap-3 mt-4">
                <button type="button" onClick={() => setShowModal(false)} className="px-5 py-2.5 rounded-full text-sm text-white/70">Cancel</button>
                <button type="submit" className="px-6 py-2.5 rounded-full bg-white text-black font-medium text-sm">Save Contact</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
