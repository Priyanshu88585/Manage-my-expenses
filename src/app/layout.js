import './globals.css';
import GlobalSearchModal from '@/features/search/components/GlobalSearchModal.jsx';

export const metadata = {
  title: 'Smart Expense Tracker',
  description: 'Track and manage your expenses with a cinematic dark-themed dashboard. Add, filter, and analyze your spending effortlessly.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <GlobalSearchModal />
        {children}
      </body>
    </html>
  );
}
