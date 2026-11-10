# Portal do Vereador — Pacote Diego Martins (protótipo simples)

**Data:** 2026-11-09
**Vereador piloto:** Diego Martins — `diego.martins@cmc.pr.gov.br`
**Gerador do PDF:** `jspdf.umd.min.js` local (sem CDN)
**Logo:** `assets/logo.png` (extraída de `src/lib/logo.ts` do sistema antigo)

## O que é

Pacote mínimo e funcional para testar, no navegador, as telas que depois vão para o Google Sites:
- uma tela inicial com menu superior,
- uma tela de **Composição do Gabinete** com PDF direto (jsPDF, igual ao sistema antigo),
- uma tela de **Exoneração de Servidor** com PDF direto.

Não é o projeto antigo em React/Firebase (5.144 linhas em `src/`, `App.tsx` com 815 linhas, `ComposicaoWizard`, `CandidatoPortal`, `PlanilhaRhView`, código Apps Script embutido em `gasFiles.ts`). Esse foi abandonado por ser complexo e de auditoria demorada para a TI.

## Estrutura do pacote

```
Pacote_Portal_Vereador_Diego_Martins/
├── 00_LEIA-ME.md
├── PROMPT_GEMINI_FORMS_PLANILHA_DRIVE.md  ← colar no Gemini
├── COMO-FUNCIONA-CADA-TELA.md
├── INSTRUCOES_PUBLICACAO_GOOGLE_SITES.md
├── telas/
│   ├── 01_INICIO_portal-diego-martins.html
│   ├── 02_COMPOSICAO_gabinete-diego-martins.html
│   └── 03_EXONERACAO_exoneracao-diego-martins.html
├── assets/
│   ├── logo.png                  ← logo da Câmara, usada no cabeçalho do PDF
│   └── jspdf.umd.min.js        ← jsPDF local, sem CDN
└── modelos-antigos/               ← PDFs oficiais antigos (referência)
    ├── Vereador - Indicação de Estrutura de Gabinetes 2026 - Lei 16546.pdf
    └── Formulário de Indicação para exoneração.pdf
```

## Como testar agora (localhost)

Na pasta `portal-do-vereador-—-cmc` (projeto Vite que serve os arquivos `public/`):

```bash
npm install --legacy-peer-deps --no-audit --no-fund jspdf@2.5.1
npm run dev
```

Depois abrir:
- http://localhost:3000/portal-diego-martins.html
- http://localhost:3000/gabinete-diego-martins.html
- http://localhost:3000/exoneracao-diego-martins.html

Também funciona com qualquer servidor estático (Python, Live Server) desde que sirva `logo.png` e `jspdf.umd.min.js` na raiz.

## Como publicar no Google Sites

1. Publique os 3 HTMLs + `logo.png` + `jspdf.umd.min.js` em um local acessível por URL (por exemplo, Apps Script Web App que serve os arquivos, ou hospedagem estática permitida pela TI).
2. No Google Sites, crie as páginas e **embuta por URL** cada HTML (ou link externo).
3. Restrija cada página para `diego.martins@cmc.pr.gov.br`. Na base de testes o acesso ficou livre.
4. Ver `INSTRUCOES_PUBLICACAO_GOOGLE_SITES.md`.

## Limite atual (importante)

As listas de pedidos salvos estão em `localStorage` (cache do navegador, por dispositivo). Não sincroniza entre computadores e some se limpar o navegador. Para produção é preciso trocar isso por **Apps Script + Planilha + Drive** (ver `PROMPT_GEMINI_FORMS_PLANILHA_DRIVE.md` e a discussão sobre Forms).

## Botões com confirmação

Todos usam `confirm()` nativo:
- **Salvar** → `Deseja salvar...?`
- **Gerar PDF** → `Deseja salvar e gerar o PDF?`
- **Zerar / Limpar** → `Tem certeza que deseja apagar tudo e recomeçar?`
- **Excluir** (por item da lista) → `Tem certeza que deseja excluir?`

## Padrões visuais (frontend-design)

- Fontes: **Helvetica / Roboto** em toda a interface e no PDF (jsPDF usa Helvetica).
- Paleta institucional: fundo `#F2F3F1`, tinta `#182528`, verde `#0E4D36`, linha `#D9DEDB`.
- Sem emojis. Só `−` / `+` e barra fina de limite.
- Layout em folha institucional, sem cards arredondados nem textos explicativos longos.
- Menu superior igual nas 3 telas; título alinhado como no Portal do Vereador (`h1` com `margin: 20px 0 4px`, botão `margin-top: 20px`).
