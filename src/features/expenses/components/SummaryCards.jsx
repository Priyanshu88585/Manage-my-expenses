export default function SummaryCards({ expenses }) {
  const totalAmount = expenses.reduce((sum, e) => sum + e.amount, 0);
  const expenseCount = expenses.length;
  const categories = [...new Set(expenses.map((e) => e.category))];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="region" aria-label="Expense summary">
      
      {/* Total Spent Card - Large Focus */}
      <div className="relative overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/10 group transition-all duration-500 hover:border-white/20 p-8 lg:col-span-2">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        <div className="relative z-10 flex flex-col justify-between h-full min-h-[120px]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-white/50 uppercase tracking-widest">Total Spent</span>
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:bg-white/10 transition-colors">
              💰
            </div>
          </div>
          <div>
            <span className="text-5xl md:text-6xl font-display font-medium text-white tracking-tighter">
              ₹{totalAmount.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* Grid for the other two cards */}
      <div className="grid grid-cols-1 gap-6">
        
        {/* Expenses Count */}
        <div className="relative overflow-hidden rounded-3xl bg-[#111] border border-white/10 group transition-all duration-300 hover:border-white/20 p-6 flex flex-col justify-center">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none"></div>
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-medium text-white/50 uppercase tracking-widest">Transactions</span>
              <span className="text-3xl font-display font-medium text-white tracking-tight">{expenseCount}</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xl">
              🧾
            </div>
          </div>
        </div>

        {/* Categories Count */}
        <div className="relative overflow-hidden rounded-3xl bg-[#111] border border-white/10 group transition-all duration-300 hover:border-white/20 p-6 flex flex-col justify-center">
           <div className="absolute bottom-0 left-0 w-32 h-32 bg-[radial-gradient(circle_at_bottom_left,rgba(0,204,255,0.05),transparent_70%)] pointer-events-none"></div>
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-medium text-white/50 uppercase tracking-widest">Categories</span>
              <span className="text-3xl font-display font-medium text-white tracking-tight">{categories.length}</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xl">
              🏷️
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
