import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { api } from 'src/services/api';

import { Layout } from 'components/layout';

interface HomePageProps {}

export default function HomePage() {
  const router = useRouter();

  return (
    <Layout>
      {/* <Head>
        <title>{content.head.pageTitle}</title>
        <meta name="description" content={content.head.metaDescription} />
        <meta itemProp="description" content={content.head.metaDescription} />
        <meta
          name="twitter:description"
          content={content.head.metaDescription}
        />
        <meta name="og:description" content={content.head.metaDescription} />
        <meta property="og:title" content={content.head.pageTitle} />
        <meta
          property="og:url"
          content={'https://autosombra.com.br' + router.pathname}
        />
        <link
          rel="canonical"
          href={'https://autosombra.com.br' + router.pathname}
        />
      </Head> */}
    </Layout>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const depositions = await api.get<IDeposition[]>(
//     `/component/depoimentos/GetAll`
//   );

//   const content = await api.get<PageContent>(`/pages/home`);

//   const banners = await api.get<Banner[]>(`/component/banners/home`);

//   if (!banners || !content || !customers || !depositions || null) {
//     return {
//       props: {
//         banners: null,
//         notFound: true,
//       },
//     };
//   }

//   return {
//     props: {
//       banners: banners.data,
//       content: content.data,
//       depositions: depositions.data,
//     },
//   };
// };
