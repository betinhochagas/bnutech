import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Mendes',
    role: 'CEO, ModaStyle',
    content: 'A BNU Tech transformou nossa presença digital. O novo site aumentou nossas vendas em 40% nos primeiros 3 meses. Equipe extremamente profissional e atenciosa.',
    avatar: 'CM',
    rating: 5,
  },
  {
    name: 'Dra. Ana Paula Silva',
    role: 'Diretora, Clínica Saúde+',
    content: 'O sistema de agendamento online revolucionou nossa clínica. Reduzimos faltas em 60% e nossos pacientes adoram a praticidade. Suporte sempre disponível!',
    avatar: 'AS',
    rating: 5,
  },
  {
    name: 'Roberto Almeida',
    role: 'Gerente de TI, Construtora ABC',
    content: 'Desde que contratamos o suporte remoto da BNU Tech, nossos problemas de TI são resolvidos em minutos. Economia de tempo e dinheiro. Recomendo fortemente!',
    avatar: 'RA',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-surface-800">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 mb-4">
            O que nossos <span className="gradient-text">clientes dizem</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A satisfação dos nossos clientes é nossa maior conquista.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className="glass-card rounded-xl p-6 lg:p-8 relative animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
