This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## About application

### Três formas de pegar informações
- Client-side
 - quando não precisa de indexação
 - informação carregada através de uma ação do usuário
 - EXEMPLO
   - Post do blog
   - Conteúdo (SSG)
   - Comentários (Client-side)
- Server-side
 - quando precisa de indexação
 - dados dinâmicos da sessção do usuário
- Static Side Generation
 - Gerar uma página e compartilhar com todos, página de produto, blog, etc... 
 - páginas que precisam de SEO

## Comments

##### Lucas Cafieiro Alves Bittencourt
- Aproveitando para agregar um pouco mais de informação, em relação ao seu comentário sobre fazer deploy em Vercel. Muitas vezes quando as pessoas falam sobre o Next.js, amarram muito na questão do deploy com Vercel, mas é possível fazer containerização e deploy de Next.js em qualquer plataforma que tenha suporte a rodar um servidor Node. No meu caso, eu trabalho com GCP, e só precisa de algumas configurações bem simples para colocar o app para rodar no App Engine ou configurá-lo em um container no Cloud Run.

- Como a dúvida já foi muito bem respondida, espero que essa pequena informação possa agregar algo para quem ainda está aprendendo sobre o mundo do deploy e do DevOps.