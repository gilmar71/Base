import { GetServerSideProps } from 'next';
import { Layout } from 'components/layout';
import { GetProducts, ProductProps } from 'src/services/shop/get';
import { Banner } from 'components/sections/home/banner';

interface HomeProps {
  products: ProductProps;
  banners: Banner[];
}

export default function HomePage({ products }: HomeProps) {
  const banners: Banner[] = [
    {
      id: 1,
      image: '/images/home-banner.jpg',
    },
  ];
  return (
    <Layout logo={'/images/logo.png'}>
      <Banner listBanners={banners} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // const banners = await api.get<Banner[]>(`/component/banners/GetAll`);
  const responseProducts = await GetProducts(ctx);

  // if (!banners || !responseProducts) {
  //   return {
  //     props: {
  //       banner: [],
  //     },
  //   };
  // }

  return {
    props: {
      // banners: banners.data,
      products: responseProducts,
    },
  };
};
