import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { linksMenu } from '../data';

import * as S from './styles';
import { CategoriesHeader } from '..';

interface MenuMobileProps {
  menu: boolean;
  setStateMenu: React.Dispatch<boolean>;
  data: CategoriesHeader[];
}

export function MenuMobile({ menu, data, setStateMenu }: MenuMobileProps) {
  const [dropdown, setDropdown] = useState('');
  const router = useRouter();

  return (
    <S.Menu className={`menuMobile ${menu ? 'active' : ''}`}>
      <div className="filter" onClick={() => setStateMenu(false)}></div>

      <div className="menu-mobile">
        <div className="close " onClick={() => setStateMenu(false)}>
          <h3 className="paragraph-2 uppercase">Mapa do site</h3>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
          </svg>
        </div>

        <nav className="link-1">
          {data.map((categoria, index) => {
            return categoria.categorias ? (
              <span
                key={'link-menu-' + categoria.id + index}
                className={`dropdown ${
                  categoria.link === dropdown
                    ? dropdown
                      ? 'active'
                      : 'false'
                    : ''
                } link-4`}
                onClick={() => setDropdown(categoria.link!)}
              >
                <div className="title">
                  {categoria.link}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                  >
                    <g>
                      <g transform="rotate(-90 4 6)">
                        <path
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="20"
                          d="M9 3v0L4 9v0l-5-6v0"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>

                {categoria.categorias && (
                  <div className="subMenu-bg">
                    {categoria.categorias?.map((subCategoria) => {
                      return (
                        <Link
                          href={subCategoria.href}
                          key={subCategoria.id + subCategoria.sublink}
                          className="sub-link link-4-objective-medium"
                        >
                          {subCategoria.sublink}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </span>
            ) : (
              <Link
                key={'link-menu-' + categoria.id}
                href={categoria.href}
                className={`link link-4 uppercase ${
                  router.pathname === categoria.href ? 'active' : ''
                }`}
              >
                {categoria.link}
              </Link>
            );
          })}
          <div className="border"></div>

          <h3 className="paragraph-2 uppercase">Contato</h3>

          <div className="actions-redes">
            <Link href="" target={'_blank'} className="link-redes">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </Link>

            <Link href="" target={'_blank'} className="link-redes">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </Link>

            <Link href="" target={'_blank'} className="link-redes">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <g>
                  <g>
                    <g>
                      <g>
                        <g>
                          <path d="M8 14.603a6.6 6.6 0 0 1-3.325-.899.696.696 0 0 0-.537-.07l-2.188.6.763-1.678a.7.7 0 0 0-.07-.698A6.552 6.552 0 0 1 1.397 8 6.61 6.61 0 0 1 8 1.398 6.61 6.61 0 0 1 14.603 8 6.61 6.61 0 0 1 8 14.603zM8 0C3.589 0 0 3.59 0 8a7.94 7.94 0 0 0 1.278 4.336L.063 15.013a.698.698 0 0 0 .82.963l3.349-.92A7.996 7.996 0 0 0 8 16c4.411 0 8-3.589 8-8 0-4.41-3.589-8-8-8z"></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M11.08 9.2c-.336-.2-.773-.425-1.168-.263-.303.124-.496.598-.693.841-.1.124-.22.144-.376.082-1.138-.454-2.01-1.214-2.638-2.26-.107-.163-.088-.292.04-.443.19-.223.429-.477.48-.778.051-.3-.09-.652-.214-.92-.16-.343-.337-.832-.68-1.025-.316-.179-.731-.079-1.012.15-.485.395-.72 1.014-.712 1.627.002.174.023.349.064.517.098.405.285.782.495 1.141.159.271.331.534.517.787a7.988 7.988 0 0 0 2.244 2.083c.438.268.91.503 1.399.665.547.181 1.036.37 1.628.257.62-.118 1.23-.501 1.476-1.099a.95.95 0 0 0 .069-.56c-.085-.386-.607-.615-.92-.802z"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </Link>

            <Link href="" target={'_blank'} className="link-redes">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="16"
                viewBox="0 0 18 16"
              >
                <g>
                  <g>
                    <g>
                      <path d="M15.557 1.778L8.943 7.7 2.232 1.778zM16 14.222H1.778V3.748l7.175 6.33L16 3.768zM0 .89V15.11c0 .491.398.889.889.889h16c.49 0 .889-.398.889-.889V.89a.889.889 0 0 0-.89-.889h-16A.889.889 0 0 0 0 .889z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </Link>

            <Link href="" target={'_blank'} className="link-redes">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="20"
                viewBox="0 0 18 20"
              >
                <g>
                  <g>
                    <g></g>
                    <g>
                      <path d="M9 11.83a3.64 3.64 0 1 1 0-7.28 3.64 3.64 0 0 1 0 7.28zm0-1.82a1.82 1.82 0 1 0 0-3.64 1.82 1.82 0 0 0 0 3.64zm0 9.763l-5.792-5.791a8.19 8.19 0 1 1 11.584 0zM9 17.2l4.505-4.505a6.37 6.37 0 1 0-9.01 0z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </Link>
          </div>
        </nav>
      </div>
    </S.Menu>
  );
}
