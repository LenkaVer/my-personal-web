import Head from 'next/head';
import IntroSection from './../components/homepage/IntroSection';
import ReservationBanner from './../components/homepage/ReservationBanner';
import GallerySection from './../components/homepage/GallerySection';
import Layout from './../components/layout/Layout';
import { loadImageData } from './../functions/imageLoader';

const Home = ({ images }) => {
  return (
    <>
      <Head>
        <title>Watsu České Budějovice</title>
        <meta name="description" content="Watsu terapie Lenka Verzichová" />
      </Head>
      <Layout>
        <IntroSection images={images} />
        <ReservationBanner />
        <GallerySection images={images} />
      </Layout>
    </>
  );
};

export async function getStaticProps({ params }) {
  const imagesToLoad = {
    introSectionFoto: '2zx97jeYjQdOXgW',
    watsu1: 'ov51DrwaBeyJLWp',
    watsu2: 'vbJZMNQgrejmaWG',
    watsu3: 'WyGn9PQMAQArdMx',
    watsu4: 'MJAq6NKopwRpWj7',
    watsu5: '8B34vrwOWwlyLzD',
    watsu6: 'rXOza7QPdQdZEJ3',
    watsu7: 'mxBN5Peqme1Z2nG',
    watsu8: 'O6dpDGQ4qKB0MYZ',
    watsu9: 'xJmM3GQE6Kp2Z4a',
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

export default Home;
