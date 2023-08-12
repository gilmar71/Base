import styled from 'styled-components';

export const BlogPage = styled.section`
  .banner-blog {
    height: unset;
    background: none;

    &::after {
      display: none;
    }

    h1 {
      font-family: 'Montserrat-Bold';
      text-transform: uppercase;
      color: var(--primary-color);
    }
  }

  .show-mobile {
    display: none;
  }

  @media only screen and (max-width: 1600px) {
    padding-top: 150px;
  }

  @media only screen and (max-width: 1400px) {
    padding-top: 120px;
  }

  @media only screen and (max-width: 1200px) {
    padding-top: 100px;
  }

  @media only screen and (max-width: 1024px) {
  }

  @media only screen and (max-width: 900px) {
  }

  @media only screen and (max-width: 768px) {
  }

  @media only screen and (max-width: 650px) {
  }

  @media only screen and (max-width: 500px) {
  }

  @media only screen and (max-width: 390px) {
  }
`;
