import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx';
import LandingPage from './routes/LandingPage.jsx';
import DashboardPage from './routes/DashboardPage.jsx';

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
