# Portfolio — Ronald | Backend Developer · Python & FastAPI

Portfolio profissional moderno com React + Vite + TailwindCSS + Framer Motion.

## Stack

- **React 18** + **Vite 5**
- **TailwindCSS 3**
- **Framer Motion** — animações suaves
- **React Icons** — ícones técnicos

## Como rodar localmente

```bash
npm install
npm run dev
```

## Build para produção

```bash
npm run build
```

## Deploy na Vercel

### Opção 1 — Via Vercel CLI
```bash
npm i -g vercel
vercel
```

### Opção 2 — Via GitHub (recomendado)
1. Suba o projeto para um repositório GitHub
2. Acesse [vercel.com](https://vercel.com) e clique em **New Project**
3. Importe o repositório
4. Configurações automáticas:
   - **Framework**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Clique em **Deploy** ✓

O arquivo `vercel.json` já está configurado para SPA routing.

## Estrutura

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── LoadingScreen.jsx
│   └── Footer.jsx
├── sections/
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Stack.jsx
│   ├── Projects.jsx
│   ├── Services.jsx
│   ├── Experience.jsx
│   └── Contact.jsx
├── hooks/
│   └── useInView.js
├── App.jsx
├── main.jsx
└── index.css
```

## Personalização

- **Nome/dados pessoais**: edite os textos em cada seção
- **Email/links sociais**: `Contact.jsx` e `Footer.jsx`
- **WhatsApp**: `Contact.jsx` → altere o link `wa.me/55xx`
- **Projetos reais**: edite o array `projects` em `Projects.jsx`
- **Cores principais**: `tailwind.config.js`
