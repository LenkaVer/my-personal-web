import Head from 'next/head';
import CardsSection from './../../components/about-watsu/CardsSection';
import WaveAnimation from './../../components/about-watsu/WaveAnimation';
import Layout from './../../components/layout/Layout';

const AboutWatsu = () => {
  return (
    <>
      <Head>
        <title>O watsu terapii</title>
        <meta
          name='description'
          content='Objevte účinky a průběh terapie metody Watsu®. Zjistěte, zda je vhodná pro vás, a prohlédněte si kontraindikace. Připravte se na relaxaci a uvolnění ve vodě.'
        />
      </Head>
      <Layout>
        <CardsSection />
        <WaveAnimation />
      </Layout>
    </>
  );
};

export default AboutWatsu;
