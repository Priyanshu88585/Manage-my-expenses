import { Link } from 'react-router-dom';
import Button from '../ui/Button.jsx';
import './CTA.css';

function CTA() {
  return (
    <section className="cta" id="cta" aria-label="Call to action">
      <div className="cta__container container">
        <div className="cta__card">
          <div className="cta__glow" aria-hidden="true"></div>
          <h2 className="cta__title">Ready to Take Control?</h2>
          <p className="cta__description">
            Start tracking your expenses today. No sign-up required —
            jump straight into your personalized dashboard.
          </p>
          <Link to="/dashboard">
            <Button variant="primary" className="cta__button">
              Launch Dashboard →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTA;
