import './Overview.css';

function Overview() {
  return (
    <section className="overview" id="overview" aria-label="App overview">
      <div className="overview__container container">
        <div className="overview__text">
          <span className="overview__label">Why ExpenseTracker?</span>
          <h2 className="overview__title">
            Simplify Your <span className="overview__highlight">Financial Life</span>
          </h2>
          <p className="overview__description">
            Stop guessing where your money goes. Our smart expense tracker gives you
            crystal-clear visibility into your spending patterns. Add expenses in seconds,
            categorize them automatically, and watch your financial picture come to life
            through real-time summaries and breakdowns.
          </p>
          <p className="overview__description">
            Whether you&apos;re managing personal budgets or tracking business expenses,
            our intuitive dark-themed dashboard makes financial management feel effortless
            and even enjoyable.
          </p>
        </div>
        <div className="overview__visual">
          <div className="overview__card overview__card--1">
            <span className="overview__card-icon">📊</span>
            <span className="overview__card-text">Real-time Totals</span>
          </div>
          <div className="overview__card overview__card--2">
            <span className="overview__card-icon">🏷️</span>
            <span className="overview__card-text">Smart Categories</span>
          </div>
          <div className="overview__card overview__card--3">
            <span className="overview__card-icon">⚡</span>
            <span className="overview__card-text">Instant Insights</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
