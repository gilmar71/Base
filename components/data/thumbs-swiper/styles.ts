import styled from 'styled-components';

export const SliderGallery = styled.div`
  .box-main-swiper {
    position: relative;

    & + * {
      margin-top: 15px;
    }
  }

  .next-image {
    aspect-ratio: 1.75;
    border-radius: 10px;
    overflow: hidden;
  }

  .button-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    z-index: 2;
    stroke: var(--secondary-color);
    display: flex;

    .svg-icon {
      max-width: 16px;
      width: 100%;
    }
  }

  .nav-right-gallery {
    right: -30px;
  }

  .nav-left-gallery {
    left: -30px;
  }

  .swiper-pagination-main {
    position: absolute;
    bottom: -16px;
    display: none;
    justify-content: center;

    .pagination-bullet {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: var(--tertiary-color);
      margin: 0 5px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .pagination-bullet.swiper-pagination-bullet-active {
      background-color: var(--tertiary-color);
    }
  }

  @media only screen and (max-width: 1600px) {
  }

  @media only screen and (max-width: 1400px) {
  }

  @media only screen and (max-width: 1200px) {
  }

  @media only screen and (max-width: 1024px) {
    .button-nav .svg-icon {
      max-width: 12px;
    }
  }

  @media only screen and (max-width: 900px) {
  }

  @media only screen and (max-width: 768px) {
  }

  @media only screen and (max-width: 650px) {
    .box-main-swiper + * {
      margin-top: 10px;
    }

    .mini-swiper {
      display: none;
    }

    .swiper-pagination-main {
      display: flex;
    }

    .button-nav {
      display: none;
    }
  }

  @media only screen and (max-width: 500px) {
  }

  @media only screen and (max-width: 390px) {
  }
`;
