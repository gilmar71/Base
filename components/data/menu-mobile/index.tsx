import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { ICategoriesHeader } from 'src/interfaces/header';

import {
  PinIcon,
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  WhattsAppIcon,
  EmailEmptyIcon,
  FacebookNoBgIcon,
  InstagramEmptyIcon,
  CloseIcon,
  ArrowRightIcon,
} from 'components/icons';

import * as S from './styles';

interface MenuMobileProps {
  menu: boolean;
  data: ICategoriesHeader[];
  setStateMenu: React.Dispatch<boolean>;
}

export function MenuMobile({ menu, data, setStateMenu }: MenuMobileProps) {
  const [dropdown, setDropdown] = useState(false);
  const router = useRouter();

  const urlPage = router.query.url;
  return (
    <S.Menu className={`menuMobile ${menu ? 'active' : ''}`}>
      <div className="filter" onClick={() => setStateMenu(false)}></div>

      <div className="menu-mobile">
        <div className="close " onClick={() => setStateMenu(false)}>
          <h3 className="title-3 uppercase">Mapa do site</h3>

          <CloseIcon />
        </div>

        <nav className="link-1">
          {data.map((categoria, index) =>
            categoria.categorias ? (
              <span
                key={'link-menu-' + categoria.id + index}
                className={`dropdown ${
                  dropdown ? 'active' : ''
                } link-3 uppercase`}
                onClick={() => setDropdown(!dropdown)}
              >
                <div className="title">
                  {categoria.link}

                  <ArrowRightIcon />
                </div>

                {categoria.categorias && (
                  <div className="subMenu-bg">
                    {categoria.categorias?.map((subCategoria) => (
                      <Link
                        key={subCategoria.id + subCategoria.titulo}
                        href={{
                          pathname: '/servico/[url]',
                          query: {
                            url: subCategoria.url,
                          },
                        }}
                        className={`sub-link link-3 ${
                          urlPage === subCategoria.url ? 'active' : ''
                        }`}
                        onClick={() => setStateMenu(false)}
                      >
                        {subCategoria.titulo}
                      </Link>
                    ))}
                  </div>
                )}
              </span>
            ) : (
              <Link
                key={'link-menu-' + categoria.id}
                href={categoria.href}
                className={`link link-3 uppercase ${
                  router.pathname === categoria.href ? 'active' : ''
                }`}
              >
                {categoria.link}
              </Link>
            ),
          )}
          <div className="border"></div>

          <h3 className="title-3 uppercase">Contato</h3>

          <div className="actions-redes">
            <Link href="" target={'_blank'} className="link-redes">
              <InstagramEmptyIcon />
            </Link>

            <Link href="" target={'_blank'} className="link-redes">
              <FacebookNoBgIcon />
            </Link>

            <Link href="" target={'_blank'} className="link-redes">
              <WhattsAppIcon />
            </Link>

            <Link href="" target={'_blank'} className="link-redes">
              <EmailEmptyIcon />
            </Link>

            <Link href="" target={'_blank'} className="link-redes">
              <PinIcon />
            </Link>
          </div>
        </nav>
      </div>
    </S.Menu>
  );
}
