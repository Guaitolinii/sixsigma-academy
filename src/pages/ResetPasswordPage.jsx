import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Lock, AlertCircle, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function ResetPasswordPage() {
  const { updatePassword } = useAuth();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Escutar por resposta do Supabase no hash (access_token), 
    // Supabase Auth lida com isso automaticamente para setar a sessão.
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        // Se a pessoa abriu a página mas não tem token válido na URL/sessão
        setError("Sessão de recuperação inválida ou expirada. Tente recuperar a senha novamente.");
      }
    };
    checkSession();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    setLoading(true);

    try {
      await updatePassword(password);
      setSuccess(true);
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (err) {
      setError(err.message || 'Erro ao atualizar a senha.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#0A0A0F]">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full p-8 rounded-2xl"
        style={{
          background: 'rgba(18, 18, 26, 0.7)',
          backdropFilter: 'blur(10px)',
          border: '1px solid #1E1E2E',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
        }}
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4" style={{ background: '#C9A84C22', color: '#C9A84C' }}>
            <Lock size={24} />
          </div>
          <h1 className="text-2xl font-bold mb-2">Redefinir Senha</h1>
          <p className="text-sm" style={{ color: '#888' }}>
            Crie uma nova senha para acessar sua conta.
          </p>
        </div>

        {error && (
          <div className="flex items-center gap-2 p-3 mb-6 rounded-lg text-sm" style={{ background: '#3A1010', color: '#FF6B6B', border: '1px solid #5A1A1A' }}>
            <AlertCircle size={16} className="shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {success ? (
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle size={48} style={{ color: '#4ADE80' }} />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Senha Atualizada!</h2>
            <p className="text-sm mb-6" style={{ color: '#888' }}>
              Sua senha foi alterada com sucesso. Redirecionando para o login...
            </p>
            <button
              onClick={() => navigate('/login')}
              className="w-full py-2.5 rounded-lg text-sm font-bold tracking-wide transition-transform active:scale-95"
              style={{ background: '#0D2B14', color: '#4ADE80', border: '1px solid #14401E' }}
            >
              IR PARA O LOGIN
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-semibold mb-1" style={{ color: '#AAA' }}>Nova Senha</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" style={{ color: '#666' }}>
                  <Lock size={16} />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 rounded-lg text-sm outline-none transition-all"
                  style={{ background: '#0D0D18', border: '1px solid #1E1E2E', color: '#E8E8E8' }}
                  placeholder="Mínimo 6 caracteres"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1" style={{ color: '#AAA' }}>Confirmar Senha</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" style={{ color: '#666' }}>
                  <Lock size={16} />
                </div>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 rounded-lg text-sm outline-none transition-all"
                  style={{ background: '#0D0D18', border: '1px solid #1E1E2E', color: '#E8E8E8' }}
                  placeholder="Digite a senha novamente"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || !!error?.includes('Sessão')}
              className="w-full py-2.5 rounded-lg text-sm font-bold tracking-wide mt-4 transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#C9A84C] active:scale-95 disabled:opacity-50"
              style={{ background: '#C9A84C', color: '#0A0A0F', boxShadow: '0 4px 14px 0 rgba(201,168,76,0.39)' }}
            >
              {loading ? 'SALVANDO...' : 'SALVAR NOVA SENHA'}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
