"use client";

export default function AnalyticsOverview() {
  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Top Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 flex flex-col gap-2">
          <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">Monthly Revenue</span>
          <span className="text-4xl font-display font-medium text-emerald-400">₹8,45,000</span>
          <span className="text-xs text-emerald-400/80 mt-1">↑ +14% vs last month</span>
        </div>
        <div className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 flex flex-col gap-2">
          <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">Net Profit Margin</span>
          <span className="text-4xl font-display font-medium text-blue-400">64.2%</span>
          <span className="text-xs text-blue-400/80 mt-1">↑ +3.5% efficiency</span>
        </div>
        <div className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 flex flex-col gap-2">
          <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">Avg Expense / Deal</span>
          <span className="text-4xl font-display font-medium text-white">₹12,400</span>
          <span className="text-xs text-white/40 mt-1">Controlled</span>
        </div>
      </div>

      {/* Visual Chart Placeholder Block */}
      <div className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-display font-medium text-white">Revenue vs Expense Trend</h3>
          <div className="flex gap-2">
            <button className="px-4 py-1.5 rounded-full bg-white text-black text-xs font-medium">30 Days</button>
            <button className="px-4 py-1.5 rounded-full bg-white/5 text-white/60 text-xs font-medium">1 Year</button>
          </div>
        </div>

        {/* Mock Chart Visualization Bars */}
        <div className="h-64 w-full flex items-end justify-between gap-4 pt-12 border-b border-white/10 pb-4">
          {[
            { label: 'Week 1', rev: 80, exp: 40 },
            { label: 'Week 2', rev: 95, exp: 50 },
            { label: 'Week 3', rev: 60, exp: 35 },
            { label: 'Week 4', rev: 110, exp: 45 },
          ].map((item, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
              <div className="w-full flex items-end justify-center gap-2 h-full">
                <div className="w-1/3 bg-emerald-500/80 rounded-t-lg transition-all duration-500 hover:bg-emerald-400" style={{ height: `${item.rev}%` }}></div>
                <div className="w-1/3 bg-blue-500/80 rounded-t-lg transition-all duration-500 hover:bg-blue-400" style={{ height: `${item.exp}%` }}></div>
              </div>
              <span className="text-xs font-mono text-white/40">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-6 text-xs text-white/70">
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-emerald-500"></span> Revenue</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-blue-500"></span> Expenses</span>
          </div>
          <button className="px-5 py-2 rounded-full border border-white/20 text-xs text-white hover:bg-white/10">
            Export Financial PDF
          </button>
        </div>
      </div>
    </div>
  );
}
