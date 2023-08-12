import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { MenuMobile } from 'codieweb/dist/cjs/components/data/menu-mobile';

import { ICategoriesHeader } from 'src/interfaces/IHeader';

import { NavDownIcon } from 'components/icons';
import { Container } from 'components/data';

import {
  whattsAppLink,
  emailLink,
  facebookLink,
  googleMapsLink,
  instagramLink,
  tikTokLink,
} from 'src/services/social-links';

import * as S from './styles';

interface Categorias {
  id: number;
  sublink: string;
  href: string;
}

interface HeaderProps {
  data: ICategoriesHeader[];
  noBg?: boolean;
  fixed: boolean;
}

export function HeaderComponent({ data, noBg, fixed }: HeaderProps) {
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  const router = useRouter();

  return (
    <S.Header $fixed={fixed} $noBg={noBg}>
      <Container>
        <Link
          href="/"
          className="logo"
          aria-label="logomarca da empresa"
        ></Link>

        <MenuMobile
          defaultFonts={{
            link: 'link-1',
            isUppercase: true,
          }}
          defaultBoxSocials={{
            srcLinks: {
              email: emailLink,
              whattsapp: whattsAppLink,
              facebook: facebookLink,
              instagram: instagramLink,
              maps: googleMapsLink,
              tiktok: tikTokLink,
            },
            boxStyles: {
              svgColor: 'var(--primary-color)',
            },
          }}
          data={data}
          setStateMenu={setIsActive}
          menu={isActive}
        />

        <div className="menuContainer">
          <button
            type="button"
            aria-label="botao para navegação mobile"
            onClick={onClick}
            className="block-bar"
          >
            <div></div>
            <div></div>
            <div></div>
          </button>

          <nav className="menu">
            {data.map((categoria) => {
              return categoria.categorias ? (
                <span
                  key={'link-menu-' + categoria.id}
                  className="itens link-1"
                >
                  {categoria.link}

                  <NavDownIcon />

                  {categoria.categorias && (
                    <div className="subMenu-bg">
                      <ul className="sub-menu">
                        {categoria.categorias.map((subCategoria) => {
                          return (
                            <li key={subCategoria.id + subCategoria.titulo}>
                              <Link
                                href={{
                                  pathname: '/[url]',
                                  query: {
                                    url: subCategoria.url,
                                  },
                                }}
                                className="link-1"
                              >
                                {subCategoria.titulo}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </span>
              ) : (
                <Link
                  key={'link-menu-' + categoria.id}
                  href={categoria.href!}
                  className={`itens link-1 ${
                    router.pathname === categoria.href ? 'active' : ''
                  }`}
                >
                  {categoria.link}
                </Link>
              );
            })}
          </nav>
        </div>
      </Container>
    </S.Header>
  );
}
