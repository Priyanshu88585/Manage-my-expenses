import Link from 'next/link';
import Button from '../ui/Button.jsx';

function CTA() {
  return (
    <section className="py-24" id="cta" aria-label="Call to action">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative text-center py-16 px-8 bg-surface-elevated border border-border rounded-2xl overflow-hidden">
          <div className="absolute w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(0,204,255,0.15)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true"></div>
          <h2 className="relative z-10 text-[clamp(2rem,4vw,2.5rem)] text-text-heading mb-4">Ready to Take Control?</h2>
          <p className="relative z-10 text-lg text-text-muted leading-relaxed mb-8 max-w-[500px] mx-auto">
            Start tracking your expenses today. No sign-up required —
            jump straight into your personalized dashboard.
          </p>
          <div className="relative z-10 inline-block">
            <Link href="/dashboard" tabIndex="-1">
              <Button variant="primary" className="text-base py-4 px-8">
                Launch Dashboard →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
