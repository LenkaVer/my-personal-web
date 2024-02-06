import Head from 'next/head';
import ContactSection from './../../components/contact/ContactSection';
import Layout from './../../components/layout/Layout';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Kontakt Watsu Lenka Verzichová</title>
        <meta
          name='description'
          content='Kontaktujte Lenku Verzichovou, certifikovanou terapeutku Watsu®. Získejte informace o terapii a rezervujte si svůj relaxační zážitek ve vodě. S odbornou péčí a profesionalitou.'
        />
      </Head>
      <Layout>
        <ContactSection />
      </Layout>
    </>
  );
};

export default Contact;
