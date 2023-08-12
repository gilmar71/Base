import Head from 'next/head';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

// import AOS from 'aos';

import { ThemeProvider } from 'src/contexts/theme';
import { LoaderOnRouteChange } from 'src/contexts/route';

import '../styles/reset.css';
import '../styles/fonts.css';

import { GlobalStyle } from '../styles/global';

// import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';

import SwiperCore, {
  Thumbs,
  Virtual,
  Autoplay,
  Mousewheel,
  EffectFade,
  Navigation,
  Pagination,
  EffectCoverflow,
} from 'swiper';
import { pathsApi, siteUrl } from 'src/services/api';

SwiperCore.use([
  Thumbs,
  Virtual,
  Autoplay,
  Pagination,
  Navigation,
  Mousewheel,
  EffectFade,
  EffectCoverflow,
]);

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  // useEffect(() => {
  //   AOS.init({});
  // }, []);
  return (
    <ThemeProvider>
      <Head>
        <title>{pathsApi.projectName}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={siteUrl + router.asPath} />
        <meta property="og:url" content={siteUrl + router.asPath} />
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

        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:type" content="image/jpg" />

        <meta property="twitter:domain" content={siteUrl} />
        <meta property="twitter:url" content={siteUrl + router.asPath} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <GlobalStyle />

      <LoaderOnRouteChange />

      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
