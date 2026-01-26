const Terms = () => {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold font-display mb-8">
          Termos de Uso
        </h1>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-muted-foreground">
          <p className="text-foreground">
            <strong>Última atualização:</strong> Janeiro de 2025
          </p>

          <section>
            <h2 className="text-xl font-bold font-display text-foreground mt-8 mb-4">
              1. Aceitação dos Termos
            </h2>
            <p>
              Ao acessar e utilizar o site da BNU Tech, você concorda com estes Termos de Uso.
              Se você não concordar com qualquer parte destes termos, não utilize nosso site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-foreground mt-8 mb-4">
              2. Serviços
            </h2>
            <p>
              A BNU Tech oferece serviços de desenvolvimento web, administração de webmail e
              suporte de T.I remoto. Os termos específicos de cada serviço são definidos em
              contrato próprio firmado entre as partes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-foreground mt-8 mb-4">
              3. Uso do Site
            </h2>
            <p>Você concorda em:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fornecer informações verdadeiras e atualizadas</li>
              <li>Não utilizar o site para fins ilegais ou não autorizados</li>
              <li>Não tentar acessar áreas restritas do site</li>
              <li>Não transmitir vírus ou códigos maliciosos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-foreground mt-8 mb-4">
              4. Propriedade Intelectual
            </h2>
            <p>
              Todo o conteúdo do site, incluindo textos, imagens, logotipos e código, são de
              propriedade da BNU Tech ou de seus licenciadores e estão protegidos por leis de
              propriedade intelectual.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-foreground mt-8 mb-4">
              5. Limitação de Responsabilidade
            </h2>
            <p>
              A BNU Tech não se responsabiliza por danos indiretos, incidentais ou consequenciais
              decorrentes do uso ou impossibilidade de uso do site. Os serviços contratados possuem
              termos específicos definidos em contrato.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-foreground mt-8 mb-4">
              6. Links Externos
            </h2>
            <p>
              Nosso site pode conter links para sites de terceiros. Não nos responsabilizamos pelo
              conteúdo ou práticas de privacidade desses sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-foreground mt-8 mb-4">
              7. Modificações
            </h2>
            <p>
              Reservamo-nos o direito de modificar estes termos a qualquer momento. Alterações
              significativas serão comunicadas através do site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-foreground mt-8 mb-4">
              8. Contato
            </h2>
            <p>Para dúvidas sobre estes termos:</p>
            <ul className="list-none space-y-2 mt-4">
              <li><strong>E-mail:</strong> [EMAIL]</li>
              <li><strong>Telefone:</strong> [WHATSAPP]</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-foreground mt-8 mb-4">
              9. Foro
            </h2>
            <p>
              Estes termos são regidos pelas leis brasileiras. Fica eleito o foro da comarca de
              [CIDADE/UF] para dirimir quaisquer controvérsias.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <a href="/" className="text-primary hover:underline">
            ← Voltar para a página inicial
          </a>
        </div>
      </div>
    </main>
  );
};

export default Terms;
