"use client";
import Button from '@workspace/ui/Button';

export default function ExpenseTable({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return (
      <div className="text-center py-16 bg-[#0a0a0a] border border-white/5 rounded-3xl">
        <div className="w-16 h-16 mx-auto mb-4 bg-white/5 rounded-full flex items-center justify-center text-2xl">
          🔍
        </div>
        <p className="text-white/50 text-lg">No expenses found.</p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/10" role="region" aria-label="Expenses list" tabIndex="0">
      <div className="overflow-x-auto scrollbar-hide">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10 bg-black/40">
              <th scope="col" className="px-6 py-5 text-xs font-semibold text-white/50 uppercase tracking-widest whitespace-nowrap">Date</th>
              <th scope="col" className="px-6 py-5 text-xs font-semibold text-white/50 uppercase tracking-widest whitespace-nowrap">Title</th>
              <th scope="col" className="px-6 py-5 text-xs font-semibold text-white/50 uppercase tracking-widest whitespace-nowrap">Category</th>
              <th scope="col" className="px-6 py-5 text-xs font-semibold text-white/50 uppercase tracking-widest whitespace-nowrap text-right">Amount</th>
              <th scope="col" className="px-6 py-5 text-xs font-semibold text-white/50 uppercase tracking-widest whitespace-nowrap text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {expenses.map((expense) => (
              <tr key={expense.id} className="hover:bg-white/[0.02] transition-colors group">
                <td className="px-6 py-5 text-sm text-white/60 whitespace-nowrap font-medium">
                  {new Date(expense.date).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </td>
                <td className="px-6 py-5">
                  <span className="text-base font-medium text-white group-hover:text-blue-400 transition-colors">{expense.title}</span>
                </td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#111] text-white/70 border border-white/10 whitespace-nowrap">
                    {expense.category}
                  </span>
                </td>
                <td className="px-6 py-5 text-right whitespace-nowrap">
                  <span className="text-base font-medium text-white">₹{expense.amount.toFixed(2)}</span>
                </td>
                <td className="px-6 py-5 text-right whitespace-nowrap">
                  <button
                    onClick={() => onDelete(expense.id)}
                    className="text-red-400 hover:text-red-300 px-3 py-1.5 rounded-full hover:bg-red-500/10 transition-colors text-sm font-medium"
                    aria-label={`Delete expense ${expense.title}`}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
