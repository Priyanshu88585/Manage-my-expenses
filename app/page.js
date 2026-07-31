import Hero from '../components/landing/Hero.jsx';
import Overview from '../components/landing/Overview.jsx';
import Features from '../components/landing/Features.jsx';
import Capabilities from '../components/landing/Capabilities.jsx';
import Workflow from '../components/landing/Workflow.jsx';
import CTA from '../components/landing/CTA.jsx';
import Footer from '../components/layout/Footer.jsx';
import Navbar from '../components/layout/Navbar.jsx';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="landing-page">
        <Hero />
        <Overview />
        <Features />
        <Capabilities />
        <Workflow />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
