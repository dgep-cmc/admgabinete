/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Building2,
  FileText,
  Globe,
  Users,
  UserMinus,
  UserPlus,
  Shield,
  BookOpen,
  ExternalLink,
  CheckCircle,
  Download,
  Layers,
  ArrowRight,
  ShieldAlert,
  Info
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'overview' | 'screens' | 'publishing' | 'docs'>('overview');
  const [selectedScreen, setSelectedScreen] = useState<string>('portal-diego-martins.html');

  const screens = [
    {
      id: 'portal-diego-martins.html',
      name: '01. Início (Portal)',
      description: 'Página inicial unificada de acesso rápido às rotinas do gabinete.',
      path: '/portal-diego-martins.html'
    },
    {
      id: 'gabinete-diego-martins.html',
      name: '02. Composição de Gabinete',
      description: 'Gestão de cargos CC1 a CC9 (Lei 16.546/2025, teto R$ 92.998,45, máx. 9 pessoas) com gerador PDF.',
      path: '/gabinete-diego-martins.html'
    },
    {
      id: 'admissao-diego-martins.html',
      name: '03. Admissão de Servidor',
      description: 'Indicação para admissão de comissionados com geração de PDF oficial.',
      path: '/admissao-diego-martins.html'
    },
    {
      id: 'exoneracao-diego-martins.html',
      name: '04. Exoneração de Servidor',
      description: 'Indicação simplificada para exoneração de comissionados com geração de PDF oficial.',
      path: '/exoneracao-diego-martins.html'
    },
    {
      id: 'admin-gabinete.html',
      name: '05. Painel Admin (38 Gabinetes)',
      description: 'Gestão de vereadores, e-mails institucionais do Google Workspace e segregação.',
      path: '/admin-gabinete.html'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F2F3F1] text-[#182528] font-sans antialiased selection:bg-[#0E4D36] selection:text-white">
      {/* Institutional Top Header */}
      <header className="bg-white border-b border-[#D9DEDB] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="/logo.png" 
              alt="Câmara Municipal de Curitiba" 
              className="h-12 w-auto object-contain"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="border-l border-[#D9DEDB] pl-4">
              <span className="text-xs uppercase tracking-wider text-slate-500 block">Câmara Municipal de Curitiba</span>
              <h1 className="text-lg font-bold text-[#182528] tracking-tight">Portal do Vereador — Gestão 38 Gabinetes</h1>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'overview'
                  ? 'bg-[#0E4D36] text-white'
                  : 'text-[#182528] hover:bg-slate-100'
              }`}
            >
              Visão Geral
            </button>
            <button
              onClick={() => setActiveTab('screens')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'screens'
                  ? 'bg-[#0E4D36] text-white'
                  : 'text-[#182528] hover:bg-slate-100'
              }`}
            >
              Central de Telas
            </button>
            <button
              onClick={() => setActiveTab('publishing')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'publishing'
                  ? 'bg-[#0E4D36] text-white'
                  : 'text-[#182528] hover:bg-slate-100'
              }`}
            >
              Google Sites & Drive
            </button>
            <button
              onClick={() => setActiveTab('docs')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'docs'
                  ? 'bg-[#0E4D36] text-white'
                  : 'text-[#182528] hover:bg-slate-100'
              }`}
            >
              Documentos & Leis
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/admin-gabinete.html"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-slate-100 text-[#0E4D36] border border-[#0E4D36]/30 px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-200 transition-colors shadow-sm"
            >
              <Shield className="w-4 h-4" />
              <span>Painel Admin</span>
            </a>
            <a
              href="/portal-diego-martins.html"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#0E4D36] text-white px-4 py-2 text-sm font-medium rounded-md hover:bg-[#0b3d2b] transition-colors shadow-sm"
            >
              <span>Abrir Portal</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Hero / Welcome Banner */}
            <div className="bg-white border border-[#D9DEDB] rounded-lg p-8 shadow-sm">
              <div className="max-w-3xl">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#0E4D36] bg-[#0E4D36]/10 px-2.5 py-1 rounded">
                  Segregação para 38 Gabinetes (Google Workspace)
                </span>
                <h2 className="text-3xl font-bold text-[#182528] mt-3 tracking-tight">
                  Sistema Integrado para Gestão de Gabinetes Parlamentares
                </h2>
                <p className="text-slate-600 mt-3 text-base leading-relaxed">
                  Arquitetura desenvolvida para atender os 38 vereadores da Câmara Municipal de Curitiba. O controle de acesso é realizado nativamente pelo Google Workspace no Google Sites, associando cada e-mail corporativo ao seu respectivo gabinete. O painel administrativo permite cadastrar e gerenciar os parlamentares e suas permissões segregadas.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-[#D9DEDB]">
                <div className="bg-[#F2F3F1] p-5 rounded-md border border-[#D9DEDB]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500 uppercase">Segregação de Acesso</span>
                    <Shield className="w-5 h-5 text-[#0E4D36]" />
                  </div>
                  <p className="text-2xl font-bold text-[#182528] mt-2">Google Workspace</p>
                  <p className="text-xs text-slate-600 mt-1">Autenticação nativa @cmc.pr.gov.br</p>
                </div>

                <div className="bg-[#F2F3F1] p-5 rounded-md border border-[#D9DEDB]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500 uppercase">Gestão de Gabinetes</span>
                    <Users className="w-5 h-5 text-[#0E4D36]" />
                  </div>
                  <p className="text-2xl font-bold text-[#182528] mt-2">38 Vereadores</p>
                  <p className="text-xs text-slate-600 mt-1">Painel administrativo dedicado</p>
                </div>

                <div className="bg-[#F2F3F1] p-5 rounded-md border border-[#D9DEDB]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500 uppercase">Geração de PDF</span>
                    <FileText className="w-5 h-5 text-[#0E4D36]" />
                  </div>
                  <p className="text-2xl font-bold text-[#182528] mt-2">jsPDF Local</p>
                  <p className="text-xs text-slate-600 mt-1">Conformidade com Lei 16.546/2025</p>
                </div>
              </div>
            </div>

            {/* Quick Access Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-[#D9DEDB] rounded-lg p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#0E4D36]/10 flex items-center justify-center text-[#0E4D36]">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#182528]">Composição de Gabinete</h3>
                      <span className="text-xs text-slate-500">Lei 16.546/2025</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    Gerencie a distribuição de cargos CC1 a CC9 (máx. 9 pessoas, teto R$ 92.998,45) com dados segregados por gabinete.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="/gabinete-diego-martins.html"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-[#0E4D36] text-white px-4 py-2 text-sm font-medium rounded-md hover:bg-[#0b3d2b] transition-colors"
                  >
                    <span>Abrir</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => { setActiveTab('screens'); setSelectedScreen('gabinete-diego-martins.html'); }}
                    className="text-sm text-[#0E4D36] font-medium hover:underline"
                  >
                    Prévia
                  </button>
                </div>
              </div>

              <div className="bg-white border border-[#D9DEDB] rounded-lg p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#0E4D36]/10 flex items-center justify-center text-[#0E4D36]">
                      <UserPlus className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#182528]">Admissão & Exoneração</h3>
                      <span className="text-xs text-slate-500">Formulários Oficiais DGEP</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    Indicação simplificada para admissão e exoneração de comissionados com emissão de PDF e protocolo no Google Drive.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="/admissao-diego-martins.html"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-[#0E4D36] text-white px-4 py-2 text-sm font-medium rounded-md hover:bg-[#0b3d2b] transition-colors"
                  >
                    <span>Admissão</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="/exoneracao-diego-martins.html"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-[#0E4D36] border border-[#0E4D36] px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-50 transition-colors"
                  >
                    <span>Exoneração</span>
                  </a>
                </div>
              </div>

              <div className="bg-white border border-[#D9DEDB] rounded-lg p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#0E4D36]/10 flex items-center justify-center text-[#0E4D36]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#182528]">Painel Administrativo</h3>
                      <span className="text-xs text-slate-500">Controle de 38 Gabinetes</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    Cadastre e gerencie os vereadores, e-mails do Google Workspace e restrições de acesso para cada página do portal.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="/admin-gabinete.html"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-[#0E4D36] text-white px-4 py-2 text-sm font-medium rounded-md hover:bg-[#0b3d2b] transition-colors"
                  >
                    <span>Gerenciar</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => { setActiveTab('screens'); setSelectedScreen('admin-gabinete.html'); }}
                    className="text-sm text-[#0E4D36] font-medium hover:underline"
                  >
                    Prévia
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'screens' && (
          <div className="space-y-6">
            <div className="bg-white border border-[#D9DEDB] rounded-lg p-6 shadow-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#D9DEDB]">
                <div>
                  <h3 className="text-xl font-bold text-[#182528]">Central de Telas do Portal</h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Selecione abaixo a tela que deseja testar diretamente no navegador ou abra em aba dedicada.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {screens.map((screen) => (
                    <button
                      key={screen.id}
                      onClick={() => setSelectedScreen(screen.id)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                        selectedScreen === screen.id
                          ? 'bg-[#0E4D36] text-white'
                          : 'bg-[#F2F3F1] text-[#182528] hover:bg-slate-200 border border-[#D9DEDB]'
                      }`}
                    >
                      {screen.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between bg-[#F2F3F1] p-4 rounded-md border border-[#D9DEDB]">
                <div>
                  <span className="font-semibold text-sm text-[#182528]">
                    {screens.find(s => s.id === selectedScreen)?.name}
                  </span>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {screens.find(s => s.id === selectedScreen)?.description}
                  </p>
                </div>
                <a
                  href={`/${selectedScreen}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#0E4D36] border border-[#0E4D36] px-3 py-1.5 text-xs font-medium rounded hover:bg-[#0E4D36] hover:text-white transition-colors"
                >
                  <span>Abrir em Tela Cheia</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Iframe Preview */}
              <div className="mt-4 border border-[#D9DEDB] rounded-lg overflow-hidden bg-white shadow-inner">
                <iframe
                  src={`/${selectedScreen}`}
                  title="Prévia da Tela"
                  className="w-full h-[700px] border-0"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'publishing' && (
          <div className="space-y-6">
            <div className="bg-white border border-[#D9DEDB] rounded-lg p-8 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0E4D36]">Guia de Segregação (38 Gabinetes)</span>
                <h3 className="text-2xl font-bold text-[#182528] mt-1">Como integrar Google Sites & Google Workspace</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Para garantir que cada um dos 38 vereadores acesse apenas a sua página e dados segregados:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="border border-[#D9DEDB] rounded-lg p-6 bg-[#F2F3F1]/50 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0E4D36] text-white flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <h4 className="font-bold text-[#182528]">Autenticação por Google Workspace</h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    O Google Sites exige obrigatoriamente login corporativo (<code className="bg-white px-1 py-0.5 rounded border border-[#D9DEDB] text-xs">@cmc.pr.gov.br</code>) para visualizar o portal.
                  </p>
                </div>

                <div className="border border-[#D9DEDB] rounded-lg p-6 bg-[#F2F3F1]/50 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0E4D36] text-white flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <h4 className="font-bold text-[#182528]">Segregação por Página no Sites</h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Crie subpáginas dedicadas para cada vereador (ex: <code className="bg-white px-1 py-0.5 rounded border border-[#D9DEDB] text-xs">/gabinete/diego-martins</code>) e restrinja o acesso da página exclusivamente ao e-mail institucional do parlamentar e sua equipe.
                  </p>
                </div>

                <div className="border border-[#D9DEDB] rounded-lg p-6 bg-[#F2F3F1]/50 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0E4D36] text-white flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <h4 className="font-bold text-[#182528]">Painel Administrativo</h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Utilize o <a href="/admin-gabinete.html" target="_blank" rel="noreferrer" className="text-[#0E4D36] font-semibold underline">Painel Admin</a> para cadastrar os vereadores, e-mails corporativos e lotações, mantendo o controle centralizado pela DGEP ou TI.
                  </p>
                </div>

                <div className="border border-[#D9DEDB] rounded-lg p-6 bg-[#F2F3F1]/50 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0E4D36] text-white flex items-center justify-center font-bold text-sm">
                      4
                    </div>
                    <h4 className="font-bold text-[#182528]">Isolamento de Dados (LocalStorage)</h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    As composições e pedidos salvos utilizam chaves vinculadas ao e-mail/gabinete, garantindo total isolamento de dados entre os parlamentares.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'docs' && (
          <div className="space-y-6">
            <div className="bg-white border border-[#D9DEDB] rounded-lg p-8 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0E4D36]">Documentação & Referências</span>
                <h3 className="text-2xl font-bold text-[#182528] mt-1">Arquivos Oficiais e Leis Municipais</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Consulte abaixo os arquivos de referência anexados ao projeto.
                </p>
              </div>

              <div className="divide-y divide-[#D9DEDB] border-t border-b border-[#D9DEDB]">
                <div className="py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-[#0E4D36]" />
                    <div>
                      <h4 className="font-semibold text-sm text-[#182528]">00_LEIA-ME.md</h4>
                      <p className="text-xs text-slate-500">Instruções iniciais do pacote</p>
                    </div>
                  </div>
                  <a
                    href="/assets/aistudio/00_LEIA-ME_c93fe1f7.md"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-[#0E4D36] font-medium hover:underline inline-flex items-center gap-1"
                  >
                    <span>Ler arquivo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-[#0E4D36]" />
                    <div>
                      <h4 className="font-semibold text-sm text-[#182528]">Lei Municipal nº 16.546/2025 (PDF)</h4>
                      <p className="text-xs text-slate-500">Indicação de Estrutura de Gabinetes 2026</p>
                    </div>
                  </div>
                  <a
                    href="/assets/aistudio/Vereador_-_Indica__o_de_Estrutura_de_Gabinetes_2026_-_Lei_16546_f76f2221.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-[#0E4D36] font-medium hover:underline inline-flex items-center gap-1"
                  >
                    <span>Baixar PDF</span>
                    <Download className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#D9DEDB] mt-16 py-8 text-center text-xs text-slate-500">
        <p>Câmara Municipal de Curitiba · Gestão de Gabinetes Parlamentares (38 Vereadores)</p>
        <p className="mt-1">Sistema Integrado de Gestão · Lei Municipal nº 16.546/2025</p>
      </footer>
    </div>
  );
}
