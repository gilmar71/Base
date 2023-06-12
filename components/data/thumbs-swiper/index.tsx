import { Swiper, SwiperSlide } from 'swiper/react';
import * as S from './styles';
import { NextImage } from '../next-image';
import { NavLeftIcon, NavRightIcon } from 'components/icons';
import { useLayoutEffect, useRef, useState } from 'react';
import { IPageInformations } from 'src/interfaces/pageInformations';
import { Error } from '../error-body';

interface ISliderGallery {
  data: IPageInformations;
}

interface Images {
  image: string;
}

export function SliderGallery({ data }: ISliderGallery) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>();
  const swiper1Ref = useRef<any>(null);
  const swiper2Ref = useRef();
  useLayoutEffect(() => {
    if (swiper1Ref.current !== null) {
      swiper1Ref.current.controller.control = swiper2Ref.current;
    }
  }, []);

  return (
    <Error name="thumbs-swiper">
      <S.SliderGallery className="box-swiper">
        <div className="box-main-swiper">
          <button
            type="button"
            className="nav-left-gallery button-nav"
            aria-label="botão de navegação esquerdo"
          >
            <NavLeftIcon />
          </button>

          <button
            type="button"
            className="nav-right-gallery button-nav"
            aria-label="botão de navegação direito"
          >
            <NavRightIcon />
          </button>

          <div className="swiper-pagination-main"></div>

          <Swiper
            className="main-swiper"
            slidesPerView={1}
            initialSlide={0}
            onSwiper={(swiper) => {
              if (swiper1Ref.current !== null) {
                swiper1Ref.current = swiper;
              }
            }}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            pagination={{
              el: '.swiper-pagination-main',
              clickable: true,
              renderBullet: function (index, className) {
                return `<div class="${className} pagination-bullet"></div>`;
              },
              bulletClass: 'swiper-pagination-bullet',
            }}
            navigation={{
              nextEl: '.nav-right-gallery',
              prevEl: '.nav-left-gallery',
            }}
          >
            {/* {data.imagens.map((images, index) => {
            return (
              <SwiperSlide key={images.guid + index}>
                <NextImage
                  src={data.detail.id + '/' + images.fileData}
                  alt={'imagem que representa um evento'}
                />
              </SwiperSlide>
            );
          })} */}
          </Swiper>
        </div>

        <Swiper
          onSwiper={setThumbsSwiper}
          initialSlide={0}
          freeMode={true}
          watchSlidesProgress={true}
          slidesPerView={5}
          spaceBetween={15}
          className="mini-swiper"
          breakpoints={{
            1400: { slidesPerView: 5 },
            1201: { slidesPerView: 4 },
            769: { slidesPerView: 3 },
            0: { slidesPerView: 2, spaceBetween: 10 },
          }}
        >
          {/* {data.imagens.map((images, index) => {
          return (
            <SwiperSlide key={images.guid + index}>
              <NextImage
                src={data.detail.id + '/' + images.fileData}
                alt={'imagem que representa um evento'}
              />
            </SwiperSlide>
          );
        })} */}
        </Swiper>
      </S.SliderGallery>
    </Error>
  );
}
