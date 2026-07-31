"use client";
import { useState } from 'react';

const INITIAL_COMPANIES = [
  { id: '1', name: 'Acme Corporation', domain: 'acmecorp.in', size: '250-500', industry: 'Cloud & Tech', annualSpend: 450000 },
  { id: '2', name: 'Stark Industries', domain: 'stark.io', size: '1000+', industry: 'Defense & Robotics', annualSpend: 1200000 },
  { id: '3', name: 'Wayne Enterprises', domain: 'wayne.com', size: '500-1000', industry: 'Conglomerate', annualSpend: 850000 },
  { id: '4', name: 'Cyberdyne Systems', domain: 'cyberdyne.ai', size: '100-250', industry: 'AI & Machine Learning', annualSpend: 320000 },
];

export default function CompanyList() {
  const [companies, setCompanies] = useState(INITIAL_COMPANIES);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {companies.map(company => (
        <div key={company.id} className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between gap-6 group">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-display font-medium text-white group-hover:text-blue-400 transition-colors">{company.name}</h3>
              <a href={`https://${company.domain}`} target="_blank" rel="noreferrer" className="text-xs text-white/50 hover:underline">{company.domain}</a>
            </div>
            <span className="px-3 py-1 rounded-full bg-white/5 text-white/70 text-xs border border-white/10">{company.industry}</span>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5 text-sm">
            <div>
              <span className="text-xs text-white/40 block">Company Size</span>
              <span className="font-medium text-white">{company.size} employees</span>
            </div>
            <div>
              <span className="text-xs text-white/40 block">Total Spend</span>
              <span className="font-medium text-white">₹{company.annualSpend.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
