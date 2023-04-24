import styled from 'styled-components';

interface HeaderProps {
  isBg?: boolean;
  fixed: boolean;
}

export const Header = styled.header<HeaderProps>`
  position: fixed;
  width: 100%;
  padding: ${({ fixed }) => (fixed ? '' : '15px 0')};
  left: 0;
  z-index: 4;
  transition: 0.5s;
  background-color: ${({ fixed }) => (fixed ? '#393939' : '')};
  z-index: 99;

  .logo {
    max-width: 200px;
    aspect-ratio: 200/115;
    width: 100%;
    display: inline-flex;
  }

  .container {
    display: flex;
    align-items: center;
    gap: 250px;
    justify-content: space-between;
  }

  .menuContainer {
    width: calc(100% - 200px - 250px);
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
    color: var(--white);
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
      width: 240px;
      top: 25px;
    }

    .sub-menu {
      background-color: rgba(0, 0, 0, 0.5);
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
        color: var(--white);
        display: inline-flex;
        padding: 10px 18px;
      }
    }

    .svg-icon {
      stroke: var(--white);
      max-width: 10px;
      width: 100%;
      transition: 0.3s ease-in-out;
    }

    &:hover {
      color: var(--primary-color);

      .svg-icon {
        stroke: var(--primary);
        transform: rotate(180deg);
      }

      &::after {
        width: 100%;
      }

      .sub-menu {
        transform: rotateX(0);

        a:hover {
          background-color: var(--primary);
          color: var(--white);
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
      background-color: var(--white);
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
      max-width: 190px;
    }

    .container {
      gap: 220px;
    }

    .menuContainer {
      width: calc(100% - 190px - 220px);
    }

    .itens .subMenu-bg {
      width: 210px;
    }

    .button {
      max-width: 250px;
    }
  }

  @media only screen and (max-width: 1400px) {
    .logo {
      max-width: 170px;
    }

    .container {
      gap: 120px;
    }

    .menuContainer {
      width: calc(100% - 170px - 120px);
    }

    .itens .subMenu-bg {
      top: 20px;
      width: 200px;
    }

    .button {
      max-width: 220px;
    }
  }

  @media only screen and (max-width: 1200px) {
    .logo {
      max-width: 150px;
    }

    .container {
      gap: 100px;
    }

    .menuContainer {
      width: calc(100% - 150px - 100px);
    }

    .itens {
      gap: 5px;
      .subMenu-bg {
        width: 180px;
      }
    }

    .button {
      max-width: 200px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .logo {
      max-width: 140px;
    }

    .container {
      gap: 90px;
    }

    .menuContainer {
      width: calc(100% - 140px - 90px);
    }
  }

  @media only screen and (max-width: 900px) {
    .menu {
      display: none;
    }

    .menuContainer {
      background-color: unset;
      justify-content: flex-end;
    }

    .block-bar {
      display: flex;
    }
  }

  @media only screen and (max-width: 768px) {
  }

  @media only screen and (max-width: 500px) {
  }
  @media only screen and (max-width: 400px) {
    .menuContainer {
      width: 100%;
    }
    .container {
      gap: unset;
    }
  }
`;
