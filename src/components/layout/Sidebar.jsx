import { NavLink, useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { useAuth } from '../../context/AuthContext';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, BookOpen, FlaskConical, Zap, Trophy, BookMarked,
  ChevronLeft, ChevronRight, Flame, Menu, X, Calculator, Timer, LogOut, Shield
} from 'lucide-react';

const navItems = [
  { to: "/",          icon: LayoutDashboard, label: "Dashboard"  },
  { to: "/modulos",   icon: BookOpen,        label: "Módulos"    },
  { to: "/cases",     icon: FlaskConical,    label: "Cases DMAIC"},
  { to: "/quiz",      icon: Zap,             label: "Quiz Arena" },
  { to: "/simulado",  icon: Timer,           label: "Simulado 4h"},
  { to: "/formulas",  icon: Calculator,      label: "Fórmulas"   },
  { to: "/ranking",   icon: Trophy,          label: "Ranking"    },
  { to: "/glossario", icon: BookMarked,      label: "Glossário"  },
];

export default function Sidebar({ isMobile, mobileOpen, onMobileClose }) {
  const { xp, level, streak, isAdmin } = useApp();
  const { logout } = useAuth();
  const [desktopOpen, setDesktopOpen] = useState(true);
  const location = useLocation();

  // Close mobile drawer on navigation
  useEffect(() => {
    if (isMobile && mobileOpen) onMobileClose();
  }, [location.pathname]);

  const xpProgress = Math.min(((xp - level.min) / (level.max - level.min)) * 100, 100);

  // --- MOBILE DRAWER ---
  if (isMobile) {
    return (
      <>
        {/* Overlay */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onMobileClose}
              className="fixed inset-0 z-40"
              style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
            />
          )}
        </AnimatePresence>

        {/* Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-0 left-0 h-screen z-50 flex flex-col border-r border-dark-border"
              style={{ width: 260, background: '#0D0D18' }}
            >
              {/* Close button */}
              <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-dark-border">
                <div>
                  <div className="text-xl font-extrabold tracking-widest" style={{ color: '#C9A84C', fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem' }}>
                    Σ SIX SIGMA
                  </div>
                  <div className="text-[11px] tracking-[3px] mt-0.5" style={{ color: '#666' }}>ACADEMY</div>
                </div>
                <button
                  onClick={onMobileClose}
                  className="p-1.5 rounded-md cursor-pointer"
                  style={{ background: '#1E1E2E', border: 'none', color: '#888' }}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Level Badge */}
              <div className="mx-3 mt-3 p-3 rounded-lg" style={{ background: '#12121A', border: '1px solid rgba(201, 168, 76, 0.2)' }}>
                <div className="text-[11px] mb-1" style={{ color: '#888' }}>Nível atual</div>
                <div className="text-sm font-bold" style={{ color: '#C9A84C' }}>{level.icon} {level.name}</div>
                <div className="text-[13px] mt-1" style={{ color: '#F0C96A' }}>{xp.toLocaleString()} XP</div>
                <div className="mt-2 h-1 rounded-full" style={{ background: '#1E1E2E' }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, #C9A84C, #F0C96A)' }}
                    initial={{ width: 0 }}
                    animate={{ width: `${xpProgress}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  />
                </div>
              </div>

              {/* Nav */}
              <nav className="flex-1 py-2 overflow-y-auto">
                {[...navItems, ...(isAdmin ? [{ to: "/admin", icon: Shield, label: "Painel Admin" }] : [])].map(item => (
                  <NavLink key={item.to} to={item.to} end={item.to === "/"} className="group block">
                    {({ isActive }) => (
                      <div
                        className="flex items-center gap-3 px-5 py-3.5 transition-all duration-200 border-l-[3px]"
                        style={{
                          color: isActive ? '#C9A84C' : '#888',
                          fontWeight: isActive ? 600 : 400,
                          background: isActive ? 'rgba(201, 168, 76, 0.07)' : 'transparent',
                          borderLeftColor: isActive ? '#C9A84C' : 'transparent',
                        }}
                      >
                        <item.icon size={20} className="shrink-0" />
                        <span className="text-sm">{item.label}</span>
                      </div>
                    )}
                  </NavLink>
                ))}
              </nav>

              {/* Streak and Logout */}
              <div className="mx-3 mb-3 flex gap-2">
                <div
                  className="flex-1 px-3 py-2.5 rounded-lg flex items-center gap-2"
                  style={{ background: '#1A0A00', border: '1px solid rgba(255, 107, 0, 0.2)' }}
                >
                  <Flame size={20} className="text-orange-500 shrink-0" />
                  <div>
                    <div className="text-base font-bold" style={{ color: '#FF8C00' }}>{streak} dias</div>
                    <div className="text-[11px]" style={{ color: '#666' }}>sequência atual</div>
                  </div>
                </div>
                
                <button
                  onClick={logout}
                  title="Sair"
                  className="px-4 py-2.5 rounded-lg flex items-center justify-center cursor-pointer shrink-0 transition-colors"
                  style={{ background: '#2E0C0C', border: '1px solid #4A1515', color: '#FF6B6B' }}
                >
                  <LogOut size={20} />
                </button>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </>
    );
  }

  // --- DESKTOP SIDEBAR ---
  return (
    <aside
      className="fixed top-0 left-0 h-screen z-50 flex flex-col transition-all duration-300 border-r border-dark-border"
      style={{ width: desktopOpen ? 240 : 68, background: '#0D0D18' }}
    >
      {/* Logo */}
      <div className="px-4 pt-5 pb-4 border-b border-dark-border">
        {desktopOpen ? (
          <div>
            <div className="text-xl font-extrabold tracking-widest" style={{ color: '#C9A84C', fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.6rem' }}>
              Σ SIX SIGMA
            </div>
            <div className="text-[11px] tracking-[3px] mt-0.5" style={{ color: '#666' }}>ACADEMY</div>
          </div>
        ) : (
          <div className="text-2xl text-center font-bold" style={{ color: '#C9A84C', fontFamily: "'Bebas Neue', sans-serif" }}>Σ</div>
        )}
      </div>

      {/* Level Badge */}
      <AnimatePresence>
        {desktopOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mx-3 mt-3 p-3 rounded-lg"
            style={{ background: '#12121A', border: '1px solid rgba(201, 168, 76, 0.2)' }}
          >
            <div className="text-[11px] mb-1" style={{ color: '#888' }}>Nível atual</div>
            <div className="text-sm font-bold" style={{ color: '#C9A84C' }}>{level.icon} {level.name}</div>
            <div className="text-[13px] mt-1" style={{ color: '#F0C96A' }}>{xp.toLocaleString()} XP</div>
            <div className="mt-2 h-1 rounded-full" style={{ background: '#1E1E2E' }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #C9A84C, #F0C96A)' }}
                initial={{ width: 0 }}
                animate={{ width: `${xpProgress}%` }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Nav */}
      <nav className="flex-1 py-2 overflow-y-auto">
        {[...navItems, ...(isAdmin ? [{ to: "/admin", icon: Shield, label: "Painel Admin" }] : [])].map(item => (
          <NavLink key={item.to} to={item.to} end={item.to === "/"} className="group block">
            {({ isActive }) => (
              <div
                className="flex items-center gap-3 px-5 py-3 transition-all duration-200 border-l-[3px]"
                style={{
                  color: isActive ? '#C9A84C' : '#888',
                  fontWeight: isActive ? 600 : 400,
                  background: isActive ? 'rgba(201, 168, 76, 0.07)' : 'transparent',
                  borderLeftColor: isActive ? '#C9A84C' : 'transparent',
                }}
              >
                <item.icon size={18} className="shrink-0" />
                {desktopOpen && <span className="text-sm whitespace-nowrap">{item.label}</span>}
              </div>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Streak */}
      <AnimatePresence>
        {desktopOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mx-3 mb-2 px-3 py-2.5 rounded-lg flex items-center gap-2"
            style={{ background: '#1A0A00', border: '1px solid rgba(255, 107, 0, 0.2)' }}
          >
            <Flame size={20} className="text-orange-500 shrink-0" />
            <div>
              <div className="text-base font-bold" style={{ color: '#FF8C00' }}>{streak} dias</div>
              <div className="text-[11px]" style={{ color: '#666' }}>sequência atual</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mx-3 mb-2 mt-auto">
        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-2 p-2 rounded-md cursor-pointer transition-colors duration-200 hover:bg-[#3A1010]"
          style={{ background: '#2E0C0C', border: '1px solid #4A1515', color: '#FF6B6B' }}
          title="Sair"
        >
          <LogOut size={16} />
          {desktopOpen && <span className="text-sm font-semibold">Sair</span>}
        </button>
      </div>

      {/* Toggle */}
      <button
        onClick={() => setDesktopOpen(!desktopOpen)}
        className="mx-3 mb-3 p-2 rounded-md cursor-pointer transition-colors duration-200 flex items-center justify-center"
        style={{ background: '#1E1E2E', border: 'none', color: '#888' }}
      >
        {desktopOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </button>
    </aside>
  );
}
