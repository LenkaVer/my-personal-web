import Head from 'next/head';
import GdprSection from './../../components/gdpr/GdprSection';
import Layout from './../../components/layout/Layout';

const Gdpr = () => {
  return (
    <>
      <Head>
        <title>Ochrana osobních údajů</title>
        <meta name="description" content="Watsu terapie Lenka Verzichová" />
      </Head>
      <Layout>
        <GdprSection />
      </Layout>
    </>
  );
};

export default Gdpr;
