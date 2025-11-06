import Head from 'next/head';
import TermsSection from '../../components/terms/termsSection';
import Layout from '../../components/layout/Layout';

const Terms = () => {
  return (
    <>
      <Head>
        <title>Obhodní podmínky Watsu Lenka Verzichová</title>
        <meta
          name='description'
          content='Obchodní podmínky pro služby Watsu – jasně, přehledně a s důrazem na vaše práva a povinnosti při rezervaci a využívání terapií.'
        />
      </Head>
      <Layout>
        <TermsSection />
      </Layout>
    </>
  );
};

export default Terms;
