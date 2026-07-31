function Overview() {
  return (
    <section className="py-24" id="overview" aria-label="App overview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold text-accent uppercase tracking-wider">Why ExpenseTracker?</span>
          <h2 className="text-[clamp(2rem,4vw,2.5rem)] text-text-heading leading-tight">
            Simplify Your <span className="text-accent">Financial Life</span>
          </h2>
          <p className="text-lg text-text-muted leading-relaxed mt-2">
            Stop guessing where your money goes. Our smart expense tracker gives you
            crystal-clear visibility into your spending patterns. Add expenses in seconds,
            categorize them automatically, and watch your financial picture come to life
            through real-time summaries and breakdowns.
          </p>
          <p className="text-lg text-text-muted leading-relaxed">
            Whether you&apos;re managing personal budgets or tracking business expenses,
            our intuitive dark-themed dashboard makes financial management feel effortless
            and even enjoyable.
          </p>
        </div>
        <div className="relative h-[300px] md:h-[400px] flex items-center justify-center">
          <div className="absolute w-[200px] md:w-[250px] p-4 bg-surface-elevated border border-border rounded-xl shadow-lg flex items-center gap-3 z-30 transform -translate-x-12 md:-translate-x-16 -translate-y-16 hover:scale-105 hover:border-accent-subtle transition-all duration-300">
            <span className="text-2xl w-12 h-12 flex items-center justify-center bg-surface rounded-lg shrink-0">📊</span>
            <span className="font-semibold text-text-heading text-sm md:text-base">Real-time Totals</span>
          </div>
          <div className="absolute w-[200px] md:w-[250px] p-4 bg-surface-elevated border border-border rounded-xl shadow-lg flex items-center gap-3 z-20 transform translate-x-12 md:translate-x-16 hover:scale-105 hover:border-accent-subtle transition-all duration-300">
            <span className="text-2xl w-12 h-12 flex items-center justify-center bg-surface rounded-lg shrink-0">🏷️</span>
            <span className="font-semibold text-text-heading text-sm md:text-base">Smart Categories</span>
          </div>
          <div className="absolute w-[200px] md:w-[250px] p-4 bg-surface-elevated border border-border rounded-xl shadow-lg flex items-center gap-3 z-10 transform translate-y-16 md:translate-y-24 -translate-x-6 hover:scale-105 hover:border-accent-subtle transition-all duration-300">
            <span className="text-2xl w-12 h-12 flex items-center justify-center bg-surface rounded-lg shrink-0">⚡</span>
            <span className="font-semibold text-text-heading text-sm md:text-base">Instant Insights</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
