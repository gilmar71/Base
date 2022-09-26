import styled from 'styled-components';

export const Header = styled.header`
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  z-index: 4;
  .logo {
    max-width: 160px;
    width: 100%;
    display: inline-flex;
    svg {
      fill: #fff;
    }
  }
  .container {
    display: flex;
    align-items: center;
    gap: 70px;
    justify-content: space-between;
  }
  .menuContainer {
    width: calc(100% - 160px - 70px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 28px;
  }
  .menu {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .itens {
    color: var(--white);
    display: inline-block;
    align-items: center;
    justify-content: center;
    padding: 15px 20px;
    border-radius: 28px;
    position: relative;
    cursor: pointer;
    &[data-aos][data-aos].aos-animate {
      transform: unset;
    }
    .subMenu-bg {
      transform: rotateX(-90deg);
      padding-top: 30px;
      position: absolute;
      left: 0;
      width: 260px;
      top: 35px;
    }
    .sub-menu {
      background-color: var(--white);
      transform: rotateX(-90deg);
      border-radius: 10px;
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
        color: var(--black);
        display: inline-flex;
        padding: 10px 18px;
        border-radius: 10px;
      }
    }
    &:hover {
      background-color: var(--white);
      color: var(--black);
      text-decoration: underline;
      .sub-menu {
        transform: rotateX(0);
        a:hover {
          background-color: var(--black);
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
  .menuButton {
    display: none;
    position: absolute;
    right: 20px;
    z-index: 1000;

    div {
      width: 37px;
      height: 3px;
      background-color: #000;
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
  .menuContainer.active {
    .menu {
      transform: translateX(0%);
      transition: 0.3s;
      opacity: 1;
      display: flex;
      background-color: #fff;
    }
    .menuButton {
      .bar1 {
        transform: rotate(-45deg) translate(-8px, 6px);
        background-color: #000;
      }
      .bar2 {
        display: none;
      }
      .bar3 {
        transform: rotate(45deg) translate(-3px, -2px);
        background-color: #000;
      }
    }
  }

  /*Responsives*/

  @media only screen and (max-width: 1600px) {
    .logo {
      max-width: 150px;
    }
    .container {
      gap: 60px;
    }
    .menuContainer {
      width: calc(100% - 150px - 60px);
    }
    .itens {
      padding: 15px 20px;
    }
  }
  @media only screen and (max-width: 1400px) {
    .logo {
      max-width: 140px;
    }
    .container {
      gap: 50px;
    }
    .menuContainer {
      width: calc(100% - 140px - 50px);
    }
    .itens {
      padding: 14px 18px;
      .subMenu-bg {
        top: 30px;
        width: 220px;
      }
    }
  }
  @media only screen and (max-width: 1200px) {
    .logo {
      max-width: 130px;
    }
    .container {
      gap: 30px;
    }
    .menuContainer {
      width: calc(100% - 130px - 30px);
    }
    .itens {
      padding: 12px 12px;
      .subMenu-bg {
        top: 25px;
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    .logo {
      max-width: 120px;
    }
    .container {
      gap: 20px;
    }
    .menuContainer {
      width: calc(100% - 120px - 20px);
    }
    .itens {
      padding: 12px 9px;
    }
  }
  @media only screen and (max-width: 900px) {
    .close-menu {
      display: block;
      position: absolute;
      top: 15px;
      right: 15px;
      color: var(--black);
      font-size: 25px;
    }
    .menuButton {
      display: inline-flex;
      flex-direction: column;
      border: none;
      background-color: unset;
    }
    .menu {
      position: fixed;
      display: flex;
      top: 0;
      right: 0;
      width: 280px;
      height: 100vh;
      flex-direction: column;
      padding-top: 120px;
      z-index: 100;
      background-color: var(--white-gray);
      gap: 15px;
      overflow-y: auto;
      transform: translateX(100%);
      -webkit-transition: 0.3s;
      opacity: 0;
      justify-content: flex-start;
    }
    .itens {
      width: 100%;
      display: inline-flex;
      color: var(--black);
      padding: 15px 25px;

      .subMenu-bg {
        transform: rotateX(-90deg);
        padding-top: 30px;
        position: absolute;
        left: 0;
        width: 100%;
        top: 20px;
      }
      .sub-menu {
        background-color: var(--black);
        a {
          color: var(--white);
          justify-content: center;
          text-decoration: none;
          &:hover {
            background-color: var(--white-gray);
            color: var(--black);
          }
        }
      }
      &:hover {
        background-color: var(--black);
        color: var(--white);
      }
    }
    .menuContainer {
      border: none;
      padding: 0;
      width: unset;
    }
    .menuContainer.active {
      .bgMobile {
        opacity: 1;
        display: block;
      }
    }
  }
  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 500px) {
  }
`;
