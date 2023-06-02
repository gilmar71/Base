import styled from 'styled-components';

interface IBoxSwiperStyles {
  $name: string;
  $navColor?: string;
}

export const BoxSwiper = styled.div<IBoxSwiperStyles>`
  width: 100%;
  position: relative;
  z-index: 5;

  .button-nav {
    width: 100%;
    max-width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    position: absolute;
    z-index: 1000;
    top: 50%;
    transform: translateY(-50%);

    .svg-icon {
      stroke: ${({ $navColor }) =>
        $navColor ? $navColor : 'var(--secondary-color)'};
      max-width: 20px;
      width: 100%;
    }
  }

  .nav-left-${({ $name }) => $name} {
    left: -50px;
  }

  .nav-right-${({ $name }) => $name} {
    right: -50px;
  }

  .swiper-pagination-${({ $name }) => $name} {
    position: absolute;
    display: none;
    justify-content: center;
    bottom: -20px;

    .pagination-bullet {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: ${({ $navColor }) =>
        $navColor ? $navColor : 'var(--primary-color)'};
      margin: 0 5px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .pagination-bullet.swiper-pagination-bullet-active {
      background-color: ${({ $navColor }) =>
        $navColor ? $navColor : 'var(--primary-color)'};
    }
  }

  @media only screen and (max-width: 1600px) {
    .nav-left-${({ $name }) => $name} {
      left: -45px;
    }

    .nav-right-${({ $name }) => $name} {
      right: -45px;
    }
  }

  @media only screen and (max-width: 1400px) {
    .button-nav .svg-icon {
      max-width: 16px;
    }

    .nav-left-${({ $name }) => $name} {
      left: -35px;
    }

    .nav-right-${({ $name }) => $name} {
      right: -35px;
    }
  }

  @media only screen and (max-width: 1200px) {
    .button-nav .svg-icon {
      max-width: 14px;
    }

    .nav-left-${({ $name }) => $name} {
      left: -25px;
    }

    .nav-right-${({ $name }) => $name} {
      right: -25px;
    }
  }

  @media only screen and (max-width: 1024px) {
  }

  @media only screen and (max-width: 900px) {
  }

  @media only screen and (max-width: 768px) {
  }

  @media only screen and (max-width: 650px) {
    .swiper-pagination-${({ $name }) => $name} {
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
