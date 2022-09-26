import { GetServerSideProps } from 'next';
import { Layout } from 'components/layout';
import { GetProducts, ProductProps } from 'src/services/shop/get';

interface HomeProps {
  products: ProductProps;
}

export default function HomePage({ products }: HomeProps) {
  return <Layout></Layout>;
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
