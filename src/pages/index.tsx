import { GetServerSideProps, GetStaticProps } from 'next'
import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';
import styles from './home.module.scss';


/**
 * Três formas de pegar informações
 * - Client-side
 *  - quando não precisa de indexação
 *  - informação carregada através de uma ação do usuário
 *  - EXEMPLO
 *    - Post do blog
 *    - Conteúdo (SSG)
 *    - Comentários (Client-side)
 * - Server-side
 *  - quando precisa de indexação
 *  - dados dinâmicos da sessção do usuário
 * - Static Side Generation
 *  - Gerar uma página e compartilhar com todos, página de produto, blog, etc... 
 *  - páginas que precisam de SEO
 */
interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({product}: HomeProps) {
  console.log(product);

  return (
    <div className="">
      <Head>
        <title>Home | ig.news</title>
      </Head>
      
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> World</h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>

          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt='girl coding' />
      </main>
    </div>
  )
}



//export const getServerSideProps: GetServerSideProps = async () => {
export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1KKCDCGERzX8Y3EofmCyJCw0', {
    expand: ['product']
  });

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  }
  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24,
  }
}