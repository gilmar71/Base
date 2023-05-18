import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { api } from 'src/services/api';

import { Layout } from 'components/layout';

interface IHomePage {}

export default function HomePage() {
  const router = useRouter();

  return <Layout></Layout>;
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const responseHomeData = await api.get<IPageInformations>(`pages/home`);

//   return {
//     props: {
//       homeData: responseHomeData.data,
//     },
//   };
// };
