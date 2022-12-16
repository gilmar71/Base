import { ButtonComponent } from 'components/data/button';
import { Container } from 'components/data/container';
import { NextImage } from 'components/data/NextImage';
import Link from 'next/link';
import { CodieLogo, PhoneIcon, PinIcon } from 'public/icons/icons';
import { Services, SiteMap } from './data';

import * as S from './styles';

export function FooterComponent() {
  return (
    <S.Footer>
      <Container>
        <div className="box-footer">
          <div className="box-logo">
            <Link href="/" className="logo">
              <NextImage src="/images/logo.webp" alt="logomarca" />
            </Link>

            <span className="title-6-nhdisplaylight">
              Soluções completas em automação industrial e energia solar
            </span>
          </div>

          <div className="site-map navigation">
            <h1 className="title-10-nhdisplaybold">Mapa do site</h1>
            <ul>
              {SiteMap.map(({ id, title, href }) => {
                return (
                  <li key={id}>
                    <Link href={href} className="title-10-nhdisplayroman">
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="services navigation">
            <h1 className="title-10-nhdisplaybold">Mapa do site</h1>
            <ul>
              {Services.map(({ id, title, href }) => {
                return (
                  <li key={id}>
                    <Link href={href} className="title-10-nhdisplayroman">
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="contact">
            <h1 className="title-10-nhdisplaybold">Contato</h1>

            <ul>
              <li>
                <Link href="/" className="title-10-nhdisplayroman">
                  <PhoneIcon />
                  (71) 996803158
                </Link>
              </li>

              <li>
                <Link href="/" className="title-10-nhdisplayroman icon">
                  <PhoneIcon />
                  (71) 996654435
                </Link>
              </li>

              <li>
                <Link href="/" className="title-10-nhdisplayroman">
                  <PinIcon />
                  Av Santos Dumont, 1883 Sala 532, 533 Centro - Salvador, BA
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="codie-area">
        <Link href="https://codie.digital/" className="codie-logo">
          <CodieLogo />
        </Link>
      </div>
    </S.Footer>
  );
}
