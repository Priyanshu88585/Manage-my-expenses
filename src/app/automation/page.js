import Navbar from '@/components/layout/Navbar.jsx';
import Footer from '@/components/layout/Footer.jsx';
import AutomationBuilder from '@/features/automation/components/AutomationBuilder.jsx';

export const metadata = {
  title: 'Workflow Automation | Smart Expense Tracker',
  description: 'Automate expense tagging, high-value alerts, and deal triggers.',
};

export default function AutomationPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black pt-[100px] pb-32 relative overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[100vw] h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/15 via-black to-black pointer-events-none z-0"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-10 z-10 flex flex-col gap-8">
          <div className="text-center max-w-xl mx-auto">
            <h1 className="text-4xl font-display font-medium text-white tracking-tight mb-2">Automations</h1>
            <p className="text-white/60 text-base">Set up automated rules, smart triggers, and notifications for financial workflows.</p>
          </div>

          <AutomationBuilder />
        </div>
      </div>
      <Footer />
    </>
  );
}
