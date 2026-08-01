"use client";
import { useState, useEffect, useCallback } from "react";
import SummaryCards from "@/features/expenses/components/SummaryCards.jsx";
import CategoryFilter from "@/features/expenses/components/CategoryFilter.jsx";
import ExpenseTable from "@/features/expenses/components/ExpenseTable.jsx";
import BudgetOverview from "@/features/expenses/components/BudgetOverview.jsx";
import RecurringExpenses from "@/features/expenses/components/RecurringExpenses.jsx";
import FinancialHealthScore from "@/features/reports/components/FinancialHealthScore.jsx";
import NetWorthDashboard from "@/features/reports/components/NetWorthDashboard.jsx";
import SavingsGoals from "@/features/expenses/components/SavingsGoals.jsx";
import AnalyticsOverview from "@/features/reports/components/AnalyticsOverview.jsx";
import Footer from "@/components/layout/Footer.jsx";
import Navbar from "@/components/layout/Navbar.jsx";
import { fetchExpenses, createExpense, deleteExpense, updateExpense, bulkDeleteExpenses } from "@/features/expenses/services/api.js";
import { fetchPremiumData } from "@/features/premium/services/premiumClient.js";
import AddBudgetModal from "@/features/premium/components/AddBudgetModal.jsx";
import AddGoalModal from "@/features/premium/components/AddGoalModal.jsx";
import UpdateNetWorthModal from "@/features/premium/components/UpdateNetWorthModal.jsx";
import AddExpenseModal from "@/features/expenses/components/AddExpenseModal.jsx";
import ScannerModal from "@/features/expenses/components/ScannerModal.jsx";
import { Plus, Camera } from "lucide-react";

export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [premiumData, setPremiumData] = useState(null);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [dateFilter, setDateFilter] = useState("all"); // 'all', 'this_month', 'last_month'
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);
  const [isGoalModalOpen, setIsGoalModalOpen] = useState(false);
  const [isNetWorthModalOpen, setIsNetWorthModalOpen] = useState(false);
  const [isAddExpenseModalOpen, setIsAddExpenseModalOpen] = useState(false);
  const [isScannerModalOpen, setIsScannerModalOpen] = useState(false);
  const [scannedData, setScannedData] = useState(null);
  const [expenseToEdit, setExpenseToEdit] = useState(null);

  const loadData = useCallback(async () => {
    try {
      setError("");
      const [expensesData, pData] = await Promise.all([
        fetchExpenses(),
        fetchPremiumData()
      ]);
      setExpenses(expensesData);
      setPremiumData(pData);
    } catch (err) {
      setError("Failed to load data. Is the server running?");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // Apply category & date filters
  useEffect(() => {
    let filtered = expenses;
    
    // Apply Date Filter
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    
    if (dateFilter === "this_month") {
      filtered = filtered.filter(e => {
        const d = new Date(e.date);
        return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
      });
    } else if (dateFilter === "last_month") {
      const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
      const lastMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;
      filtered = filtered.filter(e => {
        const d = new Date(e.date);
        return d.getMonth() === lastMonth && d.getFullYear() === lastMonthYear;
      });
    }

    // Apply Category Filter
    if (activeCategory) {
      filtered = filtered.filter(
        (e) => e.category.toLowerCase() === activeCategory.toLowerCase(),
      );
    }
    
    setFilteredExpenses(filtered);
  }, [expenses, activeCategory, dateFilter]);

  const categories = [...new Set(expenses.map((e) => e.category))];

  const handleSave = async (expenseData) => {
    if (expenseData.id) {
      const updated = await updateExpense(expenseData.id, expenseData);
      setExpenses((prev) => prev.map(e => e.id === updated.id ? updated : e));
    } else {
      const newExpense = await createExpense(expenseData);
      setExpenses((prev) => [...prev, newExpense]);
    }
  };

  const handleDelete = async (id) => {
    await deleteExpense(id);
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  const handleBulkDelete = async (ids) => {
    if (!confirm(`Are you sure you want to delete ${ids.length} expenses?`)) return;
    await bulkDeleteExpenses(ids);
    setExpenses((prev) => prev.filter((e) => !ids.includes(e.id)));
  };

  const handleBulkTag = async (ids) => {
    const newCategory = prompt('Enter a new category for the selected expenses:');
    if (!newCategory || !newCategory.trim()) return;
    
    // We update them sequentially for now since we don't have a bulk update endpoint yet
    const updatedIds = new Set();
    for (const id of ids) {
      const expense = expenses.find(e => e.id === id);
      if (expense) {
        const updated = await updateExpense(id, { ...expense, category: newCategory.trim() });
        setExpenses(prev => prev.map(e => e.id === id ? updated : e));
        updatedIds.add(id);
      }
    }
  };

  const handleFilterChange = (category) => {
    setActiveCategory(category);
  };
  
  const handleScanComplete = (data) => {
    setScannedData(data);
    setIsScannerModalOpen(false);
    setIsAddExpenseModalOpen(true);
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

  // Calculate dynamic metrics based on filtered expenses (to reflect time context)
  const totalExpensesSum = filteredExpenses.reduce((sum, e) => sum + (Number(e.amount) || 0), 0);
  
  const dynamicBudgets = premiumData?.budgets?.map(b => {
    const spent = filteredExpenses
      .filter(e => e.category === b.category)
      .reduce((sum, e) => sum + (Number(e.amount) || 0), 0);
    return { ...b, spent };
  }) || [];

  const dynamicAssets = premiumData?.netWorthBase?.baseAssets || 0;
  const dynamicLiabilities = (premiumData?.netWorthBase?.baseLiabilities || 0) + totalExpensesSum; 

  const overBudgetCount = dynamicBudgets.filter(b => b.spent > b.limit).length;
  const healthScore = Math.max(30, 85 - (overBudgetCount * 15) - (totalExpensesSum > 50000 ? 10 : 0));

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black pt-[100px] pb-32 relative overflow-hidden">
        
        {/* Cinematic Background Glows */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120vw] h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black opacity-80 pointer-events-none mix-blend-screen z-0"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-12 flex flex-col gap-12 z-10">
          
          {/* Header & Quick Actions */}
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 animate-fade-in-up">
            <div className="max-w-2xl">
              <h1 className="text-[clamp(2.5rem,4vw,4rem)] font-display font-medium text-white tracking-tight mb-4 leading-none drop-shadow-md">
                Dashboard
              </h1>
              <p className="text-xl text-white/60">
                Command center for your financial life.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <select 
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="bg-[#111] text-white border border-white/20 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors w-full sm:w-auto"
              >
                <option value="all">All Time</option>
                <option value="this_month">This Month</option>
                <option value="last_month">Last Month</option>
              </select>
              
              <button 
                onClick={() => setIsScannerModalOpen(true)}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#111] hover:bg-white/10 border border-white/20 text-white font-medium transition-all w-full sm:w-auto"
              >
                <Camera className="w-5 h-5" />
                Scan Receipt
              </button>
              
              <button 
                onClick={() => {
                  setScannedData(null);
                  setExpenseToEdit(null);
                  setIsAddExpenseModalOpen(true);
                }}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] w-full sm:w-auto"
              >
                <Plus className="w-5 h-5" />
                Add Transaction
              </button>
            </div>
          </header>

          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 animate-fade-in-up" role="alert">
              <p>{error}</p>
            </div>
          )}

          {/* Top Metrics Row */}
          <section className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <SummaryCards expenses={filteredExpenses} />
          </section>

          {/* Charts Row */}
          <section className="animate-fade-in-up" style={{ animationDelay: '125ms' }}>
            <AnalyticsOverview />
          </section>

          {/* Features Grid Row */}
          <section className="animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 flex flex-col gap-8">
                <BudgetOverview budgets={dynamicBudgets} onAddClick={() => setIsBudgetModalOpen(true)} />
                <RecurringExpenses subscriptions={premiumData?.recurring || []} />
              </div>
              <div className="flex flex-col gap-8">
                <NetWorthDashboard 
                  assets={dynamicAssets} 
                  liabilities={dynamicLiabilities} 
                  onEditClick={() => setIsNetWorthModalOpen(true)}
                />
                <FinancialHealthScore score={healthScore} />
                <SavingsGoals goals={premiumData?.goals || []} onAddClick={() => setIsGoalModalOpen(true)} />
              </div>
            </div>
          </section>

          {/* Ledger Row */}
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
            
            <ExpenseTable 
              expenses={filteredExpenses} 
              onDelete={handleDelete} 
              onEdit={(expense) => {
                setExpenseToEdit(expense);
                setScannedData(null);
                setIsAddExpenseModalOpen(true);
              }}
              onBulkDelete={handleBulkDelete}
              onBulkTag={handleBulkTag}
            />
          </section>
        </div>
      </div>
      <Footer />
      
      <AddBudgetModal 
        isOpen={isBudgetModalOpen} 
        onClose={() => setIsBudgetModalOpen(false)} 
        onAddSuccess={loadData}
      />
      <AddGoalModal 
        isOpen={isGoalModalOpen} 
        onClose={() => setIsGoalModalOpen(false)} 
        onAddSuccess={loadData}
      />
      <UpdateNetWorthModal
        isOpen={isNetWorthModalOpen}
        onClose={() => setIsNetWorthModalOpen(false)}
        onUpdateSuccess={loadData}
        initialAssets={premiumData?.netWorthBase?.baseAssets || 0}
        initialLiabilities={premiumData?.netWorthBase?.baseLiabilities || 0}
      />
      <AddExpenseModal
        isOpen={isAddExpenseModalOpen}
        onClose={() => {
          setIsAddExpenseModalOpen(false);
          setExpenseToEdit(null);
        }}
        onAdd={handleSave}
        initialData={expenseToEdit || scannedData}
      />
      <ScannerModal
        isOpen={isScannerModalOpen}
        onClose={() => setIsScannerModalOpen(false)}
        onScanComplete={handleScanComplete}
      />
    </>
  );
}
