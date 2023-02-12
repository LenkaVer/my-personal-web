import Head from "next/head";
import ContactSection from "./../../components/contact/ContactSection";
import Layout from "./../../components/layout/Layout";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Kontakt</title>
        <meta
          name="description"
          content="Kontakt na watsu terapie v Českých Budějovicích, Lenka Verzichová"
        />
      </Head>
      <Layout>
        <ContactSection />
      </Layout>
    </>
  );
};

export default Contact;
