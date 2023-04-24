import { ButtonComponent } from 'components/data/button';
import { Container } from 'components/data/container';
import { NextImage } from 'components/data/NextImage';
import Link from 'next/link';

import * as S from './styles';
import { footerData } from './data';
import {
  CodieIcon,
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LogoLightIcon,
} from 'components/icons';
import { linksMenu } from '../header/data';

export function FooterComponent() {
  return (
    <S.Footer>
      <Container>
        <Link href="/" className="logo">
          <LogoLightIcon />
        </Link>

        <ul className="navigation">
          {linksMenu.map((link, index) => (
            <li key={link.link + index}>
              <Link className="link-3 link uppercase" href={link.href}>
                {link.link}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="socials">
          <li>
            <Link href={''}>
              <FacebookIcon />
            </Link>
          </li>

          <li>
            <Link href={''}>
              <EmailIcon />
            </Link>
          </li>

          <li>
            <Link href={''}>
              <InstagramIcon />
            </Link>
          </li>
        </ul>
      </Container>

      <div className="codie-area">
        <Link href="https://codie.digital/" className="codie-logo">
          <CodieIcon />
        </Link>
      </div>
    </S.Footer>
  );
}
