
const steps = [
  {
    number: '01',
    title: 'Add Your Expenses',
    description: 'Enter the title, amount, category, and date. Our form validates everything in real-time.',
  },
  {
    number: '02',
    title: 'Filter & Analyze',
    description: 'Use category filters to slice your data. See instant totals and category breakdowns.',
  },
  {
    number: '03',
    title: 'Stay in Control',
    description: 'Review your spending summary, delete old entries, and keep your financial data pristine.',
  },
];

function Workflow() {
  return (
    <section className="py-24" id="workflow" aria-label="How it works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-semibold text-accent uppercase tracking-wider">How It Works</span>
        <h2 className="mt-3 text-[clamp(2rem,4vw,2.5rem)] text-text-heading">
          Three Simple <span className="text-accent">Steps</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-12 mt-16 relative">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 flex flex-col items-center text-center relative z-10">
              <div className="text-5xl font-extrabold text-border-subtle tracking-tighter leading-none mb-6 font-mono opacity-80">{step.number}</div>
              <h3 className="text-xl font-semibold text-text-heading mb-3">{step.title}</h3>
              <p className="text-base text-text-muted leading-relaxed max-w-[280px]">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 -right-6 w-12 h-[2px] bg-border-subtle" aria-hidden="true"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Workflow;
