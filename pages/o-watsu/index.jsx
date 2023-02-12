import Head from "next/head";
import CardsSection from "./../../components/about-watsu/CardsSection";
import WaveAnimation from "./../../components/about-watsu/WaveAnimation";
import Layout from "./../../components/layout/Layout";

const AboutWatsu = () => {
  return (
    <>
      <Head>
        <title>O watsu</title>
        <meta name="description" content="O watsu" />
      </Head>
      <Layout>
        <CardsSection />
        <WaveAnimation />
      </Layout>
    </>
  );
};

export default AboutWatsu;
