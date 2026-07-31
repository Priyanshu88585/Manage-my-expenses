import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="navbar">
      <nav className="navbar__container container" aria-label="Main Navigation">
        <Link to="/" className="navbar__brand" onClick={closeMenu}>
          <span className="navbar__logo">💰</span>
          <span className="navbar__title">ExpenseTracker</span>
        </Link>

        <button
          className={`navbar__toggle ${isOpen ? 'navbar__toggle--active' : ''}`}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="navbar__toggle-bar"></span>
          <span className="navbar__toggle-bar"></span>
          <span className="navbar__toggle-bar"></span>
        </button>

        <ul className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
          <li>
            <Link
              to="/"
              className={`navbar__link ${isActive('/') ? 'navbar__link--active' : ''}`}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className={`navbar__link ${isActive('/dashboard') ? 'navbar__link--active' : ''}`}
              onClick={closeMenu}
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
