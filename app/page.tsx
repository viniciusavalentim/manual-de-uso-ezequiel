"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  ChevronRight,
  Home,
  Users,
  Settings,
  BarChart3,
  FileText,
  Bell,
  User,
  Menu,
  X,
  LogIn,
  TrendingUp,
  Target,
} from "lucide-react"

export default function ManualPage() {
  const [activeSection, setActiveSection] = useState("introducao")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id")

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          if (sectionId && sectionId !== activeSection) {
            setActiveSection(sectionId)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection])

  const sections = [
    { id: "introducao", title: "Introdução", icon: Home },
    { id: "entrar-plataforma", title: "Entrar na Plataforma", icon: LogIn },
    { id: "registro-login", title: "Registro/Login", icon: User },
    // { id: "primeiros-passos", title: "Primeiros Passos", icon: Users },
    { id: "dashboard", title: "Dashboard", icon: BarChart3 },
    { id: "setups", title: "Setups", icon: Settings },
    { id: "graficos", title: "Gráficos", icon: TrendingUp },
    { id: "ativos", title: "Ativos", icon: Target },
    { id: "conclusao", title: "Conclusão", icon: FileText },
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              {/*  <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div> */}

              <Image
                src="/sentinela_logo.png"
                alt="Logo"
                width={80}
                height={80}
              />
              <h1 className="text-xl font-bold text-white">Manual Sentinela Ezequiel</h1>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white hover:bg-slate-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className={`lg:w-64 ${mobileMenuOpen ? "block" : "hidden lg:block"}`}>
            <div className="sticky top-24">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Índice</CardTitle>
                  <CardDescription className="text-slate-400">Navegue pelas seções do manual</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <nav className="space-y-1">
                    {sections.map((section) => {
                      const Icon = section.icon
                      return (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-slate-700 transition-colors ${activeSection === section.id
                            ? "bg-orange-900/30 text-orange-400 border-r-2 border-orange-500"
                            : "text-slate-300"
                            }`}
                        >
                          <Icon className="w-4 h-4" />
                          <span className="text-sm font-medium">{section.title}</span>
                          <ChevronRight className="w-4 h-4 ml-auto" />
                        </button>
                      )
                    })}
                  </nav>
                </CardContent>
              </Card>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 space-y-12">
            {/* Introdução */}
            <section id="introducao" className="scroll-mt-24">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Home className="w-6 h-6 text-orange-500" />
                    <CardTitle className="text-2xl text-white">Introdução</CardTitle>
                  </div>
                  <CardDescription className="text-slate-400">
                    Bem-vindo ao manual completo da plataforma Sentinela Ezequiel
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-orange-900/20 border border-orange-700/50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-orange-300 mb-4">ORIGEM DO NOME</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-orange-200 mb-2">• Sentinela</h4>
                        <p className="text-orange-100 text-sm leading-relaxed">
                          Significa vigia, guardião, aquele que observa e protege. Representa o papel deste sistema como
                          &quot;vigia dos mercados&quot;, monitorando cotações e alertando sobre movimentações importantes.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-200 mb-2">• Ezequiel</h4>
                        <p className="text-orange-100 text-sm leading-relaxed">
                          É um nome bíblico bem conhecido, associado ao profeta Ezequiel do Antigo Testamento. Ele teve
                          visões poderosas, alertou o povo sobre eventos futuros e foi considerado um &quot;sentinela
                          espiritual&quot; para Israel. Remetendo à ideia de um mentor que avisa e antecipa movimentos - como
                          um oráculo para o mercado financeiro.
                        </p>
                      </div>
                      <div className="pt-2 border-t border-orange-700/30">
                        <p className="text-orange-100 text-sm font-medium">
                          O nome junta a ideia de um guardião tecnológico (sentinela) com a figura de Ezequiel, que
                          alertava e trazia previsões, criando uma metáfora para o sistema de monitoramento de ativos.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300 leading-relaxed">
                    A plataforma Sentinela Ezequiel foi desenvolvida para facilitar o monitoramento e análise de
                    mercados financeiros. Com uma interface intuitiva e ferramentas poderosas, você pode acompanhar
                    cotações, analisar gráficos e tomar decisões informadas sobre seus investimentos.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-white">Principais Recursos:</h4>
                      <ul className="space-y-1 text-sm text-slate-400">
                        <li>• Dashboard interativo com cotações em tempo real</li>
                        <li>• Gráficos avançados para análise técnica</li>
                        {/* <li>• Alertas personalizáveis para movimentações</li> */}
                        <li>• Histórico completo de preços e volumes</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-white">Requisitos do Sistema:</h4>
                      <ul className="space-y-1 text-sm text-slate-400">
                        <li>• Navegador moderno (Chrome, Firefox, Safari, Edge)</li>
                        <li>• Conexão estável com a internet</li>
                        <li>• Resolução mínima de 1024x768</li>
                        <li>• JavaScript habilitado</li>
                      </ul>
                    </div>
                  </div>

                  {/*   <div className="bg-orange-900/20 border border-orange-700/50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">i</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-300 mb-1">Dica Importante</h4>
                        <p className="text-orange-200 text-sm">
                          Recomendamos configurar seus alertas e watchlists na primeira vez que acessar. Isso ajudará
                          você a se manter informado sobre os ativos de seu interesse.
                        </p>
                      </div>
                    </div>
                  </div> */}
                </CardContent>
              </Card>
            </section>

            <section id="entrar-plataforma" className="scroll-mt-24">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <LogIn className="w-6 h-6 text-blue-500" />
                    <CardTitle className="text-2xl text-white">Entrar na Plataforma</CardTitle>
                  </div>
                  <CardDescription className="text-slate-400">
                    Como acessar a plataforma Sentinela Ezequiel
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-slate-300 leading-relaxed">
                    Para acessar a plataforma Sentinela Ezequiel, utilize o link oficial fornecido abaixo.
                  </p>

                  <div className="bg-slate-700 rounded-lg p-6 text-center">
                    <h4 className="font-semibold text-white mb-4">Link de Acesso Oficial</h4>
                    <div className="bg-slate-900 rounded-lg p-4 border border-orange-500/30">
                      <a
                        href="http://ec2-44-202-86-24.compute-1.amazonaws.com:5000/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <code className="text-orange-400 text-lg font-mono">
                          http://ec2-44-202-86-24.compute-1.amazonaws.com:5000/
                        </code>
                      </a>
                    </div>

                    <p className="text-slate-400 text-sm mt-3">
                      Sempre verifique se o URL está correto antes de inserir suas credenciais
                    </p>
                  </div>

                  {/* <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">!</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-300 mb-1">Segurança</h4>
                        <p className="text-red-200 text-sm">
                          Nunca acesse a plataforma através de links recebidos por email ou mensagens. Sempre digite o
                          endereço diretamente no navegador ou use seus favoritos salvos.
                        </p>
                      </div>
                    </div>
                  </div> */}
                </CardContent>
              </Card>
            </section>

            <section id="registro-login" className="scroll-mt-24">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <User className="w-6 h-6 text-green-500" />
                    <CardTitle className="text-2xl text-white">Registro/Login</CardTitle>
                  </div>
                  <CardDescription className="text-slate-400">Como criar sua conta e fazer login</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-white mb-3">Criando uma Nova Conta</h4>
                      <p className="text-slate-300 mb-4">
                        Se você ainda não possui uma conta, clique em &quot;Cadastre-se&quot; na tela de login.
                      </p>
                      <div className="bg-slate-700 rounded-lg p-4">
                        <Image
                          src="/image-cadastro.png"
                          alt="Tela de login da plataforma Sentinela Ezequiel"
                          width={500}
                          height={300}
                          className="w-full rounded border border-slate-600"
                        />
                        <p className="text-xs text-slate-400 mt-2">Figura 1: Formulário de registro de nova conta</p>
                      </div>
                    </div>

                    <Separator className="bg-slate-700" />

                    <div>
                      <h4 className="font-semibold text-white mb-3">Fazendo Login</h4>
                      <p className="text-slate-300 mb-4">
                        Insira seu usuário e senha nos campos correspondentes e clique em &quot;Entrar&quot;.
                      </p>
                      <div className="bg-slate-700 rounded-lg p-4">
                        <Image
                          src="/image-login.png"
                          alt="Tela de login da plataforma Sentinela Ezequiel"
                          width={500}
                          height={300}
                          className="w-full rounded border border-slate-600"
                        />
                        <p className="text-xs text-slate-400 mt-2">
                          Figura 2: Tela de login da plataforma Sentinela Ezequiel
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">?</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-amber-300 mb-1">Esqueceu a Senha?</h4>
                        <p className="text-amber-200 text-sm">
                          Fale com seu Administrador.
                        </p>
                        {/*    <p className="text-amber-200 text-sm">
                          Clique em "Esqueci minha senha" na tela de login para receber um link de recuperação por
                          email.
                        </p> */}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Primeiros Passos */}
            {/*     <section id="primeiros-passos" className="scroll-mt-24">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Users className="w-6 h-6 text-purple-500" />
                    <CardTitle className="text-2xl text-white">Primeiros Passos</CardTitle>
                  </div>
                  <CardDescription className="text-slate-400">
                    Configurações iniciais após o primeiro login
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <Badge variant="secondary" className="mt-1 bg-slate-700 text-slate-300">
                        1
                      </Badge>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-2">Configurando seu Perfil</h4>
                        <p className="text-slate-300 mb-4">
                          Complete seu perfil com informações pessoais e preferências de investimento.
                        </p>
                        <div className="bg-slate-700 rounded-lg p-4">
                          <img
                            src="/placeholder.svg?height=350&width=600"
                            alt="Formulário de configuração de perfil"
                            className="w-full rounded border border-slate-600"
                          />
                          <p className="text-xs text-slate-400 mt-2">Figura 3: Configuração do perfil do usuário</p>
                        </div>
                      </div>
                    </div>

                    <Separator className="bg-slate-700" />

                    <div className="flex items-start space-x-4">
                      <Badge variant="secondary" className="mt-1 bg-slate-700 text-slate-300">
                        2
                      </Badge>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-2">Criando sua Watchlist</h4>
                        <p className="text-slate-300 mb-4">
                          Adicione os ativos que você deseja monitorar à sua lista de observação.
                        </p>
                        <div className="bg-slate-700 rounded-lg p-4">
                          <img
                            src="/placeholder.svg?height=300&width=600"
                            alt="Interface de criação de watchlist"
                            className="w-full rounded border border-slate-600"
                          />
                          <p className="text-xs text-slate-400 mt-2">Figura 4: Criação de watchlist personalizada</p>
                        </div>
                      </div>
                    </div>

                    <Separator className="bg-slate-700" />

                    <div className="flex items-start space-x-4">
                      <Badge variant="secondary" className="mt-1 bg-slate-700 text-slate-300">
                        3
                      </Badge>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-2">Configurando Alertas</h4>
                        <p className="text-slate-300 mb-4">
                          Configure alertas de preço para ser notificado sobre movimentações importantes.
                        </p>
                        <div className="bg-slate-700 rounded-lg p-4">
                          <img
                            src="/placeholder.svg?height=300&width=600"
                            alt="Configuração de alertas de preço"
                            className="w-full rounded border border-slate-600"
                          />
                          <p className="text-xs text-slate-400 mt-2">
                            Figura 5: Configuração de alertas personalizados
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
 */}
            {/* Dashboard */}
            <section id="dashboard" className="scroll-mt-24">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="w-6 h-6 text-orange-500" />
                    <CardTitle className="text-2xl text-white">Dashboard</CardTitle>
                  </div>
                  <CardDescription className="text-slate-400">Visão geral dos mercados e seus ativos</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-slate-300">
                    O dashboard é sua central de comando, oferecendo uma visão completa dos seus setups e resumo dos seus ativos monitorados.
                  </p>

                  <div className="bg-slate-700 rounded-lg p-4">
                    <Image
                      src="/dashboard.png"
                      alt="Dashboard"
                      width={500}
                      height={300}
                      className="w-full rounded border border-slate-600"
                    />
                    <p className="text-xs text-slate-400 mt-2">
                      Figura 6: Dashboard principal com visão geral.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-3">Componentes do Dashboard:</h4>
                      <ul className="space-y-2 text-sm text-slate-300">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span>
                            <strong>Setups Ativos:</strong> 10, 20, 30
                          </span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>
                            <strong>Previsões Geradas:</strong> 100, 200, 300
                          </span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span>
                            <strong>Precisão Média:</strong> Previsão média dos seus modelos ativos
                          </span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                          <span>
                            <strong>Modelos Treinados:</strong> Quantidade de modelos treinados
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-3">Ações Rápidas:</h4>
                      <div className="space-y-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full justify-start bg-transparent border-slate-600 text-slate-300 hover:bg-slate-700"
                        >
                          <Target className="w-4 h-4 mr-2" />
                          Adicionar Ativo
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full justify-start bg-transparent border-slate-600 text-slate-300 hover:bg-slate-700"
                        >
                          <TrendingUp className="w-4 h-4 mr-2" />
                          Ver Gráfico
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="setups" className="scroll-mt-24">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Settings className="w-6 h-6 text-cyan-500" />
                    <CardTitle className="text-2xl text-white">Setups</CardTitle>
                  </div>
                  <CardDescription className="text-slate-400">
                    Configurações avançadas e personalização dos seus setups
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-white mb-3">Configurações de Exibição</h4>
                      <p className="text-slate-300 mb-4">
                        Personalize seus setups de acordo com a sua preferência.
                      </p>
                      <div className="bg-slate-700 rounded-lg p-4">
                        <Image
                          src="/create-setup.png"
                          alt="setup"
                          width={500}
                          height={300}
                          className="w-full rounded border border-slate-600"
                        />
                        <p className="text-xs text-slate-400 mt-2">
                          Figura 7: Configurações de exibição e personalização
                        </p>
                      </div>
                    </div>

                    <Separator className="bg-slate-700" />

                    <div>
                      <h4 className="font-semibold text-white mb-3">Edição dos setups</h4>
                      <p className="text-slate-300 mb-4">
                        Edite seus setups da maneira que quiser, ajustar parâmetros ou alterar as datas de previsão.
                      </p>
                      <div className="bg-slate-700 rounded-lg p-4">
                        <Image
                          src="/edit-setup.png"
                          alt="setup"
                          width={500}
                          height={300}
                          className="w-full rounded border border-slate-600"
                        />
                        <p className="text-xs text-slate-400 mt-2">Figura 8a: Edição do Setup</p>
                      </div>
                    </div>

                    <Separator className="bg-slate-700" />

                    <div>
                      <h4 className="font-semibold text-white mb-3">Exclusão dos setups</h4>
                      <p className="text-slate-300 mb-4">
                        Exclue setups que você não utiliza mais.
                      </p>
                      <div className="bg-slate-700 rounded-lg p-4">
                        <Image
                          src="/remove-setup.png"
                          alt="setup"
                          width={500}
                          height={300}
                          className="w-full rounded border border-slate-600"
                        />
                        <p className="text-xs text-slate-400 mt-2">Figura 8a: Remoção do Setup</p>
                      </div>
                    </div>

                    <Separator className="bg-slate-700" />

                    <div>
                      <h4 className="font-semibold text-white mb-3">Visualização dos setups de forma dinâmica</h4>
                      <p className="text-slate-300 mb-4">
                        Tenha uma visualização mais limpa e ampla na de &quot;Ver todos&quot;.
                      </p>
                      <div className="bg-slate-700 rounded-lg p-4">
                        <Image
                          src="/view-setup.png"
                          alt="setup"
                          width={500}
                          height={300}
                          className="w-full rounded border border-slate-600"
                        />
                        <p className="text-xs text-slate-400 mt-2">Figura 8a: Visualização dos Setups</p>
                      </div>
                    </div>
                    {/* 
                    <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">💡</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-300 mb-1">Dica de Setup</h4>
                          <p className="text-blue-200 text-sm">
                            Configure múltiplos layouts salvos para diferentes estratégias de análise. Você pode
                            alternar rapidamente entre eles conforme sua necessidade.
                          </p>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="graficos" className="scroll-mt-24">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-6 h-6 text-emerald-500" />
                    <CardTitle className="text-2xl text-white">Gráficos</CardTitle>
                  </div>
                  <CardDescription className="text-slate-400">
                    Ferramentas avançadas de análise técnica e gráfica
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-white mb-3">Interface de Gráficos</h4>
                      <p className="text-slate-300 mb-4">
                        Acesse gráficos interativos com ferramentas profissionais de análise técnica.
                      </p>
                      <div className="bg-slate-700 rounded-lg p-4">
                        <Image
                          src="/grafico.png"
                          alt="Gráfico"
                          width={500}
                          height={300}
                          className="w-full rounded border border-slate-600"
                        />
                        <p className="text-xs text-slate-400 mt-2">Figura 9: Interface completa de análise gráfica</p>
                      </div>
                    </div>

                    <Separator className="bg-slate-700" />

                    <div>
                      <h4 className="font-semibold text-white mb-3">Indicadores Técnicos Disponíveis</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3 p-3 bg-slate-700 rounded-lg">
                            <TrendingUp className="w-5 h-5 text-orange-500" />
                            <div>
                              <h5 className="font-medium text-white"> Períodos para EMA</h5>
                              <p className="text-xs text-slate-400">EMA 20, EMA 50</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3 p-3 bg-slate-700 rounded-lg">
                            <BarChart3 className="w-5 h-5 text-green-500" />
                            <div>
                              <h5 className="font-medium text-white">Osciladores</h5>
                              <p className="text-xs text-slate-400">RSI, MACD, Estocástico</p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3 p-3 bg-slate-700 rounded-lg">
                            <Target className="w-5 h-5 text-purple-500" />
                            <div>
                              <h5 className="font-medium text-white">Bandas e Canais</h5>
                              <p className="text-xs text-slate-400">Bollinger</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3 p-3 bg-slate-700 rounded-lg">
                            <TrendingUp className="w-5 h-5 text-orange-400" />
                            <div>
                              <h5 className="font-medium text-white">Volume</h5>
                              <p className="text-xs text-slate-400">OBV, Volume Profile</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator className="bg-slate-700" />
                    {/* 
                    <div>
                      <h4 className="font-semibold text-white mb-3">Ferramentas de Desenho</h4>
                      <p className="text-slate-300 mb-4">
                        Utilize ferramentas profissionais para marcar suportes, resistências e padrões gráficos.
                      </p>
                      <div className="bg-slate-700 rounded-lg p-4">
                        <img
                          src="/placeholder.svg?height=350&width=700"
                          alt="Ferramentas de desenho no gráfico"
                          className="w-full rounded border border-slate-600"
                        />
                        <p className="text-xs text-slate-400 mt-2">
                          Figura 10: Ferramentas de desenho e análise técnica aplicadas
                        </p>
                      </div>
                    </div> */}
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="ativos" className="scroll-mt-24">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Target className="w-6 h-6 text-yellow-500" />
                    <CardTitle className="text-2xl text-white">Ativos</CardTitle>
                  </div>
                  <CardDescription className="text-slate-400">
                    Gerenciamento e monitoramento dos seus ativos de interesse
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-white mb-3">Busca e Seleção de Ativos</h4>
                      <p className="text-slate-300 mb-4">
                        Encontre e adicione ativos à sua watchlist usando nossa ferramenta de busca avançada.
                      </p>
                      <div className="bg-slate-700 rounded-lg p-4">
                        <Image
                          src="/ativos-1.png"
                          alt="Ativos"
                          width={500}
                          height={300}
                          className="w-full rounded border border-slate-600"
                        />
                        <p className="text-xs text-slate-400 mt-2">Figura 1: Busca e seleção de ativos</p>
                      </div>
                      <div className="bg-slate-700 rounded-lg p-4 mt-2">
                        <Image
                          src="/ativos-1.png"
                          alt="Ativos"
                          width={500}
                          height={300}
                          className="w-full rounded border border-slate-600"
                        />
                        <p className="text-xs text-slate-400 mt-2">Figura 2: Busca e seleção de ativos</p>
                      </div>
                    </div>

                    <Separator className="bg-slate-700" />

                    <div>
                      <h4 className="font-semibold text-white mb-3">Categorias de Ativos Disponíveis</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3 p-3 bg-slate-700 rounded-lg">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            <div>
                              <h5 className="font-medium text-white">Ações Brasileiras</h5>
                              <p className="text-xs text-slate-400">B3 - Bovespa</p>
                            </div>
                          </div>
                          {/*   <div className="flex items-center space-x-3 p-3 bg-slate-700 rounded-lg">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <div>
                              <h5 className="font-medium text-white">Ações Americanas</h5>
                              <p className="text-xs text-slate-400">NYSE, NASDAQ</p>
                            </div>
                          </div> */}
                          {/*  <div className="flex items-center space-x-3 p-3 bg-slate-700 rounded-lg">
                            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                            <div>
                              <h5 className="font-medium text-white">Criptomoedas</h5>
                              <p className="text-xs text-slate-400">Bitcoin, Ethereum, etc.</p>
                            </div>
                          </div> */}
                        </div>
                        <div className="space-y-3">
                          {/*  <div className="flex items-center space-x-3 p-3 bg-slate-700 rounded-lg">
                            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                            <div>
                              <h5 className="font-medium text-white">Commodities</h5>
                              <p className="text-xs text-slate-400">Ouro, Petróleo, Soja</p>
                            </div>
                          </div> */}
                          {/*  <div className="flex items-center space-x-3 p-3 bg-slate-700 rounded-lg">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div>
                              <h5 className="font-medium text-white">Forex</h5>
                              <p className="text-xs text-slate-400">Pares de moedas</p>
                            </div>
                          </div> */}
                          <div className="flex items-center space-x-3 p-3 bg-slate-700 rounded-lg">
                            <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                            <div>
                              <h5 className="font-medium text-white">Índices</h5>
                              <p className="text-xs text-slate-400">Ibovespa, S&P 500</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <Separator className="bg-slate-700" />

                    <div>
                      <h4 className="font-semibold text-white mb-3">Detalhes do Ativo</h4>
                      <p className="text-slate-300 mb-4">
                        Clique em qualquer ativo para ver informações detalhadas, histórico e análises.
                      </p>
                      <div className="bg-slate-700 rounded-lg p-4">
                        <img
                          src="/placeholder.svg?height=400&width=800"
                          alt="Página de detalhes do ativo"
                          className="w-full rounded border border-slate-600"
                        />
                        <p className="text-xs text-slate-400 mt-2">Figura 12: Página completa de detalhes do ativo</p>
                      </div>
                    </div> */}
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="conclusao" className="scroll-mt-24 mb-7">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <FileText className="w-6 h-6 text-slate-400" />
                    <CardTitle className="text-2xl text-white">Conclusão</CardTitle>
                  </div>
                  <CardDescription className="text-slate-400">Considerações finais e próximos passos</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-6">
                    <p className="text-slate-300 leading-relaxed">
                      Você concluiu o manual da plataforma Sentinela Ezequiel. Agora você possui o
                      conhecimento necessário para utilizar todas as funcionalidades da plataforma de forma eficiente e
                      segura.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-white mb-3">Próximos Passos Recomendados:</h4>
                        <ul className="space-y-2 text-sm text-slate-300">
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            <span>Configure sua watchlist com ativos de interesse</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>Defina alertas para movimentações importantes</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span>Explore os gráficos e indicadores técnicos</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                            <span>Personalize o layout conforme sua estratégia</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-3">Recursos de Ajuda:</h4>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-3 p-3 bg-slate-700 rounded-lg">
                            <Bell className="w-5 h-5 text-orange-500" />
                            <div>
                              <h5 className="font-medium text-white text-sm">Suporte 24/7</h5>
                              <p className="text-xs text-slate-400">Chat ao vivo disponível</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3 p-3 bg-slate-700 rounded-lg">
                            <FileText className="w-5 h-5 text-green-500" />
                            <div>
                              <h5 className="font-medium text-white text-sm">Base de Conhecimento</h5>
                              <p className="text-xs text-slate-400">Artigos e tutoriais</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3 p-3 bg-slate-700 rounded-lg">
                            <Users className="w-5 h-5 text-purple-500" />
                            <div>
                              <h5 className="font-medium text-white text-sm">Comunidade</h5>
                              <p className="text-xs text-slate-400">Fórum de usuários</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-300 mb-1">Suporte Técnico</h4>
                          <p className="text-green-200 text-sm">
                            Precisa de ajuda? Entre em contato com nosso suporte através do seu administrador ou envie um
                            email para suporte@sentinela-ezequiel.com. Nossa equipe está sempre pronta para ajudar!
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="text-center pt-4">
                      <p className="text-slate-400 text-sm">
                        Lembre-se: o mercado financeiro envolve riscos. Sempre faça suas próprias análises e consulte
                        profissionais qualificados antes de tomar decisões de investimento.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Manual Sentinela Ezequiel</h3>
            <p className="text-slate-400 text-sm">Versão 1.0 - Última atualização: Agosto 2025</p>
            <p className="text-slate-400 text-sm mt-2">
              Para mais informações, visite nossa central de ajuda ou entre em contato com o suporte.
            </p>
          </div>
        </div>
      </footer>
    </div >
  )
}
