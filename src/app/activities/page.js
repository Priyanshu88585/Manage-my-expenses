import Navbar from '@/components/layout/Navbar.jsx';
import Footer from '@/components/layout/Footer.jsx';
import ActivityTimeline from '@/features/activities/components/ActivityTimeline.jsx';

export const metadata = {
  title: 'Activity Log | Smart Expense Tracker',
  description: 'Audit logs, system events, and team activity timeline.',
};

export default function ActivitiesPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black pt-[100px] pb-32 relative overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[100vw] h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/15 via-black to-black pointer-events-none z-0"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-10 z-10 flex flex-col gap-8">
          <div className="text-center max-w-xl mx-auto">
            <h1 className="text-4xl font-display font-medium text-white tracking-tight mb-2">Activity Stream</h1>
            <p className="text-white/60 text-base">Real-time audit log of team actions, deal updates, and system activity.</p>
          </div>

          <ActivityTimeline />
        </div>
      </div>
      <Footer />
    </>
  );
}
