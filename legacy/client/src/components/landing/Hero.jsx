import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button.jsx';
import './Hero.css';

const taglines = [
  'Track Every Penny.',
  'Visualize Your Spending.',
  'Master Your Finances.',
  'Budget Like a Pro.',
];

function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setTaglineIndex((prev) => (prev + 1) % taglines.length);
        setFade(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="hero" aria-label="Hero section">
      <div className="hero__bg-glow"></div>
      <div className="hero__bg-glow hero__bg-glow--secondary"></div>
      <div className="hero__content container">
        <span className="hero__badge animate-fade-in">✨ Smart Expense Management</span>
        <h1 className="hero__title animate-fade-in-up">
          Take Control of<br />
          <span className="hero__title-accent">Your Expenses</span>
        </h1>
        <p className={`hero__tagline ${fade ? 'hero__tagline--visible' : 'hero__tagline--hidden'}`}>
          {taglines[taglineIndex]}
        </p>
        <p className="hero__description animate-fade-in-up delay-200">
          A beautifully crafted expense tracker that helps you manage, categorize,
          and analyze your spending — all in one elegant dashboard.
        </p>
        <div className="hero__actions animate-fade-in-up delay-400">
          <Link to="/dashboard">
            <Button variant="primary">Get Started</Button>
          </Link>
          <a href="#features">
            <Button variant="secondary">Learn More</Button>
          </a>
        </div>
      </div>
      <div className="hero__scroll-indicator" aria-hidden="true">
        <span className="hero__scroll-dot"></span>
      </div>
    </section>
  );
}

export default Hero;
