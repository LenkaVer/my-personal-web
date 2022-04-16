import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang={'cs'}>
      <Head>
        <link
          rel="preconnect"
          href="https://watsuadmin.verzichova.cz"
          crossOrigin
        />
        <link rel="dns-prefetch" href="https://watsuadmin.verzichova.cz" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export default Document;
