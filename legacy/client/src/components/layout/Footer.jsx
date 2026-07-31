import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__brand">
          <span className="footer__logo">💰</span>
          <span className="footer__title">ExpenseTracker</span>
        </div>
        <p className="footer__text">
          &copy; {year} Smart Expense Tracker. Built with React &amp; Express.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
