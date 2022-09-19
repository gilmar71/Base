import styled from 'styled-components';

export const Banner = styled.section`
  .bg {
    /* background-image: url('/images/home-banner.jpg'); */
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
  }
  .phone {
    position: absolute;
    left: 40px;
    top: 50%;
    color: var(--white);
    transform: rotate(-90deg);
    text-decoration: none;
  }
  .social {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: rotate(90deg);
    display: flex;
    gap: 40px;
    a {
      color: var(--white);
      text-decoration: none;
    }
  }
  .titles {
    padding-top: 380px;
    color: var(--white);
    line-height: normal;
    h1 + * {
      margin-top: 70px;
    }

    h3 {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 15px;
      svg {
        fill: var(--white);
        stroke: var(--white);
      }
    }
  }

  @media only screen and (max-width: 1600px) {
    .phone {
      left: 0;
    }
    .social {
      right: 0;
      gap: 35px;
    }
    .titles {
      padding-top: 380px;
      padding-left: 60px;
    }
  }
  @media only screen and (max-width: 1400px) {
  }
  @media only screen and (max-width: 1200px) {
  }
  @media only screen and (max-width: 1024px) {
  }
  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 500px) {
  }
`;
