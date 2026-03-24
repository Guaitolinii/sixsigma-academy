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

// ──── QUESTÕES AVANÇADAS MISTAS (MBA & MASTER BLACK BELT) ────────
{ id:"q048", module:3, topic:"Capacidade", difficulty:"hard",
  question: "Se um processo tem distribuiçao não normal e Cpk não pode ser calculado via métodos tradicionais, qual a abordagem correta para um Master Black Belt?",
  options: [
    "Transformação de Box-Cox ou Johnson, seguida do cálculo normal",
    "Assumir normalidade se n > 30 (Teorema do Limite Central)",
    "Usar o Cp no lugar do Cpk",
    "Calcular a média e dividir por 3"
  ],
  correct: 0,
  explanation: "Para calcular a capacidade de dados não normais, a Regra de Ouro é: 1) Tentar descobrir o porquê da não-normalidade. 2) Aplicar Box-Cox (se dados > 0) ou Transformação de Johnson para normalizar matematicamente os dados antes do cálculo do Z-Score." },

{ id:"q049", module:5, topic:"Regressão", difficulty:"hard",
  question: "Ao executar uma Regressão Linear Múltipla, você nota que o R-Sq(adj) é 89%, mas o R-Sq(pred) é apenas 45%. O que isso indica?",
  options: [
    "O modelo é perfeitamente válido e pronto para uso",
    "Overfitting (Sobreajuste). O modelo explica bem o passado, mas é péssimo em prever o futuro (novos dados)",
    "Underfitting. Faltam variáveis no modelo",
    "Multicolinearidade alta entre todos os preditores"
  ],
  correct: 1,
  explanation: "Um R-Sq(pred) muito menor que o R-Sq(adj) grita OVERFITTING. Você incluiu variáveis demais (ruído) que se ajustaram perfeitamente à sua amostra atual, quebrando a capacidade preditiva do modelo para dados que ele nunca viu." },

{ id:"q050", module:7, topic:"SPC Preditivo", difficulty:"hard",
  question: "Qual Carta de Controle é matematicamente superior para detectar pequenas mudanças na média do processo (shifts < 1.5σ)?",
  options: [
    "Carta X-Bar R",
    "Carta I-MR",
    "CUSUM (Somas Acumuladas) ou EWMA (Média Móvel Exponencialmente Ponderada)",
    "Carta p"
  ],
  correct: 2,
  explanation: "Cartas de Shewhart clássicas (X-Bar) reagem bem a grandes mudanças (> 1.5σ). Para micro-shifts (< 1.5σ), CUSUM e EWMA são superiores pois carregam o histórico ('memória') das amostras anteriores, expondo tendências microscópicas instantaneamente." },

{ id:"q051", module:6, topic:"DOE", difficulty:"hard",
  question: "Seu budget permite apenas 16 rodadas (runs). Você tem 5 fatores contínuos. Que design permite investigar efeitos principais E interações duplas sem aliasing severo?",
  options: [
    "Fatorial Completo 2^5",
    "Fatorial Fracionado 2^(5-1) Resolução V",
    "Plackett-Burman de 12 corridas",
    "Taguchi L8"
  ],
  correct: 1,
  explanation: "Um Fatorial Fracionado 2^(5-1) exige 16 rodadas (Meia fração de 32). Sendo Resolução V, ele garante que os Efeitos Principais nunca se confundam com Interações Duplas (aliasing ocorre apenas com triplas ou maiores), sendo o gold standard para Screening de 5 fatores." },

{ id:"q052", module:6, topic:"Simulation", difficulty:"hard",
  question: "Por que um Master Black Belt prefere a Simulação de Monte Carlo em vez do cálculo tradicional de tolerância de pior caso (Worst Case Tolerance)?",
  options: [
    "Porque o Worst Case exige software pago",
    "Worst Case assume que todas as peças estouram os limites dimensionais simultaneamente, algo estatisticamente improvável, gerando custos de usinagem astronômicos",
    "Monte Carlo ignora as variações das peças",
    "Não há diferença, ambas dão a mesma largura de tolerância"
  ],
  correct: 1,
  explanation: "Tolerance Design tradicional (Worst Case) soma linearmente as tolerâncias (Ex: 0.1 + 0.1 + 0.1 = 0.3 gap). É irrealista. Monte Carlo soma variâncias estatísticas (Root Sum Square - RSS), provando que é quase impossível que as 3 peças venham com seu limite máximo ao mesmo tempo. Isso barateia o projeto mecânico em milhões." },

{ id:"q053", module:11, topic:"Valuation", difficulty:"hard",
  question: "O Controller Financeiro pergunta: 'O projeto X economizou 400 horas de operadores este ano. Onde está o Hard Saving?' Qual a resposta de um verdadeiro Black Belt?",
  options: [
    "O tempo economizado vale US$ 40/hora, logo Hard Saving = US$ 16.000",
    "É Soft Saving (Cost Avoidance). O Hard Saving só existirá se essas 400 horas forem convertidas em demissões (redução de folha) ou em incremento direto de vendas sem contratar mais gente",
    "Hard Saving de oportunidade futura",
    "Isso entra no DRE como Receita Não Operacional"
  ],
  correct: 1,
  explanation: "Controladoria de classe mundial não aceita tempo como Hard Saving a menos que afete o fluxo de caixa. Se as pessoas ganharam tempo mas continuam sentadas no escritório ganhando o mesmo salário, o custo fixo da empresa faturou US$ 0 a mais. É categorizado rigidamente como Soft Savings." },

{ id:"q054", module:9, topic:"DFSS", difficulty:"hard",
  question: "Na matriz QFD (House of Quality), o teto triangular serve para:",
  options: [
    "Correlacionar a Voz do Cliente (VOC) com os Requisitos Funcionais",
    "Fazer o benchmark da concorrência",
    "Identificar correlações técnicas (Coflitos ou Sinergias) entre os próprios requisitos de engenharia (HOWs vs HOWs)",
    "Calcular a TIR do projeto"
  ],
  correct: 2,
  explanation: "O Teto do QFD mapeia os trade-offs de engenharia. Exemplo: Para um carro, o Requisito 1 (Espessura do Aço = Segurança) TEM COLARELAÇÃO NEGATIVA com Requisito 2 (Peso = Consumo de combustível). O Teto força o engenheiro a resolver contradições usando ferramentas como TRIZ." },

{ id:"q055", module:6, topic:"Robust Design", difficulty:"hard",
  question: "Na Função Perda de Taguchi, o que o mestre Genichi Taguchi propôs contrariando a engenharia ocidental clássica?",
  options: [
    "Se a peça estiver dentro da especificação (LIE a LSE), o custo da má qualidade é zero",
    "A perda financeira aumenta quadraticamente à medida que o produto se afasta do Target (valor nominal), mesmo que ainda esteja dentro dos limites de especificação",
    "Limites de especificação não devem existir",
    "Qualidade só custa caro quando o cliente processa a empresa"
  ],
  correct: 1,
  explanation: "A ocidental 'Goal Post Mentality' diz que entre 9,9 e 10,1 a peça é perfeita. Taguchi provou que se o nominal é 10,0, uma peça com 10,08 (dentro, portanto aprovada) já gera degradação no cliente (vibração, óleo vazando 3 anos depois). A função de perda quadrática (L=k(y-m)²) mudou o mundo." },

{ id:"q056", module:12, topic:"Tollgate", difficulty:"hard",
  question: "Durante a defesa da Fase Analyze ao Board (Tollgate), o MBB questiona por que você usou Regressão Logística Binária em vez de Regressão Linear. A resposta correta:",
  options: [
    "Pois temos múltiplos preditores independentes",
    "Porque a variável resposta (Y) do projeto era Discreta/Binária (Ex: Cliente Cancelou vs Não Cancelou), e Linear só aceita Y contínuo",
    "Por causa do R-sq muito alto da Linear",
    "Para normalizar os resíduos através da curva logística"
  ],
  correct: 1,
  explanation: "Regressão Linear Média exige que a resposta Y seja contínua (Dinheiro, Tempo, Comprimento). Quando prevemos eventos binários (Passa/Falha, Default/Pagou, Churn/Ficou), a matemática muda para a distribuição binomial, exigindo Regressão Logística." },

{ id:"q057", module:4, topic:"Testes Hipóteses", difficulty:"hard",
  question: "Um Black Belt analisa o teste 2-Sample t de médias da linha A vs B e encontra um p-valor de 0,14 (Alfa = 0,05). Porém, os tamanhos das amostras eram n=4 de cada lado. O que ele deve reportar?",
  options: [
    "Falha ao rejeitar H0. As linhas são iguais matematicamente.",
    "Falha ao rejeitar H0, mas alerta para Alto Risco de Erro Tipo II. O Teste não tinha 'Poder' (Power) estatístico devido ao 'n' extremamente baixo para afirmar igualdade garantida.",
    "Rejeita H0, há diferença entre A e B.",
    "Usa ANOVA no lugar do t-test e avança."
  ],
  correct: 1,
  explanation: "O p-valor > 0,05 diz que não conseguimos provar que são diferentes. MAs o n=4 destrói o Poder do Teste (1-Beta). É muito provável que a diferença exista (Erro Tipo II), mas a 'lupa' (tamanho da amostra) foi fraca demais para enxergá-la. Nunca declare 'igualdade' com Power < 80%." },

{ id:"q058", module:11, topic:"Change Management", difficulty:"medium",
  question: "Um gerente de área boicota seu projeto Lean. Na Matriz de Stakeholders, ele possui Alto Poder na empresa e Baixo Apoio ao Seu Projeto. Sua estratégia de ADKAR deve focar em:",
  options: [
    "Cercá-lo de e-mails copiando todo mundo",
    "Usar o seu Executive Sponsor (o VP dele) para alinhar as métricas dele com o seu projeto, forçando 'Desire' (Desejo) top-down, seguido de reuniões de cocriação bottom-up",
    "Esperar ele sair de férias para implementar a Poka-Yoke",
    "Aplicar o passo 'Knowledge' do ADKAR enviando PDFs sobre Lean"
  ],
  correct: 1,
  explanation: "Gatekeepers políticos operam pela carteira. O MBB aciona o Executive Sponsor para mudar os KPIs de bônus do gerente. Assim que a meta do gerente passa a depender da redução de desperdício do projeto (criando o passo Desire na força bruta/política), a gestão de mudança funciona." },

{ id:"q059", module:5, topic:"R-FMEA", difficulty:"hard",
  question: "A diferença técnica mortal entre o FMEA Tradicional de Engenharia e o FMEA Reverso (R-FMEA) focado pelo Master Black Belt no chão de fábrica é:",
  options: [
    "O R-FMEA é assinado pelo Fornecedor",
    "O FMEA tradicional ocorre na sala de reunião imaginando falhas. O R-FMEA é uma auditoria de campo para verificar se todo Modo de Falha Severo (RPN>100) realmente tem os controles (Detecção) ativados no mundo real",
    "R-FMEA avalia os lucros após as falhas",
    "Não há diferença estatística ou filosófica"
  ],
  correct: 1,
  explanation: "Acidentes fatais ocorrem com FMEAs notas 10 e aprovados. O engenheiro presumiu que a Detecção era nota 2 ('Controle Eletrônico Robusto'). O MBB faz o R-FMEA indo na linha e injetando um defeito de propósito. Se o robô não parar a máquina, o engenheiro mentiu na sala do FMEA. Isso é o FMEA Reverso." },

{ id:"q060", module:8, topic:"Heijunka", difficulty:"hard",
  question: "Em uma implementação real de Lean, o sistema Heijunka Box proíbe a 'Produção em Lote Econômico' padrão e exige:",
  options: [
    "Produzir os grandes pedidos nos primeiros 15 dias do mês",
    "Nivelamento Misto. Ex: Se a demanda diária é 50 Carros Verdes e 50 Azuis, produzir V-A-V-A-V-A em pequenos pitches, absorvendo o choque da demanda do cliente de forma estabilizada",
    "Ter um pulmão de estoque gigantesco",
    "Parar a linha a cada 30 minutos para 5S"
  ],
  correct: 1,
  explanation: "Heijunka = Nivelamento de Volume e Mix. Em vez de fazer 10 dias de produto A (lote de setup) e jogar estresse para a logística ou quebrar a cadeia de suplementos (Efeito Chicote), nivela-se a produção sequenciando A-B-A-B sincronizado com o Takt Time real do mercado consumidor." }

]; // fim do array quizQuestions
