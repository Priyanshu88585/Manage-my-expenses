import Hero from '@/components/landing/Hero.jsx';
import Overview from '@/components/landing/Overview.jsx';
import Features from '@/components/landing/Features.jsx';
import Capabilities from '@/components/landing/Capabilities.jsx';
import Workflow from '@/components/landing/Workflow.jsx';
import CTA from '@/components/landing/CTA.jsx';
import Footer from '@/components/layout/Footer.jsx';
import Navbar from '@/components/layout/Navbar.jsx';
import GhostCursor from '@/components/GhostCursor';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="landing-page">
        <Hero />

        <div className="bg-black" style={{ position: 'relative', overflow: 'hidden' }}>
          <GhostCursor
            color="#B497CF"
            brightness={2}
            edgeIntensity={0}
            trailLength={20}
            inertia={0.5}
            grainIntensity={0.05}
            bloomStrength={0.02}
            bloomRadius={1}
            bloomThreshold={0.025}
            fadeDelayMs={1000}
            fadeDurationMs={1500}
            zIndex={0}
            mixBlendMode="screen"
          />
          <Overview />
          <Features />
          <Capabilities />
          <Workflow />
          <CTA />
          <Footer />
        </div>
      </div>
    </>
  );
}
