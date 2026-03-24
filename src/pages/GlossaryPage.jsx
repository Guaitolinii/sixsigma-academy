import { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';
import { Search, Star, StarOff } from 'lucide-react';

const GLOSSARY = [
  { term: "A3 Problem Solving", definition: "Estatura estruturada em uma única folha (A3) que encapsula o ciclo PDCA. Inclui background, situação atual, análise de causa raiz, contramedidas, plano de ação e follow-up.", category: "Lean" },
  { term: "Alpha Risk (Erro Tipo I)", definition: "Risco do Produtor (\u03b1). A probabilidade de rejeitar a Hipótese Nula (H\u2080) quando ela é verdadeira. Em qualidade, é o risco de dizer que um processo mudou quando não mudou (falso positivo).", category: "Estatística" },
  { term: "Andon", definition: "Sistema de controle visual (sinalização luminosa/sonora) que alerta operadores e gerência sobre anomalias no processo, permitindo ações corretivas imediatas.", category: "Lean" },
  { term: "ANOVA (Analysis of Variance)", definition: "Análise de Variância. Teste paramétrico para avaliar se as médias de 3 ou mais populações são estatisticamente diferentes. Subdivide-se em One-Way (1 fator) e Two-Way/Multi-Way ANOVA.", category: "Estatística" },
  { term: "Axiomatic Design", definition: "Metodologia de design baseada em axiomas (Independência e Informação) para mapear sistematicamente as Necessidades do Cliente em Requisitos Funcionais e Parâmetros de Design no DFSS.", category: "DFSS" },
  { term: "Beta Risk (Erro Tipo II)", definition: "Risco do Consumidor (\u03b2). A probabilidade de aceitar a Hipótese Nula (H\u2080) quando ela é falsa. Em qualidade, não detectar uma mudança real no processo (falso negativo). O 'Poder' do teste é 1 - \u03b2.", category: "Estatística" },
  { term: "Box-Cox Transformation", definition: "Transformação de dados de potência (Y^\u03bb) usada para normalizar dados não-normais, requisito crítico para prosseguir com análises paramétricas de capacidade e controle.", category: "Estatística" },
  { term: "Carta de Controle CUSUM", definition: "Cumulative Sum Control Chart. Carta sensível projetada para detectar pequenos desvios (\u2264 1.5\u03c3) na média do processo, acumulando pequenos desvios do alvo ao longo do tempo.", category: "Control" },
  { term: "Carta de Controle EWMA", definition: "Exponentially Weighted Moving Average. Atribui pesos decrescentes a dados históricos. Superior a Shewhart para detectar minúsculas flutuações e tendências dinâmicas num processo contínuo.", category: "Control" },
  { term: "Cartas de Controle (Variáveis)", definition: "Ferramentas estatísticas contínuas: \u0058\u0304-R (subgrupos rápidos), \u0058\u0304-S (subgrupos grandes, s > precisão) e I-MR (dados individuais com amplitude móvel).", category: "Control" },
  { term: "Cartas de Controle (Atributos)", definition: "Tipos de gráficos para dados discretos: p (proporção defeituosos), np (contagem defeituosos), c (total defeitos área fixa), u (taxa defeitos área variável).", category: "Control" },
  { term: "Central Limit Theorem", definition: "Teorema Central do Limite (TCL). Postula que a distribuição das médias de amostras (tamanho \u2265 30) tenderá a uma distribuição normal, independentemente do formato da distribuição original da população.", category: "Estatística" },
  { term: "Confounding (Confundimento)", definition: "Fenômeno em Design of Experiments (DOE) onde os efeitos de dois ou mais fatores se sobrepõem e não podem ser estimados separadamente (Efeitos Aliased). Típico em Fatoriais Fracionados.", category: "Improve" },
  { term: "Cp e Cpk", definition: "Índices de Capacidade a curto prazo. Cp = (LSC - LSS) / 6\u03c3 (potencial máximo). Cpk avalia o distanciamento da média ao limite mais próximo (capacidade real centrada). Goal \u2265 1.33.", category: "Measure" },
  { term: "CTQ (Critical To Quality)", definition: "Desdobramento matemático do VOC em parâmetros operacionais rigorosos que podem ser medidos, controlados e inseridos no SLA de um contrato/projeto.", category: "Define" },
  { term: "DMADV / IDOV", definition: "Frameworks do Design for Six Sigma (DFSS). DMADV (Define, Measure, Analyze, Design, Verify). IDOV (Identify, Design, Optimize, Verify). Focam na criação de processos intrinsecamente 6 Sigma (falha zero por design).", category: "DFSS" },
  { term: "DMAIC", definition: "Core engine da melhoria contínua (Define, Measure, Analyze, Improve, Control). Metodologia estrita gerida por hipóteses iterativas para eliminação de causas raízes sistêmicas de variabilidade.", category: "Metodologia" },
  { term: "DOE (Design of Experiments)", definition: "Planejamento de Experimentos. Técnicas estatísticas multivariáveis (Fatorial Completo, Fracionado, Superfície de Resposta) que manipulam inputs simultaneamente para descobrir efeitos principais e interações ótimas.", category: "Improve" },
  { term: "DPMO", definition: "Defects Per Million Opportunities. Métrica probabilística. (Total Defeitos / (Total Unidades × Oportunidades por Unidade)) × 1.000.000. O nível 6 Sigma exato a longo prazo equivale a 3.4 DPMO.", category: "Métrica" },
  { term: "DPU e DPO", definition: "Defects Per Unit = Defeitos / Unidades. Defects Per Opportunity = Defeitos / (Unidades × Oportunidades por Unidade). Base para o cálculo de Sigmas e Yield.", category: "Métrica" },
  { term: "EVOP (Evolutionary Operation)", definition: "Técnica avançada no Control/Improve. Realiza experimentos contínuos e sutis em ambiente online produtivo, sintonizando os parâmetros ideais em tempo real sem arriscar sucata.", category: "Improve" },
  { term: "FMEA (Failure Mode and Effects Analysis)", definition: "Arquitetura quantitativa preventiva de risco. Multiplica Severidade (S), Ocorrência (O) e Detecção (D) para o Risk Priority Number (RPN). Nível MBA inclui o uso de Risk Priority Action (AP).", category: "Analyze" },
  { term: "Gage R&R (Crossed e Nested)", definition: "Measurement System Analysis. Crossed (Cruzado): Operadores medem as mesmas peças repetidas vezes. Nested (Aninhado): Testes destrutivos, onde lotes são medidos. Isola o erro do medidor (Repetibilidade) vs Erro do avaliador (Reprodutibilidade).", category: "Measure" },
  { term: "Gemba (Genchi Genbutsu)", definition: "'O Local Real'. Princípio de excelência corporativa exigindo que a liderança vá até onde o valor é fisicamente criado para observar os desperdícios antes de tomar decisões nas planilhas.", category: "Lean" },
  { term: "Heijunka", definition: "Nivelamento da produção. Ferramenta Lean para suavizar e sequenciar grandes volumes e mix de pedidos no chão de fábrica, mitigando o efeito chicote (bullwhip) e a sobrecarga (Muri).", category: "Lean" },
  { term: "Heteroscedasticidade", definition: "A variância do erro não é constante em todos os níveis da variável independente (os resíduos exibem modelo de cone/ampulheta). Fere a premissa de confiabilidade de OLS Regression (Mínimos Quadrados).", category: "Estatística" },
  { term: "Hoshin Kanri", definition: "Desdobramento das Diretrizes. Arquitetura estratégica master-level que converte a visão executiva C-Level corporativa (5 anos) em projetos Black Belts transacionais departamentais.", category: "MBB" },
  { term: "Jidoka (Autonomação)", definition: "Combinação de automação robótica do processo com inteligência mecânica de parar instantaneamente a linha quando ocorre um defeito, evitando repasse para a etapa downstream.", category: "Lean" },
  { term: "Kaizen Blitz", definition: "Evento de 3 a 5 dias hiper-focado. Especialistas de múltiplos departamentos abandonam rotinas para resolver um bottleneck e reconfigurar a célula produtiva até sexta-feira com resultados imediatos.", category: "Lean" },
  { term: "Kanban", definition: "Sistema neurológico visual PULL (puxado). Controla estritamente o Work In Progress (WIP), sincronizando o downstream com o ritmo (takt) exato da demanda preditiva do cliente (Just In Time).", category: "Lean" },
  { term: "Kruskal-Wallis Test", definition: "Teste Não Paramétrico análogo à ANOVA. Usado quando os dados ferem o pressuposto de normalidade (ex: dados ordinais categóricos). Compara as medianas organizadas por ranks invés de médias geométricas.", category: "Estatística" },
  { term: "Logistic Regression", definition: "Modelo linear preditivo estatístico onde o Y (saída) é discreto (ex: binário, Passa/Falha, Bom/Cancelado). Usa Log-Odds (\u03b2) na função link para estimar a probabilidade p do defeito ocorrer.", category: "Estatística" },
  { term: "Lognormal Distribution", definition: "Distribuição assimétrica usada para variáveis que nunca podem cair abaixo de zero (ex: Time-to-failure na confiabilidade, reparo de software). O log natural dos dados possui formato Normal.", category: "Estatística" },
  { term: "Mann-Whitney U Test", definition: "Alternativa não paramétrica ao 2-Sample T-Test para conjuntos de dados sem distribuição Normal. Classifica todos os dados dos dois grupos de menor para o maior rank conjunto para decidir qual mediana é estatisticamente superior.", category: "Estatística" },
  { term: "Matriz de Pugh", definition: "Critério de análise quantitativa DFSS multivariável que pondera múltiplas soluções tecnológicas disruptivas contra a baseline, cruzando requisitos técnicos complexos do CAD com Custo VS Performance do Protótipo.", category: "DFSS" },
  { term: "Multicolinearidade", definition: "Ocorre numa Múltipla Regressão Linear quando as variáveis X1 e X2 são altamente correlacionadas entre si. Distorce e infla a Variância dos VIFs (Variance Inflation Factor), destruindo as estimativas da correlação verdadeira frente ao 'Y'.", category: "Estatística" },
  { term: "Muda, Mura, Muri", definition: "Muda: Desperdícios físicos que não agregam valor (TIMWOODS). Mura: Desbalanceamento ou Variabilidade do Fluxo. Muri: Sobrecarga em Máquinas ou Seres Humanos (Burnout, Fadiga Crítica).", category: "Lean" },
  { term: "OEE (Overall Equipment Effectiveness)", definition: "Disponibilidade × Performance × Qualidade. Padrão ouro TPM industrial. Mostra gargalos de Manutenção, Micro-paradas no motor, e falhas de retrabalho com perdas severas de Takt.", category: "Metodologia" },
  { term: "Poka-Yoke", definition: "Arquitetura Mecânica Defect-Proof (A prova de erros). Projetada empiricamente pelo princípio de Shigeo Shingo, removendo fisicamente a capacidade do ser humano de interar errado num socket / API.", category: "Control" },
  { term: "Pp e Ppk", definition: "Performance Processual a Longo Prazo. Consideram os shifts do Teorema 1.5\u03c3. Cálculos de Desvio Padrão total baseados na variação em the grand sample, sem suavização de range. O índice pragmático.", category: "Measure" },
  { term: "Project Charter P&L", definition: "Documento oficial do patrocínio (Sponsor). No nível Black Belt, inclui matriz hard savings (Fluxo de Caixa) x soft savings (Evasão da Multa), VPL (Net Present Value) validado nativamente pelo Head Controller.", category: "Define" },
  { term: "P-Value", definition: "Probabilidade da Hipótese Nula (H\u2080) gerar os valores observados no extremo ou ainda maiores. Regra global quant: Se p-valor < \u03b1 (ex: 0.05), Rejeita-se H\u2080 - Resultado Estatisticamente Significante.", category: "Estatística" },
  { term: "QFD (Quality Function Deployment)", definition: "House of Quality. Converte o VOC Subjetivo (Whats) em Requisitos CTQs Discretos Parametrizáveis (Hows). Compara benchmarks e pondera tradeoffs de restrição técnica em matriz inter-relacionada.", category: "DFSS" },
  { term: "Regressão Múltipla Linear", definition: "Equação polinomial otimizada nos resíduos mínimos ordinários: Y = \u03b2\u2080 + \u03b2\u2081X\u2081 + \u03b2\u2082X\u2082 + \u03b5. Medida preditiva R-Square Adj indica precisão da variabilidade global do modelo de Múltiplos Fatores.", category: "Estatística" },
  { term: "Residual Analysis", definition: "Diagnóstico obrigatório pós-ANOVA / Regressão. Testa 3 premissas dos Resíduos (Desvio \u03b5 da reta real): 1. Independência no Tempo, 2. Distribuição Normal, 3. Variância Heteroscedástica Homogênea.", category: "Estatística" },
  { term: "RSM (Response Surface Methodology)", definition: "Engenharia Experimental de Topologia Avançada via Superfícies de Contorno 3D ou Box-Behnken. Localiza o Máximo Teórico Global das Interações Não Lineares Secundárias na Superfície Espacial Ótima (Target Optimal).", category: "Improve" },
  { term: "RTY (Rolled Throughput Yield)", definition: "Rendimento Primeira Vez RTY = Y\u2081 × Y\u2082 × ... × Y\u1d62. Exposição cumulativa das Ineficiências da 'Fabrica Oculta'. Um processo de 50 etapas c/ yield de 99% resulta num patético sistema final c/ <60% Yield Real Completo.", category: "Measure" },
  { term: "SIPOC", definition: "Supplier, Input, Process, Output, Customer. Borda Limítrofe que blinda o Escopo do Projeto de Fato contra Escopo Fantasma. Valida dependência dos Macro Processos no Planejamento de Requisitos Subjacentes (Defects vs Boundaries).", category: "Define" },
  { term: "SMED (Single Minute Exchange of Die)", definition: "Reengenharia do setup dinâmico criada por Shigeo Shingo na Toyota. Externaliza tarefas do Setup Paralelo c/ Máquina ligada para mitigar severos lucros-cessantes. Transição Sub-10 min global.", category: "Lean" },
  { term: "Soft vs Hard Savings", definition: "Diferenciação Crítica Financeira. Hard Savings: FUP que altera bottom-line lucros diretos P&L (Cortou headcounts brutos, menos frete). Soft Savings: Produtividade paralela invisível (Poupou horas de uma pessoa, mas salário base e Ebitda idêntico).", category: "MBB" },
  { term: "Standard Deviation (\u03c3)", definition: "Desvio Padrão Ouro Populacional. Sigma \u03c3 mede a magnitude orgânica da 'Largura da Doença' num Sistema (Dispersão no quadrado médio dos pontos em torno do alvo \u03bc). Inimigo Real da Média.", category: "Estatística" },
  { term: "Taguchi Methods", definition: "Métodos Robustos de Genichi Taguchi. Função perda Quadrática e Projetos Láticos Ortogonais. Concentra The Quality Management em suprimir as Variáveis Ruído sem as eliminar nativamente, usando Relação Signal-To-Noise Superior.", category: "Improve" },
  { term: "Takt Time", definition: "A velocidade e pulsação intrínseca dos pedidos de mercado, e.g. Bumbo Cardinal de Processamento = (Tempo Disponível da Máquina Turno) / (Demanda Quantificada do Cliente por Turno). Nivelando takt limitamos wip excessivo.", category: "Lean" },
  { term: "Teorema de Shift 1.5\u03c3", definition: "Gênese Estatística empírica subjacente de Motorola. Postula que com Desgastes/Flutuação temporal, um processo 6 Sigma Intacto (3.4 DPMO) oscila no longo prazo sofrendo Deriva (Shift) Natural de Variação Assessorada na Média (\u03bc ± 1.5 \u03b4).", category: "Métrica" },
  { term: "Theory of Constraints (TOC)", definition: "Tese da Restrição Gargalo Orgânica formulada por Eliyahu Goldratt. Argumenta que OEE Limitante / Throughput sistêmico obedece as correntes da taxa limite imposta do Único Passo Físico Mais Lento (Drum, Buffer, Rope).", category: "Lean" },
  { term: "Tolerance Design (Arquitetura de Tolerância DFSS)", definition: "Alocação Estatística do Root-Sum-Square Tolerancing System (Worst-Case). Engenharia Financeira DFSS na base do Monte Carlo sobre o Ponto de Preço exato Custo do Equipamento de Alta Precisão versus Limites Operacionais de Segurança da Célula.", category: "DFSS" },
  { term: "TRIZ", definition: "Teoria Rússa Sistêmica de Solução Inovativa Inventiva (Altshuller). Estuda Matriz de Contradições Padrões com 40 Princípios Resolventes, usando banco de dados empíricos de Patentes Militares / Engenharia Pura da FÍSICA para Quebrar Barriers.", category: "DFSS" },
  { term: "Variabilidade (Causas Comuns vs Especiais)", definition: "Tese de Deming (System Check). Causas Comuns (Inerentes e Entropia do Design Previsto vs LSC de Rotina - Noise). Causas Especiais: Shift de Processo Atípico Padrão Extrínseco Sinalizável Analisado.", category: "Estatística" },
  { term: "VSM (Value Stream Mapping)", definition: "Documentação Transacional e Visual Hierárquica do Chão de Fábrica Lean. Computa Lead Time Físico (Ponta a Ponta da Matéria até Faturamento) cruzado por Value Added Time Matemático + Information Flow dos ERPs Internos (MRP).", category: "Lean" },
  { term: "Weibull Distribution", definition: "Ferramenta Magna Média da Engenharia Confiabilidade Estrita Predictiva. Seu \u03b2 parametra a Vida Dinâmica. \u03b2 < 1 (Infant Mortality Falhas Logo no Onboarding do Lote), \u03b2 = 1 Random, \u03b2 > 1 Wear-out Fadiga Dinâmica Constante do Esgotamento.", category: "Estatística" }
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
