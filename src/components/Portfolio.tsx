import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'E-commerce ModaStyle',
    category: 'Desenvolvimento Web',
    description: 'Loja virtual completa com integração de pagamentos e gestão de estoque.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    tags: ['E-commerce', 'React', 'API'],
  },
  {
    title: 'Portal Clínica Saúde+',
    category: 'Sistema Web',
    description: 'Sistema de agendamento online e gestão de pacientes para clínica médica.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    tags: ['Saúde', 'Agendamento', 'Dashboard'],
  },
  {
    title: 'Landing Page Construtora ABC',
    category: 'Landing Page',
    description: 'Página de alta conversão para captação de leads no setor imobiliário.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
    tags: ['Imobiliário', 'Lead Gen', 'SEO'],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Portfólio</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 mb-4">
            Projetos que <span className="gradient-text">entregamos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Conheça alguns dos trabalhos que realizamos para nossos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group glass-card rounded-xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <Button size="sm" variant="secondary">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver Projeto
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="font-bold font-display text-lg mt-2 mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild className="gradient-border">
            <a href="#contato">
              Quero um projeto assim
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
