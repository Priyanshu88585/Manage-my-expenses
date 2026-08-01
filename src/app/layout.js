import './globals.css';
import GlobalSearchModal from '@/features/search/components/GlobalSearchModal.jsx';

export const metadata = {
  title: 'Manage My Expense | Smart Financial Dashboard',
  description: 'Track and manage your expenses with a cinematic dark-themed dashboard. Add, filter, and analyze your spending effortlessly.',
  metadataBase: new URL('https://manage-my-expense.vercel.app'),
  openGraph: {
    title: 'Manage My Expense | Smart Financial Dashboard',
    description: 'Track expenses, set budgets, monitor net worth, and plan savings — all from one premium dark-mode dashboard.',
    siteName: 'Manage My Expense',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manage My Expense',
    description: 'Your premium financial command center.',
  },
  icons: {
    icon: '/icon.svg',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
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
