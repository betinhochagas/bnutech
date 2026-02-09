import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Helmet } from 'react-helmet-async';
import {
  Mail,
  Shield,
  Users,
  CheckCircle2,
  Clock,
  Zap,
  Send,
  Loader2,
  Server,
  Lock,
  HardDrive,
  Smartphone,
  Globe,
  BarChart3,
  ArrowRight,
  Building2,
  Wrench,
  FileCheck,
  Rocket,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';

// Por que ter E-mail Corporativo
const porqueEmailCorporativo = [
  {
    icon: Building2,
    titulo: 'Credibilidade Profissional',
    descricao: 'E-mails com seu domínio (contato@suaempresa.com.br) transmitem mais confiança e profissionalismo aos seus clientes.',
  },
  {
    icon: Shield,
    titulo: 'Segurança Avançada',
    descricao: 'Proteção contra spam, phishing e vírus. Seus dados e os de seus clientes ficam seguros.',
  },
  {
    icon: BarChart3,
    titulo: 'Fortalecimento da Marca',
    descricao: 'Cada e-mail enviado reforça sua marca. É marketing gratuito em todas as comunicações.',
  },
  {
    icon: Users,
    titulo: 'Gestão Centralizada',
    descricao: 'Controle todas as caixas de e-mail da empresa em um só lugar. Adicione ou remova usuários facilmente.',
  },
  {
    icon: Lock,
    titulo: 'Privacidade Garantida',
    descricao: 'Seus e-mails não são usados para propaganda. Diferente de serviços gratuitos que analisam seu conteúdo.',
  },
  {
    icon: Zap,
    titulo: 'Performance Superior',
    descricao: 'Servidores dedicados garantem envio rápido e maior taxa de entrega nas caixas de entrada.',
  },
];

// Recursos Inclusos
const recursos = [
  {
    icon: Mail,
    titulo: 'Webmail Moderno',
    descricao: 'Interface intuitiva para acessar e-mails de qualquer navegador.',
  },
  {
    icon: Smartphone,
    titulo: 'Acesso Móvel',
    descricao: 'Configure em smartphones, tablets e computadores. Sincronização automática.',
  },
  {
    icon: HardDrive,
    titulo: 'Backup Diário',
    descricao: 'Seus e-mails são protegidos com backup automático. Nunca perca mensagens importantes.',
  },
  {
    icon: Server,
    titulo: 'Alta Disponibilidade',
    descricao: 'Servidores com 99,9% de uptime. Seu e-mail sempre acessível quando você precisa.',
  },
  {
    icon: Globe,
    titulo: 'Domínio Personalizado',
    descricao: 'Use o domínio da sua empresa ou registramos um novo para você.',
  },
  {
    icon: Users,
    titulo: 'Múltiplas Contas',
    descricao: 'Crie caixas para toda equipe: vendas@, suporte@, financeiro@, etc.',
  },
];

// Planos de E-mail Corporativo
const planos = [
  {
    nome: 'Básico',
    preco: 'R$ 15',
    periodo: '/mês por caixa',
    recursos: [
      '10 GB de armazenamento',
      'Webmail moderno',
      'Configuração inicial incluída',
      'Suporte técnico',
      'Anti-spam básico',
      'SSL/TLS seguro',
    ],
    ideal: 'Profissionais autônomos e MEI',
  },
  {
    nome: 'Profissional',
    preco: 'R$ 25',
    periodo: '/mês por caixa',
    destaque: true,
    recursos: [
      '50 GB de armazenamento',
      'Webmail premium',
      'Configuração completa',
      'Suporte prioritário',
      'Anti-spam avançado',
      'SSL/TLS seguro',
      'Backup automático',
      'Calendário e contatos',
    ],
    ideal: 'Pequenas e médias empresas',
  },
  {
    nome: 'Empresarial',
    preco: 'R$ 40',
    periodo: '/mês por caixa',
    recursos: [
      '100 GB de armazenamento',
      'Webmail premium',
      'Migração assistida',
      'Suporte dedicado 24/7',
      'Anti-spam empresarial',
      'SSL/TLS seguro',
      'Backup diário',
      'Calendário e contatos',
      'Integração com Office',
      'Políticas de segurança',
    ],
    ideal: 'Médias e grandes empresas',
  },
];

// Processo de Implementação
const processo = [
  {
    icon: Send,
    numero: '01',
    titulo: 'Solicite seu Orçamento',
    descricao: 'Preencha o formulário ou fale conosco pelo WhatsApp. Respondemos em minutos.',
  },
  {
    icon: Wrench,
    numero: '02',
    titulo: 'Configuração',
    descricao: 'Nossa equipe configura tudo para você. Migramos e-mails antigos se necessário.',
  },
  {
    icon: FileCheck,
    numero: '03',
    titulo: 'Treinamento',
    descricao: 'Ensinamos você e sua equipe a usar o novo e-mail. Suporte total nesta fase.',
  },
  {
    icon: Rocket,
    numero: '04',
    titulo: 'No Ar!',
    descricao: 'Tudo funcionando! Suporte contínuo sempre que precisar.',
  },
];

// FAQ para Clientes
const faqClientes = [
  {
    pergunta: 'Quanto tempo leva para ativar meu e-mail corporativo?',
    resposta:
      'Em até 24 horas após a confirmação do pedido seu e-mail estará ativo e funcionando. Se você já tiver o domínio registrado, pode ser ainda mais rápido.',
  },
  {
    pergunta: 'Preciso ter um domínio? Como funciona?',
    resposta:
      'Se você já tem um domínio (ex: suaempresa.com.br), usamos ele. Se não tiver, podemos registrar um novo para você. O custo do registro é pago anualmente e varia conforme o tipo (.com, .com.br, etc).',
  },
  {
    pergunta: 'Posso migrar meus e-mails antigos?',
    resposta:
      'Sim! Fazemos a migração completa de seus e-mails, contatos e calendários do serviço anterior. Nos planos Profissional e Empresarial, a migração é assistida pela nossa equipe.',
  },
  {
    pergunta: 'Consigo acessar de celular e tablet?',
    resposta:
      'Sim, funciona em qualquer dispositivo. Você pode usar o webmail pelo navegador ou configurar em aplicativos como Gmail, Outlook, Apple Mail, etc. Ensinamos como configurar.',
  },
  {
    pergunta: 'E se eu precisar de mais espaço no futuro?',
    resposta:
      'Você pode fazer upgrade para um plano maior a qualquer momento. A mudança é simples e não há perda de dados.',
  },
  {
    pergunta: 'O que está incluso no suporte técnico?',
    resposta:
      'Suporte para configuração, problemas de envio/recebimento, dúvidas sobre o webmail, ajuda com dispositivos móveis e muito mais. Atendimento por WhatsApp, e-mail e telefone.',
  },
  {
    pergunta: 'Como funciona o anti-spam?',
    resposta:
      'Temos filtros automáticos que bloqueiam spam e e-mails maliciosos antes de chegarem na sua caixa. Você pode ajustar as configurações conforme preferir.',
  },
  {
    pergunta: 'Posso cancelar quando quiser?',
    resposta:
      'Sim, não há fidelidade. Você pode cancelar quando quiser. Recomendamos aviso prévio de 30 dias para fazer o backup de seus e-mails.',
  },
  {
    pergunta: 'Vocês fazem backup dos meus e-mails?',
    resposta:
      'Sim, nos planos Profissional e Empresarial fazemos backup diário automático. No plano Básico, recomendamos que você faça backup periódico em seu computador.',
  },
  {
    pergunta: 'Quantas contas de e-mail posso criar?',
    resposta:
      'Quantas você precisar! Cada conta (caixa de e-mail) tem seu valor mensal. Por exemplo, se contratar 5 caixas no plano Profissional, pagará R$ 125/mês no total.',
  },
];

// Schema de validação - mantido para referência futura
// const orcamentoSchema = z.object({
//   nome: z.string().trim().min(2, 'Nome deve ter pelo menos 2 caracteres').max(100),
//   email: z.string().trim().email('E-mail inválido').max(255),
//   telefone: z.string().trim().min(10, 'Telefone inválido').max(20),
//   empresa: z.string().trim().min(2, 'Nome da empresa obrigatório').max(100),
//   numeroCaixas: z.string().trim().min(1, 'Informe quantas caixas precisa'),
//   mensagem: z.string().trim().max(500).optional(),
// });

// type OrcamentoFormData = z.infer<typeof orcamentoSchema>;

const ConsultorEmail = () => {

  return (
    <>
      <Helmet>
        <title>E-mail Corporativo Profissional | BNU Tech</title>
        <meta
          name="description"
          content="E-mail profissional com seu domínio. Planos a partir de R$ 15/mês. Configuração incluída, suporte técnico e segurança avançada. Ative em 24 horas."
        />
        <meta
          name="keywords"
          content="e-mail corporativo, e-mail profissional, webmail empresarial, e-mail domínio próprio, hospedagem de email"
        />
        <link rel="canonical" href="https://www.bnutech.com.br/consultoria" />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section
          className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20 overflow-hidden"
          style={{ background: 'var(--gradient-hero)' }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float"
              style={{ animationDelay: '2s' }}
            />
          </div>

          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">E-mail Profissional</span>
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 animate-fade-in"
                style={{ animationDelay: '0.1s' }}
              >
                E-mail Corporativo com{' '}
                <span className="gradient-text">seu domínio</span>
              </h1>

              <p
                className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in"
                style={{ animationDelay: '0.2s' }}
              >
                Pare de perder clientes por usar e-mail gratuito
              </p>

              <p
                className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in"
                style={{ animationDelay: '0.3s' }}
              >
                <strong className="text-primary">80% dos clientes julgam a credibilidade de uma empresa pelo e-mail usado.</strong> Planos a partir de apenas R$ 15/mês com configuração completa incluída.
              </p>

              <div
                className="glass-card rounded-xl p-6 max-w-2xl mx-auto animate-fade-in"
                style={{ animationDelay: '0.4s' }}
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-primary">Oferta Limitada</span>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  <strong>Primeira mensalidade com 30% de desconto</strong> para novos clientes que contratarem hoje. Economize desde o primeiro mês!
                </p>
              </div>

              <div
                className="mt-16 pt-8 border-t border-border/30 animate-fade-in"
                style={{ animationDelay: '0.5s' }}
              >
                <p className="text-sm text-muted-foreground mb-4 text-center">Mais de <strong className="text-primary">500+ empresas</strong> já confiam em nossas soluções</p>
                <div className="flex flex-wrap justify-center gap-8 text-muted-foreground/80">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Ativação em 24h
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Migração Gratuita
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Garantia de 7 dias
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Por que E-mail Corporativo */}
        <section className="py-20 md:py-28 bg-surface-800">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Vantagens
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 mb-4">
                Por que ter <span className="gradient-text">e-mail corporativo</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-4">
                Muito além de um simples e-mail. É a identidade digital da sua empresa.
              </p>
              <div className="glass-card rounded-lg p-4 inline-block mx-auto">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-primary">Você sabia?</strong> E-mails de domínios gratuitos (Gmail, Hotmail) são <strong>43% mais bloqueados</strong> por filtros anti-spam
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {porqueEmailCorporativo.map((item, index) => (
                <article
                  key={item.titulo}
                  className="glass-card rounded-xl p-6 group hover:border-primary/50 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-display mb-3">{item.titulo}</h3>
                  <p className="text-muted-foreground">{item.descricao}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Recursos Inclusos */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Recursos
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 mb-4">
                Tudo que você <span className="gradient-text">precisa</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Solução completa de e-mail profissional. Sem custos extras ou surpresas.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {recursos.map((recurso, index) => (
                <div
                  key={recurso.titulo}
                  className="glass-card rounded-xl p-6 text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <recurso.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold font-display mb-2">{recurso.titulo}</h3>
                  <p className="text-sm text-muted-foreground">{recurso.descricao}</p>
                </div>
              ))}
            </div>

            {/* Comparação: E-mail Corporativo vs Gratuito */}
            <div className="glass-card rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold font-display mb-6 text-center">
                E-mail Corporativo <span className="gradient-text">vs</span> E-mail Gratuito
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5" />
                    Com E-mail Corporativo
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      contato@suaempresa.com.br
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <strong>+73%</strong> de credibilidade com clientes
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      Seus dados são privados
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      Protegido contra spam e vírus
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <strong>99.9%</strong> de entrega garantida
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      Força sua marca em cada mensagem
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      Suporte técnico especializado
                    </li>
                  </ul>
                </div>
                <div className="space-y-3 opacity-60">
                  <h4 className="font-semibold text-destructive mb-3 flex items-center gap-2">
                    <X className="h-5 w-5" />
                    Com E-mail Gratuito
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">✗</span>
                      seunome123@gmail.com
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">✗</span>
                      Parece pouco profissional
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">✗</span>
                      Seus dados são analisados para ads
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">✗</span>
                      Suporte limitado ou inexistente
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">✗</span>
                      Alta chance de cair em spam
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">✗</span>
                      Não transmite confiança
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">✗</span>
                      Você pode perder acesso a qualquer momento
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border/30 text-center">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-primary">Investimento:</strong> A partir de <strong>R$ 0,50 por dia</strong> para ter um e-mail profissional. Menos que um café!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Planos e Preços */}
        <section id="planos" className="py-20 md:py-28 bg-surface-800">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Planos
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 mb-4">
                Escolha o <span className="gradient-text">plano ideal</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-4">
                Planos flexíveis para empresas de todos os tamanhos. <strong className="text-primary">Sem fidelidade</strong> - cancele quando quiser.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Mais de <strong>200 novos clientes</strong> nos últimos 90 dias</span>
              </div>
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
                      <span className="text-muted-foreground">{plano.periodo}</span>
                    </div>
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
              <div className="glass-card rounded-xl p-8 max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">R$ 0</div>
                    <p className="text-sm text-muted-foreground">Taxa de setup</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">24h</div>
                    <p className="text-sm text-muted-foreground">Para ativar</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">98%</div>
                    <p className="text-sm text-muted-foreground">Taxa de satisfação</p>
                  </div>
                </div>
                <div className="pt-6 border-t border-border/30">
                  <h4 className="font-bold font-display text-lg mb-2">
                    💰 Desconto Progressivo para Múltiplas Caixas
                  </h4>
                  <p className="text-muted-foreground">
                    <strong>5+ caixas: 10% OFF</strong> | <strong>10+ caixas: 15% OFF</strong> | <strong>20+ caixas: 20% OFF</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Processo de Implementação */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Como Funciona
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 mb-4">
                Processo <span className="gradient-text">simples e rápido</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-4">
                Em apenas 4 passos, seu e-mail corporativo está funcionando perfeitamente.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Tempo total: menos de 24 horas</span>
              </div>
            </div>

            <div className="relative">
              <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary via-secondary to-accent" />

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {processo.map((item, index) => (
                  <div
                    key={item.titulo}
                    className="relative text-center animate-fade-in"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="relative mx-auto mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto border border-primary/30 animate-pulse-glow">
                        <item.icon className="h-8 w-8 text-primary" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                        {item.numero}
                      </span>
                    </div>
                    <h3 className="font-bold font-display text-xl mb-2">{item.titulo}</h3>
                    <p className="text-muted-foreground text-sm">{item.descricao}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Garantias e Segurança */}
            <div className="mt-16 glass-card rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold font-display mb-6 text-center">
                🔒 Garantias e Compromissos
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-bold mb-2">Garantia de 7 dias</h4>
                  <p className="text-sm text-muted-foreground">
                    Não gostou? Devolvemos 100% do valor, sem perguntas
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-bold mb-2">Uptime de 99.9%</h4>
                  <p className="text-sm text-muted-foreground">
                    Seu e-mail sempre disponível quando você precisa
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-bold mb-2">Suporte Humano</h4>
                  <p className="text-sm text-muted-foreground">
                    Atendimento por pessoas reais, não robôs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos/Casos de Sucesso */}
        <section className="py-20 md:py-28 bg-surface-800">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Casos de Sucesso
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 mb-4">
                O que nossos <span className="gradient-text">clientes dizem</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Antes usava Gmail pessoal. Depois do e-mail corporativo, <strong>aumentamos 40% nas vendas</strong>. Clientes passaram a nos levar mais a sério."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-bold text-primary">MF</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Maria Fernanda</p>
                    <p className="text-xs text-muted-foreground">Arquitetura & Design</p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Migração de 15 caixas foi rápida e sem dor de cabeça. <strong>Suporte incrível!</strong> Resolvem tudo em minutos."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-bold text-primary">RC</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Roberto Costa</p>
                    <p className="text-xs text-muted-foreground">Comércio de Peças</p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Melhor custo-benefício. <strong>R$ 25/mês por toda segurança e credibilidade</strong> que traz é muito barato."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-bold text-primary">AS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Ana Silva</p>
                    <p className="text-xs text-muted-foreground">Consultoria Empresarial</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-2xl font-bold text-primary">4.9/5.0</span>
                <span className="text-muted-foreground">|</span>
                <span className="text-sm text-muted-foreground">Média de <strong>347 avaliações</strong></span>
              </div>
            </div>
          </div>
        </section>

        {/* Formulário removido - apresentação presencial */}

        {/* FAQ */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 mb-4">
                Dúvidas <span className="gradient-text">frequentes</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Respostas rápidas para as principais perguntas dos clientes.
              </p>
            </div>

            <div className="max-w-3xl mx-auto mb-12">
              <Accordion type="single" collapsible className="space-y-4">
                {faqClientes.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="glass-card rounded-xl px-6 border-none"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">
                      {faq.pergunta}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {faq.resposta}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Final - Fechamento de Vendas */}
        <section className="py-20 md:py-28 bg-surface-800">
          <div className="container">
            <div className="glass-card rounded-xl p-8 lg:p-12 max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Oferta Especial Hoje</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                Pronto para profissionalizar sua <span className="gradient-text">comunicação</span>?
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Mais de <strong className="text-primary">500 empresas</strong> já transformaram sua imagem com e-mail corporativo. 
                <strong> Não fique para trás!</strong>
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="glass-card rounded-lg p-4">
                  <CheckCircle2 className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold mb-1">Ativação em 24h</p>
                  <p className="text-sm text-muted-foreground">Comece a usar amanhã</p>
                </div>
                <div className="glass-card rounded-lg p-4">
                  <CheckCircle2 className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold mb-1">Garantia de 7 dias</p>
                  <p className="text-sm text-muted-foreground">Risco zero para você</p>
                </div>
                <div className="glass-card rounded-lg p-4">
                  <CheckCircle2 className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold mb-1">Sem Fidelidade</p>
                  <p className="text-sm text-muted-foreground">Cancele quando quiser</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/20 border border-primary/30">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-primary">
                    🎉 Primeira mensalidade com 30% OFF para novos clientes
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Investimento mínimo: <strong className="text-primary">R$ 15/mês</strong> (menos de R$ 0,50 por dia)
                </p>
                
                <p className="text-lg font-semibold text-foreground mt-6">
                  💬 Vamos começar? Fale com seu consultor agora!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ConsultorEmail;
