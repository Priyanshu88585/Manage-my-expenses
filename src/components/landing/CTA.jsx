import Link from 'next/link';

export default function CTA() {
  return (
    <section className="relative w-full py-32 bg-black border-t border-white/5 flex flex-col items-center justify-center overflow-hidden" id="cta" aria-label="Call to action">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black z-0 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-display font-medium text-white mb-6 leading-tight tracking-tight">
          Ready to track smarter?
        </h2>
        <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
          Join thousands of users who have transformed their financial lives with Smart ExpenseTracker.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/dashboard">
            <button className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-full font-medium text-lg transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Get Started for Free
            </button>
          </Link>
          <a href="#" className="text-white/70 hover:text-white px-8 py-4 font-medium transition-colors">
            View Pricing
          </a>
        </div>
      </div>
    </section>
  );
}
