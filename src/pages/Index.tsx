import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { WhyUs } from '@/components/WhyUs';
import { Process } from '@/components/Process';
import { Portfolio } from '@/components/Portfolio';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>BNU Tech - Desenvolvimento Web, Webmail e Suporte de T.I Remoto</title>
        <meta
          name="description"
          content="A BNU Tech oferece desenvolvimento de websites, landing pages, administração de webmail e suporte de T.I remoto. Soluções digitais sob medida para seu negócio."
        />
        <meta
          name="keywords"
          content="desenvolvimento web, criação de sites, landing page, webmail, suporte TI remoto, tecnologia, BNU Tech"
        />
        <link rel="canonical" href="https://www.bnutech.com.br" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="BNU Tech - A tecnologia na palma da sua mão" />
        <meta
          property="og:description"
          content="Desenvolvimento de websites, administração de webmail e suporte de T.I remoto. Soluções digitais sob medida."
        />
        <meta property="og:url" content="https://www.bnutech.com.br" />
        <meta property="og:site_name" content="BNU Tech" />
        <meta property="og:locale" content="pt_BR" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BNU Tech - A tecnologia na palma da sua mão" />
        <meta
          name="twitter:description"
          content="Desenvolvimento de websites, administração de webmail e suporte de T.I remoto."
        />

        {/* Schema.org Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'BNU Tech',
            description: 'Empresa de tecnologia especializada em desenvolvimento web, administração de webmail e suporte de T.I remoto.',
            url: 'https://www.bnutech.com.br',
            telephone: '[WHATSAPP]',
            email: '[EMAIL]',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '[ENDEREÇO]',
              addressCountry: 'BR',
            },
            priceRange: '$$',
            openingHours: 'Mo-Fr 09:00-18:00',
            sameAs: [],
          })}
        </script>
      </Helmet>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
