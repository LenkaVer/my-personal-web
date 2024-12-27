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
        <title>Watsu České Budějovice a Praha</title>
        <meta
          name='description'
          content='Objevte léčivou sílu Watsu®. Terapeutická metoda z 80. let spojuje Shiatsu masáž, čínskou medicínu a teplou vodu pro uvolnění, zdraví a hlubokou relaxaci.'
        />
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
    watsu1: 'zJyYk6QVdwj5xZd',
    watsu2: 'bDqXRyKzXexdv3G',
    watsu3: 'Bq3lbMQdoeD1oa4',
    watsu4: 'OykBojw2OeMYG0p',
    watsu5: 'gPyb2AeZveZLd59',
    watsu6: '1GWLz5ej7Qx7vnj',
    watsu7: 'zNrDBaeWxQPyLdV',
    watsu8: 'qAnmrPQ62Qzg1jo',
    watsu9: 'pNE2Bze1dwo31rk',
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
