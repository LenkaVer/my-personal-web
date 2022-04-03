import '../styles/settings/globals.scss';
import Head from 'next/head';
import SimpleReactLightbox from 'simple-react-lightbox';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      window.scrollTop = 0;
      window.document.body.scrollTop = 0;
      window.document.documentElement.scrollTop = 0;
      window.scrollTo(0, 0);
    });
  }, [router]);

  return (
    <>
      <Head>
        <meta name="description" content="Watsu terapie Lenka Verzichová" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <SimpleReactLightbox>
        <AnimatePresence
          exitBeforeEnter
          onExitComplete={() => {
            window.scrollTop = 0;
            window.document.body.scrollTop = 0;
            window.document.documentElement.scrollTop = 0;
            window.scrollTo(0, 0);
          }}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </SimpleReactLightbox>
    </>
  );
};

export default MyApp;
