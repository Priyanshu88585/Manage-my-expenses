import Button from '../ui/Button.jsx';
import './ExpenseTable.css';

function ExpenseTable({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return (
      <div className="expense-table__empty">
        <span className="expense-table__empty-icon">📭</span>
        <p className="expense-table__empty-text">No expenses found.</p>
        <p className="expense-table__empty-hint">Add your first expense above to get started.</p>
      </div>
    );
  }

  return (
    <div className="expense-table-wrapper">
      {/* Desktop table */}
      <table className="expense-table" aria-label="Expenses list">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col">Date</th>
            <th scope="col"><span className="sr-only">Actions</span></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id} className="expense-table__row">
              <td className="expense-table__title">{expense.title}</td>
              <td className="expense-table__amount">${expense.amount.toFixed(2)}</td>
              <td>
                <span className="expense-table__category-badge">{expense.category}</span>
              </td>
              <td className="expense-table__date">{expense.date}</td>
              <td className="expense-table__actions">
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
      <div className="expense-cards" aria-label="Expenses list">
        {expenses.map((expense) => (
          <div key={expense.id} className="expense-cards__card">
            <div className="expense-cards__header">
              <span className="expense-cards__title">{expense.title}</span>
              <span className="expense-cards__amount">${expense.amount.toFixed(2)}</span>
            </div>
            <div className="expense-cards__footer">
              <div className="expense-cards__meta">
                <span className="expense-table__category-badge">{expense.category}</span>
                <span className="expense-cards__date">{expense.date}</span>
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
