import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import {
  Globe,
  Rocket,
  Shield,
  Zap,
  TrendingUp,
  Users,
  Clock,
  CheckCircle2,
  X,
  Search,
  Smartphone,
  BarChart3,
  Lock,
  Palette,
  Code,
  Star,
  Award,
  Target,
  MessageSquare,
} from 'lucide-react';

export default function ConsultorWebsite() {
  const beneficios = [
    {
      icon: Globe,
      titulo: 'Presença Digital Profissional',
      descricao: 'Seu negócio visível 24/7 para clientes em todo o mundo',
      estatistica: '73% dos consumidores pesquisam online antes de comprar',
    },
    {
      icon: TrendingUp,
      titulo: 'Aumento nas Vendas',
      descricao: 'Conquiste novos clientes e aumente seu faturamento',
      estatistica: 'Empresas com site vendem até 40% mais',
    },
    {
      icon: Users,
      titulo: 'Credibilidade da Marca',
      descricao: 'Transmita profissionalismo e confiança aos clientes',
      estatistica: '84% das pessoas confiam mais em empresas com site',
    },
    {
      icon: Search,
      titulo: 'Encontrado no Google',
      descricao: 'Apareça nas buscas quando seus clientes procurarem',
      estatistica: 'Sites otimizados têm 14x mais chances de ranking',
    },
    {
      icon: Smartphone,
      titulo: 'Acesso de Qualquer Lugar',
      descricao: 'Funciona perfeitamente em celulares, tablets e computadores',
      estatistica: '58% das buscas são feitas em dispositivos móveis',
    },
    {
      icon: Clock,
      titulo: 'Atendimento Automatizado',
      descricao: 'Informações e contato disponíveis a qualquer hora',
      estatistica: 'Reduz em 60% o tempo gasto com informações básicas',
    },
  ];

  const tiposWebsites = [
    {
      icon: Rocket,
      nome: 'Landing Page',
      descricao: 'Página otimizada para conversão de visitantes em clientes',
      ideal: 'Lançamentos, anúncios, captação de leads',
      recursos: ['Design focado', 'CTA estratégico', 'Formulários otimizados', 'Rápido carregamento'],
    },
    {
      icon: Globe,
      nome: 'Site Institucional',
      descricao: 'Presença digital completa para sua empresa',
      ideal: 'Empresas, escritórios, prestadores de serviços',
      recursos: ['Múltiplas páginas', 'Portfólio', 'Blog integrado', 'Área de contato'],
    },
    {
      icon: Code,
      nome: 'E-commerce',
      descricao: 'Loja virtual completa para vender online',
      ideal: 'Varejo, atacado, produtos digitais',
      recursos: ['Catálogo de produtos', 'Carrinho de compras', 'Pagamento integrado', 'Gestão de pedidos'],
    },
    {
      icon: Target,
      nome: 'Sistema Web',
      descricao: 'Plataforma customizada para seu negócio',
      ideal: 'Processos específicos, gestão interna',
      recursos: ['100% personalizado', 'Integrações', 'Painéis administrativos', 'APIs próprias'],
    },
  ];

  const comparacao = [
    {
      item: 'Design Profissional',
      profissional: true,
      gratuito: false,
    },
    {
      item: 'Domínio Próprio (.com.br)',
      profissional: true,
      gratuito: false,
    },
    {
      item: 'Otimização para Google (SEO)',
      profissional: true,
      gratuito: false,
    },
    {
      item: 'Responsivo (Mobile)',
      profissional: true,
      gratuito: 'Limitado',
    },
    {
      item: 'Velocidade de Carregamento',
      profissional: 'Excelente',
      gratuito: 'Lenta',
    },
    {
      item: 'Suporte Técnico',
      profissional: true,
      gratuito: false,
    },
    {
      item: 'Segurança (SSL)',
      profissional: true,
      gratuito: 'Básica',
    },
    {
      item: 'Personalização',
      profissional: 'Total',
      gratuito: 'Limitada',
    },
    {
      item: 'Anúncios de Terceiros',
      profissional: false,
      gratuito: true,
    },
    {
      item: 'Credibilidade',
      profissional: 'Alta',
      gratuito: 'Baixa',
    },
  ];

  const planos = [
    {
      nome: 'Landing Page',
      preco: 'R$ 1.500',
      periodo: 'projeto',
      recursos: [
        '1 página otimizada',
        'Design profissional',
        'Responsivo (mobile)',
        'Formulário de contato',
        'SEO básico',
        'SSL grátis',
        '3 revisões incluídas',
        'Entrega em 7 dias',
      ],
      ideal: 'Campanhas, anúncios, lançamentos',
      destaque: false,
    },
    {
      nome: 'Site Profissional',
      preco: 'R$ 3.500',
      periodo: 'projeto',
      recursos: [
        'Até 5 páginas',
        'Design exclusivo',
        'Responsivo (mobile)',
        'Área administrativa',
        'SEO avançado',
        'SSL grátis',
        'Integração WhatsApp',
        'Blog opcional',
        'Google Analytics',
        '5 revisões incluídas',
        'Entrega em 20 dias',
      ],
      ideal: 'Empresas, escritórios, prestadores de serviços',
      destaque: true,
    },
    {
      nome: 'E-commerce',
      preco: 'A partir de R$ 6.000',
      periodo: 'projeto',
      recursos: [
        'Loja virtual completa',
        'Catálogo ilimitado',
        'Carrinho de compras',
        'Integração de pagamento',
        'Painel administrativo',
        'Gestão de estoque',
        'Cálculo de frete',
        'Cupons de desconto',
        'Relatórios de vendas',
        'SSL grátis',
        'Suporte 3 meses',
        'Entrega em 45 dias',
      ],
      ideal: 'Lojas, varejo, produtos físicos e digitais',
      destaque: false,
    },
  ];

  const processo = [
    {
      numero: '1',
      titulo: 'Briefing',
      descricao: 'Reunião para entender sua empresa, objetivos e necessidades',
      duracao: '1-2 dias',
      icon: MessageSquare,
    },
    {
      numero: '2',
      titulo: 'Design',
      descricao: 'Criação do layout visual do seu site para aprovação',
      duracao: '3-7 dias',
      icon: Palette,
    },
    {
      numero: '3',
      titulo: 'Desenvolvimento',
      descricao: 'Construção do site com todas as funcionalidades',
      duracao: '7-30 dias',
      icon: Code,
    },
    {
      numero: '4',
      titulo: 'Publicação',
      descricao: 'Colocamos seu site no ar e treinamos sua equipe',
      duracao: '1-2 dias',
      icon: Rocket,
    },
  ];

  const depoimentos = [
    {
      nome: 'Carlos Mendes',
      empresa: 'Mendes Advogados',
      foto: '👨‍💼',
      texto: 'O site profissional aumentou nossa credibilidade. Hoje 70% dos clientes nos encontram pelo Google.',
      nota: 5,
    },
    {
      nome: 'Juliana Santos',
      empresa: 'Boutique Elegance',
      foto: '👩‍💼',
      texto: 'A loja virtual triplicou nossas vendas. O investimento se pagou em menos de 2 meses!',
      nota: 5,
    },
    {
      nome: 'Roberto Lima',
      empresa: 'Lima Engenharia',
      foto: '👨‍🔧',
      texto: 'Site moderno e rápido. O suporte da BNU Tech é excepcional, sempre que preciso me atendem rápido.',
      nota: 5,
    },
  ];

  const garantias = [
    {
      icon: Shield,
      texto: 'Garantia de satisfação',
    },
    {
      icon: Zap,
      texto: 'Entrega no prazo',
    },
    {
      icon: Award,
      texto: 'Qualidade profissional',
    },
    {
      icon: Lock,
      texto: 'Segurança e privacidade',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Desenvolvimento de Websites Profissionais | BNU Tech</title>
        <meta
          name="description"
          content="Sites profissionais que aumentam suas vendas e credibilidade. Landing pages, sites institucionais, e-commerce e sistemas web personalizados."
        />
        <meta
          name="keywords"
          content="desenvolvimento web, criação de sites, landing page, loja virtual, e-commerce, site profissional, BNU Tech"
        />
        <link rel="canonical" href="https://bnutech.com.br/website" />
        <meta property="og:title" content="Desenvolvimento de Websites Profissionais | BNU Tech" />
        <meta
          property="og:description"
          content="Sites profissionais que aumentam suas vendas e credibilidade. Landing pages, sites institucionais, e-commerce e sistemas web personalizados."
        />
        <meta property="og:url" content="https://bnutech.com.br/website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-surface-900 via-surface-800 to-surface-900">
        <Navbar />

        {/* Hero Section com Oferta Especial */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />

          <div className="container relative">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge de Urgência */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
                <Zap className="h-4 w-4 text-primary animate-pulse" />
                <span className="text-sm font-semibold text-primary">
                  OFERTA ESPECIAL: 30% DE DESCONTO - Apenas 5 vagas este mês
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 animate-fade-in">
                Seu Negócio Merece um{' '}
                <span className="gradient-text">Website Profissional</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 animate-fade-in max-w-3xl mx-auto" style={{ animationDelay: '0.15s' }}>
                Aumente suas vendas, credibilidade e apareça no Google. Sites modernos, rápidos e otimizados
                para converter visitantes em clientes.
              </p>

              {/* Social Proof */}
              <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="glass-card p-4 rounded-lg">
                  <div className="text-3xl font-bold gradient-text mb-1">200+</div>
                  <div className="text-sm text-muted-foreground">Sites Criados</div>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <div className="text-3xl font-bold gradient-text mb-1">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Avaliação</div>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <div className="text-3xl font-bold gradient-text mb-1">97%</div>
                  <div className="text-sm text-muted-foreground">Satisfação</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Por que ter um Website Profissional */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                Por que Investir em um <span className="gradient-text">Website Profissional</span>?
              </h2>
              <p className="text-lg text-muted-foreground">
                Seu site é o primeiro contato do cliente com sua empresa. Faça uma excelente primeira impressão.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {beneficios.map((beneficio, index) => (
                <article
                  key={beneficio.titulo}
                  className="glass-card rounded-xl p-6 animate-fade-in hover:border-primary/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <beneficio.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{beneficio.titulo}</h3>
                  <p className="text-muted-foreground mb-4">{beneficio.descricao}</p>
                  <div className="pt-4 border-t border-primary/20">
                    <p className="text-sm text-primary font-semibold">
                      📊 {beneficio.estatistica}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Tipos de Websites */}
        <section className="py-20 md:py-28 bg-surface-800/50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                Qual Tipo de <span className="gradient-text">Site</span> Você Precisa?
              </h2>
              <p className="text-lg text-muted-foreground">
                Desenvolvemos o site perfeito para o seu tipo de negócio e objetivos
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {tiposWebsites.map((tipo, index) => (
                <article
                  key={tipo.nome}
                  className="glass-card rounded-xl p-6 lg:p-8 animate-fade-in hover:border-primary/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <tipo.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{tipo.nome}</h3>
                      <p className="text-muted-foreground mb-3">{tipo.descricao}</p>
                      <p className="text-sm text-primary font-semibold">
                        <Target className="h-4 w-4 inline mr-1" />
                        {tipo.ideal}
                      </p>
                    </div>
                  </div>

                  <ul className="grid grid-cols-2 gap-2 mt-6">
                    {tipo.recursos.map((recurso) => (
                      <li key={recurso} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{recurso}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Comparação: Site Profissional vs Gratuito */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                Site Profissional vs <span className="text-red-400">Site Gratuito</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Entenda a diferença entre investir em um site profissional e usar plataformas gratuitas
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="glass-card rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border/30">
                        <th className="text-left p-4 font-semibold">Característica</th>
                        <th className="text-center p-4 font-semibold text-primary">
                          <div className="flex items-center justify-center gap-2">
                            <CheckCircle2 className="h-5 w-5" />
                            Profissional
                          </div>
                        </th>
                        <th className="text-center p-4 font-semibold text-red-400">
                          <div className="flex items-center justify-center gap-2">
                            <X className="h-5 w-5" />
                            Gratuito
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparacao.map((item, index) => (
                        <tr
                          key={item.item}
                          className={`border-b border-border/30 ${
                            index % 2 === 0 ? 'bg-surface-800/30' : ''
                          }`}
                        >
                          <td className="p-4">{item.item}</td>
                          <td className="p-4 text-center">
                            {typeof item.profissional === 'boolean' ? (
                              item.profissional ? (
                                <CheckCircle2 className="h-5 w-5 text-primary mx-auto" />
                              ) : (
                                <X className="h-5 w-5 text-red-400 mx-auto" />
                              )
                            ) : (
                              <span className="text-primary font-semibold">{item.profissional}</span>
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {typeof item.gratuito === 'boolean' ? (
                              item.gratuito ? (
                                <CheckCircle2 className="h-5 w-5 text-primary mx-auto" />
                              ) : (
                                <X className="h-5 w-5 text-red-400 mx-auto" />
                              )
                            ) : (
                              <span className="text-muted-foreground">{item.gratuito}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8 glass-card rounded-xl p-6 border-primary/30">
                <p className="text-center text-lg">
                  <strong className="text-primary">💡 Conclusão:</strong> Um site profissional é um{' '}
                  <span className="gradient-text font-semibold">investimento que se paga</span> através do
                  aumento de vendas, credibilidade e presença digital.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Planos e Investimento */}
        <section className="py-20 md:py-28 bg-surface-800/50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">30% DE DESCONTO NESTE MÊS</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                Planos e <span className="gradient-text">Investimento</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Escolha o plano ideal para o seu negócio e comece hoje mesmo
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {planos.map((plano, index) => (
                <article
                  key={plano.nome}
                  className={`glass-card rounded-xl p-6 lg:p-8 relative animate-fade-in flex flex-col ${
                    plano.destaque ? 'border-primary/50 ring-2 ring-primary/20' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {plano.destaque && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                        Mais Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6 pt-2">
                    <h3 className="text-2xl font-bold font-display mb-2">{plano.nome}</h3>
                    <div className="flex items-baseline justify-center gap-1 mb-1">
                      <span className="text-4xl font-bold gradient-text">{plano.preco}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{plano.periodo}</span>
                  </div>

                  <ul className="space-y-3 mb-6 flex-grow">
                    {plano.recursos.map((recurso) => (
                      <li key={recurso} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{recurso}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-border/30 mt-auto">
                    <p className="text-xs text-muted-foreground text-center">
                      <strong>Ideal para:</strong> {plano.ideal}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-2">
                💳 <strong>Formas de pagamento:</strong> PIX, Cartão de Crédito (até 12x), Boleto
              </p>
              <p className="text-sm text-muted-foreground">
                Todos os planos incluem hospedagem por 1 ano e suporte técnico
              </p>
            </div>
          </div>
        </section>

        {/* Processo de Desenvolvimento */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                Como Funciona o <span className="gradient-text">Desenvolvimento</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Processo transparente e organizado para garantir o melhor resultado
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 lg:gap-8">
              {processo.map((etapa, index) => (
                <article
                  key={etapa.numero}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="glass-card rounded-xl p-6 h-full">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                      <etapa.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold gradient-text mb-2">{etapa.numero}</div>
                      <h3 className="text-lg font-bold mb-2">{etapa.titulo}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{etapa.descricao}</p>
                      <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-800 text-xs">
                        <Clock className="h-3 w-3 text-primary" />
                        <span>{etapa.duracao}</span>
                      </div>
                    </div>
                  </div>

                  {index < processo.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <div className="w-6 h-0.5 bg-primary/30" />
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-20 md:py-28 bg-surface-800/50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                O que Nossos <span className="gradient-text">Clientes</span> Dizem
              </h2>
              <p className="text-lg text-muted-foreground">
                Empresas que investiram em um site profissional e aumentaram seus resultados
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {depoimentos.map((depoimento, index) => (
                <article
                  key={depoimento.nome}
                  className="glass-card rounded-xl p-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: depoimento.nota }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{depoimento.texto}"</p>
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{depoimento.foto}</div>
                    <div>
                      <p className="font-semibold">{depoimento.nome}</p>
                      <p className="text-sm text-muted-foreground">{depoimento.empresa}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="glass-card rounded-xl p-6 max-w-2xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="h-6 w-6 fill-primary text-primary" />
                <span className="text-3xl font-bold gradient-text">4.9/5.0</span>
              </div>
              <p className="text-muted-foreground">
                Avaliação média de <strong>187 clientes satisfeitos</strong>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                Perguntas <span className="gradient-text">Frequentes</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  pergunta: 'Quanto tempo leva para criar um site?',
                  resposta:
                    'Depende do tipo de site. Landing pages ficam prontas em 7 dias, sites institucionais em 20 dias e e-commerce em 45 dias. Trabalhamos com prazos fixos e garantimos a entrega.',
                },
                {
                  pergunta: 'Preciso fornecer textos e imagens?',
                  resposta:
                    'O ideal é que você forneça o conteúdo, pois conhece melhor seu negócio. Mas podemos ajudar com a criação de textos otimizados para SEO (serviço adicional) e seleção de imagens profissionais.',
                },
                {
                  pergunta: 'O site vai aparecer no Google?',
                  resposta:
                    'Sim! Todos os sites são otimizados para SEO (Search Engine Optimization). Fazemos a indexação no Google e aplicamos as melhores práticas para melhorar o posicionamento nas buscas.',
                },
                {
                  pergunta: 'Posso fazer alterações depois que o site estiver pronto?',
                  resposta:
                    'Sim. Sites institucionais incluem área administrativa onde você pode atualizar conteúdos. Para alterações de layout e funcionalidades, oferecemos pacotes de manutenção mensal.',
                },
                {
                  pergunta: 'O site funciona em celular?',
                  resposta:
                    'Sim! Todos os nossos sites são responsivos, ou seja, se adaptam perfeitamente a smartphones, tablets e computadores, garantindo uma ótima experiência em qualquer dispositivo.',
                },
                {
                  pergunta: 'Vocês fazem e-commerce com gateway de pagamento?',
                  resposta:
                    'Sim! Integramos seu e-commerce com os principais gateways de pagamento (Mercado Pago, PagSeguro, Stripe) para que você possa receber por cartão de crédito, PIX e boleto.',
                },
                {
                  pergunta: 'Preciso pagar hospedagem todo mês?',
                  resposta:
                    'A hospedagem do primeiro ano está inclusa no projeto. Após 1 ano, há um custo anual de renovação de hospedagem (entre R$200-500/ano dependendo do plano).',
                },
                {
                  pergunta: 'E se eu não gostar do resultado?',
                  resposta:
                    'Oferecemos revisões durante o desenvolvimento (3 a 5 revisões dependendo do plano). Trabalhamos até você ficar satisfeito. Temos 97% de taxa de satisfação dos clientes.',
                },
                {
                  pergunta: 'Posso parcelar o pagamento?',
                  resposta:
                    'Sim! Aceitamos pagamento em até 12x no cartão de crédito. Também aceitamos PIX com desconto e boleto bancário.',
                },
                {
                  pergunta: 'Vocês dão suporte após a entrega?',
                  resposta:
                    'Sim! Oferecemos 30 dias de suporte gratuito após a entrega. Para suporte contínuo e manutenção, temos planos mensais a partir de R$150/mês.',
                },
              ].map((faq, index) => (
                <article
                  key={index}
                  className="glass-card rounded-xl p-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <h3 className="font-bold mb-2 flex items-start gap-2">
                    <span className="text-primary">Q:</span>
                    {faq.pergunta}
                  </h3>
                  <p className="text-muted-foreground pl-6">
                    <span className="text-primary font-bold">R:</span> {faq.resposta}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final com Garantias */}
        <section className="py-20 md:py-28 bg-surface-800/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="glass-card rounded-2xl p-8 lg:p-12 text-center border-primary/30">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 mb-6">
                  <Clock className="h-4 w-4 text-red-400 animate-pulse" />
                  <span className="text-sm font-semibold text-red-400">
                    ⚠️ ATENÇÃO: Oferta válida para os próximos 5 clientes
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                  Pronto para <span className="gradient-text">Crescer</span> seu Negócio?
                </h2>

                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Não perca a oportunidade de ter um site profissional com <strong>30% de desconto</strong>.
                  Aumente suas vendas, credibilidade e presença digital.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {garantias.map((garantia, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-2 p-4 glass-card rounded-lg"
                    >
                      <garantia.icon className="h-8 w-8 text-primary" />
                      <span className="text-sm text-center">{garantia.texto}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>✅ Desenvolvimento profissional e personalizado</p>
                  <p>✅ Revisões ilimitadas até sua aprovação</p>
                  <p>✅ Entrega no prazo garantida</p>
                  <p>✅ Suporte técnico incluso</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
