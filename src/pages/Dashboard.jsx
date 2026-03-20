import { useApp } from '../context/AppContext';
import { modules } from '../data/modules';
import { motion } from 'framer-motion';
import { BookOpen, Zap, Flame, Target } from 'lucide-react';

function StatCard({ icon: Icon, value, label, color = "#C9A84C" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card-glow rounded-xl p-5 text-center"
      style={{ background: '#12121A', border: `1px solid ${color}33` }}
    >
      <Icon size={32} className="mx-auto mb-2" style={{ color }} />
      <div className="text-2xl font-extrabold" style={{ color }}>{value}</div>
      <div className="text-xs mt-1" style={{ color: '#666' }}>{label}</div>
    </motion.div>
  );
}

export default function Dashboard() {
  const { xp, level, completedModules, streak } = useApp();
  const totalModules = modules.length;
  const completedCount = completedModules.length;
  const progressPct = Math.round((completedCount / totalModules) * 100);

  return (
    <div>
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl p-5 sm:p-8 mb-6 sm:mb-8 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #12121A 0%, #1A1A2E 100%)',
          border: '1px solid rgba(201, 168, 76, 0.2)',
        }}
      >
        <div className="absolute right-4 sm:right-8 top-4 sm:top-6 text-6xl sm:text-8xl opacity-5 pointer-events-none" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Σ</div>
        <h1 className="text-xl sm:text-2xl font-extrabold mb-2" style={{ color: '#C9A84C' }}>
          Bem-vindo de volta 👋
        </h1>
        <p className="mb-5" style={{ color: '#888' }}>
          Continue sua jornada rumo ao <strong style={{ color: '#F0C96A' }}>Black Belt</strong>
        </p>

        {/* Progress bar */}
        <div className="flex justify-between mb-2">
          <span className="text-[13px]" style={{ color: '#888' }}>Progresso geral do curso</span>
          <span className="text-[13px] font-bold" style={{ color: '#C9A84C' }}>{progressPct}%</span>
        </div>
        <div className="h-2 rounded-full" style={{ background: '#1E1E2E' }}>
          <motion.div
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, #C9A84C, #F0C96A)' }}
            initial={{ width: 0 }}
            animate={{ width: `${progressPct}%` }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
        </div>
        <div className="mt-3 text-sm" style={{ color: '#666' }}>
          {completedCount} de {totalModules} módulos concluídos
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
        <StatCard icon={Zap} value={xp.toLocaleString()} label="XP Total" color="#C9A84C" />
        <StatCard icon={BookOpen} value={completedCount} label="Módulos Concluídos" color="#00D4FF" />
        <StatCard icon={Flame} value={streak} label="Dias de Streak" color="#FF8C00" />
        <StatCard icon={Target} value={level.name} label="Nível Atual" color="#22C55E" />
      </div>

      {/* DMAIC journey */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="rounded-xl p-4 sm:p-6"
        style={{ background: '#12121A', border: '1px solid #1E1E2E' }}
      >
        <h2 className="text-lg font-bold mb-5" style={{ color: '#E8E8E8' }}>
          🗺️ Jornada de Aprendizado
        </h2>
        <div className="flex items-center gap-0 overflow-x-auto pb-2">
          {["D", "M", "A", "I", "C"].map((phase, i) => {
            const done = i < Math.floor(completedCount / 2.4);
            return (
              <div key={phase} className="flex items-center">
                <motion.div
                  initial={{ scale: 0. }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="w-14 h-14 rounded-full flex items-center justify-center font-extrabold text-xl shrink-0"
                  style={{
                    background: done ? 'linear-gradient(135deg, #C9A84C, #F0C96A)' : '#1E1E2E',
                    color: done ? '#000' : '#444',
                    border: `2px solid ${done ? '#C9A84C' : '#2A2A3A'}`,
                  }}
                >
                  {phase}
                </motion.div>
                {i < 4 && (
                  <div className="w-10 h-0.5" style={{ background: done ? '#C9A84C' : '#1E1E2E' }} />
                )}
              </div>
            );
          })}
          <div className="ml-4 text-[13px]" style={{ color: '#666' }}>
            DMAIC — metodologia central
          </div>
        </div>
      </motion.div>
    </div>
  );
}
