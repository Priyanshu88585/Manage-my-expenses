"use client";

const ACTIVITIES = [
  { id: '1', user: 'Priyanshu K.', action: 'Created new deal', target: 'Enterprise License (₹4,50,000)', time: '10 mins ago', icon: '💼' },
  { id: '2', user: 'System', action: 'Expense Logged', target: 'Office Supplies (₹4,500)', time: '1 hour ago', icon: '🧾' },
  { id: '3', user: 'Ananya R.', action: 'Updated Contact Score', target: 'Stark Industries (+15 pts)', time: '3 hours ago', icon: '⭐' },
  { id: '4', user: 'Vikram S.', action: 'Completed Task', target: 'Prepare Q3 Budget Proposal', time: 'Yesterday', icon: '✅' },
];

export default function ActivityTimeline() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-3xl mx-auto">
      <div className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 flex flex-col gap-6">
        <h3 className="text-xl font-display font-medium text-white">Recent Audit Logs</h3>

        <div className="relative pl-6 flex flex-col gap-8 border-l border-white/10">
          {ACTIVITIES.map(act => (
            <div key={act.id} className="relative flex items-start gap-4 group">
              <div className="absolute -left-[37px] top-0 w-8 h-8 rounded-full bg-[#111] border border-white/20 flex items-center justify-center text-sm">
                {act.icon}
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-sm text-white font-medium">
                  {act.user} <span className="text-white/50 font-normal">{act.action}</span>
                </div>
                <div className="text-xs text-blue-400 font-mono">{act.target}</div>
                <div className="text-[11px] text-white/30">{act.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
