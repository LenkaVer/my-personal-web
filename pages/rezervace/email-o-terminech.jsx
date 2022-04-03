import Head from 'next/head';
import NewsletterSection from '../../components/reservation/NewsletterSection';
import Layout from './../../components/layout/Layout';

const NewsletterForm = () => {
  return (
    <>
      <Head>
        <title>Email o termínech</title>
        <meta name="description" content="Watsu terapie Lenka Verzichová" />
      </Head>
      <Layout>
        <NewsletterSection />
      </Layout>
    </>
  );
};

export default NewsletterForm;
