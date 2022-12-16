import Head from 'next/head';

import '../styles/reset.css';
import '../styles/fonts.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import 'swiper/css/effect-coverflow';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { GlobalStyle } from '../styles/global';
import { AppProps } from 'next/app';
import { useEffect } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
      <Head>
        <title>Móveis Belo</title>
        <link rel="canonical" href="" />
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
      <Component {...pageProps} />
    </>
  );
};

export default App;
