import Card from '../ui/Card.jsx';
import './SummaryCards.css';

function SummaryCards({ expenses }) {
  const totalAmount = expenses.reduce((sum, e) => sum + e.amount, 0);
  const expenseCount = expenses.length;
  const categories = [...new Set(expenses.map((e) => e.category))];

  return (
    <div className="summary-cards" role="region" aria-label="Expense summary">
      <Card glow className="summary-cards__card">
        <span className="summary-cards__icon">💵</span>
        <div className="summary-cards__info">
          <span className="summary-cards__label">Total Spent</span>
          <span className="summary-cards__value summary-cards__value--accent">
            ${totalAmount.toFixed(2)}
          </span>
        </div>
      </Card>

      <Card glow className="summary-cards__card">
        <span className="summary-cards__icon">🧾</span>
        <div className="summary-cards__info">
          <span className="summary-cards__label">Expenses</span>
          <span className="summary-cards__value">{expenseCount}</span>
        </div>
      </Card>

      <Card glow className="summary-cards__card">
        <span className="summary-cards__icon">🏷️</span>
        <div className="summary-cards__info">
          <span className="summary-cards__label">Categories</span>
          <span className="summary-cards__value">{categories.length}</span>
        </div>
      </Card>
    </div>
  );
}

export default SummaryCards;
