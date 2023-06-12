import { Swiper } from 'swiper/react';
import { Navigation, SwiperOptions } from 'swiper';

import { NavLeftIcon, NavRightIcon } from 'components/icons';

import * as S from './styles';
import { Error } from '../error-body';

interface IBoxSwiper {
  name: string;
  breakpoints?: {
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
  };
  hasPagination?: boolean;
  hasNavigation?: boolean;
  children: React.ReactNode;
  navColor?: string;
}

export function BoxSwiper({
  name,
  children,
  navColor,
  breakpoints,
  hasNavigation,
  hasPagination,
}: IBoxSwiper) {
  const defaultBreakpoints = {
    1400: { slidesPerView: 3, spaceBetween: 30 },
    1201: { slidesPerView: 3, spaceBetween: 20 },
    1025: { slidesPerView: 3, spaceBetween: 10 },
    769: { slidesPerView: 2, spaceBetween: 20 },
    651: { slidesPerView: 2, spaceBetween: 10 },
    0: { slidesPerView: 1, spaceBetween: 20 },
  };

  return (
    <Error name="box-swiper">
      <S.BoxSwiper
        className={`box-swiper ${name}`}
        $name={name}
        $navColor={navColor}
      >
        {hasNavigation && (
          <>
            <button
              type="button"
              className={`nav-left-${name} button-nav`}
              aria-label="botão de navegação esquerdo"
            >
              <NavLeftIcon />
            </button>

            <button
              type="button"
              className={`nav-right-${name} button-nav`}
              aria-label="botão de navegação direito"
            >
              <NavRightIcon />
            </button>
          </>
        )}

        {hasPagination && <div className={`swiper-pagination-${name}`}></div>}

        <Swiper
          className={`swiper-${name}`}
          slidesPerView="auto"
          navigation={{
            nextEl: `.nav-right-${name}`,
            prevEl: `.nav-left-${name}`,
          }}
          modules={[Navigation]}
          pagination={{
            el: `.swiper-pagination-${name}`,
            clickable: true,
            renderBullet: function (index, className) {
              return `<div class="${className} pagination-bullet"></div>`;
            },
            bulletClass: 'swiper-pagination-bullet',
          }}
          breakpoints={breakpoints ? breakpoints : defaultBreakpoints}
        >
          {children}
        </Swiper>
      </S.BoxSwiper>
    </Error>
  );
}
