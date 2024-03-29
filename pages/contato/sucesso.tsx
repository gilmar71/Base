import Head from 'next/head';

import { useRouter } from 'next/router';

import { Button } from 'codieweb/dist/cjs/components/data/simple-button';

import { Layout } from 'components/layout';

import { Container } from 'components/data/';

import * as S from 'styles/pages/success';

export default function SuccessPage() {
  const { query } = useRouter();
  const router = useRouter();
  return (
    <Layout noBg>
      <Head>
        <title>Sucesso</title>
        <meta name="description" content="Sucesso" />
        <meta itemProp="description" content="Sucesso" />
        <meta name="twitter:description" content="Sucesso" />
        <meta name="og:description" content="Sucesso" />
        <meta property="og:title" content="Sucesso" />
        <meta property="og:url" content={router.query.pathname?.toString()} />
        <link rel="canonical" href={router.pathname} />
      </Head>

      <S.SuccessPage>
        <Container>
          <h2 className="title-4-ndBold">Contato enviado!</h2>

          <p className="paragraph-1-ndMedium">
            Obrigado {query.name} pelo contato!
          </p>

          <Button
            buttonData={{
              hasBg: true,
              text: 'Voltar',
              url: '/',
            }}
          />
        </Container>
      </S.SuccessPage>
    </Layout>
  );
}
