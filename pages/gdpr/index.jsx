import Head from 'next/head';
import GdprSection from './../../components/gdpr/GdprSection';
import Layout from './../../components/layout/Layout';

const Gdpr = () => {
  return (
    <>
      <Head>
        <title>Ochrana osobních údajů</title>
        <meta
          name='description'
          content='Zásady ochrany osobních údajů na webu watsu.verzichova.cz. Provozovatel Ing. Lenka Verzichová zaručuje správné zacházení s osobními údaji v souladu s platnými právními předpisy. Uživatelé mají právo na přístup, nápravu a ochranu svých údajů.'
        />
      </Head>
      <Layout>
        <GdprSection />
      </Layout>
    </>
  );
};

export default Gdpr;
