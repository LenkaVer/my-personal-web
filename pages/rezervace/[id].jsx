import Head from 'next/head';
import { useRouter } from 'next/router';
import Form from './../../components/reservation/Form';
import Layout from './../../components/layout/Layout';

const ReservationForm = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Rezervační formulář</title>
        <meta name="description" content="Watsu terapie Lenka Verzichová" />
      </Head>
      <Layout>{id && <Form termId={id} />}</Layout>
    </>
  );
};

export default ReservationForm;
