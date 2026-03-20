// ============================================================
// data_modules.js — Conteúdo completo dos 12 módulos
// ============================================================

export const modules = [

// ── MÓDULO 1 ─────────────────────────────────────────────
{
  id: 1,
  title: "Fundamentos do Six Sigma",
  description: "O que é Six Sigma, história, filosofia e o papel de cada belt na organização.",
  difficulty: "Básico",
  lessons: [
    {
      id: "1.1",
      title: "O que é Six Sigma?",
      content: `
# O que é Six Sigma?

Six Sigma é uma **metodologia de melhoria de processos** baseada em dados e estatística, com o objetivo de reduzir variabilidade e eliminar defeitos em processos de qualquer natureza — industrial, comercial, financeiro ou de serviços.

## A Origem

O Six Sigma nasceu na **Motorola em 1986**, liderado pelo engenheiro Bill Smith. O nome vem da letra grega σ (sigma), que em estatística representa o **desvio padrão** — uma medida de variabilidade.

Em 1995, Jack Welch tornou o Six Sigma a estratégia central da **General Electric**, e isso disseminou a metodologia pelo mundo inteiro.

## O que significa "Seis Sigma"?

Em um processo que opera a **6 sigma de qualidade**, apenas **3,4 defeitos por milhão de oportunidades (DPMO)** são produzidos. Isso equivale a:

| Nível Sigma | DPMO        | % Sem Defeito |
|-------------|-------------|---------------|
| 1σ          | 691.462     | 30,9%         |
| 2σ          | 308.538     | 69,1%         |
| 3σ          | 66.807      | 93,3%         |
| 4σ          | 6.210       | 99,4%         |
| 5σ          | 233         | 99,98%        |
| 6σ          | 3,4         | 99,9997%      |

> 💡 **Dica:** A maioria das empresas opera entre 3σ e 4σ. Ir de 3σ para 6σ representa uma **redução de defeitos de 99,7%**.

## Princípios Fundamentais

1. **Foco no cliente** — toda melhoria parte da voz do cliente (VOC)
2. **Orientação por dados** — decisões baseadas em fatos, nunca em intuição
3. **Gestão por processos** — todo resultado é consequência de um processo
4. **Redução de variabilidade** — variação é inimiga da qualidade
5. **Melhoria contínua** — kaizen integrado ao Six Sigma

## Six Sigma vs. Lean

| Dimensão     | Six Sigma             | Lean                       |
|--------------|----------------------|---------------------------|
| Foco         | Variabilidade/defeitos | Desperdício/velocidade   |
| Origem       | Motorola (1986)       | Toyota (TPS, anos 1950)   |
| Ferramenta   | DMAIC, DOE, SPC       | VSM, 5S, Kanban, Kaizen   |
| Resultado    | Qualidade             | Fluxo e velocidade        |

**Lean Six Sigma** combina as duas abordagens: elimina desperdícios E reduz variabilidade.
      `
    },
    {
      id: "1.2",
      title: "A Hierarquia de Belts",
      content: `
# A Hierarquia de Belts

## Os Papéis no Six Sigma

### 🎯 Champion / Sponsor
- Membro da alta liderança (VP, Diretor)
- Conecta os projetos à estratégia da empresa
- Remove barreiras organizacionais
- Aprova o escopo e recursos dos projetos

### ⚫ Master Black Belt (MBB)
- Maior especialista técnico de Six Sigma
- Treina e certifica Black Belts e Green Belts
- Supervisiona múltiplos projetos simultaneamente
- Atua na definição do programa corporativo de melhoria
- **Requisito:** anos de experiência + portfólio aprovado pela ASQ

### ⚫ Black Belt (BB)
- Lidera projetos DMAIC de alto impacto (full-time)
- Especialista em estatística e ferramentas avançadas
- Faz coaching de Green Belts
- **Meta:** US$ 500k–1M em savings por projeto
- **Requisito:** 3 anos de experiência + projeto concluído

### 🟢 Green Belt (GB)
- Lidera projetos de menor escopo (part-time, ~25% do tempo)
- Usa ferramentas básicas a intermediárias do DMAIC
- Executa coleta de dados e análises com suporte do BB

### 🟡 Yellow Belt
- Participa de equipes de projetos
- Conhece os fundamentos do DMAIC
- Identifica oportunidades e coleta dados

### ⬜ White Belt
- Consciência básica sobre Six Sigma
- Suporte a projetos como parte da equipe local

## A Estrutura de Governança

\`\`\`
Diretoria / C-Suite
    └── Champions (por área)
          └── Master Black Belts (corporativo)
                └── Black Belts (projetos)
                      └── Green Belts (sub-projetos)
                            └── Yellow/White Belts (times)
\`\`\`

> 💡 **Na prática:** Para cada 100 funcionários, recomenda-se 1 Black Belt e 10 Green Belts.
      `
    },
    {
      id: "1.3",
      title: "Visão Geral do DMAIC",
      content: `
# O Framework DMAIC

DMAIC é o coração do Six Sigma. É um roteiro de 5 fases para resolver problemas e melhorar processos **usando dados**.

## As 5 Fases

### D — Define (Definir)
**Pergunta central:** "Qual é o problema e por que ele importa?"

- Identificar o problema a partir da voz do cliente (VOC)
- Criar o Project Charter (contrato do projeto)
- Mapear o processo em alto nível (SIPOC)
- Definir o escopo, metas e entregáveis
- Identificar stakeholders

### M — Measure (Medir)
**Pergunta central:** "Como o processo está se comportando hoje?"

- Validar o sistema de medição (MSA/Gage R&R)
- Coletar dados de baseline do processo
- Calcular a capacidade atual (Cp, Cpk, DPMO)
- Estratificar dados por causa potencial

### A — Analyze (Analisar)
**Pergunta central:** "Quais são as causas-raiz do problema?"

- Identificar causas potenciais (Fishbone / Ishikawa)
- Priorizar causas com análise estatística
- Confirmar causas-raiz com hipóteses (testes estatísticos)
- Quantificar o impacto de cada causa

### I — Improve (Melhorar)
**Pergunta central:** "Como podemos resolver as causas-raiz?"

- Gerar soluções criativas (brainstorming, TRIZ)
- Selecionar a melhor solução (matriz de priorização)
- Design of Experiments (DOE) para otimizar
- Implementar piloto e validar

### C — Control (Controlar)
**Pergunta central:** "Como garantimos que a melhoria se sustenta?"

- Criar Plano de Controle
- Implementar SPC (cartas de controle)
- Treinar equipe no novo processo
- Documentar e fazer handoff ao Process Owner
- Monitorar KPIs por 3–6 meses

## DMAIC vs. DMADV

| Situação | Metodologia |
|----------|------------|
| Processo existe e precisa de melhoria | **DMAIC** |
| Processo não existe ou precisa ser redesenhado | **DMADV** (Design for Six Sigma) |

> 💡 **Regra de ouro:** Se você já tem um processo rodando e quer melhorá-lo, use DMAIC. Se precisar criar algo do zero, use DMADV.
      `
    }
  ]
},

// ── MÓDULO 2 ─────────────────────────────────────────────
{
  id: 2,
  title: "Fase DEFINE — Definindo o Problema",
  description: "Project Charter, VOC, SIPOC, CTQ Tree e escopo do projeto.",
  difficulty: "Básico",
  lessons: [
    {
      id: "2.1",
      title: "Voice of the Customer (VOC)",
      content: `
# Voice of the Customer (VOC)

## O que é VOC?

A Voz do Cliente é o processo de **capturar as expectativas, preferências, necessidades e aversões do cliente** em relação ao produto ou serviço que você entrega.

> "A qualidade só existe nos olhos do cliente." — Joseph Juran

## Métodos de Captura do VOC

### 1. Entrevistas Diretas
- Mais ricas em insights qualitativos
- Perguntas abertas: "O que mais te frustra no nosso processo de entrega?"
- Ideal para explorar contextos complexos

### 2. Surveys / Pesquisas
- Escala grande, dados quantitativos
- NPS (Net Promoter Score): "Em uma escala de 0–10, você nos recomendaria?"
- CSAT: "Como você avaliaria sua satisfação?"

### 3. Reclamações e Tickets
- Dados já existentes — não custam nada a mais
- CRM, SAC, e-mail de reclamações
- Classificar por categoria e frequência

### 4. Observação (Gemba)
- "Ir ao chão de fábrica / campo" para observar o cliente usando o produto
- Lean originou o conceito de Gemba Walk

### 5. Focus Groups
- Dinâmicas em grupo para descobrir percepções latentes
- Útil para desenvolvimento de novos produtos/serviços

## CTQ Tree (Critical to Quality)

O CTQ Tree transforma necessidades vagas do cliente em **requisitos mensuráveis**.

\`\`\`
Necessidade do Cliente (vaga)
    └── Drivers (o que causa satisfação)
          └── CTQs (métricas específicas e mensuráveis)
\`\`\`

### Exemplo:
- **Necessidade:** "Entrega rápida"
  - **Driver:** Tempo do pedido ao recebimento
    - **CTQ:** ≤ 5 dias úteis após confirmação de pagamento
  - **Driver:** Comunicação sobre status
    - **CTQ:** Notificação em ≤ 2h após cada mudança de status

## Modelo de Kano

O Modelo de Kano categoriza atributos do produto em 3 tipos:

| Tipo          | Descrição                                          | Exemplo                  |
|---------------|---------------------------------------------------|--------------------------|
| **Básicos**   | Se ausentes, o cliente fica insatisfeito           | Entrega no prazo         |
| **Lineares**  | Mais = melhor (proporcional à satisfação)          | Velocidade de resposta   |
| **Atrativos** | Surpreendem o cliente positivamente               | Embalagem premium, brindes|

> 💡 **Dica de Black Belt:** Não confunda "o que o cliente diz que quer" com "o que realmente importa". A análise de Kano ajuda a descobrir necessidades latentes que o cliente não consegue articular.
      `
    },
    {
      id: "2.2",
      title: "Project Charter",
      content: `
# Project Charter — O Contrato do Projeto

## O que é?

O Project Charter é o **documento fundacional** de qualquer projeto Six Sigma. Ele:
- Define claramente o que será feito e por quê
- Alinha expectativas entre o time, o sponsor e a liderança
- Serve como referência durante todo o projeto
- É um "contrato" que pode ser revisado, mas não ignorado

## Estrutura do Project Charter

### 1. Título do Projeto
Descritivo, específico, orientado a resultado.
- ❌ Ruim: "Melhoria de processo"
- ✅ Bom: "Redução do ciclo de aprovação de crédito de 7 para 3 dias"

### 2. Business Case
- Por que este projeto é importante para o negócio?
- Impacto financeiro estimado
- Alinhamento estratégico

### 3. Problem Statement (Declaração do Problema)
Use a estrutura **SMART**:
- **S**pecific — específico
- **M**easurable — mensurável
- **A**chievable — alcançável
- **R**elevant — relevante
- **T**ime-bound — com prazo

> Exemplo: "O processo de propostas comerciais leva em média 8,3 dias com desvio padrão de 4,1 dias, gerando perda de 23% das oportunidades por demora. Meta: reduzir para ≤ 3 dias em 90 dias."

### 4. Escopo
- **In Scope:** o que ESTÁ incluído
- **Out of Scope:** o que NÃO está incluído
- Fronteiras claras evitam scope creep

### 5. Metas do Projeto
- Métricas de processo (Y primário) e secundárias
- Baseline atual (onde estamos)
- Meta (onde queremos chegar)
- Prazo

### 6. Equipe
- Sponsor / Champion
- Black Belt (líder do projeto)
- Green Belts e membros
- Process Owner (quem recebe o processo ao final)

### 7. Cronograma de Alto Nível
| Fase   | Início     | Fim        | Entregável Principal     |
|--------|------------|------------|--------------------------|
| Define | Sem. 1     | Sem. 2     | Charter aprovado         |
| Measure| Sem. 3     | Sem. 6     | Baseline estabelecido    |
| Analyze| Sem. 7     | Sem. 10    | Causas-raiz identificadas|
| Improve| Sem. 11    | Sem. 16    | Solução piloto validada  |
| Control| Sem. 17    | Sem. 20    | Plano de controle ativo  |

> 💡 **Dica:** O Charter não é escrito uma vez e esquecido. Revise-o a cada fase. Se o escopo mudar, documente e revalide com o Sponsor.
      `
    },
    {
      id: "2.3",
      title: "SIPOC — Mapeando o Processo",
      content: `
# SIPOC — A Visão de 30.000 Pés do Processo

## O que é SIPOC?

SIPOC é uma ferramenta de mapeamento de alto nível que representa um processo em 5 dimensões:

| Letra | Inglês     | Português     | Pergunta                          |
|-------|-----------|---------------|-----------------------------------|
| S     | Suppliers | Fornecedores  | Quem alimenta o processo?         |
| I     | Inputs    | Entradas      | O que entra no processo?          |
| P     | Process   | Processo      | Quais são as etapas principais?   |
| O     | Outputs   | Saídas        | O que o processo produz?          |
| C     | Customers | Clientes      | Quem recebe as saídas?            |

## Quando Usar o SIPOC?

- **Início do projeto** para alinhar o entendimento do processo entre todos
- Quando o processo não está documentado
- Para definir o **escopo** (fronteiras de Supplier a Customer)
- Para identificar onde o cliente está recebendo as saídas

## Como Construir um SIPOC (5 passos)

1. **Processo primeiro:** Liste as 5–7 etapas principais (verbos de ação)
2. **Outputs:** O que sai de cada etapa?
3. **Customers:** Quem recebe cada output?
4. **Inputs:** O que precisa entrar para o processo funcionar?
5. **Suppliers:** Quem fornece cada input?

## Exemplo SIPOC — Processo Comercial B2B

| Suppliers           | Inputs                    | Process                         | Outputs                   | Customers         |
|---------------------|--------------------------|----------------------------------|--------------------------|-------------------|
| Marketing           | Leads qualificados        | 1. Receber e qualificar lead     | Proposta comercial        | Comprador         |
| Estoque/Logística   | Tabela de preços atualizada| 2. Visitar / ligar para prospect | Contrato assinado         | Jurídico          |
| Financeiro          | Crédito aprovado          | 3. Elaborar proposta             | Pedido de compra          | Logística         |
| Jurídico            | Contrato padrão           | 4. Negociar e fechar             | Nota fiscal               | Faturamento       |
| TI / CRM            | Dados do cliente no sistema| 5. Registrar no CRM             | Registro de CRM atualizado | Pós-venda        |

> 💡 **Importante:** O SIPOC não é um fluxograma detalhado. Ele mostra os **5–7 passos macro**. O detalhamento vem no Process Map da fase Measure.

## SIPOC x Value Stream Map

| SIPOC | Value Stream Map (VSM) |
|-------|----------------------|
| Alto nível (5–7 passos) | Detalhado (cada micro-etapa) |
| Usado no Define | Usado no Measure/Analyze |
| Foco em quem/o quê | Foco em tempo e fluxo |
      `
    }
  ]
},

// ── MÓDULO 3 ─────────────────────────────────────────────
{
  id: 3,
  title: "Fase MEASURE — Medindo a Realidade",
  description: "Coleta de dados, MSA/Gage R&R, capacidade de processo, Cp e Cpk.",
  difficulty: "Intermediário",
  lessons: [
    {
      id: "3.1",
      title: "Tipos de Dados e Plano de Coleta",
      content: `
# Tipos de Dados e Plano de Coleta

## Tipos de Dados

### Dados Contínuos (Variáveis)
- Mensuráveis em qualquer escala
- Mais ricos em informação estatística
- Exemplos: peso (kg), temperatura (°C), tempo (dias), resistência (MPa)

### Dados Discretos (Atributos)
- Contáveis, finitos
- Exemplos: número de defeitos, aprovado/reprovado, sim/não

> 💡 **Regra:** Sempre prefira dados contínuos quando possível. Para o mesmo nível de confiança estatística, dados contínuos precisam de amostras **muito menores** do que atributos.

## A Equação Y = f(X)

O coração do Six Sigma é esta equação:

> **Y = f(X₁, X₂, X₃, ...)**

- **Y** = resultado que queremos melhorar (saída do processo, Big Y)
- **X** = causas / variáveis de entrada que influenciam Y
- **f** = a função (o processo em si)

Nosso trabalho é descobrir quais **X's** causam variação no **Y**.

## Plano de Coleta de Dados

Um bom plano responde:
1. **O quê** medir (métrica específica, definição operacional clara)
2. **Onde** coletar (ponto do processo)
3. **Como** medir (instrumento, metodologia)
4. **Quem** coleta (responsável)
5. **Quando** e com que **frequência**
6. **Tamanho da amostra** (estatisticamente significativo)

### Definição Operacional
É crucial ter uma definição precisa para evitar subjetividade:
- ❌ Ruim: "Reclamação do cliente"
- ✅ Bom: "E-mail ou ligação recebida no SAC classificada como 'insatisfação' ou 'defeito' pelo atendente, registrada no CRM com o tipo 'Reclamação' no prazo de 24h após o contato."
      `
    },
    {
      id: "3.2",
      title: "MSA — Análise do Sistema de Medição",
      content: `
# MSA — Measurement System Analysis

## Por que o Sistema de Medição Importa?

Antes de analisar qualquer dado, precisamos garantir que o instrumento de medição (seja um paquímetro, um cronômetro, ou até a avaliação de um inspetor humano) é **confiável**.

> Se o sistema de medição é ruim, todos os dados coletados são inúteis — ou pior, enganosos.

## Variação Total = Variação Real + Variação do Sistema de Medição

\`\`\`
Variação Observada = Variação Real do Processo + Variação de Medição
\`\`\`

## Gage R&R (Repetibilidade e Reprodutibilidade)

### Repetibilidade
- O mesmo operador, usando o mesmo instrumento, obtém o **mesmo resultado** ao medir a mesma peça?
- Variação do **equipamento**

### Reprodutibilidade
- Operadores **diferentes**, usando o mesmo instrumento, obtém o mesmo resultado?
- Variação do **operador**

## Critérios de Aceitação do Gage R&R

| %GRR            | Decisão                                    |
|-----------------|--------------------------------------------|
| < 10%           | ✅ Sistema de medição aceitável            |
| 10% – 30%       | ⚠️ Pode ser aceitável dependendo do contexto|
| > 30%           | ❌ Sistema de medição inaceitável — corrigir primeiro |

## Parâmetros Adicionais do MSA

- **Acurácia (Bias):** O instrumento mede o valor verdadeiro em média?
- **Linearidade:** A acurácia varia conforme o range de medição?
- **Estabilidade:** O instrumento se comporta igual ao longo do tempo?
- **Discriminação:** O instrumento consegue distinguir valores diferentes?

> 💡 **Dica de Black Belt:** Antes de qualquer análise de dados, sempre execute um MSA. Um projeto que ignora o MSA corre o risco de "melhorar" algo que na verdade não estava errado — era apenas variação de medição.
      `
    },
    {
      id: "3.3",
      title: "Capacidade do Processo: Cp e Cpk",
      content: `
# Capacidade do Processo

## O que é Capacidade?

Capacidade mede o quanto o processo é **capaz de entregar dentro das especificações** do cliente de forma consistente.

Imagine dois extremos:
- **Processo incapaz:** Produz fora das especificações regularmente
- **Processo capaz:** Produz dentro das especificações quase sempre

## Limites de Especificação

Definidos pelo **cliente ou engenharia**:
- **LSE (Limite Superior de Especificação):** valor máximo aceitável
- **LIE (Limite Inferior de Especificação):** valor mínimo aceitável

## Índice Cp (Capacidade Potencial)

Mede a **largura** da janela de especificação vs. a variabilidade do processo:

\`\`\`
Cp = (LSE - LIE) / (6σ)
\`\`\`

- **Cp ≥ 1,33:** processo capaz
- **Cp = 1,00:** processo marginal
- **Cp < 1,00:** processo incapaz

> ⚠️ **Limitação do Cp:** Ele não considera se o processo está **centralizado** na especificação. Um processo pode ter Cp alto mas estar todo deslocado para um lado.

## Índice Cpk (Capacidade Real)

Considera **tanto a variabilidade quanto o centramento**:

\`\`\`
Cpk = min[ (LSE - μ) / (3σ),  (μ - LIE) / (3σ) ]
\`\`\`

- O Cpk pega o **menor** dos dois valores (o lado mais crítico)
- **Cpk ≥ 1,33:** processo capaz e centrado
- **Cpk = Cp:** processo perfeitamente centrado
- **Cpk < Cp:** processo deslocado do centro

## Relação Cpk → Sigma → DPMO

| Cpk   | Nível Sigma | DPMO      |
|-------|-------------|-----------|
| 0,50  | 1,5σ        | 500.000   |
| 0,67  | 2σ          | 308.537   |
| 1,00  | 3σ          | 66.807    |
| 1,33  | 4σ          | 6.210     |
| 1,67  | 5σ          | 233       |
| 2,00  | 6σ          | 3,4       |

## Pp e Ppk (Desempenho do Processo)

Enquanto Cp/Cpk usam o **desvio padrão de curto prazo** (dentro dos subgrupos), Pp/Ppk usam o **desvio padrão de longo prazo** (toda a variação histórica).

- Use **Cp/Cpk** para entender a capacidade potencial
- Use **Pp/Ppk** para entender o desempenho real ao longo do tempo

> 💡 **Regra prática:** Se Cpk >> Ppk, há variação especial no processo (algo além da variação aleatória normal) que precisa ser investigada.
      `
    }
  ]
},

// ── MÓDULO 4 ─────────────────────────────────────────────
{
  id: 4,
  title: "Estatística Aplicada ao Six Sigma",
  description: "Distribuições, testes de hipótese, correlação, regressão e ANOVA.",
  difficulty: "Avançado",
  lessons: [
    {
      id: "4.1",
      title: "Distribuições de Probabilidade",
      content: `
# Distribuições de Probabilidade

## Por que Importam?

A distribuição de probabilidade descreve o **comportamento dos dados**. Escolher o modelo estatístico errado leva a conclusões incorretas.

## Distribuição Normal (Gaussiana)

A mais importante em Six Sigma. Caracterizada por:
- Simétrica em torno da média (μ)
- Definida por μ e σ
- Regra 68-95-99,7:
  - 68,3% dos dados dentro de μ ± 1σ
  - 95,4% dentro de μ ± 2σ
  - 99,7% dentro de μ ± 3σ
  - 99,9997% dentro de μ ± 6σ

**Quando usar:** dados contínuos como tempo, peso, temperatura, dimensões.

## Distribuição Binomial

Para dados de **atributos com dois resultados** (aprovado/reprovado, sim/não):
\`\`\`
P(X=k) = C(n,k) × p^k × (1-p)^(n-k)
\`\`\`
- **n:** número de tentativas
- **p:** probabilidade de sucesso
- **k:** número de sucessos desejados

**Quando usar:** Proporção de defeituosos em amostras.

## Distribuição de Poisson

Para **contagem de eventos raros** em um intervalo de tempo ou espaço:
\`\`\`
P(X=k) = (λ^k × e^(-λ)) / k!
\`\`\`
- **λ:** taxa média de ocorrência

**Quando usar:** Defeitos por unidade, chamadas por hora, acidentes por mês.

## Teste de Normalidade

Antes de usar qualquer teste paramétrico, verifique se os dados são normais:
- **Anderson-Darling:** preferido pelo Minitab (mais sensível nas caudas)
- **Shapiro-Wilk:** melhor para amostras pequenas (n < 50)
- **Kolmogorov-Smirnov:** para amostras grandes

Se os dados **não forem normais**, use:
- Transformação Box-Cox
- Testes não-paramétricos (Mann-Whitney, Kruskal-Wallis)
      `
    },
    {
      id: "4.2",
      title: "Testes de Hipótese",
      content: `
# Testes de Hipótese

## A Lógica dos Testes

Um teste de hipótese é um procedimento para decidir, com base em dados, se uma afirmação sobre a população é verdadeira.

### As Duas Hipóteses
- **H₀ (Hipótese Nula):** o status quo, o que assumimos ser verdadeiro por padrão
- **H₁ (Hipótese Alternativa):** o que queremos provar

### Tipos de Erro
| Decisão vs. Realidade | H₀ é verdadeira | H₀ é falsa |
|----------------------|----------------|------------|
| **Rejeitar H₀**      | Erro Tipo I (α) | Decisão Correta |
| **Não rejeitar H₀**  | Decisão Correta | Erro Tipo II (β) |

- **α (alfa):** nível de significância, geralmente 0,05 (5%)
- **p-valor:** se p < α, rejeitamos H₀

### Regra de Ouro
> Se **p-valor < 0,05**, há evidência estatística suficiente para rejeitar H₀.
> Se **p-valor ≥ 0,05**, não há evidência suficiente — não é prova de que H₀ é verdadeira.

## Selecionando o Teste Correto

### Comparando Médias
| Situação | Teste |
|----------|-------|
| 1 amostra vs. valor conhecido | t-test de 1 amostra |
| 2 amostras independentes | t-test de 2 amostras |
| 2 amostras pareadas (antes/depois) | t-test pareado |
| 3+ amostras | ANOVA (F-test) |

### Comparando Variâncias
| Situação | Teste |
|----------|-------|
| 2 amostras | F-test de Levene |
| 3+ amostras | Bartlett ou Levene |

### Dados de Atributo
| Situação | Teste |
|----------|-------|
| Proporcões | Teste Z de proporções |
| Tabelas de contingência | Chi-quadrado (χ²) |

## Exemplo Prático

**Cenário:** Um BB quer saber se o novo processo de aprovação reduz o tempo médio de 8 para 5 dias.

- H₀: μ_novo ≥ μ_antigo (sem melhoria)
- H₁: μ_novo < μ_antigo (há melhoria)
- Coleta 30 amostras do processo novo
- Roda t-test de 1 amostra
- p-valor = 0,012 < 0,05
- **Conclusão:** Rejeita H₀ — há evidência estatística de que o novo processo é mais rápido.
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
      title: "FMEA — Análise dos Modos de Falha",
      content: `
# FMEA — Failure Mode and Effects Analysis

## O que é FMEA?

FMEA é uma metodologia **proativa** para identificar, priorizar e eliminar falhas potenciais antes que elas aconteçam.

Responde três perguntas:
1. **O que pode falhar?** (Modo de Falha)
2. **O que acontece quando falha?** (Efeito)
3. **Por que falha?** (Causa)

## Os 3 Componentes do RPN

**RPN (Risk Priority Number) = Severidade × Ocorrência × Detecção**

### Severidade (S) — escala 1–10
O quanto o efeito da falha é grave para o cliente?
- 1–3: Menor, cliente mal percebe
- 4–6: Moderado, causa insatisfação
- 7–8: Alto, defeito funcional
- 9–10: Crítico, risco de segurança ou recall

### Ocorrência (O) — escala 1–10
Com que frequência a causa acontece?
- 1–2: Remota (< 1 em 1.000.000)
- 3–4: Baixa (1 em 100.000)
- 5–6: Moderada (1 em 1.000)
- 7–8: Alta (1 em 100)
- 9–10: Muito alta (> 1 em 10)

### Detecção (D) — escala 1–10
Com que eficácia os controles atuais detectam a falha antes de chegar ao cliente?
- 1–2: Quase certo detectar
- 3–4: Alta probabilidade de detectar
- 5–6: Moderada probabilidade
- 7–8: Baixa probabilidade
- 9–10: Impossível detectar

## Interpretando o RPN

- **RPN > 100:** Alta prioridade — ação imediata
- **RPN 50–100:** Média prioridade — planejar ação
- **RPN < 50:** Monitorar

> ⚠️ **Cuidado:** Um FMEA com Severidade = 9 ou 10 merece ação imediata **independente do RPN** — o risco de segurança nunca pode ser ignorado.

## FMEA de Processo vs. FMEA de Design

| Tipo | Foco | Quando Usar |
|------|------|-------------|
| PFMEA | Falhas em etapas do processo | Fase Analyze / Control |
| DFMEA | Falhas no design do produto | Fase Define / DFSS |
      `
    }
  ]
},

// ── MÓDULO 6 ─────────────────────────────────────────────
{
  id: 6,
  title: "Fase IMPROVE — Projetando Soluções",
  description: "DOE, Design of Experiments, brainstorming estruturado, TRIZ e piloto.",
  difficulty: "Avançado",
  lessons: [
    {
      id: "6.1",
      title: "Design of Experiments (DOE)",
      content: `
# Design of Experiments — DOE

## O que é DOE?

DOE é um método estatístico para **determinar como múltiplos fatores influenciam uma resposta**, de forma simultânea e eficiente.

Ao invés de testar um fator de cada vez (OFAT — One Factor At a Time), o DOE testa **combinações** de fatores, o que:
- Exige menos experimentos
- Detecta interações entre fatores
- Identifica configurações ótimas

## Terminologia do DOE

| Termo          | Definição                                        |
|---------------|--------------------------------------------------|
| **Fator**     | Variável de entrada que você controla (X)        |
| **Nível**     | Valor do fator (ex: temperatura: 150°C ou 200°C) |
| **Resposta**  | O resultado que você mede (Y)                    |
| **Rodada**    | Uma combinação específica de fatores             |
| **Replicação**| Repetir a mesma rodada para estimar o erro       |

## Fatorial Completo (2k)

Para k fatores em 2 níveis, testa **todas as 2k combinações**:
- 2 fatores: 4 rodadas (2² = 4)
- 3 fatores: 8 rodadas (2³ = 8)
- 4 fatores: 16 rodadas (2⁴ = 16)

## Fatorial Fracionário

Quando há muitos fatores, testa apenas uma **fração** das combinações, assumindo que algumas interações de alta ordem são desprezíveis.

Útil quando o número de rodadas do fatorial completo é impraticável.

## Exemplo DOE — Processo de Polimento de Granito

**Objetivo:** Maximizar o brilho (Ra) da superfície

| Fator        | Nível Baixo (-1) | Nível Alto (+1) |
|--------------|-----------------|-----------------|
| Velocidade disco | 800 rpm     | 1.200 rpm       |
| Pressão      | 2 bar           | 4 bar           |
| Abrasivo grão| 200 mesh        | 400 mesh        |

Com 3 fatores em 2 níveis: 8 rodadas para fatorial completo.

**Resultado:** A análise ANOVA do DOE revelou que **Velocidade × Grão de Abrasivo** têm forte interação — o efeito da velocidade depende do grão utilizado. Sem DOE, esse insight seria perdido.
      `
    }
  ]
},

// ── MÓDULO 7 ─────────────────────────────────────────────
{
  id: 7,
  title: "Fase CONTROL — Sustentando a Melhoria",
  description: "SPC, cartas de controle, Plano de Controle e gestão visual.",
  difficulty: "Intermediário",
  lessons: [
    {
      id: "7.1",
      title: "SPC — Statistical Process Control",
      content: `
# SPC — Controle Estatístico do Processo

## O que é SPC?

SPC é o uso de métodos estatísticos para **monitorar e controlar um processo** ao longo do tempo, distinguindo variação normal (aleatória) de variação especial (causas atribuíveis).

Walter Shewhart criou as primeiras cartas de controle na Bell Labs em 1924.

## Os Dois Tipos de Variação

### Variação Comum (Aleatória)
- Inerente ao processo, sempre presente
- Resultado de muitas causas pequenas interagindo
- Reduzida apenas mudando o **sistema** (melhoria de processo)
- Na carta de controle: pontos dentro dos limites, sem padrões

### Variação Especial (Causas Atribuíveis)
- Origem identificável: troca de fornecedor, manutenção, treinamento
- Sinaliza algo **fora do normal**
- Na carta de controle: pontos fora dos limites de controle ou padrões específicos

## Limites de Controle vs. Limites de Especificação

| Tipo       | Quem Define       | Baseado em                    |
|------------|-------------------|-------------------------------|
| LCL / UCL  | O próprio processo| Dados históricos (μ ± 3σ)     |
| LIE / LSE  | O cliente         | Requisito de qualidade        |

> ⚠️ **Confusão comum:** Limites de controle NÃO são limites de especificação. Um processo pode estar sob controle estatístico mas ser incapaz (fora das especificações).

## Tipos de Cartas de Controle

### Para Dados Contínuos
| Carta      | Quando Usar                                |
|------------|--------------------------------------------|
| **X̄-R**    | Subgrupos de 2–9 amostras                 |
| **X̄-S**    | Subgrupos de ≥ 10 amostras               |
| **X-MR**   | Subgrupos de 1 (medições individuais)     |

### Para Dados de Atributo
| Carta  | Dado                    | Quando Usar                          |
|--------|------------------------|--------------------------------------|
| **p**  | Proporção defeituosa    | Amostras de tamanho variável         |
| **np** | Número defeituosos      | Amostras de tamanho fixo             |
| **c**  | Contagem de defeitos    | Área de oportunidade constante       |
| **u**  | Defeitos por unidade    | Área de oportunidade variável        |

## Regras de Detecção de Causa Especial

Regras de Nelson (8 regras):
1. 1 ponto além de ±3σ
2. 9 pontos consecutivos do mesmo lado da média
3. 6 pontos consecutivos em tendência (todos subindo ou descendo)
4. 14 pontos alternando para cima e para baixo
5. 2 de 3 pontos consecutivos além de ±2σ (mesmo lado)
6. 4 de 5 pontos consecutivos além de ±1σ (mesmo lado)
7. 15 pontos dentro de ±1σ (estratificação)
8. 8 pontos além de ±1σ sem nenhum dentro (mistura)

> 💡 **Na prática:** Regras 1, 2, 3 e 5 são as mais utilizadas.
      `
    }
  ]
},

// ── MÓDULOS 8-12 (estrutura resumida) ────────────────────
{
  id: 8,
  title: "Lean e Eliminação de Desperdícios",
  description: "Os 8 desperdícios, VSM, 5S, Kaizen, Kanban e fluxo contínuo.",
  difficulty: "Intermediário",
  lessons: [
    {
      id: "8.1",
      title: "Os 8 Desperdícios (TIMWOODS)",
      content: `
# Os 8 Desperdícios do Lean (TIMWOODS)

## A Filosofia Lean

O Lean nasceu no Sistema Toyota de Produção (TPS). Seu objetivo é criar **valor máximo para o cliente com o mínimo de recursos** possível.

Valor = o que o cliente está disposto a pagar.
Desperdício (Muda) = qualquer coisa que NÃO agrega valor.

## Os 8 Desperdícios — TIMWOODS

| Letra | Desperdício          | Definição                                        | Exemplo no CRM                         |
|-------|---------------------|--------------------------------------------------|----------------------------------------|
| **T** | Transport           | Movimento desnecessário de material/informação  | Email indo de 5 pessoas antes de chegar ao vendedor |
| **I** | Inventory (Estoque) | Mais do que o necessário aguardando             | 200 leads no funil sem contato há 30 dias |
| **M** | Motion (Movimento)  | Movimento excessivo de pessoas                  | Vendedor abrindo 4 sistemas para ver 1 dado |
| **W** | Waiting (Espera)    | Tempo esperando próxima etapa                   | Proposta esperando aprovação por 3 dias |
| **O** | Overproduction      | Produzir mais do que a demanda atual            | Relatórios gerados que ninguém lê      |
| **O** | Overprocessing      | Mais processo do que o necessário               | Proposta com 30 slides para venda simples |
| **D** | Defects             | Retrabalho, erros, correções                    | Proposta com preço errado — refazer    |
| **S** | Skills (unused)     | Não usar o talento das pessoas                  | Vendedor sênior fazendo cadastro manual|

## Value Stream Map (VSM)

O VSM é o mapa de toda a cadeia de valor, mostrando:
- Cada etapa do processo (caixas de processo)
- Tempo de processamento (VA — Value Added)
- Tempo de espera (NVA — Non-Value Added)
- Fluxo de informação
- Inventários entre etapas

**Fórmula do Lead Time:**
\`\`\`
Lead Time Total = Soma dos Tempos de Processamento + Soma dos Tempos de Espera
\`\`\`

**Eficiência do Ciclo:**
\`\`\`
PCE (Process Cycle Efficiency) = Tempo VA / Lead Time Total × 100%
\`\`\`

A maioria dos processos tem PCE de apenas **5–15%**. O restante é espera e desperdício.
      `
    }
  ]
},

{
  id: 9,
  title: "DFSS — Design for Six Sigma",
  description: "DMADV, QFD, confiabilidade, Monte Carlo e desenvolvimento de novos processos.",
  difficulty: "Avançado",
  lessons: [
    {
      id: "9.1",
      title: "DMADV — Projetando para a Excelência",
      content: `
# DMADV — Design for Six Sigma

## Quando Usar DMADV vs. DMAIC?

| Situação | Metodologia |
|----------|------------|
| Processo existe e tem problemas | **DMAIC** |
| Processo inexiste — criar do zero | **DMADV** |
| Processo é redesenhado radicalmente | **DMADV** |
| Novo produto ou serviço | **DMADV** |

## As 5 Fases do DMADV

### D — Define
- Identificar clientes e CTQs (do cliente)
- Business case e Project Charter
- Metas de desempenho do novo processo/produto

### M — Measure
- Medir as necessidades do cliente em detalhes (benchmarking)
- Traduzir VOC em requisitos técnicos (QFD)
- Estabelecer métricas de desempenho-alvo

### A — Analyze
- Desenvolver alternativas de design
- Avaliar e selecionar o conceito de design ótimo
- Análise de capacidade do design proposto

### D — Design
- Desenvolver o design detalhado
- Simular e prototiar (Monte Carlo, DFMEA)
- Planejar a produção/implementação

### V — Verify
- Testar o design com piloto
- Validar contra as CTQs estabelecidas
- Implementar e fazer handoff

## QFD — Quality Function Deployment (Casa da Qualidade)

O QFD é uma matriz que traduz a **Voz do Cliente (WHATs)** em **Requisitos Técnicos (HOWs)**:

\`\`\`
┌──────────────────────────────────────┐
│     CORRELAÇÕES TÉCNICAS (teto)      │
├─────────────┬────────────────────────┤
│             │   HOWs (Requisitos     │
│    WHATs    │     Técnicos)          │
│  (VOC)      │  T1   T2   T3   T4    │
├─────────────┼────────────────────────┤
│ Necessidade1│  ●    ○              │
│ Necessidade2│       ●    ●         │
│ Necessidade3│  ○              ●   │
├─────────────┼────────────────────────┤
│ Importância │  9    6    7    8    │
│ técnica     │                       │
└──────────────────────────────────────┘
● = Forte correlação (9)
○ = Média correlação (3)
∆ = Fraca correlação (1)
\`\`\`
      `
    }
  ]
},

{
  id: 10,
  title: "Gestão de Equipes e Liderança de Projetos",
  description: "Dinâmicas de equipe, gestão de mudanças, comunicação e resolução de conflitos.",
  difficulty: "Intermediário",
  lessons: [
    {
      id: "10.1",
      title: "Estágios de Desenvolvimento de Equipe",
      content: `
# Modelo de Tuckman — Estágios de Equipe

## Os 4 (+ 1) Estágios

Bruce Tuckman identificou em 1965 os estágios que toda equipe atravessa:

### 1. Forming (Formação)
- Equipe recém-formada, entusiasmada mas ansiosa
- Comportamento polido, pouca discordância
- Dependência alta do líder para direção
- **Papel do BB:** Clarificar papéis, estabelecer normas, criar charter

### 2. Storming (Conflito)
- Divergências surgem, tensão aumenta
- Questionamento de direção e papéis
- Subgrupos podem se formar
- **Papel do BB:** Facilitar discussões construtivas, mediar conflitos, reforçar o objetivo comum

### 3. Norming (Normalização)
- A equipe encontra seu ritmo
- Colaboração aumenta, confiança cresce
- Acordos e normas de trabalho estabelecidos
- **Papel do BB:** Delegar, empoderar, manter o foco

### 4. Performing (Alta Performance)
- Equipe autônoma, produtiva e alinhada
- Foco total no problema/objetivo
- Conflitos construtivos e saudáveis
- **Papel do BB:** Suporte estratégico, remover obstáculos externos

### 5. Adjourning (Encerramento — acréscimo de 1977)
- Conclusão do projeto
- Capturar lições aprendidas
- Reconhecer contribuições individuais

## Gestão de Resistência à Mudança

Toda melhoria de processo enfrenta resistência. O modelo de Kotter (8 passos) para gestão de mudança:

1. Criar senso de urgência
2. Formar coalizão de liderança
3. Criar visão clara e estratégia
4. Comunicar a visão amplamente
5. Empoderar ações (remover barreiras)
6. Gerar vitórias de curto prazo
7. Consolidar ganhos e produzir mais mudança
8. Ancorar na cultura

## Stakeholder Analysis

Matriz Poder × Interesse:
- **Alto Poder + Alto Interesse:** Gerenciar de perto
- **Alto Poder + Baixo Interesse:** Manter satisfeito
- **Baixo Poder + Alto Interesse:** Manter informado
- **Baixo Poder + Baixo Interesse:** Monitorar
      `
    }
  ]
},

{
  id: 11,
  title: "Master Black Belt — Visão Estratégica",
  description: "Hoshin Kanri, gestão de portfólio, treinamento de BBs e estatística avançada.",
  difficulty: "Avançado",
  lessons: [
    {
      id: "11.1",
      title: "Hoshin Kanri — Desdobramento Estratégico",
      content: `
# Hoshin Kanri — Planejamento Estratégico Lean

## O que é Hoshin Kanri?

Hoshin Kanri (方針管理) é uma metodologia japonesa de **alinhamento estratégico** que garante que os objetivos da alta liderança sejam desdobrados em metas e ações concretas em todos os níveis da organização.

Também chamado de "Policy Deployment" ou X-Matrix Planning.

## O Problema que Resolve

Sem Hoshin Kanri:
- Diretoria tem uma estratégia
- Gerência tem outra agenda
- Operação faz o que sempre fez

Com Hoshin Kanri:
- Objetivos de 3–5 anos → Metas anuais → Projetos trimestrais → Tarefas semanais
- Todos alinhados, todos cientes de como seu trabalho contribui para a estratégia

## A X-Matrix (Matriz de Hoshin)

\`\`\`
         Objetivos 3–5 anos (Topo)
              ↕
Resultados  ←——————→  Estratégias Anuais
Anuais                      ↕
              ↕      Metas/Métricas
         Iniciativas/Projetos (Base)
\`\`\`

Cada interseção da X-Matrix mostra o **nível de correlação** entre a iniciativa e o objetivo estratégico.

## Papel do MBB no Hoshin

O Master Black Belt é o **arquiteto da conexão entre a estratégia e os projetos Six Sigma**:
1. Participa do processo de planejamento estratégico
2. Identifica quais objetivos podem ser atingidos via melhoria de processos
3. Seleciona, prioriza e aloca recursos para os projetos certos
4. Garante que o portfólio de projetos está alinhado com o Hoshin
5. Reporta progresso do portfólio para o C-Suite

## Pipeline de Projetos (Gestão de Portfólio)

O MBB gerencia o funil de projetos:
\`\`\`
Identificados → Qualificados → Charterizados → Em Andamento → Concluídos
   (50–100)        (20–30)         (10–15)          (5–8)         (histórico)
\`\`\`

**Critérios de Priorização:**
- Impacto financeiro (saving estimado)
- Alinhamento estratégico
- Viabilidade técnica
- Recursos disponíveis
- Prazo de retorno
      `
    }
  ]
},

{
  id: 12,
  title: "Certificação e Carreira",
  description: "Como se preparar para o exame CSSBB e CMBB, portfólio e desenvolvimento de carreira.",
  difficulty: "Básico",
  lessons: [
    {
      id: "12.1",
      title: "Guia de Preparação para o Exame CSSBB",
      content: `
# Preparação para o Exame CSSBB (ASQ)

## Visão Geral do Exame

- **165 questões** de múltipla escolha
- **4h18min** de duração
- **Open book** — você leva seu próprio material
- Formato: Computadorizado via Prometric
- Idioma: Inglês (e Mandarim em papel)

## Distribuição de Questões por Seção

| Seção                              | Questões |
|------------------------------------|----------|
| I.   Org. Planning & Deployment    | 12       |
| II.  Process Management & Measures | 12       |
| III. Team Management               | 14       |
| IV.  Define                        | 22       |
| V.   Measure                       | 25       |
| VI.  Analyze                       | 22       |
| VII. Improve                       | 18       |
| VIII.Control                       | 16       |
| IX.  DFSS                          | 9        |
| **Total**                          | **150**  |

(+ 15 não pontuadas = 165 no total)

## Estratégia de Estudo — 6 Meses

### Mês 1–2: Fundamentos
- Estudar os módulos 1 a 4 deste curso
- Ler o ASQ CSSBB Handbook (capítulos 1–5)
- Fazer 50 questões práticas por semana

### Mês 3–4: Intermediário
- Estudar módulos 5–8
- Foco especial em Estatística (maior volume de questões)
- Fazer 100 questões por semana

### Mês 5: Avançado
- Estudar módulos 9–12
- Simular exame completo (150 questões em 4h18min)
- Identificar e revisar pontos fracos

### Mês 6: Revisão e Exame
- 3 simulados completos
- Montar material de referência pessoal para levar no exame
- Focar nos tópicos com menor desempenho

## Material de Referência para o Dia do Exame

O CSSBB é **open book**. Prepare um binder organizado:
1. Tabelas de distribuição (Normal, t, F, Chi-quadrado)
2. Fórmulas de capacidade (Cp, Cpk, Pp, Ppk)
3. Critérios de seleção de testes estatísticos
4. Interpretação do Gage R&R
5. Tipos de cartas de controle
6. Fórmulas de DOE
7. Critérios de aprovação do sistema de medição

## Para o CMBB — Além do Exame

O Master Black Belt exige adicionalmente:
1. ✅ Ser CSSBB certificado
2. ✅ Submeter portfólio de projetos (enviado para MBB@asq.org)
3. ✅ Ter portfólio aprovado por painel de MBBs
4. ✅ Acumular evidências de mentoria de BBs

**O portfólio deve conter:**
- Descrição de projetos liderados como BB
- Evidências de treinamento realizado
- Resultados financeiros documentados
- Cartas de recomendação do Champion/Sponsor
      `
    }
  ]
}

]; // fim do array modules
