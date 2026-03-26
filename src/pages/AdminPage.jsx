import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';
import { useApp } from '../context/AppContext';
import { Shield, Trash2, TrendingUp, TrendingDown, Users, Star, AlertCircle } from 'lucide-react';

export default function AdminPage() {
  const { session } = useAuth();
  const { getLevel } = useApp();
  
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [actionLoading, setActionLoading] = useState(null);

  // Metrics
  const totalUsers = users.length;
  const totalXp = users.reduce((acc, curr) => acc + (curr.total_xp || 0), 0);
  const avgXp = totalUsers > 0 ? Math.round(totalXp / totalUsers) : 0;

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const callAdminAction = async (action, targetUserId, xpAdjustment = 0) => {
    if (!session?.access_token) return;
    
    try {
      setActionLoading(targetUserId);
      const { data, error } = await supabase.functions.invoke('admin-actions', {
        body: { action, targetUserId, xpAdjustment },
        headers: {
          Authorization: `Bearer ${session.access_token}`
        }
      });

      if (error) throw error;
      
      // Update local state without refetching all
      if (action === 'DELETE_USER') {
        setUsers(prev => prev.filter(u => u.id !== targetUserId));
      } else if (action === 'ADJUST_XP') {
        setUsers(prev => prev.map(u => 
          u.id === targetUserId ? { ...u, total_xp: data.newXp } : u
        ));
      }

    } catch (err) {
      console.error("Admin Action Failed:", err);
      alert("Erro na ação administrativa: " + err.message);
    } finally {
      setActionLoading(null);
    }
  };

  const handleDelete = (userId, userName) => {
    if (window.confirm(`Tem certeza que deseja EXCLUIR PERMANENTEMENTE o usuário ${userName}? Esta ação não pode ser desfeita.`)) {
      callAdminAction('DELETE_USER', userId);
    }
  };

  const handleXpAdjust = (userId, amount) => {
    callAdminAction('ADJUST_XP', userId, amount);
  };

  return (
    <div className="pb-20">
      <motion.h1 
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="text-2xl font-extrabold mb-2 flex items-center gap-2" 
        style={{ color: '#FF4D4D', fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '1px' }}
      >
        <Shield size={26} />
        Painel de Administração (MBB Control)
      </motion.h1>
      <p className="mb-8" style={{ color: '#888' }}>
        Gerencie alunos, ajuste pontuações de eventos offline e remova contas suspeitas. Todas as ações aqui são definitivas.
      </p>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {[
          { icon: Users, label: 'Total Registrados', value: totalUsers, color: '#C9A84C' },
          { icon: Star, label: 'XP Global', value: totalXp.toLocaleString(), color: '#4ADE80' },
          { icon: TrendingUp, label: 'Média de XP', value: avgXp.toLocaleString(), color: '#60A5FA' },
        ].map((metric, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-4 rounded-xl flex items-center gap-4"
            style={{ background: '#12121A', border: '1px solid #1E1E2E' }}
          >
            <div className="p-3 rounded-lg" style={{ background: `${metric.color}22`, color: metric.color }}>
              <metric.icon size={24} />
            </div>
            <div>
              <div className="text-2xl font-bold" style={{ color: '#E8E8E8' }}>{metric.value}</div>
              <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#888' }}>{metric.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {error && (
        <div className="p-4 rounded-lg flex items-center gap-2 mb-6" style={{ background: '#3A1010', color: '#FF6B6B' }}>
          <AlertCircle size={20} />
          <span>Erro ao carregar usuários: {error}</span>
        </div>
      )}

      {/* Users Table */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        className="rounded-xl overflow-hidden"
        style={{ background: '#12121A', border: '1px solid #1E1E2E' }}
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr style={{ background: '#1A1A24', borderBottom: '1px solid #2E2E3E' }}>
                <th className="px-4 py-3 font-semibold uppercase tracking-wider text-xs" style={{ color: '#888' }}>Usuário</th>
                <th className="px-4 py-3 font-semibold uppercase tracking-wider text-xs" style={{ color: '#888' }}>Nível</th>
                <th className="px-4 py-3 font-semibold uppercase tracking-wider text-xs" style={{ color: '#888' }}>XP Total</th>
                <th className="px-4 py-3 font-semibold uppercase tracking-wider text-xs text-center" style={{ color: '#888' }}>Ações Administrativas</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={4} className="px-4 py-8 text-center text-gray-500">Caregando base de dados...</td>
                </tr>
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-4 py-8 text-center text-gray-500">Nenhum usuário encontrado.</td>
                </tr>
              ) : (
                users.map(u => {
                  const userLevel = getLevel(u.total_xp || 0);
                  const isProcessing = actionLoading === u.id;

                  return (
                    <tr key={u.id} className="border-b transition-colors hover:bg-[#1A1A24]" style={{ borderColor: '#1E1E2E', opacity: isProcessing ? 0.5 : 1 }}>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0" 
                            style={{ background: u.is_admin ? '#FF4D4D22' : '#2E2E3E', color: u.is_admin ? '#FF4D4D' : '#C9A84C' }}>
                            {u.name?.charAt(0).toUpperCase() || '?'}
                          </div>
                          <div>
                            <div className="font-semibold text-[#E8E8E8]">{u.name || 'Desconhecido'}</div>
                            {u.is_admin && <div className="text-[10px] text-[#FF4D4D] font-bold uppercase">Admin</div>}
                          </div>
                        </div>
                      </td>
                      
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-semibold" style={{ background: '#1E1E2E', color: userLevel.color }}>
                          {userLevel.icon} {userLevel.name}
                        </span>
                      </td>

                      <td className="px-4 py-3 font-bold" style={{ color: '#C9A84C' }}>
                        {(u.total_xp || 0).toLocaleString()} XP
                      </td>

                      <td className="px-4 py-3">
                        <div className="flex items-center justify-center gap-2">
                          {/* Botão +500 XP */}
                          <button
                            onClick={() => handleXpAdjust(u.id, 500)}
                            disabled={isProcessing}
                            title="Adicionar 500 XP"
                            className="p-1.5 rounded-md hover:bg-[#14401E] transition-all hover:scale-105 active:scale-95 hover:shadow-lg"
                            style={{ background: '#0D2B14', color: '#4ADE80', border: '1px solid #1A4D24' }}
                          >
                            <TrendingUp size={16} />
                          </button>
                          
                          {/* Botão -500 XP */}
                          <button
                            onClick={() => handleXpAdjust(u.id, -500)}
                            disabled={isProcessing || u.total_xp === 0}
                            title="Remover 500 XP"
                            className="p-1.5 rounded-md hover:bg-[#4A1515] transition-all disabled:opacity-30 hover:scale-105 active:scale-95 hover:shadow-lg"
                            style={{ background: '#2E0C0C', color: '#F87171', border: '1px solid #4A1515' }}
                          >
                            <TrendingDown size={16} />
                          </button>

                          <div className="w-px h-6 mx-1" style={{ background: '#2E2E3E' }} />

                          {/* Botão Deletar */}
                          <button
                            onClick={() => handleDelete(u.id, u.name)}
                            disabled={isProcessing || u.is_admin}
                            title="Deletar permanentemente"
                            className="p-1.5 rounded-md hover:bg-[#4A1515] transition-all disabled:opacity-30 ml-2 hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-red-500/20"
                            style={{ background: '#2E0C0C', color: '#EF4444', border: '1px solid #4A1515' }}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
