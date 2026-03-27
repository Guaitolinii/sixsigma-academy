// ============================================================
// data_modules.js — Conteúdo completo dos 12 módulos
// Six Sigma Academy — Nível MBA / Master Black Belt
// Didática Dr. Claude Hartwell — "Why before How"
// ============================================================

export const modules = [
// ── MÓDULO 1 ─────────────────────────────────────────────
{
  id: 1,
  title: "Fundamentos do Six Sigma",
  description: "O que é Six Sigma, por que ele existe, a matemática da variabilidade, e o papel de cada Belt na organização.",
  difficulty: "Básico",
  lessons: [
    {
      id: "1.1",
      title: "O que é Six Sigma? — A Origem e o Propósito",
      content: `
# O que é Six Sigma?

## A Ideia em Uma Frase

> **Six Sigma é um método que usa dados e estatística para encontrar as causas reais dos problemas em um processo e eliminar essas causas de forma permanente.**

Não é "achismo". Não é reunião de brainstorming sem direção. É investigação metódica: medir, analisar, provar com números, corrigir e garantir que o problema não volta.

---

## Por que o Six Sigma foi Criado?

Imagine que você é dono de uma fábrica de celulares nos anos 1980. Cada aparelho tem centenas de componentes. Se cada componente tem uma chance "pequena" de defeito — digamos 1% — no final da linha de montagem, **quase nenhum aparelho sai perfeito**.

Esse era o problema da **Motorola em 1986**. O engenheiro **Bill Smith** percebeu que "pequenas" falhas individuais se **multiplicam** ao longo de um processo complexo. A solução não era inspecionar mais no final — era **reduzir a variação em cada etapa individual** a um nível tão baixo que defeitos se tornassem estatisticamente raros.

Ele chamou esse nível de perfeição de **"Six Sigma"** — seis desvios padrão de distância entre a média do processo e o limite de erro.

### A Explosão Global

Em 1995, **Jack Welch**, CEO da General Electric, adotou o Six Sigma como estratégia central da empresa. Os resultados foram tão expressivos (bilhões em economia documentada) que o método se espalhou para toda indústria — saúde, bancos, logística, tecnologia, serviços.

---

## O que Significa "Sigma" na Prática?

A letra grega **σ (sigma)** representa o **desvio padrão** em estatística. Em linguagem do dia a dia:

> **O desvio padrão mede o quanto os resultados de um processo variam em relação ao resultado ideal.**

### Analogia: O Arqueiro e o Alvo

Pense em um arqueiro atirando flechas em um alvo:

- **Média (μ):** É onde a maioria das flechas se concentra. Se o arqueiro é bom, a média está no centro do alvo.
- **Desvio Padrão (σ):** É o quanto as flechas se espalham ao redor dessa média. Um σ pequeno = flechas agrupadas. Um σ grande = flechas espalhadas.

**Six Sigma** diz: "Quero que minhas flechas estejam tão agrupadas no centro que mesmo as piores flechas ainda acertem dentro do alvo."

### A Tabela que Todo Black Belt Conhece

| Nível Sigma | Defeitos por Milhão (DPMO) | % Sem Defeito | Na prática |
|-------------|---------------------------|---------------|------------|
| 2σ          | 308.538                   | 69,1%         | Caótico — 1 em 3 produtos falha |
| 3σ          | 66.807                    | 93,3%         | Comum em PMEs — parece bom, mas são 67 mil falhas por milhão |
| 4σ          | 6.210                     | 99,4%         | Bom — indústria organizada |
| 5σ          | 233                       | 99,98%        | Muito bom — poucos defeitos |
| 6σ          | 3,4                       | 99,99966%     | Classe mundial — aviação, chips, cirurgias |

> 💡 **Colocando em perspectiva:** Se uma companhia aérea operasse a 3σ, haveria **dois pousos de emergência por dia** em um aeroporto grande. A 6σ, seriam **dois por década**. Essa é a diferença real.

---

## Os 5 Princípios que Guiam Tudo

1. **Foco no Cliente** — "Qualidade" é definida pelo cliente, não por você. Se o cliente não percebe valor, não importa o quanto seu processo é tecnicamente perfeito.

2. **Decisões Baseadas em Dados** — Intuição é ponto de partida, nunca conclusão. Toda melhoria precisa de evidência estatística.

3. **Processos são a Causa** — Se o resultado é ruim, o processo que o gera é o réu. Não as pessoas. As pessoas trabalham dentro do processo que alguém desenhou.

4. **Variação é o Inimigo** — Processos previsíveis geram qualidade. Processos imprevisíveis (alta variação) geram defeitos, mesmo quando a média está no alvo.

5. **Melhoria Contínua** — Não existe "pronto". O mercado muda, os clientes evoluem, e novos problemas surgem. O Six Sigma é um ciclo infinito.

---

## Six Sigma vs. Lean — São a Mesma Coisa?

Não. São complementares, mas atacam problemas diferentes:

| Aspecto      | Six Sigma                    | Lean                          |
|-------------|------------------------------|-------------------------------|
| **Foco**    | Reduzir variação e defeitos  | Eliminar desperdícios e acelerar o fluxo |
| **Pergunta**| "Por que o processo produz defeitos?" | "Por que o processo demora tanto?" |
| **Origem**  | Motorola (1986)              | Toyota (anos 1950)            |
| **Ferramentas** | DMAIC, DOE, SPC, testes estatísticos | VSM, 5S, Kanban, Kaizen |
| **Resultado** | Qualidade e previsibilidade | Velocidade e eficiência      |

**Lean Six Sigma** combina os dois: elimina desperdícios (Lean) **E** reduz variabilidade (Six Sigma). Na prática, a maioria das empresas hoje usa essa combinação.

> 💡 **Analogia:** Lean é como desentupir um cano — remove o que bloqueia o fluxo. Six Sigma é como calibrar a torneira — garante que a quantidade certa de água sai, sempre, sem variação.
      `
    },
    {
      id: "1.2",
      title: "A Hierarquia de Belts — Quem Faz o Quê",
      content: `
# A Hierarquia de Belts

## Por que Existem "Faixas"?

O Six Sigma pegou emprestada a ideia das artes marciais: **diferentes níveis de conhecimento e responsabilidade**. Cada "belt" tem um papel claro no sistema.

> A ideia central é que **nem todo mundo precisa ser estatístico**. Alguns lideram projetos complexos (Black Belts), outros participam (Green Belts), e outros apenas precisam entender o básico para apoiar (Yellow/White Belts).

---

## Os Papéis, do Topo à Base

### 🎯 Champion / Sponsor
- **Quem é:** Membro da alta liderança (Diretor, VP, C-Level)
- **O que faz:** Escolhe quais problemas valem um projeto Six Sigma, destrava recursos, remove barreiras políticas
- **Analogia:** É o "dono do hospital" — não opera, mas decide quais cirurgias são prioridade e garante que o cirurgião tenha tudo que precisa

### ⚫ Master Black Belt (MBB)
- **Quem é:** O maior especialista técnico em Six Sigma na organização
- **O que faz:** Treina e certifica Black Belts, supervisiona múltiplos projetos, conecta o portfólio de projetos à estratégia da empresa
- **Habilidades:** Estatística avançada (DOE, RSM, Monte Carlo, Weibull), mentoria, gestão de portfólio
- **Na prática:** É o "professor e arquiteto". Não lidera projetos no dia a dia — ele garante que os BBs estejam liderando corretamente

### ⚫ Black Belt (BB)
- **Quem é:** Líder de projeto Six Sigma, dedicação integral (100% do tempo)
- **O que faz:** Conduz projetos DMAIC de alto impacto do início ao fim
- **Meta típica:** Cada projeto deve gerar US$ 250k–1M em economia documentada
- **Habilidades:** Testes de hipótese, análise de regressão, DOE, cartas de controle, facilitação de equipes
- **Analogia:** É o "cirurgião" — recebe o caso, diagnostica, opera e acompanha a recuperação

### 🟢 Green Belt (GB)
- **Quem é:** Profissional que dedica ~25% do tempo a projetos Six Sigma (o resto é seu trabalho normal)
- **O que faz:** Lidera projetos de escopo menor, apoia Black Belts em projetos complexos
- **Analogia:** É o "médico generalista" — resolve casos de menor complexidade e encaminha os graves para o especialista

### 🟡 Yellow Belt
- **O que faz:** Conhece os conceitos fundamentais, participa de equipes de projeto, ajuda na coleta de dados

### ⬜ White Belt
- **O que faz:** Tem consciência básica sobre Six Sigma, entende o vocabulário, apoia quando necessário

---

## A Estrutura na Empresa

\`\`\`
Diretoria / C-Suite
    └── Champions (1 por área de negócio)
          └── Master Black Belts (1-2 por empresa)
                └── Black Belts (1 para cada 100 funcionários)
                      └── Green Belts (10 para cada 100 funcionários)
                            └── Yellow / White Belts (toda a equipe)
\`\`\`

> 💡 **Regra prática:** Para cada **100 funcionários**, uma organização madura em Six Sigma tem **1 Black Belt** e **10 Green Belts**. O MBB geralmente é corporativo, atendendo toda a empresa.
      `
    },
    {
      id: "1.3",
      title: "O Framework DMAIC — O Roteiro de 5 Fases",
      content: `
# O Framework DMAIC

## A Ideia Central

> **DMAIC é o GPS do Six Sigma.** Ele diz exatamente quais passos seguir para transformar um problema vago em uma solução comprovada — e garantir que a solução não desapareça depois.

Sem DMAIC, resolver problemas é como navegar sem mapa: você pode até chegar ao destino, mas vai demorar, errar o caminho e provavelmente acabar em outro lugar.

---

## As 5 Fases — Cada Uma com Uma Pergunta

### D — DEFINE (Definir)
**Pergunta:** "Qual é exatamente o problema, e por que ele importa?"

Aqui você transforma uma queixa vaga ("os clientes reclamam muito") em um problema preciso e mensurável ("o prazo médio de entrega é 12 dias, enquanto o cliente espera no máximo 5").

**O que se produz:**
- **Project Charter** — O "contrato" do projeto: problema, meta, escopo, equipe, prazo
- **SIPOC** — Mapa de alto nível do processo (Suppliers → Inputs → Process → Outputs → Customers)
- **VOC / CTQ** — Voz do Cliente traduzida em requisitos mensuráveis

### M — MEASURE (Medir)
**Pergunta:** "Como o processo está se comportando hoje?"

Antes de melhorar qualquer coisa, você precisa saber o estado atual com dados confiáveis. Isso inclui validar que seus instrumentos de medição são bons (MSA) e calcular a capacidade do processo (Cp, Cpk).

**O que se produz:**
- Sistema de medição validado (Gage R&R)
- Baseline do processo (dados de pelo menos 30 dias)
- Cálculo de capacidade (Cp, Cpk, DPMO, Nível Sigma)

### A — ANALYZE (Analisar)
**Pergunta:** "Quais são as causas reais do problema?"

Aqui é onde a mágica estatística acontece. Você gera hipóteses sobre o que causa o problema (Fishbone, 5 Porquês) e depois **prova ou derruba** cada hipótese com dados (ANOVA, testes t, Chi-quadrado, regressão).

**O que se produz:**
- Lista de causas-raiz **confirmadas estatisticamente** (não "achismos")
- Quantificação do impacto de cada causa

### I — IMPROVE (Melhorar)
**Pergunta:** "Qual é a melhor solução, e como provamos que funciona?"

Aqui você projeta a solução, otimiza com DOE (Design of Experiments) e valida em um piloto antes de implementar em escala total.

**O que se produz:**
- Soluções testadas em piloto
- Configuração ótima dos parâmetros do processo
- Resultados comparados ao baseline

### C — CONTROL (Controlar)
**Pergunta:** "Como garantimos que a melhoria se sustenta para sempre?"

A fase mais negligenciada — e a mais importante. Sem controle, o processo volta ao estado antigo em semanas.

**O que se produz:**
- Plano de Controle (quem monitora o quê, com que frequência)
- Cartas de Controle (SPC) para detectar problemas em tempo real
- Documentação e treinamento para o "dono do processo"

---

## DMAIC vs. DMADV — Quando Usar Cada Um?

| Situação | Use |
|----------|-----|
| O processo já existe e tem problemas | **DMAIC** (Melhorar o existente) |
| O processo não existe ou precisa ser criado do zero | **DMADV** (Design for Six Sigma) |

> 💡 **Regra simples:** Se você está "consertando", use DMAIC. Se está "criando", use DMADV.

---

## Analogia Final: DMAIC como uma Investigação Policial

1. **Define:** A delegacia recebe a denúncia e registra o caso (Charter)
2. **Measure:** Os peritos vão à cena do crime e coletam evidências (dados)
3. **Analyze:** Os detetives cruzam as evidências e identificam os suspeitos (causas-raiz)
4. **Improve:** O plano de captura é executado e o criminoso é preso (solução implementada)
5. **Control:** O programa de vigilância previne que o crime volte a acontecer (sustentabilidade)
      `
    }
  ]
},

// ── MÓDULO 2 ─────────────────────────────────────────────
{
  id: 2,
  title: "Fase DEFINE — Definindo o Problema",
  description: "Voice of Customer, Project Charter, SIPOC, CTQ Tree — como transformar uma queixa vaga em um projeto estruturado.",
  difficulty: "Básico",
  lessons: [
    {
      id: "2.1",
      title: "Voice of the Customer (VOC) — Ouvindo o que Importa",
      content: `
# Voice of the Customer (VOC)

## A Ideia Central

> **O cliente define o que é qualidade. Não você, não o engenheiro, não o gerente. O cliente.**

Se o seu processo entrega algo que o cliente não pediu, ou não entrega o que ele pediu, você tem um problema de qualidade — mesmo que tecnicamente o produto esteja "perfeito".

---

## Por que Isso é Tão Importante?

Pense em um restaurante que serve pratos sofisticados, mas demora 90 minutos para entregar o primeiro prato. O chef pode achar que está fazendo arte. O cliente está faminto e frustrado. **A voz do cliente diz: "Eu quero comida boa em tempo razoável."** Se o restaurante não escuta isso, vai perder clientes — não por falta de qualidade culinária, mas por não entender o que "qualidade" significa para quem paga.

---

## Métodos para Capturar o VOC

### 1. Entrevistas Diretas
- Conversas 1-a-1 com clientes reais
- Perguntas abertas: "O que mais te frustra no nosso serviço?"
- **Vantagem:** Respostas ricas, com contexto e emoção
- **Quando usar:** Sempre — é o método mais valioso

### 2. Surveys / Pesquisas
- Escala grande, dados quantitativos
- **NPS (Net Promoter Score):** "De 0 a 10, você nos recomendaria?"
  - Promotores (9-10), Neutros (7-8), Detratores (0-6)
  - NPS = % Promotores − % Detratores
- **CSAT (Customer Satisfaction):** "De 1 a 5, quão satisfeito você está?"

### 3. Reclamações e Tickets de Suporte
- Dados que **já existem** — não custam nada a mais para coletar
- Analise por categoria e frequência: quais reclamações aparecem mais?

### 4. Observação Direta (Gemba Walk)
- "Gemba" é japonês para "o lugar real" — vá onde o cliente usa seu produto
- Observe **sem interferir**: como ele usa? Onde tem dificuldade? O que ele improvisa?

### 5. Focus Groups
- Grupos de 6-10 clientes discutindo suas experiências
- Útil para descobrir necessidades que o cliente **nem sabe que tem**

---

## CTQ Tree — De "Queixa Vaga" a "Métrica Clara"

O CTQ Tree (Critical to Quality) é a ponte entre o que o cliente sente e o que você pode medir.

### Como funciona:

\`\`\`
Necessidade do cliente (vaga e emocional)
    └── Drivers (o que causa satisfação ou insatisfação)
          └── CTQs (métricas específicas e mensuráveis)
\`\`\`

### Exemplo Prático:

O cliente diz: **"Quero entrega rápida"**

- **Driver 1:** Tempo total do pedido ao recebimento
  - **CTQ:** ≤ 5 dias úteis após confirmação de pagamento
- **Driver 2:** Visibilidade do status da entrega
  - **CTQ:** Notificação automática em ≤ 2h após cada mudança de status

> Note como "entrega rápida" virou duas métricas concretas. Agora você pode **medir**, **monitorar** e **melhorar** cada uma delas.

---

## Modelo de Kano — Nem Tudo que o Cliente Quer é Igual

O modelo de Kano separa os atributos do seu produto/serviço em 3 tipos:

| Tipo | O que é | Exemplo | O que acontece se faltar |
|------|---------|---------|--------------------------|
| **Básico** | O mínimo esperado | Entrega no prazo, produto sem defeito | Cliente fica MUITO insatisfeito |
| **Linear** | Mais = melhor | Velocidade de resposta, opções de personalização | Satisfação aumenta proporcionalmente |
| **Atrativo** | Surpresa positiva inesperada | Embalagem premium, brinde, experiência encantadora | Sem efeito negativo — o cliente não esperava |

> 💡 **Insight prático:** Muitas empresas investem em "atrativos" antes de garantir os "básicos". Isso é como decorar um bolo que está cru por dentro. **Garanta os básicos primeiro.**

> ⚠️ **Armadilha comum:** "O que o cliente diz que quer" nem sempre é "o que realmente importa". Às vezes o cliente diz "quero preço mais baixo" quando na verdade o problema é "o processo de cotação é tão demorado que eu compro do concorrente que responde mais rápido".
      `
    },
    {
      id: "2.2",
      title: "Project Charter — O Contrato do Projeto",
      content: `
# Project Charter

## O que é, e Por que é Inegociável?

> **O Project Charter é o documento que transforma "temos um problema" em "temos um projeto".**

Sem Charter, o projeto não existe oficialmente. É como começar uma obra sem planta — você pode até levantar paredes, mas a chance de desmoronar é enorme.

O Charter faz três coisas essenciais:
1. **Define o problema com precisão** (não como "quero melhorar as coisas")
2. **Alinha expectativas** entre equipe, patrocinador e liderança
3. **Serve de referência** durante todo o projeto — quando alguém quiser mudar o escopo, você aponta para o Charter

---

## Os 7 Componentes do Charter

### 1. Título do Projeto
Descritivo, específico, orientado a resultado.
- ❌ Ruim: "Melhoria do processo de vendas"
- ✅ Bom: "Redução do Lead Time comercial de 12 para 3 dias na PBA Stones"

### 2. Business Case
Responde: "Por que a empresa deveria investir tempo e dinheiro nisso?"
- Impacto financeiro estimado (saving, receita adicional)
- Alinhamento com objetivos estratégicos da empresa

### 3. Problem Statement (Declaração do Problema)
A parte mais importante. Use a estrutura **SMART**:
- **S**pecífico — o quê e onde
- **M**ensurável — com números
- **A**lcançável — meta realista
- **R**elevante — importa para o negócio
- **T**empo — com prazo definido

> **Exemplo:** "O processo de propostas comerciais leva em média 8,3 dias (σ = 4,1 dias), causando perda de 23% das oportunidades por demora. Meta: reduzir para ≤ 3 dias em 90 dias."

### 4. Escopo (In/Out of Scope)
O que está incluído e — tão importante quanto — o que **não está**.
- Evita que o projeto cresça sem controle ("scope creep")
- Exemplo: "IN: linha de polimento Unidade 2. OUT: linhas das Unidades 1 e 3"

### 5. Metas do Projeto
- **Métrica primária (Y):** O que você quer melhorar
- **Baseline:** Onde estamos hoje
- **Meta:** Onde queremos chegar
- Exemplo: Baseline 18,3% defeitos → Meta ≤ 5%

### 6. Equipe
- **Champion:** Patrocinador executivo
- **Black Belt:** Líder técnico do projeto
- **Green Belts e membros:** Equipe de apoio
- **Process Owner:** Quem recebe o processo ao final

### 7. Cronograma de Alto Nível

| Fase    | Semana  | Entregável Principal       |
|---------|---------|----------------------------|
| Define  | 1–2     | Charter aprovado           |
| Measure | 3–6     | Baseline confiável         |
| Analyze | 7–10    | Causas-raiz confirmadas    |
| Improve | 11–16   | Piloto validado            |
| Control | 17–20   | Plano de controle ativo    |

---

> ⚠️ **Erro mais comum de iniciantes:** Colocar a SOLUÇÃO no Charter. Na fase Define, você **não sabe** a solução — ela será descoberta nas fases Analyze e Improve. Incluir a solução no Charter é como um médico prescrever remédio antes de fazer os exames.
      `
    },
    {
      id: "2.3",
      title: "SIPOC — O Mapa em 5 Minutos do Processo",
      content: `
# SIPOC — Mapeando o Processo em Alto Nível

## O que é o SIPOC?

> **SIPOC é uma fotografia panorâmica do seu processo: mostra quem fornece o quê, o que acontece, o que sai, e quem recebe.**

Pense como uma foto aérea de drone — você vê o terreno todo, mas não os detalhes de cada casa. O SIPOC dá a visão geral; o detalhamento vem depois.

| Letra | Significa | Pergunta |
|-------|-----------|----------|
| **S** | Suppliers (Fornecedores) | Quem alimenta o processo? |
| **I** | Inputs (Entradas) | O que entra no processo? |
| **P** | Process (Processo) | Quais são as 5–7 etapas principais? |
| **O** | Outputs (Saídas) | O que o processo produz? |
| **C** | Customers (Clientes) | Quem recebe as saídas? |

---

## Quando Usar?

- **No início de todo projeto** Six Sigma (fase Define)
- Quando ninguém concorda sobre como o processo funciona
- Para definir as fronteiras do projeto (onde começa e onde termina)
- Para identificar quem são os clientes reais das saídas

---

## Como Construir em 5 Passos

> **Dica:** Comece pelo meio (Processo), não pela ponta. É mais fácil.

1. **P — Processo:** Liste as 5–7 etapas macro (verbos de ação: "Receber", "Qualificar", "Enviar"...)
2. **O — Outputs:** Para cada etapa, o que é produzido?
3. **C — Customers:** Quem recebe cada output?
4. **I — Inputs:** O que precisa entrar para o processo funcionar?
5. **S — Suppliers:** Quem fornece cada input?

---

## Exemplo: Processo Comercial B2B

| Suppliers | Inputs | Process | Outputs | Customers |
|-----------|--------|---------|---------|-----------|
| Marketing | Leads qualificados | 1. Receber e qualificar lead | Proposta comercial | Comprador |
| Estoque | Tabela de preços | 2. Fazer primeiro contato | Contrato assinado | Jurídico |
| Financeiro | Crédito aprovado | 3. Elaborar proposta | Pedido de compra | Logística |
| Jurídico | Contrato padrão | 4. Negociar e fechar | Nota fiscal | Faturamento |
| CRM | Histórico do cliente | 5. Registrar no CRM | Registro atualizado | Pós-venda |

---

## SIPOC vs. Value Stream Map (VSM)

| SIPOC | Value Stream Map |
|-------|------------------|
| Alto nível (5–7 passos) | Detalhado (cada micro-etapa com tempos) |
| Usado na fase Define | Usado na fase Measure/Analyze |
| Responde "o quê" | Responde "quanto tempo" |

> 💡 **O SIPOC é o primeiro mapa. O VSM vem depois, quando você precisa ir mais fundo.**
      `
    }
  ]
},

// ── MÓDULO 3 ─────────────────────────────────────────────
{
  id: 3,
  title: "Fase MEASURE — Medindo a Realidade",
  description: "Tipos de dados, amostragem, MSA/Gage R&R, Cp/Cpk, Nível Sigma — como medir o processo corretamente.",
  difficulty: "Intermediário",
  lessons: [
    {
      id: "3.1",
      title: "Tipos de Dados e Escalas de Medição",
      content: `
# Tipos de Dados — A Base de Tudo

## Por que Isso Importa?

> **O tipo de dado que você tem define qual ferramenta estatística pode usar.** Usar a ferramenta errada no dado errado é como usar chave de fenda para apertar um parafuso Allen — não funciona.

---

## Os 2 Grandes Grupos

### 📊 Dados Contínuos (Variáveis)
Podem assumir **qualquer valor** dentro de um intervalo. Você pode medir com casas decimais.

**Exemplos:** Peso (72,3 kg), Temperatura (36,8°C), Tempo (4,7 minutos), Diâmetro (12,05 mm)

**Por que são melhores:** Carregam mais informação estatística. Com 30 medições contínuas, você já consegue calcular o nível sigma com confiança.

### 📋 Dados Discretos (Atributos)
Só podem assumir **valores específicos**, geralmente contagens ou categorias.

4 tipos de escalas:
| Escala | Descrição | Exemplo | Operações Possíveis |
|--------|-----------|---------|---------------------|
| **Nominal** | Apenas categorias, sem ordem | Cor (azul, verde), Tipo (A, B, C) | Contar, calcular % |
| **Ordinal** | Categorias com ordem, sem intervalo fixo | Satisfação (ruim, médio, bom), Tamanho (P, M, G) | Contar, ordenar |
| **Intervalar** | Ordem com intervalos iguais, sem zero absoluto | Temperatura °C (0°C não é "sem temperatura") | Somar, subtrair |
| **Razão** | Intervalar com zero absoluto | Peso, Altura, Renda (0 kg = sem peso) | Todas as operações |

---

## A Regra de Ouro

> 💡 **Sempre que possível, colete dados contínuos.** Um dado contínuo equivale a ~10 dados discretos em poder estatístico.

Exemplo: Em vez de anotar "a peça passou ou não" (discreto), meça o diâmetro exato da peça (contínuo). Com o diâmetro, você sabe não apenas se passou, mas **por quanto** — isso permite prever quando o processo vai começar a falhar.

---

## Operacionalizar a Medição

Antes de sair coletando dados, defina:
1. **O que medir** (precisa se conectar diretamente ao CTQ definido na fase Define)
2. **Como medir** (instrumento, método, unidade)
3. **Quem mede** (padronizar entre operadores)
4. **Quando medir** (frequência e período)
5. **Onde registrar** (planilha? sistema? papel?)

> ⚠️ **Erro clássico:** Coletar dados que "estão disponíveis" em vez de dados que "são necessários". Dados fáceis de obter nem sempre respondem à pergunta certa.
      `
    },
    {
      id: "3.2",
      title: "Amostragem — Quanto Coletar e Como?",
      content: `
# Amostragem Estatística

## A Ideia Central

> **Você não precisa medir TODAS as peças para entender o processo. Uma amostra bem feita diz praticamente a mesma coisa que a população inteira.**

A diferença: medir tudo é caro e demorado. Uma amostra inteligente é rápida, barata e estatisticamente válida.

---

## Tipos de Amostragem

### 🎲 Aleatória Simples
Cada item tem a **mesma chance** de ser selecionado. É o padrão.
- **Como fazer:** Numere os itens, use gerador aleatório ou Excel (=ALEATÓRIO.ENTRE)
- **Quando usar:** Quando a população é relativamente homogênea

### 📊 Estratificada
Divide a população em grupos (estratos) e amostra de cada um.
- **Por que:** Se você tem 3 turnos na fábrica e quer garantir que cada turno esteja representado
- **Exemplo:** 200 peças do turno A, 200 do turno B, 200 do turno C

### ⏱️ Sistemática
Seleciona um item a cada N intervalos (ex: a cada 10ª peça na esteira).
- **Vantagem:** Prática e fácil de executar na linha de produção
- **Cuidado:** Se o processo tem um ciclo natural que coincide com N, você pode criar um viés

---

## Calculando o Tamanho da Amostra

### Para Dados Contínuos (Média)

\`\`\`
n = (Z × σ / E)²
\`\`\`

Onde:
- **Z** = valor da confiança (1,96 para 95%)
- **σ** = desvio padrão estimado da população
- **E** = margem de erro aceitável

**Exemplo passo a passo:**
Queremos estimar o tempo médio de atendimento. Sabemos por experiência que σ ≈ 5 minutos. Queremos margem de erro de ±1 minuto com 95% de confiança.

n = (1,96 × 5 / 1)² = (9,8)² = 96,04 → **Arredonde para 97 amostras**

### Para Dados Discretos (Proporção)

\`\`\`
n = Z² × p × (1 − p) / E²
\`\`\`

Onde **p** = proporção estimada. Se você não sabe, use p = 0,5 (o pior caso, que dá o n máximo).

**Exemplo passo a passo:**
Queremos estimar a % de peças defeituosas. Não temos ideia da taxa, então p = 0,5. Queremos margem de erro de ±5% com 95% de confiança.

n = (1,96)² × 0,5 × 0,5 / (0,05)² = 3,84 × 0,25 / 0,0025 = **385 amostras**

---

## Erros de Amostragem que Destroem Projetos

1. **Amostra de Conveniência** — Pegar só o que é fácil (ex: medir só peças do turno da manhã porque é quando você está na fábrica)
2. **Amostra Muito Pequena** — "Medimos 5 peças e a média ficou ok" → Com 5 dados, você não sabe praticamente nada
3. **Período Insuficiente** — Coletar dados de 1 dia e achar que representa o processo do mês inteiro

> 💡 **Regra prática:** Para dados contínuos, **mínimo de 30 observações** para ter uma base confiável. Para dados discretos, costuma-se precisar de centenas.
      `
    },
    {
      id: "3.3",
      title: "MSA e Gage R&R — Seu Instrumento de Medição é Confiável?",
      content: `
# MSA — Análise do Sistema de Medição

## A Ideia Central

> **Antes de confiar nos dados, você precisa confiar no instrumento que os gerou.**

Se sua régua está torta, não importa quantas vezes você meça — o resultado será errado. O MSA responde à pergunta: **"A variação que estou vendo é real (do processo) ou é fantasma (do meu sistema de medição)?"**

---

## Analogia: A Balança do Banheiro

Você sobe na balança e marca 75 kg. Desce e sobe de novo: 76 kg. De novo: 74 kg.

Pergunta: Você mudou de peso, ou a balança é ruim?

Essa é exatamente a pergunta do MSA — mas aplicada a micrômetros, paquímetros, software de análise, inspetores visuais, ou qualquer coisa que gere dados.

---

## Os 5 Elementos que Causam Erro de Medição

| Elemento | O que é | Exemplo |
|----------|---------|---------|
| **Viés (Bias)** | A medição está sistematicamente acima ou abaixo do valor real | Sua balança sempre marca 1 kg a mais |
| **Linearidade** | O viés muda ao longo da escala de medição | A balança é precisa em 50 kg, mas erra em 100 kg |
| **Estabilidade** | A medição muda ao longo do tempo | A balança dá valores diferentes de manhã e à noite |
| **Repetibilidade** | O mesmo operador mede a mesma peça e obtém resultados diferentes | Você sobe na balança 3 vezes e ela marca 75, 76, 74 |
| **Reprodutibilidade** | Operadores diferentes medem a mesma peça e obtêm resultados diferentes | Você marca 75, seu colega marca 73 na mesma balança |

---

## Gage R&R — O Teste Prático

R&R = **Repeatability (Repetibilidade)** + **Reproducibility (Reprodutibilidade)**

### Como Funciona:
1. Selecione **10 peças** que cubram o range do processo
2. Escolha **3 operadores** diferentes
3. Cada operador mede cada peça **3 vezes** (total: 90 medições)
4. Calcule a variação devida ao instrumento e aos operadores vs. a variação real das peças

### Interpretando os Resultados:

| %GRR (% da tolerância) | Classificação | Ação |
|------------------------|---------------|------|
| **< 10%** | Excelente | Sistema de medição aceito |
| **10% – 30%** | Aceitável | Aceitar com ressalvas, planejar melhoria |
| **> 30%** | Inaceitável | NÃO USE esses dados! Corrija o sistema antes de continuar |

### Número de Categorias Distintas (ndc):
\`\`\`
ndc = (σ_peças / σ_gage) × 1,41
\`\`\`
- **ndc ≥ 5:** O sistema consegue distinguir categorias suficientes de variação
- **ndc < 5:** O sistema "enxerga borrado" — mistura peças boas com ruins

---

> ⚠️ **Erro fatal:** Pular o MSA e ir direto para análise. Se seu Gage R&R está acima de 30%, **TODOS os seus cálculos de Cp, Cpk e testes de hipótese estão contaminados**. Você está tomando decisões com base em ruído, não em sinal.

> 💡 **Regra de ouro do Black Belt:** "Não confio em nenhum dado até que o sistema de medição prove que merece confiança."
      `
    },
    {
      id: "3.4",
      title: "Cp, Cpk e Nível Sigma — O Processo é Capaz?",
      content: `
# Capacidade do Processo — Cp, Cpk e Nível Sigma

## A Pergunta que Todo Gerente Faz

> **"O nosso processo é capaz de atender consistentemente o que o cliente exige?"**

Cp e Cpk respondem isso com um único número.

---

## Analogia: O Carro e a Garagem

Pense numa garagem que tem **2 metros de largura** (isso são seus limites de especificação — LSL e USL). Seu carro tem **1,5 metros de largura** (isso é a variação do processo — 6σ).

- **Cp** responde: "O carro cabe na garagem?"
  - Carro (1,5m) < Garagem (2m) → Sim, cabe. Cp = 2/1,5 = 1,33 ✅
  
- **Cpk** responde: "O carro cabe **E** está centralizado?"
  - Se o carro está encostado na parede esquerda, cabe, mas qualquer variação vai riscá-lo
  - Cpk mede a distância até a parede MAIS PRÓXIMA

---

## As Fórmulas

### Cp — Potencial do Processo (ignora centralização)
\`\`\`
Cp = (USL − LSL) / 6σ
\`\`\`

### Cpk — Capacidade Real (considera centralização)
\`\`\`
Cpk = min[(USL − μ) / 3σ, (μ − LSL) / 3σ]
\`\`\`

### Leitura dos Resultados:

| Valor | Significado | Ação |
|-------|-------------|------|
| **Cp ou Cpk < 1,0** | Processo incapaz — produz defeitos regularmente | Ação urgente: reduzir variação ou negociar especificações |
| **1,0 ≤ Cpk < 1,33** | Mal capaz — funciona no limite | Melhoria necessária |
| **Cpk ≥ 1,33** | Capaz — padrão mínimo da indústria | Aceitável |
| **Cpk ≥ 2,0** | Muito capaz — padrão Six Sigma | Excelente |

---

## Exemplo Completo Passo a Passo

**Situação:** Uma linha de produção fabrica eixos com especificação de diâmetro: 10,0 ± 0,5 mm (ou seja, LSL = 9,5 mm, USL = 10,5 mm)

Dados coletados (30 amostras):
- Média (μ) = 10,1 mm
- Desvio padrão (σ) = 0,12 mm

**Cálculo do Cp:**
Cp = (10,5 − 9,5) / (6 × 0,12) = 1,0 / 0,72 = **1,39** → O carro cabe na garagem ✅

**Cálculo do Cpk:**
- Lado superior: (10,5 − 10,1) / (3 × 0,12) = 0,4 / 0,36 = 1,11
- Lado inferior: (10,1 − 9,5) / (3 × 0,12) = 0,6 / 0,36 = 1,67
- Cpk = min(1,11 , 1,67) = **1,11** → O carro cabe, mas está deslocado para a direita ⚠️

**Diagnóstico:** Cp é bom (1,39), mas Cpk é menor (1,11) porque o processo está descentralizado — a média (10,1) está acima do ponto médio (10,0). Ação: investigar por que o processo está desviando para cima.

---

## Pp e Ppk — A Versão de Longo Prazo

| | Cp / Cpk | Pp / Ppk |
|-|----------|----------|
| **Usa** | σ de curto prazo (within) | σ de longo prazo (overall) |
| **Representa** | Potencial se o processo fosse perfeitamente controlado | Realidade do dia a dia |
| **Relação** | Sempre ≥ Ppk | Sempre ≤ Cpk |

> 💡 **Se Cp é bom mas Pp é ruim**, significa que o processo tem capacidade, mas fora de controle — há "shifts" e "drifts" ao longo do tempo que degradam o desempenho real.

---

## Nível Sigma do Processo

A conversão de DPMO para Nível Sigma segue a distribuição normal (com shift de 1,5σ):

\`\`\`
Nível Sigma ≈ 0,8406 + √(29,37 − 2,221 × ln(DPMO))
\`\`\`

Ou use a tabela de conversão na página de Fórmulas deste app.
      `
    }
  ]
},

// ── MÓDULO 4 ─────────────────────────────────────────────
{
  id: 4,
  title: "Estatística Essencial para Black Belts",
  description: "Distribuição Normal, Teste de Hipótese, Valor-P, ANOVA e Regressão — as ferramentas analíticas fundamentais.",
  difficulty: "Intermediário",
  lessons: [
    {
      id: "4.1",
      title: "Distribuição Normal e Teorema Central do Limite",
      content: `
# Distribuição Normal — A Curva que Governa Tudo

## A Ideia Central

> **A distribuição Normal (curva de sino) descreve como a maioria dos processos naturais e industriais se comporta: muitos resultados concentrados no centro, poucos nos extremos.**

---

## Por que a Normal é Tão Importante?

Imagine que você mede a altura de 10.000 pessoas adultas no Brasil. Quando plota os dados em um gráfico:
- A maioria estará entre 1,60m e 1,80m (o centro)
- Poucos terão menos de 1,50m ou mais de 1,95m (as extremidades)
- O formato será uma curva simétrica de sino

Essa forma aparece em quase tudo: peso de peças fabricadas, tempo de atendimento, temperatura de um forno, diâmetro de parafusos. Por isso ela é o alicerce do Six Sigma.

---

## Regra Empírica — O "68-95-99,7"

Se os dados seguem distribuição Normal:

| Distância da Média | % dos Dados Contidos | Na prática |
|--------------------|---------------------|------------|
| μ ± 1σ | 68,27% | 2 em cada 3 resultados |
| μ ± 2σ | 95,45% | 19 em cada 20 |
| μ ± 3σ | 99,73% | 997 em cada 1.000 |
| μ ± 6σ | 99,99966% | Apenas 3,4 fora de cada 1.000.000 |

> 💡 **Isso é o "Six Sigma" literal:** O processo está tão apertado que o limite de especificação do cliente fica a 6 desvios padrão da média. Praticamente nenhum resultado sai fora do aceitável.

---

## Teorema Central do Limite (TCL)

> **Mesmo que os dados individuais NÃO sigam distribuição Normal, a média de amostras desses dados segue Normal — desde que a amostra seja grande o suficiente.**

### Por que isso é revolucionário?

Porque libera você para usar todas as ferramentas da Normal (testes t, ANOVA, regressão) mesmo quando os dados não são perfeitamente normais, **desde que trabalhe com médias de amostras de tamanho ≥ 30.**

### Analogia do Dado

Um dado de 6 faces dá resultados uniformes (1 a 6, cada um com ~16,7%). Nada de curva de sino.

Mas se você jogar 30 dados e calcular a **média** dos 30, e repetir isso 1.000 vezes — o gráfico dessas 1.000 médias forma uma curva de sino perfeita! Esse é o TCL em ação.

---

## Testando se Seus Dados são Normais

### Teste de Anderson-Darling
- **H₀:** Os dados seguem distribuição Normal
- **H₁:** Os dados NÃO seguem distribuição Normal
- **Se p-value > 0,05:** Aceite a normalidade (dados são Normais) ✅
- **Se p-value ≤ 0,05:** Rejeite a normalidade ❌

> ⚠️ **E se os dados não são Normais?** Três opções:
> 1. Transformar os dados (Box-Cox, log, raiz quadrada)
> 2. Usar testes não-paramétricos (Mann-Whitney, Kruskal-Wallis)
> 3. Se n ≥ 30, usar o TCL e trabalhar com médias
      `
    },
    {
      id: "4.2",
      title: "Testes de Hipótese — Provando com Dados",
      content: `
# Testes de Hipótese

## A Ideia Central

> **Um teste de hipótese é como um julgamento: o processo é "inocente" (está funcionando bem) até que os dados provem "culpa" (há um problema real).**

Você nunca pode ter 100% de certeza — mas pode ter 95% ou 99% de confiança.

---

## A Estrutura de Todo Teste

### Passo 1: Formule as Hipóteses
- **H₀ (Hipótese Nula):** "Não há diferença" ou "O processo está ok"
- **H₁ (Hipótese Alternativa):** "Existe diferença" ou "O processo mudou"

### Passo 2: Escolha o Nível de Significância (α)
- Geralmente **α = 0,05** (5% de chance de cometer erro tipo I)
- Isso significa que você aceita 5% de risco de "condenar um inocente"

### Passo 3: Colete dados e calcule a estatística do teste (t, Z, F, χ²)

### Passo 4: Compare com o p-value
- **Se p-value ≤ α:** REJEITE H₀ — há evidência estatística de diferença
- **Se p-value > α:** NÃO REJEITE H₀ — não há evidência suficiente

---

## Entendendo o P-Value

> **O p-value responde: "Se H₀ fosse verdade, qual a chance de eu observar um resultado tão extremo quanto o que observei?"**

### Analogia do Tribunal

O p-value é como a "força da evidência":
- **p = 0,001:** Evidência muito forte contra o réu (há 0,1% de chance de ele ser inocente dado o que vimos)
- **p = 0,03:** Evidência moderada (3% de chance)
- **p = 0,15:** Evidência fraca — não dá para condenar
- **p = 0,87:** Quase nenhuma evidência — o réu é "liberado"

---

## Os 2 Tipos de Erro

| | H₀ é Verdadeira (Processo OK) | H₀ é Falsa (Processo com Problema) |
|-|-------------------------------|-------------------------------------|
| **Rejeitar H₀** | Erro Tipo I (α) — Falso alarme | ✅ Decisão correta (Power) |
| **Não Rejeitar H₀** | ✅ Decisão correta | Erro Tipo II (β) — Deixou o problema escapar |

- **α (Tipo I):** Você viu um problema que não existia. "Chamou os bombeiros sem incêndio."
- **β (Tipo II):** Você não viu um problema que existia. "A casa estava pegando fogo e você não percebeu."
- **Power = 1 − β:** A capacidade do teste de detectar um problema real quando ele existe (meta ≥ 80%)

---

## Qual Teste Usar?

| Situação | Teste |
|----------|-------|
| 1 grupo vs. valor alvo, dados normais | **1-Sample t-test** |
| 1 grupo vs. valor alvo, dados não-normais | **1-Sample Wilcoxon** |
| 2 grupos independentes, dados normais | **2-Sample t-test** |
| 2 grupos independentes, dados não-normais | **Mann-Whitney U** |
| Antes e depois (pareado) | **Paired t-test** |
| 3+ grupos, dados normais | **One-Way ANOVA** |
| 3+ grupos, dados não-normais | **Kruskal-Wallis** |
| Proporções | **Teste de Proporção / Chi-quadrado** |

> 💡 **Use o Fluxograma de Decisão na página de Fórmulas deste app** — ele guia você passo a passo até o teste correto.
      `
    },
    {
      id: "4.3",
      title: "Regressão e Correlação — Descobrindo Relações entre Variáveis",
      content: `
# Regressão e Correlação

## A Ideia Central

> **Correlação pergunta: "Essas duas variáveis andam juntas?" Regressão responde: "Se eu mudar X, quanto Y vai mudar?"**

---

## Correlação — Medindo a Força da Relação

### Coeficiente de Correlação de Pearson (r)

| Valor de r | Significado | O que você vê no gráfico |
|-----------|-------------|---------------------------|
| r = +1,0 | Correlação positiva perfeita | Pontos alinhados subindo ↗ |
| r = +0,7 | Forte positiva | Tendência clara de subida |
| r = +0,3 | Fraca positiva | Tendência sutil, muito espalhado |
| r = 0 | Sem correlação linear | Nuvem de pontos sem padrão |
| r = −0,7 | Forte negativa | Tendência clara de descida ↘ |
| r = −1,0 | Correlação negativa perfeita | Pontos alinhados descendo |

> ⚠️ **Correlação NÃO é causação!** O consumo de sorvete e afogamentos são altamente correlacionados (ambos aumentam no verão). Mas sorvete não causa afogamento. A causa real é o calor.

---

## Regressão Linear — Prevendo Y a partir de X

\`\`\`
Y = β₀ + β₁X + ε
\`\`\`

- **β₀ (intercepto):** Valor de Y quando X = 0
- **β₁ (inclinação):** Quanto Y muda para cada unidade adicional de X
- **ε (erro):** A variação que o modelo não explica

### Exemplo Prático

**Pergunta:** "A temperatura do forno (X) afeta a dureza da peça (Y)?"

Após coletar 40 dados e rodar a regressão:
\`\`\`
Dureza = 12,3 + 0,45 × Temperatura
\`\`\`

**Leitura:** Para cada 1°C adicional na temperatura, a dureza aumenta 0,45 unidades. Se a temperatura for 200°C: Dureza prevista = 12,3 + 0,45 × 200 = **102,3**

---

## R² — Quanto o Modelo Explica?

\`\`\`
R² = 1 − (SS_Residual / SS_Total)
\`\`\`

- **R² = 0,85:** O modelo explica 85% da variação em Y. Os outros 15% são ruído ou outras variáveis não incluídas
- **R² = 0,30:** O modelo só explica 30% — as variáveis preditoras não são suficientes

> 💡 **Para regressão múltipla**, use o **R² Ajustado** em vez do R². O R² sempre sobe ao adicionar variáveis — mesmo inúteis. O R² Ajustado penaliza a adição de variáveis que não melhoram o modelo de verdade.

---

## Verificando se a Regressão é Válida (Resíduos)

Uma regressão só é confiável se os resíduos (erros) forem:

1. **Normais** — Histogram dos resíduos deve parecer uma curva de sino
2. **Independentes** — Sem padrão ao longo do tempo
3. **Homocedasticidade** — A dispersão dos resíduos é constante (não aumenta em forma de funil)
4. **Média zero** — Devem flutuar ao redor de zero, sem tendência

Se qualquer uma dessas condições falha, o modelo pode estar dando previsões enganosas.
      `
    }
  ]
},

// ── MÓDULO 5 ─────────────────────────────────────────────
{
  id: 5,
  title: "Fase ANALYZE — Encontrando as Causas-Raiz",
  description: "Diagrama de Ishikawa, 5 Porquês, Multi-Vari, ANOVA e FMEA — provando as causas reais com dados.",
  difficulty: "Intermediário",
  lessons: [
    {
      id: "5.1",
      title: "Ferramentas de Geração de Hipóteses",
      content: `
# Ferramentas para Gerar Hipóteses

## A Ideia Central

> **Antes de provar qualquer coisa com dados, você precisa ter candidatos a culpados. As ferramentas de geração de hipóteses são o "brainstorming estruturado" que lista todos os suspeitos.**

---

## 🐟 Diagrama de Ishikawa (Espinha de Peixe)

### O que é?
Um diagrama visual que organiza possíveis causas em categorias, partindo do efeito (o problema) que fica na "cabeça do peixe".

### Os 6M — As Categorias Padrão

| Categoria | O que investiga | Exemplo |
|-----------|----------------|---------|
| **Máquina** | Equipamento, ferramenta, software | Máquina desalinhada, sensor descalibrado |
| **Método** | Procedimento, processo, instrução de trabalho | Procedimento ambíguo, falta de padronização |
| **Material** | Matéria-prima, insumo, informação de entrada | Lote de fornecedor com impurezas |
| **Mão de Obra** | Treinamento, experiência, fadiga | Operador novo sem treinamento adequado |
| **Medição** | Sistema de medição, instrumentos, critérios | Paquímetro fora de calibração |
| **Meio Ambiente** | Temperatura, umidade, iluminação, turno | Umidade excessiva no turno da noite |

### Como Conduzir

1. Escreva o **problema** na cabeça do peixe (ex: "Taxa de defeito = 12%")
2. Desenhe as 6 espinhas (categorias 6M)
3. Para cada categoria, pergunte ao time: **"O que nesta categoria pode estar causando o problema?"**
4. Anote cada possível causa como uma "sub-espinha"
5. Vote nas **3-5 causas mais prováveis** para investigar com dados

---

## ❓ 5 Porquês

### A Ideia
Pergunte "por quê?" repetidamente até chegar à **causa-raiz**, não ao sintoma.

### Exemplo Prático

**Problema:** O cliente reclamou que a entrega atrasou.

1. **Por quê?** Porque o pedido saiu do armazém 2 dias depois do prazo.
2. **Por quê?** Porque o setor de separação não recebeu a ordem a tempo.
3. **Por quê?** Porque o sistema de vendas só gera ordem após aprovação de crédito.
4. **Por quê?** Porque a aprovação de crédito leva 3 dias.
5. **Por quê?** Porque o analista de crédito atende sozinho 200 pedidos por dia sem critério de priorização.

**Causa-raiz:** Falta de priorização na análise de crédito, não "atraso no armazém".

> 💡 **A beleza dos 5 Porquês:** Cada "por quê" te move de um sintoma para uma causa mais profunda. O erro mais comum é parar cedo — resolver o "pedido atrasou no armazém" sem investigar o que causou o atraso.

> ⚠️ **Limitação:** O método é subjetivo. Pessoas diferentes podem seguir cadeias causais diferentes. Use-o para GERAR hipóteses, não para PROVAR causas. A prova vem com dados (testes estatísticos).

---

## 📊 Análise Multi-Vari

### O que é?
Um estudo visual que ajuda a identificar **onde está a maior variação** no processo — é entre posições? entre peças? entre turnos? entre dias?

### Os 3 Níveis de Variação

| Nível | O que é | Exemplo | Causa típica |
|-------|---------|---------|--------------|
| **Within** (dentro da peça) | Variação entre pontos de medição na mesma peça | Diâmetro varia entre topo e base do cilindro | Desgaste da ferramenta |
| **Between** (entre peças) | Variação entre peças consecutivas | Cada peça sai com diâmetro diferente | Ajuste da máquina, material |
| **Temporal** | Variação ao longo do tempo (turno, dia, semana) | Peças ficam maiores à tarde | Dilatação térmica, fadiga do operador |

### Por que usar?
Antes de rodar ANOVA ou testes sofisticados, o Multi-Vari dá uma **pista visual** rápida de onde investir a investigação estatística.

> 💡 **Regra prática:** Se a maior variação é "within", o problema é na peça/máquina. Se é "between", é entre unidades (material, setup). Se é "temporal", é ambiental ou humano.
      `
    },
    {
      id: "5.2",
      title: "ANOVA — Testando Diferenças entre Grupos",
      content: `
# ANOVA — Análise de Variância

## A Ideia Central

> **ANOVA responde: "Existe diferença significativa entre os grupos, ou a variação que eu vejo é apenas ruído aleatório?"**

### Analogia: O Professor e as 3 Turmas

Um professor aplica a mesma prova em 3 turmas. As médias são: Turma A = 7,2, Turma B = 6,8, Turma C = 7,5.

**Pergunta:** Essas diferenças são reais (algo nas turmas é diferente) ou são apenas variação normal entre alunos?

ANOVA responde isso. Ela compara a **variação entre grupos** (as turmas) com a **variação dentro dos grupos** (os alunos dentro de cada turma).

---

## Como Funciona

### A Estatística F

\`\`\`
F = Variação ENTRE os grupos / Variação DENTRO dos grupos
    = MS_Between / MS_Within
\`\`\`

| Resultado | Interpretação |
|-----------|---------------|
| **F ≈ 1** | A variação entre grupos é similar à variação dentro dos grupos → as diferenças são provavelmente ruído |
| **F >> 1** | A variação entre grupos é MUITO maior que a dentro → há diferença real |

---

## Tipos de ANOVA

| Tipo | Quando usar | Exemplo |
|------|-------------|---------|
| **One-Way ANOVA** | 1 fator, 3+ níveis | "Os 3 turnos produzem com a mesma qualidade?" |
| **Two-Way ANOVA** | 2 fatores | "Turno E tipo de material afetam a qualidade?" |
| **ANOVA com Blocos** | 1 fator controlando outra fonte de variação | "Turnos diferem se eu controlar a máquina?" |

---

## Exemplo Passo a Passo

**Pergunta:** "O turno de produção (A, B, C) afeta o peso médio da peça?"

### Dados:
- Turno A: média = 500,2 g (n=25)
- Turno B: média = 498,7 g (n=25)
- Turno C: média = 501,5 g (n=25)

### Resultado da ANOVA:

| Fonte de Variação | SS | gl | MS | F | p-value |
|--------------------|-----|----|----|---|---------|
| Entre Turnos | 98,4 | 2 | 49,2 | 6,83 | 0,002 |
| Dentro dos Turnos | 518,7 | 72 | 7,2 | | |
| Total | 617,1 | 74 | | | |

**p-value = 0,002 < 0,05 → REJEITA H₀**

**Conclusão:** Pelo menos um turno produz peças com peso significativamente diferente dos outros.

### E agora? — Post-Hoc (Tukey)
ANOVA diz que "alguém é diferente", mas não diz quem. Para isso, use o **teste de Tukey HSD**:
- A vs. B: p = 0,35 → Sem diferença
- A vs. C: p = 0,21 → Sem diferença
- **B vs. C: p = 0,001** → Turno B e C são significativamente diferentes!

> 💡 **ANOVA é o "radar". Tukey é a "mira que mostra o alvo exato."**
      `
    },
    {
      id: "5.3",
      title: "FMEA — Mapeando Riscos Antes que Aconteçam",
      content: `
# FMEA — Failure Mode and Effects Analysis

## A Ideia Central

> **FMEA é uma abordagem proativa: em vez de esperar o problema acontecer e investigar depois, você ANTECIPA as falhas possíveis e age preventivamente.**

---

## As 3 Perguntas do FMEA

Para cada etapa do processo, pergunte:

1. **O que pode falhar?** → Modo de Falha
2. **O que acontece quando falha?** → Efeito da Falha
3. **Por que falha?** → Causa da Falha

---

## Os 3 Componentes do RPN

**RPN (Risk Priority Number) = Severidade × Ocorrência × Detecção**

### Severidade (S) — escala 1 a 10
> "Se essa falha acontecer, quão grave é para o cliente?"

| Faixa | Significado | Exemplo |
|-------|-------------|---------|
| 1–3 | Menor — cliente quase não percebe | Embalagem com um risco estético |
| 4–6 | Moderado — causa insatisfação | Produto entregue com atraso de 1 dia |
| 7–8 | Alto — defeito funcional | Peça não encaixa no produto final |
| 9–10 | Crítico — risco de segurança | Freio de carro falha em uso normal |

### Ocorrência (O) — escala 1 a 10
> "Com que frequência essa causa acontece?"

| Faixa | Frequência | Probabilidade |
|-------|-----------|---------------|
| 1–2 | Muito rara | < 1 em 1.000.000 |
| 3–4 | Baixa | 1 em 100.000 |
| 5–6 | Moderada | 1 em 1.000 |
| 7–8 | Alta | 1 em 100 |
| 9–10 | Muito alta | > 1 em 10 |

### Detecção (D) — escala 1 a 10
> "Se a falha estiver acontecendo, os controles atuais vão detectar A TEMPO?"

**Atenção: A escala é INVERTIDA — 1 = fácil de detectar, 10 = impossível.**

| Faixa | Capacidade de Detecção |
|-------|------------------------|
| 1–2 | Quase certo de detectar (sensores automáticos) |
| 3–4 | Alta probabilidade (inspeção 100%) |
| 5–6 | Moderada (amostragem periódica) |
| 7–8 | Baixa (inspeção visual esporádica) |
| 9–10 | Praticamente impossível detectar antes de chegar ao cliente |

---

## Interpretando o RPN

| RPN | Prioridade | Ação |
|-----|-----------|------|
| **> 200** | Crítica | Ação imediata — não pode esperar |
| **100–200** | Alta | Planejar ação em até 30 dias |
| **50–100** | Média | Incluir no próximo ciclo de melhoria |
| **< 50** | Baixa | Monitorar |

> ⚠️ **Regra de ouro do FMEA:** Se a Severidade é 9 ou 10, **tome ação independentemente do RPN total.** Risco de segurança ou risco regulatório nunca pode ser ignorado, mesmo que a ocorrência seja baixa.

---

## FMEA de Processo vs. FMEA de Design

| Tipo | Foco | Quando usar |
|------|------|-------------|
| **PFMEA** | Falhas nas etapas do processo de produção | Fases Analyze e Control |
| **DFMEA** | Falhas no design do produto antes da fabricação | Design for Six Sigma (DMADV) |
      `
    }
  ]
},

// ── MÓDULO 6 ─────────────────────────────────────────────
{
  id: 6,
  title: "Fase IMPROVE — Projetando Soluções",
  description: "DOE (Design of Experiments), brainstorming estruturado, piloto e validação — como encontrar e provar a melhor solução.",
  difficulty: "Avançado",
  lessons: [
    {
      id: "6.1",
      title: "Design of Experiments (DOE) — Testando com Inteligência",
      content: `
# Design of Experiments — DOE

## A Ideia Central

> **DOE é o método mais eficiente para descobrir quais fatores realmente importam e qual é a melhor configuração — testando tudo de forma simultânea e organizada, em vez de mudar um fator de cada vez.**

---

## O Problema do "Um de Cada Vez" (OFAT)

Na maioria das fábricas e escritórios, quando algo não funciona, o operador muda **um fator por vez** e observa o resultado. Isso é chamado de OFAT (One Factor At a Time) e tem 3 problemas graves:

1. **Demora muito:** 4 fatores × 2 níveis = 8 experimentos isolados, sem garantia de sucesso
2. **Não detecta interações:** Às vezes o efeito do fator A depende do nível do fator B — OFAT nunca descobre isso
3. **Pode levar à solução errada:** Você encontra o "melhor A" com B fixo, mas o "melhor A" muda quando B muda

### Analogia: Cozinhando um Bolo

Você quer o bolo perfeito. OFAT diz: "teste primeiro a temperatura, depois o tempo, depois a quantidade de fermento." Mas e se o fermento funciona diferente em temperaturas altas vs. baixas? OFAT não descobre. **DOE testa combinações**, revelando essas interações.

---

## Terminologia Essencial

| Termo | O que é | Exemplo |
|-------|---------|---------|
| **Fator (X)** | Variável de entrada que você controla | Temperatura, Pressão, Velocidade |
| **Nível** | Valores que o fator assume no experimento | Temperatura: 150°C (baixo) e 200°C (alto) |
| **Resposta (Y)** | O resultado que você mede | Dureza, Brilho, Tempo de ciclo |
| **Rodada (Run)** | Uma combinação específica de níveis dos fatores | T=150°C, P=2 bar, V=800 rpm |
| **Replicação** | Repetir a mesma rodada para medir a variação natural | 3 réplicas de cada rodada |
| **Interação** | O efeito de um fator DEPENDE do nível de outro | Velocidade alta é boa com grão 400, mas ruim com grão 200 |

---

## Fatorial Completo (2ᵏ)

Para k fatores, cada um com 2 níveis (baixo e alto), testa **todas** as 2ᵏ combinações:

| k fatores | Rodadas (sem réplica) |
|-----------|----------------------|
| 2 | 2² = 4 |
| 3 | 2³ = 8 |
| 4 | 2⁴ = 16 |
| 5 | 2⁵ = 32 |

### Exemplo: 3 Fatores (8 Rodadas)

| Rodada | Velocidade | Pressão | Grão | Brilho (Y) |
|--------|-----------|---------|------|------------|
| 1 | Baixa | Baixa | Fino | 62 |
| 2 | Alta | Baixa | Fino | 71 |
| 3 | Baixa | Alta | Fino | 65 |
| 4 | Alta | Alta | Fino | 78 |
| 5 | Baixa | Baixa | Grosso | 55 |
| 6 | Alta | Baixa | Grosso | 60 |
| 7 | Baixa | Alta | Grosso | 58 |
| 8 | Alta | Alta | Grosso | 63 |

**Resultado da análise:** Velocidade × Grão tem interação significativa — o efeito da velocidade é maior com grão fino (melhora 9 pontos) do que com grão grosso (melhora apenas 5).

---

## Fatorial Fracionário

Quando há muitos fatores (5+), o fatorial completo exige rodadas demais. O **fatorial fracionário** testa apenas uma fração, assumindo que interações de 3+ vias são desprezíveis.

| Design | Rodadas | Uso |
|--------|---------|-----|
| 2⁵⁻¹ | 16 (em vez de 32) | Screening: identificar fatores importantes |
| 2⁶⁻² | 16 (em vez de 64) | Screening com muitos fatores |

> 💡 **Estratégia em 2 etapas:** 1) Use fatorial fracionário para descobrir quais fatores importam (screening). 2) Use fatorial completo 2² ou 2³ apenas com os fatores importantes para otimizar.
      `
    }
  ]
},

// ── MÓDULO 7 ─────────────────────────────────────────────
{
  id: 7,
  title: "Fase CONTROL — Sustentando a Melhoria",
  description: "SPC, Cartas de Controle, Plano de Controle e Gestão Visual — como garantir que o problema não volte.",
  difficulty: "Intermediário",
  lessons: [
    {
      id: "7.1",
      title: "SPC — Controle Estatístico do Processo",
      content: `
# SPC — Controle Estatístico do Processo

## A Ideia Central

> **SPC é o sistema de alarme do processo: monitora continuamente o comportamento e avisa quando algo sai do normal — ANTES que o defeito chegue ao cliente.**

Walter Shewhart criou as primeiras cartas de controle na Bell Labs em 1924. Desde então, nenhuma fábrica séria opera sem elas.

---

## Os 2 Tipos de Variação

### ✅ Variação Comum (Aleatória)
- É **inerente** ao processo — sempre vai existir
- Resultado de MUITAS causas pequenas interagindo: vibração da máquina, umidade do ar, mão ligeiramente diferente do operador
- **Não pode ser eliminada sem mudar o processo inteiro** (redesenho)
- Na carta de controle: pontos flutuando normalmente dentro dos limites

### ❌ Variação Especial (Causas Atribuíveis)
- Tem uma **causa identificável específica**: troca de fornecedor, quebra de ferramenta, novo operador
- Sinaliza que algo **mudou** no processo
- Na carta de controle: pontos fora dos limites ou padrões anormais

### Analogia: Frequência Cardíaca

Seu coração bate entre 60 e 80 bpm em repouso (variação comum). Se de repente marca 120 em repouso, algo mudou — estresse, doença, café demais (variação especial). A carta de controle é o "monitor cardíaco" do processo.

---

## Limites de Controle vs. Limites de Especificação

| | Limites de Controle (UCL/LCL) | Limites de Especificação (USL/LSL) |
|-|-------------------------------|-------------------------------------|
| **Quem define** | O próprio processo (calculados pelos dados) | O cliente ou a engenharia |
| **Baseado em** | μ ± 3σ (dados históricos) | Requisito de qualidade |
| **O que significam** | "Até onde o processo naturalmente varia" | "O que o cliente aceita" |

> ⚠️ **Confusão mais comum:** Achar que "dentro dos limites de controle" = "dentro da especificação". Não! Um processo pode estar estatisticamente sob controle (previsível) mas ser **incapaz** (produzir fora das especificações).

---

## Tipos de Cartas de Controle

### Para Dados Contínuos

| Carta | Quando usar | Subgrupo |
|-------|-------------|----------|
| **X̄-R** | Subgrupos de 2 a 9 amostras | Monitora média e amplitude juntas |
| **X̄-S** | Subgrupos de 10+ amostras | Monitora média e desvio padrão |
| **I-MR (Individuais)** | Medição individual (1 por vez) | Quando cada peça é única ou cara |

### Para Dados Discretos (Atributos)

| Carta | O que monitora | Quando usar |
|-------|---------------|-------------|
| **p** | Proporção defeituosa (%) | Amostras de tamanho variável |
| **np** | Número de defeituosos | Amostras de tamanho fixo |
| **c** | Contagem de defeitos | Área de oportunidade constante |
| **u** | Defeitos por unidade | Área de oportunidade variável |

---

## Regras de Detecção de Causa Especial (Nelson)

Estas são as regras que disparam o "alarme" na carta de controle:

| Regra | Descrição | O que indica |
|-------|-----------|--------------|
| **1** | 1 ponto além de ±3σ | Instabilidade clara |
| **2** | 9 pontos consecutivos do mesmo lado da média | Shift (deslocamento da média) |
| **3** | 6 pontos consecutivos subindo ou descendo | Tendência (trend) |
| **5** | 2 de 3 pontos além de ±2σ (mesmo lado) | Provável shift em formação |

> 💡 **Na prática do dia a dia:** As regras 1, 2 e 3 são as mais usadas. Comece por elas e adicione as outras conforme a maturidade do processo.

---

## Plano de Controle — O Documento que Sustenta Tudo

Com o que ficou claro o "O quê monitorar", crie o Plano de Controle:

| O que medir | Como medir | Frequência | Quem | Limite de Ação | O que fazer se sair do limite |
|-------------|-----------|------------|------|----------------|-------------------------------|

> O plano de controle é o **"legado"** do projeto Six Sigma — é ele que garante que a melhoria sobreviva depois que o Black Belt for embora.
      `
    }
  ]
},

// ── MÓDULO 8 ─────────────────────────────────────────────
{
  id: 8,
  title: "Lean e Eliminação de Desperdícios",
  description: "Os 8 desperdícios (TIMWOODS), Value Stream Map, 5S, Kaizen, Kanban — as ferramentas para fluxo e velocidade.",
  difficulty: "Intermediário",
  lessons: [
    {
      id: "8.1",
      title: "Os 8 Desperdícios (TIMWOODS)",
      content: `
# Os 8 Desperdícios do Lean (TIMWOODS)

## A Filosofia Lean

> **O Lean nasceu no Sistema Toyota de Produção (TPS). Seu objetivo é simples: criar o máximo de valor para o cliente usando o mínimo de recursos.**

**Valor** = o que o cliente está disposto a pagar.
**Desperdício (Muda)** = qualquer atividade que consome recursos mas NÃO agrega valor para o cliente.

### Analogia: O Supermercado

Quando você vai ao supermercado comprar leite:
- **Valor:** Pegar o leite da prateleira e pagar → é o que você "veio fazer"
- **Desperdício:** Procurar vaga, caminhar até o corredor, esperar na fila do caixa → tudo isso consome seu tempo mas não é o motivo pelo qual você foi lá

---

## Os 8 Desperdícios — TIMWOODS

| Letra | Desperdício | O que é | Exemplo Prático |
|-------|------------|---------|-----------------|
| **T** | Transport (Transporte) | Movimentação desnecessária de material ou informação | Documento eletrônico que passa por 5 e-mails antes de chegar a quem precisa |
| **I** | Inventory (Estoque) | Mais do que o necessário esperando processamento | 300 leads no funil de vendas sem contato há 30 dias |
| **M** | Motion (Movimento) | Movimentação desnecessária de pessoas | Operador andando 50m para buscar ferramenta em cada setup |
| **W** | Waiting (Espera) | Tempo parado esperando a próxima etapa | Proposta comercial esperando aprovação por 3 dias |
| **O** | Overproduction (Superprodução) | Produzir mais ou antes do necessário | Relatórios semanais que ninguém lê |
| **O** | Overprocessing (Superprocessamento) | Mais processo do que o necessário | Proposta de 30 slides para uma venda simples |
| **D** | Defects (Defeitos) | Retrabalho, erros, correções | Proposta enviada com preço errado → refazer, desculpar-se, reenviar |
| **S** | Skills (Talentos subutilizados) | Não usar o talento e capacidade das pessoas | Engenheiro sênior fazendo input de dados em planilha |

> 💡 **Dica de memorização:** TIMWOODS = "Tim Woods" — um nome de pessoa. Lembre-se do Tim e você lembra dos 8 desperdícios.

---

## Value Stream Map (VSM)

### O que é?
> **Um mapa que mostra TODA a cadeia de valor do seu processo, desde o pedido do cliente até a entrega final, incluindo todos os tempos de espera e processamento.**

### O que ele revela:
- **Tempo VA (Value Added):** Tempo em que realmente se agrega valor
- **Tempo NVA (Non-Value Added):** Tempo de espera, transporte, fila
- **Lead Time Total:** Tempo total do início ao fim

### Eficiência do Ciclo (PCE):
\`\`\`
PCE = Tempo VA / Lead Time Total × 100%
\`\`\`

| PCE | O que significa |
|-----|-----------------|
| 1–5% | Típico em processos de serviço (escritórios) |
| 5–15% | Típico em manufatura |
| > 25% | Classe mundial |

> ⚠️ **A revelação mais chocante do VSM:** Na maioria dos processos, o produto ou documento fica **parado** (esperando) por 85-95% do tempo total. Apenas 5-15% é trabalho real. É como um avião que fica 18 horas no hangar para cada 2 horas que voa.

---

## Little's Law — A Fórmula Universal

\`\`\`
WIP = Throughput × Lead Time
\`\`\`

Onde:
- **WIP** = Work in Process (itens sendo processados agora)
- **Throughput** = Taxa de saída (itens completados por hora/dia)
- **Lead Time** = Tempo total que um item leva no sistema

### A Revelação Prática:

Se o WIP sobe e o throughput é constante, o lead time **sempre** aumenta.

**Exemplo:** Uma fila de banco com 20 pessoas (WIP). O caixa atende 2 pessoas/minuto (throughput).

WIP = Throughput × Lead Time
20 = 2 × Lead Time → **Lead Time = 10 minutos**

Se entrarem mais 10 pessoas (WIP = 30): Lead Time = 15 minutos.

> 💡 **A lição:** Para reduzir o lead time, a maneira mais rápida é **reduzir o WIP** (limitar o trabalho em progresso). Isso é exatamente o princípio do Kanban.
      `
    }
  ]
},

// ── MÓDULO 9 ─────────────────────────────────────────────
{
  id: 9,
  title: "DFSS — Design for Six Sigma",
  description: "DMADV, QFD (Casa da Qualidade), Simulação Monte Carlo e confiabilidade — quando criar algo do zero.",
  difficulty: "Avançado",
  lessons: [
    {
      id: "9.1",
      title: "DMADV — Projetando para a Excelência",
      content: `
# DMADV — Design for Six Sigma

## Quando Usar DMADV em vez de DMAIC?

| Situação | Metodologia |
|----------|-------------|
| O processo existe e tem problemas | **DMAIC** (Melhorar o existente) |
| O processo não existe — precisa ser criado do zero | **DMADV** (Criar novo) |
| O processo existente é tão ruim que não vale consertar | **DMADV** (Recomeçar) |
| Novo produto ou serviço | **DMADV** |

> **Analogia:** DMAIC é reformar uma casa. DMADV é construir uma casa nova. Às vezes a reforma custa mais do que derrubar e reconstruir.

---

## As 5 Fases do DMADV

### D — Define (Definir)
- Quem é o cliente desse novo processo/produto?
- Quais são as CTQs (características críticas para qualidade)?
- Business case: por que investir nisso?

### M — Measure (Medir)
- Benchmark: como os concorrentes ou processos similares funcionam?
- Traduzir VOC em requisitos técnicos usando **QFD**
- Definir metas mensuráveis de desempenho

### A — Analyze (Analisar)
- Gerar conceitos alternativos de design
- Avaliar cada conceito (matriz de Pugh)
- Selecionar o conceito mais promissor

### D — Design (Projetar)
- Desenvolver o design detalhado
- Simular desempenho (Monte Carlo, DFMEA)
- Prototipar e testar

### V — Verify (Verificar)
- Piloto: testar em escala reduzida
- Validar contra as CTQs definidas na fase D
- Aprovar e fazer handoff para operações

---

## QFD — Casa da Qualidade

### O que é?
Uma matriz que traduz **o que o cliente quer** (WHATs) em **como a engenharia deve projetar** (HOWs), garantindo que nenhuma necessidade do cliente seja esquecida.

### Estrutura Visual:
\`\`\`
┌──────────────────────────────────────┐
│     CORRELAÇÕES TÉCNICAS (teto)      │
├─────────────┬────────────────────────┤
│   WHATs     │   HOWs (Requisitos     │
│   (VOC)     │     Técnicos)          │
├─────────────┼────────────────────────┤
│Necessidade 1│  ● forte  ○ médio     │
│Necessidade 2│  ○ médio  ● forte     │
├─────────────┼────────────────────────┤
│ Importância │  Priorização           │
│ técnica     │  Técnica               │
└──────────────────────────────────────┘
\`\`\`

> 💡 **O QFD garante que a "voz do engenheiro" não abafe a "voz do cliente".** Muitos produtos falham porque os engenheiros projetaram algo tecnicamente elegante que o cliente não queria.
      `
    }
  ]
},

// ── MÓDULO 10 ─────────────────────────────────────────────
{
  id: 10,
  title: "Gestão de Equipes e Liderança de Projetos",
  description: "Modelo de Tuckman, gestão de stakeholders, resistência à mudança e comunicação eficaz — o lado humano do Six Sigma.",
  difficulty: "Intermediário",
  lessons: [
    {
      id: "10.1",
      title: "Estágios de Desenvolvimento de Equipe (Tuckman)",
      content: `
# Modelo de Tuckman — Como as Equipes Evoluem

## A Ideia Central

> **Toda equipe passa por fases previsíveis, do caos inicial à alta performance. Saber em qual fase sua equipe está permite liderar de forma adequada.**

Bruce Tuckman identificou em 1965 os 5 estágios que toda equipe atravessa:

---

### 1. 🤝 Forming (Formação)
A equipe recém-formada. Todos são educados, polidos, evitam conflito.
- **Comportamento:** Entusiasmo misturado com ansiedade. "O que esperam de mim?"
- **Papel do Black Belt:** Clarificar papéis e responsabilidades, estabelecer o Charter, criar regras básicas de trabalho
- **Analogia:** Primeiro dia de aula — todo mundo quieto, observando

### 2. ⚡ Storming (Conflito)
As divergências surgem. Personalidades colidem. Subgrupos se formam.
- **Comportamento:** Questionamento de liderança e direção. Tensão. "Por que estamos fazendo assim?"
- **Papel do BB:** Facilitar discussões construtivas, não evitar conflito — canalizá-lo
- **Analogia:** Semana 3 de um reality show — os "vilões" aparecem

> ⚠️ **Muitas equipes ficam presas nesta fase.** Se o líder evita o conflito em vez de gerenciá-lo, a equipe nunca amadurece.

### 3. 📋 Norming (Normalização)
A equipe encontra seu ritmo. Regras são aceitas, papéis são claros, confiança cresce.
- **Comportamento:** Colaboração genuína. "Estamos começando a funcionar!"
- **Papel do BB:** Delegar mais, confiar na equipe, manter o foco no problema

### 4. 🚀 Performing (Alta Performance)
A equipe é autônoma, produtiva e alinhada. O líder quase não precisa intervir.
- **Comportamento:** Conflitos são construtivos e resolvidos rapidamente. Foco total no problema.
- **Papel do BB:** Suporte estratégico, remover obstáculos externos

### 5. 🏁 Adjourning (Encerramento)
O projeto terminou. Capture as lições aprendidas e reconheça as contribuições.

---

## Gestão de Stakeholders

### Matriz Poder × Interesse

| | Alto Interesse | Baixo Interesse |
|-|---------------|-----------------|
| **Alto Poder** | Gerencie de perto (Champion, Diretor) | Mantenha satisfeito (CFO, VP) |
| **Baixo Poder** | Mantenha informado (operadores, clientes internos) | Monitore (departamentos não afetados) |

---

## 8 Passos de Kotter para Gestão de Mudança

Toda melhoria de processo encontra resistência. O modelo de Kotter funciona:

1. **Criar urgência** — "Se não mudarmos, perdemos 500k por mês"
2. **Formar coalizão** — Identificar aliados com poder e influência
3. **Criar visão** — Uma visão clara do futuro desejado
4. **Comunicar** — Repetir a visão 10x mais do que você acha necessário
5. **Empoderar** — Remover barreiras (sistemas, políticas, pessoas)
6. **Gerar vitórias rápidas** — Resultados visíveis em 30-60 dias
7. **Consolidar** — Usar as vitórias para impulsionar mais mudança
8. **Ancorar na cultura** — "É assim que fazemos as coisas aqui"

> 💡 **O passo mais negligenciado é o 6.** As pessoas precisam ver resultados rápidos para acreditar que a mudança é real, não mais um "projeto do mês".
      `
    }
  ]
},

// ── MÓDULO 11 ─────────────────────────────────────────────
{
  id: 11,
  title: "Master Black Belt — Visão Estratégica",
  description: "Hoshin Kanri, gestão de portfólio, mentoria de Black Belts e estatística avançada — o nível executivo do Six Sigma.",
  difficulty: "Avançado",
  lessons: [
    {
      id: "11.1",
      title: "Hoshin Kanri — Alinhamento Estratégico",
      content: `
# Hoshin Kanri — Planejamento Estratégico Lean

## A Ideia Central

> **Hoshin Kanri garante que a estratégia da diretoria se transforme em ações concretas em todos os níveis da organização — do C-Suite ao chão de fábrica.**

"Hoshin Kanri" (方針管理) é japonês para "gestão de políticas/diretrizes". Também chamado de "Policy Deployment" ou "X-Matrix Planning".

---

## O Problema que Resolve

**Sem Hoshin Kanri:**
- A diretoria define uma estratégia
- A gerência cria sua própria agenda (diferente)
- A operação faz o que sempre fez (indiferente)
- Resultado: cada nível rema para um lado diferente

**Com Hoshin Kanri:**
- Objetivos de 3–5 anos → Metas anuais → Projetos trimestrais → Tarefas semanais
- Cada pessoa sabe **como** seu trabalho contribui para a estratégia

### Analogia: O GPS da Empresa

O Hoshin é como programar o GPS antes de uma viagem longa:
- **Destino** = Objetivo estratégico de 5 anos
- **Rota** = Estratégia anual
- **Pontos de parada** = Metas trimestrais
- **Próxima curva** = Ação da semana

---

## O Papel do MBB no Hoshin

O Master Black Belt é o **arquiteto da conexão entre estratégia e projetos Six Sigma**:

1. Participa do planejamento estratégico com a liderança
2. Identifica quais objetivos podem ser alcançados via melhoria de processos
3. Seleciona, prioriza e aloca recursos para os projetos certos
4. Gerencia o portfólio de projetos como um todo
5. Reporta o progresso consolidado para a diretoria

---

## Gestão de Portfólio de Projetos

O MBB gerencia o funil de projetos como um investidor gerencia um fundo:

\`\`\`
Identificados → Qualificados → Charterizados → Em Andamento → Concluídos
  (50-100)        (20-30)         (10-15)         (5-8)        (histórico)
\`\`\`

### Critérios de Priorização:

| Critério | Peso |
|----------|------|
| Impacto financeiro (saving estimado) | Alto |
| Alinhamento estratégico | Alto |
| Viabilidade técnica | Médio |
| Recursos disponíveis | Médio |
| Prazo de retorno (payback) | Médio |

> 💡 **Regra do MBB:** "O melhor projeto não é o que economiza mais dinheiro. É o que economiza mais dinheiro **alinhado à estratégia** e com **recursos disponíveis para executar**."

---

## Estatística Avançada para MBB

O Master Black Belt domina ferramentas que vão além do DMAIC padrão:

| Ferramenta | Quando usar |
|-----------|-------------|
| **RSM (Response Surface Methodology)** | Otimização de múltiplos fatores além do DOE 2ᵏ |
| **Simulação Monte Carlo** | Prever risco e variabilidade em sistemas complexos |
| **Análise Weibull** | Confiabilidade — prever quando algo vai falhar |
| **DOE com Blocos e Covariáveis** | Controlar fontes de ruído em experimentos |
| **SPC Multivariado (T² de Hotelling)** | Monitorar múltiplas variáveis de resposta simultaneamente |
      `
    }
  ]
},

// ── MÓDULO 12 ─────────────────────────────────────────────
{
  id: 12,
  title: "Certificação e Carreira",
  description: "Preparação para o exame CSSBB e CMBB da ASQ — estrutura do exame, estratégia de estudo e desenvolvimento de carreira.",
  difficulty: "Básico",
  lessons: [
    {
      id: "12.1",
      title: "Guia de Preparação para o Exame CSSBB",
      content: `
# Preparação para o Exame CSSBB (ASQ)

## Visão Geral do Exame

| Aspecto | Detalhe |
|---------|---------|
| **Questões** | 165 de múltipla escolha (150 pontuadas + 15 não-pontuadas) |
| **Duração** | 4 horas e 18 minutos |
| **Formato** | Open book — você leva seu próprio material |
| **Plataforma** | Computadorizado via Prometric |
| **Idioma** | Inglês |

---

## Distribuição de Questões por Seção

| Seção | Questões | % |
|-------|----------|---|
| I. Organization Planning & Deployment | 12 | 8% |
| II. Process Management & Measures | 12 | 8% |
| III. Team Management | 14 | 9% |
| IV. Define | 22 | 15% |
| V. Measure | 25 | 17% |
| VI. Analyze | 22 | 15% |
| VII. Improve | 18 | 12% |
| VIII. Control | 16 | 11% |
| IX. DFSS | 9 | 6% |
| **Total** | **150** | **100%** |

> 💡 **A grande revelação:** As seções Measure + Analyze + Improve juntas representam **44% do exame**. Se você dominar estatística (testes, DOE, regressão, SPC), já tem quase metade da prova garantida.

---

## Estratégia de Estudo — 6 Meses

### Mese 1–2: Fundamentos
- Estudar os módulos 1 a 4 deste curso
- Ler o ASQ CSSBB Handbook (capítulos 1–5)
- Fazer 50 questões práticas por semana

### Meses 3–4: Núcleo Estatístico
- Estudar módulos 5–8 (Analyze, Improve, Control, Lean)
- **Foco especial:** Testes de hipótese, ANOVA, DOE, SPC — maior volume de questões
- Fazer 100 questões por semana, cronometradas

### Mês 5: Avançado
- Estudar módulos 9–12 (DFSS, Gestão de Equipes, MBB)
- Simular exame completo (150 questões em 4h18min)
- Identificar e revisar pontos fracos

### Mês 6: Revisão Final
- 3 simulados completos em condições de prova
- Montar material de referência pessoal para levar no exame
- Foco total nos tópicos com menor desempenho

---

## Material para Levar no Dia do Exame

O CSSBB é **open book**. Prepare um binder organizado:

1. Tabelas de distribuição (Normal, t, F, Chi-quadrado)
2. Fórmulas de capacidade (Cp, Cpk, Pp, Ppk)
3. Critérios de seleção de testes estatísticos (o fluxograma deste app!)
4. Interpretação do Gage R&R
5. Tipos de cartas de controle e quando usar cada uma
6. Fórmulas de DOE e tabela ANOVA
7. Constantes para cartas de controle (A₂, d₂, D₃, D₄)

---

## Para o CMBB — Além do Exame

O título de Master Black Belt exige:

1. ✅ Ser CSSBB certificado
2. ✅ Submeter portfólio de projetos para avaliação
3. ✅ Ter portfólio aprovado por painel de MBBs
4. ✅ Evidenciar mentoria de Black Belts

**O portfólio deve conter:**
- Descrição detalhada de projetos liderados como BB
- Evidências de treinamento realizado para outros
- Resultados financeiros documentados
- Cartas de recomendação do Champion/Sponsor

> 💡 **A dica mais valiosa:** Comece a documentar seus projetos AGORA, mesmo antes de pensar no CMBB. Quando chegar a hora, você terá tudo pronto.
      `
    }
  ]
}

]; // fim do array modules
