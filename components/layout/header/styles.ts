import styled from 'styled-components';

interface HeaderProps {
  noBg?: boolean;
  fixed: boolean;
}

export const Header = styled.header<HeaderProps>`
  position: fixed;
  width: 100%;
  padding: ${({ fixed }) => (fixed ? '20px 0' : '35px 0')};
  left: 0;
  z-index: 4;
  transition: 0.5s;
  background-image: ${({ fixed, noBg }) =>
    (fixed || noBg) && `linear-gradient(-87deg, #670d92 0%, #e21776 100%)`};
  z-index: 99;

  .logo {
    max-width: ${({ fixed, noBg }) =>
      fixed ? '190px' : noBg ? '284px' : '224px'};
    aspect-ratio: ${({ fixed, noBg }) =>
      fixed || noBg ? '284/210' : '224/160'};
    width: 100%;
    display: inline-flex;
    position: ${({ fixed, noBg }) => (fixed || noBg) && 'absolute'};
    background-color: ${({ fixed, noBg }) =>
      (fixed || noBg) && 'var(--tertiary-color)'};
    padding: ${({ fixed, noBg }) => (fixed || noBg) && '25px'};
    top: ${({ fixed, noBg }) => (fixed ? '-20px' : noBg && '-35px')};
    left: ${({ fixed, noBg }) => (fixed || noBg) && '0'};
    align-items: ${({ fixed, noBg }) => (fixed || noBg) && 'center'};
    border-radius: ${({ fixed, noBg }) => (fixed || noBg) && '0 0 35px 35px'};

    .next-image {
      aspect-ratio: 224/160;
    }
  }

  .container {
    display: flex;
    align-items: center;
    gap: 300px;
    justify-content: ${({ fixed, noBg }) =>
      fixed || noBg ? 'flex-end' : 'space-between'};
    position: ${({ fixed, noBg }) => (fixed || noBg) && 'relative'};
  }

  .menuContainer {
    width: calc(100% - 224px - 300px);
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
    color: #fff;
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
      width: 380px;
      top: 25px;
    }

    .sub-menu {
      background-color: ${({ fixed, noBg }) =>
        fixed || noBg ? '#000' : 'rgba(0,0,0,0.5)'};
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
      stroke: #fff;
      max-width: 15px;
      width: 100%;
      transition: 0.3s ease-in-out;
    }

    &:hover {
      color: ${({ fixed, noBg }) =>
        fixed || noBg ? '#000' : 'var(--tertiary-color)'};

      .svg-icon {
        stroke: ${({ fixed, noBg }) =>
          fixed || noBg ? '#000' : 'var(--tertiary-color)'};
        transform: rotate(180deg);
      }

      &::after {
        width: 100%;
      }

      .sub-menu {
        transform: rotateX(0);

        a:hover {
          background-color: var(--tertiary-color);
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

  .button {
    max-width: 275px;
  }

  .menuButton {
    display: none;
    position: absolute;
    right: 20px;
    z-index: 1000;

    div {
      width: 37px;
      height: 3px;
      background-color: #fff;
      transition: 0.3s;
    }

    div + div {
      margin-top: 10px;
    }
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
    width: 40px;
    display: none;
    flex-direction: column;
    gap: 7px;
    background-color: unset;
    border: unset;

    > div {
      width: 100%;
      height: 3px;
      background-color: #fff;
    }
  }

  /*Responsives*/

  @media only screen and (max-width: 1600px) {
    .logo {
      max-width: ${({ fixed, noBg }) =>
        fixed ? '180px' : noBg ? '240px' : '190px'};
    }

    .container {
      gap: 280px;
    }

    .menuContainer {
      width: calc(100% - 190px - 280px);
    }

    .itens .subMenu-bg {
      width: 355px;
    }

    .button {
      max-width: 250px;
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: ${({ fixed }) => (fixed ? '20px 0' : '25px 0')};

    .logo {
      max-width: ${({ fixed, noBg }) =>
        fixed ? '170px' : noBg ? '210px' : '170px'};
      top: ${({ fixed, noBg }) => (fixed ? '-20px' : noBg && '-25px')};
    }

    .container {
      gap: 260px;
    }

    .menuContainer {
      width: calc(100% - 170px - 260px);
    }

    .itens .subMenu-bg {
      top: 20px;
      width: 335px;
    }

    .button {
      max-width: 220px;
    }
  }

  @media only screen and (max-width: 1200px) {
    .logo {
      max-width: ${({ fixed, noBg }) =>
        fixed ? '170px' : noBg ? '190px' : '170px'};
    }

    .container {
      gap: 220px;
    }

    .menuContainer {
      width: calc(100% - 150px - 220px);
    }

    .itens {
      gap: 5px;

      .subMenu-bg {
        width: 320px;
      }
    }

    .button {
      max-width: 200px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .logo {
      max-width: ${({ fixed, noBg }) =>
        fixed ? '160px' : noBg ? '180px' : '140px'};
    }

    .container {
      gap: 170px;
    }

    .menuContainer {
      width: calc(100% - 140px - 170px);
    }
  }

  @media only screen and (max-width: 900px) {
    padding: ${({ fixed }) => (fixed ? '15px 0' : '25px 0')};

    .logo {
      max-width: ${({ fixed }) => (fixed ? '150px' : '160px')};
      position: absolute;
      top: ${({ fixed, noBg }) => (fixed ? '-15px' : noBg ? '-25px' : '12px')};
      padding: ${({ fixed, noBg }) => (fixed || noBg) && '20px'};
      left: 50%;
      transform: translateX(-50%);
    }

    .container {
      justify-content: flex-end;
    }

    .menu {
      display: none;
    }

    .menuContainer {
      background-color: unset;
      justify-content: flex-end;
      width: 100%;
      max-width: fit-content;
    }

    .block-bar {
      display: flex;
    }
  }

  @media only screen and (max-width: 768px) {
  }

  @media only screen and (max-width: 500px) {
    padding: ${({ fixed }) => (fixed ? '15px 0' : '20px 0')};

    .logo {
      max-width: ${({ fixed }) => (fixed ? '120px' : '140px')};
      top: ${({ fixed, noBg }) => (fixed ? '-20px' : noBg ? '-20px' : '12px')};
    }
  }

  @media only screen and (max-width: 390px) {
    padding: ${({ fixed }) => (fixed ? '15px 0' : '15px 0')};

    .logo {
      max-width: ${({ fixed }) => (fixed ? '110px' : '130px')};
      padding: ${({ fixed, noBg }) => (fixed || noBg) && '15px'};
    }

    .menuContainer {
      width: 100%;
    }

    .container {
      gap: unset;
    }
  }
`;
