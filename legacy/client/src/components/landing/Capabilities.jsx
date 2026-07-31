import './Capabilities.css';

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
    <section className="capabilities" id="capabilities" aria-label="Capabilities">
      <div className="capabilities__container container">
        <span className="capabilities__label">Capabilities</span>
        <h2 className="capabilities__title">
          Built for <span className="capabilities__highlight">Reliability</span>
        </h2>
        <div className="capabilities__grid">
          {capabilities.map((cap, index) => (
            <div key={index} className="capabilities__item">
              <div className="capabilities__icon-wrapper">
                <span className="capabilities__icon">{cap.icon}</span>
              </div>
              <div className="capabilities__text">
                <h3 className="capabilities__item-title">{cap.title}</h3>
                <p className="capabilities__item-desc">{cap.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Capabilities;
