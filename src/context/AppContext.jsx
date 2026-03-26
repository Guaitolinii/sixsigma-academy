import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './AuthContext';

const LEVELS = [
  { name: "White Belt",  min: 0,    max: 500,  color: "#FFFFFF", icon: "⬜" },
  { name: "Yellow Belt", min: 501,  max: 1500, color: "#F5C842", icon: "🟨" },
  { name: "Green Belt",  min: 1501, max: 3500, color: "#22C55E", icon: "🟩" },
  { name: "Black Belt",  min: 3501, max: 7000, color: "#C9A84C", icon: "⬛" },
  { name: "Master BB",   min: 7001, max: 99999, color: "#00D4FF", icon: "💎" },
];

function getLevel(xp) {
  return LEVELS.find(l => xp >= l.min && xp <= l.max) || LEVELS[0];
}

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const { user, session } = useAuth();
  const [xp, setXP] = useState(() => parseInt(localStorage.getItem("ss_xp") || "0"));
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (user) {
      supabase.from('user_profiles').select('total_xp, is_admin').eq('id', user.id).single()
        .then(({ data }) => {
          if (data) {
            setXP(data.total_xp);
            setIsAdmin(data.is_admin === true);
            localStorage.setItem("ss_xp", data.total_xp.toString());
          }
        });
    } else {
      setIsAdmin(false);
    }
  }, [user]);
  const [completedModules, setCompletedModules] = useState(
    () => JSON.parse(localStorage.getItem("ss_completed") || "[]")
  );
  const [completedLessons, setCompletedLessons] = useState(
    () => JSON.parse(localStorage.getItem("ss_lessons") || "[]")
  );
  const [quizStats, setQuizStats] = useState(
    () => JSON.parse(localStorage.getItem("ss_quiz_stats") || "{}")
  );
  const [streak, setStreak] = useState(() => {
    const data = JSON.parse(localStorage.getItem("ss_streak_data") || '{"count":0,"lastDate":""}');
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (data.lastDate === today) return data.count;
    if (data.lastDate === yesterday) return data.count;
    return 0;
  });
  const [badges, setBadges] = useState(
    () => JSON.parse(localStorage.getItem("ss_badges") || "[]")
  );
  const [favoriteTerms, setFavoriteTerms] = useState(
    () => JSON.parse(localStorage.getItem("ss_fav_terms") || "[]")
  );

  useEffect(() => { localStorage.setItem("ss_xp", xp); }, [xp]);
  useEffect(() => { localStorage.setItem("ss_completed", JSON.stringify(completedModules)); }, [completedModules]);
  useEffect(() => { localStorage.setItem("ss_lessons", JSON.stringify(completedLessons)); }, [completedLessons]);
  useEffect(() => { localStorage.setItem("ss_quiz_stats", JSON.stringify(quizStats)); }, [quizStats]);
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    localStorage.setItem("ss_streak_data", JSON.stringify({ count: streak, lastDate: today }));
  }, [streak]);
  useEffect(() => { localStorage.setItem("ss_badges", JSON.stringify(badges)); }, [badges]);
  useEffect(() => { localStorage.setItem("ss_fav_terms", JSON.stringify(favoriteTerms)); }, [favoriteTerms]);

  const addXP = async (amount) => {
    setXP(prev => prev + amount);
    if (user && session) {
      try {
        await supabase.functions.invoke('update-xp', {
          body: { xp_earned: amount }
        });
      } catch (e) {
        console.error("Failed to sync XP with server", e);
      }
    }
  };

  const completeLesson = (lessonId) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons(prev => [...prev, lessonId]);
      addXP(50);
      updateStreak();
    }
  };

  const completeModule = (id) => {
    if (!completedModules.includes(id)) {
      setCompletedModules(prev => [...prev, id]);
      addXP(150);
      updateStreak();
    }
  };

  const updateStreak = () => {
    const data = JSON.parse(localStorage.getItem("ss_streak_data") || '{"count":0,"lastDate":""}');
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

    if (data.lastDate === today) return;
    if (data.lastDate === yesterday) {
      setStreak(prev => prev + 1);
    } else {
      setStreak(1);
    }
  };

  const toggleFavoriteTerm = (term) => {
    setFavoriteTerms(prev =>
      prev.includes(term) ? prev.filter(t => t !== term) : [...prev, term]
    );
  };

  const addBadge = (badgeId) => {
    if (!badges.includes(badgeId)) {
      setBadges(prev => [...prev, badgeId]);
    }
  };

  const level = getLevel(xp);

  return (
    <AppContext.Provider value={{
      xp, addXP, level, LEVELS, getLevel, isAdmin,
      completedModules, completeModule,
      completedLessons, completeLesson,
      quizStats, setQuizStats,
      streak, updateStreak,
      badges, addBadge,
      favoriteTerms, toggleFavoriteTerm,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
