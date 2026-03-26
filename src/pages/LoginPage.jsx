import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Lock, Mail, User, AlertCircle } from 'lucide-react';

export default function LoginPage() {
  const { login, register, resetPassword } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);
    setLoading(true);

    try {
      if (isForgotPassword) {
        await resetPassword(email);
        setSuccessMessage("E-mail de recuperação enviado! Verifique sua caixa de entrada.");
      } else if (isLogin) {
        await login(email, password);
      } else {
        if (!name.trim()) throw new Error("O nome é obrigatório para cadastro.");
        const data = await register(email, password, name);
        
        if (data?.user && !data?.session) {
          setSuccessMessage("Conta criada com sucesso! Enviamos um e-mail de confirmação. Por favor, verifique sua caixa de entrada (e pasta de spam) para ativar sua conta.");
          setEmail('');
          setPassword('');
          setName('');
        }
      }
    } catch (err) {
      setError(err.message || 'Ocorreu um erro na requisição.');
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
            {isForgotPassword 
              ? 'Digite seu e-mail para receber um link de redefinição.' 
              : isLogin 
                ? 'Faça login para continuar seu progresso.' 
                : 'Crie sua conta para começar a treinar.'}
          </p>
        </div>

        {error && (
          <div className="flex items-center gap-2 p-3 mb-4 rounded-lg text-sm" style={{ background: '#3A1010', color: '#FF6B6B', border: '1px solid #5A1A1A' }}>
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        {successMessage && (
          <div className="flex items-center gap-2 p-3 mb-4 rounded-lg text-sm" style={{ background: '#0D2B14', color: '#4ADE80', border: '1px solid #14401E' }}>
            <Mail size={16} className="shrink-0" />
            <span>{successMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {!isLogin && !isForgotPassword && (
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

          {!isForgotPassword && (
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-xs font-semibold" style={{ color: '#AAA' }}>Senha</label>
                {isLogin && (
                  <button
                    type="button"
                    onClick={() => {
                      setIsForgotPassword(true);
                      setError(null);
                      setSuccessMessage(null);
                    }}
                    className="text-xs hover:underline cursor-pointer transition-colors"
                    style={{ color: '#C9A84C' }}
                  >
                    Esqueceu a senha?
                  </button>
                )}
              </div>
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
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-lg text-sm font-bold tracking-wide mt-2 transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#C9A84C] active:scale-95 disabled:opacity-50"
            style={{ background: '#C9A84C', color: '#0A0A0F', boxShadow: '0 4px 14px 0 rgba(201,168,76,0.39)' }}
          >
            {loading ? 'Aguarde...' : isForgotPassword ? 'RECUPERAR SENHA' : isLogin ? 'ENTRAR' : 'CRIAR CONTA'}
          </button>
        </form>

        <div className="mt-6 flex flex-col gap-2 text-center">
          {isForgotPassword ? (
            <button
              type="button"
              onClick={() => {
                setIsForgotPassword(false);
                setError(null);
                setSuccessMessage(null);
              }}
              className="text-xs hover:underline cursor-pointer"
              style={{ color: '#888' }}
            >
              Voltar para o Login
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setError(null);
                setSuccessMessage(null);
              }}
              className="text-xs hover:underline cursor-pointer"
              style={{ color: '#888' }}
            >
              {isLogin ? 'Não tem uma conta? Cadastre-se' : 'Já tem uma conta? Faça login'}
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
