/* Next/React */
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

/* Components */

/* Styles */
import * as S from './styles';
import { Container } from 'components/data/container';
import { NextImage } from 'components/data/NextImage';
import { ItensMenu } from './data';

interface CategoriesHeader {
  id: number;
  link: string;
  href: string;
  categorias?: Categorias[];
}
interface Categorias {
  id: number;
  sublink: string;
  href: string;
}
interface HeaderProps {
  data: CategoriesHeader[];
}

export function HeaderComponent({ data }: HeaderProps) {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  const router = useRouter();

  return (
    <S.Header>
      <Container>
        <Link href="/" passHref>
          <a
            href=""
            className="logo"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            {/* <NextImage src="" layout="fill" alt="logomarca" /> */}
          </a>
        </Link>
        <div className={`menuContainer ${isActive ? 'active' : 'disabled'}`}>
          <button
            type="button"
            aria-label="botao de navegacao mobile"
            onClick={onClick}
            className={`menuButton`}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </button>
          <div onClick={onClick} className={`bgMobile`}></div>

          <nav ref={dropDownRef} className={`menu`}>
            {data.map((categoria) => {
              return categoria.categorias ? (
                <span
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  key={'link-menu-' + categoria.id}
                  className="itens txt-sz-8-medium"
                >
                  {categoria.link}
                  {categoria.categorias && (
                    <div className="subMenu-bg">
                      <ul className="sub-menu">
                        {categoria.categorias?.map((subCategoria) => {
                          return (
                            <li key={subCategoria.id + subCategoria.sublink}>
                              <Link href={subCategoria.href} passHref>
                                <a className="txt-sz-8-medium" href="replaced">
                                  {subCategoria.sublink}
                                </a>
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
                  passHref
                >
                  <a
                    data-aos="fade-down"
                    data-aos-duration="1500"
                    onClick={onClick}
                    href=""
                    className={`itens link-3-objective-medium ${
                      router.asPath === categoria.href ? 'active' : ''
                    }`}
                  >
                    {categoria.link}
                  </a>
                </Link>
              );
            })}
          </nav>
        </div>
      </Container>
    </S.Header>
  );
}
