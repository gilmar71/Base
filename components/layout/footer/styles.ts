import styled from 'styled-components';

export const Footer = styled.footer`
  position: relative;
  padding-top: clamp(30px, 5.5vw, 80px);
  background-color: var(--white);

  .box-footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .box-logo {
    bottom: 0;
    max-width: 480px;
    aspect-ratio: 480/523;
    width: 100%;
    background-color: var(--primary);
    padding: 85px;
    display: flex;
    flex-direction: column;
    z-index: 10;
    gap: 60px;
    margin-bottom: -57px;
    margin-top: -160px;

    .logo {
      max-width: 260px;
      width: 100%;
      aspect-ratio: 260/68;
    }

    span {
      color: var(--white);
    }
  }

  .navigation {
    display: flex;
    flex-direction: column;
    gap: 7px;

    ul {
      display: flex;
      flex-direction: column;
      gap: 5px;

      a {
        position: relative;
        color: var(--black);

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
          color: var(--primary);
          &::after {
            width: 100%;
          }
        }
      }
    }
  }

  .contact {
    max-width: 200px;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 7px;

    ul {
      display: flex;
      flex-direction: column;
      gap: 5px;

      a {
        position: relative;
        display: flex;
        gap: 5px;
        color: var(--black);

        .svg-icon {
          width: 100%;
          max-width: 20px;
        }

        &:hover {
          color: var(--primary);
        }
      }

      .icon .svg-icon {
        fill: transparent;
      }
    }
  }

  .codie-area {
    background-color: #f3f3f3;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .codie-logo .svg-icon {
    max-width: 80px;
    width: 100%;
    transition: 0.3s;

    &:hover {
      fill: var(--primary);
    }
  }

  @media only screen and (max-width: 1600px) {
    .box-logo {
      max-width: 440px;
      padding: 75px;
      margin-top: -140px;

      .logo {
        max-width: 250px;
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    .box-logo {
      max-width: 400px;
      padding: 65px;
      margin-top: -120px;

      .logo {
        max-width: 240px;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .box-logo {
      max-width: 350px;
      padding: 45px;
      margin-top: -100px;

      .logo {
        max-width: 220px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .box-logo {
      max-width: 300px;
      padding: 30px;
      gap: 30px;
      margin-top: -90px;

      .logo {
        max-width: 200px;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    .box-footer {
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }

    .navigation,
    .contact {
      align-items: center;
      text-align: center;
      justify-content: center;

      ul a {
        justify-content: center;
      }
    }

    .box-logo {
      max-width: 300px;
      padding: 30px;
      gap: 30px;
      margin-top: -80px;
      margin-bottom: 0;

      .logo {
        max-width: 200px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .codie-logo .svg-icon {
      max-width: 60px;
    }
  }

  @media only screen and (max-width: 650px) {
  }

  @media only screen and (max-width: 500px) {
    .contact ul a .svg-icon {
      max-width: 12px;
    }
  }

  @media only screen and (max-width: 400px) {
  }
`;
