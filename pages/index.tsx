import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { api } from 'src/services/api';

import { Layout } from 'components/layout';
import { Banner } from 'components/sections/home/banner';
import { DatePicker } from 'components/sections/home/datepicker';
import { DatePickerTeste } from 'components/sections/home/datepickerTest';
import { Dropdown } from 'components/sections/home/dropdown';

interface HomePageProps {}

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <Dropdown />
    </>
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
