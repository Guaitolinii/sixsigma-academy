import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Timer, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { quizQuestions } from '../data/questions';

const EXAM_DURATION = 4 * 60 * 60; // 4 hours in seconds
const PASSING_SCORE = 0.70; // 70% to pass

// Shuffle function
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function SimuladoPage() {
  const [phase, setPhase] = useState('intro'); // 'intro', 'testing', 'results'
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState([]); // stores user selected index
  const [timeLeft, setTimeLeft] = useState(EXAM_DURATION);

  useEffect(() => {
    let timer;
    if (phase === 'testing' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            finishExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [phase, timeLeft]);

  function startExam() {
    setQuestions(shuffle(quizQuestions));
    setCurrentIdx(0);
    setAnswers(new Array(quizQuestions.length).fill(null));
    setTimeLeft(EXAM_DURATION);
    setPhase('testing');
    window.scrollTo({ top: 0 });
  }

  function finishExam() {
    setPhase('results');
    window.scrollTo({ top: 0 });
  }

  function handleAnswer(optIdx) {
    const newAnswers = [...answers];
    newAnswers[currentIdx] = optIdx;
    setAnswers(newAnswers);
  }

  function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  // INTRO PHASE
  if (phase === 'intro') {
    return (
      <motion.div initial={{opacity:0}} animate={{opacity:1}} className="max-w-2xl mx-auto text-center mt-10">
        <div className="inline-block p-4 rounded-full mb-6" style={{background:'#12121A', border:'1px solid #C9A84C44'}}>
          <Timer size={48} style={{color:'#C9A84C'}} />
        </div>
        <h1 className="text-3xl font-extrabold mb-4" style={{color:'#E8E8E8'}}>Simulado Final de Certificação</h1>
        <p className="mb-8" style={{color:'#888'}}>
          Este é o teste definitivo para aferir seu preparo para o exame ASQ CSSBB (Black Belt).
        </p>
        
        <div className="text-left rounded-xl p-6 mb-8" style={{background:'#12121A', border:'1px solid #1E1E2E'}}>
           <h3 className="font-bold mb-4 flex items-center gap-2" style={{color:'#F0C96A'}}>
             <AlertTriangle size={18}/> Regras do Exame
           </h3>
           <ul className="space-y-3 text-sm" style={{color:'#CCC'}}>
             <li>• <strong>Quantidade:</strong> 150 questões de múltipla escolha.</li>
             <li>• <strong>Tempo Limite:</strong> 4 horas cravadas. O teste encerra automaticamente.</li>
             <li>• <strong>Aprovação:</strong> Mínimo de 70% de acertos necessários.</li>
             <li>• <strong>Atenção:</strong> Várias questões exigem cálculos com tabela Z, Fórmulas de Capacidade e DOE.</li>
             <li style={{color:'#E4605E'}}>• Não há pausa. Certifique-se de ter tempo ininterrupto antes de iniciar.</li>
           </ul>
        </div>
        
        <button onClick={startExam}
          className="w-full sm:w-auto px-8 py-4 rounded-lg font-bold text-lg cursor-pointer transition-all hover:scale-105 shadow-xl"
          style={{background:'linear-gradient(135deg, #C9A84C, #F0C96A)', color:'#000', border:'none'}}>
          INICIAR SIMULADO (4 HORAS)
        </button>
      </motion.div>
    );
  }

  // RESULTS PHASE
  if (phase === 'results') {
    let correctCount = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correct) correctCount++;
    });
    const total = questions.length;
    const scorePct = correctCount / total;
    const isPassed = scorePct >= PASSING_SCORE;

    return (
      <motion.div initial={{opacity:0}} animate={{opacity:1}} className="max-w-3xl mx-auto">
        <div className="text-center mb-10 pt-8" style={{borderBottom:'1px solid #1E1E2E', paddingBottom:'2rem'}}>
          {isPassed ? (
            <div className="inline-block p-4 rounded-full mb-4" style={{background:'#12121A', border:'1px solid #22C55E44'}}>
              <CheckCircle size={56} style={{color:'#22C55E'}} />
            </div>
          ) : (
            <div className="inline-block p-4 rounded-full mb-4" style={{background:'#12121A', border:'1px solid #E4605E44'}}>
              <XCircle size={56} style={{color:'#E4605E'}} />
            </div>
          )}
          <h1 className="text-3xl font-black mb-2" style={{color:'#E8E8E8'}}>
            {isPassed ? 'Aprovado!' : 'Reprovado'}
          </h1>
          <p className="text-xl mb-4" style={{color: isPassed ? '#22C55E' : '#E4605E'}}>
            Sua pontuação final: <span className="font-black text-2xl">{(scorePct * 100).toFixed(1)}%</span>
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <div className="px-4 py-2 rounded-lg" style={{background:'#12121A', border:'1px solid #1E1E2E', color:'#888'}}>
              <strong style={{color:'#E8E8E8'}}>{correctCount}</strong> / {total} Corretas
            </div>
            <div className="px-4 py-2 rounded-lg" style={{background:'#12121A', border:'1px solid #1E1E2E', color:'#888'}}>
              Tempo total: <strong style={{color:'#E8E8E8'}}>{formatTime(EXAM_DURATION - timeLeft)}</strong>
            </div>
          </div>
          <button onClick={() => setPhase('intro')}
            className="mt-8 px-8 py-3 rounded-lg font-bold text-sm cursor-pointer"
            style={{background:'none', border:'1px solid #C9A84C', color:'#C9A84C'}}>
            Refazer Simulado
          </button>
        </div>

        <h3 className="text-lg font-bold mb-4" style={{color:'#E8E8E8'}}>Gabarito e Correções:</h3>
        <div className="space-y-6">
          {questions.map((q, i) => {
            const userAnswer = answers[i];
            const isCorrect = userAnswer === q.correct;
            return (
              <div key={i} className="rounded-xl p-5" style={{background:'#12121A', border:`1px solid ${isCorrect?'#22C55E44':'#E4605E44'}`}}>
                <div className="flex gap-3 mb-3">
                  <div className="mt-1">
                    {isCorrect ? <CheckCircle size={18} style={{color:'#22C55E'}}/> : <XCircle size={18} style={{color:'#E4605E'}}/>}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1" style={{color:'#E8E8E8'}}>Questão {i+1}</h4>
                    <p className="text-sm mb-3" style={{color:'#CCC'}}>{q.question}</p>
                    <div className="space-y-2 text-xs">
                      {q.options.map((opt, optIdx) => {
                        let bg = 'transparent';
                        let color = '#666';
                        let border = '1px solid #1E1E2E';
                        if (optIdx === q.correct) {
                          bg = '#22C55E11'; color = '#22C55E'; border = '1px solid #22C55E44';
                        } else if (optIdx === userAnswer && !isCorrect) {
                          bg = '#E4605E11'; color = '#E4605E'; border = '1px solid #E4605E44';
                        }
                        return (
                          <div key={optIdx} className="px-3 py-2 rounded" style={{background:bg, color, border}}>
                            {opt}
                          </div>
                        )
                      })}
                    </div>
                    {q.explanation && (
                      <div className="mt-3 p-3 rounded text-xs" style={{background:'#0D0D18', border:'1px solid #1E1E2E', color:'#888'}}>
                        <strong style={{color:'#C9A84C'}}>Explicação:</strong> {q.explanation}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>
    );
  }

  // TESTING PHASE
  const q = questions[currentIdx];
  const isLast = currentIdx === questions.length - 1;

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="max-w-3xl mx-auto h-full flex flex-col">
      {/* Header Info */}
      <div className="flex justify-between items-center mb-6 pb-4" style={{borderBottom:'1px solid #1E1E2E'}}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-black" style={{background:'#C9A84C'}}>
            {currentIdx + 1}
          </div>
          <div className="text-sm font-bold" style={{color:'#E8E8E8'}}>
            Questão <span style={{color:'#888'}}>/ {questions.length}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono text-sm font-bold"
          style={{background:'#12121A', border: timeLeft < 300 ? '1px solid #E4605E' : '1px solid #1E1E2E', color: timeLeft < 300 ? '#E4605E' : '#C9A84C'}}>
          <Timer size={16} />
          {formatTime(timeLeft)}
        </div>
      </div>

      {/* Question Context */}
      <div className="mb-8">
        <h2 className="text-lg font-bold leading-relaxed" style={{color:'#E8E8E8'}}>{q.question}</h2>
        <div className="flex gap-2 mt-3 text-[11px] uppercase tracking-wider font-bold" style={{color:'#666'}}>
          <span className="px-2 py-0.5 rounded" style={{background:'#12121A'}}>{q.topic}</span>
          <span className="px-2 py-0.5 rounded" style={{background:'#12121A'}}>{q.difficulty}</span>
        </div>
      </div>

      {/* Options */}
      <div className="grid gap-3 mb-8">
        {q.options.map((opt, i) => {
          const isSelected = answers[currentIdx] === i;
          return (
            <button key={i} onClick={() => handleAnswer(i)}
              className="text-left p-4 rounded-xl text-sm transition-all cursor-pointer flex items-start gap-4"
              style={{
                background: isSelected ? '#C9A84C11' : '#12121A',
                border: isSelected ? '1px solid #C9A84C' : '1px solid #1E1E2E',
                color: isSelected ? '#C9A84C' : '#CCC'
              }}>
              <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5"
                style={{
                  background: isSelected ? '#C9A84C' : '#1E1E2E',
                  color: isSelected ? '#000' : '#666'
                }}>
                {String.fromCharCode(65 + i)}
              </div>
              <span>{opt}</span>
            </button>
          )
        })}
      </div>

      {/* Footer Nav */}
      <div className="mt-auto pt-6 flex justify-between items-center" style={{borderTop:'1px solid #1E1E2E'}}>
        <button
          onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
          disabled={currentIdx === 0}
          className="px-6 py-2 rounded-lg text-sm font-bold cursor-pointer transition-colors disabled:opacity-30"
          style={{background:'#12121A', color:'#E8E8E8', border:'none'}}>
          ← Anterior
        </button>
        
        <div className="text-xs" style={{color:'#666'}}>
          Respondidas: {answers.filter(a => a !== null).length} de {questions.length}
        </div>

        {isLast ? (
          <button
            onClick={() => {
              if (window.confirm("Deseja realmente finalizar o simulado? Questões não respondidas serão computadas como erro.")) {
                finishExam();
              }
            }}
            className="px-6 py-2 rounded-lg text-sm font-bold cursor-pointer transition-all hover:scale-105"
            style={{background:'linear-gradient(135deg, #22C55E, #16A34A)', color:'#000', border:'none'}}>
            Finalizar Exame
          </button>
        ) : (
          <button
            onClick={() => setCurrentIdx(prev => Math.min(questions.length - 1, prev + 1))}
            className="px-6 py-2 rounded-lg text-sm font-bold cursor-pointer transition-colors"
            style={{background:'#C9A84C', color:'#000', border:'none'}}>
            Próxima →
          </button>
        )}
      </div>

    </motion.div>
  );
}
