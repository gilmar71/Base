import { useState, useRef } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { linksMenu } from './data';

import { Container } from 'components/data/container';

import * as S from './styles';
import { MenuMobile } from './menuMobile';
import { NextImage } from 'components/data/NextImage';

interface CategoriesHeader {
  id: number;
  link?: string;
  href: string;
  categorias?: Categorias[];
  logo?: string;
}
interface Categorias {
  id: number;
  sublink: string;
  href: string;
}
interface HeaderProps {
  data: CategoriesHeader[];
  isBg?: boolean;
}

export function HeaderComponent({ data }: HeaderProps) {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  const router = useRouter();

  return (
    <S.Header>
      <Container>
        <Link href="/" className="logo" aria-label="logomarca da empresa">
          <NextImage src="/images/logo.webp" alt="logomarca da empresa" />
        </Link>

        <MenuMobile setStateMenu={setIsActive} menu={isActive} />

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

          <nav ref={dropDownRef} className={`menu`}>
            {data.map((categoria) => {
              return categoria.categorias ? (
                <span
                  key={'link-menu-' + categoria.id}
                  className="itens link-3-objective-medium"
                >
                  {categoria.link}
                  {categoria.categorias && (
                    <div className="subMenu-bg">
                      <ul className="sub-menu">
                        {categoria.categorias?.map((subCategoria) => {
                          return (
                            <li key={subCategoria.id + subCategoria.sublink}>
                              <Link
                                href={subCategoria.href}
                                className="link-3-objective-medium"
                              >
                                {subCategoria.sublink}
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
                  className={`itens link-3-objective-medium ${
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
