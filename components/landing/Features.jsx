import Card from '../ui/Card.jsx';

const features = [
  {
    icon: '➕',
    title: 'Quick Add',
    description: 'Add expenses in seconds with our streamlined form. Title, amount, category, and date — done.',
  },
  {
    icon: '🔍',
    title: 'Smart Filtering',
    description: 'Filter expenses by category to focus on what matters. Find exactly what you\'re looking for instantly.',
  },
  {
    icon: '📈',
    title: 'Live Totals',
    description: 'See your total spending update in real-time. Get category-specific breakdowns at a glance.',
  },
  {
    icon: '🗑️',
    title: 'Easy Deletion',
    description: 'Remove any expense with a single click. Your data stays clean and up-to-date.',
  },
  {
    icon: '🌙',
    title: 'Cinematic Dark UI',
    description: 'A premium dark-themed interface that\'s easy on the eyes and beautiful to use.',
  },
  {
    icon: '📱',
    title: 'Fully Responsive',
    description: 'Track expenses from any device — phone, tablet, or desktop. Works perfectly everywhere.',
  },
];

function Features() {
  return (
    <section className="py-24" id="features" aria-label="Features">
      <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-semibold text-accent uppercase tracking-wider">Features</span>
        <h2 className="mt-3 text-[clamp(2rem,4vw,2.5rem)] text-text-heading">
          Everything You Need to <span className="text-accent">Track Smarter</span>
        </h2>
        <p className="mt-3 text-lg text-text-muted max-w-[500px] mx-auto">
          Powerful features designed with simplicity in mind.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 text-left">
          {features.map((feature, index) => (
            <Card key={index} glow className={`flex flex-col gap-3 animate-fade-in-up`} style={{ animationDelay: `${(index + 1) * 100}ms` }}>
              <span className="text-[2rem] w-12 h-12 flex items-center justify-center bg-accent-subtle rounded-md">{feature.icon}</span>
              <h3 className="text-lg font-semibold text-text-heading">{feature.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
