import Head from 'next/head';
import { useRouter } from 'next/router';

import { Layout } from 'components/layout';
import { Container } from 'components/data/container';

import * as S from 'styles/pages/notfound';

export default function Page404() {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>Página não encontrada</title>
        <meta name="description" content="404 | Página não encontrada" />
        <meta itemProp="description" content="404 | Página não encontrada" />
        <meta
          name="twitter:description"
          content="404 | Página não encontrada"
        />
        <meta name="og:description" content="404 | Página não encontrada" />
        <meta property="og:title" content="Página não encontrada" />
        <meta property="og:url" content={router.query.pathname?.toString()} />
        <link rel="canonical" href={router.pathname} />
      </Head>

      <S.NotFound>
        <Container>
          <p className="paragraph-1-ndBold">Página não encontrada ;(</p>
        </Container>
      </S.NotFound>
    </Layout>
  );
}
