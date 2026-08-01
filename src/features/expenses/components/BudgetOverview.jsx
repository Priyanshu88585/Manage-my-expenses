"use client";

export default function BudgetOverview({ budgets = [], onAddClick }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="text-xl font-display font-medium text-white flex items-center gap-2">
            Smart Budgets 
            <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-[10px] text-blue-400 uppercase tracking-wider font-bold">Auto-tracked</span>
          </h3>
          <p className="text-xs text-white/50 mt-1">AI monitors your spending velocity against your limits.</p>
        </div>
        <button onClick={onAddClick} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-xs hover:bg-white/10 transition-colors">
          + Add Budget
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {budgets.map(budget => {
          const percent = Math.min((budget.spent / budget.limit) * 100, 100);
          const isOver = budget.spent > budget.limit;
          const isWarning = percent > 80 && !isOver;

          let barColor = 'bg-emerald-500';
          let textColor = 'text-emerald-400';
          let bgGlow = 'bg-emerald-500/5';
          if (isWarning) {
            barColor = 'bg-amber-500';
            textColor = 'text-amber-400';
            bgGlow = 'bg-amber-500/5';
          }
          if (isOver) {
            barColor = 'bg-red-500';
            textColor = 'text-red-400';
            bgGlow = 'bg-red-500/5';
          }

          return (
            <div key={budget.id} className={`p-5 rounded-2xl border border-white/5 ${bgGlow} transition-colors flex flex-col gap-3 group`}>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-white">{budget.category}</span>
                <span className={`text-xs font-bold ${textColor}`}>
                  {isOver ? 'Over Budget' : `${percent.toFixed(0)}% Spent`}
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden relative">
                <div 
                  className={`absolute top-0 left-0 h-full rounded-full ${barColor} transition-all duration-1000`} 
                  style={{ width: `${percent}%` }}
                ></div>
              </div>
              <div className="flex items-center justify-between text-xs text-white/50">
                <span>₹{budget.spent.toLocaleString('en-IN')} spent</span>
                <span>₹{budget.limit.toLocaleString('en-IN')} limit</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
