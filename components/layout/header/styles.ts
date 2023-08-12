import styled from 'styled-components';

interface HeaderProps {
  $noBg?: boolean;
  $fixed: boolean;
}

export const Header = styled.header<HeaderProps>`
  position: fixed;
  width: 100%;
  padding: 7.5px 0;
  left: 0;
  top: 0;
  z-index: 4;
  transition: 0.5s;
  background-color: ${({ $fixed, $noBg }) =>
    $fixed || $noBg ? '#f7f8fa' : 'rgba(0,0,0,0)'};
  z-index: 99;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);

  &:hover {
    background-color: ${({ $fixed }) => !$fixed && '#f7f8fa'};

    .itens {
      color: var(--text-color);
    }

    .block-bar {
      > div {
        background-color: var(--text-color);
      }
    }
  }

  .logo {
    width: 100%;
    max-width: 150px;
    aspect-ratio: 151/60;
    background-image: url('/images/logo-new.webp');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
  }

  .container {
    display: flex;
    align-items: center;
    width: 85%;
    max-width: unset;
    gap: 5%;
    justify-content: space-between;
    /* justify-content: ${({ $fixed, $noBg }) =>
      $fixed || $noBg ? 'flex-end' : 'space-between'}; */
    position: ${({ $fixed, $noBg }) => ($fixed || $noBg) && 'relative'};
  }

  .menuContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .menu {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .itens {
    color: ${({ $fixed, $noBg }) =>
      $fixed || $noBg ? 'var(--text-color)' : '#fff'};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    gap: 10px;

    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      background-color: currentColor;
      position: absolute;
      bottom: 2px;
      left: 0;
      transition: 0.3s;
    }

    &[data-aos][data-aos].aos-animate {
      transform: unset;
    }

    .subMenu-bg {
      transform: rotateX(-90deg);
      padding-top: 30px;
      position: absolute;
      left: 0;
      width: 220px;
      top: 25px;
    }

    .sub-menu {
      background-color: ${({ $fixed, $noBg }) =>
        $fixed || $noBg ? '#000' : 'rgba(0,0,0,0.5)'};
      transform: rotateX(-90deg);
      display: flex;
      flex-direction: column;
      gap: 8px;
      transform-origin: top;
      -webkit-transition: 0.4s;

      li {
        width: 100%;
      }

      a {
        width: 100%;
        color: #fff;
        display: inline-flex;
        padding: 10px 18px;
      }
    }

    .svg-icon {
      stroke: ${({ $fixed, $noBg }) => ($fixed || $noBg ? '#000' : '#fff')};
      max-width: 15px;
      width: 100%;
      transition: 0.3s ease-in-out;
    }

    &:hover {
      color: ${({ $fixed, $noBg }) =>
        $fixed || $noBg ? '#000' : 'var(--primary-color)'};

      .svg-icon {
        stroke: ${({ $fixed, $noBg }) =>
          $fixed || $noBg ? '#000' : 'var(--primary-color)'};
        transform: rotate(180deg);
      }

      &::after {
        width: 100%;
      }

      .sub-menu {
        transform: rotateX(0);

        a:hover {
          background-color: var(--primary-color);
          color: #fff;
          text-decoration: none;
        }
      }

      .subMenu-bg {
        transform: rotateX(0);
        z-index: 999;
      }
    }
  }

  .button-bag {
    max-width: 90px;
    gap: 7px;
    fill: #fff;
  }

  .bgMobile {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
    opacity: 0;
    display: none;
  }

  .block-bar {
    width: 35px;
    display: none;
    flex-direction: column;
    gap: 7px;
    background-color: unset;
    border: unset;
    padding: 0;

    > div {
      width: 100%;
      height: 3px;
      background-color: ${({ $fixed, $noBg }) =>
        $fixed || $noBg ? 'var(--text-color)' : '#fff'};
    }
  }

  /*Responsives*/

  @media only screen and (max-width: 1600px) {
    .container {
      width: 90%;
    }

    .itens .subMenu-bg {
      width: 355px;
    }
  }

  @media only screen and (max-width: 1400px) {
    .itens .subMenu-bg {
      top: 20px;
      width: 335px;
    }
  }

  @media only screen and (max-width: 1200px) {
    .container {
      width: 95%;
      gap: 3%;
    }

    .logo {
      max-width: 130px;
    }

    .itens {
      gap: 5px;

      .subMenu-bg {
        width: 320px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 15px 0;

    .logo {
      max-width: 130px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .menu {
      display: none;
    }

    .menuContainer {
      justify-content: space-between;
      flex-flow: row-reverse;
    }

    .block-bar {
      display: flex;
    }

    .hide-mobile {
      display: none;
    }

    .mobile {
      margin-left: 20px;
    }
  }

  @media only screen and (max-width: 900px) {
  }

  @media only screen and (max-width: 650px) {
    .logo {
      max-width: 115px;
    }
  }

  @media only screen and (max-width: 500px) {
  }

  @media only screen and (max-width: 390px) {
    .logo {
      max-width: 105px;
    }

    .block-bar {
      width: 30px;
    }
  }
`;
