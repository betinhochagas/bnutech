import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';

const projects = [
  {
    title: 'PetZen - Casa de Ração',
    category: 'E-commerce',
    description: 'Loja virtual completa para produtos pet com catálogo e sistema de pedidos.',
    image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&h=400&fit=crop',
    tags: ['E-commerce', 'Pets', 'React'],
    link: 'https://petzen.bnutech.com.br',
  },
  {
    title: 'Pé na Pista Locações',
    category: 'Sistema Web',
    description: 'Plataforma de locação de veículos para motoristas de aplicativo em Jaraguá do Sul/SC.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop',
    tags: ['Locação', 'Mobilidade', 'Landing Page'],
    link: 'https://penapista.bnutech.com.br',
  },
  {
    title: 'RV Car Locações',
    category: 'Desenvolvimento Web',
    description: 'Site de locação de veículos e investimento em frotas para motoristas de app em Blumenau/SC.',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop',
    tags: ['Locação', 'Investimentos', 'SEO'],
    link: 'https://www.rvcarlocacoes.com.br',
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [showPreview, setShowPreview] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [iframeError, setIframeError] = useState(false);
  const [errorDetails, setErrorDetails] = useState<string>('');
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsHovering(true);
    setShowPreview(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    // Delay para fechar o modal, dando tempo do usuário mover o mouse para ele
    timeoutRef.current = setTimeout(() => {
      if (!isHovering) {
        setShowPreview(false);
      }
    }, 100);
  };

  const handleModalMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsHovering(true);
  };

  const handleModalMouseLeave = () => {
    setIsHovering(false);
    setShowPreview(false);
  };

  const handleIframeError = (e: React.SyntheticEvent<HTMLIFrameElement>) => {
    console.error('Iframe error for', project.title, e);
    setErrorDetails(`Erro ao carregar: ${e.type}`);
    setIframeError(true);
  };

  useEffect(() => {
    if (showPreview && iframeRef.current) {
      const iframe = iframeRef.current;

      // Log para debug
      console.log('Loading iframe for:', project.title, project.link);

      // Desabilitado: detecção automática de erro (estava bloqueando sites válidos)
      // Se um site realmente bloquear, não há muito que possamos fazer no cliente

      let scrollPosition = 0;
      const scrollSpeed = 2;
      const maxScroll = 3000;

      const scrollInterval = setInterval(() => {
        try {
          if (iframe.contentWindow && !iframeError) {
            scrollPosition += scrollSpeed;
            iframe.contentWindow.scrollTo(0, scrollPosition);

            if (scrollPosition >= maxScroll) {
              scrollPosition = 0;
            }
          }
        } catch (e) {
          // Ignora erros de CORS no scroll
        }
      }, 30);

      return () => {
        clearInterval(scrollInterval);
      };
    }
  }, [showPreview, iframeError, project.title, project.link]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!showPreview) {
      setIframeError(false);
      setErrorDetails('');
    }
  }, [showPreview]);

  return (
    <>
      <article
        className="group glass-card rounded-xl overflow-hidden animate-fade-in"
        style={{ animationDelay: `${index * 0.15}s` }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 z-10">
            <Button size="sm" variant="secondary" asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Ver Projeto
              </a>
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

      {/* Modal Preview */}
      {showPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

          {/* Modal Content */}
          <div
            className="relative w-full max-w-5xl h-[80vh] glass-card rounded-2xl overflow-hidden shadow-2xl"
            onMouseEnter={handleModalMouseEnter}
            onMouseLeave={handleModalMouseLeave}
          >
            {/* Header do Modal */}
            <div className="absolute top-0 left-0 right-0 z-10 glass-card border-b px-6 py-4 flex items-center justify-between">
              <div>
                <h3 className="font-bold font-display text-lg">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.category}</p>
              </div>
              <Button size="sm" variant="secondary" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Abrir Site
                </a>
              </Button>
            </div>

            {/* Iframe com scroll automático */}
            <div className="w-full h-full pt-20 relative">
              {iframeError ? (
                // Fallback quando iframe é bloqueado
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                  <div className="mb-6 opacity-50">
                    <ExternalLink className="w-20 h-20 mx-auto" />
                  </div>
                  <h4 className="text-2xl font-bold font-display mb-3">
                    Preview não disponível
                  </h4>
                  <p className="text-muted-foreground mb-2 max-w-md">
                    Este site não permite visualização em preview. Clique no botão abaixo para abrir o site completo em uma nova aba.
                  </p>
                  {errorDetails && (
                    <p className="text-sm text-muted-foreground/70 mb-6 font-mono">
                      Detalhes: {errorDetails}
                    </p>
                  )}
                  <Button size="lg" variant="default" asChild className="gradient-border">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Abrir {project.title}
                    </a>
                  </Button>
                </div>
              ) : (
                <iframe
                  ref={iframeRef}
                  src={project.link}
                  className="w-full h-full border-0"
                  title={`Preview de ${project.title}`}
                  loading="lazy"
                  onError={handleIframeError}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

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
            <ProjectCard key={project.title} project={project} index={index} />
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
