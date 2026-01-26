import { Globe, Mail, Headphones, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Desenvolvimento Web',
    description: 'Sites, landing pages e sistemas web sob medida para seu negócio.',
    benefits: [
      'Design responsivo e moderno',
      'Otimizado para SEO',
      'Performance de alta velocidade',
      'Integração com APIs e sistemas',
    ],
  },
  {
    icon: Mail,
    title: 'Administração de Webmail',
    description: 'Configuração e gestão profissional de e-mails corporativos.',
    benefits: [
      'E-mail com domínio próprio',
      'Migração segura de dados',
      'Configuração em dispositivos',
      'Suporte anti-spam',
    ],
  },
  {
    icon: Headphones,
    title: 'Suporte de T.I Remoto',
    description: 'Assistência técnica rápida e eficiente, onde você estiver.',
    benefits: [
      'Atendimento em até 2 horas',
      'Acesso remoto seguro',
      'Manutenção preventiva',
      'Sem deslocamento necessário',
    ],
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-surface-800">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Nossos Serviços</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 mb-4">
            Soluções completas em <span className="gradient-text">tecnologia</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Do desenvolvimento à manutenção, cuidamos de toda a sua infraestrutura digital.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="glass-card rounded-xl p-6 lg:p-8 group hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>

              <h3 className="text-xl font-bold font-display mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              <ul className="space-y-3">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
