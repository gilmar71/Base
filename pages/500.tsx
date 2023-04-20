import Head from 'next/head';
import { useRouter } from 'next/router';

import { Layout } from 'components/layout';
import { Container, ButtonComponent } from 'components/data';

import * as S from 'styles/pages/notfound';

export default function Page500() {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>Página não encontrada</title>
        <meta name="description" content="500 | Página não encontrada" />
        <meta itemProp="description" content="500 | Página não encontrada" />
        <meta
          name="twitter:description"
          content="500 | Página não encontrada"
        />
        <meta name="og:description" content="500 | Página não encontrada" />
        <meta property="og:title" content="Página não encontrada" />
        <meta property="og:url" content={router.query.pathname?.toString()} />
        <link rel="canonical" href={router.pathname} />
      </Head>

      <S.NotFound>
        <Container>
          <p className="paragraph-1-ndBold">
            Houve um problema no carregamento da página ;(
          </p>

          <p className="paragraph-1-ndBold">
            clique no botão abaixo ou tente recarregar a página
          </p>

          <ButtonComponent text={'Recarregar'} href="/" />
        </Container>
      </S.NotFound>
    </Layout>
  );
}
