import Card from '../ui/Card.jsx';

function SummaryCards({ expenses }) {
  const totalAmount = expenses.reduce((sum, e) => sum + e.amount, 0);
  const expenseCount = expenses.length;
  const categories = [...new Set(expenses.map((e) => e.category))];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [&>div:last-child]:md:col-span-2 [&>div:last-child]:lg:col-span-1 [&>div:last-child]:md:justify-self-center [&>div:last-child]:lg:justify-self-auto [&>div:last-child]:md:max-w-[400px] [&>div:last-child]:lg:max-w-none" role="region" aria-label="Expense summary">
      <Card glow className="flex items-center gap-4 w-full">
        <span className="text-[2rem] w-14 h-14 flex items-center justify-center bg-surface-elevated rounded-xl shrink-0">💵</span>
        <div className="flex flex-col gap-1">
          <span className="text-xs font-medium text-text-muted uppercase tracking-wider">Total Spent</span>
          <span className="text-3xl font-bold text-accent tracking-tight">
            ${totalAmount.toFixed(2)}
          </span>
        </div>
      </Card>

      <Card glow className="flex items-center gap-4 w-full">
        <span className="text-[2rem] w-14 h-14 flex items-center justify-center bg-surface-elevated rounded-xl shrink-0">🧾</span>
        <div className="flex flex-col gap-1">
          <span className="text-xs font-medium text-text-muted uppercase tracking-wider">Expenses</span>
          <span className="text-3xl font-bold text-text-heading tracking-tight">{expenseCount}</span>
        </div>
      </Card>

      <Card glow className="flex items-center gap-4 w-full">
        <span className="text-[2rem] w-14 h-14 flex items-center justify-center bg-surface-elevated rounded-xl shrink-0">🏷️</span>
        <div className="flex flex-col gap-1">
          <span className="text-xs font-medium text-text-muted uppercase tracking-wider">Categories</span>
          <span className="text-3xl font-bold text-text-heading tracking-tight">{categories.length}</span>
        </div>
      </Card>
    </div>
  );
}

export default SummaryCards;
