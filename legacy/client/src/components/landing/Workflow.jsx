import './Workflow.css';

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
    <section className="workflow" id="workflow" aria-label="How it works">
      <div className="workflow__container container">
        <span className="workflow__label">How It Works</span>
        <h2 className="workflow__title">
          Three Simple <span className="workflow__highlight">Steps</span>
        </h2>
        <div className="workflow__steps">
          {steps.map((step, index) => (
            <div key={index} className="workflow__step">
              <div className="workflow__step-number">{step.number}</div>
              <h3 className="workflow__step-title">{step.title}</h3>
              <p className="workflow__step-desc">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="workflow__connector" aria-hidden="true"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Workflow;
