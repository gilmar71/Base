import { useEffect } from 'react';

import Head from 'next/head';
import { AppProps } from 'next/app';

// import AOS from 'aos';

import SwiperCore, {
  Thumbs,
  Virtual,
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from 'swiper';

import { api, apiURL, pageUrl } from 'src/services/api';

import { GlobalStyle } from '../styles/global';

import 'aos/dist/aos.css';

import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import '../styles/reset.css';
import '../styles/fonts.css';

SwiperCore.use([Thumbs, Virtual, Autoplay, Pagination, Navigation, EffectFade]);

const App = ({ Component, pageProps }: AppProps) => {
  // useEffect(() => {
  //   AOS.init({});
  // }, []);

  return (
    <>
      <Head>
        <title>Base</title>
        <link rel="canonical" href={pageUrl} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Base description." />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        <meta name="referrer" content="origin" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        <meta name="author" content="Codie" />
        <meta name="copyright" content="Codie" />

        <meta name="rating" content="general" />
        <meta name="keyboard-shortcuts-preference" content="all" />

        <meta name="location" content="Londrina, Paraná" />
        <meta name="distribution" content="global" />
        <meta name="language" content="portuguese, PT" />
        <meta name="content-language" content="pt-br" />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
      </Head>

      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
