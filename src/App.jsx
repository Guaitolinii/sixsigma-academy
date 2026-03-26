import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './pages/Dashboard';
import ModuleGrid from './pages/ModuleGrid';
import LessonPage from './pages/LessonPage';
import CasesPage from './pages/CasesPage';
import QuizPage from './pages/QuizPage';
import RankingPage from './pages/RankingPage';
import GlossaryPage from './pages/GlossaryPage';
import FormulasPage from './pages/FormulasPage';
import SimuladoPage from './pages/SimuladoPage';
import LoginPage from './pages/LoginPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import AdminPage from './pages/AdminPage';
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
          <div style={{ width: 36 }} />
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

function AppRoutes() {
  const { user } = useAuth();
  const { isAdmin } = useApp();

  return (
    <Routes>
      <Route path="/login" element={user ? <Navigate to="/" replace /> : <LoginPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      
      <Route path="/*" element={
        user ? (
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/modulos" element={<ModuleGrid />} />
              <Route path="/modulo/:id" element={<LessonPage />} />
              <Route path="/cases" element={<CasesPage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/simulado" element={<SimuladoPage />} />
              <Route path="/formulas" element={<FormulasPage />} />
              <Route path="/ranking" element={<RankingPage />} />
              <Route path="/glossario" element={<GlossaryPage />} />
              <Route path="/admin" element={isAdmin ? <AdminPage /> : <Navigate to="/" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        ) : (
          <Navigate to="/login" replace />
        )
      } />
    </Routes>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AppProvider>
    </AuthProvider>
  );
}
