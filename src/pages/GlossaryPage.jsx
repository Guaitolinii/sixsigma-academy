import { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';
import { Search, Star, StarOff } from 'lucide-react';

const GLOSSARY = [
  { term: "DMAIC", definition: "Define, Measure, Analyze, Improve, Control — metodologia central do Six Sigma para melhoria de processos existentes.", category: "Metodologia" },
  { term: "DPMO", definition: "Defeitos Por Milhão de Oportunidades — métrica universal de qualidade que padroniza a comparação entre processos diferentes.", category: "Métrica" },
  { term: "CTQ", definition: "Critical to Quality — características mensuráveis de um produto ou processo que impactam diretamente a satisfação do cliente.", category: "Define" },
  { term: "VOC", definition: "Voice of Customer — dados qualitativos e quantitativos captados do cliente para identificar suas necessidades e expectativas.", category: "Define" },
  { term: "Project Charter", definition: "Documento que formaliza o início de um projeto Six Sigma, incluindo: problema, objetivo (SMART), escopo, equipe, timeline e estimativa de saving.", category: "Define" },
  { term: "Gage R&R", definition: "Repeatability & Reproducibility — estudo que quantifica a variação introduzida pelo sistema de medição em relação à variação total. MSA ideal: < 10% da variação total.", category: "Measure" },
  { term: "Cp / Cpk", definition: "Índices de capacidade do processo. Cp mede o potencial (sem considerar centralização), Cpk mede a real (com centralização). World-class: ≥ 1.33.", category: "Measure" },
  { term: "MSA", definition: "Measurement System Analysis — análise do sistema de medição para garantir que os dados coletados são confiáveis antes de analisar o processo.", category: "Measure" },
  { term: "RPN", definition: "Risk Priority Number — S × O × D (Severidade × Ocorrência × Detecção). Usado no FMEA para priorizar modos de falha.", category: "Analyze" },
  { term: "FMEA", definition: "Failure Mode and Effects Analysis — ferramenta proativa para identificar modos de falha potenciais, seus efeitos e priorizá-los.", category: "Analyze" },
  { term: "DOE", definition: "Design of Experiments — método estatístico para testar múltiplos fatores simultaneamente e descobrir interações não evidentes.", category: "Improve" },
  { term: "SPC", definition: "Statistical Process Control — uso de cartas de controle para monitorar a estabilidade de um processo ao longo do tempo.", category: "Control" },
  { term: "Nível Sigma", definition: "Métrica que expressa a capacidade de um processo: 1σ ≈ 691.000 DPMO, 3σ ≈ 66.807 DPMO, 6σ ≈ 3.4 DPMO.", category: "Métrica" },
  { term: "VSM", definition: "Value Stream Map — mapa completo do fluxo de valor mostrando tempo de processamento, esperas, estoques e eficiência do ciclo.", category: "Lean" },
  { term: "TIMWOODS", definition: "Os 8 desperdícios Lean: Transport, Inventory, Motion, Waiting, Overproduction, Overprocessing, Defects, Skills (unused).", category: "Lean" },
  { term: "Kaizen", definition: "Melhoria contínua incremental. Kaizen Events são sessões intensivas (3-5 dias) para implementar melhorias rápidas.", category: "Lean" },
  { term: "5S", definition: "Seiri, Seiton, Seiso, Seiketsu, Shitsuke — metodologia de organização do ambiente de trabalho.", category: "Lean" },
  { term: "Poka-Yoke", definition: "Mecanismo à prova de erros que impede que um defeito seja produzido ou detecta imediatamente quando ocorre.", category: "Control" },
  { term: "DMADV", definition: "Define, Measure, Analyze, Design, Verify — metodologia DFSS para criação de novos processos/produtos.", category: "DFSS" },
  { term: "QFD", definition: "Quality Function Deployment (Casa da Qualidade) — matriz que traduz necessidades do cliente (WHATs) em requisitos técnicos (HOWs).", category: "DFSS" },
  { term: "Hoshin Kanri", definition: "Método de planejamento estratégico que alinha objetivos de longo prazo com ações concretas em todos os níveis.", category: "MBB" },
  { term: "SIPOC", definition: "Suppliers, Inputs, Process, Outputs, Customers — diagrama de alto nível usado na fase Define para delimitar o processo.", category: "Define" },
  { term: "Teste de Hipóteses", definition: "Procedimento estatístico para tomar decisões baseadas em dados. Usa H₀ (nula) e H₁ (alternativa), com risco α (geralmente 5%).", category: "Estatística" },
  { term: "ANOVA", definition: "Analysis of Variance — teste estatístico para comparar médias de 3+ grupos e verificar se pelo menos um difere significativamente.", category: "Estatística" },
  { term: "Regressão", definition: "Técnica estatística para modelar a relação entre Y (saída) e X(s) (entradas). R² indica % da variação explicada.", category: "Estatística" },
];

const CATEGORIES = ["Todas", ...new Set(GLOSSARY.map(g => g.category))];

export default function GlossaryPage() {
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('Todas');
  const { favoriteTerms, toggleFavoriteTerm } = useApp();

  const filtered = useMemo(() => {
    return GLOSSARY.filter(g => {
      const matchSearch = !search ||
        g.term.toLowerCase().includes(search.toLowerCase()) ||
        g.definition.toLowerCase().includes(search.toLowerCase());
      const matchCat = selectedCat === 'Todas' || g.category === selectedCat;
      return matchSearch && matchCat;
    });
  }, [search, selectedCat]);

  return (
    <div>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-extrabold mb-2" style={{ color: '#C9A84C' }}>
        📖 Glossário Six Sigma
      </motion.h1>
      <p className="mb-6" style={{ color: '#666' }}>{GLOSSARY.length} termos essenciais para Black Belt e Master Black Belt.</p>

      {/* Search */}
      <div className="relative mb-5">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#666' }} />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar termos..."
          className="w-full py-3 pl-12 pr-4 rounded-lg text-sm outline-none"
          style={{ background: '#12121A', border: '1px solid #1E1E2E', color: '#E8E8E8' }}
        />
      </div>

      {/* Categories */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCat(cat)}
            className="px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap cursor-pointer transition-all"
            style={{
              background: selectedCat === cat ? '#C9A84C22' : '#0D0D18',
              color: selectedCat === cat ? '#C9A84C' : '#666',
              border: `1px solid ${selectedCat === cat ? '#C9A84C' : '#1E1E2E'}`,
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Terms */}
      <div className="space-y-3">
        {filtered.map((g, i) => (
          <motion.div
            key={g.term}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}
            className="card-glow rounded-xl p-5"
            style={{ background: '#12121A', border: '1px solid #1E1E2E' }}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-base font-bold" style={{ color: '#E8E8E8' }}>{g.term}</h3>
                  <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: '#C9A84C22', color: '#C9A84C' }}>
                    {g.category}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#888' }}>{g.definition}</p>
              </div>
              <button
                onClick={() => toggleFavoriteTerm(g.term)}
                className="shrink-0 ml-3 cursor-pointer"
                style={{ background: 'none', border: 'none' }}
              >
                {favoriteTerms.includes(g.term)
                  ? <Star size={18} fill="#C9A84C" color="#C9A84C" />
                  : <StarOff size={18} color="#444" />
                }
              </button>
            </div>
          </motion.div>
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-10" style={{ color: '#666' }}>
            Nenhum termo encontrado para "{search}".
          </div>
        )}
      </div>
    </div>
  );
}
