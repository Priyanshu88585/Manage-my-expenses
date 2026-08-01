"use client";
import { TrendingUp, Edit2 } from 'lucide-react';

export default function NetWorthDashboard({ assets = 0, liabilities = 0, onEditClick }) {
  const netWorth = assets - liabilities;

  return (
    <div className="relative overflow-hidden p-6 rounded-3xl bg-[#0a0a0a] border border-white/10 flex flex-col gap-6 group hover:border-white/20 transition-all duration-500">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-blue-900/20 to-transparent blur-[60px] pointer-events-none group-hover:opacity-100 transition-opacity duration-700 opacity-50"></div>
      
      <div className="relative z-10 flex flex-col">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">Total Net Worth</span>
          {onEditClick && (
            <button onClick={onEditClick} className="text-white/30 hover:text-white transition-colors" title="Update Base Values">
              <Edit2 className="w-4 h-4" />
            </button>
          )}
        </div>
        <span className="text-4xl font-display font-medium text-white tracking-tighter">
          ₹{netWorth.toLocaleString('en-IN')}
        </span>
        <div className="flex items-center gap-1.5 mt-2 text-xs font-bold text-emerald-400">
          <TrendingUp className="w-3 h-3" />
          <span>+8.4% vs last month</span>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] text-white/40 uppercase tracking-widest">Assets</span>
          <span className="text-lg font-display font-medium text-emerald-400">₹{assets.toLocaleString('en-IN')}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] text-white/40 uppercase tracking-widest">Liabilities</span>
          <span className="text-lg font-display font-medium text-red-400">₹{liabilities.toLocaleString('en-IN')}</span>
        </div>
      </div>
    </div>
  );
}
