"use client";

export default function RecurringExpenses({ subscriptions = [] }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="text-xl font-display font-medium text-white flex items-center gap-2">
            Recurring Expenses
            <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-[10px] text-purple-400 uppercase tracking-wider font-bold">Autopilot</span>
          </h3>
          <p className="text-xs text-white/50 mt-1">Manage your subscriptions and recurring bills.</p>
        </div>
        <button className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-xs hover:bg-white/10 transition-colors">
          View All
        </button>
      </div>

      <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="p-4 text-xs font-semibold text-white/50 uppercase tracking-wider">Subscription</th>
                <th className="p-4 text-xs font-semibold text-white/50 uppercase tracking-wider">Amount</th>
                <th className="p-4 text-xs font-semibold text-white/50 uppercase tracking-wider">Next Billing</th>
                <th className="p-4 text-xs font-semibold text-white/50 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {subscriptions.map(sub => (
                <tr key={sub.id} className="hover:bg-white/5 transition-colors group">
                  <td className="p-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-white">{sub.title}</span>
                      <span className="text-[10px] text-white/40 uppercase tracking-wide">{sub.frequency}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-white">₹{sub.amount.toLocaleString('en-IN')}</td>
                  <td className="p-4 text-sm text-white/70">{new Date(sub.nextDate).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                  <td className="p-4">
                    {sub.autoPay ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Active Auto-pay
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 text-xs font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Manual Payment
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
