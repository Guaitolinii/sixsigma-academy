import { quizQuestions } from '../data/questions';
import { useApp } from '../context/AppContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const POWER_UPS = [
  { id: "eliminate", icon: "✂️", label: "Eliminar 2", max: 3 },
  { id: "doubleXP", icon: "⚡", label: "2x XP",      max: 2 },
  { id: "skip",     icon: "⏭️", label: "Pular",      max: 2 },
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function QuizArena({ questions, onXP }) {
  const [queue] = useState(() => shuffle(questions));
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [streak, setStreak] = useState(0);
  const [xpEarned, setXPEarned] = useState(0);
  const [powerUps, setPowerUps] = useState({ eliminate: 3, doubleXP: 2, skip: 2 });
  const [eliminated, setEliminated] = useState([]);
  const [doubleActive, setDoubleActive] = useState(false);
  const [results, setResults] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const current = queue[idx];
  const isLast = idx >= queue.length - 1;

  function handleAnswer(optIdx) {
    if (revealed) return;
    setSelected(optIdx);
    setRevealed(true);

    const correct = optIdx === current.correct;
    const xpBase = correct ? 10 : 0;
    const bonusStreak = correct && streak >= 4 ? 15 : 0;
    const xp = (xpBase + bonusStreak) * (doubleActive ? 2 : 1);

    setXPEarned(prev => prev + xp);
    setStreak(prev => correct ? prev + 1 : 0);
    setResults(prev => [...prev, { question: current, selected: optIdx, correct }]);
    setDoubleActive(false);
    if (onXP && xp > 0) onXP(xp);
  }

  function next() {
    setSelected(null);
    setRevealed(false);
    setEliminated([]);
    if (isLast) {
      setShowResult(true);
    } else {
      setIdx(i => i + 1);
    }
  }

  function usePowerUp(id) {
    if (powerUps[id] <= 0 || revealed) return;
    if (id === "eliminate") {
      const wrong = current.options.map((_, i) => i).filter(i => i !== current.correct && !eliminated.includes(i));
      const toElim = shuffle(wrong).slice(0, 2);
      setEliminated(toElim);
      setPowerUps(p => ({ ...p, eliminate: p.eliminate - 1 }));
    }
    if (id === "doubleXP") {
      setDoubleActive(true);
      setPowerUps(p => ({ ...p, doubleXP: p.doubleXP - 1 }));
    }
    if (id === "skip") {
      setResults(prev => [...prev, { question: current, selected: -1, correct: false }]);
      setPowerUps(p => ({ ...p, skip: p.skip - 1 }));
      setStreak(0);
      next();
    }
  }

  const accuracy = results.length > 0
    ? Math.round((results.filter(r => r.correct).length / results.length) * 100)
    : 0;

  if (showResult) {
    const correct = results.filter(r => r.correct).length;
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl mx-auto p-10 rounded-2xl text-center"
        style={{ background: '#12121A', border: '1px solid rgba(201,168,76,0.2)' }}
      >
        <div className="text-7xl mb-4">{accuracy >= 80 ? "🏆" : accuracy >= 60 ? "⭐" : "📚"}</div>
        <h2 className="text-3xl font-extrabold mb-2" style={{ color: '#C9A84C' }}>
          {accuracy >= 80 ? "Excelente!" : accuracy >= 60 ? "Bom trabalho!" : "Continue praticando!"}
        </h2>
        <div className="text-base mb-8" style={{ color: '#888' }}>
          {correct}/{results.length} questões corretas
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: "Precisão", value: accuracy + "%", color: accuracy >= 80 ? "#22C55E" : accuracy >= 60 ? "#F59E0B" : "#EF4444" },
            { label: "XP Ganho", value: "+" + xpEarned, color: "#C9A84C" },
            { label: "Questões", value: results.length, color: "#00D4FF" },
          ].map(s => (
            <div key={s.label} className="rounded-lg p-4" style={{ background: '#0D0D18' }}>
              <div className="text-2xl font-extrabold" style={{ color: s.color }}>{s.value}</div>
              <div className="text-xs" style={{ color: '#666' }}>{s.label}</div>
            </div>
          ))}
        </div>

        <button
          onClick={() => window.location.reload()}
          className="px-8 py-3 rounded-lg font-bold text-base cursor-pointer"
          style={{ background: 'linear-gradient(135deg, #C9A84C, #F0C96A)', color: '#000', border: 'none' }}
        >
          🔄 Jogar Novamente
        </button>
      </motion.div>
    );
  }

  if (!current) return null;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar + streak */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-1 flex-1 mr-4">
          {queue.map((_, i) => (
            <div key={i} className="h-1 rounded-full flex-1 max-w-5" style={{ background: i < idx ? '#22C55E' : i === idx ? '#C9A84C' : '#1E1E2E' }}/>
          ))}
        </div>
        <div className="flex gap-3 items-center shrink-0">
          {streak > 0 && (
            <span className="text-sm font-bold" style={{ color: '#FF8C00' }}>🔥 {streak}</span>
          )}
          {doubleActive && (
            <span className="text-sm font-bold px-2 py-0.5 rounded" style={{ color: '#C9A84C', background: '#C9A84C22' }}>⚡ 2x</span>
          )}
          <span className="text-[13px]" style={{ color: '#888' }}>{idx + 1}/{queue.length}</span>
        </div>
      </div>

      {/* Power-ups */}
      <div className="flex gap-2 mb-6">
        {POWER_UPS.map(pu => (
          <button
            key={pu.id}
            onClick={() => usePowerUp(pu.id)}
            disabled={powerUps[pu.id] <= 0 || revealed}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs cursor-pointer transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            style={{
              background: powerUps[pu.id] > 0 && !revealed ? '#1E1E2E' : '#0D0D18',
              border: `1px solid ${powerUps[pu.id] > 0 && !revealed ? '#333' : '#1A1A1A'}`,
              color: powerUps[pu.id] > 0 && !revealed ? '#E8E8E8' : '#444',
            }}
          >
            {pu.icon} {pu.label} <span className="font-bold" style={{ color: '#C9A84C' }}>×{powerUps[pu.id]}</span>
          </button>
        ))}
      </div>

      {/* Question card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          className="rounded-2xl p-8 mb-6"
          style={{ background: '#12121A', border: '1px solid #1E1E2E' }}
        >
          <div className="flex gap-2 mb-4">
            <span className="text-[11px] px-2 py-0.5 rounded font-semibold uppercase" style={{
              background: current.difficulty === "easy" ? "#22C55E22" : current.difficulty === "medium" ? "#F59E0B22" : "#EF444422",
              color: current.difficulty === "easy" ? "#22C55E" : current.difficulty === "medium" ? "#F59E0B" : "#EF4444",
            }}>
              {current.difficulty === "easy" ? "Fácil" : current.difficulty === "medium" ? "Médio" : "Difícil"}
            </span>
            <span className="text-[11px] px-2 py-0.5 rounded" style={{ background: '#00D4FF22', color: '#00D4FF' }}>
              {current.topic}
            </span>
          </div>

          <p className="text-lg font-semibold mb-6 leading-relaxed" style={{ color: '#E8E8E8' }}>
            {current.question}
          </p>

          <div className="flex flex-col gap-2.5">
            {current.options.map((opt, i) => {
              const isElim = eliminated.includes(i);
              const isCorrect = i === current.correct;
              const isSelected = i === selected;
              let bg = '#0D0D18', border = '#1E1E2E', color = '#E8E8E8';

              if (revealed) {
                if (isCorrect) { bg = '#22C55E22'; border = '#22C55E'; color = '#22C55E'; }
                else if (isSelected && !isCorrect) { bg = '#EF444422'; border = '#EF4444'; color = '#EF4444'; }
              } else if (isElim) {
                bg = '#0A0A0F'; border = '#1A1A1A'; color = '#333';
              }

              return (
                <motion.button
                  key={i}
                  whileHover={!isElim && !revealed ? { scale: 1.01 } : {}}
                  whileTap={!isElim && !revealed ? { scale: 0.99 } : {}}
                  onClick={() => !isElim && handleAnswer(i)}
                  disabled={isElim || revealed}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-lg text-sm text-left transition-all cursor-pointer disabled:cursor-not-allowed ${revealed && isSelected && !isCorrect ? 'animate-shake' : ''}`}
                  style={{
                    background: bg, border: `1px solid ${border}`, color,
                    textDecoration: isElim ? 'line-through' : 'none',
                  }}
                >
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0" style={{ border: `1px solid ${border}` }}>
                    {revealed && isCorrect ? '✓' : revealed && isSelected && !isCorrect ? '✗' : String.fromCharCode(65 + i)}
                  </span>
                  {opt}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Explanation */}
      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-xl p-5 mb-4"
            style={{
              background: selected === current.correct ? '#22C55E11' : '#EF444411',
              border: `1px solid ${selected === current.correct ? '#22C55E44' : '#EF444444'}`,
            }}
          >
            <div className="font-bold mb-2" style={{ color: selected === current.correct ? '#22C55E' : '#EF4444' }}>
              {selected === current.correct ? '✅ Correto!' : '❌ Incorreto'}
              {selected === current.correct && streak > 1 && ` 🔥 Streak de ${streak}!`}
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#CCC' }}>
              {current.explanation}
            </p>
            <button
              onClick={next}
              className="mt-4 px-6 py-2.5 rounded-lg font-bold text-sm cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #C9A84C, #F0C96A)', color: '#000', border: 'none' }}
            >
              {isLast ? 'Ver Resultado 🏆' : 'Próxima →'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const moduleOptions = [
  { id: 0, label: "🎲 Aleatório (todos os módulos)" },
  { id: 1, label: "📖 Fundamentos & DMAIC" },
  { id: 2, label: "🎯 Fase DEFINE" },
  { id: 3, label: "📏 Fase MEASURE" },
  { id: 4, label: "📊 Estatística" },
  { id: 5, label: "🔍 Fase ANALYZE" },
  { id: 6, label: "⚙️ Fase IMPROVE" },
  { id: 7, label: "🛡️ Fase CONTROL" },
  { id: 8, label: "🏭 Lean & VSM" },
  { id: 9, label: "🔬 DFSS" },
  { id: 10, label: "👥 Equipes & Mudança" },
  { id: 11, label: "🌐 Master Black Belt" },
  { id: 12, label: "🏆 Certificação" },
  { id: 99, label: "💼 Cases (CRM + Manufatura)" },
];

export default function QuizPage() {
  const [selectedModule, setSelectedModule] = useState(null);
  const [started, setStarted] = useState(false);
  const { addXP } = useApp();

  const filteredQuestions = selectedModule === null ? [] :
    selectedModule === 0 ? quizQuestions :
    selectedModule === 99 ? quizQuestions.filter(q => q.module === 0) :
    quizQuestions.filter(q => q.module === selectedModule);

  if (started && filteredQuestions.length > 0) {
    return (
      <div>
        <button
          onClick={() => { setStarted(false); setSelectedModule(null); }}
          className="mb-6 px-4 py-2 rounded-lg text-[13px] cursor-pointer"
          style={{ background: '#1E1E2E', color: '#888', border: '1px solid #333' }}
        >
          ← Voltar
        </button>
        <QuizArena questions={filteredQuestions} onXP={addXP} />
      </div>
    );
  }

  return (
    <div>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-extrabold mb-2" style={{ color: '#C9A84C' }}>
        ⚡ Quiz Arena
      </motion.h1>
      <p className="mb-8" style={{ color: '#666' }}>Teste seu conhecimento e ganhe XP. Estilo Anki/Duolingo.</p>

      <div className="rounded-xl p-6 mb-6" style={{ background: '#12121A', border: '1px solid #1E1E2E' }}>
        <h3 className="font-semibold mb-4" style={{ color: '#E8E8E8' }}>Selecione o módulo:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {moduleOptions.map(m => (
            <motion.button
              key={m.id}
              whileHover={{ scale: 1.02, backgroundColor: selectedModule === m.id ? '#C9A84C33' : '#1E1E2E' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedModule(selectedModule === m.id ? null : m.id)}
              className="flex justify-between items-center px-4 py-3 rounded-lg text-[13px] text-left cursor-pointer transition-colors"
              style={{
                background: selectedModule === m.id ? '#C9A84C22' : '#0D0D18',
                border: `1px solid ${selectedModule === m.id ? '#C9A84C' : '#1E1E2E'}`,
                color: selectedModule === m.id ? '#C9A84C' : '#888',
                fontWeight: selectedModule === m.id ? 700 : 400,
              }}
            >
              {m.label}
              <span className="text-[11px] opacity-60">
                {m.id === 0 ? quizQuestions.length :
                 m.id === 99 ? quizQuestions.filter(q => q.module === 0).length :
                 quizQuestions.filter(q => q.module === m.id).length}q
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {selectedModule !== null && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
          <div className="text-sm mb-4" style={{ color: '#888' }}>
            {filteredQuestions.length} questões selecionadas
          </div>
          <button
            onClick={() => setStarted(true)}
            disabled={filteredQuestions.length === 0}
            className="px-10 py-4 rounded-xl font-extrabold text-lg tracking-wider cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed pulse-gold"
            style={{
              background: filteredQuestions.length > 0 ? 'linear-gradient(135deg, #C9A84C, #F0C96A)' : '#333',
              color: '#000',
              border: 'none',
            }}
          >
            ⚡ COMEÇAR QUIZ
          </button>
        </motion.div>
      )}
    </div>
  );
}
