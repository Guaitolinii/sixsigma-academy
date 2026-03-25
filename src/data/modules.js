// ============================================================
// data_modules.js — Conteúdo completo dos 12 módulos
// ============================================================

export const modules = [

// ── MÓDULO 1 ─────────────────────────────────────────────
{
  id: 1,
  title: "Fundamentos do Six Sigma (Nível Executivo)",
  description: "História, Filosofia Matemática, COPQ (Cost of Poor Quality) e Estrutura de Governança Belt.",
  difficulty: "Avançado",
  lessons: [
    {
      id: "1.1",
      title: "Gênese e a Matemática do Six Sigma",
      content: `
# A Matemática e Filosofia do Six Sigma

Six Sigma não é apenas uma "iniciativa de qualidade"; é uma **metodologia quantitativa de gestão estratégica** com o objetivo de reduzir drasticamente a variabilidade, otimizando o fluxo de caixa (bottom-line) pela eliminação de desperdícios sistêmicos.

## A Gênese Histórica

Originada na **Motorola (1986)** pelo engenheiro Bill Smith e impulsionada por Bob Galvin, a metodologia surgiu da percepção matemática de que a "complexidade e a variação nos processos de manufatura causavam defeitos ocultos antes que o produto saísse da fábrica". Em 1995, **Jack Welch** (CEO da General Electric) tornou o Six Sigma a filosofia central da GE, conectando bônus executivos diretamente ao treinamento Black Belt, escalando o framework globalmente com bilhões relatados em *Hard Savings*.

## O que estatisticamente significa "Seis Sigma"?

A letra grega **σ (sigma)** representa o **Desvio Padrão**, uma medida quadrática de variância ou "afastamento" dos dados em relação à média ($\mu$). 

Um processo "6 Sigma" significa que a tolerância limite do cliente (Limite de Especificação Superior ou Inferior) está localizada a uma distância de **6 desvios padrões** de distância da média do processo. Isso garante que a esmagadora maioria da curva de distribuição normal flutua de modo seguro, "cabendo" com enorme folga dentro do que o cliente aceita.

| Nível Sigma | DPMO (Defeitos por Milhão) | Probabilidade de Sucesso | Casos Práticos |
|-------------|----------------------------|--------------------------|----------------|
| **2σ**      | 308.538                    | 69,1%                    | Nível de startups imaturas |
| **3σ**      | 66.807                     | 93,3%                    | Média das indústrias hoje  |
| **4σ**      | 6.210                      | 99,4%                    | Hospitais medianos         |
| **6σ**      | 3,4                        | 99,99966%                | Aviação comercial segura   |

## O Teorema do Top Shift de 1.5 Sigma

Uma dúvida clássica acadêmica: a área estatística fora de 6 sigmas de uma curva Normal exata (z=6) equivale a **0,002 DPMO**, não 3,4. De onde vêm os 3,4 DPMO?

A Motorola descobriu empiricamente que os processos sofrem entropia natural. Ferramentas desgastam, turnos mudam, fornecedores sofrem variações inter-lotes. Eles comprovaram que a média de um processo, a longo prazo, **desliza ou desvia (Shift)** tipicamente cerca de **1,5 \u03c3** em direção a um dos limites de especificação.

Ao calcularmos a probabilidade de falha de uma curva cujo limite é Z=6, mas que *escorregou 1.5 sigma* (ou seja, uma cauda a Z=4.5), a área sob a cauda defeituosa passa exatamente a ser **3,4 DPMO**.

## Lean vs. Six Sigma: Integração Sinergética

Historicamente antagônicos, hoje operam fundidos. 
* **Lean (Velocidade & Eficiência):** Tense em reduzir LEAD TIME cortando o Munda, Mura, Muri (Desperdícios, Assimetria, Sobrecarga). Ferramentas: VSM, Quick Changeover (SMED), Kanban.
* **Six Sigma (Qualidade & Previsibilidade):** Foca em comprimir a VARIABILIDADE do Y nas tolerâncias do cliente pelo mapeamento da equação $Y = f(X_i)$. Ferramentas: DOE, SPC, Regressão.

**Lean estabiliza o caos (o fluxo), Six Sigma otimiza a precisão do alvo.**
      `
    },
    {
      id: "1.2",
      title: "Cost of Poor Quality (COPQ)",
      content: `
# O Custo da Baixa Qualidade (COPQ)

O **COPQ (Cost of Poor Quality)** é o idioma que os Black Belts usam para convencer a diretoria a aprovar projetos (Project Charters). Ele mensura financeiramente "quanto custa fazer errado hoje". Profissionais negligenciam que **15% a 30% da receita bruta** de indústrias ineficientes é fagocitada pelo COPQ silencioso.

## As 4 Categorias de Custos da Qualidade ( PAF / Juran Model )

O modelo clássico se divide em **Custos de Conformidade** (Bons) e **Custos de Não Conformidade** (Ruins):

### 1. Custos de Prevenção (Prevention Costs) - *Conformidade*
Custos investidos intensamente **antes** do produto/serviço nascer, visando mitigar a raiz das falhas preventivamente.
* Exemplos: Treinamentos Master Black Belt, Poka-Yokes mecânicos de segurança, Design for Six Sigma (DFSS), Manutenção Produtiva Total (TPM), Auditorias de fornecedores N1.
* *Impacto:* Cada $1 investido aqui salva historicamente $10 nas outras categorias.

### 2. Custos de Avaliação/Inspeção (Appraisal Costs) - *Conformidade*
Custos de manter inspetores para "separar o joio do trigo" antes de entregar o lote. 
* Exemplos: Setup de testadores eletrônicos, auditores de linha no chão de fábrica, sistemas de visão computacional de triagem, testes destrutivos de tração em peças de aço.
* *Atenção:* O Lean Six Sigma combate a dependência crônica da inspeção. Qualidade se **fabrica**, não se **inspeciona**.

### 3. Custos de Falha Interna (Internal Failure Costs) - *Não Conformidade*
Defeitos descobertos e contidos **dentro da sua base**, antes do cliente ver. Doí na margem, mas salva a reputação.
* Exemplos: Sucata (Scrap), re-trabalho demorado nas chapas de pedra, downtime de linha parada para corrigir problema sistêmico de injeção, overtime (hora-extra) forçado por retrabalho.

### 4. Custos de Falha Externa (External Failure Costs) - *A Morte Corporativa*
Defeitos que escaparam do seu portão e **chegaram no bolso e nos olhos do cliente**. A categoria mais destrutiva por magnitudes logarítmicas.
* Exemplos: Custos severos de Recall de concessionárias, multas contratuais astronômicas de SLA em B2B, processos judiciais civis, perda intangível grave do "Market Share e Brand Reputation", cancelamentos raivosos em SaaS.

## A Dinâmica do Custo com Nível Sigma

Enquanto empresas subem de **Maturidade (3 Sigma para 6 Sigma)**:
1. O *COPQ Total* cai massivamente como % de faturamento;
2. Os drásticos *Custos de Falha Externa* são esmagados;
3. O budget transfere ligeiramente para *Custos de Prevenção*, invertendo o modelo de "Reação ao Fogo" para "Planejamento DFSS de Prancheta".
      `
    },
    {
      id: "1.3",
      title: "Arquitetura e Governança de Belts",
      content: `
# Arquitetura Estratégica Organizacional Belt

A implantação bem-sucedida do Six Sigma em corporações Globais (Fortune 500) jamais foca exclusivamente no ensino estatístico, mas recai fortemente no **Deployment e Change Management** humano na governança.

## A Hierarquia Estratégica Executiva

### 🏦 Executive Leadership / Steering Committee
* **Papel**: São C-Levels (CEO, CFO, COO) que alinham diretamente os vetores do programa LSS à DRE e visões do Balance Scorecard (BSC). Eles cobram as metas monetárias Hard Savings no final do trimestre fiscal.

### 🎯 Champion / Project Sponsor
* **Papel**: Diretor tático proprietário de uma grande Verba Monetária.
* **Características**: Ele *patrocina* o projeto do Black Belt. Destrava empecilhos burocráticos, intercede quando os gestores de área blindam seus silos departamentais e bloqueiam dados de acesso do BB. É ele quem rubrica e aceita os Soft/Hard Savings prometidos no Charter no final.

## A Hierarquia Tática e Operacional

### ⚫ Master Black Belt (MBB)
* **Status**: 100% Full-time. O arquiteto sênior das metodologias analíticas avançadas.
* **Função**: Responde pelo corpo de conhecimento. Ele que treina (Coach de coaches), certifica e orienta o pipeline técnico de *Black Belts e Green Belts*. Mentora análises não-lineares severas (Taguchi, Regressão Logística, Teoria de Restrições multi-nodes) e reporta progresso ao Champion.

### 🥋 Black Belt (BB)
* **Status**: 100% Full-time dedicado e focado em projetos Cross-functional Críticos Multiplicados.
* **Função**: Conduz 4 a 6 robustos projetos anuais. Domina o Minitab, estatística descritivo-inferencial, ANOVA iterativa multivariável, Design de Experimentos em 3 etapas e Análise Crítica dos gargalos do Value Stream. Lidera e guia times subordinados. Expectativa C-Level: Retorno Financeiro Massivo ($500k a $1M+ Savings Validados por Ano).

### 🟢 Green Belt (GB)
* **Status**: Part-time (~20 a 30% do tempo em processos LSS, restante na sua função natural corporativa - ex: Gestor de Turno, Engenheiro N2).
* **Função**: Lideram pequenos projetos ou sub-braços DMAIC dos projetos capitaneados pelo Black Belt dentro da própria área setorial de conforto deles. Utilizam estatística fundamental, Run Charts e Gráficos de Pareto.

### 🟡 Yellow Belt e ⚪ White Belt
* **Status**: Membros Pontuais da Equipe Operacional
* **Função**: Conhecem a linguagem básica e suportam a Coleta Extrema de Dados Limpos, identificam anomalias na causa-raiz vivenciada diretamente no Gemba. São os pilares de onde partem os Brainstormings valiosos (como mecânicos de voo suportando os engenheiros de design).
      `
    }
  ]
},

// ── MÓDULO 2 ─────────────────────────────────────────────
{
  id: 2,
  title: "Fase DEFINE — Engenharia de Requisitos",
  description: "Tradução Matemática do VOC (QFD), Kano Model, Formulação do Charter Financeiro e SIPOC Limits.",
  difficulty: "Avançado",
  lessons: [
    {
      id: "2.1",
      title: "Modelagem Matemática do Cliente",
      content: `
# Engenharia da Voz do Cliente (VOC)

Capturar a Voz do Cliente não é aplicar uma simples pesquisa de satisfação (NPS). É um processo de engenharia reversa para descobrir necessidades empíricas e transformá-las em especificações toleranciadas de engenharia.

> "A Qualidade é entendida no Lado D (Demanda) e Fabricada no Lado S (Supply)."

## O Modelo de Kano (Kano Model)

Criado por Noriaki Kano, este modelo bidimensional plota a **Satisfação do Cliente (Y)** contra a **Execução Funcional (X)**, estratificando requisitos em três vetores não-lineares:

### 1. Requisitos Básicos (Must-Be)
* **Dinâmica**: Se ausentes, geram fúria profunda. Se perfeitamente presentes, geram no máximo neutralidade (ninguém elogia um hotel por ter água no chuveiro).
* **Estrutura Six Sigma**: Estes são os *Critical to Safety (CTS)* e *Critical to Quality (CTQ)* mandatórios. Têm tolerâncias estatísticas rígidas.

### 2. Requisitos de Performance (One-Dimensional)
* **Dinâmica**: Correlação linear. Quanto mais, melhor (ex: vida útil da bateria de um celular, redução de preço, velocidade da internet).
* **Estrutura Six Sigma**: É aqui que o Black Belt trava suas guerras de regressão e benchmarks do mercado.

### 3. Delighters / Excitement (Atrativos)
* **Dinâmica**: Se não existirem, o cliente não sente falta pois não os esperava. Se existirem, causam *Wow Effect* e disparos de receita não linear. (ex: Câmera com IA que apaga objetos no fundo em 2020).
* **A Armadilha do Tempo**: Delighters de hoje são os Must-Be de amanhã. Ar Condicionado em carros já foi Delighter nos anos 90, e hoje é Must-Be.

## QFD: Quality Function Deployment (A Casa da Qualidade)

A Casa da Qualidade é uma matriz gigantesca que atua como tradutora bilíngue entre o Cliente e o Engenheiro. Sem o QFD, as equipes otimizam os Xs errados.

**Como funciona a Matriz QFD Nível 1:**
1. **Parede Esquerda (Os 'WHATs')**: Lista as demandas puras do Kano Model pontuadas por Importância (1 a 10). Ex: *A porta do carro não pode fazer barulho ao fechar.*
2. **Teto (Os 'HOWs')**: Requisitos Técnicos de Engenharia independentes. Ex: *Pressão da Borda de Eva, Torque da Dobradiça do pino C, Peso da Folha da Porta.*
3. **Sala Central (A Matriz de Relacionamento)**: Qual a força da relação entre "Barulho" e "Torque"? (0=Nenhum, 1=Fraco, 3=Médio, 9=Forte). 
4. **O Telhado Triangular (Matriz de Correlação)**: Os engenheiros mapeiam antagonismos. Se eu aumentar o "Peso da Porta" para reduzir o "Barulho", eu pioro o HOW de "Ergonomia de abertura". (Trade-offs negativos).
5. **Fundação**: Resulta num peso de importância técnico quantificado absoluto e relativo. Revela imediatamente em qual parte da máquina o Black Belt deve colocar seu foco analítico estatístico.
      `
    },
    {
      id: "2.2",
      title: "O P&L Project Charter",
      content: `
# Project Charter Financeiro (P&L)

Em nível Master Black Belt, o Project Charter não é um formulário Word para formalizar uma reunião; é um contrato de alocação de capital e fluxo de caixa contábil (P&L - Profit and Loss). Se não der lucro/Ebitda ou não mitigar perdas ativas (Avoidance), o projeto não passa no comitê.

## Problem Statement (A Declaração Implacável do Problema)

Uma declaração pífia assassina um projeto no primeiro dia. Ela deve conter 5 engrenagens (Os 5 W's):
- **What (Qual a métrica doente?)**: Taxa de Scrap do Polimento de Granitos Super Exóticos.
- **Where (Onde ela ocorre físicamente?)**: Na Linha de Politriz 4, Setor Norte.
- **When (Desde quando/Qual a janela de amostragem?)**: Medido entre Q1 e Q3 do ano corrente.
- **Magnitude (Quão ruim é o defeito matematicamente?)**: A média de descarte pulou da baseline histórica de 2.1% para 6.8% (\u03c3 = 1.3%).
- **Financial Pain (Qual a dor financeira DRE?)**: Este delta gerou perda acumulada de R$ 1.450.320 em lucros cessantes reportados pela Controladoria.

## O VPL (Valor Presente Líquido) de um Projeto

Antes de aprovar as horas da equipe, o Black Belt tem que defender o **ROI (Return on Investment)** com a Controladoria usando *Hard Savings* versus o *Custo do Projeto*:

**Inputs do VPL:**
1. Fluxo de Caixa Futuro (Savings em $/mês após o 'Control').
2. Vida útil da melhoria (ex: 24 a 36 meses). O LSS raramente projeta além de 3 anos por entropia corporativa.
3. WACC (Weighted Average Cost of Capital) como a Taxa Mínima de Atratividade (ex: 12% a.a).
4. Capex e Opex de Rampa (Custo do software, tempo faturado das 4 pessoas num Kaizen Blitz, peças de adequação IoT).

**Regra Dourada MBB:** Projetos de otimização de DMAIC quase sempre possuem Altíssimo VPL porque o Capex de implementação é irrisório num processo já existente quando comparado com construir uma linha nova inteira. 

## Definição de Escopo e "Fronteiras Sangrentas"

Uma falha primária de Green Belts é o **Scope Creep** (inchaço invisível). Para evitar isso:
* **In Scope**: Apenas Pás Eólicas do Modelo XA-90 fabricadas em Resina Expóxi N-4.
* **Out of Scope**: Modelos antigos, Pás fabricadas no exterior, Redesenho Químico da Resina (não será abordado DFSS, apenas o método de cura da fábrica local).
      `
    },
    {
      id: "2.3",
      title: "O Boundary SIPOC",
      content: `
# Construindo os Muros com o SIPOC

A transição entre o Define e a mergulho abismal dos dados no Measure exige a construção de um muro (boundaries) que delimite onde o projeto *Mata e Nasce*. Essa parede é o **SIPOC (Supplier, Input, Process, Output, Customer)**.

## Por que 30.000 pés de altitude?

Se você tentar desenhar o fluxograma detalhado (Activity Process Map com losangos de decisão, swimlanes, sub-rotinas) na fase Define, o time levará três meses e o projeto perderá o Momentum C-Level. 

O SIPOC obriga a equipe a focar nos **5 a 7 Macro Passos** que compõem a caixa preta do processo.

## A Dinâmica Operacional Inversa do SIPOC (COPIS)

O método mais eficiente em workshops Black Belt é não preencher da esquerda para a direita, mas sim do fim (Customer) ao início (Supplier):

1. **Customers (C)**: Quem sãos os recebedores internos (Próxima Máquina) ou externos (Mercado C-Level) que ditam a fronteira direita? (Ex: Gerente da Logística).
2. **Outputs (O)**: O que sai efetivamente na fronteira para eles? (Ex: Relatório Fiscal validado sob norma SOX; Peça embalada e paletizada em <40°C).
3. **Process (P)**: Quais as 5 a 7 etapas caixas contendo [Verbo + Substantivo]? (Ex: Misturar Químico, Assar Resina, Arrefecer Bloco). Evite condicionais "Se/Então".
4. **Inputs (I)**: Qual matéria prima pura, dado de ERP não formatado ou sinal eletrônico precisa entrar nos 7 macro processos? (Ex: Ficha técnica do cliente importada do TOTVS).
5. **Suppliers (S)**: Quem ou qual sistema assina a autoria e produz esse Input limpo na fronteira inicial? (Ex: Inside Sales Agent, Motor de Cotação Algorítmico).

## Validação de Entradas no Charter
Após preencher o SIPOC, olhe do Output(O) para os Inputs(I): O Defeito/Dor quantificado na Declaração do Problema está contido entre esses muros? Se sim, você mapeou o território certo. Se não, o escopo está errado ou o problema é herdado fatalmente do Supplier e o DMAIC tem de rolar uma unidade fabril para trás na Supply Chain.
      `
    }
  ]
},

// ── MÓDULO 3 ─────────────────────────────────────────────
{
  id: 3,
  title: "Fase MEASURE — Fundamentos Estatísticos",
  description: "Teorema do Limite Central, MSA (Gage R&R) Avançado e Índices de Capacidade (Cp, Cpk, Pp, Ppk).",
  difficulty: "Avançado",
  lessons: [
    {
      id: "3.1",
      title: "Tipologia e Normalidade de Dados",
      content: `
# A Anatomia e Tipologia dos Dados

No Six Sigma, antes de abrir o Minitab ou calcular qualquer desvio padrão, o Master Black Belt deve diagnosticar a matriz de dados. **Lixo que entra, Lixo que sai (GIGO).** A tipologia dita qual arsenal de testes de hipótese será utilizado no Analyze.

## 1. Dados Contínuos (Variáveis)
* **Natureza**: São medidos numa escala infinita fracionável. Aumenta a resolução do seu décimo e a precisão do micrômetro, o número ganha mais casas decimais.
* **Exemplos**: Tempo de ciclo (12.45s), Temperatura (98.6°C), Torque (45.3 Nm), Faturamento ($4.532,10).
* **Vantagem MBB**: São o CÁLICE SAGRADO estatístico. Requerem amostras minúsculas (n=30) para provar teoremas cruciais com alto *P-Value* de confiança. Você sempre deve lutar para converter um dado discreto em contínuo (ex: em vez de anotar "Atrasado/No Prazo", anote "Delta de horas da entrega").

## 2. Dados Discretos (Atributos)
* **Natureza**: São categorias contadas. Não aceitam frações verdadeiras no mundo real.
* **Exemplos**: Número de arranhões na porta (3), Passou/Reprovou (Binário), Contagem de Clientes na Fila (12).
* **Desvantagem MBB**: São cegos à magnitude do erro. Se uma peça passou 0.01mm fora da tolerância ou 10 metros fora da tolerância, o dado discreto anota "1 falha" e ponto final. Demandam amostras massivas (n=400, n=10.000) para provar mudanças (Testes Qui-Quadrado, Regressão Logística Binária).

## O Teste de Normalidade (Anderson-Darling)
A Natureza odeia o caos; ela tende à Distribuição Normal (A Curva do Sino de Gauss). Entretanto, se você assumir cegamente que seus dados são normais e usar um Teste-T para duas amostras (T-Test), mas a curva for Weibull (Caudas esticadas), você cometerá genocídio estatístico e aprovará alterações nocivas na fábrica.

**A Regra do Valor-P (P-Value) para Normalidade:**
* No teste de Anderson-Darling, elaboramos a Hipótese Nula ($H_0$): "Os dados SÃO normais".
* Se **P-Value > 0.05**: Falhamos em rejeitar $H_0$. Celebre, a curva é normal matemática e linear.
* Se **P-Value < 0.05**: Rejeitamos $H_0$. Temos dados Não-Normais. Teremos de usar estátisca pesada e turva como *Box-Cox Transformation*, *Johnson Transformation* ou migrar para Testes Não-Paramétricos (Kruskal-Wallis, Mann-Whitney).
      `
    },
    {
      id: "3.2",
      title: "MSA — Análise do Sistema de Medição",
      content: `
# MSA: A Prova dos Nove (Measurement System Analysis)

"Como você sabe que o furo do cilindro mede 12.5mm? Porque o paquímetro disse? E quem mediu a verdade do paquímetro?"
Se a sua medição possui variação inerente igual ou maior que a variação real do processo que você está tentando consertar, você está **Consertando Fantasmas**.

O MSA esmaga estatisticamente o erro do aparelho ou do inspetor antes do projeto continuar. Se o MSA falhar (Gage R&R > 30%), o projeto é congelado brutalmente até comprarem uma trena melhor ou calibrarem o sensor eletrônico.

## Os 5 Erros de Medição 

A variação de medição se divide em Exatidão (Acurácia) e Precisão:

### Acurácia (Onde o Tiro Acerta na Média)
1. **Bias (Viés / Tendência)**: O aparelho mede consistentemente 2kg acima do padrão mestre de platina do laboratório de metrologia. Solução simples via calibração de software offset.
2. **Lineariedade**: O erro do sensor piora dependendo do tamanho da peça? Ele pode ser exato pesando algodões de 10g, mas desvia 10% violento se pesar blocos de 1 tonelada.
3. **Estabilidade**: O termômetro acusa 30°C lendo uma pedra padrão no inverno, e 32°C a mesma pedra no auge do verão? É o erro em função do desgaste do tempo ou clima no equipamento.

### Precisão (A Dispersão Inflexível do Tiro)
4. **Repetibilidade (Repeatability - Equipamento Viciado)**: O *mesmo* operário de medição (João), mede a *mesma* peça de carro, sequencialmente com o *mesmo* paquímetro, 10 vezes cegas. Se nas 10 vezes os dados oscilarem, **A Culpa é do Aparelho (Equipamento Var)**.
5. **Reprodutibilidade (Reproducibility - Operador Viciado)**: A Maria e o João medem a *mesma* peça com o *mesmo* paquímetro, mas seus braços seguram com força elástica diferente (Delta de Destreza). A discrepância entre ambos é a **Variação de Avaliador (Appraiser Var)**.

## O Gage R&R (Repeatability & Reproducibility)

O Gage R&R combina via ANOVA as variâncias das partes 4 e 5 acima.
**Critérios Aceitos da Indústria e IATF-16949:**
* **< 10% de Gage R&R**: Sistema de Medição Perfeito. Confie nos dados cegamente.
* **10% a 30%**: Sistema marginal ou "Borda do Penhasco". Aceitável dependendo do custo da régua substituta comparado ao risco monetário.
* **> 30% de Gage R&R**: PARE O PROJETO. O Sistema é lixo puro. Você tem uma chance enorme de Aprovar Peças Ruins (Risco do Cliente / Falso Positivo) ou Reprovar Peças Boas (Risco do Produtor / Scrapar ouro).
      `
    },
    {
      id: "3.3",
      title: "Análise de Capacidade (Cp, Cpk, Pp, Ppk)",
      content: `
# A Capacitação Matemática do Processo

Após confirmar através do MS que conseguimos extrair amostras confiaveis, traçamos a Curva Normal dos seus dados. Mas e se a Normal couber, se espremer ou estufar fora das paredes desenhadas pelo cliente na fase Define?
Isso é o Capibility Analysis: A guerra entre o LSE (Limite Superior de Especificação) vs LIE (Limite Inferior) VS LSC (Limite Sistêmico de Controle do Seu Chão de Fábrica).

## Cp e Cpk (Capacidade de Curto Prazo - Potencial)

Analisa se o seu processo, hoje de manhã, limpo e sem desgastes e fadiga, cabe no túnel de tolerância do cliente. Usa o **Desvio Padrão Within (Subgrupo)**.

### Cp (Capability ratio) - "O Carro cabe na Garagem?"
Calcula a Freq. total dividindo a Tolerância Pura do Cliente pelos 6 Desvios Padrões Internos.
* Se a garagem tiver 3 metros, e o carro (seu 6-sigma variation) também 3 metros, Cp = 1.
* A exigência de Qualidade 6-Sigma pede que seu carro seja minúsculo e caiba sobrando muito, então Cp **deve ser > 2.0**.
* **O Limite do Cp**: Ele assume (ingenuamente) que o carro está perfeitamente centralizado na porta da garagem! Se a sua máquina descalibrou e o centro de injeção plástica andou pra direita, mesmo com carro fino ele ralará o vidro na pilastra direita do LSE.

### Cpk (Capability Index k) - "O Carro está batendo nas pilastras reais?"
Diferente do Cp otimista, o Cpk calcula a distância letal média do Limite de Especificação *Mais Próximo* contra o limiar da sua perigosa cauda de sino média-shiftada ($Min[\frac{LSE-\mu}{3\sigma}, \frac{\mu-LIE}{3\sigma}]$).

* **Regra Ouro MBA**: O Cp pode ser 2.0 (Fantástico), mas se o Cpk for < 0, a média do seu processo está *tão torta lateralmente* que ela flutua Fora dos Limites de Especificação. (Toda a peça está saindo pior do que o cliente solicitou, você fabrica defeitos a vapor).
* **Alvo Clássico Cpk**: > 1.33 (Mínimo automotivo) | > 1.67 (Aeroespacial) | > 2.0 (Nirvana 6 Sigma).

## Pp e Ppk (Performance de Longo Prazo - Global Realidade)

Medidos em meses/anos contínuos. Incorpora desgastes de máquinas antigas, turno da madrugada cansado, falhas na eletricidade, e sazonalidade de humidade no inverno. Usa o Desvio Padrão de Amostra Massiva Global ($\sigma_{overall}$).

* Como os subgrupos "pulos de lótus" entram e estouram as tolerâncias temporais, o desvio padrão de Pp é absurdamente maior (mais ineficiente) que do Cp.
* A diferença entre o **Cpk (Potencial Laboratorial)** e o **Ppk (Realidade Agreste)** sinaliza severos problemas de *Manutenção no Processo*. Se Cpk > 1.5 e Ppk = 0.6, seu processo é biologicamente bom mas está pessimamente mantido (manutenções irregulares e variação de Matéria-Prima inter-lotes destruindo o Ppk meses afio).
      `
    },
    {
      id: "3.4",
      title: "Amostragem Estatística e Power & Sample Size",
      content: `
# A Matemática da Amostragem

Coletar dados não é uma atividade aleatória. Inspeção 100% de peças em fábricas de alto volume não apenas é inviável, mas é comprovadamente falha devido ao erro humano da inspeção de fadiga motora. O profissional Master Black Belt calcula o tamanho exato de amostra necessário para garantir \`95%\` de confiança estatística com o menor custo de captura possível.

## Tamanho da Amostra Básico (Sample Size)
A variável crítica é a **Margem de Erro Aceitável (E)**, o desvio padrão da população e o Nível de Confiança ($Z$).
*   Para dados Contínuos: $n = ( \\frac{Z \\times s}{E} )^2$
*   Se o desvio é altíssimo, você terá que puxar muito mais amostras da linha para ter confiança estatística da realidade.

## Power and Sample Size (Poder do Teste)
O poder descobre **a capacidade do seu Teste detectar uma diferença quando a diferença realmente existe** (Poder é o Complementar ao Erro Tipo II: $1 - \\beta$).
Se você aprova uma resina barata, um Power Ratio ideal no software precisa estar parametrizado em **80% a 90%**.
Se o Power de teste for muito baixo (ex: $20%$), significa que você está fazendo a pesquisa e amostrando tão poucas amostras que mesmo que o fornecedor envie algo estragado, o sino de Gauss do "status quo" mascarará a diferença real.

## Modos de Amostragem
1.  **Amostragem Aleatória Simples**: Sorteio cego (Random Number Generator).
2.  **Amostragem Estratificada**: A fábrica de garrafas tem 3 turnos (Manhã = 50% produção, Tarde = 30%, Noite = 20%). A amostra DEVE retirar exatamente esses percentuais proporcionais. Se sortear aleatoriamente, um turno pode ser esquecido e o projeto fica enviesado.
3.  **Amostragem Sistemática**: Tirar uma garrafa a cada hora cheia. O perigo mortal aqui é a **Sincronicidade de Frequência Oculta**. E se a máquina de extrusão dá um \`glitch\` de oscilação elétrica toda hora no ponteiro do relógio zero-zero? O Black Belt será perfeitamente enganado.
      `
    }
  ]
},

// ── MÓDULO 4 ─────────────────────────────────────────────
{
  id: 4,
  title: "Fase ANALYZE — Dinâmica Inferencial Avançada",
  description: "ANOVA (One-Way/Two-Way), Regressão Múltipla (R-Sq, VIF) e Testes Não-Paramétricos.",
  difficulty: "Avançado",
  lessons: [
    {
      id: "4.1",
      title: "ANOVA (Análise de Variância)",
      content: `
# ANOVA: O Motor de Busca de Causas-Raiz (Y = f(x))

No Analyze, o Black Belt parou de "achar" as coisas e começou a provar estatisticamente. A ferramenta máxima para comparar médias de múltiplos grupos simultaneamente é a **Análise de Variância (ANOVA)**.

## Por que não usar o T-Test 8 vezes?
Se você tem 4 fornecedores de resina e quer saber qual fornece o material mais resistente, você não pode parear "A com B, A com C, A com D...". Isso inflaria o **Erro Tipo I** exponencialmente (Você juraria que há diferença onde não há). A ANOVA resolve isso testando todos contra o centro de massa.

## A Matemática da Dispersão (The F-Statistic)

A ANOVA divide a variância em duas engrenagens:
1. **SS Factor (Between)**: A variância de resistência *ENTRE* os barris dos diferentes fornecedores.
2. **SS Error (Within)**: A variância de resistência inerente *DENTRO* do barril do mesmo fornecedor (ruído natural).

Se o *Ruído Entre (Between)* for violentamente maior que o *Ruído Dentro (Within)*, a Estatística F (F-Value) dispara, o P-Value cai para perto de Zero (< 0.05), e o Black Belt **Rejeita $H_0$**. Conclusão Financeira: O Fornecedor DITA SIM a resistência da resina (Y depende de X).

## One-Way vs Two-Way ANOVA
* **One-Way**: Apenas 1 Fator controlável em níveis discretos. Ex: Avaliar Média de Vendas (Y) bloqueado apenas pelo Fator [Turno da Loja: Manhã, Tarde, Noite].
* **Two-Way (General Linear Model)**: 2+ Fatores controláveis interagindo. Ex: Avaliar Porosidade do Aço (Y) em função do [Fornecedor: A, B] e da [Temperatura de Forja: Alta, Baixa].
* **O P-Value de Interação (X1 * X2)**: Na Two-Way, às vezes descobrir que Fornecedor não afeta, nem Temperatura afeta isoladamente, mas a combinação *Aço Fornecedor B na Temperatura Alta* destrói o forno. Isso é interação.
      `
    },
    {
      id: "4.2",
      title: "Regressão Logística e Múltipla",
      content: `
# A Arte Oculta das Regressões

Enquanto a ANOVA aceita Fatores Discretos/Categóricos no Eixo X (Cor, Turno, Fornecedor), a Regressão Linear Simples e Múltipla engole **Fatores Contínuos** no Eixo X contra um Y Contínuo (Múltipla) ou Y Categórico (Logística).

## Regressão Múltipla (Ordinary Least Squares - OLS)
Equação: $Y = \beta_0 + \beta_1X_1 + \beta_2X_2 + ... + \epsilon$
Exemplo: Desperdício de Tinta em Litros ($Y$) em função da Viscosidade ($X_1$), Pressão do Ar ($X_2$) e Umidade Relativa ($X_3$).

### Métricas MBB em Regressão Múltipla
1. **R-Sq (R-Quadrado Ajustado)**: A prova da utilidade. Se o Adjusted $R^2$ = 86%, significa que 86% de todo o desperdício de tinta na fábrica é explicado matematicamente pelos três fatores que você colocou no modelo OLS. Sobra apenas 14% de "acaso de Deus".
2. **P-Value Individual dos Coeficientes ($\beta$)**: Cada X entra no corredor polonês estatístico. A Pressão do Ar ($X_2$) pode ter estourado um P-Value de 0.88. O Black Belt então a remove do modelo matemático, provando que essa variável nunca teve impacto causal, desmitificando crendices de 30 anos da fábrica.
3. **VIF (Variance Inflation Factor)**: Teste crucial de Multicolinearidade. Se dois fatores $X$ explicam a exata mesma coisa juntos (Se o modelo já tem '$X_1$: Quantidade de Clientes na Loja' e você adiciona '$X_2$: Vendas Totais'), eles causam entropia no cálculo de P-Value. O VIF > 10 exige extermínio da variável colinear duplicada.

## Regressão Logística (Binary / Ordinal Logistic Regression)
Seu cliente não tem paciência com dados contínuos. Ele diz: "Deu Certo (1) ou Falhou (0)". O $Y$ virou pass/fail (Binário).
Como os resíduos da tentativa $Y$ não formam uma curva de Gauss natural, não podemos usar Correlação de Pearson, usamos a probabilística de "Log-Odds" (Curva em "S").
A Regressão Logística diz qual fator eleva a razão de risco de Evento acontecer. Ex: "Aumentar a Idade do Motor do Caminhão em +1 ano aumenta a chance Log-Odds de Quebra da Correia em 43%".
      `
    },
    {
      id: "4.3",
      title: "Testes Não-Paramétricos (Quando Gauss Falha)",
      content: `
# Sobrevivência em Caos Não-Normal (Testes Não Paramétricos)

Os Testes-T (T-Test) e a ANOVA pressupõem fortemente (Assumptions) que seus resíduos de dados formam o Sino de Gauss. Quando você submete a tabela ao gráfico QQ-Plot ou executa o teste de normalidade Anderson-Darling e recebe P-Value < 0.05, você tem uma matriz caótica e violenta.

Embora possamos apelar para transformações matemáticas esotéricas (Box-Cox com $\lambda = 0.5$, Transformação de Johnson), frequentemente o melhor caminho em amostragens pequenas é amputar a necessidade do sino e atacar as **Medianas Ordinais**. É aqui que brilham os testes não-paramétricos.

Atenção MBB: O Poder Estatístico (P) de encontrar uma diferença verdadeira usando não-paramétricos (onde Teste-T acertaria em cheio 80% das vezes) cai drasticamente. Para compensar essa menor precisão de radar, os Não-Paramétricos exigem deltas de evidências absurdamente altos ou "Amostras Gigantes" para liberar P-Value < 0.05.

## O Arsenal de Resgate

### 1. Kruskal-Wallis (O Substituto da One-Way ANOVA)
* **Caso**: Você quer comparar os salários entre 3 pólos estaduais de programação (SP, RJ, SC), mas uma elite de seniores enviesou todas as caudas de normalização.
* **Técnica**: Ele oblitera a magnitude. Se alguém ganha R$ 2k ou R$ 500k, o Kruskal-Wallis muda todos os dados para "Rank Ordinal". O salário mais baixo da tabela inteira vira o Rank #1, o mais alto vira o Rank #348. Ele compara se um galpão dominou os 'Ranks'.

### 2. 1-Sample Sign / Wilcoxon (O Substituto do 1-Sample T)
* **Caso**: Verificar se o tempo de atendimento mediano logístico da sua frota ultrapassa o limite promissório contratual com a Amazon de "Mediana em 4 horas".

### 3. Mann-Whitney (O Substituto do 2-Sample T)
* **Caso**: Comparar o delta de tempo de secagem de cimento de dois tambores estocados com químicas não-gaussianas independentes. Se o rank estourar de forma desparelha entre os grupos, o P-Value afunda e a dependência temporal da nova tática de cura de cimento da concorrência é comprovada, ditando a compra ou cancelamento da adoção gerencial do cimento novo.
      `
    }
  ]
},

// ── MÓDULO 5 ─────────────────────────────────────────────
{
  id: 5,
  title: "Fase ANALYZE — Encontrando as Causas",
  description: "Fishbone, 5 Porquês, Pareto, FMEA e testes de hipótese aplicados.",
  difficulty: "Intermediário",
  lessons: [
    {
      id: "5.1",
      title: "Diagrama de Ishikawa (Fishbone)",
      content: `
# Diagrama de Ishikawa (Causa e Efeito)

## O que é?

O Diagrama de Ishikawa (ou Espinha de Peixe / Fishbone) é uma ferramenta visual para **organizar e categorizar causas potenciais** de um problema.

Criado pelo Dr. Kaoru Ishikawa em 1968, ele é o ponto de partida para qualquer análise de causa-raiz.

## Estrutura

\`\`\`
                    CAUSAS                    EFEITO
[Máquinas]  ──────────┐
[Métodos]   ───────── │ ──────────────────→ [PROBLEMA / DEFEITO]
[Mão de Obra] ─────── │
[Material]  ──────────┘
[Meio Ambiente]
[Medição]
\`\`\`

## Os 6M (Categorias Clássicas para Manufatura)

| M             | O que inclui                                    |
|---------------|-------------------------------------------------|
| **Máquinas**  | Equipamentos, ferramentas, tecnologia           |
| **Métodos**   | Procedimentos, instruções, fluxos de trabalho  |
| **Mão de Obra**| Habilidades, treinamento, motivação, rotatividade |
| **Material**  | Matéria-prima, componentes, fornecedores       |
| **Meio Ambiente** | Temperatura, umidade, layout, ruído        |
| **Medição**   | Acurácia, calibração, sistema de medição       |

## As 8P (Para Processos de Serviço)

Pessoas, Procedimentos, Políticas, Produto (serviço), Preço, Praça, Promoção, Produtividade.

## Como Conduzir uma Sessão de Fishbone

1. **Escreva o problema** (efeito) na cabeça do peixe — seja específico
2. **Desenhe as espinhas** com as categorias
3. **Brainstorm em time** — use post-its, sem julgamento
4. **Organize as causas** nas categorias corretas
5. **Aprofunde com "Por quê?"** — adicione sub-espinhas
6. **Vote nas causas mais prováveis** para priorizar análise
7. **Valide com dados** — não aceite causas sem evidência

> ⚠️ **Armadilha:** O fishbone é geração de hipóteses, não prova de causa. Toda causa identificada precisa ser **validada com dados** na sequência.
      `
    },
    {
      id: "5.2",
      title: "Análise de Pareto",
      content: `
# Análise de Pareto

## O Princípio de Pareto (80/20)

Vilfredo Pareto, economista italiano, observou no século XIX que 80% da riqueza da Itália estava concentrada em 20% da população.

Aplicado à qualidade: **80% dos problemas são causados por 20% das causas**.

> Joseph Juran traduziu isso para a indústria como "separar os poucos vitais dos muitos triviais".

## O Diagrama de Pareto

Um gráfico de barras onde:
- As barras são ordenadas da maior para a menor frequência
- A linha de curva acumulada mostra o percentual cumulativo
- O foco vai para as barras que chegam a ~80% da curva

## Como Construir

1. Listar todas as categorias de defeitos/problemas
2. Contar a frequência de cada categoria
3. Calcular porcentagem de cada uma
4. Calcular porcentagem acumulada
5. Ordenar da maior para menor
6. Plotar barras + linha cumulativa

## Exemplo: Defeitos em Chapas de Granito

| Defeito                  | Qtd  | %     | % Acum |
|--------------------------|------|-------|--------|
| Trinca durante polimento | 145  | 38,5% | 38,5%  |
| Cor fora do padrão       | 98   | 26,0% | 64,5%  |
| Espessura irregular      | 67   | 17,8% | 82,3%  |
| Borda lascada            | 38   | 10,1% | 92,3%  |
| Outros                   | 29   | 7,7%  | 100%   |
| **Total**                | **377** |       |        |

**Conclusão:** Eliminando apenas as 3 primeiras causas, resolvemos 82% de todos os defeitos.

## Pareto Estratificado

Para ir mais fundo, aplique Pareto em múltiplas camadas:
1. Por tipo de defeito
2. Por turno de produção
3. Por máquina
4. Por operador
5. Por lote de matéria-prima

Cada nível de estratificação revela novas informações sobre as causas.
      `
    },
    {
      id: "5.3",
      title: "Análise Causal Multi-Fatorial (Além do Fishbone)",
      content: `
# A Ilusão do Ishikawa Clássico

O Diagrama de Ishikawa (Espinha de Peixe) clássico e o 5 Porquês (5 Whys) são armadilhas letais para Black Belts inexperientes se usados isoladamente. Eles frequentemente geram um "Brainstorming de Opiniões" onde os engenheiros culpam "Falta de Treinamento" ou "Erro Humano" para todos os problemas.

## O Framework Causal MBB
No nível Master, hipóteses nascidas no Fishbone **NÃO** entram na matriz de soluções até passarem pelo purgatório estatístico:
1. **Brainstorm Causal (Fishbone / 6 Ms)**: Gera 50+ causas potenciais (O quê?).
2. **Matriz de Causa e Efeito (C&E Matrix)**: Corta as 50 causas para as 10 mais matematicamente correlacionadas com os CTQs do cliente (Priorização Cruzada).
3. **Análise Inferencial**: As 10 causas sobreviventes são jogadas no Minitab (ANOVA, Regressão, Qui-Quadrado).
4. **O Veredito**: Somente as causas com *P-Value < 0.05* são oficialmente declaradas **Causas Raiz (Vital Few)**. O resto é Ruído (Trivial Many).

## O Erro Humano Nunca é a Raiz
Se o 5º Porquê terminar em "Operador esqueceu", o método falhou. O ser humano é biologicamente projetado para esquecer após 4 horas de turno noturno. A causa raiz real é "O sistema permitiu matematicamente que a falha mnemônica humana avançasse para o próximo estágio".
      `
    },
    {
      id: "5.4",
      title: "FMEA e FMEA Reverso (R-FMEA)",
      content: `
# Análise de Modo e Efeitos de Falha (FMEA) Avançada

O FMEA clássico calcula o **RPN (Risk Priority Number) = Severidade x Ocorrência x Detecção**.
Projetos param no FMEA tradicional de prancheta, preenchido no Excel em salas de reunião com ar condicionado. No longo prazo, a Ocorrência nunca cai, porque o documento morre no servidor.

## O R-FMEA (FMEA Reverso)
Uma tática agressiva de montadoras europeias e aviação (Stellantis, Airbus).
No R-FMEA, o Black Belt **não** tenta prever o que pode dar errado. Ele pega o FMEA antigo aprovado e vai fisicamente para o chão de fábrica (Gemba) para tentar ativamente **fraudá-lo**:
* Se o FMEA diz: "Detecção = Nível 1 (Sensor Optico barrará peça com 100% de certeza)".
* O Black Belt pega uma peça deliberadamente sucateada (Red Rabbit) e a joga disfarçadamente na esteira. Se o sensor piscar e a peça passar, a "Detecção 1" vira uma mentira criminal e vai para "Detecção 10" (Cega), o RPN estoura e a linha é parada.

## Fatores de Criticalidade Subestimada
Se a **Severidade = 10** (Risco de Morte ou Recall Total), o valor algébrico do RPN não importa. Mesmo que Ocorrência e Detecção sejam = 1 ($RPN = 10 \\times 1 \\times 1 = 10$), uma Severidade Massiva aciona obrigatoriedade de Poka-Yoke Direto Nível 3. Você não aceita risco 1 em 1-bilhão para explosão de motores comerciais.
      `
    },
    {
      id: "5.5",
      title: "Simulação de Monte Carlo no Analyze",
      content: `
# A Previsibilidade do Caos via Monte Carlo

No mundo real, variáveis de entrada ($X$) não sofrem variação paradas, elas oscilam *juntas e dinamicamente*. Se você descobre que o Tempo de Forja ($X_1$) e a Qualidade do Aço ($X_2$) ditam a Força da Peça ($Y$), calcular o Y apenas com a Média do $X_1$ e Média do $X_2$ é amadorismo linear.

## A Dinâmica Multi-Estocástica
A Simulação de Monte Carlo processa a equação de transferência inferida no Analyze ($Y = f(X_i)$) iterando **100.000 ou 1 Milhão de cenários aleatórios** em 1 minuto usando distribuições probabilísticas (Gauss, Weibull, Lognormal) para criar o "Espaço do Caos" de cada variável X de entrada.

## Para que serve?
1. **DPMO Futuro Preditivo**: Ele prediz qual será sua exata Taxa de Defeitos se você tolerar a distribuição atual de compras do fornecedor no ano que vem.
2. **Robust Allocation**: Se o Monte Carlo provar que apertar o fornecedor e exigir 99,99% de linearidade do Aço ($X_2$) custar US$ 5 Milhões, e diminuir o Tempo de Forja ($X_1$) custar apenas US$ 10 Mil, e no final o Limite de Elasticidade ($Y$) fica estável em ambos os casos, a Equipe Financeira escolhe a rota mais barata do $X_1$. Otimização Paramétrica Pura.
      `
    }
  ]
},

// ── MÓDULO 6 ─────────────────────────────────────────────
{
  id: 6,
  title: "Fase IMPROVE — Engenharia de Soluções",
  description: "DOE, Fractional Factorial, Superfície de Resposta (RSM) e Poka-Yokes Level 3.",
  difficulty: "Avançado",
  lessons: [
    {
      id: "6.1",
      title: "DOE — Desenho de Experimentos Massivos",
      content: `
# DOE (Design of Experiments) - A Arma Nuclear do Six Sigma

Enquanto A ANOVA e Regressão *observam* o processo caótico trabalhando e tentam achar correlações passivas, o DOE entra chutando a porta. O Black Belt ativamente **manipula e força** a fábrica a rodar configurações extremas programadas ($X_i$) para extrair a alma (Equação Ótima) do Processo de Resposta ($Y$).

## O Crime do OFAT (One Factor at a Time)
O senso comum de engenharia é "Muda um fator, testa. Depois segura ele, muda o próximo". O OFAT é criminoso porque é matematicamente cego à **Interação Fatorial Cruzada**. O DOE altera os 3 ou 5 fatores de uma vez só em uma matriz ortogonal. Ele revela, por exemplo, que Alta Pressão só aumenta a Velocidade SE (E SOMENTE SE) a Temperatura estiver Baixa ao mesmo tempo. OFAT jamais veria isso.

## Fractional Factorial (Resolução III, IV, V)
Se você tem 7 Fatores X para testar em 2 níveis (Alto +1, Baixo -1), um DOE Fatorial Completo exigiria $2^7 = 128$ experimentos brutais cruzados de fábrica inteira (Custo Infinito).
O **DOE Fracionado** roda apenas $\\frac{1}{4}$ dos testes ($2^{7-2} = 32$), "Confundindo" propositalmente efeitos principais com Interações de Ordem 4 (que raramente existem na física planetária). Com 32 forjadas, o MBB mapeia a fábrica e desliga 4 fatores estúpidos, matando custos instantaneamente.
      `
    },
    {
      id: "6.2",
      title: "Método RSM e Design de Taguchi",
      content: `
# O Topo da Montanha Matemática

Quando o DOE Fatorial localiza onde está o "ouro" (as configurações que maximizam ou minimizam o Y), ele estaciona nas vizinhanças planas. Para realmente atingir o cume preciso da montanha do processo, entramos na Superfície de Resposta.

## RSM (Response Surface Methodology) - Central Composite Design
A RSM eleva o modelo DOE 2-Level adicionando "Star Points" e "Center Points" na matriz geométrica do experimento estatístico. Ele abandona as correntes lineares ($y = ax + b$) e mapeia a **Curvatura Quadrática** ($y = ax^2 + bx + c$). Ele literalmente desenha um mapa topográfico 3D na tela do Minitab para o CEO apontar o dedo no cume perfeito (O Ponto de Sela Ótimo) minimizando custos de resina X minMaxando resistência mecânica.

## Design Robusto de Genichi Taguchi
DOE Max-Min tradicional foca em manter a peça perfeitamente no Alvo ($\\mu$). Taguchi chuta essa lógica e diz: 
*"Não me importo se o processo desviar da média. Eu quero achar uma combinação estrutural interna na qual a Variação Climática Externa ou Variação Barata de Compra de Estoque (Fatores de Ruído) não importem de forma alguma."*

Através da matriz Sinal-Ruído (S/N Ratio), Taguchi parametriza um amortecedor matemático processual. Em carros japoneses, essa é a diferença de construir um limpador de parabrisa perfeitamente liso (Americano/Europeu clássico) contra construir um que não emperre *MESMO COM* neve congelante na mola (Robusto/Japonês).
      `
    },
    {
      id: "6.3",
      title: "Defesas Invulneráveis: Mistake Proofing C-Level",
      content: `
# Engavetando o Defeito: Poka-Yoke Níveis I, II e III

Após achar os X vitais no DOE, confiar em "Treinamento, Manuais Novos de POP ou Placas Visuais na parede" para sustentar isso na fase Improve é garantia de fracasso (Slide-Show Savings). A entropia derruba papéis em 6 meses.
A equipe exige Poka-Yoke, mas a hierarquia de barreira é dramática:

### Nível 1: Mitigação Informativa (Pífio)
O sistema bipa ou acende luz vermelha se o operador tentar conectar o cabo errado no painel. Assumo que o operador é atento e vai parar o que está fazendo (Ele vai ignorar o beep por estar de fones). Risco Residual: Extremamente Alto.

### Nível 2: Detecção Condicional de Erro Interceptável
O operador insere o cabo errado, o erro temporalmente acontece, mas um CLP logistico congela e trava a porta pneumática impedindo o reboque ou fechamento do módulo final. O defeito nasceu na estação de trabalho, mas morre na estação de trabalho e impede a máquina de cuspir o lote.

### Nível 3: Prevenção Pura do Ato Falho (Design Zero-Defect)
O *Bujão* (plug) do cabo tem forma hexagonal assimétrica. O buraco da placa errada é circular. Pela pura manifestação da física em 3a Dimensão, um primata ou um operador vendado sob efeito de stress não consegue mecanicamente inserir o pólo positivo no negativo. 
Este nível **Mata a Medição e o Controle Estatístico e Erradica a Categoria COPQ Externa.** Não há mais o que medir no Phase Control. O Processo alcançou 8 Sigma Naturais.
      `
    }
  ]
},

// ── MÓDULO 7 ─────────────────────────────────────────────
{
  id: 7,
  title: "Fase CONTROL — Sustentabilidade Autônoma",
  description: "CEP Preditivo (CUSUM, EWMA), Planos de Controle Dinâmicos e Automação de Resposta.",
  difficulty: "Avançado",
  lessons: [
    {
      id: "7.1",
      title: "Além do CEP Clássico (Shewhart)",
      content: `
# A Lerdeza do CEP Tradicional

O Controle Estatístico de Processo Clássico (Cartas de Shewhart como X-Bar R ou P-Chart) foi criado em 1924. Ele é excelente para detectar falhas massivas, mas sofre de **Inércia Estatística**: ele exige que o processo fuja muito do centro (3 Sigmas) para disparar o alarme vermelho.

Se a sua máquina envasadora comercial começar a vazar meros 2ml a mais de líquido por garrafa (um desvio sutil de 0.5 Sigma da média), a Carta X-Bar R vai considerar "Normalidade Aleatória" e não vai avisar ninguém. O Black Belt então perde US$ 2 milhões em líquido derramado em 6 meses.

## As Cartas de Memória (CUSUM e EWMA)
No nível MBA, você não abandona o SPC, você o artilha com memória matemática.

### 1. CUSUM (Cumulative Sum Control Chart)
Ao invés de plotar a medição atual no gráfico, o CUSUM plota o **Acúmulo do Erro**. Ele age como uma lupa financeira. Se a máquina envasadora errar 2ml a mais todo dia, o CUSUM soma esses 2ml ($2, 4, 6, 8, 10...$) e a linha do gráfico decola exponencialmente cruzando o limite de alerta em 48 horas, não em 6 meses. Ele detecta micro-turnos com eficiência implacável.

### 2. EWMA (Exponentially Weighted Moving Average)
Excelente para indústrias químicas contínuas. O EWMA pondera os dados: ele dá 80% de importância para a temperatura da caldeira aferida hoje, e decai a importância das medições da semana passada exponencialmente. Ele não sofre da inércia dos limites estáticos.
      `
    },
    {
      id: "7.2",
      title: "Planos de Controle Responsivos",
      content: `
# O Fim do Documento Morto

Planos de Controle normais (Control Plans) frequentemente viram documentos engavetados na ISO-9001. A transição do Master Black Belt converte esse Excel em OCAPs dinâmicos.

## OCAP (Out-of-Control Action Plan)
Um OCAP não diz: "Se a máquina quebrar, avise a manutenção". Um OCAP de classe mundial é um fluxograma enraizado na mente (ou no tablet) do operador.
* **Sintoma Limitador Cruzado**: Se a Carta EWMA estourar a linha superior E a pressão do tubo estiver < 2 Bar, a ação é: "Gire a Válvula 4x e aguarde 10 min".
* **Autoridade de Corte**: O operador DEVE ter autonomia para desligar a central sem pedir permissão ao diretor se a restrição Z for violada. Esse é o empoderamento real do Lean.

## Controle C-Level: Dashboards de Governança
Como Black Belt, você entregou a linha para o supervisor no "Hand-Off", mas você pendurou os dados em PowerBI reportando para a Diretoria. O Projeto Six Sigma não tira férias. Se a governança apitar vermelho 1 ano depois, o sponsor cancela o bônus do gerente da área (Ownership processual garantido).
      `
    },
    {
      id: "7.3",
      title: "As 8 Regras de Nelson e Seleção de Cartas SPC",
      content: `
# Interpretando Subliminares: Regras de Nelson

Se um inspetor acha que um ponto precisa sair fora da Zona de Controle ($\u00b1 3\\sigma$) para o processo estar \`Fora de Controle\`, ele não sabe SPC. As tendências matemáticas e físicas denunciam a falha de máquina antes da destruição real de um lote.
As 8 Regras Western Electric (Regras de Nelson):
1.  **Regra 1**: 1 ponto a mais de 3 desvios da linha central. (Explosão súbita).
2.  **Regra 2**: 9 pontos consecutivos no mesmo lado do Centro. (A média deslocou sutilmente permanentemente, indicando mudança na temperatura fria da sala).
3.  **Regra 3**: 6 pontos estritamente crescentes ou decrescentes seguidos. (A ferramenta do Torno ou a agulha está sofrendo **Desgaste / Wear** gradual por fricção temporal).
4.  **Regra 4**: 14 pontos oscilantes (up-down-up-down) (Válvula solta oscilando a mola em over-compensation cíclica mecânica).
5.  **Regra 5**: 2 de 3 pontos seguidos entre $2\\sigma$ e $3\\sigma$ (Sinalizador primário).
6.  **Regra 6**: 4 de 5 pontos consecutivos no mesmo lado entre $1\\sigma$ e $2\\sigma$.
7.  **Regra 7**: 15 pontos amontoados muito juntos dentro de $1\\sigma$ contínuo (A régua de medição travou, ou o operador com medo de erro está \`fabricando a ata de medição no papel\` inventando números e fraudando a auditoria).
8.  **Regra 8**: 8 pontos, nenhum caindo em $1\\sigma$ do meio. Processo saltando violentamente entre limites superiores e inferiores como estilhaço da Mistura Dupla (Over-correção de turnos, dois fornecedores alimentando o túnel caoticamente sem fusão).

## Seleção Correta de Qual Carta Usar
Usar a carta errada para o Dado errado cria Falsos Positivos e Alarmes Falsos:
*   **Contínuo n=1** (Produção lenta, peças massivas como Aviões): **I-MR** (Individual & Moving Range).
*   **Contínuo n=2 a n=8** (Puxa subgrupos frequentes num lote de pregos): **X-Bar R** (Média e Amplitude).
*   **Contínuo n > 9** ou alto volume: **X-Bar S** (Média e Desvio Padrão Real subgrupo).
*   **Atributo (Defeituosa Unitária Inteira)** com Lote Fixo (ex: caixas de 500): **np-Chart**.
*   **Atributo Varável Lote**: **p-Chart**.
*   **Contagem de Arranhões (Defeitos Multiplos em mesma peça)** com área Fixa: **c-Chart**.
*   **Defeitos Múltiplos com áreas Varáveis**: **u-Chart**.
      `
    }
  ]
},

// ── MÓDULO 8 ─────────────────────────────────────────────
{
  id: 8,
  title: "Lean Expert & Fluxo de Valor Contínuo",
  description: "VSM Dinâmico, Heijunka (Nivelamento), TPM e a Física de Filas (A Lei de Little).",
  difficulty: "Avançado",
  lessons: [
    {
      id: "8.1",
      title: "VSM - Arquitetura de Redes Lógicas",
      content: `
# Value Stream Mapping: A Radiografia do Sangramento

Engenheiros amadores mapeiam o "Processo" desenhando caixinhas e setinhas. O VSM (Mapeamento do Fluxo de Valor) cruza três dimensões brutais simultaneamente:
1. **O Fluxo do Produto** (Do Aço até a Roda Finalizada).
2. **O Fluxo da Informação** (O ping-pong eterno de e-mails ERP dizendo pro operador quanto fabricar).
3. **A Linha do Tempo Fictícia (Takt Time vs Lead Time)**.

## Eficiência de Ciclo de Processo (PCE)
Você divide o *Value-Added Time* (3 minutos que o robô levou para soldar a porta) pelo *Process Lead Time* (30 dias que a porta passou esperando num palete). Você descobrirá que fábricas "eficientes" tem um PCE vergonhoso de 2%. O resto é TIMWOODS (Tempo apodrecendo, Movimentação estúpida, Estoque).

## A Lei de Little (Teoria das Filas)
Fórmula de Boston MIT: $Lead Time = \\frac{Work In Process}{Throughput Rate}$.
Se o seu TI leva 1 ano para entregar um software (Lead Time), e programa 2 por mês (Throughput), é porque o diretor forçou os programadores a trabalharem em 24 softwares paralelos de uma vez ($WIP$). Matemática inquebrável. Quer softwares rápidos? Corte os projetos paralelos pela metade.
      `
    },
    {
      id: "8.2",
      title: "TPM e Nivelamento (Heijunka)",
      content: `
# Heijunka: A Morte do 'Batch & Queue'

Na época da Revolução Industrial Americana (Ford), produzia-se Lotes Gigantes (Batch) de carros pretos para ganhar 'Economia de Escala' no setup da pintura (Setup Time).
O Sistema Toyota (TPS/Lean) pulverizou isso através do SMED (Single Minute Exchange of Die), trocando as tintas e matrizes de aço em menos de 10 minutos.

Com Setup quase gratuito, habilitou-se a **Heijunka Box**: Em vez de fazer 1000 Corollas e depois 1000 Camrys (Gerando estoque morto e bullwhip effect), o Lean nivela a fábrica para fazer um Corolla, depois um Camry, depois um Corolla... Exatamente no Takt Time (Pulsação do consumo da loja na rua). 100% Flow Sincronizado.

## TPM (Total Productive Maintenance)
Manutenção Preventiva é jogar óleo na máquina quebrada. TPM é a "Manutenção Empoderada". O operador limpa, ouve o ranger da engrenagem, relata anomalias sônicas 3 meses antes da correia arrebentar, e lubrifica o eixo. A **OEE (Overall Equipment Effectiveness)** passa de 50% para 85% de Classe Mundial.
$OEE = Disponibilidade \\times Performance \\times Qualidade$.
      `
    },
    {
      id: "8.3",
      title: "5S, SMED e Kanban Detalhado",
      content: `
# As Armas Táticas do Lean 

Enquanto a arquitetura Lean dita fluxo, os soldados físicos na fábrica executam o Just-in-Time usando a trindade da estabilização:

## 5S (Organização Visual e Disciplina)
Não se trata de uma "faxina". O 5S expõe a ineficiência do operador de ter que procurar chaves combinadas sumidas. Desviou os olhos 10 segundos da bancada para achar a chave 14mm = Tempo de Valor Não-Adicionado (NVA). Se a chave está desenhada fisicamente e fixada na parede (Set in Order), um desvio instantaneamente relata falta visual à coordenação de 30 metros de distância. O 5S Pavimentou a fundação mental de um Lean Sustentável.

## SMED (Single Minute Exchange of Die) - Setup Rápido
É a ciência cirúrgica de alterar calibrações de máquinas durante tryouts reduzidas a menos de 10 minutos para matar de vez a restrição financeira Lote OEA (Lote Econômico). 
*   **Passo Vital**: Converter Setup Interno (ajustes feitos apenas com Prensas paradas) em Setup Externo (Ajuste ou rosqueamento e esquadrejamento feito COM o robô ainda soldando e funcionando ativamente com molde sobressalente offline para encaixe futuro).

## Kanban e Filas Lineares (Supermercados de Produção)
As indústrias operam em ritmo de cascata destrutiva Empurrada (Push). O centro comercial dita a fabricação para injetar blocos indiscriminadamente baseados em palpites de ERP (MRP 2) de meses à frente (Overproduction - O pai dos desperdícios).
A Metodologia **Puxada (Pull / Just In Time)** via Kanban impõe que Nada Flui na Célula A até a Célula C entregar para o Operador D da ponta de Lote. Todo palete de chão ou prateleira deve virar um "Supermercado Limitado".
*   Os cartões lógicos controlam o tráfego aéreo das docas, exigindo abastecimento reverso exato da quantidade consumida pela baia, forçando zero oxigênio físico sem lote em chao de fabrica.
      `
    }
  ]
},

// ── MÓDULO 9 ─────────────────────────────────────────────
{
  id: 9,
  title: "DFSS — Design for Six Sigma (DMADV)",
  description: "QFD Dinâmico, Tolerance Allocation, Reliability Engineering e Triz.",
  difficulty: "Avançado",
  lessons: [
    {
      id: "9.1",
      title: "A Frustração do DMAIC vs O Poder do DFSS",
      content: `
# A Impossibilidade Causal

Você rodou 12 Projetos Black Belt na sua bomba injetora. Fez Poka-Yoke, DOE, Monte Carlo, TPM. A Capacidade do Processo ($Cpk$) está travada em 1.2 (3 a 4 Sigmas). Não sobe mais. Você atingiu a **Barreira Entrópica do Limite Físico de Design**.

O DMAIC corrige Processos. Quando o Processo é geometricamente doentio de nascença (Design falho dita gargalo de fricção térmico que nenhuma automação conserta), você joga o projeto no LIXO e convoca o **DFSS (Design for Six Sigma)**.

## DMADV: Define, Measure, Analyze, DESIGN, Verify
Enquanto o DMAIC salva a margem de lucro corrigindo defeitos, o DFSS cria faturamento com novos produtos Imparáveis. As Fases Design e Verify destroem o muro entre Pesquisa e Desenvolvimento (P&D) e Manufatura.

## A Casa da Qualidade (QFD - Níveis de Cascata)
No MBA de Qualidade, o QFD não é um quadrado bonito. Ele entra na técnica de *Cascading*:
1. **QFD Piso 1**: CTQs de mercado vs. Requisitos do Veículo Inteiro.
2. **QFD Piso 2**: Requisitos do Veículo vs. Design do Freio.
3. **QFD Piso 3**: Design do Freio vs. Processo da Máquina Torno CNC.
O que o Motorista pensou, virou RPM e força de prensa de 30 toneladas na fábrica sem ruído de comunicação.
      `
    },
    {
      id: "9.2",
      title: "Reliability & Tolerancing",
      content: `
# Engenharia de Confiabilidade (Reliability) e Curva da Banheira

DFSS garante que o Carro não quebre no Dia 1 de uso na concessionária, mas como garantir que ele durará 5 anos sem o radiador explodir sob calor do Arizona? 

## A Curva da Banheira (Bathtub Curve)
Qualquer ativo físico no universo (Hardware, humanos) segue três taxas de falha sistêmicas na linha do tempo:
1. **Mortalidade Infantil (Decrescente)**: Erros de fabricação do DMAIC. Se passar pela revisão dos 1.000km, o carro tá seguro.
2. **Vida Útil / Falha Aleatória (Plana)**: Um raio atinge o carro, acidentes. Nível de confiabilidade máxima.
3. **Desgaste Final (Crescente)**: Fricção da caixa de marcha estourou a física do metal (80.000km+).
O DFSS através de cálculos Weibull empurra brutalmente a 'Era do Desgaste' para mais longe que o período de garantia financeira exigido pelos acionistas.

## O Design Robusto Revisitado (Tolerâncias Estocásticas)
Soma de Empilhamento (Stack Up Tolerance). Se a Fábrica Tolarizar $+/-1mm$ o pistão, e $+/-1mm$ o anel, e o engenheiro júnior somar ambos, vai prever 2mm de gap no motor e estragar o projeto alegando impossibilidade.
O Master Black Belt aplica a *Transferência RSS (Root Sum Square)*: Os erros normais não estouram o limite ao mesmo tempo. $\\sqrt{(1^2 + 1^2)} = 1.41mm$. A fábrica é mais apertada do que os engenheiros civis assumem linearmente, poupando bilhões em usinagem absurda.
      `
    }
  ]
},

{
  id: 10,
  title: "Liderança MBB e Change Management",
  description: "Modelo ADKAR, Influência Lateral em Estrutura Matricial e Resolução de Conflitos.",
  difficulty: "Avançado",
  lessons: [
    {
      id: "10.1",
      title: "Change Management (A Barreira Humana)",
      content: `
# A Ilusão da Planilha Perfeita

A Equação Fundamental do Six Sigma é **$E = Q \\times A$** (Eficácia = Qualidade Técnica $\\times$ Aceitação da Equipe). Se você desenhar o Minitab perfeito ($Q = 10$) mas o chão de fábrica odiar a solução ($A = 0$), o resultado do seu projeto é zero.

## O Modelo ADKAR (Prosci)
MBBs não torcem para as pessoas aceitarem mudanças. Eles estruturam a aceitação usando o framework ADKAR:
1. **Awareness (Consciência)**: A equipe Sabe por que a máquina velha vai sair? O Sponsor comunicou o risco de falência?
2. **Desire (Desejo)**: O que o operador ganha com a máquina nova? (Se a resposta for "ele perde horas extras porque a máquina é mais rápida", ele vai sabotar o robô).
3. **Knowledge (Conhecimento)**: Treinamento prático.
4. **Ability (Habilidade)**: O operador treinou *o suficiente* para adquirir memória muscular?
5. **Reinforcement (Reforço)**: Auditoria Kamikaze de 30, 60 e 90 dias após o projeto para evitar que a equipe volte a usar o Excel oculto antigo.
      `
    },
    {
      id: "10.2",
      title: "Influência Lateral e Estruturação Matricial",
      content: `
# O Paradoxo do Black Belt

Por definição de RH, um Master Black Belt lidera projetos multimilionários de escopo cruzado (Produção $\\rightarrow$ Qualidade $\\rightarrow$ Logística $\\rightarrow$ Compras). Mas ele **NÃO** tem cargo hierárquico sobre o gerente da Produção ou o diretor de Compras. 

## A Matriz de Stakeholders (C-Level)
O MBB mapeia a energia política da sala.
* **Sponsor (Campeão)**: O VP que banca financeiramente seu projeto. Se ele é fraco, The Project is Dead on Arrival (DOA). O Sponsor derruba as paredes funcionais para o BB passar.
* **Gatekeepers (Sabotadores)**: Gerentes que perdem poder (budget ou headcounts) com a otimização lean que você aprovou. O MBB deve identificar se a resistência é Tecnológica (acham que n vai dar certo) ou Política (eles odeiam você). Se for Política, o Sponsor tem que intervir de C-Level para C-Level.
      `
    }
  ]
},

{
  id: 11,
  title: "Finanças e Hoshin Kanri (Visão Executiva)",
  description: "Desdobramento Estratégico, Valuation de Projetos (VPL/ROI) e Custos Baseline.",
  difficulty: "Avançado",
  lessons: [
    {
      id: "11.1",
      title: "Hoshin Kanri — A Matriz-X",
      content: `
# Hoshin Kanri — O Bússola Estratégica
Enquanto Gerentes focam em KPIs operacionais, o MBB trabalha no **Hoshin Kanri (Desdobramento Estratégico)**.
A Diretoria define metas de 5 anos ("Tornar-se a usina mais verde da Europa"). O Hoshin pega essa visão microscópica e desenha a Matriz-X para conectar essa meta ao "Projeto Belt Trimestral de Redução de Gás Carbônico no Forno 4".

Nenhum Green Belt deve iniciar um projeto se o escopo não estiver atrelado ao Hoshin Matrix do CEO do ano fiscal. Do contrário, o projeto será cancelado no meio por falta de CAPEX.
      `
    },
    {
      id: "11.2",
      title: "Valuation Ouro: Hard Savings vs Soft Savings",
      content: `
# A Matemática do Project-Charter

O Controller Financeiro odeia "Dinheiro de Monopoly" (Soft Savings).
1. **Hard Savings**: O projeto do Black Belt reduziu a conta de energia da fábrica em US$ 20.000 mensais provados em fatura, ou cortou a compra de matéria prima. Impacto direto no *P&L (EBITDA)* no mês seguinte.
2. **Soft Savings**: "Salvei 400 horas dos analistas melhorando o ERP". O Controller pergunta: "Você demitiu analistas? Eles geraram novos lucros com essas horas? Não? Então o gasto da folha pagadora continuou o mesmo. Isso é Cost Avoidance, não Hard Saving."

## Engenharia Financeira de CAPEX/OPEX
O MBB não aprova o Improve Phase sem calcular a TIR (Taxa Interna de Retorno) e o VPL (Valor Presente Líquido).
Seu robô de melhoria custa US$ 2 milhões. Ele economiza US$ 500 mil ao ano. O VPL com taxa de desconto (WACC) de 14% prova se o VP deve colocar esse dinheiro no seu robô (que envelhece) ou no Tesouro Direto americano (Risco zero). Se o VPL for negativo, Triz ou Poka-Yoke mecânico são as únicas saídas.
      `
    }
  ]
},

{
  id: 12,
  title: "A Banca MBB — Carreira e Mentoria",
  description: "Liderando Portfólios, Mentoria de Belts e Defesa do Board Certification.",
  difficulty: "Básico",
  lessons: [
    {
      id: "12.1",
      title: "Tollgate Review e a Mentoria do MBB",
      content: `
# A Hierarquia do Cinturão Funcional

O **Master Black Belt (MBB)** não executa projetos sozinho o tempo todo. Ele é o Arquiteto do Portfólio.
* **Yellow Belts**: SME (Subject Matter Experts) do chão de fábrica que participam dos Kaizens.
* **Green Belts**: Gerentes que resolvem problemas locais nas horas vagas (15% do tempo).
* **Black Belts**: Assassinos em tempo integral (100%). Cuidam dos projetos Cross-Funcionais e Milionários de Estatística Avançada.
* **Master Black Belts**: Escolhem a dedo quais projetos vão para quais Black Belts. Orientam a aplicação de DOE complexo e negociam os Tollgates com os Sponsors VPs.

## O Tollgate Review
A cada transição de fase (D $\\rightarrow$ M $\\rightarrow$ A $\\rightarrow$ I $\\rightarrow$ C), o projeto para. O BB se apresenta ao **Board Tollgate** (Sponsor, Process Owner, Controller, MBB).
Apenas com o "Go" as chaves financeiras do Capex da próxima fase são destravadas.
      `
    },
    {
      id: "12.2",
      title: "Preparação para o Board (CMBB / CSSBB)",
      content: `
# A Defesa Final da Tese Executiva

Diferente do PMP ou CSM, onde você marca respostas ABC e se certifica, para virar **Black Belt Certificado Oficialmente** (pela ASQ, IASSC, ou C-Level Fortune 500), marcar a alternativa correta do Chi-Quadrado é apenas a Fase 1.

## O Portfólio de Case Real (Fase 2)
Ninguém é Black Belt se não entregou lucro real auditado pela tesouraria da empresa. Você precisa submeter um a dois projetos finalizados (DMAIC comprovado). As multinacionais e institutos exigem a carta do Controller Financeiro assinada, atestando os US$ 100K+ salvos em *Hard Savings*.

## A Banca de Defesa (MBB Defense)
Para virar Master, você não faz mais prova de regressão. Você defende seu Painel perante 3 MBBs sêniores (Mestrado de Negócios).
Eles destruirão sua análise de normalidade no Measure. Dirão que seu VIF do Analyze foi fraco. Perguntarão por que você não escolheu uma Weibull. Argumentarão que o Sponsor OCAP do Control não estava no Hoshin Estratégico da empresa.

Você sai dessa sala não com um título acadêmico, mas com uma armadura de Aço Executivo. Bem-vindo à Excelência.
      `
    }
  ]
}

]; // fim do array modules
