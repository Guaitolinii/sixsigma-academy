import { useApp } from '../context/AppContext';
import { modules } from '../data/modules';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Check } from 'lucide-react';

const MODULE_ICONS = ["🎯","📏","📊","🔍","⚙️","🛡️","🏭","📐","🔬","🌐","📈","🏆"];
const MODULE_COLORS = ["#C9A84C","#00D4FF","#22C55E","#FF6B6B","#A78BFA","#F59E0B","#EC4899","#06B6D4","#84CC16","#F97316","#EF4444","#8B5CF6"];

export default function ModuleGrid() {
  const { completedModules } = useApp();
  const navigate = useNavigate();

  return (
    <div>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-2xl font-extrabold mb-2"
        style={{ color: '#C9A84C' }}
      >
        📚 Módulos do Curso
      </motion.h1>
      <p className="mb-8" style={{ color: '#666' }}>12 módulos cobrindo o Body of Knowledge completo do CSSBB</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {modules.map((mod, i) => {
          const isCompleted = completedModules.includes(mod.id);
          const isLocked = i > completedModules.length && i > 0;
          const color = MODULE_COLORS[i % MODULE_COLORS.length];

          return (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => !isLocked && navigate(`/modulo/${mod.id}`)}
              className="card-glow rounded-xl p-6 relative overflow-hidden"
              style={{
                background: '#12121A',
                border: `1px solid ${isCompleted ? color + '66' : '#1E1E2E'}`,
                cursor: isLocked ? 'not-allowed' : 'pointer',
                opacity: isLocked ? 0.5 : 1,
              }}
            >
              {isCompleted && (
                <div className="absolute top-3 right-3 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                  <Check size={14} />
                </div>
              )}
              {isLocked && (
                <div className="absolute top-3 right-3">
                  <Lock size={18} style={{ color: '#666' }} />
                </div>
              )}

              <div className="text-3xl mb-3">{MODULE_ICONS[i]}</div>
              <div className="text-[11px] font-bold uppercase tracking-wider mb-1" style={{ color }}>
                Módulo {String(mod.id).padStart(2, '0')}
              </div>
              <div className="text-base font-bold mb-2 leading-tight" style={{ color: '#E8E8E8' }}>
                {mod.title}
              </div>
              <div className="text-xs mb-4 leading-relaxed" style={{ color: '#666' }}>
                {mod.description}
              </div>

              <div className="flex justify-between items-center">
                <span
                  className="px-2.5 py-1 rounded-full text-[11px] font-semibold"
                  style={{
                    background: mod.difficulty === "Básico" ? "#22C55E22" : mod.difficulty === "Intermediário" ? "#F59E0B22" : "#EF444422",
                    color: mod.difficulty === "Básico" ? "#22C55E" : mod.difficulty === "Intermediário" ? "#F59E0B" : "#EF4444",
                  }}
                >
                  {mod.difficulty}
                </span>
                <span className="text-xs" style={{ color: '#666' }}>
                  {mod.lessons?.length || 0} lições
                </span>
              </div>

              <div className="mt-3 h-[3px] rounded-full" style={{ background: '#1E1E2E' }}>
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    background: `linear-gradient(90deg, ${color}, ${color}88)`,
                    width: isCompleted ? '100%' : '0%',
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
