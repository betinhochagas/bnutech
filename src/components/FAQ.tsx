import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Qual é o prazo médio para desenvolver um site?',
    answer: 'O prazo varia conforme a complexidade. Uma landing page simples leva de 5 a 10 dias úteis. Sites institucionais de 15 a 30 dias. Sistemas web mais complexos de 30 a 60 dias. Sempre alinhamos um cronograma detalhado antes de iniciar.',
  },
  {
    question: 'Vocês oferecem manutenção após a entrega?',
    answer: 'Sim! Oferecemos planos de manutenção mensal que incluem atualizações de segurança, backups, pequenas alterações de conteúdo e suporte técnico. O valor varia conforme o tipo de projeto.',
  },
  {
    question: 'Preciso ter domínio e hospedagem?',
    answer: 'Não necessariamente. Podemos registrar o domínio e configurar a hospedagem para você. Também trabalhamos com domínios e hospedagens que você já possua. Orientamos sobre a melhor opção para seu caso.',
  },
  {
    question: 'Como funciona o webmail corporativo?',
    answer: 'Configuramos e-mails profissionais com seu domínio (exemplo: contato@suaempresa.com.br). Inclui migração de e-mails existentes, configuração em celulares e computadores, e suporte técnico.',
  },
  {
    question: 'O suporte remoto é seguro?',
    answer: 'Totalmente seguro. Utilizamos softwares homologados com criptografia de ponta a ponta. Você autoriza cada acesso e pode acompanhar tudo que está sendo feito em tempo real.',
  },
  {
    question: 'Vocês trabalham com contrato?',
    answer: 'Sim, todos os serviços são formalizados via contrato que detalha escopo, prazos, valores e garantias. Isso protege ambas as partes e garante transparência.',
  },
  {
    question: 'Como vocês tratam dados pessoais (LGPD)?',
    answer: 'Seguimos rigorosamente a Lei Geral de Proteção de Dados. Implementamos políticas de privacidade, consentimento e segurança em todos os projetos. Seus dados e os de seus clientes estão protegidos.',
  },
  {
    question: 'Quais são as formas de pagamento?',
    answer: 'Aceitamos PIX, transferência bancária e cartão de crédito (em até 12x). Para projetos maiores, dividimos em etapas: entrada, meio e entrega final.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 mb-4">
            Perguntas <span className="gradient-text">frequentes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tire suas dúvidas sobre nossos serviços.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
