const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold font-display mb-8">
          Política de Privacidade
        </h1>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-muted-foreground">
          <p className="text-foreground">
            <strong>Última atualização:</strong> Janeiro de 2025
          </p>

          <section>
            <h2 className="text-xl font-bold font-display text-foreground mt-8 mb-4">
              1. Informações que Coletamos
            </h2>
            <p>
              A BNU Tech coleta informações pessoais que você nos fornece diretamente, incluindo:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Número de telefone</li>
              <li>Informações sobre o projeto ou serviço solicitado</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-foreground mt-8 mb-4">
              2. Como Usamos suas Informações
            </h2>
            <p>Utilizamos as informações coletadas para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder às suas solicitações de contato e orçamento</li>
              <li>Prestar os serviços contratados</li>
              <li>Enviar comunicações relevantes sobre nossos serviços</li>
              <li>Melhorar nosso site e serviços</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-foreground mt-8 mb-4">
              3. Compartilhamento de Dados
            </h2>
            <p>
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros,
              exceto quando necessário para prestação dos serviços contratados ou quando exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-foreground mt-8 mb-4">
              4. Segurança dos Dados
            </h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas
              informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-foreground mt-8 mb-4">
              5. Seus Direitos (LGPD)
            </h2>
            <p>De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos ou desatualizados</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Revogar o consentimento dado</li>
              <li>Obter informações sobre compartilhamento de dados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-foreground mt-8 mb-4">
              6. Cookies
            </h2>
            <p>
              Utilizamos cookies essenciais para o funcionamento do site. Você pode configurar
              seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-foreground mt-8 mb-4">
              7. Contato
            </h2>
            <p>
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
            </p>
            <ul className="list-none space-y-2 mt-4">
              <li><strong>E-mail:</strong> [EMAIL]</li>
              <li><strong>Telefone:</strong> [WHATSAPP]</li>
            </ul>
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

export default PrivacyPolicy;
