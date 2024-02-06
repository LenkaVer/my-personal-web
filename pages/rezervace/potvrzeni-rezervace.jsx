import Head from 'next/head';
import ReservationConfirmSection from '../../components/reservation/ReservationConfirmSection';
import Layout from './../../components/layout/Layout';

const ReservationConfirm = () => {
  return (
    <>
      <Head>
        <title>Potvrzení rezervace</title>
        <meta
          name='description'
          content='Potvrzení rezervace pro terapii Watsu®. Vaše rezervace byla úspěšně zaznamenána. Těšíme se na setkání s vámi ve Baby Centru Šikulka v Českých Budějovicích.'
        />
      </Head>
      <Layout>
        <ReservationConfirmSection />
      </Layout>
    </>
  );
};

export default ReservationConfirm;
