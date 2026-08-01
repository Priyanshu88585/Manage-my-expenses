"use client";
import Button from '@workspace/ui/Button';
import Papa from 'papaparse';

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

  const exportCSV = () => {
    if (!expenses.length) return;
    const csvData = expenses.map(e => ({
      Date: new Date(e.date).toLocaleDateString(),
      Title: e.title,
      Category: e.category,
      Amount: e.amount
    }));
    const csv = Papa.unparse(csvData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", `tax_export_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportPDF = () => {
    if (!expenses.length) return;
    import('jspdf').then(({ default: jsPDF }) => {
      import('jspdf-autotable').then(({ default: autoTable }) => {
        const doc = new jsPDF();
        doc.text("Tax Data Export", 14, 15);
        
        const tableColumn = ["Date", "Title", "Category", "Amount"];
        const tableRows = expenses.map(e => [
          new Date(e.date).toLocaleDateString(),
          e.title,
          e.category,
          `Rs. ${e.amount.toFixed(2)}`
        ]);
        
        autoTable(doc, {
          head: [tableColumn],
          body: tableRows,
          startY: 20,
        });
        
        doc.save(`tax_export_${new Date().toISOString().split('T')[0]}.pdf`);
      });
    });
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Bulk Operations & Export Bar */}
      <div className="flex items-center justify-between p-4 bg-[#111] border border-white/10 rounded-2xl">
        <div className="flex items-center gap-3">
          <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-black text-blue-500 focus:ring-blue-500 focus:ring-offset-black" />
          <span className="text-sm font-medium text-white/70">Select All</span>
          <div className="w-px h-4 bg-white/20 mx-2"></div>
          <button className="text-xs font-medium text-white/50 hover:text-white transition-colors">Bulk Tag</button>
          <button className="text-xs font-medium text-red-400/50 hover:text-red-400 transition-colors">Bulk Delete</button>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={exportCSV}
            className="px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-bold uppercase tracking-wider hover:bg-blue-500/40 transition-colors"
          >
            Export CSV
          </button>
          <button 
            onClick={exportPDF}
            className="px-4 py-1.5 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 text-xs font-bold uppercase tracking-wider hover:bg-purple-500/40 transition-colors"
          >
            Export PDF
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="w-full overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/10" role="region" aria-label="Expenses list" tabIndex="0">
        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-black/40">
                <th scope="col" className="px-6 py-5 text-xs font-semibold text-white/50 uppercase tracking-widest whitespace-nowrap">Date</th>
                <th scope="col" className="px-6 py-5 text-xs font-semibold text-white/50 uppercase tracking-widest whitespace-nowrap">Title & Tags</th>
                <th scope="col" className="px-6 py-5 text-xs font-semibold text-white/50 uppercase tracking-widest whitespace-nowrap">Category</th>
                <th scope="col" className="px-6 py-5 text-xs font-semibold text-white/50 uppercase tracking-widest whitespace-nowrap text-right">Amount</th>
                <th scope="col" className="px-6 py-5 text-xs font-semibold text-white/50 uppercase tracking-widest whitespace-nowrap text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {expenses.map((expense) => (
                <tr key={expense.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-6 py-5 text-sm text-white/60 whitespace-nowrap font-medium">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-black text-blue-500 focus:ring-blue-500 focus:ring-offset-black" />
                      {new Date(expense.date).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col gap-1.5">
                      <span className="text-base font-medium text-white group-hover:text-blue-400 transition-colors">{expense.title}</span>
                      <div className="flex items-center gap-2">
                        {expense.amount > 1000 ? (
                           <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-400">High Value</span>
                        ) : null}
                        <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-white/5 text-white/40">Verified</span>
                      </div>
                    </div>
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
                    <div className="flex items-center justify-end gap-2">
                      <button className="text-white/40 hover:text-white px-2 py-1 rounded hover:bg-white/5 transition-colors text-xs font-medium">
                        Split
                      </button>
                      <button
                        onClick={() => onDelete(expense.id)}
                        className="text-red-400 hover:text-red-300 px-3 py-1.5 rounded-full hover:bg-red-500/10 transition-colors text-sm font-medium"
                        aria-label={`Delete expense ${expense.title}`}
                      >
                        Delete
                      </button>
                    </div>
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
