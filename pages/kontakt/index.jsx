import Head from 'next/head';
import ContactSection from './../../components/contact/ContactSection';
import Layout from './../../components/layout/Layout';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Kontakt</title>
        <meta name="description" content="Watsu terapie Lenka Verzichová" />
      </Head>
      <Layout>
        <ContactSection />
      </Layout>
    </>
  );
};

export default Contact;
