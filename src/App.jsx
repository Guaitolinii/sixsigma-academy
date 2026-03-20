import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './pages/Dashboard';
import ModuleGrid from './pages/ModuleGrid';
import LessonPage from './pages/LessonPage';
import CasesPage from './pages/CasesPage';
import QuizPage from './pages/QuizPage';
import RankingPage from './pages/RankingPage';
import GlossaryPage from './pages/GlossaryPage';
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);
  return isMobile;
}

function Layout({ children }) {
  const isMobile = useIsMobile();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopCollapsed, setDesktopCollapsed] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: '#0A0A0F' }}>
      <Sidebar
        isMobile={isMobile}
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />

      {/* Mobile Top Bar */}
      {isMobile && (
        <header
          className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-4 py-3"
          style={{ background: '#0D0D18', borderBottom: '1px solid #1E1E2E' }}
        >
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 rounded-lg cursor-pointer"
            style={{ background: '#1E1E2E', border: 'none', color: '#C9A84C' }}
          >
            <Menu size={20} />
          </button>
          <div className="text-base font-extrabold tracking-widest" style={{ color: '#C9A84C', fontFamily: "'Bebas Neue', sans-serif" }}>
            Σ SIX SIGMA
          </div>
          <div style={{ width: 36 }} /> {/* spacer for centering */}
        </header>
      )}

      <main
        className="transition-all duration-300 min-h-screen"
        style={{
          marginLeft: isMobile ? 0 : 240,
          paddingTop: isMobile ? 70 : 0,
        }}
      >
        <div className="px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8">
          <div className="max-w-5xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/modulos" element={<ModuleGrid />} />
            <Route path="/modulo/:id" element={<LessonPage />} />
            <Route path="/cases" element={<CasesPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/ranking" element={<RankingPage />} />
            <Route path="/glossario" element={<GlossaryPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppProvider>
  );
}
