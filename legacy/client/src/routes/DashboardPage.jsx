import { useState, useEffect, useCallback } from "react";
import SummaryCards from "../frontend/src/components/dashboard/SummaryCards.js";
import ExpenseForm from "../frontend/src/components/dashboard/ExpenseForm.js";
import CategoryFilter from "../frontend/src/components/dashboard/CategoryFilter.js";
import ExpenseTable from "../frontend/src/components/dashboard/ExpenseTable.js";
import Footer from "../frontend/src/components/layout/Footer.js";
import {
  fetchExpenses,
  createExpense,
  deleteExpense,
} from "../frontend/src/services/api.js";
import "./DashboardPage.css";

function DashboardPage() {
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadExpenses = useCallback(async () => {
    try {
      setError("");
      const data = await fetchExpenses();
      setExpenses(data);
    } catch (err) {
      setError("Failed to load expenses. Is the server running?");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadExpenses();
  }, [loadExpenses]);

  // Apply category filter
  useEffect(() => {
    if (activeCategory) {
      setFilteredExpenses(
        expenses.filter(
          (e) => e.category.toLowerCase() === activeCategory.toLowerCase(),
        ),
      );
    } else {
      setFilteredExpenses(expenses);
    }
  }, [expenses, activeCategory]);

  const categories = [...new Set(expenses.map((e) => e.category))];

  const handleAdd = async (expenseData) => {
    const newExpense = await createExpense(expenseData);
    setExpenses((prev) => [...prev, newExpense]);
  };

  const handleDelete = async (id) => {
    await deleteExpense(id);
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  const handleFilterChange = (category) => {
    setActiveCategory(category);
  };

  if (loading) {
    return (
      <div className="dashboard">
        <div className="dashboard__container container">
          <div className="dashboard__loading">
            <div
              className="dashboard__spinner"
              aria-label="Loading expenses"
            ></div>
            <p>Loading expenses...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="dashboard__container container">
        <header className="dashboard__header">
          <h1 className="dashboard__title">Dashboard</h1>
          <p className="dashboard__subtitle">
            Manage and track all your expenses in one place.
          </p>
        </header>

        {error && (
          <div className="dashboard__error" role="alert">
            <p>{error}</p>
          </div>
        )}

        <section className="dashboard__summary animate-fade-in-up">
          <SummaryCards expenses={expenses} />
        </section>

        <section className="dashboard__form animate-fade-in-up delay-100">
          <ExpenseForm onAdd={handleAdd} />
        </section>

        {categories.length > 0 && (
          <section className="dashboard__filter animate-fade-in-up delay-200">
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onFilterChange={handleFilterChange}
            />
          </section>
        )}

        <section className="dashboard__table animate-fade-in-up delay-300">
          <h2 className="dashboard__section-title">
            {activeCategory ? `${activeCategory} Expenses` : "All Expenses"}
            <span className="dashboard__count">
              ({filteredExpenses.length})
            </span>
          </h2>
          <ExpenseTable expenses={filteredExpenses} onDelete={handleDelete} />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default DashboardPage;
