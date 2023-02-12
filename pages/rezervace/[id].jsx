import Head from "next/head";
import { useRouter } from "next/router";
import Form from "./../../components/reservation/Form";
import { loadImageData } from "./../../functions/imageLoader";
import Layout from "./../../components/layout/Layout";

const ReservationForm = ({ images }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Rezervační formulář</title>
        <meta name="description" content="Rezervační formulář watsu terapií" />
      </Head>
      <Layout>{id && <Form termId={id} images={images} />}</Layout>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const imagesToLoad = {
    voucher: "JZdL08wJgejEVgx",
  };
  const images = {};

  for (const [name, hash] of Object.entries(imagesToLoad)) {
    images[name] = await loadImageData(hash);
  }

  return {
    props: {
      images,
    },
  };
}

export default ReservationForm;
