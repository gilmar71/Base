import { GetServerSideProps } from 'next';

import { HeadComponent } from 'codieweb/dist/cjs/components/data/head';

import { painelURL, pathsApi } from 'src/services/api';
import { getHomeData } from 'src/api-requests/home';
import { IPageInformations } from 'src/interfaces/IPageInformations';

import { Layout } from 'components/layout';

interface IHomePage {}

export default function HomePage() {
  return <Layout></Layout>;
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const { homeData } = await getHomeData();

//   return {
//     props: {
//       pageContent: homeData,
//     },
//   };
// };
