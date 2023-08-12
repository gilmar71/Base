import styled from 'styled-components';

export const Footer = styled.footer`
  position: relative;
  padding: 60px 0 110px;
  width: 100%;
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }

  .logo {
    max-width: 150px;
    aspect-ratio: 151/60;
    width: 100%;
    display: inline-flex;

    a {
      width: 100%;
      aspect-ratio: inherit;
    }

    img {
      object-fit: contain;
    }
  }

  .box-links {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .box-socials {
    max-width: fit-content;
    gap: 1.5vw;
  }

  .codie-logo {
    max-width: 60px;
    width: 100%;
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 160/49;
    fill: #fff;
    transition: 0.3s;

    &:hover {
      fill: var(--bt-linear-gradient-1);
    }
  }

  @media only screen and (max-width: 1600px) {
  }

  @media only screen and (max-width: 1400px) {
    padding: 60px 0 90px;
  }

  @media only screen and (max-width: 1200px) {
    padding: 60px 0;

    .container {
      gap: 30px;
    }

    .box-links {
      flex-direction: column;
      gap: 20px;
    }

    .box-socials {
      gap: 25px;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 50px 0 60px;

    .codie-logo {
      max-width: 50px;
    }
  }

  @media only screen and (max-width: 900px) {
    padding: 40px 0 60px;

    .container,
    .box-links {
      gap: 25px;
    }

    .box-socials {
      .link-redes,
      svg {
        width: 18px;
        height: 18px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 30px 0 65px;
  }

  @media only screen and (max-width: 650px) {
  }

  @media only screen and (max-width: 500px) {
    padding: 30px 0 60px;
  }

  @media only screen and (max-width: 390px) {
  }
`;
