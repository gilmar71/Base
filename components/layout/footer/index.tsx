import Link from 'next/link';

import { Container, NextImage } from 'components/data';

import {
  CodieIcon,
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
} from 'components/icons';
import { linksContact, linksSuporte } from '../header/data';

import { linksMenuFooter } from './data';

import * as S from './styles';

export function FooterComponent() {
  return (
    <S.Footer>
      <Container>
        <Link href="/" className="logo">
          <NextImage src={'/images/logo.webp'} alt={'logomarca'} />
        </Link>

        <div className="nav-box">
          <h3 className="link-5 uppercase title">Menu</h3>
          <ul className="navigation">
            {linksMenuFooter.map((link, index) => (
              <li key={link.link + index}>
                <Link className="link-5 link " href={link.href}>
                  {link.link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-box">
          <h3 className="link-5 uppercase title">Contato</h3>
          <ul className="navigation">
            {linksContact.map((link, index) => (
              <li key={link.link + index}>
                <Link className="link-5 link " href={link.href}>
                  {link.link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-box">
          <h3 className="link-5 uppercase title">Suporte</h3>
          <ul className="navigation">
            {linksSuporte.map((link, index) => (
              <li key={link.link + index}>
                <Link className="link-5 link " href={link.href}>
                  {link.link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

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
