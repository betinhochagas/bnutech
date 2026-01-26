import { Zap, Shield, Users, Clock, Target, HeartHandshake } from 'lucide-react';

const differentials = [
  {
    icon: Zap,
    title: 'Agilidade',
    description: 'Entregas rápidas sem perder qualidade. Prazos claros e cumpridos.',
  },
  {
    icon: Shield,
    title: 'Segurança',
    description: 'Seus dados protegidos com as melhores práticas de segurança do mercado.',
  },
  {
    icon: Users,
    title: 'Atendimento Humano',
    description: 'Você fala com pessoas reais, não com robôs. Suporte próximo e personalizado.',
  },
  {
    icon: Clock,
    title: 'SLA Garantido',
    description: 'Tempo de resposta definido em contrato. Compromisso com sua operação.',
  },
  {
    icon: Target,
    title: 'Foco em Resultado',
    description: 'Soluções pensadas para gerar valor real ao seu negócio.',
  },
  {
    icon: HeartHandshake,
    title: 'Parceria de Longo Prazo',
    description: 'Não somos apenas fornecedores, somos parceiros do seu crescimento.',
  },
];

export function WhyUs() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-800/50 to-background" />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Por que nos escolher</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 mb-4">
            Por que a <span className="gradient-text">BNU Tech</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Mais do que tecnologia, entregamos confiança e resultados.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => (
            <div
              key={item.title}
              className="group p-6 rounded-xl border border-border/50 hover:border-primary/30 bg-card/30 backdrop-blur-sm transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold font-display text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
