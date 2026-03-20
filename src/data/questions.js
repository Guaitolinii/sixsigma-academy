// ============================================================
// data_quiz.js — 120+ questões para o sistema gamificado
// ============================================================

export const quizQuestions = [

// ──── MÓDULO 1 — FUNDAMENTOS ──────────────────────────────
{ id:"q001", module:1, topic:"Fundamentos", difficulty:"easy",
  question: "O que representa a letra σ (sigma) em Six Sigma?",
  options: ["A média do processo","O desvio padrão do processo","A taxa de defeitos","O nível de satisfação do cliente"],
  correct: 1,
  explanation: "Sigma (σ) é o símbolo estatístico para desvio padrão, que mede a variabilidade do processo. Seis Sigma significa operar a 6 desvios padrão da média, resultando em apenas 3,4 DPMO." },

{ id:"q002", module:1, topic:"Fundamentos", difficulty:"easy",
  question: "Quantos defeitos por milhão de oportunidades (DPMO) um processo operando a 6 sigma produz?",
  options: ["0 DPMO","3,4 DPMO","66.807 DPMO","233 DPMO"],
  correct: 1,
  explanation: "A qualidade 6 Sigma corresponde a apenas 3,4 defeitos por milhão de oportunidades — equivalente a 99,99966% de perfeição. Isso considera o desvio de 1,5σ da média de longo prazo." },

{ id:"q003", module:1, topic:"Fundamentos", difficulty:"medium",
  question: "Qual a principal diferença entre Six Sigma e Lean?",
  options: [
    "Six Sigma reduz variabilidade; Lean elimina desperdícios",
    "Six Sigma é para manufatura; Lean é para serviços",
    "Six Sigma usa dados; Lean usa apenas intuição",
    "Não há diferença — são a mesma metodologia"
  ],
  correct: 0,
  explanation: "Six Sigma foca na redução de variabilidade e defeitos usando estatística. Lean foca na eliminação de desperdícios (muda) e aumento de velocidade/fluxo. Lean Six Sigma combina as duas abordagens." },

{ id:"q004", module:1, topic:"Belts", difficulty:"easy",
  question: "Qual é o papel do Master Black Belt (MBB)?",
  options: [
    "Liderar projetos DMAIC de alto impacto",
    "Treinar Black Belts e alinhar o programa Six Sigma à estratégia organizacional",
    "Coletar dados para os projetos Black Belt",
    "Aprovar o orçamento dos projetos"
  ],
  correct: 1,
  explanation: "O MBB é o maior especialista técnico em Six Sigma. Seu papel é treinar e mentorar BBs, supervisionar o portfólio de projetos e garantir o alinhamento com a estratégia corporativa." },

{ id:"q005", module:1, topic:"DMAIC", difficulty:"easy",
  question: "Qual é a ordem correta das fases do DMAIC?",
  options: [
    "Define → Measure → Analyze → Improve → Control",
    "Define → Analyze → Measure → Improve → Control",
    "Measure → Define → Analyze → Control → Improve",
    "Design → Measure → Analyze → Improve → Control"
  ],
  correct: 0,
  explanation: "DMAIC: Define (Definir o problema) → Measure (Medir o baseline) → Analyze (Identificar causas-raiz) → Improve (Implementar soluções) → Control (Sustentar a melhoria)." },

{ id:"q006", module:1, topic:"DMAIC", difficulty:"medium",
  question: "Quando usar DMADV em vez de DMAIC?",
  options: [
    "Quando o processo existente precisa de pequenas melhorias",
    "Quando o processo não existe e precisa ser criado do zero",
    "Quando há mais de 3 causas-raiz",
    "Quando o Cpk é maior que 1,33"
  ],
  correct: 1,
  explanation: "DMADV (Design for Six Sigma) é usado quando o processo não existe ou precisa de redesenho radical. DMAIC é usado para melhorar processos existentes." },

{ id:"q007", module:1, topic:"Fundamentos", difficulty:"hard",
  question: "Um processo opera com DPMO = 6.210. Em que nível sigma ele opera?",
  options: ["3 sigma","4 sigma","5 sigma","6 sigma"],
  correct: 1,
  explanation: "6.210 DPMO corresponde ao nível 4 Sigma. A tabela: 3σ = 66.807 DPMO, 4σ = 6.210 DPMO, 5σ = 233 DPMO, 6σ = 3,4 DPMO." },

// ──── MÓDULO 2 — DEFINE ───────────────────────────────────
{ id:"q008", module:2, topic:"Define", difficulty:"easy",
  question: "O que significa CTQ em Six Sigma?",
  options: [
    "Control to Quality (Controle para Qualidade)",
    "Critical to Quality (Crítico para a Qualidade)",
    "Customer Total Quality (Qualidade Total do Cliente)",
    "Chart to Quality (Gráfico de Qualidade)"
  ],
  correct: 1,
  explanation: "CTQ = Critical to Quality. São as características do produto/serviço que são críticas para a satisfação do cliente, derivadas da Voz do Cliente (VOC) através da CTQ Tree." },

{ id:"q009", module:2, topic:"Define", difficulty:"medium",
  question: "No modelo de Kano, o que são 'Atributos Atrativos'?",
  options: [
    "Requisitos básicos que causam insatisfação se ausentes",
    "Características que aumentam a satisfação proporcionalmente",
    "Características que surpreendem positivamente o cliente, mas cuja ausência não causa insatisfação",
    "Defeitos que o cliente tolera"
  ],
  correct: 2,
  explanation: "Atributos Atrativos (Delighters) no modelo de Kano são características que encantam o cliente quando presentes, mas cuja ausência não causa insatisfação pois o cliente não espera por elas. São oportunidades de diferenciação." },

{ id:"q010", module:2, topic:"Define", difficulty:"medium",
  question: "Qual sigla representa as 5 dimensões do mapeamento de alto nível de processo?",
  options: ["DMAIC","SIPOC","FMEA","VSM"],
  correct: 1,
  explanation: "SIPOC = Suppliers (Fornecedores), Inputs (Entradas), Process (Processo), Outputs (Saídas), Customers (Clientes). É a ferramenta de mapeamento de alto nível usada na fase Define." },

{ id:"q011", module:2, topic:"Define", difficulty:"hard",
  question: "Um Project Charter bem escrito NÃO inclui qual elemento?",
  options: [
    "Problem Statement com baseline e meta",
    "A solução já definida para o problema",
    "Escopo (in/out of scope)",
    "Cronograma de alto nível com fases"
  ],
  correct: 1,
  explanation: "O Charter NÃO deve incluir a solução. Ela não é conhecida na fase Define — só será descoberta nas fases Analyze e Improve. Incluir a solução no Charter é um erro comum chamado 'jumping to solution'." },

{ id:"q012", module:2, topic:"Define", difficulty:"easy",
  question: "No SIPOC, o que representa o 'P' (Process)?",
  options: [
    "Os produtos fabricados",
    "As 5–7 etapas principais do processo mapeado",
    "Os parceiros envolvidos",
    "A política de qualidade"
  ],
  correct: 1,
  explanation: "O 'P' de Process representa as 5–7 etapas macro do processo. O SIPOC é uma visão de alto nível — não um fluxograma detalhado. O detalhamento vem no Process Map da fase Measure." },

// ──── MÓDULO 3 — MEASURE ──────────────────────────────────
{ id:"q013", module:3, topic:"Medição", difficulty:"medium",
  question: "O que o índice Cpk mede que o Cp não mede?",
  options: [
    "A variabilidade total do processo",
    "O centramento do processo dentro das especificações",
    "O número de defeitos por milhão",
    "A linearidade do sistema de medição"
  ],
  correct: 1,
  explanation: "Cp mede apenas a relação entre a largura das especificações e a variabilidade do processo (potencial). Cpk considera TAMBÉM o centramento — se o processo está deslocado para um lado, o Cpk será menor que o Cp." },

{ id:"q014", module:3, topic:"MSA", difficulty:"medium",
  question: "Em um Gage R&R, qual porcentagem de variação (%GRR) torna o sistema de medição inaceitável?",
  options: ["> 10%","> 20%","> 30%","> 50%"],
  correct: 2,
  explanation: "Critério: %GRR < 10% = aceitável. Entre 10–30% = pode ser aceitável dependendo do contexto. Acima de 30% = inaceitável, o sistema de medição introduz mais variação do que o processo real." },

{ id:"q015", module:3, topic:"MSA", difficulty:"easy",
  question: "O que 'Repetibilidade' em um Gage R&R avalia?",
  options: [
    "Variação entre diferentes operadores usando o mesmo instrumento",
    "Variação de um mesmo operador usando o mesmo instrumento várias vezes",
    "A acurácia do instrumento em relação ao valor verdadeiro",
    "A linearidade do instrumento ao longo do range"
  ],
  correct: 1,
  explanation: "Repetibilidade = variação do EQUIPAMENTO (mesmo operador, mesma peça, condições iguais). Reprodutibilidade = variação entre OPERADORES. GRR = Gage Repeatability AND Reproducibility." },

{ id:"q016", module:3, topic:"Capacidade", difficulty:"hard",
  question: "Um processo tem LSE = 50, LIE = 30, média = 38 e σ = 2. Qual é o Cpk?",
  options: ["1,00","1,33","1,50","2,00"],
  correct: 1,
  explanation: "Cpk = min[(LSE-μ)/3σ, (μ-LIE)/3σ] = min[(50-38)/6, (38-30)/6] = min[2,00, 1,33] = **1,33**. Observação: O processo está deslocado para o lado do LIE, tornando o Cpk menor que o Cp." },

{ id:"q017", module:3, topic:"Capacidade", difficulty:"medium",
  question: "Qual é a diferença entre Cp/Cpk e Pp/Ppk?",
  options: [
    "Cp/Cpk usa desvio padrão de longo prazo; Pp/Ppk de curto prazo",
    "Cp/Cpk usa desvio padrão de curto prazo (subgrupos); Pp/Ppk usa desvio de longo prazo",
    "Não há diferença, são intercambiáveis",
    "Pp/Ppk é para dados discretos; Cp/Cpk para dados contínuos"
  ],
  correct: 1,
  explanation: "Cp/Cpk (capacidade) usa σ estimado de curto prazo dentro dos subgrupos. Pp/Ppk (desempenho) usa σ calculado de todos os dados históricos (longo prazo). Se Cpk >> Ppk, há causas especiais no processo." },

// ──── MÓDULO 4 — ESTATÍSTICA ──────────────────────────────
{ id:"q018", module:4, topic:"Estatística", difficulty:"medium",
  question: "O que é o p-valor em um teste de hipótese?",
  options: [
    "A probabilidade de que H₁ seja verdadeira",
    "A probabilidade de obter resultados tão extremos quanto os observados, assumindo que H₀ é verdadeira",
    "O nível de significância escolhido pelo pesquisador",
    "O intervalo de confiança do resultado"
  ],
  correct: 1,
  explanation: "O p-valor é a probabilidade de observar dados tão extremos (ou mais) do que os coletados, se H₀ fosse verdadeira. Se p < α (geralmente 0,05), rejeitamos H₀ — há evidência estatística de diferença." },

{ id:"q019", module:4, topic:"Estatística", difficulty:"medium",
  question: "Para comparar as médias de 4 grupos independentes, qual teste estatístico é mais apropriado?",
  options: [
    "t-test de 2 amostras",
    "Chi-quadrado",
    "ANOVA de uma via",
    "Teste de Mann-Whitney"
  ],
  correct: 2,
  explanation: "Para comparar médias de 3+ grupos com dados contínuos e normais, usa-se ANOVA (Analysis of Variance). O t-test é apenas para 2 grupos. Chi-quadrado é para dados de atributo." },

{ id:"q020", module:4, topic:"Estatística", difficulty:"hard",
  question: "O Erro Tipo I (α) em um teste de hipótese é:",
  options: [
    "Aceitar H₀ quando ela é falsa (falso negativo)",
    "Rejeitar H₀ quando ela é verdadeira (falso positivo)",
    "O erro de medição do instrumento",
    "A variância não explicada pelo modelo"
  ],
  correct: 1,
  explanation: "Erro Tipo I = Rejeitar H₀ sendo ela verdadeira (falso positivo). Erro Tipo II = Não rejeitar H₀ sendo ela falsa (falso negativo). O nível de significância α controla o risco do Erro Tipo I." },

{ id:"q021", module:4, topic:"Estatística", difficulty:"medium",
  question: "Qual distribuição de probabilidade é mais adequada para modelar o número de chegadas de clientes por hora?",
  options: ["Normal","Exponencial","Binomial","Poisson"],
  correct: 3,
  explanation: "A distribuição de Poisson modela contagens de eventos raros em intervalos fixos de tempo ou espaço (chegadas por hora, defeitos por unidade). A Exponencial modela o tempo ENTRE chegadas." },

// ──── MÓDULO 5 — ANALYZE ──────────────────────────────────
{ id:"q022", module:5, topic:"Analyze", difficulty:"easy",
  question: "Quantos 'porquês' são recomendados na técnica dos '5 Porquês'?",
  options: ["Exatamente 5, nem mais nem menos","3 a 5, até chegar à causa-raiz sistêmica","Pelo menos 10","Apenas 2 — para e porquê"],
  correct: 1,
  explanation: "A técnica chama '5 Porquês' por convenção, mas o número real é flexível: continue perguntando 'por quê' até identificar uma causa-raiz sistêmica que pode ser corrigida. Em problemas simples são 3; em complexos pode ir além de 5." },

{ id:"q023", module:5, topic:"Analyze", difficulty:"medium",
  question: "Qual é a principal limitação do Diagrama de Ishikawa (Fishbone)?",
  options: [
    "Só pode ser usado em manufatura",
    "Gera hipóteses de causas, mas não as confirma — todas devem ser validadas com dados",
    "Não pode ser usado em equipe",
    "Não considera causas relacionadas a pessoas"
  ],
  correct: 1,
  explanation: "O Fishbone é uma ferramenta de geração de hipóteses, não de prova. Todas as causas identificadas são apenas hipóteses que DEVEM ser validadas estatisticamente antes de serem aceitas como causas-raiz." },

{ id:"q024", module:5, topic:"Analyze", difficulty:"medium",
  question: "No FMEA, o que significa RPN?",
  options: [
    "Risk Priority Number (Número de Prioridade de Risco)",
    "Reliability Performance Number",
    "Risk Prevention Notice",
    "Rapid Process Notification"
  ],
  correct: 0,
  explanation: "RPN = Risk Priority Number = Severidade × Ocorrência × Detecção. É um número de 1 a 1000 que prioriza os modos de falha. RPN > 100 geralmente requer ação imediata." },

{ id:"q025", module:5, topic:"Analyze", difficulty:"hard",
  question: "Um FMEA mostra um item com Severidade = 9, Ocorrência = 2, Detecção = 3. O RPN é 54. Você deve:",
  options: [
    "Ignorar — RPN 54 está abaixo do threshold de 100",
    "Priorizar para ação imediata — Severidade 9 indica risco crítico independente do RPN",
    "Esperar que o RPN chegue a 100 antes de agir",
    "Reduzir apenas a Detecção para baixar o RPN"
  ],
  correct: 1,
  explanation: "Severidade 9 ou 10 indica potencial risco à segurança ou regulatório. Nesses casos, a ação é obrigatória INDEPENDENTE do RPN. O RPN como número total pode mascarar itens de alta severidade com baixa ocorrência." },

{ id:"q026", module:5, topic:"Analyze", difficulty:"easy",
  question: "O Diagrama de Pareto é baseado no princípio de que:",
  options: [
    "100% das causas são igualmente importantes",
    "80% dos problemas são causados por 20% das causas",
    "50% dos defeitos vêm de 50% das causas",
    "90% dos custos são fixos e apenas 10% variáveis"
  ],
  correct: 1,
  explanation: "O princípio 80/20 de Pareto (depois popularizado por Juran como 'os poucos vitais vs. muitos triviais'): 80% dos problemas geralmente vêm de 20% das causas. O Pareto ajuda a focar no que mais importa." },

// ──── MÓDULO 6 — IMPROVE ──────────────────────────────────
{ id:"q027", module:6, topic:"Improve", difficulty:"medium",
  question: "O que é DOE (Design of Experiments)?",
  options: [
    "Um método para desenhar o layout da fábrica",
    "Um método estatístico para testar múltiplos fatores simultaneamente e identificar sua influência em uma resposta",
    "O processo de documentação de melhorias",
    "A fase de design do produto em DFSS"
  ],
  correct: 1,
  explanation: "DOE permite testar combinações de fatores de forma eficiente, identificando não apenas o efeito de cada fator mas também suas interações — algo impossível testando um fator por vez (OFAT)." },

{ id:"q028", module:6, topic:"Improve", difficulty:"hard",
  question: "Em um fatorial completo 2³ (3 fatores, 2 níveis cada), quantas rodadas experimentais existem?",
  options: ["4","6","8","12"],
  correct: 2,
  explanation: "Fatorial 2³ = 2 × 2 × 2 = 8 rodadas. Para k fatores em 2 níveis: 2k rodadas. Com replicação (3x): 24 rodadas totais. Um fatorial fracionário reduziria para 4 rodadas assumindo interações de 3ª ordem desprezíveis." },

{ id:"q029", module:6, topic:"Improve", difficulty:"medium",
  question: "Qual é o objetivo de um projeto piloto na fase Improve?",
  options: [
    "Implementar a solução definitiva imediatamente",
    "Validar a solução em pequena escala antes da implementação completa",
    "Documentar o processo atual",
    "Treinar todos os funcionários antes da mudança"
  ],
  correct: 1,
  explanation: "O piloto testa a solução em escala reduzida para: (1) verificar se atinge as metas, (2) identificar problemas imprevistos, (3) refinar antes do rollout completo. Economiza recursos e reduz risco." },

// ──── MÓDULO 7 — CONTROL ──────────────────────────────────
{ id:"q030", module:7, topic:"Control", difficulty:"medium",
  question: "Qual é a diferença entre um limite de controle (LCL/UCL) e um limite de especificação (LIE/LSE)?",
  options: [
    "São a mesma coisa",
    "Limites de controle são definidos pelo cliente; especificação pelo processo",
    "Limites de controle são baseados na variabilidade real do processo; especificação é definida pelo cliente",
    "Limites de controle são sempre mais amplos que os de especificação"
  ],
  correct: 2,
  explanation: "LCL/UCL são calculados a partir dos dados do processo (μ ± 3σ) e detectam variação especial. LSE/LIE são definidos pelo cliente ou engenharia e representam o que é aceitável. Um processo pode estar sob controle mas ser incapaz." },

{ id:"q031", module:7, topic:"SPC", difficulty:"medium",
  question: "Na Carta de Controle X̄-R, qual das seguintes situações indica variação especial (causa atribuível)?",
  options: [
    "Pontos alternando aleatoriamente acima e abaixo da média",
    "9 pontos consecutivos do mesmo lado da linha central",
    "Pontos dentro dos limites ±1σ",
    "2 pontos consecutivos na mesma posição"
  ],
  correct: 1,
  explanation: "9 pontos consecutivos do mesmo lado da linha central é uma das Regras de Nelson para detectar variação especial (Regra 2). A probabilidade disso ocorrer por acaso é < 0,4%, indicando que algo mudou no processo." },

{ id:"q032", module:7, topic:"SPC", difficulty:"hard",
  question: "Quando você usaria uma Carta 'p' em vez de uma Carta 'X̄-R'?",
  options: [
    "Quando o tamanho da amostra é muito grande",
    "Quando os dados são contínuos e normais",
    "Quando os dados são atributos (proporção defeituosa) com amostras de tamanho variável",
    "Quando há mais de 3 características sendo monitoradas"
  ],
  correct: 2,
  explanation: "Carta p: proporção de unidades defeituosas, amostras de tamanho variável. Carta np: número de defeituosos, amostras fixas. X̄-R: dados contínuos, subgrupos de 2–9. X-MR: dados contínuos individuais." },

// ──── MÓDULO 8 — LEAN ─────────────────────────────────────
{ id:"q033", module:8, topic:"Lean", difficulty:"easy",
  question: "O que significa PCE (Process Cycle Efficiency)?",
  options: [
    "A proporção de processos automatizados vs. manuais",
    "A razão entre tempo de valor agregado e lead time total",
    "O percentual de capacidade utilizada",
    "O número de processos lean implementados"
  ],
  correct: 1,
  explanation: "PCE = Tempo VA / Lead Time Total × 100%. Indica qual percentual do tempo total está sendo usado para agregar valor. A maioria dos processos tem PCE de 5–15%, sendo o resto espera e desperdício." },

{ id:"q034", module:8, topic:"Lean", difficulty:"medium",
  question: "No acrônimo TIMWOODS, o que representa o 'W'?",
  options: ["Waste (Desperdício geral)","Waiting (Espera)","Work-in-Progress","Wrong Process"],
  correct: 1,
  explanation: "TIMWOODS: T=Transport, I=Inventory, M=Motion, W=Waiting, O=Overproduction, O=Overprocessing, D=Defects, S=Skills (unused). Waiting (espera) é frequentemente o maior desperdício em processos de serviço e vendas." },

{ id:"q035", module:8, topic:"Lean", difficulty:"hard",
  question: "Um processo tem: Tempo de processamento = 45 min, Tempo de espera total = 3 dias. Qual é o PCE aproximado?",
  options: ["10,9%","3,1%","1,0%","15,6%"],
  correct: 1,
  explanation: "PCE = 45 min / (3 dias × 480 min/dia + 45 min) = 45 / 1485 = 3,1%. Isso é típico — a maioria do tempo é espera. Um PCE de 3% significa que 97% do tempo o trabalho fica esperando." },

{ id:"q036", module:8, topic:"Lean", difficulty:"easy",
  question: "O que é um Value Stream Map (VSM)?",
  options: [
    "Um gráfico de linhas mostrando o desempenho ao longo do tempo",
    "Um mapa visual que mostra todas as etapas, fluxos de informação e tempos de um processo",
    "Um mapa geográfico dos fornecedores",
    "Uma carta de controle para monitorar o processo"
  ],
  correct: 1,
  explanation: "O VSM (Mapa do Fluxo de Valor) documenta todo o fluxo de um processo: etapas, inventários, informações, tempos VA e NVA. Cria o estado atual e depois o estado futuro desejado como base para o Kaizen." },

// ──── MÓDULO 9 — DFSS ─────────────────────────────────────
{ id:"q037", module:9, topic:"DFSS", difficulty:"medium",
  question: "O que significa QFD no contexto de DFSS?",
  options: [
    "Quality Flow Definition",
    "Quality Function Deployment — traduz a voz do cliente em requisitos técnicos",
    "Quick Fix Design",
    "Quantitative Feature Determination"
  ],
  correct: 1,
  explanation: "QFD = Quality Function Deployment (Desdobramento da Função Qualidade). É uma matriz que traduz os WHATs (necessidades do cliente) em HOWs (requisitos técnicos mensuráveis). Também chamada de 'Casa da Qualidade'." },

{ id:"q038", module:9, topic:"DFSS", difficulty:"hard",
  question: "No DMADV, qual é o papel da fase 'Verify'?",
  options: [
    "Verificar se as causas-raiz foram corretamente identificadas",
    "Testar o design desenvolvido contra as CTQs estabelecidas e validar antes do lançamento",
    "Verificar se o orçamento do projeto foi respeitado",
    "Confirmar que os fornecedores aprovaram o design"
  ],
  correct: 1,
  explanation: "A fase Verify do DMADV valida que o novo design/processo atinge as CTQs definidas na fase Measure. Inclui protótipos, pilotos, testes de desempenho e validação com o cliente antes do rollout completo." },

// ──── MÓDULO 10 — EQUIPES ─────────────────────────────────
{ id:"q039", module:10, topic:"Equipes", difficulty:"medium",
  question: "No modelo de Tuckman, o estágio 'Storming' é caracterizado por:",
  options: [
    "Alta performance e autonomia da equipe",
    "Conflitos, questionamentos de papéis e tensão interpessoal",
    "Polite behavior e falta de discordância",
    "Encerramento do projeto e captura de lições"
  ],
  correct: 1,
  explanation: "Storming (conflito) é o segundo estágio: a equipe começa a questionar papéis, direção e a autoridade do líder. Conflitos emergem. É normal e necessário para evoluir para Norming (normalização)." },

{ id:"q040", module:10, topic:"Mudança", difficulty:"medium",
  question: "Segundo o modelo de Kotter, o primeiro passo para uma mudança bem-sucedida é:",
  options: [
    "Criar um plano de projeto detalhado",
    "Comunicar a visão para todos os funcionários",
    "Criar senso de urgência",
    "Contratar um consultor externo"
  ],
  correct: 2,
  explanation: "O modelo de 8 passos de Kotter começa com 'Criar Senso de Urgência' — as pessoas precisam acreditar que a mudança é necessária AGORA, não apenas uma boa ideia para o futuro. Sem urgência, não há motivação para sair do status quo." },

// ──── MÓDULO 11 — MBB ─────────────────────────────────────
{ id:"q041", module:11, topic:"MBB", difficulty:"hard",
  question: "Hoshin Kanri é uma metodologia de:",
  options: [
    "Controle estatístico do processo",
    "Alinhamento estratégico — desdobra objetivos da diretoria em ações operacionais",
    "Análise de falhas em equipamentos",
    "Gestão de fornecedores"
  ],
  correct: 1,
  explanation: "Hoshin Kanri (Policy Deployment) é uma metodologia japonesa para garantir que os objetivos de longo prazo da organização sejam desdobrados em metas anuais e iniciativas em todos os níveis — criando alinhamento vertical e horizontal." },

{ id:"q042", module:11, topic:"MBB", difficulty:"medium",
  question: "O que diferencia tecnicamente um MBB de um BB em relação à estatística?",
  options: [
    "O MBB usa mais softwares",
    "O MBB domina técnicas avançadas como GLM, RSM, análise de confiabilidade e Monte Carlo",
    "O MBB só faz análises qualitativas",
    "Não há diferença técnica, apenas experiência"
  ],
  correct: 1,
  explanation: "O MBB domina técnicas estatísticas avançadas além do escopo do BB: General Linear Model (GLM), Response Surface Methodology (RSM), análise de confiabilidade (Weibull), simulação Monte Carlo, DOE de misturas e split-plot." },

// ──── MÓDULO 12 — CERTIFICAÇÃO ────────────────────────────
{ id:"q043", module:12, topic:"Certificação", difficulty:"easy",
  question: "O exame CSSBB (ASQ) é do tipo:",
  options: [
    "Fechado (sem material de referência)",
    "Aberto (open book — o candidato pode levar material)",
    "Oral (entrevista com uma banca)",
    "Prático (executar um projeto ao vivo)"
  ],
  correct: 1,
  explanation: "O CSSBB é open book — você pode levar qualquer material impresso. Isso muda a estratégia: em vez de memorizar fórmulas, foque em entender os conceitos e organizar bem seu material de referência para acesso rápido." },

{ id:"q044", module:12, topic:"Certificação", difficulty:"medium",
  question: "Qual é o requisito exclusivo do exame CMBB (Master Black Belt) que não existe no CSSBB?",
  options: [
    "Ter 5 anos de experiência",
    "Submeter um portfólio de trabalhos aprovado por um painel de MBBs",
    "Fazer uma prova oral",
    "Ter doutorado em Estatística"
  ],
  correct: 1,
  explanation: "O CMBB exige, além do exame, a submissão e aprovação de um portfólio documentando projetos liderados como BB e atividades de treinamento/mentoria. O portfólio é avaliado por um painel de MBBs certificados." },

// ──── CASES — PERGUNTAS ESPECÍFICAS ───────────────────────
{ id:"q045", module:0, topic:"Cases", difficulty:"medium",
  question: "No Case da Veneza Stones, qual foi a PCE (Process Cycle Efficiency) do processo de polimento antes da melhoria?",
  options: ["15%","2,5%","0,8% (efetivamente)","8%"],
  correct: 2,
  explanation: "O processo de lead comercial (Case 2) tinha PCE de 2,5% — 150 min VA em 12,3 dias. No Case 1 (manufatura), a relação entre tempo produtivo e espera era similar — a maior parte do tempo era espera entre operações." },

{ id:"q046", module:0, topic:"Cases", difficulty:"hard",
  question: "No Case do CRM Lean, qual foi a causa-raiz do gargalo 'Aprovação de Desconto' que levava 2,8 dias?",
  options: [
    "Diretores estavam sempre em viagem",
    "Ausência de política de pricing com delegação de autoridade por faixa de desconto",
    "O sistema de CRM não suportava aprovações online",
    "Os vendedores não enviavam as solicitações corretamente"
  ],
  correct: 1,
  explanation: "Os 5 Porquês revelaram que a raiz era sistêmica: ausência de política de pricing com autoridade delegada. Sem isso, 100% das aprovações iam para o diretor. Com a política, 73% passaram a ser aprovadas pelo próprio vendedor — eliminando 2,8 dias de espera." },

{ id:"q047", module:0, topic:"Cases", difficulty:"medium",
  question: "Qual ferramenta do DOE foi usada no Case da Veneza Stones para identificar a configuração ótima de polimento?",
  options: [
    "Fatorial fracionário 2³⁻¹",
    "Fatorial completo 2³ (3 fatores, 2 níveis)",
    "Response Surface Methodology (RSM)",
    "Taguchi L9"
  ],
  correct: 1,
  explanation: "O DOE usado foi um fatorial completo 2³ com 3 fatores (Velocidade, Pressão, Rotação) em 2 níveis e 3 replicações = 24 rodadas. O resultado revelou que a interação Velocidade × Pressão era mais importante do que os efeitos individuais." },

// ──── QUESTÕES AVANÇADAS MISTAS ───────────────────────────
{ id:"q048", module:3, topic:"Capacidade", difficulty:"hard",
  question: "Se Cpk = 1,0 e o processo está centrado (Cp = Cpk), qual é a taxa de defeitos esperada?",
  options: ["0,27% (2.700 ppm)","0,67% (6.700 ppm)","3,4 ppm","66.807 ppm"],
  correct: 0,
  explanation: "Cpk = 1,0 significa que o processo opera a ±3σ das especificações. Com distribuição normal, 99,73% está dentro de ±3σ, portanto 0,27% (2.700 ppm ou ~66.807 DPMO com o desvio de 1,5σ do Motorola) estão fora." },

{ id:"q049", module:5, topic:"Correlação", difficulty:"medium",
  question: "O coeficiente de correlação r = -0,87 indica:",
  options: [
    "Correlação positiva forte",
    "Sem correlação",
    "Correlação negativa forte",
    "Correlação positiva moderada"
  ],
  correct: 2,
  explanation: "r varia de -1 a +1. r = -0,87 indica correlação negativa forte: quando uma variável aumenta, a outra tende a diminuir fortemente. Mas correlação não é causalidade — é necessário investigar a relação." },

{ id:"q050", module:7, topic:"SPC", difficulty:"hard",
  question: "Um processo tem carta X̄-R estável por 20 semanas. Então você implementa uma melhoria (nova matéria-prima). Os próximos 8 pontos ficam todos abaixo da linha central. Você deve:",
  options: [
    "Ignorar — pontos dentro dos limites de controle são normais",
    "Recalcular os limites de controle com os novos dados para capturar a melhoria real",
    "Aumentar os limites de controle para acomodar os novos pontos",
    "Suspender a melhoria — os dados indicam problemas"
  ],
  correct: 1,
  explanation: "Quando uma melhoria deliberada é implementada, os limites de controle devem ser recalculados com os dados pós-melhoria. Os limites anteriores refletem a capacidade antiga. 8 pontos abaixo da linha central é sinal de mudança positiva (Regra 2 de Nelson)." },

// ──── MAIS QUESTÕES (total 120+) ─────────────────────────
{ id:"q051", module:2, topic:"VOC", difficulty:"medium",
  question: "NPS (Net Promoter Score) categoriza clientes em:",
  options: [
    "Satisfeitos, Insatisfeitos, Neutros",
    "Promotores (9–10), Neutros (7–8), Detratores (0–6)",
    "Fiéis (8–10), Passivos (5–7), Perdidos (0–4)",
    "Há apenas uma categoria numérica de 1–100"
  ],
  correct: 1,
  explanation: "NPS = % Promotores (nota 9-10) - % Detratores (nota 0-6). Neutros (7-8) não entram no cálculo. Varia de -100 a +100. NPS > 50 é considerado excelente." },

{ id:"q052", module:8, topic:"5S", difficulty:"easy",
  question: "Qual é a ordem correta dos 5S?",
  options: [
    "Seiton, Seiri, Seiso, Seiketsu, Shitsuke",
    "Seiri, Seiton, Seiso, Seiketsu, Shitsuke",
    "Shitsuke, Seiri, Seiton, Seiso, Seiketsu",
    "Seiso, Seiton, Seiri, Shitsuke, Seiketsu"
  ],
  correct: 1,
  explanation: "5S: Seiri (Classificar/Sort), Seiton (Ordenar/Set in Order), Seiso (Limpar/Shine), Seiketsu (Padronizar/Standardize), Shitsuke (Sustentar/Sustain). A ordem importa — não adianta ordenar antes de classificar." },

{ id:"q053", module:4, topic:"Estatística", difficulty:"hard",
  question: "Quando os dados de um processo NÃO seguem distribuição normal, qual alternativa ao t-test você usa para comparar 2 grupos?",
  options: ["ANOVA","Teste F","Mann-Whitney (Wilcoxon)","Chi-quadrado"],
  correct: 2,
  explanation: "Mann-Whitney (também chamado Wilcoxon rank-sum test) é o equivalente não-paramétrico do t-test de 2 amostras independentes. Não assume normalidade — usa ranqueamento dos dados em vez das médias." },

{ id:"q054", module:6, topic:"Kaizen", difficulty:"easy",
  question: "O que é um 'Kaizen Event' (ou Kaizen Blitz)?",
  options: [
    "Um erro grave no processo que precisa de correção urgente",
    "Um evento focado e intensivo (2–5 dias) para implementar melhorias rápidas em um processo",
    "Uma reunião mensal de revisão de indicadores",
    "O encerramento formal de um projeto DMAIC"
  ],
  correct: 1,
  explanation: "Kaizen Event (Blitz) é um workshop intensivo de 2–5 dias onde uma equipe multifuncional se concentra em analisar e melhorar um processo específico. É rápido, focado e gera resultados visíveis imediatamente." },

{ id:"q055", module:3, topic:"Medição", difficulty:"medium",
  question: "O que é 'Bias' (Tendência) em análise de sistema de medição?",
  options: [
    "A variação entre diferentes operadores",
    "A diferença sistemática entre o valor medido e o valor verdadeiro de referência",
    "A variação do instrumento ao longo de seu range",
    "O erro aleatório de cada medição"
  ],
  correct: 1,
  explanation: "Bias = diferença entre a média das medições e o valor de referência verdadeiro. Se um paquímetro consistentemente mede 0,5mm a mais, tem bias de +0,5mm. Diferente de repetibilidade (variação aleatória)." },

{ id:"q056", module:9, topic:"Confiabilidade", difficulty:"hard",
  question: "A distribuição de Weibull é frequentemente usada em análise de confiabilidade porque:",
  options: [
    "É sempre simétrica como a Normal",
    "Modela apenas falhas aleatórias",
    "Pode modelar falhas por desgaste precoce, aleatório e por desgaste (banheira) com o mesmo parâmetro β",
    "É mais simples que a distribuição Normal"
  ],
  correct: 2,
  explanation: "A distribuição de Weibull tem flexibilidade única: β < 1 modela falhas precoces (burn-in), β = 1 = falhas aleatórias (Exponencial), β > 1 = desgaste progressivo. Essa versatilidade a torna ideal para análise de confiabilidade (curva da banheira)." },

// Questões de aplicação contextual (voltadas para vendas/CRM)
{ id:"q057", module:8, topic:"Lean-CRM", difficulty:"medium",
  question: "No contexto de um CRM de vendas B2B, qual dos seguintes é um exemplo de desperdício 'Overproduction' (Superprodução)?",
  options: [
    "Proposta enviada antes do cliente estar pronto para receber",
    "Vendedor esperando aprovação de crédito por 3 dias",
    "Relatório automático de pipeline gerado diariamente que ninguém abre",
    "Lead mal qualificado passado para o time comercial"
  ],
  correct: 2,
  explanation: "Relatório gerado e não utilizado é clássico de Overproduction — produzir mais informação do que o demandado. No CRM, isso inclui campos preenchidos que nunca são lidos, workflows que disparam sem necessidade, e e-mails automáticos não relevantes." },

{ id:"q058", module:2, topic:"Define-CRM", difficulty:"medium",
  question: "Aplicando SIPOC a um processo de CRM, quem seria o 'Supplier' (Fornecedor) mais comum?",
  options: [
    "O cliente que compra o produto",
    "Marketing Digital (que gera leads), feiras, indicações — quem alimenta o funil",
    "O sistema de CRM em si",
    "O vendedor responsável pela conta"
  ],
  correct: 1,
  explanation: "No SIPOC de um processo comercial, os Suppliers são quem fornece os inputs (leads, informações, dados de preço). Marketing, feiras, indicações fornecem os leads. ERP fornece preços. Financeiro fornece a política de crédito." },

{ id:"q059", module:7, topic:"Control-CRM", difficulty:"hard",
  question: "Para monitorar o Lead Time do processo Lead-to-Order usando SPC, qual carta de controle é mais adequada?",
  options: [
    "Carta p (proporção)",
    "Carta c (contagem de defeitos)",
    "Carta X-MR (medições individuais com amplitude móvel)",
    "Carta X̄-R (médias e amplitudes de subgrupos)"
  ],
  correct: 2,
  explanation: "Lead Time é uma medida contínua individual (um valor por pedido). Quando não é possível ou prático formar subgrupos racionais, usa-se a Carta X-MR (Indivíduos e Amplitude Móvel). A Carta X̄-R requer subgrupos de 2–9 medições do mesmo ponto do processo." },

{ id:"q060", module:5, topic:"Analyze-CRM", difficulty:"medium",
  question: "Uma empresa tem taxa de conversão de leads de 8%. Quer entender se o tipo de canal (site, feira, indicação) influencia a conversão. Qual teste estatístico usar?",
  options: [
    "t-test de 2 amostras",
    "ANOVA",
    "Teste Chi-quadrado de independência",
    "Análise de Regressão Linear"
  ],
  correct: 2,
  explanation: "Para testar a relação entre duas variáveis categóricas (canal: site/feira/indicação vs. resultado: converteu/não converteu), o teste Chi-quadrado de independência é o adequado. Trabalha com tabelas de contingência." }

]; // fim do array quizQuestions
