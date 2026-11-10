# Como funciona cada tela (intenção de cada item)

## 01 — Início (`01_INICIO_portal-diego-martins.html`)

**Intenção:** ser a porta de entrada. O vereador não escolhe HTML solto; ele entra no Portal e usa o menu superior.

- Topo: `Câmara Municipal de Curitiba` + `Diego Martins`
- Menu: `Início | Composição do Gabinete | Exoneração de Servidor`
- Dois cartões de acesso rápido para as duas ações.
- **Não tem texto explicativo** por pedido: a tela deve ser só métrica — onde clicar.

## 02 — Composição do Gabinete (`02_COMPOSICAO_gabinete-diego-martins.html`)

**Intenção:** montar a composição (quantos de cada símbolo) respeitando duas travas legais e gerar o formulário oficial em PDF.

### Regras (validadas em JS)

- `CC1` (Chefe de Gabinete) **fixo em 1**, sem botões `−` / `+`. Não pode ser 0 nem 2.
- `CC2`–`CC9` com botões `−` / `+`.
- **Máximo 9 pessoas** no total. Ao chegar em 9, os `+` desabilitam. Não basta o valor estar dentro do limite.
- **Valor total ≤ R$ 92.998,45** (Lei 16.546/2025).
- Barra fina mostra o uso do limite; mensagem `Máximo de 9 pessoas.` ou `Limite excedido.` ou `Composição válida.`

### Ações

- **Salvar composição** → `Deseja salvar esta composição?` — salva na lista abaixo. Não gera arquivo.
- **Gerar PDF** → `Deseja salvar e gerar o PDF?` — salva e baixa o PDF via jsPDF.
- **Zerar** → `Tem certeza que deseja apagar tudo e recomeçar?` — limpa só o formulário atual, sem apagar a lista.
- **Enviar requerimento** (topo, à direita do título) → abre `FORM_URL` (Forms). Ver `PROMPT_GEMINI_FORMS_PLANILHA_DRIVE.md`.

### Lista "Composições salvas"

- Mostra `N pessoas — R$ total` e `salvo em dd/mm/aaaa hh:mm`.
- **Clicar** no item carrega a composição nos campos para edição; ao salvar de novo, **atualiza o mesmo item**.
- **Excluir** por item → `Tem certeza que deseja excluir?` — remove só aquele registro.

### PDF gerado (`Estrutura_Gabinete_Diego_Martins.pdf`)

Modelo igual ao do sistema antigo (`generateCabinetCompositionPDF`), com os ajustes pedidos:

- Cabeçalho com logo da Câmara + linha vertical + título
  `FORMULÁRIO DE ESCOLHA DE COMPOSIÇÃO DE GABINETE PARLAMENTAR / LEI MUNICIPAL Nº 16.546/2025`
- Ofício ao Presidente da Comissão Executiva + paráfrase do vereador
- Lista `1 Chefe de Gabinete Parlamentar — CC1`, `1 Assessor de Gabinete Parlamentar — CCx` (tantas linhas quantas a quantidade)
- Total (pessoas + R$)
- `Obs.:` do Art. 4º §1º (limite CC-1 a CC-6 + dois CC-7, total R$ 92.998,45)
- Data `Curitiba, dd de MMMM de yyyy`
- **Assinatura simplificada:** linha + `VER. DIEGO MARTINS` centralizado logo abaixo. **Sem** `ASSINATURA DO(A) VEREADOR(A)`, **sem** `Assinatura digital`, **sem** bloco `Documento assinado digitalmente por meio do login ...` (e-mail/CPF).
- Espaço **30** (não 18) entre a data e a linha, para caber **selo de assinatura digital** (gov.br) sem colidir.
- Tabela `VENCIMENTOS VIGENTES CONFORME SÍMBOLO:` com CC1–CC9, colunas corrigidas para os valores não transpassarem as células.
- Rodapé só `Página 1 de 1`. **Sem** `VALIDADO PELA DGEP` / `COMPOSIÇÃO HOMOLOGADA` (validação do RH retirada do rodapé).
- Fonte Helvetica (jsPDF). Texto do parágrafo principal à esquerda (tentativa de justificado foi revertida porque saía da página).

## 03 — Exoneração de Servidor (`03_EXONERACAO_exoneracao-diego-martins.html`)

**Intenção:** indicar um servidor para exoneração, sem o excesso da tela de nomeação. É mais simples que a contratação.

### Campos

- `Nome` (texto livre, maiúscula no PDF)
- `Matrícula` (texto; no PDF sai `MATRÍCULA Nº:`)
- `Cargo` + `Símbolo` (dependentes, ver abaixo)
- `Lotação` (pré-preenchida `GABINETE DO VEREADOR DIEGO MARTINS`)
- `Exonerar a partir de` (data `yyyy-mm-dd`; no PDF sai `dd/mm/aaaa`)

### Regra Cargo × Símbolo (pendente de ajuste fino)

- Se `Cargo = Chefe de Gabinete Parlamentar` → Símbolo só `CC1` (já selecionado).
- Se `Cargo = Assessor de Gabinete Parlamentar` → Símbolo `CC2`–`CC9`.
- Trocar o cargo limpa o símbolo inválido.

### Ações

- Mesmos padrões da Composição: `Salvar`, `Gerar PDF`, `Limpar`, todos com `confirm()`.
- **Enviar requerimento** no topo à direita (mesma base do Forms).

### Lista "Pedidos salvos"

- Mostra `Nome · Cargo · Símbolo · data · salvo em ...`
- Clicar carrega para editar; salvar atualiza o mesmo item.
- Botão **Excluir** por item com `Tem certeza que deseja excluir?`

### PDF gerado (`Formulario_Exoneracao_<NOME>.pdf`)

Modelo igual ao do sistema antigo (`generateComissionadoExoneration`), com os mesmos ajustes:

- Cabeçalho logo + `INDICAÇÃO PARA EXONERAÇÃO EM CARGO EM COMISSÃO`
- Texto `O (A) Vereador(a) DIEGO MARTINS indica a pessoa abaixo identificada, para que seja exonerada do Cargo em Comissão...`
- Tabela: `NOME`, `MATRÍCULA Nº`, `LOTAÇÃO`, `CARGO`, `SÍMBOLO` (formato `CC - X`), `EXONERAR A PARTIR DE`
- Data `Curitiba, ...`
- Linha + `VER. DIEGO MARTINS` (mesmo campo simplificado, com respiro de 30)
- Caixa `INFORMAÇÕES IMPORTANTES` com Crachá Funcional e Auxílio Saúde
- Rodapé só `Página 1 de 1`, sem validação do RH
- Fonte Helvetica

## Persistência (limite atual)

- Hoje tudo fica em `localStorage` (cache do navegador): `composicao-diego-martins-lista` e `exoneracao-diego-martins-lista`.
- **Não é** banco central. Para produção é preciso trocar a camada de dados por Apps Script + Planilha + Drive (ver prompt do Gemini).

## Publicação e acesso

- Google Sites só exibe; quem controla **quem vê o quê** é a permissão da página (ver `INSTRUCOES_PUBLICACAO_GOOGLE_SITES.md`).
- Base de testes: acesso livre. Produção: restringir para `diego.martins@cmc.pr.gov.br` (e depois para cada vereador, cada um só com as suas telas).
