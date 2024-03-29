import Head from 'next/head';
import NewsletterSection from '../../components/reservation/NewsletterSection';
import { loadImageData } from './../../functions/imageLoader';
import Layout from './../../components/layout/Layout';

const NewsletterForm = ({ images }) => {
  return (
    <>
      <Head>
        <title>Email o termínech</title>
        <meta
          name='description'
          content='Přihlaste se k odběru emailu a buďte informováni o nových termínech terapie Watsu®. Vyplňte formulář níže a získejte pravidelné upozornění. '
        />
      </Head>
      <Layout>
        <NewsletterSection images={images} />
      </Layout>
    </>
  );
};

export async function getStaticProps({ params }) {
  const imagesToLoad = {
    voucher: 'JZdL08wJgejEVgx',
  };
  const images = {};

  for (const [name, hash] of Object.entries(imagesToLoad)) {
    images[name] = await loadImageData(hash);
  }

  return {
    props: {
      images,
    },
  };
}

export default NewsletterForm;
