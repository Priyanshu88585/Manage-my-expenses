import Navbar from '@/components/layout/Navbar.jsx';
import Footer from '@/components/layout/Footer.jsx';
import LoginForm from '@/features/auth/components/LoginForm.jsx';

export const metadata = {
  title: 'Sign In | Manage My Expense',
  description: 'Sign in to access your financial dashboard and expense reports.',
};

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black pt-[100px] pb-32 flex items-center justify-center relative overflow-hidden px-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none z-0"></div>

        <div className="relative z-10 w-full flex justify-center">
          <LoginForm />
        </div>
      </div>
      <Footer />
    </>
  );
}
