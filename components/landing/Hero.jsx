"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '../ui/Button.jsx';

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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-36 md:py-24" id="hero" aria-label="Hero section">
      <div className="absolute w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,204,255,0.08)_0%,transparent_70%)] -top-[200px] -right-[100px] pointer-events-none animate-[float_8s_ease-in-out_infinite]"></div>
      <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,204,255,0.05)_0%,transparent_70%)] -bottom-[200px] -left-[100px] pointer-events-none animate-[float_10s_ease-in-out_infinite_reverse]"></div>
      
      <div className="text-center relative z-10 flex flex-col items-center gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-block py-2 px-4 bg-accent-subtle border border-accent/20 rounded-full text-xs font-semibold text-accent tracking-wider uppercase animate-fade-in">
          ✨ Smart Expense Management
        </span>
        <h1 className="text-[clamp(2.5rem,6vw,3.5rem)] font-extrabold leading-tight tracking-tight text-text-heading animate-fade-in-up">
          Take Control of<br />
          <span className="bg-gradient-to-br from-accent to-[#66e0ff] bg-clip-text text-transparent">Your Expenses</span>
        </h1>
        <p className={`text-lg md:text-xl font-light text-text-secondary h-[30px] md:h-[36px] transition-all duration-400 ease-in-out ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2.5'}`}>
          {taglines[taglineIndex]}
        </p>
        <p className="max-w-[600px] text-base text-text-muted leading-relaxed animate-fade-in-up delay-200">
          A beautifully crafted expense tracker that helps you manage, categorize,
          and analyze your spending — all in one elegant dashboard.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-4 w-full max-w-[280px] md:max-w-none md:w-auto animate-fade-in-up delay-400 [&_.btn]:w-full md:[&_.btn]:w-auto">
          <Link href="/dashboard" tabIndex="-1">
            <Button variant="primary" className="w-full">Get Started</Button>
          </Link>
          <a href="#features" className="w-full md:w-auto">
            <Button variant="secondary" className="w-full">Learn More</Button>
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-border-subtle rounded-full flex justify-center pt-1.5" aria-hidden="true">
        <span className="w-1 h-2 bg-accent rounded-full animate-[bounceScroll_2s_infinite]"></span>
      </div>
    </section>
  );
}

export default Hero;
