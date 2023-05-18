import styled from 'styled-components';

export const Footer = styled.footer`
  position: relative;
  padding-top: 100px;
  background-image: linear-gradient(-74deg, #2508a1 0%, #e21776 100%);
  width: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transform-origin: top center;
  clippath: polygon(0% 10%, 100% 0%, 100% 100%, 0 100%);
  overflow: hidden;

  .detail-footer {
    position: absolute;
    right: -1.5vw;
    bottom: -6vw;
    width: 100%;
    max-width: 25vw;
    z-index: -1;
  }

  .container {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .logo {
    max-width: 210px;
    aspect-ratio: 210/150;
    width: 100%;
    display: inline-flex;
  }

  .nav-box {
    width: 100%;
    max-width: fit-content;
  }

  .navigation {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;

    li {
      display: flex;
    }
  }

  .title {
    color: #fff;

    & + * {
      margin-top: 30px;
    }
  }

  .socials {
    width: 100%;
    max-width: fit-content;
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: space-between;

    .svg-icon {
      transition: 0.3s;
      fill: #fff;
    }

    a:hover .svg-icon {
      fill: var(--tertiary-color);
    }
  }

  .link {
    position: relative;
    color: #fff;

    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      background-color: currentColor;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: 0.3s;
    }

    &:hover {
      color: var(--tertiary-color);

      &::after {
        width: 100%;
      }
    }
  }

  .codie-area {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .codie-logo .svg-icon {
    max-width: 80px;
    width: 100%;
    transition: 0.3s;
    fill: #fff;

    &:hover {
      fill: var(--primary-color);
    }
  }

  @media only screen and (max-width: 1600px) {
    .title + * {
      margin-top: 25px;
    }

    .navigation {
      gap: 15px;
    }
  }

  @media only screen and (max-width: 1400px) {
    .detail-footer {
      right: -2.8vw;
      bottom: -7vw;
      max-width: 30vw;
    }

    .logo {
      max-width: 180px;
    }

    .title + * {
      margin-top: 20px;
    }

    .navigation {
      gap: 12px;
    }
  }

  @media only screen and (max-width: 1200px) {
    padding-top: 80px;

    .navigation {
      gap: 10px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .socials .svg-icon {
      max-width: 18px;
    }
  }

  @media only screen and (max-width: 900px) {
    padding-top: 50px;
    clippath: polygon(0 2%, 100% 0%, 100% 100%, 0 100%);

    .detail-footer {
      bottom: 0;
      right: 0;
      max-width: 40vw;
    }

    .title {
      text-align: center;

      & + * {
        margin-top: 15px;
      }
    }

    .navigation {
      align-items: center;
      gap: 12px;
    }

    .nav-box {
      position: relative;

      &::after {
        content: '';
        position: absolute;
        width: 200px;
        height: 2px;
        background-color: #eee;
        bottom: -15px;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    .socials {
      flex-direction: unset;
    }

    .container {
      flex-direction: column;
      align-items: center;
      gap: 30px;
      padding-bottom: 30px;
    }

    .codie-logo .svg-icon {
      max-width: 60px;
    }
  }

  @media only screen and (max-width: 768px) {
  }

  @media only screen and (max-width: 650px) {
  }

  @media only screen and (max-width: 500px) {
    padding-top: 35px;

    .detail-footer {
      display: none;
    }

    .container {
      gap: 20px;
      padding-bottom: 15px;
    }

    .navigation {
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    .nav-box::after {
      bottom: -10px;
    }
  }

  @media only screen and (max-width: 390px) {
  }
`;
