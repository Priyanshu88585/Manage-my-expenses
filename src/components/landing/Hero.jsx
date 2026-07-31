import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100vh] w-full flex flex-col items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="metadata" 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover opacity-80 mix-blend-screen"
          src="https://www.gstatic.com/aitestkitchen/website/flow/landing_page/landing_hero__background_video__1440w.mp4"
        />
        {/* Fallback gradient if video fails */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-black to-black -z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-6 text-center animate-fade-in-up">
        
        {/* Main Logo/Wordmark (similar to the Flow SVG) */}
        <div className="mb-10 w-full max-w-3xl px-4">
          <h1 className="text-[clamp(3.5rem,8vw,7.5rem)] font-display font-bold leading-none tracking-tighter text-white drop-shadow-lg">
            Smart <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              ExpenseTracker
            </span>
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mb-10 tracking-tight">
          Your personal financial hub built with advanced analytics and elegant design.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="/dashboard">
            <button className="bg-white text-black hover:bg-white/90 px-8 py-4 rounded-full font-sans font-medium text-lg transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              Launch Dashboard
            </button>
          </Link>
        </div>

        <div className="mt-8 text-sm text-white/50 flex flex-col items-center gap-1">
          <span>Explore <a href="#" className="underline hover:text-white transition-colors">Premium Features</a>. See <a href="#" className="underline hover:text-white transition-colors">FAQ</a>.</span>
          <span>Features may vary by subscription tier and region.</span>
        </div>
      </div>

      {/* Down Arrow indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </div>
    </section>
  );
}
