"use client";
import { useState, useEffect, useCallback } from "react";
import SummaryCards from "../../components/dashboard/SummaryCards.jsx";
import ExpenseForm from "../../components/dashboard/ExpenseForm.jsx";
import CategoryFilter from "../../components/dashboard/CategoryFilter.jsx";
import ExpenseTable from "../../components/dashboard/ExpenseTable.jsx";
import Footer from "../../components/layout/Footer.jsx";
import Navbar from "../../components/layout/Navbar.jsx";
import { fetchExpenses, createExpense, deleteExpense } from "../lib/api.js";

export default function Dashboard() {
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
      <>
        <Navbar />
        <div className="min-h-screen bg-background pt-[80px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="min-h-[50vh] flex flex-col items-center justify-center">
              <div
                className="w-12 h-12 border-4 border-surface-elevated border-t-accent rounded-full animate-spin mb-4"
                aria-label="Loading expenses"
              ></div>
              <p className="text-text-muted text-lg">Loading expenses...</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-[80px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 flex flex-col gap-12">
          <header className="mb-2">
            <h1 className="text-4xl font-bold text-text-heading tracking-tight mb-2">Dashboard</h1>
            <p className="text-lg text-text-muted">
              Manage and track all your expenses in one place.
            </p>
          </header>

          {error && (
            <div className="p-4 bg-error/10 border border-error/20 rounded-lg text-error" role="alert">
              <p>{error}</p>
            </div>
          )}

          <section className="animate-fade-in-up">
            <SummaryCards expenses={expenses} />
          </section>

          <section className="animate-fade-in-up [animation-delay:100ms]">
            <ExpenseForm onAdd={handleAdd} />
          </section>

          {categories.length > 0 && (
            <section className="animate-fade-in-up [animation-delay:200ms]">
              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onFilterChange={handleFilterChange}
              />
            </section>
          )}

          <section className="animate-fade-in-up [animation-delay:300ms]">
            <h2 className="text-2xl font-bold text-text-heading mb-6 flex items-center gap-3">
              {activeCategory ? `${activeCategory} Expenses` : "All Expenses"}
              <span className="inline-flex items-center justify-center px-3 py-1 bg-surface-elevated text-text-muted text-sm font-medium rounded-full border border-border">
                {filteredExpenses.length}
              </span>
            </h2>
            <ExpenseTable expenses={filteredExpenses} onDelete={handleDelete} />
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}
