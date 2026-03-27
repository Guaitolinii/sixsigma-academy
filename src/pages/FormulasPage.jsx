import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Table2, GitBranch, ChevronDown, ChevronRight, Search, Info } from 'lucide-react';

// ─── FÓRMULAS ESSENCIAIS ───
const FORMULAS = [
  { cat: "Estatística Avançada (MBB)", items: [
    { name: "Função Perda de Taguchi", formula: "L(y) = k(y − T)²", note: "Qualidade é atingir o alvo (T), não apenas estar dentro da especificação.", example: "Mesmo dentro da tolerância, se o motor vibra 1mm fora do centro, o custo de garantia sobe exponencialmente. k=coef. de custo, T=Alvo." },
    { name: "S/N Ratio (Taguchi)", formula: "S/N = −10 log(MSD)", note: "Sinal/Ruído. Maximizar para robustez contra fatores incontroláveis.", example: "Em um processo de pintura, queremos que a cor seja estável mesmo que a umidade do ar mude (ruído). S/N alto = processo robusto." },
    { name: "Modelo RSM (2ª Ordem)", formula: "y = β₀ + Σβᵢxᵢ + Σβᵢᵢxᵢ² + Σβᵢⱼxᵢxⱼ", note: "Surface Response — encontra o 'pico da montanha' da otimização.", example: "A temperatura afeta a resistência, mas o efeito é curvo (quadrático). O modelo RSM mapeia essa curvatura para achar o ponto exato de máxima força." },
    { name: "Regressão Logística", formula: "Logit(P) = ln(P / (1−P)) = β₀ + β₁x", note: "Preveja a probabilidade de um evento binário (Passa/Falha).", example: "Qual a probabilidade de um cliente cancelar o contrato (Y=1) baseado no número de reclamações (X)? O Logit transforma a curva em S em uma reta." },
    { name: "D-Optimality", formula: "det(X'X)", note: "Critério para escolher os melhores pontos em um experimento complexo.", example: "Quando você tem pouco orçamento, o critério D escolhe os 8 testes que dão o máximo de informação estatística possível." },
  ]},
  { cat: "Capacidade", items: [
    { name: "Cp", formula: "Cp = (USL − LSL) / 6σ", note: "Potencial máximo (ignora centralização). Goal ≥ 1,33.", example: "Imagine um carro e uma garagem: o Cp diz se o carro (processo) CABE na garagem (especificação), ignorando se você está estacionando no meio ou batendo na pilastra." },
    { name: "Cpk", formula: "Cpk = min[(USL−μ)/(3σ), (μ−LSL)/(3σ)]", note: "Capacidade real centrada. Cpk < 1,0 = incapaz.", example: "É o Cp 'pé no chão'. Se você tem um carro pequeno (baixo sigma) mas estaciona colado na parede, seu Cpk será baixo. Ele pune o descentramento." },
    { name: "Pp / Ppk", formula: "Pp = (USL−LSL)/(6s_total) | Ppk = min[...]/(3s_total)", note: "Longo prazo (σ total). Considera 'o mundo real' e variações entre lotes.", example: "O Cpk é a foto de um dia bom; o Ppk é o filme do ano inteiro, incluindo segundas-feiras e trocas de turno." },
    { name: "Yield (Throughput)", formula: "Y = e^(−DPU)", note: "Rendimento de 1ª passagem. DPU=0,35 → Y=70,5%.", example: "Se você tem 0,1 defeito por peça em média, 90,4% das suas peças passarão 'de primeira' sem retoque." },
  ]},
  { cat: "Métricas Sigma", items: [
    { name: "DPMO", formula: "DPMO = (Defeitos / (Unidades × Oportunidades)) × 10⁶", note: "3,4 DPMO = 6σ | 233 = 5σ | 6.210 = 4σ | 66.807 = 3σ", example: "Em 1.000 peças, cada uma com 5 oportunidades, houve 12 defeitos. DPMO = [12 / (1.000 × 5)] × 1.000.000 = 2.400." },
    { name: "DPU", formula: "DPU = Total Defeitos / Total Unidades", note: "Defeitos por unidade (pode ser > 1).", example: "15 defeitos encontrados em 50 carros revistos. DPU = 15 / 50 = 0,3 defeitos por carro." },
    { name: "DPO", formula: "DPO = Defeitos / (Unidades × Oportunidades)", note: "Base para conversão em sigma.", example: "12 defeitos em (1.000 unidades × 5 oports). DPO = 12 / 5.000 = 0,0024 prob. de falha por oport." },
  ]},
  { cat: "Amostragem", items: [
    { name: "n (para média)", formula: "n = (Z · σ / E)²", note: "Z=1,96 (95%), σ=desvio, E=margem de erro.", example: "Queremos estimar tempo médio. E=2 min, σ=10 min, Z=1,96 (95%). n = (1,96 × 10 / 2)² = (9,8)² = 96,04 (Arredonda para 97 amostras)." },
    { name: "n (para proporção)", formula: "n = (Z² · p · (1−p)) / E²", note: "p=proporção estimada. Máximo n quando p=0,5.", example: "Não sabemos a % de falha, assumimos p=0,5. E=0,05 (5%), Z=1,96. n = (1,96² × 0,5 × 0,5) / 0,05² = 384,16 (Arredonda para 385)." },
    { name: "Erro Padrão", formula: "SE = σ / √n", note: "Diminui com √n — para cortar SE pela metade, quadruplique n.", example: "População σ=20. Se amostra n=25, SE = 20 / √25 = 20 / 5 = 4. Se n=100, SE = 20 / 10 = 2." },
  ]},
  { cat: "Testes de Hipótese", items: [
    { name: "Z-test (1 amostra)", formula: "Z = (X̄ − μ₀) / (σ/√n)", note: "Quando σ é conhecido e n ≥ 30.", example: "Média amostral X̄ = 52. Alvo μ₀ = 50. σ=4, n=64. Z = (52 - 50) / (4/√64) = 2 / 0,5 = 4.0. P-Value baixo, rejeita H₀." },
    { name: "T-test (1 amostra)", formula: "t = (X̄ − μ₀) / (s/√n)", note: "Quando σ desconhecido. gl = n−1.", example: "X̄ = 12,5. Alvo μ₀ = 12,0. s=1, n=16. t = (12,5 - 12,0) / (1/4) = 0,5 / 0,25 = 2.0." },
    { name: "T-test (2 amostras)", formula: "t = (X̄₁ − X̄₂) / √(s₁²/n₁ + s₂²/n₂)", note: "Welch's t-test (variâncias desiguais).", example: "Média A=15 (s=2, n=30), Média B=18 (s=3, n=40). O cálculo de t definirá se a diferença (-3) é significativa." },
    { name: "Power", formula: "Power = 1 − β = P(rejeitar H₀ | H₀ falsa)", note: "Meta ≥ 0,80. Aumentar n, α ou Δ → mais Power.", example: "Se o Power é 0,85, temos 85% de chance de detectar um shift real no processo." },
  ]},
  { cat: "ANOVA & Regressão", items: [
    { name: "F-test (ANOVA)", formula: "F = MS_Between / MS_Within", note: "F > F_crítico → rejeita H₀ (≥1 média difere).", example: "Variação entre turnos (Between)=40 e dentro dos turnos (Within)=10. F = 40/10 = 4. Alto F indica que o turno afeta." },
    { name: "R² (Coef. Determinação)", formula: "R² = 1 − (SS_Residual / SS_Total)", note: "% da variação explicada pelo modelo.", example: "Se R² = 0,82, isso significa que 82% da variação na Força da Peça é explicada pela Temperatura no modelo." },
    { name: "R²(adj)", formula: "R²(adj) = 1 − [(1−R²)(n−1)/(n−k−1)]", note: "Penaliza # de preditores. Usar para comparar modelos.", example: "Adicionar Fornecedor subiu R² de 82% para 83%, mas R²(adj) caiu de 81% para 80%, logo o preditor é irrelevante." },
    { name: "VIF", formula: "VIF = 1 / (1 − R²ᵢ)", note: "VIF > 10 = multicolinearidade severa.", example: "Modelo com preditores muito parecidos. VIF > 10 inflaciona a variância, indicando redundância matemática." },
  ]},
  { cat: "Cartas de Controle", items: [
    { name: "UCL/LCL (X̄-R)", formula: "UCL = X̄̄ + A₂R̄ | LCL = X̄̄ − A₂R̄", note: "A₂ depende de n (ver tabela de fatores).", example: "Com subgrupo n=5 (A₂=0,577), X̄̄=100 e R̄=3. UCL = 100 + (0,577 × 3) = 101,73." },
    { name: "UCL/LCL (I-MR)", formula: "UCL = X̄ + 2,66·MR̄ | LCL = X̄ − 2,66·MR̄", note: "2,66 = 3/d₂ com d₂=1,128 para n=2.", example: "Média individual=50, Amplitude móvel (MR̄)=2. UCL = 50 + 2,66 × 2 = 55,32." },
    { name: "Carta p", formula: "UCL/LCL = p̄ ± 3√(p̄(1−p̄)/n)", note: "Proporção defeituosa. n variável → limites variáveis.", example: "Média histórica p̄=0,05. Amostra n=200. UCL = 0,05 + 3√(0,05×0,95 / 200) = 0,05 + 0,046 = 0,096." },
  ]},
  { cat: "Lean & OEE", items: [
    { name: "OEE", formula: "OEE = Disponibilidade × Performance × Qualidade", note: "World Class ≥ 85%. Base do TPM.", example: "Disponib.=90%, Perform.=80%, Qualidade=95%. OEE = 0,90 × 0,80 × 0,95 = 0,684 (68,4%)." },
    { name: "Takt Time", formula: "Takt = Tempo Disponível / Demanda do Cliente", note: "Ritmo de produção sincronizado ao mercado.", example: "Disponível 450 min (27.000s). Demanda 900 peças. Takt = 27.000 / 900 = 30 seg por peça." },
    { name: "PCE", formula: "PCE = (Tempo VA / Lead Time Total) × 100%", note: "World Class > 25%. Serviços típico: 1-5%.", example: "Lead Time = 240 horas. Tempo Agregando Valor = 4 horas. PCE = 4 / 240 = 1,6%." },
    { name: "Little's Law", formula: "WIP = Throughput × Lead Time", note: "Reduzir WIP → Reduzir Lead Time.", example: "Fila de 20 pessoas (WIP). Atende 2 pessoas/min (Throughput). 20 = 2 × Lead Time -> L.T. = 10 minutos de espera." },
  ]},
  { cat: "Finanças", items: [
    { name: "VPL", formula: "VPL = −I₀ + Σ[CFₜ / (1+r)ᵗ]", note: "VPL > 0 → projeto viável. r = WACC.", example: "Investimento=$10.000. Economia Anual=$6.000 por 2 anos. Juros(r)=10%. VPL = -10k + (6k/1,1) + (6k/1,21) = +$412." },
    { name: "ROI", formula: "ROI = (Ganho − Custo) / Custo × 100%", note: "Simples mas não considera valor do dinheiro no tempo.", example: "Projeto custou 20k, trouxe 50k. ROI = (50 - 20) / 20 = 1,5 = 150%." },
    { name: "Payback", formula: "Payback = Investimento / Economia Anual", note: "Tempo para recuperar o investimento.", example: "Robô de R$ 240.000, corta desperdício de R$ 60.000/ano. Payback = 240 / 60 = 4 anos." },
  ]},
];

// ─── TABELA SIGMA ───
const SIGMA_TABLE = [
  { sigma: "1,0", dpmo: "691.462", yield: "30,85%" },
  { sigma: "1,5", dpmo: "500.000", yield: "50,00%" },
  { sigma: "2,0", dpmo: "308.538", yield: "69,15%" },
  { sigma: "2,5", dpmo: "158.655", yield: "84,13%" },
  { sigma: "3,0", dpmo: "66.807", yield: "93,32%" },
  { sigma: "3,5", dpmo: "22.750", yield: "97,73%" },
  { sigma: "4,0", dpmo: "6.210", yield: "99,38%" },
  { sigma: "4,5", dpmo: "1.350", yield: "99,87%" },
  { sigma: "5,0", dpmo: "233", yield: "99,977%" },
  { sigma: "5,5", dpmo: "32", yield: "99,9968%" },
  { sigma: "6,0", dpmo: "3,4", yield: "99,99966%" },
];

// ─── FATORES PARA CARTAS X̄-R ───
const CONTROL_FACTORS = [
  { n: 2, A2: "1,880", d2: "1,128", D3: "—", D4: "3,267" },
  { n: 3, A2: "1,023", d2: "1,693", D3: "—", D4: "2,575" },
  { n: 4, A2: "0,729", d2: "2,059", D3: "—", D4: "2,282" },
  { n: 5, A2: "0,577", d2: "2,326", D3: "—", D4: "2,115" },
  { n: 6, A2: "0,483", d2: "2,534", D3: "—", D4: "2,004" },
  { n: 7, A2: "0,419", d2: "2,704", D3: "0,076", D4: "1,924" },
  { n: 8, A2: "0,373", d2: "2,847", D3: "0,136", D4: "1,864" },
  { n: 9, A2: "0,337", d2: "2,970", D3: "0,184", D4: "1,816" },
  { n: 10, A2: "0,308", d2: "3,078", D3: "0,223", D4: "1,777" },
];

// ─── FLUXOGRAMA DE DECISÃO ───
const DECISION_TREE = [
  { question: "Qual é o tipo do seu Y (variável resposta)?", options: [
    { label: "Contínuo (peso, temperatura, tempo...)", next: 1 },
    { label: "Discreto/Atributo (passa/falha, contagem...)", next: 6 },
  ]},
  { question: "Quantos grupos/populações você está comparando?", options: [
    { label: "1 grupo vs valor alvo", next: 2 },
    { label: "2 grupos independentes", next: 3 },
    { label: "2 grupos pareados (antes/depois)", result: "Paired T-Test (normal) ou Wilcoxon Signed-Rank (não-normal)" },
    { label: "3+ grupos", next: 4 },
    { label: "Relação entre variáveis (previsão)", next: 5 },
  ]},
  { question: "Os dados são normais? (teste Anderson-Darling)", options: [
    { label: "Sim → Normal", result: "1-Sample T-Test" },
    { label: "Não → Não-normal", result: "1-Sample Wilcoxon ou 1-Sample Sign Test" },
  ]},
  { question: "Os dados são normais?", options: [
    { label: "Sim → Normal", result: "2-Sample T-Test" },
    { label: "Não → Não-normal", result: "Mann-Whitney U Test" },
  ]},
  { question: "Os dados são normais?", options: [
    { label: "Sim → Normal", result: "One-Way ANOVA → Tukey HSD post-hoc" },
    { label: "Não → Não-normal", result: "Kruskal-Wallis Test → Mood's Median" },
  ]},
  { question: "Tipo de relação?", options: [
    { label: "Y contínuo, X contínuo", result: "Regressão Linear Simples/Múltipla" },
    { label: "Y binário (sim/não)", result: "Regressão Logística" },
    { label: "Múltiplos X controlados", result: "DOE Fatorial (2ᵏ)" },
  ]},
  { question: "Tipo de dado discreto?", options: [
    { label: "Proporção (% defeituoso)", result: "Teste de Proporção (1 ou 2 amostras) ou Chi-Quadrado" },
    { label: "Contagem (# defeitos)", result: "Poisson Rate Test" },
    { label: "Associação entre categorias", result: "Chi-Quadrado (tabela de contingência)" },
  ]},
];

function FormulaSection({ cat, items, searchTerm }) {
  const [open, setOpen] = useState(true);
  const [showExamples, setShowExamples] = useState({});

  const toggleExample = (name) => {
    setShowExamples(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const filtered = items.filter(i =>
    !searchTerm ||
    i.name.toLowerCase().includes(searchTerm) ||
    i.formula.toLowerCase().includes(searchTerm) ||
    i.note.toLowerCase().includes(searchTerm)
  );
  if (filtered.length === 0) return null;
  return (
    <div className="mb-4">
      <button onClick={() => setOpen(!open)}
        className="flex items-center gap-2 w-full text-left py-2 px-1 cursor-pointer"
        style={{ background: 'none', border: 'none', color: '#C9A84C' }}>
        {open ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
        <span className="font-bold text-sm uppercase tracking-wider">{cat}</span>
        <span className="text-[11px] ml-1" style={{color:'#666'}}>({filtered.length})</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} exit={{opacity:0,height:0}}
            className="overflow-hidden">
            <div className="grid gap-2 mt-1">
              {filtered.map(f => (
                <div key={f.name} className="rounded-lg p-3 sm:p-4" style={{background:'#12121A', border:'1px solid #1E1E2E'}}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <span className="font-bold text-sm" style={{color:'#E8E8E8'}}>{f.name}</span>
                      <code className="text-xs sm:text-sm px-2 py-0.5 rounded break-all" style={{background:'#0D0D18',color:'#F0C96A', border:'1px solid #1E1E2E'}}>{f.formula}</code>
                    </div>
                    {f.example && (
                      <button onClick={() => toggleExample(f.name)}
                        className="flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold cursor-pointer transition-colors"
                        style={{background: showExamples[f.name] ? '#C9A84C22' : '#1E1E2E', border:'none', color: showExamples[f.name] ? '#C9A84C' : '#888'}}>
                        <Info size={14}/> {showExamples[f.name] ? 'Ocultar Exemplo' : 'Ver Exemplo'}
                      </button>
                    )}
                  </div>
                  <p className="text-xs mt-1 border-b pb-2 mb-2" style={{color:'#888', borderColor: '#1E1E2E'}}>{f.note}</p>
                  
                  <AnimatePresence>
                    {showExamples[f.name] && (
                      <motion.div initial={{opacity:0, height:0}} animate={{opacity:1, height:'auto'}} exit={{opacity:0, height:0}} className="overflow-hidden">
                        <div className="mt-2 text-xs p-3 rounded-lg" style={{background: '#0D0D18', color: '#CCC', border: '1px solid #C9A84C33', borderLeft: '3px solid #C9A84C'}}>
                          <span className="font-bold" style={{color: '#C9A84C'}}>Exemplo Prático: </span> {f.example}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DecisionFlowchart() {
  const [path, setPath] = useState([0]);
  const [results, setResults] = useState([]);
  const current = DECISION_TREE[path[path.length-1]];

  function choose(opt) {
    if (opt.result) {
      setResults(prev => [...prev, {question: current.question, choice: opt.label, result: opt.result}]);
    } else if (opt.next !== undefined) {
      setPath(prev => [...prev, opt.next]);
    }
  }
  function reset() { setPath([0]); setResults([]); }

  if (results.length > 0) {
    const last = results[results.length-1];
    return (
      <motion.div initial={{opacity:0}} animate={{opacity:1}} className="rounded-xl p-5 sm:p-6" style={{background:'#12121A',border:'1px solid #1E1E2E'}}>
        <div className="text-center">
          <div className="text-4xl mb-3">🎯</div>
          <h3 className="text-lg font-bold mb-2" style={{color:'#22C55E'}}>Teste Recomendado</h3>
          <div className="text-base font-semibold mb-4 px-4 py-3 rounded-lg" style={{background:'#22C55E11',border:'1px solid #22C55E44',color:'#E8E8E8'}}>{last.result}</div>
          <div className="text-xs mb-4 space-y-1" style={{color:'#888'}}>
            {results.map((r,i) => (
              <div key={i}>→ {r.choice}</div>
            ))}
          </div>
          <button onClick={reset}
            className="px-6 py-2 rounded-lg text-sm font-bold cursor-pointer"
            style={{background:'linear-gradient(135deg,#C9A84C,#F0C96A)',color:'#000',border:'none'}}>
            🔄 Recomeçar
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="rounded-xl p-5 sm:p-6" style={{background:'#12121A',border:'1px solid #1E1E2E'}}>
      <div className="flex items-center gap-2 mb-1 text-xs" style={{color:'#666'}}>
        Passo {path.length} de ~3
      </div>
      <h3 className="text-base font-bold mb-4" style={{color:'#E8E8E8'}}>{current.question}</h3>
      <div className="flex flex-col gap-2">
        {current.options.map((opt,i) => (
          <button key={i} onClick={() => choose(opt)}
            className="text-left px-4 py-3 rounded-lg text-sm cursor-pointer transition-all"
            style={{background:'#0D0D18',border:'1px solid #1E1E2E',color:'#E8E8E8'}}
            onMouseEnter={e => {e.currentTarget.style.borderColor='#C9A84C';e.currentTarget.style.color='#C9A84C';}}
            onMouseLeave={e => {e.currentTarget.style.borderColor='#1E1E2E';e.currentTarget.style.color='#E8E8E8';}}>
            {opt.label}
          </button>
        ))}
      </div>
      {path.length > 1 && (
        <button onClick={() => {setPath(p=>p.slice(0,-1)); setResults([]);}}
          className="mt-3 text-xs cursor-pointer" style={{background:'none',border:'none',color:'#666'}}>
          ← Voltar
        </button>
      )}
    </motion.div>
  );
}

const TABS = [
  { id: "formulas", icon: Calculator, label: "Fórmulas" },
  { id: "tabelas", icon: Table2, label: "Tabelas" },
  { id: "fluxograma", icon: GitBranch, label: "Qual Teste Usar?" },
];

export default function FormulasPage() {
  const [tab, setTab] = useState("formulas");
  const [search, setSearch] = useState("");
  const searchLower = search.toLowerCase();

  return (
    <div>
      <motion.h1 initial={{opacity:0}} animate={{opacity:1}} className="text-2xl font-extrabold mb-2" style={{color:'#C9A84C'}}>
        📐 Fórmulas & Referência Rápida
      </motion.h1>
      <p className="mb-6" style={{color:'#666'}}>Material de consulta para exame — fórmulas, tabelas e guia de decisão estatística.</p>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
        {TABS.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap cursor-pointer transition-all"
            style={{
              background: tab===t.id ? '#C9A84C22' : '#0D0D18',
              color: tab===t.id ? '#C9A84C' : '#888',
              border: `1px solid ${tab===t.id ? '#C9A84C' : '#1E1E2E'}`,
            }}>
            <t.icon size={16}/>
            {t.label}
          </button>
        ))}
      </div>

      {/* FÓRMULAS */}
      {tab === "formulas" && (
        <div>
          <div className="relative mb-5">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2" style={{color:'#666'}}/>
            <input type="text" value={search} onChange={e=>setSearch(e.target.value)}
              placeholder="Buscar fórmula..."
              className="w-full py-3 pl-12 pr-4 rounded-lg text-sm outline-none"
              style={{background:'#12121A',border:'1px solid #1E1E2E',color:'#E8E8E8'}}/>
          </div>
          {FORMULAS.map(g => (
            <FormulaSection key={g.cat} cat={g.cat} items={g.items} searchTerm={searchLower}/>
          ))}
        </div>
      )}

      {/* TABELAS */}
      {tab === "tabelas" && (
        <div className="space-y-6">
          {/* Sigma Table */}
          <div className="rounded-xl p-4 sm:p-5" style={{background:'#12121A',border:'1px solid #1E1E2E'}}>
            <h3 className="font-bold text-sm mb-3" style={{color:'#C9A84C'}}>📊 Tabela Sigma (com shift 1,5σ)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{borderBottom:'1px solid #1E1E2E'}}>
                    <th className="text-left py-2 px-3 font-semibold" style={{color:'#E8E8E8'}}>Nível σ</th>
                    <th className="text-right py-2 px-3 font-semibold" style={{color:'#E8E8E8'}}>DPMO</th>
                    <th className="text-right py-2 px-3 font-semibold" style={{color:'#E8E8E8'}}>Yield</th>
                  </tr>
                </thead>
                <tbody>
                  {SIGMA_TABLE.map(r => (
                    <tr key={r.sigma} style={{borderBottom:'1px solid #1E1E2E22'}}>
                      <td className="py-2 px-3 font-bold" style={{color: r.sigma==='6,0'?'#22C55E':'#F0C96A'}}>{r.sigma}σ</td>
                      <td className="py-2 px-3 text-right" style={{color:'#E8E8E8'}}>{r.dpmo}</td>
                      <td className="py-2 px-3 text-right" style={{color:'#888'}}>{r.yield}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Control Chart Factors */}
          <div className="rounded-xl p-4 sm:p-5" style={{background:'#12121A',border:'1px solid #1E1E2E'}}>
            <h3 className="font-bold text-sm mb-3" style={{color:'#C9A84C'}}>📏 Fatores para Cartas X̄-R</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{borderBottom:'1px solid #1E1E2E'}}>
                    <th className="text-left py-2 px-2 font-semibold" style={{color:'#E8E8E8'}}>n</th>
                    <th className="text-right py-2 px-2 font-semibold" style={{color:'#E8E8E8'}}>A₂</th>
                    <th className="text-right py-2 px-2 font-semibold" style={{color:'#E8E8E8'}}>d₂</th>
                    <th className="text-right py-2 px-2 font-semibold" style={{color:'#E8E8E8'}}>D₃</th>
                    <th className="text-right py-2 px-2 font-semibold" style={{color:'#E8E8E8'}}>D₄</th>
                  </tr>
                </thead>
                <tbody>
                  {CONTROL_FACTORS.map(r => (
                    <tr key={r.n} style={{borderBottom:'1px solid #1E1E2E22'}}>
                      <td className="py-2 px-2 font-bold" style={{color:'#F0C96A'}}>{r.n}</td>
                      <td className="py-2 px-2 text-right" style={{color:'#E8E8E8'}}>{r.A2}</td>
                      <td className="py-2 px-2 text-right" style={{color:'#E8E8E8'}}>{r.d2}</td>
                      <td className="py-2 px-2 text-right" style={{color:'#888'}}>{r.D3}</td>
                      <td className="py-2 px-2 text-right" style={{color:'#888'}}>{r.D4}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] mt-3" style={{color:'#666'}}>UCL(X̄) = X̿ + A₂·R̄ | LCL(X̄) = X̿ − A₂·R̄ | UCL(R) = D₄·R̄ | LCL(R) = D₃·R̄</p>
          </div>
        </div>
      )}

      {/* FLUXOGRAMA */}
      {tab === "fluxograma" && (
        <div>
          <p className="text-sm mb-4" style={{color:'#888'}}>Responda as perguntas abaixo para descobrir qual teste estatístico usar no seu projeto.</p>
          <DecisionFlowchart/>
        </div>
      )}
    </div>
  );
}
