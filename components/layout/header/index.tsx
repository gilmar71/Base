import { useState, useRef } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { ICategoriesHeader } from 'src/interfaces/header';

import { NavDownIcon } from 'components/icons';
import { Container, MenuMobile, NextImage } from 'components/data';

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
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  const router = useRouter();

  const urlPage = router.query.url;

  return (
    <S.Header fixed={fixed} noBg={noBg}>
      <Container>
        <Link href="/" className="logo" aria-label="logomarca da empresa">
          <NextImage src={'/images/logo.webp'} alt={'logomarca'} />
        </Link>

        <MenuMobile data={data} setStateMenu={setIsActive} menu={isActive} />

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

          <nav ref={dropDownRef} className="menu">
            {data.map((categoria) => {
              return categoria.categorias ? (
                <span
                  key={'link-menu-' + categoria.id}
                  className="itens link-3 uppercase"
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
                                  pathname: '/servico/[url]',
                                  query: {
                                    url: subCategoria.url,
                                  },
                                }}
                                className="link-3 uppercase"
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
                  href={categoria.href}
                  className={`itens link-3 uppercase ${
                    router.pathname === categoria.href ? 'active' : ''
                  }`}
                >
                  {categoria.link}
                </Link>
              );
            })}

            {/* <ButtonComponent
              text={'Entre em contato'}
              backgroundColor
              href="/"
            /> */}
          </nav>
        </div>
      </Container>
    </S.Header>
  );
}
