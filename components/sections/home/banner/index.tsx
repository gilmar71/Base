/* Components */
import { Container } from 'components/data/container';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

/* Styles */
import * as S from './styles';

export interface Banner {
  id: number;
  title?: string;
  subtitle?: string;
  image: string;
}

interface BannerProps {
  listBanners: Banner[];
}

export function Banner({ listBanners }: BannerProps) {
  const banners: Banner[] = [
    {
      id: 1,
      image: '/images/home-banner.jpg',
    },
    {
      id: 2,
      image: '/images/home-banner.jpg',
    },
  ];
  window.onload = function () {
    const random = Math.floor(Math.random() * banners.length);

    document.body.style.backgroundImage = `url(${banners[random]})`;
  };

  return (
    <S.Banner>
      return (
      <div className="bg">
        <Link href="/" passHref>
          <a className="link-3-objective-medium phone" href="replaced">
            (43) 99646-3608
          </a>
        </Link>
        <div className="social">
          <Link href="/" passHref>
            <a className="link-3-objective-medium" href="replaced">
              facebook
            </a>
          </Link>
          <Link href="/" passHref>
            <a className="link-3-objective-medium" href="replaced">
              instagram
            </a>
          </Link>
        </div>
        <Container>
          <div className="titles">
            <h2 className="title-3-objective-regular">Um Novo</h2>
            <h1 className="title-1-objective-bold">Momento Codie</h1>

            <h3 className="title-10-objective-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="24"
                viewBox="0 0 18 24"
              >
                <defs>
                  <clipPath id="7kdwa">
                    <path d="M8 24a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8h1.846a8 8 0 0 1 8 8v8a8 8 0 0 1-8 8z" />
                  </clipPath>
                </defs>
                <g>
                  <g>
                    <path
                      fill="none"
                      stroke-miterlimit="20"
                      stroke-width="4"
                      d="M8 24a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8h1.846a8 8 0 0 1 8 8v8a8 8 0 0 1-8 8z"
                      clip-path='url("#7kdwa")'
                    />
                  </g>
                  <g>
                    <path
                      fill="none"
                      stroke-miterlimit="20"
                      stroke-width="2"
                      d="M8.923 6.462v4.923"
                    />
                  </g>
                </g>
              </svg>
              scroll para baixo
            </h3>
          </div>
        </Container>
      </div>
      );
    </S.Banner>
  );
}
