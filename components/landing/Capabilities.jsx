
const capabilities = [
  {
    icon: '🔐',
    title: 'Data Persistence',
    description: 'Your expenses are saved to a local file, so your data is always there when you come back.',
  },
  {
    icon: '✅',
    title: 'Input Validation',
    description: 'Smart validation ensures only clean, correct data enters your expense tracker.',
  },
  {
    icon: '⚡',
    title: 'Real-time API',
    description: 'A robust REST API powers every action — add, filter, delete, and total — instantly.',
  },
  {
    icon: '♿',
    title: 'Accessible',
    description: 'Built with WCAG compliance: keyboard navigation, screen reader support, and high contrast.',
  },
];

function Capabilities() {
  return (
    <section className="py-24 bg-surface-elevated/30" id="capabilities" aria-label="Capabilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-semibold text-accent uppercase tracking-wider">Capabilities</span>
        <h2 className="mt-3 text-[clamp(2rem,4vw,2.5rem)] text-text-heading">
          Built for <span className="text-accent">Reliability</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mt-16 text-left">
          {capabilities.map((cap, index) => (
            <div key={index} className="flex gap-6 items-start group">
              <div className="w-16 h-16 shrink-0 flex items-center justify-center bg-surface border border-border rounded-xl transition-all duration-300 group-hover:border-accent-subtle group-hover:-translate-y-1 group-hover:shadow-glow-sm">
                <span className="text-3xl">{cap.icon}</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-text-heading">{cap.title}</h3>
                <p className="text-base text-text-muted leading-relaxed">{cap.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Capabilities;
