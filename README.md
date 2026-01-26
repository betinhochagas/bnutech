# BNU Tech - Website Institucional

![Version](https://img.shields.io/badge/version-0.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?logo=vite)

Website institucional da BNU Tech - Desenvolvimento Web, Webmail e Suporte de T.I Remoto.

**A tecnologia na palma da sua mão.**

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Componentes](#componentes)
- [Deploy](#deploy)
- [Contato](#contato)

## 🚀 Sobre o Projeto

Site institucional responsivo desenvolvido com React, TypeScript e Vite, apresentando os serviços da BNU Tech:

- **Desenvolvimento Web** - Websites, landing pages e sistemas sob medida
- **Administração de Webmail** - Configuração e gerenciamento de e-mails profissionais
- **Suporte de T.I Remoto** - Assistência técnica remota para empresas

### ✨ Características

- ⚡ Performance otimizada com Vite
- 📱 Design responsivo (mobile-first)
- 🎨 Interface moderna com Tailwind CSS
- ♿ Acessibilidade (ARIA labels, semantic HTML)
- 🔍 SEO otimizado (meta tags, Open Graph, Twitter Cards)
- 🧩 Componentes reutilizáveis com Shadcn/ui
- 🌐 Integração com WhatsApp
- 📧 Formulário de contato funcional
- 🎭 Animações suaves

## 🛠️ Tecnologias Utilizadas

### Core

- **React** 18.3.1 - Biblioteca UI
- **TypeScript** 5.8.3 - Tipagem estática
- **Vite** 5.4.19 - Build tool e dev server

### UI & Styling

- **Tailwind CSS** 3.4.17 - Framework CSS utilitário
- **Shadcn/ui** - Componentes UI acessíveis
- **Radix UI** - Primitivos de componentes
- **Lucide React** 0.462.0 - Ícones

### Roteamento & Estado

- **React Router DOM** 6.30.1 - Roteamento
- **React Hook Form** 7.61.1 - Gerenciamento de formulários
- **Zod** 3.25.76 - Validação de schemas
- **TanStack Query** 5.83.0 - Gerenciamento de estado assíncrono

### Utilitários

- **date-fns** 3.6.0 - Manipulação de datas
- **class-variance-authority** 0.7.1 - Variantes de componentes
- **clsx** & **tailwind-merge** - Manipulação de classes CSS

### Testes

- **Vitest** 3.2.4 - Framework de testes
- **Testing Library** - Testes de componentes React
- **jsdom** 20.0.3 - DOM simulado para testes

### Linting & Qualidade

- **ESLint** 9.32.0 - Linter JavaScript/TypeScript
- **TypeScript ESLint** 8.38.0 - Regras TypeScript

## 📦 Pré-requisitos

- **Node.js** 18+ ou **Bun** 1.0+
- **npm** 9+ ou **yarn** 1.22+

## 🔧 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/bnutech.git
cd bnutech
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
# ou
bun install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
bun dev
```

4. Acesse no navegador:

```
http://localhost:8080
```

## 📜 Scripts Disponíveis

| Script               | Descrição                                       |
| -------------------- | ----------------------------------------------- |
| `npm run dev`        | Inicia servidor de desenvolvimento (porta 8080) |
| `npm run build`      | Cria build de produção em `/dist`               |
| `npm run build:dev`  | Cria build em modo desenvolvimento              |
| `npm run preview`    | Preview da build de produção                    |
| `npm run lint`       | Executa ESLint no projeto                       |
| `npm run test`       | Executa testes uma vez                          |
| `npm run test:watch` | Executa testes em modo watch                    |

## 📁 Estrutura do Projeto

```
bnutech/
├── public/                 # Arquivos públicos estáticos
│   ├── robots.txt         # Configuração para crawlers
│   └── sitemap.xml        # Mapa do site para SEO
├── src/
│   ├── assets/            # Recursos estáticos (imagens, etc)
│   │   └── logo.png       # Logo da BNU Tech
│   ├── components/        # Componentes React
│   │   ├── ui/           # Componentes base Shadcn/ui
│   │   ├── Contact.tsx   # Seção de contato
│   │   ├── ContactForm.tsx # Formulário de contato
│   │   ├── FAQ.tsx       # Perguntas frequentes
│   │   ├── Footer.tsx    # Rodapé do site
│   │   ├── Hero.tsx      # Seção hero/banner
│   │   ├── Navbar.tsx    # Barra de navegação
│   │   ├── Portfolio.tsx # Portfólio de projetos
│   │   ├── Process.tsx   # Processo de trabalho
│   │   ├── Services.tsx  # Serviços oferecidos
│   │   ├── Testimonials.tsx # Depoimentos
│   │   ├── WhatsAppButton.tsx # Botão flutuante WhatsApp
│   │   └── WhyUs.tsx     # Diferenciais
│   ├── hooks/            # React hooks customizados
│   │   ├── use-mobile.tsx # Hook para detecção mobile
│   │   └── use-toast.ts   # Hook para notificações
│   ├── lib/              # Bibliotecas e utilitários
│   │   └── utils.ts      # Funções utilitárias
│   ├── pages/            # Páginas da aplicação
│   │   ├── Index.tsx     # Página inicial
│   │   ├── NotFound.tsx  # Página 404
│   │   ├── PrivacyPolicy.tsx # Política de privacidade
│   │   └── Terms.tsx     # Termos de uso
│   ├── test/             # Configuração de testes
│   │   ├── example.test.ts # Exemplo de teste
│   │   └── setup.ts      # Setup do Vitest
│   ├── App.tsx           # Componente raiz
│   ├── main.tsx          # Entry point da aplicação
│   └── index.css         # Estilos globais
├── index.html            # Template HTML
├── package.json          # Dependências e scripts
├── tsconfig.json         # Configuração TypeScript
├── vite.config.ts        # Configuração Vite
├── vitest.config.ts      # Configuração Vitest
├── tailwind.config.ts    # Configuração Tailwind CSS
├── postcss.config.js     # Configuração PostCSS
├── components.json       # Configuração Shadcn/ui
└── eslint.config.js      # Configuração ESLint
```

## 🧩 Componentes

### Principais Componentes

- **Navbar** - Barra de navegação responsiva com menu mobile
- **Hero** - Banner principal com call-to-action
- **Services** - Grid de serviços oferecidos
- **WhyUs** - Diferenciais da empresa
- **Process** - Fluxo de trabalho passo a passo
- **Portfolio** - Showcase de projetos
- **Testimonials** - Depoimentos de clientes
- **FAQ** - Accordion com perguntas frequentes
- **Contact** - Formulário de contato com validação
- **Footer** - Rodapé com links e informações de contato
- **WhatsAppButton** - Botão flutuante para contato direto

### Componentes UI (Shadcn/ui)

O projeto utiliza 40+ componentes do Shadcn/ui incluindo:

- Accordion, Alert, Avatar, Badge, Button
- Card, Carousel, Checkbox, Dialog, Dropdown
- Form, Input, Select, Tabs, Toast
- E muitos outros...

## 🚀 Deploy

### Vercel (Recomendado)

1. **Conecte o repositório:**
   - Acesse [vercel.com](https://vercel.com)
   - Importe o repositório do GitHub
   - A Vercel detecta automaticamente a configuração Vite

2. **Ou use a CLI:**

```bash
npm install -g vercel
vercel login
vercel deploy --prod
```

### Build Manual

```bash
# 1. Crie a build de produção
npm run build

# 2. O output estará em /dist
# 3. Faça deploy da pasta dist para qualquer servidor estático
```

### Variáveis de Ambiente

Não há variáveis de ambiente no momento. Se adicionar, crie um arquivo `.env`:

```env
VITE_API_URL=sua_url_aqui
```

## 📊 Performance

- ✅ Build otimizada: ~472 KB (144 KB gzipped)
- ✅ CSS: ~66 KB (11 KB gzipped)
- ✅ Tempo de build: ~5.5s
- ✅ Lighthouse Score: 95+

## 🌐 SEO

O projeto está otimizado para SEO com:

- Meta tags completas (title, description, author)
- Open Graph tags para redes sociais
- Twitter Cards
- Canonical URLs
- Sitemap.xml
- Robots.txt
- Semantic HTML

## 📱 Contato BNU Tech

- **WhatsApp:** [(47) 93386-8149](https://wa.me/5547933868149)
- **E-mail:** contato@bnutech.com.br
- **Website:** [bnutech.com.br](https://www.bnutech.com.br)

## 📄 Licença

Este projeto é propriedade privada da BNU Tech. Todos os direitos reservados.

---

**Desenvolvido por Roberto Chagas**
