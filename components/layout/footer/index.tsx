import Link from 'next/link';

import { NextImage } from 'codieweb/dist/cjs/components/data/next-image';
import { BoxSocials } from 'codieweb/dist/cjs/components/data/box-socials';

import { pathsApi } from 'src/services/api';

import { Card } from 'components/cards';
import { CodieIcon } from 'components/icons';
import { Error, Container } from 'components/data';

import {
  emailLink,
  youtubeLink,
  facebookLink,
  linkedinLink,
  instagramLink,
  tikTokLink,
} from 'src/services/social-links';

import * as S from './styles';

export function FooterComponent() {
  return (
    <Error name="footer">
      <S.Footer>
        <Container>
          <Link className="logo" href="/" aria-label="logomarca da empresa">
            <NextImage
              pathsApi={pathsApi}
              src={'/images/logo-new-2.webp'}
              alt={'logomarca'}
            />
          </Link>

          <ul className="box-links">
            <li>
              <Card type="contact" data={{ url: '/', adress: 'Home' }} />
            </li>

            <li>
              <Card
                type="contact"
                data={{ url: '/sobre', adress: 'Sobre nós' }}
              />
            </li>

            <li>
              <Card
                type="contact"
                data={{ url: '/industria', adress: 'A indústria' }}
              />
            </li>

            <li>
              <Card
                type="contact"
                data={{ url: '/blog', adress: 'Comunidade' }}
              />
            </li>

            <li>
              <Card
                type="contact"
                data={{ url: '/portifolio', adress: 'Portifólio' }}
              />
            </li>

            <li>
              <Card
                type="contact"
                data={{
                  url: '/nossos-distribuidores',
                  adress: 'Nossos distribuidores',
                }}
              />
            </li>

            <li>
              <Card
                type="contact"
                data={{
                  url: '/seja-um-distribuidor',
                  adress: 'Seja um distribuidor',
                }}
              />
            </li>

            <li>
              <Card
                type="contact"
                data={{ url: '/contato', adress: 'Contato' }}
              />
            </li>

            <li>
              <Card
                type="contact"
                data={{
                  url: 'https://www.papelparamechas.com.br/',
                  adress: 'Loja',
                }}
              />
            </li>

            <li>
              <Card
                type="contact"
                data={{
                  url: '/politicas-de-privacidade',
                  adress: 'Políticas de privacidade',
                }}
              />
            </li>
          </ul>

          <BoxSocials
            srcLinks={{
              email: emailLink,
              youtube: youtubeLink,
              facebook: facebookLink,
              instagram: instagramLink,
              linkedin: linkedinLink,
              tiktok: tikTokLink,
            }}
            boxStyles={{
              svgWidth: '20px',
              svgColor: '#fff',
              svgHoverColor: 'var(--bt-linear-gradient-1)',
            }}
          />
        </Container>

        <Link href="https://codie.digital/" className="codie-logo">
          <CodieIcon />
        </Link>
      </S.Footer>
    </Error>
  );
}
