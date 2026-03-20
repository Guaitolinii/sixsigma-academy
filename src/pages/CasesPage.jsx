import { cases } from '../data/cases';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PHASE_EMOJIS = { D: '🎯', M: '📏', A: '🔍', I: '⚙️', C: '🛡️' };

function renderCaseMarkdown(text) {
  if (!text) return '';
  let html = text
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^> (.*$)/gm, '<blockquote>$1</blockquote>')
    .replace(/^- (.*$)/gm, '<li>$1</li>')
    .replace(/^\d+\. (.*$)/gm, '<li>$1</li>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(c => c.trim());
      if (cells.every(c => c.trim().match(/^[-:]+$/))) return '';
      return '<tr>' + cells.map(c => `<td>${c.trim()}</td>`).join('') + '</tr>';
    });
  html = html.replace(/(<li>.*<\/li>\n?)+/g, m => '<ul>' + m + '</ul>');
  html = html.replace(/(<tr>.*<\/tr>\n?)+/g, m => '<table>' + m + '</table>');
  return html;
}

export default function CasesPage() {
  const [selectedCase, setSelectedCase] = useState(null);
  const [selectedPhase, setSelectedPhase] = useState(0);

  if (!selectedCase) {
    return (
      <div>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-extrabold mb-2" style={{ color: '#C9A84C' }}>
          🔬 Central de Cases DMAIC
        </motion.h1>
        <p className="mb-8" style={{ color: '#666' }}>Casos reais detalhados fase a fase — aprenda como um Black Belt real trabalha.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              onClick={() => { setSelectedCase(c); setSelectedPhase(0); }}
              className="card-glow rounded-xl p-6 cursor-pointer"
              style={{ background: '#12121A', border: '1px solid #1E1E2E' }}
            >
              <div className="text-5xl mb-4">{c.cover_emoji}</div>
              <div className="text-[11px] uppercase tracking-wider font-bold mb-1" style={{ color: '#C9A84C' }}>{c.industry}</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#E8E8E8' }}>{c.title}</h3>
              <p className="text-sm mb-4" style={{ color: '#888' }}>{c.subtitle}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {c.tags.map(tag => (
                  <span key={tag} className="text-[11px] px-2 py-0.5 rounded-full" style={{ background: '#C9A84C22', color: '#C9A84C' }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="rounded-lg p-2" style={{ background: '#0D0D18' }}>
                  <div className="text-xs font-bold" style={{ color: '#00D4FF' }}>{c.duration}</div>
                  <div className="text-[10px]" style={{ color: '#666' }}>Duração</div>
                </div>
                <div className="rounded-lg p-2" style={{ background: '#0D0D18' }}>
                  <div className="text-xs font-bold" style={{ color: '#22C55E' }}>{c.saving}</div>
                  <div className="text-[10px]" style={{ color: '#666' }}>Saving</div>
                </div>
                <div className="rounded-lg p-2" style={{ background: '#0D0D18' }}>
                  <div className="text-xs font-bold" style={{ color: '#F0C96A' }}>{c.sigmaGain}</div>
                  <div className="text-[10px]" style={{ color: '#666' }}>Ganho Sigma</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  const phase = selectedCase.phases[selectedPhase];

  return (
    <div>
      <button
        onClick={() => setSelectedCase(null)}
        className="flex items-center gap-2 text-sm mb-6 cursor-pointer"
        style={{ color: '#888', background: 'none', border: 'none' }}
      >
        ← Voltar aos Cases
      </button>

      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xl font-extrabold mb-1" style={{ color: '#C9A84C' }}>
        {selectedCase.cover_emoji} {selectedCase.title}
      </motion.h1>
      <p className="text-sm mb-6" style={{ color: '#888' }}>{selectedCase.subtitle}</p>

      {/* Phase tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 -mx-1 px-1">
        {selectedCase.phases.map((p, i) => (
          <button
            key={p.phase}
            onClick={() => setSelectedPhase(i)}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold cursor-pointer transition-all whitespace-nowrap shrink-0"
            style={{
              background: i === selectedPhase ? p.color + '22' : '#0D0D18',
              color: i === selectedPhase ? p.color : '#666',
              border: `1px solid ${i === selectedPhase ? p.color + '66' : '#1E1E2E'}`,
            }}
          >
            {PHASE_EMOJIS[p.phase]} {p.label}
          </button>
        ))}
      </div>

      {/* Phase content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedPhase}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-6"
        >
          {/* Phase header */}
          <div className="rounded-xl p-4 sm:p-6" style={{ background: '#12121A', border: `1px solid ${phase.color}33` }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-lg" style={{ background: phase.color + '22', color: phase.color }}>
                {phase.phase}
              </div>
              <div>
                <h2 className="text-lg font-bold" style={{ color: '#E8E8E8' }}>{phase.title}</h2>
                <div className="text-xs" style={{ color: '#666' }}>{phase.duration}</div>
              </div>
            </div>

            {/* Tools */}
            <div className="flex flex-wrap gap-2 mt-4">
              {phase.tools.map(tool => (
                <span key={tool} className="text-[11px] px-2 py-0.5 rounded-full" style={{ background: phase.color + '15', color: phase.color }}>
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Specialist's work */}
          <div className="rounded-xl p-4 sm:p-6" style={{ background: '#0D0D18', border: '1px solid #C9A84C22' }}>
            <h3 className="text-sm font-bold mb-3" style={{ color: '#C9A84C' }}>👤 Papel do Especialista</h3>
            <div className="lesson-content text-sm" dangerouslySetInnerHTML={{ __html: renderCaseMarkdown(phase.specialist_role) }} />
          </div>

          {/* Main content */}
          <div className="rounded-xl p-4 sm:p-6" style={{ background: '#12121A', border: '1px solid #1E1E2E' }}>
            <div className="lesson-content" dangerouslySetInnerHTML={{ __html: renderCaseMarkdown(phase.content) }} />
          </div>

          {/* Key output */}
          <div className="rounded-xl p-4 flex items-start gap-3" style={{ background: '#22C55E11', border: '1px solid #22C55E33' }}>
            <span className="text-lg">🎯</span>
            <div>
              <div className="text-xs font-bold mb-1" style={{ color: '#22C55E' }}>Entregável Principal</div>
              <div className="text-sm" style={{ color: '#CCC' }}>{phase.key_output}</div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
