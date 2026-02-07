import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';

const projects = [
  {
    title: 'PetZen - Casa de Ração',
    category: 'E-commerce',
    description: 'Loja virtual completa para produtos pet com catálogo e sistema de pedidos.',
    image: '/images/petzen.preview.png',
    tags: ['E-commerce', 'Pets', 'React'],
    link: 'https://petzen.bnutech.com.br',
  },
  {
    title: 'Pé na Pista Locações',
    category: 'Sistema Web',
    description: 'Plataforma de locação de veículos para motoristas de aplicativo em Jaraguá do Sul/SC.',
    image: '/images/penapista-preview.png',
    tags: ['Locação', 'Mobilidade', 'Landing Page'],
    link: 'https://penapista.bnutech.com.br',
  },
  {
    title: 'RV Car Locações',
    category: 'Desenvolvimento Web',
    description: 'Site de locação de veículos e investimento em frotas para motoristas de app em Blumenau/SC.',
    image: '/images/rvcar-preview.png',
    tags: ['Locação', 'Investimentos', 'SEO'],
    link: 'https://www.rvcarlocacoes.com.br',
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  isActive: boolean;
  anyModalOpen: boolean;
  onOpenPreview: () => void;
  onClosePreview: () => void;
}

function ProjectCard({ project, index, isActive, anyModalOpen, onOpenPreview, onClosePreview }: ProjectCardProps) {
  const [iframeError, setIframeError] = useState(false);
  const [errorDetails, setErrorDetails] = useState<string>('');
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hoverRef = useRef(false);

  const handleMouseEnter = () => {
    // CRITICAL: Só abre se nenhum modal está aberto
    if (anyModalOpen) {
      return; // Ignora hover quando qualquer modal está aberto
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    hoverRef.current = true;
    if (!isActive) {
      onOpenPreview();
    }
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    // CRITICAL: Não processa leave se este card tem o modal ativo
    // O modal vai controlar o fechamento
    if (isActive) {
      return; // Modal ativo - deixa o modal controlar
    }

    // Verifica se realmente saiu do card (não apenas moveu entre elementos filhos)
    const currentTarget = e.currentTarget as HTMLElement;
    const relatedTarget = e.relatedTarget as HTMLElement;

    if (relatedTarget && currentTarget.contains(relatedTarget)) {
      return; // Ainda está dentro do card, ignora
    }

    hoverRef.current = false;
    // Este código só executa se nenhum modal deste card está aberto
    timeoutRef.current = setTimeout(() => {
      if (!hoverRef.current) {
        onClosePreview();
      }
    }, 150);
  };

  const handleModalMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    hoverRef.current = true;
  };

  const handleModalMouseLeave = () => {
    // Quando sai do modal, fecha com um pequeno delay
    // Isso permite mover o mouse rapidamente sem fechar acidentalmente
    hoverRef.current = false;
    timeoutRef.current = setTimeout(() => {
      if (!hoverRef.current) {
        onClosePreview();
      }
    }, 100); // Delay reduzido para 100ms para melhor responsividade
  };

  const handleBackdropClick = () => {
    // Fecha imediatamente apenas quando clica no backdrop
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    hoverRef.current = false;
    onClosePreview();
  };

  const handleIframeError = (e: React.SyntheticEvent<HTMLIFrameElement>) => {
    console.error('Iframe error for', project.title, e);
    setErrorDetails(`Erro ao carregar: ${e.type}`);
    setIframeError(true);
  };

  useEffect(() => {
    if (isActive && iframeRef.current) {
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
  }, [isActive, iframeError, project.title, project.link]);

  // Bloqueia scroll da página quando o modal está aberto
  useEffect(() => {
    if (isActive) {
      // Salva a posição atual do scroll
      const scrollY = window.scrollY;

      // Bloqueia o scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';

      return () => {
        // Restaura o scroll quando o modal fecha
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isActive]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isActive) {
      // Quando modal fecha, limpa tudo
      setIframeError(false);
      setErrorDetails('');
      hoverRef.current = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    }
  }, [isActive]);

  return (
    <>
      <article
        className="group glass-card rounded-xl overflow-hidden animate-fade-in"
        style={{
          animationDelay: `${index * 0.15}s`,
          pointerEvents: anyModalOpen ? 'none' : 'auto',
        }}
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

          {/* Badge de Preview */}
          <div className="absolute top-3 right-3 z-10">
            <span className="px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full backdrop-blur-sm shadow-lg">
              Passe o mouse para preview
            </span>
          </div>

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
      {isActive && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
          {/* Backdrop - fecha apenas quando clica */}
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={handleBackdropClick}
          />

          {/* Modal Content */}
          <div
            className="relative w-full max-w-4xl h-[70vh] glass-card rounded-2xl overflow-hidden shadow-2xl"
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
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);

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
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isActive={activeProjectIndex === index}
              anyModalOpen={activeProjectIndex !== null}
              onOpenPreview={() => setActiveProjectIndex(index)}
              onClosePreview={() => setActiveProjectIndex(null)}
            />
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
