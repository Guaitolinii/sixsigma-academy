import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { modules } from '../data/modules';
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle, BookOpen } from 'lucide-react';

function renderMarkdown(text) {
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
      const tag = match.includes('---') ? 'th' : 'td';
      return '<tr>' + cells.map(c => `<${tag}>${c.trim()}</${tag}>`).join('') + '</tr>';
    });

  html = html.replace(/(<li>.*<\/li>\n?)+/g, (match) => {
    return '<ul>' + match + '</ul>';
  });

  html = html.replace(/(<tr>.*<\/tr>\n?)+/g, (match) => {
    return '<table>' + match + '</table>';
  });

  return html;
}

export default function LessonPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { completeLesson, completeModule, completedLessons } = useApp();
  const module = useMemo(() => modules.find(m => m.id === parseInt(id)), [id]);
  const [lessonIdx, setLessonIdx] = useState(0);

  if (!module) {
    return (
      <div className="text-center py-20">
        <p style={{ color: '#888' }}>Módulo não encontrado.</p>
        <button onClick={() => navigate('/modulos')} className="mt-4 px-4 py-2 rounded-lg" style={{ background: '#1E1E2E', color: '#C9A84C', border: 'none', cursor: 'pointer' }}>
          ← Voltar aos Módulos
        </button>
      </div>
    );
  }

  const lessons = module.lessons || [];
  const currentLesson = lessons[lessonIdx];
  const isLessonCompleted = completedLessons.includes(currentLesson?.id);

  const handleComplete = () => {
    if (currentLesson) {
      completeLesson(currentLesson.id);
      if (lessonIdx === lessons.length - 1) {
        completeModule(module.id);
      }
    }
  };

  const handleNext = () => {
    handleComplete();
    if (lessonIdx < lessons.length - 1) {
      setLessonIdx(prev => prev + 1);
      window.scrollTo(0, 0);
    } else {
      navigate('/modulos');
    }
  };

  const handlePrev = () => {
    if (lessonIdx > 0) {
      setLessonIdx(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Mobile lesson selector */}
      <div className="lg:hidden mb-4 w-full">
        <button
          onClick={() => navigate('/modulos')}
          className="flex items-center gap-2 text-sm mb-3 cursor-pointer"
          style={{ color: '#888', background: 'none', border: 'none' }}
        >
          <ChevronLeft size={14} /> Módulos
        </button>
        <select
          value={lessonIdx}
          onChange={(e) => { setLessonIdx(Number(e.target.value)); window.scrollTo(0, 0); }}
          className="w-full py-2.5 px-3 rounded-lg text-sm"
          style={{ background: '#12121A', border: '1px solid #1E1E2E', color: '#E8E8E8', outline: 'none' }}
        >
          {lessons.map((l, i) => (
            <option key={l.id} value={i}>
              {completedLessons.includes(l.id) ? '✓ ' : ''}{l.title}
            </option>
          ))}
        </select>
      </div>
      {/* Sidebar sumário */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden lg:block w-64 shrink-0"
      >
        <div className="sticky top-8 rounded-xl p-4" style={{ background: '#12121A', border: '1px solid #1E1E2E' }}>
          <button
            onClick={() => navigate('/modulos')}
            className="flex items-center gap-2 text-sm mb-4 cursor-pointer"
            style={{ color: '#888', background: 'none', border: 'none' }}
          >
            <ChevronLeft size={14} /> Módulos
          </button>
          <h3 className="text-sm font-bold mb-3" style={{ color: '#C9A84C' }}>
            {module.title}
          </h3>
          {lessons.map((l, i) => (
            <button
              key={l.id}
              onClick={() => setLessonIdx(i)}
              className="flex items-center gap-2 w-full text-left px-3 py-2 rounded-md text-[13px] mb-1 cursor-pointer transition-colors"
              style={{
                background: i === lessonIdx ? 'rgba(201, 168, 76, 0.1)' : 'transparent',
                color: i === lessonIdx ? '#C9A84C' : '#888',
                border: 'none',
                fontWeight: i === lessonIdx ? 600 : 400,
              }}
            >
              {completedLessons.includes(l.id) ? (
                <CheckCircle size={14} className="text-green-500 shrink-0" />
              ) : (
                <BookOpen size={14} className="shrink-0" />
              )}
              <span className="truncate">{l.title}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        key={lessonIdx}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-1 min-w-0"
      >
        {/* Lesson header */}
        <div className="mb-6">
          <div className="text-[11px] uppercase tracking-wider font-bold mb-2" style={{ color: '#C9A84C' }}>
            Módulo {String(module.id).padStart(2, '0')} — Lição {lessonIdx + 1} de {lessons.length}
          </div>
          <h1 className="text-2xl font-extrabold" style={{ color: '#E8E8E8' }}>
            {currentLesson?.title}
          </h1>
          <div className="mt-3 h-1 rounded-full" style={{ background: '#1E1E2E' }}>
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                background: 'linear-gradient(90deg, #C9A84C, #F0C96A)',
                width: `${((lessonIdx + 1) / lessons.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Content area */}
        <div
          className="lesson-content rounded-xl p-4 sm:p-6 md:p-8 mb-6"
          style={{ background: '#12121A', border: '1px solid #1E1E2E' }}
          dangerouslySetInnerHTML={{ __html: renderMarkdown(currentLesson?.content || '') }}
        />

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3">
          <button
            onClick={handlePrev}
            disabled={lessonIdx === 0}
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed order-2 sm:order-1"
            style={{ background: '#1E1E2E', color: '#888', border: 'none' }}
          >
            <ChevronLeft size={16} /> Anterior
          </button>

          {!isLessonCompleted && (
            <button
              onClick={handleComplete}
              className="px-5 py-2.5 rounded-lg text-sm font-bold cursor-pointer order-1 sm:order-2"
              style={{
                background: 'rgba(0, 255, 136, 0.1)',
                color: '#00FF88',
                border: '1px solid rgba(0, 255, 136, 0.3)',
              }}
            >
              ✓ Marcar como Concluída (+50 XP)
            </button>
          )}

          <button
            onClick={handleNext}
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold cursor-pointer order-3"
            style={{
              background: 'linear-gradient(135deg, #C9A84C, #F0C96A)',
              color: '#000',
              border: 'none',
            }}
          >
            {lessonIdx === lessons.length - 1 ? 'Concluir Módulo 🏆' : 'Próxima'} <ChevronRight size={16} />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
