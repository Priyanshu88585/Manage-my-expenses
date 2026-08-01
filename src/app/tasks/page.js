import Navbar from '@/components/layout/Navbar.jsx';
import Footer from '@/components/layout/Footer.jsx';
import TaskList from '@/features/tasks/components/TaskList.jsx';

export const metadata = {
  title: 'Task Management | Manage My Expense',
  description: 'Manage financial tasks, priorities, and deadlines.',
};

export default function TasksPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black pt-[100px] pb-32 relative overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[100vw] h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/15 via-black to-black pointer-events-none z-0"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-10 z-10 flex flex-col gap-8">
          <div className="text-center max-w-xl mx-auto">
            <h1 className="text-4xl font-display font-medium text-white tracking-tight mb-2">Tasks & Action Items</h1>
            <p className="text-white/60 text-base">Keep track of financial reviews, client follow-ups, and budget deadlines.</p>
          </div>

          <TaskList />
        </div>
      </div>
      <Footer />
    </>
  );
}
