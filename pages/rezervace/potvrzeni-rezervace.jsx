import Head from 'next/head';
import ReservationConfirmSection from '../../components/reservation/ReservationConfirmSection';
import Layout from './../../components/layout/Layout';

const ReservationConfirm = () => {
  return (
    <>
      <Head>
        <title>Potvrzení rezervace</title>
        <meta name="description" content="Watsu terapie Lenka Verzichová" />
      </Head>
      <Layout>
        <ReservationConfirmSection />
      </Layout>
    </>
  );
};

export default ReservationConfirm;
