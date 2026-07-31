"use client";

const EVENTS = [
  { day: 1, title: 'GST Filing Deadline', category: 'Tax' },
  { day: 5, title: 'Acme Renewal Meeting', category: 'Sales' },
  { day: 12, title: 'Payroll Processing', category: 'Finance' },
  { day: 18, title: 'Vendor Payments Clearance', category: 'Finance' },
  { day: 25, title: 'Monthly Expense Audit', category: 'Audit' },
];

export default function CalendarView() {
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-display font-medium text-white">August 2026</h2>
        <div className="flex gap-2">
          <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs">Month</span>
          <span className="px-3 py-1 rounded-full bg-white/5 text-white/50 text-xs">Week</span>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-3">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
          <div key={d} className="text-center text-xs font-semibold text-white/40 uppercase py-2">
            {d}
          </div>
        ))}

        {daysInMonth.map(d => {
          const event = EVENTS.find(e => e.day === d);
          return (
            <div key={d} className={`min-h-[100px] p-3 rounded-2xl border transition-all flex flex-col justify-between ${event ? 'bg-[#111] border-white/20' : 'bg-[#0a0a0a] border-white/5 hover:border-white/10'}`}>
              <span className="text-xs font-mono text-white/50">{d}</span>
              {event && (
                <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-[11px] text-blue-300 font-medium">
                  {event.title}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
