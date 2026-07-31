import Button from '../ui/Button.jsx';

function ExpenseTable({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return (
      <div className="text-center p-12 bg-surface border border-border rounded-xl">
        <span className="text-4xl block mb-4">📭</span>
        <p className="text-lg font-semibold text-text-heading">No expenses found.</p>
        <p className="mt-2 text-sm text-text-muted">Add your first expense above to get started.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Desktop table */}
      <table className="hidden md:table w-full border-collapse" aria-label="Expenses list">
        <thead className="border-b border-border">
          <tr>
            <th scope="col" className="text-left p-3 text-xs font-semibold text-text-muted uppercase tracking-wider">Title</th>
            <th scope="col" className="text-left p-3 text-xs font-semibold text-text-muted uppercase tracking-wider">Amount</th>
            <th scope="col" className="text-left p-3 text-xs font-semibold text-text-muted uppercase tracking-wider">Category</th>
            <th scope="col" className="text-left p-3 text-xs font-semibold text-text-muted uppercase tracking-wider">Date</th>
            <th scope="col"><span className="sr-only">Actions</span></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id} className="transition-colors duration-150 hover:bg-surface">
              <td className="p-4 text-sm border-b border-border align-middle font-medium text-text-heading">{expense.title}</td>
              <td className="p-4 text-sm border-b border-border align-middle font-semibold text-accent tabular-nums">${expense.amount.toFixed(2)}</td>
              <td className="p-4 text-sm border-b border-border align-middle">
                <span className="inline-block px-3 py-0.5 text-xs font-medium text-text-secondary bg-surface-elevated border border-border rounded-full">{expense.category}</span>
              </td>
              <td className="p-4 text-sm border-b border-border align-middle text-text-muted tabular-nums">{expense.date}</td>
              <td className="p-4 text-sm border-b border-border align-middle text-right">
                <Button
                  variant="danger"
                  onClick={() => onDelete(expense.id)}
                  aria-label={`Delete expense: ${expense.title}`}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile cards */}
      <div className="flex md:hidden flex-col gap-3" aria-label="Expenses list">
        {expenses.map((expense) => (
          <div key={expense.id} className="bg-surface border border-border rounded-xl p-4 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="font-medium text-text-heading text-base">{expense.title}</span>
              <span className="font-bold text-accent text-lg tabular-nums">${expense.amount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="inline-block px-3 py-0.5 text-xs font-medium text-text-secondary bg-surface-elevated border border-border rounded-full">{expense.category}</span>
                <span className="text-xs text-text-muted tabular-nums">{expense.date}</span>
              </div>
              <Button
                variant="danger"
                onClick={() => onDelete(expense.id)}
                aria-label={`Delete expense: ${expense.title}`}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseTable;
