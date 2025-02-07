# Clinica Neopets next

LandingPage recriada em nextjs para a Clinica Neopets.

## Acesse o site para ver resultado
[Clinica NeoPets](https://clinicaneopets.com.br/)

## Estrutura do Projeto

```plaintext
.
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.js
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── public/
├── README.md
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── AgendeAtendimento.tsx
│   │   │   ├── Carousel.tsx
│   │   │   ├── FloatIcon.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Header.tsx
│   │   │   └── NossosServicos.tsx
│   │   │   └── PorqueEscolher.tsx
│   │   │   └── QuemSomos.tsx
│   │   │   └── Seguir.tsx
│   │   ├── helpers/
│   │   │   └── imageLoader.ts
│   │   ├── styles/
│   │   │   └── Carrousel.css
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │   └── icon.svg
├── tailwind.config.ts
└── tsconfig.json
```

## Instalação

Para instalar as dependências do projeto, execute:

```
npm install
```

### Scripts Disponíveis

No diretório do projeto, você pode executar:

`npm install`

Instala as dependências do projeto.

`npm run dev`

Executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para ver no navegador.

`npm run build`

Compila o aplicativo para produção na pasta `build`.

`npm run start`

Inicia o servidor de produção.

`npm run lint`

Executa o linter para verificar problemas no código.

### Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Swiper](https://swiperjs.com/)
- [Vercel](https://vercel.com/)

### Estrutura de Componentes

<span style="color: blue;">⚛</span> `AgendeAtendimento.tsx`

Componente para exibir como agendar seu atendimento.

<span style="color: blue;">⚛</span> `Carousel.tsx`

Componente para exibir um carrossel de imagens.

<span style="color: blue;">⚛</span> `FloatIcon.tsx`

Componente para exibir um link flutuante do Whatsapp.

<span style="color: blue;">⚛</span> `Footer.tsx`

Componente para exibir o footer.

<span style="color: blue;">⚛</span> `Header.tsx`

Componente para exibir o Header.

<span style="color: blue;">⚛</span> `NossosServicos.tsx`

Componente para exibir os Nossos Serviços.

<span style="color: blue;">⚛</span> `PorqueEscolher.tsx`

Componente para exibir o porque escolher a NeoPets.

<span style="color: blue;">⚛</span> `QuemSomos.tsx`

Componente para exibir quem somos.

<span style="color: blue;">⚛</span> `Seguir.tsx`

Componente para exibir um botão de seguir abaixo do carrossel.

### Licença

Este projeto está licenciado sob a Licença MIT.