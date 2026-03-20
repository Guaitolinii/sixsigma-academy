import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';

const FAKE_LEADERS = [
  { name: "Carlos MBB", xp: 12500, badges: 15 },
  { name: "Ana Green Belt", xp: 8200, badges: 10 },
  { name: "Roberto BB", xp: 6800, badges: 8 },
  { name: "Marina DFSS", xp: 5200, badges: 6 },
  { name: "Paulo Lean", xp: 4100, badges: 5 },
  { name: "Julia Stats", xp: 3300, badges: 4 },
  { name: "Pedro DMAIC", xp: 2800, badges: 3 },
];

export default function RankingPage() {
  const { xp, level } = useApp();

  const allPlayers = [
    ...FAKE_LEADERS,
    { name: "Você 🎯", xp, badges: 0, isYou: true },
  ].sort((a, b) => b.xp - a.xp);

  return (
    <div>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-extrabold mb-2" style={{ color: '#C9A84C' }}>
        🏆 Ranking
      </motion.h1>
      <p className="mb-8" style={{ color: '#666' }}>Veja sua posição entre os estudantes Six Sigma.</p>

      {/* Podium */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
        {allPlayers.slice(0, 3).map((p, i) => {
          const podiumColors = ['#C9A84C', '#C0C0C0', '#CD7F32'];
          const podiumEmoji = ['👑', '🥈', '🥉'];
          return (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="rounded-xl p-4 sm:p-6 text-center"
              style={{
                background: p.isYou ? 'rgba(201,168,76,0.1)' : '#12121A',
                border: `1px solid ${p.isYou ? '#C9A84C' : podiumColors[i] + '44'}`,
                order: i === 0 ? 1 : i === 1 ? 0 : 2,
              }}
            >
              <div className="text-3xl sm:text-4xl mb-1 sm:mb-2">{podiumEmoji[i]}</div>
              <div className="text-sm sm:text-base font-bold mb-1" style={{ color: p.isYou ? '#C9A84C' : '#E8E8E8' }}>{p.name}</div>
              <div className="text-lg sm:text-xl font-extrabold" style={{ color: podiumColors[i] }}>{p.xp.toLocaleString()} XP</div>
            </motion.div>
          );
        })}
      </div>

      {/* Full list */}
      <div className="rounded-xl overflow-hidden" style={{ background: '#12121A', border: '1px solid #1E1E2E' }}>
        {allPlayers.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.06 }}
            className="flex items-center px-3 sm:px-6 py-3 sm:py-4"
            style={{
              borderBottom: '1px solid #1E1E2E',
              background: p.isYou ? 'rgba(201,168,76,0.08)' : 'transparent',
            }}
          >
            <span className="w-8 text-center text-xs sm:text-sm font-bold" style={{ color: i < 3 ? '#C9A84C' : '#666' }}>
              #{i + 1}
            </span>
            <span className="flex-1 ml-3 sm:ml-4 text-xs sm:text-sm font-semibold truncate" style={{ color: p.isYou ? '#C9A84C' : '#E8E8E8' }}>
              {p.name}
            </span>
            <span className="text-xs sm:text-sm font-bold mr-3 sm:mr-6 shrink-0" style={{ color: '#F0C96A' }}>{p.xp.toLocaleString()} XP</span>
            <span className="text-[10px] sm:text-xs shrink-0" style={{ color: '#666' }}>{p.badges} 🏅</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
