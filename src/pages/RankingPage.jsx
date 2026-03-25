import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { Trophy, Medal, Star, ShieldAlert } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function RankingPage() {
  const { user } = useAuth();
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRanking();
  }, []);

  const fetchRanking = async () => {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('id, name, total_xp')
        .order('total_xp', { ascending: false })
        .limit(50);
      
      if (error) throw error;
      setProfiles(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getMedalColor = (index) => {
    if (index === 0) return '#C9A84C'; // Ouro
    if (index === 1) return '#C0C0C0'; // Prata
    if (index === 2) return '#CD7F32'; // Bronze
    return '#333344'; // Restante
  };

  return (
    <div className="pb-20">
      <motion.h1 
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="text-2xl font-extrabold mb-2 flex items-center gap-2" 
        style={{ color: '#C9A84C', fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '1px' }}
      >
        <Trophy size={26} />
        Ranking Global
      </motion.h1>
      <p className="mb-8" style={{ color: '#666' }}>
        Os 50 melhores Master Black Belts da academia. Complete módulos e quizzes para subir.
      </p>

      {error ? (
        <div className="p-4 rounded-lg flex items-center gap-2" style={{ background: '#3A1010', color: '#FF6B6B' }}>
          <ShieldAlert size={20} />
          <span>Erro ao carregar ranking: {error}</span>
        </div>
      ) : loading ? (
        <div className="flex justify-center py-20">
          <div className="w-8 h-8 rounded-full border-4 border-t-transparent animate-spin" style={{ borderColor: '#C9A84C', borderTopColor: 'transparent' }} />
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="rounded-xl overflow-hidden"
          style={{ background: '#12121A', border: '1px solid #1E1E2E' }}
        >
          <div className="grid grid-cols-[40px_1fr_80px] sm:grid-cols-[60px_1fr_100px] gap-4 p-4 font-bold text-xs uppercase tracking-wider border-b" style={{ borderColor: '#1E1E2E', color: '#666' }}>
            <div className="text-center">Pos</div>
            <div>Especialista</div>
            <div className="text-right">XP</div>
          </div>
          
          <div className="flex flex-col">
            {profiles.map((p, i) => {
              const isMe = user?.id === p.id;
              
              return (
                <motion.div 
                  key={p.id}
                  whileHover={{ backgroundColor: '#1E1E2E' }}
                  className="grid grid-cols-[40px_1fr_80px] sm:grid-cols-[60px_1fr_100px] gap-4 p-4 items-center border-b last:border-0 transition-colors"
                  style={{ 
                    borderColor: '#1E1E2E',
                    background: isMe ? '#C9A84C11' : 'transparent'
                  }}
                >
                  <div className="flex justify-center">
                    {i < 3 ? (
                      <Medal size={24} style={{ color: getMedalColor(i) }} />
                    ) : (
                      <span className="font-bold text-sm" style={{ color: '#666' }}>{i + 1}º</span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0" style={{ background: '#1E1E2E', color: '#C9A84C' }}>
                      {p.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="truncate">
                      <div className="font-semibold text-sm truncate" style={{ color: isMe ? '#C9A84C' : '#E8E8E8' }}>
                        {p.name} {isMe && <span className="text-[10px] ml-1 bg-[#C9A84C] text-[#0A0A0F] px-1.5 py-0.5 rounded-full">VOCÊ</span>}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right flex items-center justify-end gap-1">
                    <span className="font-bold" style={{ color: '#C9A84C' }}>{p.total_xp.toLocaleString()}</span>
                    <Star size={12} style={{ color: '#C9A84C' }} className="hidden sm:inline" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
}
