"use client";
import { useState, useEffect, useCallback } from "react";
import SummaryCards from "@/features/expenses/components/SummaryCards.jsx";
import ExpenseForm from "@/features/expenses/components/ExpenseForm.jsx";
import CategoryFilter from "@/features/expenses/components/CategoryFilter.jsx";
import ExpenseTable from "@/features/expenses/components/ExpenseTable.jsx";
import Footer from "@/components/layout/Footer.jsx";
import Navbar from "@/components/layout/Navbar.jsx";
import { fetchExpenses, createExpense, deleteExpense } from "@/features/expenses/services/api.js";

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
        <div className="min-h-screen bg-black pt-[80px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="min-h-[50vh] flex flex-col items-center justify-center">
              <div
                className="w-12 h-12 border-4 border-white/10 border-t-white rounded-full animate-spin mb-4"
                aria-label="Loading expenses"
              ></div>
              <p className="text-white/50 text-lg font-medium tracking-wide animate-pulse">Syncing data...</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black pt-[100px] pb-32 relative overflow-hidden">
        
        {/* Cinematic Background Glows */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120vw] h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black opacity-80 pointer-events-none mix-blend-screen z-0"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-12 flex flex-col gap-16 z-10">
          <header className="mb-4 max-w-2xl animate-fade-in-up">
            <h1 className="text-[clamp(2.5rem,4vw,4rem)] font-display font-medium text-white tracking-tight mb-4 leading-none drop-shadow-md">
              Dashboard
            </h1>
            <p className="text-xl text-white/60">
              Manage and track all your expenses in one beautiful place.
            </p>
          </header>

          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 animate-fade-in-up" role="alert">
              <p>{error}</p>
            </div>
          )}

          <section className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <SummaryCards expenses={expenses} />
          </section>

          <section className="animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            <ExpenseForm onAdd={handleAdd} />
          </section>

          <section className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-white/10 pb-6">
              <h2 className="text-3xl font-display font-medium text-white flex items-center gap-4">
                {activeCategory ? `${activeCategory} Expenses` : "All Transactions"}
                <span className="inline-flex items-center justify-center px-4 py-1 bg-[#111] text-white text-sm font-medium rounded-full border border-white/20 shadow-inner">
                  {filteredExpenses.length}
                </span>
              </h2>
              
              {categories.length > 0 && (
                <CategoryFilter
                  categories={categories}
                  activeCategory={activeCategory}
                  onFilterChange={handleFilterChange}
                />
              )}
            </div>
            
            <ExpenseTable expenses={filteredExpenses} onDelete={handleDelete} />
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
