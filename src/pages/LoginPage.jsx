import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Lock, Mail, User, AlertCircle } from 'lucide-react';

export default function LoginPage() {
  const { login, register } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (isLogin) {
        await login(email, password);
      } else {
        if (!name.trim()) throw new Error("O nome é obrigatório para cadastro.");
        await register(email, password, name);
      }
    } catch (err) {
      setError(err.message || 'Ocorreu um erro ao autenticar.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#0A0A0F]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
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
          <h1 className="text-3xl font-extrabold tracking-widest" style={{ color: '#C9A84C', fontFamily: "'Bebas Neue', sans-serif" }}>
            Σ SIX SIGMA
          </h1>
          <p className="text-sm mt-2" style={{ color: '#888' }}>
            {isLogin ? 'Faça login para continuar seu progresso.' : 'Crie sua conta para começar a treinar.'}
          </p>
        </div>

        {error && (
          <div className="flex items-center gap-2 p-3 mb-4 rounded-lg text-sm" style={{ background: '#3A1010', color: '#FF6B6B', border: '1px solid #5A1A1A' }}>
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {!isLogin && (
            <div>
              <label className="block text-xs font-semibold mb-1" style={{ color: '#AAA' }}>Nome Completo</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" style={{ color: '#666' }}>
                  <User size={16} />
                </div>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 rounded-lg text-sm outline-none transition-all"
                  style={{ background: '#0D0D18', border: '1px solid #1E1E2E', color: '#E8E8E8' }}
                  placeholder="Seu nome verdadeiro"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold mb-1" style={{ color: '#AAA' }}>E-mail</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" style={{ color: '#666' }}>
                <Mail size={16} />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3 py-2 rounded-lg text-sm outline-none transition-all"
                style={{ background: '#0D0D18', border: '1px solid #1E1E2E', color: '#E8E8E8' }}
                placeholder="seu.email@empresa.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1" style={{ color: '#AAA' }}>Senha</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" style={{ color: '#666' }}>
                <Lock size={16} />
              </div>
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-3 py-2 rounded-lg text-sm outline-none transition-all"
                style={{ background: '#0D0D18', border: '1px solid #1E1E2E', color: '#E8E8E8' }}
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-lg text-sm font-bold tracking-wide mt-2 transition-transform active:scale-95 disabled:opacity-50"
            style={{ background: '#C9A84C', color: '#0A0A0F' }}
          >
            {loading ? 'Aguarde...' : isLogin ? 'ENTRAR' : 'CRIAR CONTA'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => {
              setIsLogin(!isLogin);
              setError(null);
            }}
            className="text-xs hover:underline cursor-pointer"
            style={{ color: '#888' }}
          >
            {isLogin ? 'Não tem uma conta? Cadastre-se' : 'Já tem uma conta? Faça login'}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
