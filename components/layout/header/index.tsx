import { useState, useRef } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { linksMenu } from './data';

import { Container } from 'components/data/container';

import * as S from './styles';
import { MenuMobile } from './menuMobile';
import { NextImage } from 'components/data/NextImage';
import { ButtonComponent } from 'components/data';
import { LogoLightIcon } from 'components/icons';

export interface CategoriesHeader {
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
  fixed: boolean;
}

export function HeaderComponent({ data, fixed }: HeaderProps) {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  const router = useRouter();

  return (
    <S.Header fixed={fixed}>
      <Container>
        <Link href="/" className="logo" aria-label="logomarca da empresa">
          <LogoLightIcon />
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

          <nav ref={dropDownRef} className={`menu`}>
            {data.map((categoria) => {
              return categoria.categorias ? (
                <span
                  key={'link-menu-' + categoria.id}
                  className="itens link-3 uppercase"
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
                                className="link-3 uppercase"
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
                  className={`itens link-3 uppercase ${
                    router.pathname === categoria.href ? 'active' : ''
                  }`}
                >
                  {categoria.link}
                </Link>
              );
            })}

            <ButtonComponent
              text={'Entre em contato'}
              backgroundColor
              href="/"
            />
          </nav>
        </div>
      </Container>
    </S.Header>
  );
}
