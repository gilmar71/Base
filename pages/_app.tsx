import Head from 'next/head';
import '../styles/reset.css';
import '../styles/fonts.css';

import { GlobalStyle } from '../styles/global';
import HomePage from 'pages';

const App = () => {
  return (
    <>
      <Head>
        <title>Base</title>
        <link rel="canonical" href="https://mikrokosmos.vercel.app/" />
        <link rel="icon" href="/favicon.ico" />

        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Mikrokosmos description." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="referrer" content="origin" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="author" content="Codie" />
        <meta name="rating" content="general" />
        <meta name="keyboard-shortcuts-preference" content="all"></meta>
      </Head>

      <GlobalStyle />
      <HomePage />
    </>
  );
};

export default App;
