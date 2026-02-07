import { Phone, Mail, Clock } from 'lucide-react';
import { ContactForm } from './ContactForm';

const contactInfo = [
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '(47) 93386-8149',
    href: 'https://wa.me/5547933868149',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'Contato@bnutech.com.br',
    href: 'mailto:Contato@bnutech.com.br',
  },
  {
    icon: Clock,
    label: 'Horário',
    value: 'Seg - Sex: 9h às 18h',
  },
];

export function Contact() {
  return (
    <section id="contato" className="py-20 md:py-28 bg-surface-800">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Contato</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 mb-4">
            Vamos <span className="gradient-text">conversar</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Solicite um orçamento ou tire suas dúvidas. Respondemos em até 24 horas úteis.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
