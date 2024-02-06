import Head from 'next/head';
import ReservationTermsSection from './../../components/reservation/ReservationTermsSection';
import { loadImageData } from './../../functions/imageLoader';
import Layout from './../../components/layout/Layout';

const Reservation = ({ images }) => {
  return (
    <>
      <Head>
        <title>Rezervovat termín</title>
        <meta
          name='description'
          content='Prohlédněte si nabídku dostupných termínů terapie Watsu® v Baby Centru Šikulka v Českých Budějovicích.  Rezervujte si svůj čas pro relaxaci a regeneraci'
        />
      </Head>
      <Layout>
        <ReservationTermsSection images={images} />
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

export default Reservation;
