# Publicação no Google Sites

## Pré-requisito

Os HTMLs são estáticos, mas o **jsPDF** e a **logo** precisam estar no mesmo local com caminho `/`:

- `logo.png`
- `jspdf.umd.min.js`

Se publicar em Apps Script Web App, suba os arquivos `.html` como `HtmlOutput` e os dois assets como arquivos separados, ajustando o `src` de `jspdf.umd.min.js` para o URL do asset.

## Passo a passo

1. Crie o Site no Workspace da Câmara.
2. Páginas: `Início`, `Composição do Gabinete`, `Exoneração de Servidor`.
3. Em cada página, use **Inserir → Incorporar → URL externa** apontando para a URL do HTML correspondente (ou link externo se o embed não funcionar).
4. No menu superior de cada HTML já há links relativos:
   - `/portal-diego-martins.html`
   - `/gabinete-diego-martins.html`
   - `/exoneracao-diego-martins.html`

   Ajuste os `href` para os caminhos reais no seu ambiente.

5. Permissões da página no Sites:
   - **Testes:** qualquer pessoa com o link.
   - **Produção:** `diego.martins@cmc.pr.gov.br` (e um HTML por vereador, duplicando a tela e trocando nome/e-mail/gabinete).

## Restrição por vereador (conceito)

- Um HTML **por vereador**, com o mesmo layout.
- Cada arquivo só deve ser visível para o e-mail daquele vereador.
- Não misturar dados: cada vereador tem sua lista local hoje; na versão Apps Script, cada um só vê os seus protocolos (autenticação por `Session.getActiveUser()` no domínio `@cmc.pr.gov.br`).

## Forms / Planilha / Drive (resumo)

Ver `PROMPT_GEMINI_FORMS_PLANILHA_DRIVE.md`. Depois de receber o link do Forms, cole em `FORM_URL` nos dois HTMLs.

## Problemas comuns

- `jsPDF não carregou` → `jspdf.umd.min.js` não está na raiz (`/jspdf.umd.min.js` devolve 200?).
- `logo.png` não aparece no PDF → mesmo caminho; teste `GET /logo.png` = 200.
- Botão `Gerar PDF` sem efeito → verifique se `window.jspdf` existe no console e se `btn` sai de `Gerando...` para `Gerar PDF` com `PDF gerado.`
- `confirm()` não aparece → navegador bloqueou diálogo automático; clique manual funciona.
- Lista vazia após limpar cache → é esperado no protótipo `localStorage`.
