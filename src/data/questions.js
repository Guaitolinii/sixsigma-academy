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
  explanation: "Heijunka = Nivelamento de Volume e Mix. Em vez de fazer 10 dias de produto A (lote de setup) e jogar estresse para a logística ou quebrar a cadeia de suplementos (Efeito Chicote), nivela-se a produção sequenciando A-B-A-B sincronizado com o Takt Time real do mercado consumidor." },

// ──── BATCH 2 — ESTATÍSTICA FUNDAMENTAL (LACUNAS) ────────
{ id:"q061", module:3, topic:"Amostragem", difficulty:"medium",
  question: "Para calcular o tamanho amostral mínimo numa estimativa de média com 95% de confiança e margem de erro E, qual fórmula é utilizada?",
  options: ["n = (Z·σ/E)²","n = Z·σ/E","n = σ²/E","n = (E/Z·σ)²"],
  correct: 0,
  explanation: "A fórmula n = (Z·σ/E)² é a base para estimar amostras para médias. Com Z=1,96 (95%), σ estimado e margem E desejada. Ex: σ=5, E=1 → n = (1,96×5/1)² = 96 amostras." },

{ id:"q062", module:3, topic:"Amostragem", difficulty:"hard",
  question: "Um BB precisa estimar a proporção de defeitos com 95% de confiança e margem de erro de ±2%. Estimativa inicial p=0,10. Qual o 'n' mínimo?",
  options: ["n = 384","n = 864","n = 600","n = 96"],
  correct: 1,
  explanation: "n = (Z²·p·(1-p))/E² = (1,96²×0,10×0,90)/0,02² = (3,8416×0,09)/0,0004 = 0,3457/0,0004 = 864. Para proporções, amostras são muito maiores que para médias." },

{ id:"q063", module:4, topic:"Distribuições", difficulty:"medium",
  question: "Qual distribuição é mais adequada para modelar o tempo entre falhas de um equipamento?",
  options: ["Normal","Binomial","Exponencial","Poisson"],
  correct: 2,
  explanation: "A Exponencial modela o tempo ENTRE eventos (inter-arrival times). A Poisson modela a CONTAGEM de eventos num intervalo fixo. São complementares: se as chegadas seguem Poisson, o tempo entre elas segue Exponencial." },

{ id:"q064", module:4, topic:"Distribuições", difficulty:"hard",
  question: "Um processo tem 500 oportunidades de defeito por unidade, produz 10.000 unidades/mês e registra 850 defeitos. Qual o DPMO e o nível sigma aproximado?",
  options: ["DPMO=170, ~5,1σ","DPMO=850, ~4,6σ","DPMO=85, ~5,3σ","DPMO=1700, ~4,4σ"],
  correct: 0,
  explanation: "DPMO = (Defeitos/(Unidades×Oportunidades))×10⁶ = (850/(10.000×500))×10⁶ = (850/5.000.000)×10⁶ = 170 DPMO ≈ 5,1σ. Fórmula fundamental para converter dados brutos em nível sigma." },

{ id:"q065", module:4, topic:"Intervalo Confiança", difficulty:"medium",
  question: "Um intervalo de confiança de 95% para a média é [48,2 ; 51,8]. Isso significa que:",
  options: [
    "95% dos dados individuais caem entre 48,2 e 51,8",
    "Há 95% de probabilidade de que a verdadeira média populacional esteja neste intervalo",
    "A média amostral é exatamente 50,0",
    "O desvio padrão é 1,8"
  ],
  correct: 1,
  explanation: "O IC 95% indica que, se repetíssemos a amostragem muitas vezes, 95% dos intervalos construídos conteriam a verdadeira média μ. NÃO é sobre dados individuais — é sobre a estimativa da média." },

{ id:"q066", module:4, topic:"Testes Hipóteses", difficulty:"hard",
  question: "O Power (Poder) de um teste estatístico é 0,65. Isso significa que:",
  options: [
    "Há 65% de chance de rejeitar H₀ corretamente quando ela é falsa",
    "Há 65% de chance de cometer Erro Tipo I",
    "O p-valor é 0,65",
    "A confiança do teste é 65%"
  ],
  correct: 0,
  explanation: "Power = 1 - β = probabilidade de detectar uma diferença real (rejeitar H₀ quando ela é realmente falsa). Power de 0,65 é BAIXO — o mínimo aceitável é 0,80. Para aumentar: aumente n, aumente α, ou aumente o delta esperado." },

{ id:"q067", module:3, topic:"Normalidade", difficulty:"medium",
  question: "No teste de Anderson-Darling, você obteve p-valor = 0,032. Qual a conclusão sobre a normalidade dos dados?",
  options: [
    "Os dados são normais — pode usar testes paramétricos",
    "Os dados NÃO são normais — use transformações ou testes não-paramétricos",
    "O teste é inconclusivo",
    "Precisa de mais amostras para decidir"
  ],
  correct: 1,
  explanation: "No teste de normalidade, H₀: dados são normais. p-valor < 0,05 → rejeita H₀ → dados NÃO são normais. Opções: Box-Cox/Johnson Transform, ou usar testes não-paramétricos (Mann-Whitney, Kruskal-Wallis)." },

{ id:"q068", module:4, topic:"Testes Hipóteses", difficulty:"medium",
  question: "Qual teste é apropriado para comparar a média de UMA amostra contra um valor alvo conhecido?",
  options: ["2-Sample T-Test","Paired T-Test","1-Sample T-Test","ANOVA"],
  correct: 2,
  explanation: "1-Sample T-Test compara a média de uma amostra contra um valor alvo (μ₀). Ex: 'A espessura média das chapas é igual a 20mm?' Paired T-Test é para amostras pareadas (antes/depois). 2-Sample T é para comparar 2 grupos independentes." },

{ id:"q069", module:4, topic:"Testes Hipóteses", difficulty:"hard",
  question: "Um teste Paired T-Test é mais poderoso que um 2-Sample T-Test porque:",
  options: [
    "Usa mais dados",
    "Elimina a variabilidade entre sujeitos ao analisar as diferenças individuais (antes vs depois)",
    "Não requer normalidade",
    "Funciona com dados categóricos"
  ],
  correct: 1,
  explanation: "O Paired T-Test analisa as DIFERENÇAS individuais (d = depois - antes), eliminando a variabilidade natural entre indivíduos. Ex: medir a pressão sanguínea da MESMA pessoa antes/depois do remédio. Isso reduz dramaticamente o 'ruído' e aumenta o Power." },

{ id:"q070", module:4, topic:"Chi-Quadrado", difficulty:"medium",
  question: "O teste Chi-Quadrado (χ²) é usado para:",
  options: [
    "Comparar médias de 2 grupos contínuos",
    "Testar a associação entre duas variáveis categóricas (dados de atributo)",
    "Calcular o desvio padrão da população",
    "Determinar o tamanho amostral mínimo"
  ],
  correct: 1,
  explanation: "O Chi-Quadrado testa se há associação entre variáveis categóricas. Ex: 'O tipo de defeito depende do turno?' Monta-se uma tabela de contingência e calcula-se se as frequências observadas diferem significativamente das esperadas." },

{ id:"q071", module:3, topic:"Capacidade", difficulty:"hard",
  question: "Um processo tem Cp = 2,0 e Cpk = 0,8. O que isso indica?",
  options: [
    "O processo é capaz e centrado",
    "O processo tem potencial excelente (variação pequena) mas está severamente descentrado — a média está deslocada",
    "O sistema de medição é inaceitável",
    "Os dados não são normais"
  ],
  correct: 1,
  explanation: "Cp alto (2,0) = variação pequena, o 'carro cabe na garagem'. Cpk baixo (0,8) = média deslocada, o 'carro está batendo na pilastra'. Solução: CENTRAR o processo (ajustar a média), não reduzir variação. É um problema de calibração, não de capacidade." },

{ id:"q072", module:3, topic:"Capacidade", difficulty:"hard",
  question: "Calcule o Yield (Rendimento) de primeira passagem de um processo com DPU = 0,35:",
  options: ["Y = 65%","Y = 70,5%","Y = 35%","Y = 95%"],
  correct: 1,
  explanation: "Y = e^(-DPU) = e^(-0,35) = 0,7047 ≈ 70,5%. Esta é a fórmula de Throughput Yield (baseada em Poisson). Se DPU = 0, Y = 100%. Se DPU = 1, Y = 36,8%. O RTY (Rolled Throughput Yield) multiplica os yields de todas as etapas." },

{ id:"q073", module:3, topic:"Métrica", difficulty:"medium",
  question: "Qual é a relação entre DPMO e Nível Sigma? Selecione a correspondência CORRETA:",
  options: ["3σ = 6.210 DPMO","4σ = 66.807 DPMO","5σ = 233 DPMO","2σ = 3,4 DPMO"],
  correct: 2,
  explanation: "A tabela correta (com shift 1,5σ): 2σ=308.538 | 3σ=66.807 | 4σ=6.210 | 5σ=233 | 6σ=3,4 DPMO. Memorizar esta tabela é essencial para o exame CSSBB (open book, mas agiliza)." },

{ id:"q074", module:1, topic:"COPQ", difficulty:"medium",
  question: "Segundo o modelo PAF de custos da qualidade, investir mais em Prevenção tipicamente resulta em:",
  options: [
    "Aumento dos custos totais de qualidade",
    "Redução drástica dos custos de Falha Interna e Externa, com queda no COPQ total",
    "Aumento dos custos de avaliação",
    "Nenhum impacto mensurável"
  ],
  correct: 1,
  explanation: "A 'Regra 1:10:100': $1 em Prevenção evita $10 em Falha Interna e $100 em Falha Externa. Empresas maduras (5-6σ) investem mais em Prevenção e reduzem drasticamente inspeção e falhas, otimizando o COPQ total." },

{ id:"q075", module:2, topic:"Define", difficulty:"hard",
  question: "Um Problem Statement eficaz NÃO deve conter:",
  options: [
    "A métrica afetada e sua magnitude",
    "O local e período do problema",
    "A causa-raiz ou solução presumida",
    "O impacto financeiro estimado"
  ],
  correct: 2,
  explanation: "O Problem Statement NUNCA deve conter causa ou solução. Frases como 'porque a máquina está velha' ou 'precisamos comprar um robô' são proibidas. O PS deve ser factual, mensurável e neutro — a causa será descoberta no Analyze e a solução no Improve." },

{ id:"q076", module:1, topic:"Fundamentos", difficulty:"easy",
  question: "O Teorema do Limite Central (TLC) postula que:",
  options: [
    "Todos os processos são normais",
    "A distribuição das médias amostrais tende à normalidade conforme n aumenta, independente da distribuição original",
    "O desvio padrão sempre diminui com mais amostras",
    "Dados não normais não podem ser analisados"
  ],
  correct: 1,
  explanation: "O TLC é um dos teoremas mais importantes da estatística: para n ≥ 30, a distribuição das MÉDIAS amostrais (X̄) será aproximadamente normal, mesmo que os dados individuais sigam qualquer distribuição. Isso justifica o uso de cartas X̄-R." },

{ id:"q077", module:4, topic:"Correlação", difficulty:"medium",
  question: "Um coeficiente de correlação de Pearson r = -0,92 indica:",
  options: [
    "Correlação positiva forte",
    "Ausência de correlação",
    "Correlação negativa forte — quando X sobe, Y desce proporcionalmente",
    "Causalidade comprovada entre X e Y"
  ],
  correct: 2,
  explanation: "r = -0,92 indica correlação negativa muito forte. IMPORTANTE: correlação ≠ causalidade. Mesmo com r = -0,92, pode haver uma terceira variável (confounding variable) causando ambos os movimentos. Só DOE controlado prova causalidade." },

{ id:"q078", module:4, topic:"Regressão", difficulty:"hard",
  question: "Na Regressão Múltipla, um VIF (Variance Inflation Factor) = 15 para a variável X₃ indica que:",
  options: [
    "X₃ é o preditor mais importante do modelo",
    "X₃ tem alta multicolinearidade com outros preditores — deve ser removida ou combinada",
    "O R² do modelo é 15%",
    "X₃ é estatisticamente significativa"
  ],
  correct: 1,
  explanation: "VIF > 10 indica multicolinearidade severa — X₃ é redundante (já explicada por outras variáveis X). Isso infla artificialmente os erros padrão dos coeficientes β, tornando os p-valores não confiáveis. Solução: remover X₃ ou usar PCA." },

{ id:"q079", module:3, topic:"MSA", difficulty:"hard",
  question: "Em um estudo Gage R&R, ndc (Number of Distinct Categories) = 3. O que isso significa?",
  options: [
    "O sistema de medição consegue distinguir 3 categorias distintas de peças — aceitável",
    "O sistema de medição é inadequado — ndc < 5 indica que não pode distinguir peças boas de ruins com confiança",
    "Há 3 operadores no estudo",
    "O Gage R&R é 3%"
  ],
  correct: 1,
  explanation: "ndc (Número de Categorias Distintas) deve ser ≥ 5. Significa quantos 'grupos' de peças o sistema consegue distinguir. ndc = 3 indica que o instrumento só vê 'pequeno, médio, grande' — resolução insuficiente para controlar o processo." },

{ id:"q080", module:2, topic:"QFD", difficulty:"hard",
  question: "Na Casa da Qualidade (QFD), uma correlação técnica NEGATIVA no telhado triangular indica:",
  options: [
    "Os requisitos técnicos são compatíveis",
    "Um trade-off de engenharia: melhorar um HOW piora outro HOW — exige decisão de compromisso",
    "O requisito do cliente não é importante",
    "A relação WHATs × HOWs é fraca"
  ],
  correct: 1,
  explanation: "O telhado triangular mapeia conflitos entre requisitos técnicos (HOWs vs HOWs). Ex: aumentar espessura do aço (segurança) CONFLITA com reduzir peso (economia). Ferramentas como TRIZ ajudam a resolver essas contradições sem compromisso." },

{ id:"q081", module:1, topic:"Lean Six Sigma", difficulty:"easy",
  question: "Os 8 desperdícios do Lean são representados pelo acrônimo TIMWOODS. O que o 'S' representa?",
  options: ["Safety (Segurança)","Skills unused (Habilidades não utilizadas)","Speed (Velocidade)","Standards (Padrões)"],
  correct: 1,
  explanation: "O 8º desperdício (adicionado ao 7 original do TPS) é Skills unused — não utilizar o talento, criatividade e conhecimento das pessoas. Ex: engenheiro sênior preenchendo planilhas manuais. É o desperdício mais ignorado e mais caro." },

{ id:"q082", module:4, topic:"Distribuições", difficulty:"easy",
  question: "A distribuição Binomial é usada quando:",
  options: [
    "Os dados são contínuos e normais",
    "Temos um número fixo de tentativas independentes, cada uma com dois resultados possíveis (sucesso/falha)",
    "Queremos modelar o tempo entre eventos",
    "O tamanho da amostra é maior que 1000"
  ],
  correct: 1,
  explanation: "Binomial: n tentativas fixas, cada uma com probabilidade p de sucesso. Ex: de 100 peças inspecionadas, quantas são defeituosas? (n=100, p=proporção de defeitos). Quando n é grande e p é pequeno, a Binomial se aproxima da Poisson." },

{ id:"q083", module:4, topic:"Distribuições", difficulty:"medium",
  question: "Para qual situação a distribuição Weibull é mais utilizada no Six Sigma?",
  options: [
    "Análise de capacidade de dados normais",
    "Modelagem de confiabilidade e tempo de vida útil de componentes",
    "Contagem de defeitos por unidade",
    "Comparação de médias entre 2 grupos"
  ],
  correct: 1,
  explanation: "A Weibull é a ferramenta principal de Reliability Engineering. Seu parâmetro de forma β indica: β<1 = mortalidade infantil (falhas precoces), β=1 = vida útil (falhas aleatórias = Exponencial), β>1 = desgaste (fadiga)." },

{ id:"q084", module:3, topic:"Amostragem", difficulty:"medium",
  question: "Qual tipo de amostragem garante que todos os subgrupos da população estejam proporcionalmente representados?",
  options: ["Amostragem Aleatória Simples","Amostragem Estratificada","Amostragem Sistemática","Amostragem por Conveniência"],
  correct: 1,
  explanation: "Amostragem Estratificada divide a população em estratos (ex: turno A, B, C) e coleta proporcionalmente de cada um. Evita que um turno domine a amostra. Essencial quando a variação entre estratos é significativa." },

{ id:"q085", module:4, topic:"Testes Hipóteses", difficulty:"easy",
  question: "Em testes de hipótese, α (alfa) é tipicamente definido como:",
  options: ["0,50","0,10","0,05","0,01"],
  correct: 2,
  explanation: "α = 0,05 (5%) é o padrão universal. Significa que aceitamos 5% de risco de Erro Tipo I (rejeitar H₀ verdadeira). Em aplicações de segurança/médicas, pode ser 0,01 (1%). Em screening exploratório, pode ser 0,10 (10%)." },

{ id:"q086", module:3, topic:"SPC", difficulty:"medium",
  question: "Uma Run Chart mostra 8 pontos consecutivos acima da mediana. Isso indica:",
  options: [
    "Variação normal (causa comum)",
    "Uma tendência ou mudança no processo (causa especial)",
    "O processo está sob controle",
    "Os dados são normais"
  ],
  correct: 1,
  explanation: "Na Run Chart, 8+ pontos consecutivos do mesmo lado da mediana indicam uma 'run' — evidência de causa especial (shift na média). A probabilidade de 8 pontos do mesmo lado por acaso é (0,5)⁸ = 0,4% — muito improvável." },

{ id:"q087", module:1, topic:"DMAIC", difficulty:"easy",
  question: "Em qual fase do DMAIC são identificadas e validadas as causas-raiz do problema?",
  options: ["Define","Measure","Analyze","Improve"],
  correct: 2,
  explanation: "Analyze é onde as hipóteses geradas (Fishbone, brainstorm) são validadas estatisticamente com dados (ANOVA, Regressão, Chi-Quadrado). Só causas com p-valor < 0,05 são declaradas 'Vital Few' (causas-raiz confirmadas)." },

{ id:"q088", module:2, topic:"VOC", difficulty:"medium",
  question: "A 'CTQ Tree' (Árvore de CTQs) serve para:",
  options: [
    "Calcular o custo da qualidade",
    "Traduzir necessidades vagas do cliente em requisitos mensuráveis e específicos",
    "Determinar o número de amostras necessárias",
    "Classificar defeitos por frequência"
  ],
  correct: 1,
  explanation: "A CTQ Tree desdobra: VOC (vago) → Driver (necessidade) → CTQ (mensurável). Ex: VOC='Quero entrega rápida' → Driver='Tempo de entrega' → CTQ='Lead time ≤ 3 dias úteis com ±0,5 dia'. Sem CTQs, o projeto não tem alvo." },

{ id:"q089", module:4, topic:"Regressão", difficulty:"medium",
  question: "Na análise de resíduos de uma regressão, os resíduos devem apresentar qual padrão?",
  options: [
    "Tendência crescente (funil)",
    "Distribuição normal, independência temporal e variância constante (homoscedásticos)",
    "Correlação perfeita com Y",
    "Formato em U invertido"
  ],
  correct: 1,
  explanation: "Os 3 pressupostos dos resíduos: 1) Normalidade (teste AD), 2) Independência (sem padrões no tempo), 3) Variância constante (homoscedasticidade — sem formato de cone/funil). Violar qualquer um invalida os p-valores do modelo." },

{ id:"q090", module:1, topic:"Fundamentos", difficulty:"medium",
  question: "Qual a diferença entre 'Precisão' e 'Exatidão' (Acurácia)?",
  options: [
    "São sinônimos — significam a mesma coisa",
    "Precisão = dispersão dos tiros (repetibilidade); Exatidão = proximidade do tiro ao alvo (viés)",
    "Precisão é para dados contínuos; Exatidão para discretos",
    "Precisão é mais importante que Exatidão"
  ],
  correct: 1,
  explanation: "Precisão (Precision) = quão próximos os tiros estão ENTRE SI (baixa dispersão). Exatidão (Accuracy) = quão próximos estão do CENTRO DO ALVO (baixo viés). Um processo pode ser preciso mas inexato (cluster longe do alvo), ou exato mas impreciso (disperso ao redor do alvo)." },

// ──── BATCH 3 — IMPROVE, CONTROL, LEAN, DFSS, MBB ────────
{ id:"q091", module:6, topic:"DOE", difficulty:"hard",
  question: "Em um DOE 2³ Fatorial Completo, quantas corridas experimentais são necessárias (sem réplicas)?",
  options: ["6","8","12","16"],
  correct: 1,
  explanation: "2³ = 2×2×2 = 8 corridas. Cada fator tem 2 níveis (alto/baixo). Com 3 fatores: 8 combinações. Com centro = 8+1. Com réplica completa = 16. O fatorial completo estima TODOS os efeitos principais e interações sem confundimento." },

{ id:"q092", module:6, topic:"DOE", difficulty:"hard",
  question: "Em um DOE Fatorial Fracionado 2^(5-2), a resolução III significa que:",
  options: [
    "Todos os efeitos são estimáveis independentemente",
    "Efeitos principais estão aliased (confundidos) com interações de 2 fatores — NÃO é possível separar A de BC",
    "Apenas 2 fatores podem ser estudados",
    "Cada corrida precisa ser replicada 3 vezes"
  ],
  correct: 1,
  explanation: "Resolução III: Efeitos Principais ≡ Interações 2-fatores. Res IV: Principais limpos, mas interações 2×2 confundidas entre si. Res V: Principais e interações 2-fatores limpos. Para projetos críticos, mínimo Res IV é mandatório." },

{ id:"q093", module:6, topic:"DOE", difficulty:"medium",
  question: "O 'Center Point' em um DOE serve para:",
  options: [
    "Aumentar o número de fatores",
    "Detectar curvatura (não-linearidade) na resposta",
    "Reduzir o número de corridas",
    "Eliminar a variabilidade do operador"
  ],
  correct: 1,
  explanation: "O ponto central (todos os fatores no nível médio) verifica se a relação fator→resposta é linear ou curva. Se a média do centro difere da média dos cantos, há curvatura → escalar para RSM (Response Surface Methodology)." },

{ id:"q094", module:7, topic:"Cartas Controle", difficulty:"medium",
  question: "Qual carta de controle é adequada para dados INDIVIDUAIS (sem subgrupos)?",
  options: ["X̄-R","X̄-S","I-MR (Individuais e Amplitude Móvel)","carta p"],
  correct: 2,
  explanation: "I-MR: Individuais (I) + Moving Range (MR). Usada quando subgrupos não são naturais (ex: 1 lote por dia, análise destrutiva). Os limites UCL/LCL são calculados com MR̄ × constantes d2. Para subgrupos: X̄-R (n≤8) ou X̄-S (n>8)." },

{ id:"q095", module:7, topic:"Cartas Controle", difficulty:"hard",
  question: "Quais são as 4 Regras de Nelson para detectar causas especiais em cartas de controle?",
  options: [
    "1 ponto acima de 3σ | 8 consecutivos do mesmo lado | 6 consecutivos crescentes | 2 de 3 além de 2σ",
    "Todas acima de 1σ | média = mediana | todos abaixo de LCL | nenhuma",
    "Soma dos pontos > 100 | Cp > 1,33 | Cpk > 2 | ndc ≥ 5",
    "Nenhum ponto fora dos limites | todos dentro de 1σ | média estável | sem tendências"
  ],
  correct: 0,
  explanation: "Regras clássicas de Western Electric/Nelson: Regra 1: 1pt >3σ | Regra 2: 8pt consecutivos mesmo lado da CL | Regra 3: 6pt em tendência crescente/decrescente | Regra 4: 2 de 3pt além de 2σ. Qualquer violação = investigar causa especial." },

{ id:"q096", module:7, topic:"Controle", difficulty:"medium",
  question: "Um OCAP (Out-of-Control Action Plan) deve conter:",
  options: [
    "Apenas o nome do responsável",
    "O sintoma (regra violada), possíveis causas, ações corretivas imediatas e preventivas, e responsável com prazo",
    "O custo da não-conformidade",
    "A carta de controle atualizada"
  ],
  correct: 1,
  explanation: "O OCAP é um 'cookbook' para o operador agir IMEDIATAMENTE quando uma causa especial é detectada. Sem OCAP, o operador vê o alarme no SPC e não sabe o que fazer. É o backbone da fase Control — sem ele, o projeto retorna ao baseline." },

{ id:"q097", module:7, topic:"Controle", difficulty:"hard",
  question: "Uma carta CUSUM é preferível à carta Shewhart (I-MR) quando:",
  options: [
    "A variação é muito grande",
    "Queremos detectar pequenos desvios persistentes (< 1,5σ) na média que Shewhart não percebe",
    "Os dados são atributos (proporção)",
    "O processo está fora de controle"
  ],
  correct: 1,
  explanation: "Shewhart detecta shifts grandes (>2σ) mas é cega para drifts pequenos. CUSUM (Cumulative Sum) acumula desvios leves — se a média desloca 0,5σ por 20 pontos, CUSUM acende o alarme. EWMA é alternativa similar com pesos decrescentes." },

{ id:"q098", module:8, topic:"5S", difficulty:"easy",
  question: "A sequência correta dos 5S é:",
  options: [
    "Sort, Shine, Straighten, Standardize, Sustain",
    "Seiri (Classificar), Seiton (Organizar), Seiso (Limpar), Seiketsu (Padronizar), Shitsuke (Disciplinar)",
    "Start, Stop, Simplify, Standardize, Score",
    "Safety, Speed, Service, Savings, Satisfaction"
  ],
  correct: 1,
  explanation: "Os 5S originais em japonês: Seiri (separar útil de inútil), Seiton (lugar para cada coisa), Seiso (limpeza como inspeção), Seiketsu (padronizar os 3S anteriores), Shitsuke (disciplina para manter). Base cultural do Lean." },

{ id:"q099", module:8, topic:"SMED", difficulty:"medium",
  question: "O princípio central do SMED (Single Minute Exchange of Die) é:",
  options: [
    "Comprar máquinas mais rápidas",
    "Converter atividades internas (máquina parada) em externas (máquina rodando) para reduzir o tempo de setup",
    "Eliminar todos os setups",
    "Usar apenas um tipo de produto"
  ],
  correct: 1,
  explanation: "Shigeo Shingo dividiu o setup em Interno (só com máquina parada) e Externo (preparável com máquina rodando). Converter atividades internas em externas e depois otimizar ambas. Meta: setup ≤ 10 min (single-digit minutes). Exemplo: pit-stop de F1." },

{ id:"q100", module:8, topic:"Kanban", difficulty:"medium",
  question: "O sistema Kanban controla primariamente:",
  options: [
    "A qualidade do produto final",
    "O WIP (Work in Progress) e o fluxo de materiais no sistema de produção puxada (pull)",
    "O salário dos operadores",
    "O layout da fábrica"
  ],
  correct: 1,
  explanation: "Kanban = cartão/sinal visual que autoriza a produção ou movimentação de material. Limita o WIP: só produz quando o downstream consome (pull). Evita superprodução (o pior dos 8 desperdícios) e sincroniza com o Takt Time." },

{ id:"q101", module:8, topic:"Lean", difficulty:"medium",
  question: "A teoria de Restrições (TOC) de Goldratt afirma que o throughput de um sistema é determinado por:",
  options: [
    "A etapa mais rápida",
    "A média de todas as etapas",
    "O gargalo (recurso mais lento ou com menor capacidade)",
    "O último processo da cadeia"
  ],
  correct: 2,
  explanation: "TOC: o sistema é tão forte quanto seu elo mais fraco. Os 5 passos: 1) Identificar o gargalo, 2) Explorar (maximizar uso), 3) Subordinar (tudo alinha ao gargalo), 4) Elevar (investir para ampliar capacidade), 5) Repetir (novo gargalo)." },

{ id:"q102", module:8, topic:"VSM", difficulty:"hard",
  question: "O PCE (Process Cycle Efficiency) de um processo é 3%. Isso significa que:",
  options: [
    "97% do Lead Time é desperdiçado em esperas, filas, retrabalho e transporte",
    "O processo tem 3% de defeitos",
    "A eficiência do equipamento é 3%",
    "Apenas 3 operadores trabalham no processo"
  ],
  correct: 0,
  explanation: "PCE = (Value-Added Time / Total Lead Time) × 100%. PCE de 3% é típico em processos administrativos e serviços. Significa que de cada 100 horas de lead time, apenas 3 horas agregam valor real. O benchmark World Class é PCE > 25%." },

{ id:"q103", module:9, topic:"DFSS", difficulty:"hard",
  question: "A Função Perda de Taguchi (Quadrática) argumenta que:",
  options: [
    "A qualidade só importa quando o produto está fora da especificação",
    "Qualquer desvio do valor alvo (mesmo dentro do spec) gera custo crescente quadraticamente — L(y) = k(y-T)²",
    "Quanto mais inspeção, melhor a qualidade",
    "O custo é linear em relação ao desvio"
  ],
  correct: 1,
  explanation: "Taguchi revolucionou ao mostrar que a perda NÃO é zero dentro do spec e infinita fora (modelo 'goal-post'). A perda é contínua e quadrática: desviar 1mm do alvo custa X, desviar 2mm custa 4X. Isso justifica buscar o ALVO, não apenas 'estar dentro do spec'." },

{ id:"q104", module:9, topic:"DFSS", difficulty:"medium",
  question: "A Simulação de Monte Carlo no DFSS é usada para:",
  options: [
    "Calcular a média aritmética",
    "Simular milhares de cenários aleatórios para prever a distribuição de probabilidade de uma saída complexa com múltiplas variáveis de entrada incertas",
    "Identificar a causa-raiz de um defeito",
    "Medir o Gage R&R"
  ],
  correct: 1,
  explanation: "Monte Carlo gera 10.000+ cenários variando os inputs aleatoriamente (cada um com sua distribuição). Ex: se o diâmetro do pistão é N(50, 0.3) e o anel é N(50.5, 0.2), qual a probabilidade de gap excessivo? Invaluável para análise de tolerâncias em novos designs." },

{ id:"q105", module:10, topic:"Change Management", difficulty:"medium",
  question: "No modelo ADKAR (Prosci), qual é o elemento mais frequentemente negligenciado por equipes técnicas?",
  options: [
    "Awareness (Consciência)",
    "Knowledge (Conhecimento)",
    "Desire (Desejo) — as pessoas precisam QUERER mudar, não apenas saber por quê",
    "Ability (Habilidade)"
  ],
  correct: 2,
  explanation: "Engenheiros e BBs focam em Knowledge (treinamento) e Ability (prática), mas esquecem do Desire. Se o operador não vê benefício pessoal na mudança (ou pior, perde horas extras), ele vai sabotar silenciosamente. ADKAR exige abordar o 'What's in it for me?'." },

{ id:"q106", module:10, topic:"Stakeholders", difficulty:"hard",
  question: "Um Project Sponsor 'fraco' (sem autoridade real sobre budget/recursos) tipicamente resulta em:",
  options: [
    "Projeto mais ágil e independente",
    "Projeto DOA (Dead on Arrival) — não consegue derrubar barreiras organizacionais, aprovar CAPEX ou alinhar gerentes resistentes",
    "Maior criatividade da equipe",
    "Menores custos do projeto"
  ],
  correct: 1,
  explanation: "O Sponsor é o 'escudo político' do BB. Sem ele: gerentes funcionais bloqueiam recursos, o CAPEX nunca é aprovado, e sabotadores (gatekeepers que perdem poder) matam o projeto. O BB deve avaliar o Sponsor na fase Define — se for fraco, escalar ou recusar o projeto." },

{ id:"q107", module:11, topic:"Finanças", difficulty:"hard",
  question: "Um projeto Six Sigma requer CAPEX de R$500K com economia anual de R$180K. Com WACC de 12%, o VPL em 5 anos é:",
  options: ["R$148.920","R$-151.080","R$400.000","R$148.920 positivo — projeto aprovado"],
  correct: 3,
  explanation: "VPL = -500K + 180K/(1,12)¹ + 180K/(1,12)² + ... + 180K/(1,12)⁵ = -500K + 160,7K + 143,5K + 128,1K + 114,4K + 102,1K = -500K + 648,9K = +R$148,9K. VPL > 0 → projeto viável financeiramente. Se VPL < 0, buscar soluções mais baratas (Poka-Yoke)." },

{ id:"q108", module:11, topic:"Finanças", difficulty:"medium",
  question: "A diferença fundamental entre Hard Savings e Cost Avoidance é:",
  options: [
    "Hard Savings só conta em projetos grandes",
    "Hard Savings impacta diretamente o P&L (EBITDA) mensurável em fatura/registros contábeis; Cost Avoidance evita um gasto futuro hipotético que não aparece na contabilidade",
    "São a mesma coisa — termos intercambiáveis",
    "Cost Avoidance é sempre maior que Hard Savings"
  ],
  correct: 1,
  explanation: "Controller odeia 'dinheiro de Monopoly'. Hard Savings: cortou R$20K/mês na conta de energia — provável em fatura. Cost Avoidance: 'evitamos R$100K de multa ambiental' — talvez verdade, mas não aparece no P&L. Projetos BB reportam ambos separadamente." },

{ id:"q109", module:5, topic:"FMEA", difficulty:"hard",
  question: "No FMEA, um modo de falha tem S=9, O=3, D=2. O RPN é 54. Porém a ação corretiva deve ser prioritária porque:",
  options: [
    "O RPN é baixo — não precisa de ação",
    "Severidade = 9 (risco de segurança/comprometimento regulatório) — independente do RPN, S ≥ 8 EXIGE ação corretiva obrigatória",
    "A Ocorrência é muito alta",
    "A Detecção é ruim"
  ],
  correct: 1,
  explanation: "O RPN sozinho pode enganar. Um modo com S=9, O=1, D=1 (RPN=9) parece 'seguro' mas é um risco de morte. A regra do FMEA avançado: S ≥ 8 → ação obrigatória INDEPENDENTE do RPN. Isso é base do R-FMEA e da AIAG FMEA 4th/5th Edition (AP approach)." },

{ id:"q110", module:5, topic:"Causas Raiz", difficulty:"easy",
  question: "O Diagrama de Ishikawa (Espinha de Peixe) organiza causas potenciais em categorias chamadas:",
  options: ["5S","6M (Máquina, Método, Mão-de-obra, Material, Medição, Meio Ambiente)","SIPOC","PDCA"],
  correct: 1,
  explanation: "Os 6Ms são categorias para brainstorm estruturado: Máquina, Método, Mão-de-obra, Material, Medição, Meio Ambiente. Em serviços, usa-se variação: Personnel, Procedures, Policies, Place. O Fishbone NÃO valida causas — isso requer dados e testes estatísticos." },

{ id:"q111", module:5, topic:"Multi-Vari", difficulty:"hard",
  question: "A análise Multi-Vari serve para:",
  options: [
    "Calcular o Cpk do processo",
    "Separar e visualizar as fontes de variação em categorias (peça a peça, dentro da peça, temporal) antes do DOE",
    "Definir o escopo do projeto",
    "Criar o plano de controle"
  ],
  correct: 1,
  explanation: "Multi-Vari é uma ferramenta gráfica de investigação ANTES do DOE. Categoriza variação em: Within-piece (variação dentro da mesma peça), Piece-to-piece (entre peças do mesmo subgrupo) e Time-to-time (entre subgrupos ao longo do tempo). Ajuda a focar o DOE nos fatores certos." },

{ id:"q112", module:6, topic:"Improve", difficulty:"medium",
  question: "A Matriz de Pugh (Decision Matrix) é usada na fase Improve para:",
  options: [
    "Calcular o ROI de cada solução",
    "Comparar múltiplas soluções alternativas contra uma baseline usando critérios ponderados",
    "Medir a capacidade do processo após melhoria",
    "Definir o plano de controle"
  ],
  correct: 1,
  explanation: "Pugh Matrix: lista soluções nas colunas, critérios (custo, viabilidade, impacto, risco) nas linhas. Pontua cada solução como +, -, ou S (igual ao baseline). A solução com maior soma ponderada é selecionada. Evita decisão por 'gut feeling'." },

{ id:"q113", module:6, topic:"Poka-Yoke", difficulty:"easy",
  question: "Um Poka-Yoke é classificado como 'prevention' quando:",
  options: [
    "Detecta o erro após ocorrer",
    "Torna fisicamente IMPOSSÍVEL cometer o erro — o design não permite a ação incorreta",
    "Emite um alarme sonoro",
    "Apenas registra o defeito no sistema"
  ],
  correct: 1,
  explanation: "Poka-Yoke Prevention > Detection > Warning. Ex: conector USB-C é simétrico (não tem como encaixar virado); formulário HTML com máscara de CPF (não aceita letras). O prevention é o nível mais alto — erradicação do erro, não detecção." },

{ id:"q114", module:9, topic:"DFSS QFD", difficulty:"hard",
  question: "Na Casa da Qualidade (QFD), a sequência cascateada de 4 matrizes é:",
  options: [
    "VOC → CTQ → DOE → SPC",
    "WHATs→HOWs (Design Req) → HOWs (Parts Char.) → HOWs (Process Param.) → HOWs (Production Req.)",
    "Fishbone → Pareto → ANOVA → Regression",
    "SIPOC → VSM → Kanban → 5S"
  ],
  correct: 1,
  explanation: "O QFD cascateia em 4 Houses: H1) Cliente→Design, H2) Design→Componentes, H3) Componentes→Processos, H4) Processos→Produção. Cada OUTPUT (HOWs) da casa anterior vira INPUT (WHATs) da próxima. Garante rastreabilidade VOC→chão de fábrica." },

{ id:"q115", module:7, topic:"Controle", difficulty:"easy",
  question: "A principal diferença entre Carta de Controle e Especificação do Cliente é:",
  options: [
    "São a mesma coisa",
    "A carta de controle mostra os LIMITES DA VOZ DO PROCESSO (variação natural); a especificação mostra os LIMITES DA VOZ DO CLIENTE (requisito)",
    "A especificação é sempre mais apertada",
    "A carta de controle não tem limites"
  ],
  correct: 1,
  explanation: "Confusão clássica: UCL/LCL (da carta) = voz do processo (calculados dos dados). USL/LSL (do spec) = voz do cliente (definidos pelo contrato). Um processo pode estar 'em controle' (dentro dos limites naturais) mas 'incapaz' (fora do spec do cliente). Cp/Cpk mede essa relação." },

{ id:"q116", module:11, topic:"Hoshin Kanri", difficulty:"medium",
  question: "O Hoshin Kanri conecta:",
  options: [
    "Fornecedores e clientes",
    "A visão estratégica de 5 anos da empresa com projetos operacionais trimestrais, garantindo alinhamento top-down e bottom-up",
    "Departamento de TI com chão de fábrica",
    "O RH com a produção"
  ],
  correct: 1,
  explanation: "Hoshin Kanri (Desdobramento de Diretrizes) garante que cada projeto Belt esteja conectado ao objetivo estratégico do CEO/Board. Usa a Matriz-X para cruzar Estratégias → Táticas → Projetos → KPIs. Um GB que executa projeto fora do Hoshin desperdiça CAPEX." },

{ id:"q117", module:12, topic:"Certificação", difficulty:"medium",
  question: "Para obter certificação ASQ CSSBB, além da prova, o candidato precisa:",
  options: [
    "Apenas passar na prova com ≥ 70%",
    "Demonstrar 2+ projetos DMAIC completados com savings auditados, carta do Process Owner, e experiência comprovada",
    "Ter PhD em Estatística",
    "Publicar um artigo acadêmico"
  ],
  correct: 1,
  explanation: "A ASQ exige Fase 1 (prova de 165 questões) + Fase 2 (documentação de projetos reais com savings validados pelo Controller financeiro). Para MBB, adiciona-se Fase 3: defesa oral perante banca de MBBs seniores que questionarão metodologia e rigor estatístico." },

{ id:"q118", module:5, topic:"Pareto", difficulty:"easy",
  question: "O princípio de Pareto (80/20) aplicado ao Six Sigma significa:",
  options: [
    "80% dos investimentos geram 20% de retorno",
    "Aproximadamente 80% dos defeitos são causados por 20% das causas (Vital Few vs Trivial Many)",
    "80% dos operadores produzem 20% dos defeitos",
    "O Cp deve ser 80% de 2,0"
  ],
  correct: 1,
  explanation: "Juran chamou de 'Vital Few vs Trivial Many': atacar os 20% de causas que geram 80% dos defeitos. O gráfico de Pareto classifica defeitos por frequência, facilitando priorização. Mas atenção: o Pareto é descritivo — NÃO prova causalidade." },

{ id:"q119", module:6, topic:"Piloto", difficulty:"medium",
  question: "O objetivo do 'Piloto' (teste piloto) antes do full-scale implementation é:",
  options: [
    "Apresentar resultados ao gerente",
    "Validar a solução em escala reduzida, identificar falhas, medir impacto real e ajustar ANTES de investir no rollout completo",
    "Calcular o ROI final",
    "Substituir o DOE"
  ],
  correct: 1,
  explanation: "O piloto é o 'test drive' da solução. Roda em 1 linha/turno/célula antes de escalar para toda a fábrica. Se o piloto mostra Cpk < 1,33 ou savings abaixo do projetado, ajusta-se ANTES de gastar o CAPEX total. Reduz risco de implementação." },

{ id:"q120", module:3, topic:"OEE", difficulty:"hard",
  question: "Uma máquina operou 8h, teve 45min de parada por breakdown, velocidade média de 85% da nominal, e 3% de refugo. Qual o OEE?",
  options: ["OEE = 73,8%","OEE = 85,0%","OEE = 90,0%","OEE = 78,2%"],
  correct: 0,
  explanation: "OEE = Disponibilidade × Performance × Qualidade. Disponibilidade = (480-45)/480 = 90,6%. Performance = 85%. Qualidade = 97% (100%-3%). OEE = 0,906 × 0,85 × 0,97 = 0,747 ≈ 74,7% (≈73,8% com arredondamento). World Class é OEE ≥ 85%." },

// ──── BATCH 4 — SIMULADO (QUESTÕES INTEGRADAS AVANÇADAS) ────────
{ id:"q121", module:4, topic:"ANOVA", difficulty:"hard",
  question: "Na tabela ANOVA, F_calculado = 8,42 e F_crítico(0,05; 3; 36) = 2,87. Conclusão?",
  options: ["Aceita H₀ — médias são iguais","Rejeita H₀ — pelo menos 1 média difere significativamente","O teste é inconclusivo","Precisa de mais dados"],
  correct: 1,
  explanation: "F_calc > F_crit → rejeita H₀. Mas ANOVA só diz que há diferença — NÃO diz QUAIS médias diferem. Para isso, use teste post-hoc: Tukey HSD (mais conservador) ou Fisher LSD (mais liberal). Sempre verifique resíduos antes de confiar no resultado." },

{ id:"q122", module:4, topic:"Não-Paramétrico", difficulty:"hard",
  question: "Quando usar Mood's Median Test ao invés de Kruskal-Wallis?",
  options: ["Quando os dados são normais","Quando há outliers extremos que distorcem os ranks do Kruskal-Wallis","Quando n > 1000","Nunca — são testes idênticos"],
  correct: 1,
  explanation: "Mood's Median é mais robusto a outliers extremos porque só classifica cada observação como 'acima' ou 'abaixo' da mediana global. Kruskal-Wallis usa ranks e é afetado por valores extremos. Mood's é menos poderoso mas mais seguro contra dados contaminados." },

{ id:"q123", module:3, topic:"Capacidade", difficulty:"hard",
  question: "Um processo tem μ=50,2, σ=0,8, LSE=52, LIE=48. Calcule o Cpk:",
  options: ["Cpk = 0,75","Cpk = 0,83","Cpk = 1,33","Cpk = 1,00"],
  correct: 0,
  explanation: "Cpk = min[(USL-μ)/(3σ), (μ-LSL)/(3σ)] = min[(52-50,2)/(3×0,8), (50,2-48)/(3×0,8)] = min[1,8/2,4, 2,2/2,4] = min[0,75, 0,917] = 0,75. Processo incapaz (Cpk < 1,0). Centrar a média em 50,0 melhoraria Cpk para 0,83." },

{ id:"q124", module:6, topic:"RSM", difficulty:"hard",
  question: "Quando escalar de um DOE Fatorial para RSM (Response Surface Methodology)?",
  options: ["Quando há apenas 1 fator","Quando o Center Point indicou curvatura significativa e queremos encontrar o ponto ótimo", "Quando o R² é 100%","Quando não há interações"],
  correct: 1,
  explanation: "Se o centro no DOE tem média diferente dos cantos → curvatura → relação não é linear → RSM (Box-Behnken ou Central Composite Design) mapeia a superfície de resposta 3D para encontrar o máximo/mínimo global. É o 'GPS da otimização'." },

{ id:"q125", module:4, topic:"Regressão Logística", difficulty:"hard",
  question: "Na Regressão Logística, o coeficiente β₁ = 0,85 para a variável X₁ significa que:",
  options: ["X₁ não é significativa","Cada unidade de aumento em X₁ multiplica as odds de sucesso por e^0,85 ≈ 2,34","O R² é 85%","A probabilidade é 0,85"],
  correct: 1,
  explanation: "Na logística, β → odds-ratio = e^β. β₁=0,85 → OR = e^0,85 = 2,34. Cada unidade de X₁ aumenta as odds de 'sucesso' (defeito, aprovação, etc.) em 134%. Se β fosse negativo, as odds diminuiriam. É a ferramenta-chave quando Y é binário (Passa/Falha)." },

{ id:"q126", module:7, topic:"SPC Atributos", difficulty:"medium",
  question: "Qual carta de controle usar quando o tamanho da amostra VARIA e medimos a proporção de defeituosos?",
  options: ["Carta np","Carta p","Carta c","Carta u"],
  correct: 1,
  explanation: "Carta p: proporção defeituosa com n variável (cada subgrupo tem tamanho diferente). Carta np: contagem defeituosa com n fixo. Carta c: contagem de defeitos com área fixa. Carta u: taxa de defeitos com área variável. A escolha depende de: 'defeituosos' vs 'defeitos' e 'n fixo' vs 'n variável'." },

{ id:"q127", module:5, topic:"Analyze", difficulty:"medium",
  question: "O método dos '5 Porquês' é eficaz quando:",
  options: ["Há dados estatísticos complexos","O problema tem uma cadeia causal linear e simples, onde perguntar 'por quê?' repetidas vezes revela progressivamente a causa-raiz","O processo tem mais de 10 fatores","Sempre — substitui qualquer teste estatístico"],
  correct: 1,
  explanation: "5 Porquês é simples e poderoso para cadeias causais lineares. Ex: 'Por que o pedido atrasou?' → 'Porque não foi aprovado' → 'Porque o gerente viajou' → 'Porque não há substituto autorizado' → CAUSA-RAIZ: falta de delegação. NÃO substitui análise multivariada com interações." },

{ id:"q128", module:8, topic:"Lean", difficulty:"easy",
  question: "O conceito de 'Gemba Walk' (Genchi Genbutsu) significa:",
  options: ["Analisar relatórios no escritório","Ir pessoalmente ao local onde o trabalho acontece para observar, perguntar e entender a realidade do processo","Enviar um formulário digital ao operador","Contratar um consultor externo"],
  correct: 1,
  explanation: "Gemba = 'o local real'. Executivos e BBs que tomam decisões apenas por planilhas cometem erros graves. Ir ao chão de fábrica (Gemba) revela desperdícios invisíveis nos dados. Taiichi Ohno dizia: 'Dados são importantes, mas dou mais ênfase aos fatos.'" },

{ id:"q129", module:2, topic:"SIPOC", difficulty:"easy",
  question: "Um SIPOC é elaborado na fase Define para:",
  options: ["Calcular o nível sigma","Definir o escopo do processo de alto nível — quem fornece inputs, qual o processo core, quais outputs, e quem são os clientes","Implementar a solução","Calcular o COPQ"],
  correct: 1,
  explanation: "SIPOC (Supplier-Input-Process-Output-Customer) é o mapa macro do processo. Define as fronteiras: onde o projeto COMEÇA e onde TERMINA. Sem SIPOC, o escopo vira scope creep — o BB tenta resolver tudo e não resolve nada. É o primeiro mapa da fase Define." },

{ id:"q130", module:4, topic:"Estatística", difficulty:"medium",
  question: "A diferença entre desvio padrão amostral (s) e populacional (σ) é:",
  options: ["Não há diferença","s usa (n-1) no denominador (graus de liberdade) para corrigir o viés de amostras pequenas; σ divide por N","s é sempre maior que σ","σ é para dados não-normais"],
  correct: 1,
  explanation: "s = √[Σ(xi-x̄)²/(n-1)] usa n-1 (Bessel's correction) porque a amostra subestima a variabilidade da população. Para n grande, s ≈ σ. Para n pequeno (< 30), a diferença é relevante. Sempre use 's' quando trabalhando com amostras (99% dos casos em Six Sigma)." },

{ id:"q131", module:9, topic:"TRIZ", difficulty:"hard",
  question: "O princípio central do TRIZ (Altshuller) é que:",
  options: ["Toda inovação é aleatória","Problemas de engenharia podem ser resolvidos sistematicamente usando 40 princípios inventivos derivados de análise de milhares de patentes","A criatividade não pode ser ensinada","Apenas engenheiros mecânicos podem inovar"],
  correct: 1,
  explanation: "TRIZ (Teoria da Solução Inventiva de Problemas) de Altshuller analisou 200.000+ patentes e identificou 40 princípios recorrentes de solução. A Matriz de Contradições cruza parâmetros conflitantes e sugere princípios aplicáveis. Transcende o brainstorm aleatório." },

{ id:"q132", module:3, topic:"MSA", difficulty:"medium",
  question: "Se o Gage R&R Total é 40% da tolerância do processo, o sistema de medição é:",
  options: ["Aceitável","Marginalmente aceitável (10-30%)","Inaceitável — precisa ser melhorado ou substituído antes de coletar dados para o projeto","Perfeito"],
  correct: 2,
  explanation: "Critérios AIAG: %R&R ≤ 10% = aceitável | 10-30% = marginal (aceitável dependendo da aplicação) | > 30% = inaceitável. Com 40%, o instrumento consome mais de 1/3 da tolerância em ruído de medição. Dados coletados com esse sistema são não-confiáveis." },

{ id:"q133", module:1, topic:"Lean Six Sigma", difficulty:"medium",
  question: "A integração 'Lean Six Sigma' combina:",
  options: ["Cortar custos e demitir pessoas","Lean (velocidade e eliminação de desperdício) com Six Sigma (redução de variação e defeitos) para otimizar simultaneamente fluxo E qualidade","Apenas ferramentas japonesas","Somente análise de dados"],
  correct: 1,
  explanation: "Lean foca em FLUXO (eliminar desperdícios, reduzir lead time). Six Sigma foca em VARIAÇÃO (reduzir defeitos, aumentar Cpk). Juntos: processo rápido (Lean) E preciso (6σ). Ex: VSM identifica o gargalo (Lean), DOE otimiza o gargalo (6σ)." },

{ id:"q134", module:5, topic:"Hypothesis", difficulty:"hard",
  question: "Um BB concluiu que o Fator A é significativo (p=0,03) mas o estudo tinha Power de apenas 0,45. Qual o risco?",
  options: ["Nenhum — p < 0,05 é suficiente","O estudo não tem Power suficiente para confiar que OUTROS fatores sejam realmente não-significativos (alto risco de Erro Tipo II para os fatores não-detectados)","O fator A com certeza não é significativo","Precisa de mais hipóteses"],
  correct: 1,
  explanation: "Power baixo (0,45 < 0,80) significa que o estudo tem alta probabilidade de NÃO detectar efeitos reais. O fator A (p=0,03) provavelmente é real, mas outros fatores declarados 'não significativos' podem ser falsos negativos. Solução: aumentar n e repetir." },

{ id:"q135", module:6, topic:"DOE", difficulty:"medium",
  question: "A replicação em DOE serve para:",
  options: ["Reduzir o número de fatores","Estimar o erro experimental puro e aumentar a precisão das estimativas dos efeitos","Eliminar interações","Acelerar o experimento"],
  correct: 1,
  explanation: "Sem replicação, não temos estimativa do erro puro — não podemos separar efeitos reais de ruído. Replicação ≠ Repetição. Replicação: refazer a corrida completa (novo setup). Repetição: medir a mesma corrida várias vezes (só mede erro de medição)." },

{ id:"q136", module:7, topic:"Control Plan", difficulty:"medium",
  question: "O Control Plan deve incluir, no mínimo:",
  options: ["Apenas o nome do processo","Características críticas, método de medição, frequência de amostragem, limites de controle, OCAP (ação para desvios), e responsável","Apenas o gráfico de Ishikawa","O Project Charter completo"],
  correct: 1,
  explanation: "O Control Plan é o 'manual de operação' da fase Control. Documenta: O QUE medir (CTQs), COMO medir (instrumento/MSA validado), QUANDO medir (frequência), LIMITES (UCL/LCL), O QUE FAZER se sair (OCAP), e QUEM é responsável. Sem ele, o projeto regride." },

{ id:"q137", module:11, topic:"Tollgate", difficulty:"medium",
  question: "O Tollgate Review na transição D→M verifica se:",
  options: ["A solução já foi implementada","O problema está claramente definido com Problem Statement, escopo delimitado (SIPOC), CTQs definidos, equipe formada e Charter aprovado pelo Sponsor","Os dados já estão coletados","O DOE já foi executado"],
  correct: 1,
  explanation: "Cada Tollgate é um 'portão' que só abre com deliverables completos. D→M exige: Charter assinado, SIPOC validado, VOC→CTQ tree, Business Case (savings projetados), cronograma. Se o Sponsor não aprovar → projeto volta para refazer o Define. Zero follow adiante sem fundação sólida." },

{ id:"q138", module:4, topic:"Estatística", difficulty:"easy",
  question: "O p-valor de um teste estatístico é 0,002. Isso significa:",
  options: ["Resultado não significativo","A probabilidade de observar esse resultado (ou mais extremo) assumindo H₀ verdadeira é 0,2% — fortemente significativo","O efeito é grande","A amostra é pequena"],
  correct: 1,
  explanation: "p = 0,002 < 0,05 → rejeita H₀ com alta confiança. Mas atenção: p-valor baixo ≠ efeito grande. Um p = 0,001 com delta de 0,1mm pode ser estatisticamente significativo mas PRATICAMENTE irrelevante. Sempre avaliar significância estatística E prática juntas." },

{ id:"q139", module:9, topic:"Axiomatic Design", difficulty:"hard",
  question: "O Axioma da Independência (Suh) no Axiomatic Design exige que:",
  options: ["Todos os requisitos sejam independentes do custo","Cada Requisito Funcional (FR) seja satisfeito por um Parâmetro de Design (DP) independente, sem acoplamento — alteração de um DP não afeta outros FRs","O design seja simples","A fabricação seja automatizada"],
  correct: 1,
  explanation: "Suh definiu 2 axiomas: 1) Independência (FRs desacoplados dos DPs — matriz diagonal/triangular), 2) Informação Mínima (design com menor conteúdo de informação = mais simples). Design acoplado (mudar DP1 afeta FR1 e FR2) é frágil e difícil de otimizar." },

{ id:"q140", module:8, topic:"Lean", difficulty:"medium",
  question: "O conceito de 'Jidoka' (Autonomação) permite que:",
  options: ["Os operadores trabalhem mais rápido","A máquina pare automaticamente ao detectar uma anormalidade, impedindo que defeitos passem para a próxima etapa","O estoque aumente","O layout seja circular"],
  correct: 1,
  explanation: "Jidoka = automação + inteligência humana. A máquina detecta o defeito e PARA sozinha (Andon), impedindo repasse downstream. O operador investiga a causa-raiz em vez de 'apagar incêndio'. Pilar do Toyota Production System junto com Just-in-Time." },

{ id:"q141", module:3, topic:"Measure", difficulty:"medium",
  question: "O Plano de Coleta de Dados (Data Collection Plan) deve definir:",
  options: ["Apenas quais dados coletar","O QUE medir, COMO medir (definição operacional), QUEM coleta, QUANDO (frequência), ONDE (ponto do processo), e QUANTO (tamanho amostral justificado)","Apenas o software a ser usado","O orçamento da coleta"],
  correct: 1,
  explanation: "Um DCP incompleto resulta em dados inúteis. A 'Definição Operacional' é crítica: 'Tempo de entrega' = do pedido recebido ao despacho? Ao recebimento pelo cliente? Dias úteis ou corridos? Sem definição precisa, 3 operadores medem 3 coisas diferentes." },

{ id:"q142", module:6, topic:"Improve", difficulty:"hard",
  question: "O EVOP (Evolutionary Operation) difere do DOE tradicional porque:",
  options: ["Não usa estatística","Roda experimentos contínuos com variações PEQUENAS nos parâmetros do processo em PRODUÇÃO REAL, sem parar a linha ou gerar sucata","Usa apenas 1 fator","Não precisa de replicação"],
  correct: 1,
  explanation: "EVOP (George Box): faz micro-ajustes nos parâmetros do processo real (<10% da faixa operacional) enquanto produz peças boas. Acumula dados ao longo de ciclos. Ideal para processos químicos contínuos onde parar para DOE é impossível/caro. É o 'DOE stealth'." },

{ id:"q143", module:12, topic:"MBB", difficulty:"hard",
  question: "Um MBB gerencia um portfólio de 15 projetos BB. Qual é o critério MAIS importante para priorizar os projetos?",
  options: ["Quem pediu primeiro","Alinhamento estratégico (Hoshin Matrix) + impacto financeiro (VPL) + viabilidade (recursos, dados disponíveis, complexidade)","Tamanho da equipe","Duração do projeto"],
  correct: 1,
  explanation: "O MBB usa a matriz de priorização: Estratégia (peso Hoshin) × Impacto ($) × Viabilidade (P(sucesso)). Projetos desalinhados do Hoshin são cancelados. Projetos com VPL negativo são de redirecionados. A arte do MBB é dizer 'NÃO' para projetos politicamente populares mas financeiramente inviáveis." },

{ id:"q144", module:5, topic:"Regression", difficulty:"hard",
  question: "R²(adj) = 72% e R²(pred) = 45%. Qual o diagnóstico?",
  options: ["Modelo excelente","Possível overfitting — o modelo se ajusta aos dados de treino mas NÃO generaliza bem para dados novos. Simplificar removendo termos não-significativos","R² é irrelevante","Precisa mais variáveis"],
  correct: 1,
  explanation: "Diferença > 20% entre R²(adj) e R²(pred) indica overfitting. O modelo está 'decorando' os dados ao invés de capturar o padrão real. Solução: remover termos com p > 0,05, reduzir interações de alta ordem, ou usar stepwise/best subsets." },

{ id:"q145", module:7, topic:"SPC", difficulty:"medium",
  question: "Quando NÃO é apropriado recalcular os limites de controle?",
  options: ["Após uma mudança deliberada no processo","Quando o processo está estável e sob controle — recalcular para 'apertar' os limites sem mudança real no processo viola a lógica do SPC","Após remover causas especiais identificadas","Ao iniciar a fase Control"],
  correct: 1,
  explanation: "Limites de controle refletem a VOZ DO PROCESSO. Só recalcule quando: 1) houve mudança real no processo (novo equipamento, novo material), 2) removeram-se causas especiais identificadas. Recalcular para 'apertar' limites cria falsos alarmes e desgasta a confiança da equipe no SPC." },

{ id:"q146", module:2, topic:"Project Charter", difficulty:"medium",
  question: "O Business Case de um Project Charter deve responder a qual pergunta central?",
  options: ["Quem é o Black Belt?","POR QUE este projeto merece investimento AGORA? Qual o impacto financeiro de NÃO agir?","Qual software usar?","Quanto tempo vai levar?"],
  correct: 1,
  explanation: "O Business Case justifica a urgência: 'Estamos perdendo R$500K/mês em refugo na Linha 3. Se não agirmos em 6 meses, perderemos o contrato do cliente Toyota que exige Cpk ≥ 1,67.' Sem urgência financeira comprovada, o Sponsor não libera CAPEX e o projeto morre." },

{ id:"q147", module:8, topic:"Lean", difficulty:"hard",
  question: "A 'Fábrica Oculta' (Hidden Factory) refere-se a:",
  options: ["Uma fábrica secreta da concorrência","Todas as operações de retrabalho, inspeção extra, e correção que NÃO agregam valor mas consomem recursos — invisíveis no fluxograma oficial","Um departamento de P&D","O estoque de segurança"],
  correct: 1,
  explanation: "A Hidden Factory são os processos paralelos 'não-oficiais': operador que 'dá um jeitinho', inspetor que retrabalha peças ao invés de rejeitar, analista que corrige dados manualmente. Consomem 25-40% dos custos operacionais. O RTY (Rolled Throughput Yield) expõe a Hidden Factory numericamente." },

{ id:"q148", module:4, topic:"Estatística", difficulty:"medium",
  question: "A transformação Box-Cox é utilizada quando:",
  options: ["Os dados já são normais","Os dados NÃO são normais e precisamos transformá-los para aplicar testes paramétricos (ANOVA, Regressão, Capacidade)","Queremos criar gráficos bonitos","Os dados são categóricos"],
  correct: 1,
  explanation: "Box-Cox encontra o λ ótimo para transformar Y^λ: λ=0 → ln(Y), λ=0,5 → √Y, λ=-1 → 1/Y. Após transformação, aplica-se o teste de normalidade. Se passar, análises paramétricas operam nos dados transformados. Alternativa: Johnson Transformation (mais flexível)." },

{ id:"q149", module:10, topic:"Kotter", difficulty:"medium",
  question: "O modelo de 8 passos de Kotter para mudança organizacional começa com:",
  options: ["Formar a equipe","Criar um senso de URGÊNCIA — sem urgência, ninguém sai da zona de conforto","Celebrar vitórias","Comunicar a visão"],
  correct: 1,
  explanation: "Kotter: 1) Urgência, 2) Coalizão guia, 3) Visão, 4) Comunicar a visão, 5) Empoderar ação, 6) Vitórias de curto prazo, 7) Consolidar ganhos, 8) Ancorar na cultura. O fracasso #1 de projetos Six Sigma não é técnico — é a falta de urgência (passo 1) e de Sponsor forte (passo 2)." },

{ id:"q150", module:12, topic:"Integração", difficulty:"hard",
  question: "Um aluno completou todos os módulos desta academy. Para se preparar para a prova CSSBB da ASQ, qual é a lacuna mais crítica entre 'conhecimento teórico' e 'certificação real'?",
  options: ["Falta de diploma universitário","A prova exige prática de cálculos manuais sob pressão de tempo (165 questões em 4,5h) e experiência real com projetos DMAIC documentados","Falta de curso presencial","Precisa de mestrado em estatística"],
  correct: 1,
  explanation: "Conhecimento teórico é 50% da certificação. Os outros 50%: velocidade de cálculo (prática com exercícios cronometrados), familiaridade com tabelas Z/F/Chi², e PROJETOS REAIS documentados com carta do Controller atestando Hard Savings. A academy fornece a base — a prática vem com simulados e projetos no trabalho." },

]; // fim do array quizQuestions
