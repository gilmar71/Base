import styled from 'styled-components';

export const Footer = styled.footer`
  position: relative;
  padding-top: clamp(50px, 5.5vw, 80px);

  .container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 50px;
  }

  .logo {
    max-width: 200px;
    aspect-ratio: 200/115;
    width: 100%;
    display: inline-flex;
  }

  .navigation {
    width: 100%;
    max-width: 560px;
    display: flex;
    justify-content: space-between;
    gap: 30px;
  }

  .socials {
    width: 100%;
    max-width: 130px;
    display: flex;
    justify-content: space-between;

    .svg-icon {
      fill: #f90;
    }

    a:hover {
      .svg-icon {
        fill: #fff;
      }
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
      color: var(--primary-color);

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
  }

  @media only screen and (max-width: 1400px) {
    .logo {
      max-width: 150px;
    }
  }

  @media only screen and (max-width: 1200px) {
    .navigation {
      max-width: 460px;
    }

    .socials {
      max-width: 110px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .navigation {
      max-width: 420px;
    }

    .socials {
      max-width: 90px;

      .svg-icon {
        max-width: 18px;
      }
    }

    .container {
      padding-bottom: 30px;
    }
  }

  @media only screen and (max-width: 900px) {
    .logo {
      max-width: 130px;
    }

    .navigation {
      max-width: 370px;
    }

    .socials .svg-icon {
      max-width: 17px;
    }

    .container {
      padding-bottom: 10px;
    }

    .codie-logo .svg-icon {
      max-width: 60px;
    }
  }

  @media only screen and (max-width: 768px) {
    padding-top: 30px;

    .container {
      flex-direction: column;
      gap: 30px;
    }

    .logo + * {
      margin-top: 15px;
    }
  }

  @media only screen and (max-width: 650px) {
  }

  @media only screen and (max-width: 500px) {
    .container {
      gap: 15px;
    }

    .navigation {
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
  }

  @media only screen and (max-width: 400px) {
  }
`;
