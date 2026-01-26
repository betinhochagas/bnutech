import { MessageSquare, Cog, CheckSquare, Rocket } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Briefing',
    description: 'Entendemos suas necessidades, objetivos e expectativas em uma conversa inicial.',
  },
  {
    icon: Cog,
    step: '02',
    title: 'Execução',
    description: 'Desenvolvemos sua solução com acompanhamento contínuo e atualizações frequentes.',
  },
  {
    icon: CheckSquare,
    step: '03',
    title: 'Validação',
    description: 'Apresentamos o resultado para sua aprovação e realizamos ajustes necessários.',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Entrega & Suporte',
    description: 'Colocamos no ar e oferecemos suporte contínuo para manter tudo funcionando.',
  },
];

export function Process() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-surface-800">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Como Trabalhamos</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 mb-4">
            Processo <span className="gradient-text">simples e transparente</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Do primeiro contato à entrega, você sabe exatamente o que está acontecendo.
          </p>
        </div>

        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary via-secondary to-accent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <div
                key={item.title}
                className="relative text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step circle */}
                <div className="relative mx-auto mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto border border-primary/30 animate-pulse-glow">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {item.step}
                  </span>
                </div>

                <h3 className="font-bold font-display text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
