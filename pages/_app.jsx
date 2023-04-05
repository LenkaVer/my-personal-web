import '../styles/settings/globals.scss';
import Head from 'next/head';

import { useRouter } from 'next/router';
import Script from 'next/script';
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
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id='gtag-script' strategy='lazyOnload'>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>

      <Head>
        <meta name='description' content='Watsu terapie Lenka Verzichová' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicon/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/favicon/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <meta name='msapplication-TileColor' content='#603cba' />
        <meta name='theme-color' content='#ffffff' />
      </Head>

      <AnimatePresence mode='wait'>
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
};

export default MyApp;
