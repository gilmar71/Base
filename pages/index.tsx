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
  const responseProducts = await GetProducts(ctx);

  return {
    props: {
      products: responseProducts,
    },
  };
};
