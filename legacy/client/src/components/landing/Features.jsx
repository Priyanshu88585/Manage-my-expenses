import Card from '../ui/Card.jsx';
import './Features.css';

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
    <section className="features" id="features" aria-label="Features">
      <div className="features__container container">
        <span className="features__label">Features</span>
        <h2 className="features__title">
          Everything You Need to <span className="features__highlight">Track Smarter</span>
        </h2>
        <p className="features__subtitle">
          Powerful features designed with simplicity in mind.
        </p>
        <div className="features__grid">
          {features.map((feature, index) => (
            <Card key={index} glow className={`features__card delay-${(index + 1) * 100}`}>
              <span className="features__card-icon">{feature.icon}</span>
              <h3 className="features__card-title">{feature.title}</h3>
              <p className="features__card-description">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
