// ============================================================
// data_cases.js — Dois Cases Detalhados com etapas DMAIC
// ============================================================

export const cases = [

// ════════════════════════════════════════════════════════════
// CASE 1 — MANUFATURA DE ROCHAS ORNAMENTAIS
// ════════════════════════════════════════════════════════════
{
  id: "case-1",
  title: "Fábrica Veneza Stones — Redução de Defeitos em 67%",
  subtitle: "Como um Black Belt transformou uma linha de polimento de granito usando DMAIC",
  industry: "Manufatura — Rochas Ornamentais",
  duration: "20 semanas",
  saving: "R$ 1.240.000 / ano",
  sigmaGain: "De 2,8σ para 4,5σ",
  tags: ["Manufatura", "DMAIC", "DOE", "SPC", "Capacidade"],
  cover_emoji: "🏭",

  context: `
A Veneza Stones é uma empresa exportadora de granito localizada no Espírito Santo. 
Sua principal linha de produção — o polimento de chapas — apresentava uma taxa de 
defeitos de 18,3%, muito acima do tolerável pelo mercado internacional (máximo 3%). 
Cada chapa rejeitada representava um custo de R$ 320, entre material, mão de obra e 
descarte. Com 2.000 chapas polidas por mês, o prejuízo mensal era de ~R$ 103.000.

O Champion do projeto designou a Black Belt Mariana Costa para liderar o projeto. 
Prazo: 20 semanas. Meta: reduzir a taxa de defeitos para abaixo de 5%.
  `,

  phases: [
    {
      phase: "D",
      label: "DEFINE",
      color: "#C9A84C",
      title: "Definindo o Problema com Precisão",
      duration: "Semanas 1–2",
      
      specialist_role: `
**O que o especialista (Black Belt) fez nesta fase:**

Mariana iniciou pela escuta ativa — 3 dias visitando a fábrica, conversando com operadores, supervisores e o gerente de qualidade. Ela não chegou com soluções, mas com perguntas.

Seus entregáveis nesta fase:
- Formulou um Problem Statement preciso (não genérico)
- Criou o Project Charter e obteve assinatura do Champion
- Mapeou o processo com SIPOC
- Identificou todas as CTQs através de entrevistas com clientes exportadores
- Apresentou o business case para a diretoria (ROI esperado vs. custo do projeto)

**Decisão crítica:** O escopo inicial era "melhorar toda a produção". Mariana reduziu ao problema específico: somente a linha de polimento, somente chapas de granito premium (que tinham maior taxa de defeito e maior custo unitário). Isso focou o esforço e aumentou a probabilidade de sucesso.
      `,

      content: `
### Problem Statement

> "A linha de polimento de granito premium da Unidade 2 apresenta taxa de defeito de 18,3% (baseline de 90 dias), resultando em custo de refugo/retrabalho de R$ 103.000/mês. A meta é reduzir para ≤ 5% em 20 semanas, representando saving anual de ≥ R$ 1.200.000."

### Project Charter

| Campo | Valor |
|-------|-------|
| Projeto | Redução de Defeitos — Linha de Polimento Premium |
| Champion | Carlos Menezes (Diretor Industrial) |
| Black Belt | Mariana Costa |
| Process Owner | Fábio Alves (Supervisor de Polimento) |
| Início | 01/03/2024 |
| Conclusão | 21/07/2024 |
| Y Primário | % chapas defeituosas |
| Baseline | 18,3% |
| Meta | ≤ 5% |
| Saving Estimado | R$ 1.240.000/ano |
| Escopo (IN) | Linha de polimento, Unidade 2, granito premium |
| Escopo (OUT) | Mármore, quartzito, demais unidades |

### SIPOC do Processo

| Suppliers | Inputs | Process | Outputs | Customers |
|-----------|--------|---------|---------|-----------|
| Fornecedor de granito bruto | Blocos brutos | 1. Serragem (fio diamantado) | Chapas serradas | Linha de polimento |
| Fornecedor de abrasivos | Discos abrasivos | 2. Calibragem (espessura) | Chapas calibradas | Exportação |
| Fornecedor de água | Água de refrigeração | 3. Polimento (7 cabeças) | Chapas polidas | Loja / distribuidor |
| Manutenção | Máquinas calibradas | 4. Inspeção visual | Relatório de QC | QC |
| RH | Operadores treinados | 5. Triagem e embalagem | Chapas embaladas | Cliente final (EUA/Europa) |

### CTQs Identificadas (VOC)

Entrevistas com 5 clientes exportadores revelaram:

| Requisito do Cliente | CTQ Mensurável |
|---------------------|----------------|
| "Brilho perfeito" | Ra (rugosidade) ≤ 0,8 µm |
| "Espessura uniforme" | 20mm ± 0,5mm |
| "Sem trincas visíveis" | Zero trincas na inspeção visual |
| "Cor consistente" | Delta E (colorimetria) ≤ 3,0 |

### Tipos de Defeitos Observados (Pareto Inicial)

| Defeito | Qty/mês | % | % Acum |
|---------|---------|---|--------|
| Trinca superficial | 189 | 51,6% | 51,6% |
| Brilho irregular | 94 | 25,7% | 77,3% |
| Manchas escuras | 52 | 14,2% | 91,5% |
| Espessura fora | 31 | 8,5% | 100% |
| **Total defeitos** | **366** | | |
      `,
      
      tools: ["Project Charter", "SIPOC", "VOC", "CTQ Tree", "Análise de Pareto Inicial"],
      key_output: "Charter aprovado pelo Champion com escopo e metas definidos"
    },

    {
      phase: "M",
      label: "MEASURE",
      color: "#00D4FF",
      title: "Medindo o Desempenho Real do Processo",
      duration: "Semanas 3–6",
      
      specialist_role: `
**O que o especialista (Black Belt) fez nesta fase:**

Mariana percebeu que os dados de defeitos existentes eram de baixa qualidade — cada inspetor classificava defeitos de forma diferente. Seu primeiro ato foi **padronizar o sistema de medição antes de coletar qualquer dado novo.**

- Conduziu um Gage R&R com os 4 inspetores visuais → resultado: 38% de variação entre inspetores (inaceitável!)
- Criou um guia fotográfico de classificação de defeitos (o que é "trinca leve" vs "trinca grave", etc.)
- Treinou os 4 inspetores com o novo guia
- Re-executou o Gage R&R → %GRR caiu para 8,3% (aprovado)
- Coletou 30 dias de dados com o novo sistema

**Insight crítico:** Parte dos "defeitos" que apareciam nos relatórios eram na verdade variações de medição — os inspetores discordavam entre si. Com o sistema padronizado, o baseline real foi diferente do esperado.
      `,

      content: `
### MSA — Análise do Sistema de Medição (Gage R&R)

**Antes do treinamento:**
- %GRR = 38,7% → ❌ INACEITÁVEL
- Principal fonte: Reprodutibilidade (inspetores diferentes davam classificações diferentes para a mesma chapa)

**Ação:** Criação do "Guia Visual de Defeitos" com fotos categorizadas por tipo e severidade.

**Após o treinamento (repetindo o estudo):**
- %GRR = 8,3% → ✅ APROVADO

### Baseline Real do Processo

Após MSA aprovado, 30 dias de coleta sistemática:

| Métrica | Valor |
|---------|-------|
| Taxa de defeito média | 16,7% |
| Desvio padrão | 3,2% |
| Mínimo diário | 9,1% |
| Máximo diário | 27,4% |
| Sigma Level | 2,42σ |
| DPMO | 167.000 |

**Obs:** O baseline real (16,7%) foi ligeiramente menor que o relatado (18,3%) porque parte era variação de medição.

### Análise de Capacidade Inicial

- LSE = 5% (limite máximo de defeitos aceitável pelo cliente)
- LIE = não existe (zero defeitos é ideal, mas não definido)
- Processo não centrado — assimétrico para a direita
- **Cpk = -0,38** (processo muito incapaz)
- **Pp = 0,15** (desempenho histórico muito abaixo do necessário)

### Estratificação dos Dados

A coleta estratificada revelou padrões importantes:

**Por turno:**
| Turno | Taxa Defeito |
|-------|-------------|
| Manhã (6h–14h) | 12,3% |
| Tarde (14h–22h) | 18,9% |
| Noite (22h–6h) | 24,7% |

→ **Hipótese:** O turno da noite tem comportamento diferente. Investigar na fase Analyze.

**Por cabeça de polimento:**
| Cabeça | Taxa Defeito |
|--------|-------------|
| Cabeças 1–4 | 9,8% |
| Cabeça 5 | 31,2% |
| Cabeça 6 | 29,4% |
| Cabeça 7 | 22,1% |

→ **Hipótese:** As cabeças 5, 6 e 7 são a maior fonte de defeitos.
      `,
      
      tools: ["Gage R&R (MSA)", "Análise de Capacidade", "Histograma", "Gráfico de Run", "Estratificação"],
      key_output: "Baseline confiável estabelecido: 16,7% defeitos, Cpk = -0,38"
    },

    {
      phase: "A",
      label: "ANALYZE",
      color: "#A78BFA",
      title: "Descobrindo as Causas-Raiz",
      duration: "Semanas 7–10",
      
      specialist_role: `
**O que o especialista (Black Belt) fez nesta fase:**

Com as hipóteses geradas na fase Measure, Mariana organizou uma sessão de causa-raiz com 8 pessoas: 3 operadores seniores, 2 técnicos de manutenção, o supervisor de qualidade, o gerente de produção e ela mesma.

Ela facilitou a sessão — não deu respostas, fez perguntas. Usou o Fishbone para estruturar o brainstorm e os 5 Porquês para aprofundar cada causa.

**Mudança de mentalidade que ela promoveu:** Os operadores estavam acostumados a culpar os materiais ("é o granito que é ruim"). Mariana mostrou com dados que o mesmo lote de granito tinha defeito diferente nas cabeças 5–7 vs. cabeças 1–4. Isso derrubou a hipótese do material e focou na máquina e no método.

Ela validou cada hipótese com testes estatísticos antes de aceitar como causa-raiz.
      `,

      content: `
### Diagrama de Ishikawa — Defeito "Trinca Superficial"

**6M analisados:**

**Máquinas:**
- Desgaste das cabeças de polimento (pressão irregular)
- Discos abrasivos fora de especificação (grão inconsistente)
- Rodamentos das cabeças 5–7 com folga (vibração)

**Métodos:**
- Velocidade de avanço variável entre operadores
- Sem procedimento padronizado para troca de abrasivos
- Inspeção visual subjetiva (resolvido com MSA)

**Mão de Obra:**
- Operadores do turno noturno com menos experiência
- Ausência de treinamento nos últimos 18 meses
- Alta rotatividade no turno noturno (5 trocas em 12 meses)

**Material:**
- Dureza do granito varia entre lotes (análise de DRX pendente)
- Discos abrasivos de 3 fornecedores diferentes (sem padronização)

**Meio Ambiente:**
- Temperatura da água de refrigeração varia até 8°C entre turnos

**Medição:**
- Resolvido na fase Measure ✓

### 5 Porquês — Cabeças 5, 6 e 7 com maior defeito

1. **Por quê** a taxa de defeito é maior nas cabeças 5, 6 e 7?
   → Porque a pressão aplicada é irregular nessas cabeças
   
2. **Por quê** a pressão é irregular?
   → Porque os rodamentos dessas cabeças têm folga excessiva
   
3. **Por quê** os rodamentos têm folga?
   → Porque o plano de manutenção preventiva não inclui inspeção semestral de rodamentos
   
4. **Por quê** não inclui?
   → Porque quando o plano foi criado (2018), o equipamento era novo; ninguém atualizou o plano
   
5. **Por quê** ninguém atualizou?
   → Porque não existe processo formal de revisão periódica do plano de manutenção

**Causa-raiz real:** Ausência de processo de atualização do plano de manutenção preventiva.

### Validação Estatística das Causas

**Hipótese 1:** Taxa de defeito é diferente entre turnos

- H₀: μ_manhã = μ_tarde = μ_noite
- Teste: ANOVA de uma via (dados seguem distribuição normal por Shapiro-Wilk)
- **F = 14,7, p-valor = 0,0003 < 0,05**
- ✅ Confirmado: Turnos têm taxas significativamente diferentes

**Hipótese 2:** Cabeças 5, 6 e 7 têm maior taxa de defeito

- Teste: Chi-quadrado (dados de atributo por cabeça)
- **χ² = 67,4, p-valor < 0,0001**
- ✅ Confirmado: As cabeças 5–7 são estatisticamente piores

**Hipótese 3:** Material (fornecedor do abrasivo) influencia defeitos

- Coletados 15 amostras por fornecedor (3 fornecedores)
- Teste: ANOVA + Tukey post-hoc
- **F = 2,3, p-valor = 0,12 > 0,05**
- ❌ Não confirmado: Diferença entre fornecedores não é estatisticamente significativa

### Causas-Raiz Confirmadas

| # | Causa-Raiz | % Contribuição (DOE) |
|---|-----------|---------------------|
| 1 | Folga nos rodamentos das cabeças 5, 6 e 7 | 43% |
| 2 | Velocidade de avanço não padronizada | 28% |
| 3 | Variação na temperatura da água de refrigeração | 19% |
| 4 | Nível de experiência dos operadores noturnos | 10% |
      `,
      
      tools: ["Fishbone/Ishikawa", "5 Porquês", "Pareto", "ANOVA", "Chi-quadrado", "Testes de Hipótese"],
      key_output: "4 causas-raiz confirmadas estatisticamente, responsáveis por 100% da variação"
    },

    {
      phase: "I",
      label: "IMPROVE",
      color: "#22C55E",
      title: "Projetando e Validando as Soluções",
      duration: "Semanas 11–16",
      
      specialist_role: `
**O que o especialista (Black Belt) fez nesta fase:**

Mariana usou o DOE para **otimizar** os parâmetros de processo — não apenas corrigir as causas, mas encontrar a configuração ideal. Isso diferencia um BB de um gerente comum: o BB não adivinha a solução, ele a **projeta experimentalmente**.

Ela também liderou o projeto piloto, definindo métricas de validação e critérios de sucesso antes de iniciar — para evitar viés de confirmação.

**Gestão da mudança:** A maior resistência veio dos operadores noturnos, que sentiram que estavam sendo "culpados". Mariana reposicionou: "As máquinas estavam com defeito, e vocês precisavam de mais suporte. Vamos corrigir isso juntos." Isso transformou resistentes em aliados.
      `,

      content: `
### Soluções Desenvolvidas

**Para Causa 1 — Rodamentos (43% do problema):**
- Substituição imediata dos rodamentos das cabeças 5, 6 e 7
- Inclusão de inspeção semestral no plano de manutenção preventiva
- Adição de sensor de vibração nas 3 cabeças (alerta antes da falha)
- Custo: R$ 8.400 (one-time) + R$ 2.200/ano manutenção

**Para Causa 2 — Velocidade de Avanço (28%):**
- Criação de procedimento operacional padrão (POP) com velocidades específicas por tipo de granito
- Parametrização automática no CLP (controlador) para os 12 tipos de granito mais processados
- Tempo de setup reduzido de 12 min para 3 min
- Custo: R$ 3.500 (desenvolvimento do POP + atualização do CLP)

**Para Causa 3 — Temperatura da Água (19%):**
- Instalação de trocador de calor com controle termostatático (±1°C)
- Custo: R$ 22.000

**Para Causa 4 — Capacitação (10%):**
- Programa de treinamento de 8h para operadores noturnos
- Criação de parceiro de aprendizagem: operador senior do diurno como mentor
- Custo: R$ 4.800

**Total investimento:** R$ 38.700

### DOE — Otimização dos Parâmetros de Polimento

**Objetivo:** Encontrar a configuração de velocidade de avanço e pressão que minimize trincas.

**Fatores testados:**
| Fator | Nível Baixo | Nível Alto |
|-------|------------|-----------|
| Velocidade de Avanço | 1,8 m/min | 2,4 m/min |
| Pressão das Cabeças | 2,5 bar | 3,5 bar |
| Rotação dos Discos | 900 rpm | 1.300 rpm |

**Resultado do Fatorial 2³ (8 rodadas, 3 replicações = 24 medições):**

| Fator / Interação | Efeito | Significativo? |
|-------------------|--------|----------------|
| Velocidade (A) | -4,2% | ✅ Sim (p=0,001) |
| Pressão (B) | -2,1% | ✅ Sim (p=0,023) |
| Rotação (C) | -0,8% | ❌ Não (p=0,312) |
| A × B (interação) | -3,7% | ✅ Sim (p=0,004) |

**Configuração Ótima Identificada:**
- Velocidade: 1,8 m/min (nível baixo)
- Pressão: 3,5 bar (nível alto)
- Rotação: 1.300 rpm (levemente melhor, incorporado ao POP)

### Resultados do Piloto (4 semanas)

| Métrica | Baseline | Piloto | Melhoria |
|---------|---------|--------|---------|
| Taxa de Defeitos | 16,7% | 5,1% | ↓ 69% |
| Trincas Superficiais | 51,6% dos def. | 22% dos def. | ↓ 57% |
| DPMO | 167.000 | 51.000 | ↓ 69% |
| Cpk | -0,38 | 0,98 | +1,36 |

✅ Meta de ≤ 5% praticamente atingida no piloto. Aprovado para implementação total.
      `,
      
      tools: ["DOE (Fatorial 2³)", "Matriz de Priorização", "FMEA de Processo", "Projeto Piloto", "Análise Custo-Benefício"],
      key_output: "Piloto validado com redução de 69% nos defeitos. ROI projetado: 32x o investimento."
    },

    {
      phase: "C",
      label: "CONTROL",
      color: "#F59E0B",
      title: "Sustentando os Resultados",
      duration: "Semanas 17–20 + monitoramento contínuo",
      
      specialist_role: `
**O que o especialista (Black Belt) fez nesta fase:**

Mariana foi clara com a equipe: "Meu trabalho agora é me tornar desnecessária aqui." O objetivo do Control é transferir a propriedade do processo para o Process Owner — Fábio, o supervisor.

Ela criou um sistema que qualquer pessoa treinada poderia operar, não apenas ela. Um bom plano de controle não depende de um especialista presente — depende de um sistema.

**Legado institucional:** Após o projeto, Mariana apresentou os resultados para a diretoria e identificou mais 3 oportunidades de projeto DMAIC na mesma unidade — um pipeline de projetos gerado por este primeiro projeto.
      `,

      content: `
### Plano de Controle

| Característica | Método de Controle | Frequência | Responsável | Reação se Fora |
|---------------|-------------------|------------|-------------|----------------|
| Taxa de defeitos | Carta p (SPC) | A cada turno | Inspetor QC | Parar linha, acionar supervisor |
| Vibração cabeças 5–7 | Sensor IoT + alerta | Contínuo | Manutenção | PM preventiva em 24h |
| Velocidade de avanço | CLP parametrizado | A cada setup | Operador | Seguir POP de correção |
| Temperatura água | Display digital | A cada 2h | Operador | Ajustar termostato |
| Rodamentos | Inspeção visual | Semestral | Técnico MP | Substituição programada |

### Cartas de Controle Implementadas

**Carta p (proporção de defeituosos) por turno:**
- UCL = 12,4% (3σ acima da nova média de 4,2%)
- LCL = 0% (não pode ser negativo)
- Centro = 4,2%
- Qualquer ponto acima do UCL → investigação imediata

### Resultados Finais (após 20 semanas)

| Métrica | Antes | Depois | Δ |
|---------|-------|--------|---|
| Taxa de Defeitos | 16,7% | 5,1% → 4,8% estabilizado | **↓ 71,3%** |
| DPMO | 167.000 | 48.000 | ↓ 71% |
| Sigma Level | 2,42σ | 3,85σ | **+1,43σ** |
| Cpk | -0,38 | 1,05 | +1,43 |
| Saving Mensal | — | R$ 103.200 | **R$ 103.200/mês** |
| Saving Anual | — | **R$ 1.238.400** | — |
| ROI do Projeto | — | **3.200%** | — |

### Lições Aprendidas

1. ✅ O MSA é inegociável — sem sistema de medição confiável, o projeto anda em círculos
2. ✅ Dados estratificados revelam o que médias escondem (a variação por turno)
3. ✅ DOE economizou semanas de tentativa e erro, encontrando a configuração ótima em 4 semanas
4. ✅ A gestão da mudança determinou a velocidade de adoção — operadores aliados aceleraram tudo
5. ✅ Plano de controle robusto = projeto sustentável sem dependência do BB
      `,
      
      tools: ["Carta p (SPC)", "Plano de Controle", "Documentação de Processo", "Treinamento", "Lições Aprendidas"],
      key_output: "Taxa de defeitos estabilizada em 4,8%. Saving anual de R$ 1.238.400 documentado e auditado."
    }
  ]
},

// ════════════════════════════════════════════════════════════
// CASE 2 — CRM + LEAN NO SETOR COMERCIAL
// ════════════════════════════════════════════════════════════
{
  id: "case-2",
  title: "Lean no CRM — De Lead a Pedido em 3 Dias",
  subtitle: "Como aplicar Lean Six Sigma para eliminar desperdícios no funil de vendas B2B",
  industry: "Comercial — Exportação de Rochas Ornamentais",
  duration: "16 semanas",
  saving: "R$ 890.000 / ano",
  sigmaGain: "Tempo de ciclo: de 12 para 3,2 dias",
  tags: ["Lean", "CRM", "DMAIC", "VSM", "Processos Comerciais"],
  cover_emoji: "💼",

  context: `
A PBA Stones, exportadora de rochas ornamentais do Espírito Santo, enfrentava um 
problema crítico: leads qualificados que chegavam ao time comercial levavam em média 
12 dias para se transformar em um pedido — quando se transformavam. A taxa de conversão 
lead-to-order era de apenas 8,3%.

Análise inicial mostrou que concorrentes americanos respondiam em 4h e fechavam em 2–3 dias. 
O Champion do projeto foi o Diretor Comercial, que designou o Green Belt sênior Rafael 
Almeida para liderar, com coaching de um MBB externo.

Meta: Lead Time Lead-to-Order de ≤ 3 dias e taxa de conversão ≥ 18%.
  `,

  phases: [
    {
      phase: "D",
      label: "DEFINE",
      color: "#C9A84C",
      title: "Definindo o Fluxo de Valor Comercial",
      duration: "Semanas 1–2",

      specialist_role: `
**O que o especialista (Green Belt + MBB Coach) fez nesta fase:**

Rafael começou mapeando o processo "como está" — não como todos achavam que era, mas como realmente funcionava. Passou 5 dias acompanhando 3 vendedores em seu trabalho diário, cronometrando cada etapa e anotando onde o trabalho "parava".

O MBB coach orientou: "Antes de melhorar, você precisa ver o fluxo completo — do lead no site até o pedido confirmado. Não apenas o que o vendedor faz, mas todos os handoffs, aprovações e esperas."

**Ferramenta chave nesta fase:** O SIPOC revelou que o processo comercial cruzava 6 departamentos — e ninguém tinha visibilidade do processo completo.
      `,

      content: `
### Problem Statement

> "O processo Lead-to-Order da PBA Stones leva em média 12,3 dias (desvio padrão de 5,7 dias), com taxa de conversão de 8,3%. Análise de perdas indica que 34% dos leads qualificados são perdidos por demora na resposta ou acompanhamento. Meta: reduzir para ≤ 3 dias e conversão ≥ 18% em 16 semanas."

### SIPOC do Processo Comercial

| Suppliers | Inputs | Process | Outputs | Customers |
|-----------|--------|---------|---------|-----------|
| Marketing Digital | Lead do site (formulário) | 1. Receber e qualificar lead | Lead qualificado | Vendedor |
| Feira / Indicação | Cartão de visita / contato | 2. Primeiro contato (ligação/email) | Diagnóstico de necessidade | Gerente Comercial |
| Importadores parceiros | RFQ (request for quote) | 3. Verificar disponibilidade de estoque | Informação de stock | Logística |
| Sistema ERP | Tabela de preços | 4. Elaborar proposta comercial | Proposta em PDF | Prospect |
| Financeiro | Política de crédito | 5. Aprovação de preço/desconto | Aprovação de preço | Diretor Comercial |
| Jurídico | Contrato padrão | 6. Enviar proposta + follow-up | Contrato / PI | Jurídico |
| Logística | Disponibilidade de navio | 7. Negociar e fechar | Pedido Confirmado + PI assinado | Financeiro |
| CRM (Mobgran) | Histórico do cliente | 8. Registrar no CRM | CRM atualizado | Pós-venda |

### Business Case

| Cenário | Dados |
|---------|-------|
| Leads/mês (média) | 87 |
| Taxa conversão atual | 8,3% → 7,2 pedidos/mês |
| Ticket médio | R$ 42.000 |
| Receita/mês atual | R$ 302.400 |
| Se conversão = 18% | 15,7 pedidos/mês |
| Receita/mês projetada | R$ 659.400 |
| **Ganho potencial/mês** | **R$ 357.000** |
| **Ganho potencial/ano** | **R$ 4.284.000** |
      `,

      tools: ["SIPOC", "Project Charter", "VOC (Entrevistas com clientes)", "Business Case", "Stakeholder Map"],
      key_output: "Charter aprovado com meta clara: ≤ 3 dias Lead-to-Order e conversão ≥ 18%"
    },

    {
      phase: "M",
      label: "MEASURE",
      color: "#00D4FF",
      title: "Mapeando o Fluxo de Valor e os Desperdícios",
      duration: "Semanas 3–6",

      specialist_role: `
**O que o especialista fez nesta fase:**

Rafael e o MBB usaram a técnica do **Value Stream Mapping** para mapear o fluxo completo Lead-to-Order. Isso envolveu sentar com cada pessoa no processo — do Marketing ao Jurídico — e cronometrar cada etapa.

**Descoberta chocante:** O tempo total do processo era de 12 dias, mas o tempo real de trabalho (tempo em que alguém estava ativamente trabalhando na proposta) era de apenas **47 minutos**. Todo o resto (99,7%) era espera.

**PCE (Process Cycle Efficiency) = 47 min / (12 dias × 480 min/dia) = 0,8%**

Para um Black Belt, ver um PCE abaixo de 5% em um processo comercial é normal — mas ainda assim assustador. Isso significa que 99,2% do tempo é desperdício.
      `,

      content: `
### Value Stream Map (VSM) — Estado Atual

\`\`\`
LEAD                                                    PEDIDO
  │                                                       │
  ▼                                                       │
[1. Qualificação]──(espera 2,1 dias)──▶[2. 1º Contato]──(espera 0,8 dias)──▶
  VA: 15 min                            VA: 20 min
  
[3. Verif. Estoque]──(espera 1,5 dias)──▶[4. Proposta]──(espera 1,2 dias)──▶
  VA: 5 min                              VA: 30 min
  
[5. Aprovação]──(espera 2,8 dias)──▶[6. Envio + F.U.]──(espera 3,1 dias)──▶
  VA: 10 min                          VA: 15 min
  
[7. Negociação + Fechamento] ──▶ [8. Registro CRM]
  VA: 45 min                          VA: 10 min
\`\`\`

### Resumo do VSM Atual

| Etapa | Tempo VA | Tempo Espera |
|-------|----------|-------------|
| Qualificação | 15 min | 2,1 dias |
| Primeiro contato | 20 min | 0,8 dias |
| Verificação estoque | 5 min | 1,5 dias |
| Elaboração proposta | 30 min | 1,2 dias |
| Aprovação desconto | 10 min | **2,8 dias** ← maior espera |
| Envio + follow-up | 15 min | 3,1 dias |
| Neg. + Fechamento | 45 min | — |
| Registro CRM | 10 min | — |
| **Total** | **150 min (2,5h)** | **11,5 dias** |

**PCE = 150 min / (12,3 dias × 480 min) = 2,5%**

### Os 8 Desperdícios Identificados no CRM

| Desperdício | Manifestação no Processo Comercial | Impacto |
|-------------|-----------------------------------|---------|
| **Espera** | Lead fica 2,8 dias esperando aprovação de desconto | Concorrente responde antes |
| **Estoque** | 340 leads no CRM sem contato há mais de 30 dias | Leads morrem sem trabalho |
| **Movimento** | Vendedor abre 4 sistemas para montar uma proposta | 40 min perdidos por proposta |
| **Overprocessing** | Proposta de 28 slides para pedido de 5 chapas | Cliente se perde, vendedor perde tempo |
| **Defeitos** | 23% das propostas têm erro de preço ou spec | Retrabalho + perda de credibilidade |
| **Transporte** | Email vai para gerente → aprovação → volta → vendedor → cliente | 4 handoffs desnecessários |
| **Overproduction** | Relatórios de funil gerados automaticamente que ninguém lê | Tempo de TI desperdiçado |
| **Skills** | Vendedor sênior fazendo cadastro manual no CRM | 2h/dia de atividade administrativa |

### Baseline — Medições do Processo

| Métrica | Baseline |
|---------|---------|
| Lead Time médio L2O | 12,3 dias |
| Desvio padrão | 5,7 dias |
| Taxa de conversão | 8,3% |
| % propostas com erro | 23% |
| Tempo para 1ª resposta ao lead | 28,4h |
| % leads sem contato em 48h | 67% |
| Sigma do tempo de resposta (meta=4h) | 1,1σ |
| Leads mortos no funil (>30 dias sem ação) | 340 |
      `,

      tools: ["Value Stream Map (VSM)", "Análise de Desperdícios 8M", "PCE", "Cronoanálise", "Análise de CRM"],
      key_output: "VSM revelou PCE de 2,5%. 99,7% do tempo é espera e handoffs desnecessários."
    },

    {
      phase: "A",
      label: "ANALYZE",
      color: "#A78BFA",
      title: "Raízes dos Gargalos no Funil Comercial",
      duration: "Semanas 7–9",

      specialist_role: `
**O que o especialista fez nesta fase:**

A maior causa de atraso era o processo de aprovação de desconto (2,8 dias em média). Rafael foi investigar: por que leva tanto tempo?

Usando os 5 Porquês, descobriu que o processo foi desenhado em 2017 para evitar "descontos selvagens" que estavam destruindo a margem. Era uma regra com motivo legítimo — mas que nunca foi revisada quando o mercado mudou e a competição aumentou.

**Insight do MBB:** "Não existe desperdício sem uma causa-raiz sistêmica. Alguém criou aquele processo com uma razão. Seu trabalho é entender a razão, não apenas eliminar o passo."
      `,

      content: `
### Análise dos Gargalos Principais

**Gargalo 1: Aprovação de Desconto (2,8 dias)**

*5 Porquês:*
1. Por quê a aprovação leva 2,8 dias?
   → Diretor Comercial só revisa solicitações de desconto nas terças e quintas
2. Por quê só terças e quintas?
   → Eram as reuniões de diretoria onde os descontos eram discutidos
3. Por quê discutir em reunião?
   → Para controlar margens — experiência ruim com vendedores dando descontos aleatórios
4. Por quê vendedores davam descontos aleatórios?
   → Porque não havia política clara de pricing com limites de autoridade
5. Por quê não havia política?
   → Porque a empresa cresceu rapidamente e os processos não acompanharam
   
**Causa-raiz:** Ausência de política de pricing com delegação de autoridade por faixa de desconto.

**Gargalo 2: 67% dos leads sem resposta em 48h**

Análise de dados do CRM (3 meses):

| Motivo para não responder em 48h | % Casos |
|----------------------------------|---------|
| Lead não atribuído a nenhum vendedor | 38% |
| Vendedor em viagem / fora / em reunião | 29% |
| Lead entrou fora do horário comercial | 22% |
| Vendedor esqueceu (sem notificação) | 11% |

**Causa-raiz primária:** Processo de atribuição de leads é manual e não tem SLA definido.

**Gargalo 3: 23% das propostas com erro**

Diagrama de Pareto dos tipos de erro:
| Tipo de Erro | % |
|-------------|---|
| Preço desatualizado | 41% |
| Especificação incorreta (medida, acabamento) | 33% |
| Incoterm errado | 15% |
| Outros | 11% |

**Causa-raiz:** Tabela de preços existe em 3 versões diferentes em circulação (email de 2023, pasta do servidor, Excel pessoal do vendedor). Não há single source of truth.

### Matriz de Impacto x Esforço

| Solução | Impacto | Esforço | Prioridade |
|---------|---------|---------|------------|
| Automação de atribuição de leads | Alto | Médio | 🔴 Alta |
| Política de pricing com delegação | Alto | Baixo | 🔴 Alta |
| Tabela de preços única no CRM | Alto | Baixo | 🔴 Alta |
| Template de proposta padronizado | Alto | Baixo | 🔴 Alta |
| Integração CRM-ERP (estoque em tempo real) | Muito Alto | Alto | 🟡 Média |
| Chatbot para qualificação inicial | Médio | Alto | 🟡 Média |
| Dashboard de funil em tempo real | Baixo | Médio | 🟢 Baixa |
      `,

      tools: ["5 Porquês", "Análise de Dados do CRM", "Pareto de Causas", "Matriz Impacto × Esforço", "Spaghetti Diagram"],
      key_output: "3 causas-raiz sistêmicas identificadas: delegação de preço, atribuição de leads, e dados desatualizados"
    },

    {
      phase: "I",
      label: "IMPROVE",
      color: "#22C55E",
      title: "Redesenhando o Funil com Lean",
      duration: "Semanas 10–14",

      specialist_role: `
**O que o especialista fez nesta fase:**

O MBB coach orientou Rafael a **desenhar o VSM do Estado Futuro** antes de implementar qualquer solução. Muitos projetos erram ao implementar melhorias pontuais sem visualizar o fluxo completo ideal.

Rafael desenhou o fluxo futuro eliminando todos os handoffs desnecessários e automatizando o que podia ser automatizado — especialmente a atribuição de leads e notificações.

**Poka-Yoke comercial:** A maior inovação foi criar um sistema à prova de erro para preços — um único local no CRM com a tabela de preços bloqueada para edição, integrada automaticamente nas propostas.

**Kaizen Events:** 3 workshops de 2h com a equipe comercial para co-criar o novo processo. "As pessoas implementam com orgulho o que ajudaram a criar." — MBB coach.
      `,

      content: `
### VSM do Estado Futuro

| Etapa | Tempo VA | Tempo Espera | Automação |
|-------|----------|-------------|-----------|
| Qualificação automática | 0 min (bot) | 0 (imediato) | ✅ Lead Score automático |
| Atribuição + notificação | 0 min (auto) | 0 (imediato) | ✅ Round-robin no CRM |
| Primeiro contato | 20 min | 0 (SLA: 4h) | 🔔 Alerta automático |
| Verificação estoque | 0 min | 0 (integração) | ✅ CRM-ERP em tempo real |
| Elaboração proposta | 15 min | 0 | ✅ Template + preço automático |
| Aprovação (se necessário) | 5 min | 0 (delegação) | 📋 90% aprovados pelo vendedor |
| Envio + F.U. | 10 min | 0 | ✅ Sequência automática D+1, D+3 |
| **Total** | **50 min** | **≤ 2,5 dias** | |

**PCE Futuro projetado = 50 min / (2,5 dias × 480 min) = 4,2%**

### Soluções Implementadas

**Solução 1: Política de Pricing com Delegação**
- Desconto ≤ 3%: Vendedor aprova (sem aprovação)
- Desconto 3–8%: Gerente Comercial aprova (via app, meta 2h)
- Desconto > 8%: Diretor Comercial aprova (meta 24h)
- Resultado: 73% dos casos resolvidos sem espera

**Solução 2: Tabela de Preços Única (Single Source of Truth)**
- Tabela de preços integrada diretamente no CRM
- Atualizada semanalmente pelo financeiro
- Propostas geradas automaticamente com preço correto
- Versões antigas bloqueadas

**Solução 3: Template de Proposta Padronizado**
- Template único no CRM (2 versões: simple 1 pág / complex 5 págs)
- Campo de especificação puxado do catálogo do ERP
- Preço, Incoterm e payment terms pré-populados
- Assinatura eletrônica integrada (DocuSign)

**Solução 4: Automação de Atribuição e Follow-up**
- Lead Score automático (formulário → critérios → score 0–100)
- Leads com Score ≥ 60 atribuídos automaticamente via round-robin
- Notificação push para vendedor em ≤ 5 minutos
- Sequência automática de follow-up: email D+1, email D+3, ligação D+5

**Solução 5: Dashboard de Funil em Tempo Real**
- Visibilidade completa do funil para toda a equipe
- Alertas: leads sem contato em 4h, leads parados em etapa há 2+ dias
- KPIs visíveis: conversão, tempo médio por etapa, top performers

### Kaizen Event — Workshop de Co-criação

Três workshops de 2h com a equipe:

**Workshop 1:** "Como é o processo hoje?" (VSM atual em post-its)
**Workshop 2:** "Como deveria ser?" (VSM futuro ideal)
**Workshop 3:** "O que podemos fazer agora?" (soluções priorizadas)

Participantes: 4 vendedores, 1 gerente, 1 analista de CRM, 1 analista financeiro, Rafael (líder).

**Efeito colateral positivo:** Os vendedores identificaram 7 desperdícios que a equipe de análise não havia visto — porque só quem faz o trabalho sabe onde a dor está.
      `,

      tools: ["VSM Estado Futuro", "Poka-Yoke", "Automação de CRM", "Kaizen Event", "Single Source of Truth", "Lead Scoring"],
      key_output: "Novo fluxo projetado para 2,5 dias. Automação de atribuição, proposta e follow-up implementados."
    },

    {
      phase: "C",
      label: "CONTROL",
      color: "#F59E0B",
      title: "Controlando o Novo Funil Comercial",
      duration: "Semanas 15–16 + 90 dias pós",

      specialist_role: `
**O que o especialista fez nesta fase:**

Rafael criou um dashboard de controle no CRM que qualquer gestor consegue ler em 2 minutos. O objetivo era dar ao gerente comercial autonomia para monitorar e agir — sem precisar do Green Belt para interpretar dados.

**Transferência de propriedade:** Reunião formal de handoff com o gerente comercial: apresentação dos KPIs, thresholds de alerta, ações de resposta documentadas. O gerente assinou o plano de controle.

**Sustentabilidade:** 3 check-ins mensais nos primeiros 90 dias. Após isso, o projeto foi considerado encerrado.
      `,

      content: `
### Plano de Controle do Funil Comercial

| KPI | Meta | Alerta Amarelo | Alerta Vermelho | Responsável |
|-----|------|---------------|-----------------|-------------|
| Lead Time L2O médio | ≤ 3 dias | > 3,5 dias | > 5 dias | Gerente Comercial |
| Tempo 1ª resposta | ≤ 4h | > 6h | > 24h | Coord. CRM |
| Taxa de conversão | ≥ 18% | < 16% | < 12% | Diretor Comercial |
| % propostas com erro | < 3% | > 5% | > 10% | Gerente Comercial |
| Leads ativos sem ação | < 20 leads | > 30 leads | > 50 leads | Coord. CRM |

### Resultados Finais (após 16 semanas + 3 meses de monitoramento)

| Métrica | Antes | Depois | Melhoria |
|---------|-------|--------|---------|
| Lead Time L2O | 12,3 dias | **3,2 dias** | ↓ 74% |
| Taxa de conversão | 8,3% | **19,1%** | ↑ 130% |
| Tempo 1ª resposta | 28,4h | **2,8h** | ↓ 90% |
| % propostas com erro | 23% | **2,1%** | ↓ 91% |
| Leads sem ação 48h | 67% | **8%** | ↓ 88% |
| Pedidos/mês | 7,2 | **16,6** | ↑ 131% |
| Receita incremental/mês | — | **R$ 74.000** | — |
| **Saving + receita/ano** | — | **R$ 890.000** | — |

### VSM Final — Comparativo

| | Estado Atual | Estado Futuro Real |
|-|-|-|
| Lead Time total | 12,3 dias | 3,2 dias |
| Tempo VA | 150 min | 50 min |
| PCE | 2,5% | 5,2% |
| Número de handoffs | 8 | 3 |
| Etapas manuais | 8/8 | 2/8 |

### Carta de Controle — Lead Time L2O (15 semanas pós)

Processo estável dentro dos limites de controle por 15 semanas consecutivas.
- Média: 3,2 dias
- UCL: 5,8 dias (apenas 2 pontos acima, ambos investigados e corrigidos)
- LCL: 0,6 dias

### Lições Aprendidas

1. ✅ PCE abaixo de 5% em processos comerciais é mais comum do que se imagina
2. ✅ A maior fonte de desperdício em vendas B2B é espera por aprovação — redesenhar a política de delegação é mais eficaz do que tecnologia
3. ✅ Single source of truth no CRM elimina a maioria dos erros de proposta
4. ✅ Automação sem processo definido só automatiza o caos — defina o processo primeiro
5. ✅ O Kaizen Event foi o ponto de virada — a equipe assumiu o projeto como seu
6. ✅ Dashboards simples têm mais adesão do que relatórios complexos
      `,

      tools: ["Plano de Controle", "Dashboard de CRM", "Carta X-MR (Lead Time)", "SLA Monitoring", "Handoff Documentation"],
      key_output: "Lead Time de 12 para 3,2 dias. Conversão de 8,3% para 19,1%. Saving anual de R$ 890.000."
    }
  ]
}

]; // fim do array cases
