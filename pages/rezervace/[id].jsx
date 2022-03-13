import Head from 'next/head';
import { useRouter } from 'next/router';
import Form from './../../components/reservation/Form';

const ReservationForm = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Rezervační formulář</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main>
        <Form termId={id} />
      </main>
    </>
  );
};

export default ReservationForm;