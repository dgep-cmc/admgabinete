# Prompt para colar no Gemini — Forms + Planilha unificada + Drive

Use este arquivo como **única fonte** para pedir ao Gemini. Não precisa explicar de novo todo o contexto.

---

Cole o texto abaixo no Gemini:

---

Você vai criar a infraestrutura Google Workspace para o Portal do Vereador da Câmara Municipal de Curitiba.

## Contexto

- Protótipo simples em HTML (3 telas): Início, Composição do Gabinete e Exoneração de Servidor.
- Fundo legal: Lei Municipal 16.546/2025; limite de despesa R$ 92.998,45; cargos CC1 a CC9.
- As telas já geram o PDF no navegador com jsPDF (modelo do sistema antigo). A impressão via `window.print` foi substituída por download direto do PDF.
- Cada tela tem um botão no topo à direita: **"Enviar requerimento"**.
- Como **o Google Sites não salva dado**, preciso de **Google Forms + Planilha + Drive**.

## O que criar

1. **Um Google Forms — pode ser um único Forms com campo "Tipo"** — com os campos:
   - `Gabinete` (resposta curta; pré-preenchível)
   - `Tipo do pedido` (múltipla escolha: Composição, Exoneração — depois Nomeação)
   - `Data/hora de chegada` (automático do Forms; não editar)
   - `Documento PDF` (upload de arquivo, obrigatório, PDF) — o arquivo fica salvo no Drive e o link vai para a planilha.
   - `Observações` (opcional)

2. **Uma Planilha ÚNICA para todos os vereadores**, já conectada ao Forms (Respostas do Forms), com estas colunas nesta ordem:
   - `A — Gabinete` (ex.: DIEGO MARTINS / VER. DIEGO MARTINS)
   - `B — Tipo` (Composição | Exoneração | Nomeação)
   - `C — Data/hora do pedido` (timestamp automático)
   - `D — Link do PDF (Drive)` (coluna do upload, por último como pedido)
   - `E+ — Campos específicos` (nome, matrícula, cargo, símbolo, data, etc.)
   - Cada resposta entra na **primeira linha em branco**, ordenada pela data de chegada. Não crie uma planilha por vereador.

3. **Pasta no Google Drive** (Drive compartilhado do RH, se houver) chamada `Portal do Vereador — PDFs` para os uploads do Forms. Configure o Forms para salvar os arquivos nessa pasta e gerar link acessível ao RH.

## Integração com as telas

Nas telas, `FORM_URL` está vazio como placeholder. Depois de publicar o Forms:
- Gere o **link público** do Forms (`viewform`).
- Se o Forms não for pré-preenchível por arquivo, o fluxo é: o vereador clica em **Gerar PDF** (baixa `Estrutura_Gabinete_Diego_Martins.pdf` ou `Formulario_Exoneracao_<NOME>.pdf`), depois clica em **Enviar requerimento** (abre o Forms) e anexa o PDF gerado.
- Gabinete e Tipo já existem como constantes no código:
  - Composição: `GABINETE='VER. DIEGO MARTINS'`, `TIPO='Composição'`
  - Exoneração: `GABINETE='VER. DIEGO MARTINS'`, `TIPO='Exoneração'`
- Entregue o **link final do Forms** para colar em `FORM_URL` nos dois HTMLs.

## Restrições

- Não usar React, Firebase, banco externo ou hospedagem fora do Google Workspace.
- Não guardar segredo no código; tudo em `Config` ou constante.
- Não validar CPF (o RH valida no sistema próprio).
- Não gerar validação automática de assinatura gov.br nesta fase.
- Sem CDN externa nas telas.

## Entregáveis

- Link do Forms publicado.
- Link da Planilha única (aba Respostas).
- Pasta do Drive para os PDFs.
- Instrução em 3 linhas de onde colar `FORM_URL`.
- Se criar Apps Script para reaproveitar/completar o upload, entregar o código `.gs` completo.

---

## Intenção de cada item (para eu não precisar reexplicar)

- **Por que Forms + Planilha e não só Sites?** O Sites é só vitrine; não tem campo de envio nem banco de dados. O Forms recebe o upload e a Planilha vira o "banco" auditável pelo RH.
- **Por que planilha única?** Para o RH consultar todos os vereadores num só lugar, sem caçar planilha por gabinete.
- **Por que Gabinete primeiro, Tipo depois, Data/hora depois, PDF por último?** É a ordem pedida: rastreabilidade por vereador e por tipo, cronologia clara e, no fim, o artefato assinável.
- **Por que primeira linha em branco?** Para não sobrescrever e manter ordem de chegada sem duplicar lógica.
- **Por que botão no topo à direita, ao lado do título?** Para o envio ficar sempre visível, sem precisar rolar até o fim do formulário.
- **Por que manter as telas simples?** Para a TI auditar rápido e não repetir o projeto anterior em React/Firebase (5.144 linhas, vários wizards, código GAS embutido em `gasFiles.ts`).

---

## Depois de receber do Gemini (colagem)

Nos dois arquivos, localize:

```js
const FORM_URL=''; // TODO Gemini: colar link do Forms aqui
```

e substitua pelo link. Nenhuma outra alteração é necessária para o botão passar a abrir o Forms.
